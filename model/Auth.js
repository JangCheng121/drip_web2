import {httpReq, reqInit} from "./Req"
import {createUUID, drip_log} from "../lib/tool"
import hex_md5 from "md5"
import {dataService} from '../model/DataService'
import * as System from "../redux/modules/system";
import * as User from "../redux/modules/users";

let vm;

export default class Auth {
    static instance = null;

    ai = {user_id: null}; //auth info: 가입자의 인증정보

    static getInstance() {
        if (Auth.instance === null) {
            Auth.instance = new Auth();
            vm = Auth.instance
        }
        return this.instance;
    }

    doAuth(type = '') {
        if (!this.ai.user_id) type = 'init';
        dataService.doAuthState = true;

        if (type === 'init') {
            reqInit('');
        }

        return new Promise(function (resolve, reject) {
            if (type === 'init') {
                //계정을 새로 받는 경우
                vm.newGuest()
                    .then((res) => {
                        return vm.procAuth(type)
                    })
                    .then((res) => resolve(res))
                    .catch((e) => {
                        reject(e)
                    })
            } else { //이전 계정으로 인증
                vm.procAuth()
                    .then((res) => resolve(res))
                    .catch((e) => {
                        reject(e)
                    })
            }
        })
    }

    newGuest() {
        return new Promise(function (resolve, reject) {
            //이 가입자에 고유한 키를 생성한다. 초기에 한번만 생성한다.
            vm.ai = {user_id: null, uuid: createUUID()}
            httpReq('/account/guest_auth', 'post', {id: vm.ai.user_id, uuid: vm.ai.uuid})
                .then((response) => {
                    if (response.result === 'ok') {
                        vm.ai.user_id = response.user_id
                        vm.ai.authkey = response.authkey
                        resolve(response)
                    } else {
                        throw new Error(response['msg'])
                    }
                })
                .catch((e) => {
                    reject(e)
                })
        })
    }

    getOnePass() {
        return new Promise(function (resolve, reject) {
            httpReq('/account/auth1', 'post', {uuid: vm.ai.user_id})
                .then((res) => {
                    console.log('getonepass ok', res);
                    if (res.user_id) {
                        vm.ai.user_id = res.user_id;
                    }
                    if (res.onepass !== undefined) {
                        resolve(res.onepass)
                    } else {
                        let msg = 'auth1 fail user_id: ' + vm.ai.user_id
                        throw new Error(msg)
                    }
                })
                .catch((e) => {
                    console.log("onepass Error");
                    reject(e)
                })
        })
    }

    getAuthToken(onepass) {
        let msg
        return new Promise(function (resolve, reject) {
            httpReq('/account/auth2', 'post', {
                user_id: vm.ai.user_id,
                token: hex_md5(vm.ai.user_id + vm.ai.authkey + onepass)
            })
                .then((res) => {
                    if (res.token) {
                        drip_log(3, "auth2: " + vm.ai.user_id + ":" + res.token);
                        resolve(res.token)
                    } else {
                        msg = 'auth2 fail user_id: ' + vm.ai.user_id;
                        drip_log(1, msg)
                        throw new Error(msg)
                    }
                })
                .catch((e) => reject(e))
        })
    }

    setAi(data) {
        vm.ai.user_id = data.user_id;
        vm.ai.token = data.token;
        vm.ai.isAuth = true;
        vm.ai.role = 'member';
        vm.ai.authkey = data.password;
        vm.ai.uuid = data.uuid;
        dataService.store.dispatch(System.setAI(vm.ai));
    }

    async setMI(user_id) {
        let myInfo = await User.get_user(user_id, 'init');
        dataService.store.dispatch(System.setMI(myInfo));
        dataService.store.dispatch(User.set(myInfo.id, myInfo));
    }
    async setInfo(user_id, token) {
        let myInfo = await User.get_user(user_id, 'init');
        dataService.store.dispatch(System.setMI(myInfo));
        dataService.store.dispatch(User.set(myInfo.id, myInfo));

        vm.ai.user_id = myInfo.id;
        vm.ai.token = token;
        vm.ai.isAuth = true;
        vm.ai.role = 'member';
        vm.ai.authkey = myInfo.password;
        vm.ai.uuid = myInfo.uuid;
        dataService.store.dispatch(System.setAI(vm.ai));
    }

    procAuth = () => {

        return new Promise(async function (resolve, reject) {
            if (!vm.ai.user_id) {
                throw new Error('no auth data')
            }

            try {
                let onePass = await vm.getOnePass();
                let token = await vm.getAuthToken(onePass);
                vm.ai.token = token;
                dataService.init();
                vm.setInfo(vm.ai.user_id, token);
                dataService.doAuthState = false;
                resolve();
            } catch (e) {
                dataService.doAuthState = false;
                reject(e)
            }
        })
    }

    doLogin(uuid, password) {
        return new Promise(function (resolve, reject) {
            vm.ai.user_id = uuid;
            vm.ai.authkey = password;
            vm.procAuth()
                .then(
                    (res) => {
                        resolve(res);
                    }
                )
                .catch(
                    (err) => {reject(err)}
                );
        });


    }
}

export const auth = Auth.getInstance();
