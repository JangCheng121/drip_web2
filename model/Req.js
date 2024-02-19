import axios from 'axios';
import {drip_log} from "../lib/tool";
import * as Tool from "../lib/tool";
import {dataService} from "./DataService";
import {config} from "../config/config"
import {auth} from "./Auth"
import Router from 'next/router';

export let axiosInstance = null;

const TIMEOUT = 15000; 
export function reqInit(token) {
    console.log("init axiosInstance");
    axiosInstance = axios.create({
        baseURL: config.apiUrl,
        timeout: TIMEOUT,
        headers: {'authorization': token},
    });
}

export function httpReq(url, method, params, haveHeader = false) {

    console.log("+++++" + url);
    let p = (method === 'get') ? {params: params} : params;
    return new Promise(function (resolve, reject) {
        if (!axiosInstance) {
            console.log('axiosInstance undefined');
            reject('req fail');
            // Router.pushRoute('/login');
        }

        axiosInstance[method](config.apiUrl + url, p)
            .then((res) => {
                if (haveHeader)
                    resolve(res);
                else
                    resolve(res.data);
            })
            .catch((err) => {
                console.log('httpReq error================' + err);
                if (err.response && err.response.status <= 499 && err.response.status >= 400) {
                    let status = err.response.status;
                    let data = err.response.data;
                    console.log('httpReq error======err.response.status <= 499 && err.response.status >= 400==========', data);

                    if (status == 403) {
                        if (data === 'invalid ip') {
                            console.log('dataService.doAuthState====', dataService.doAuthState);
                            if (!dataService.doAuthState) {
                                auth.doAuth('init').then(res => {
                                    console.log('ipChange res???????????????????????????')
                                }, err => {
                                    console.log('ipChange err+++++++++++++++++++++++++++')
                                })
                            }
                        } else if (data === 'invalid user') {
                            console.log('invalid user ||||||||||||||||||||||');
                            Router.pushRoute('/login');
                        }

                    } else if (status == 401) {
                        if (data === "token mismatched") {
                            console.log('token mismatched|||||||||||||||');
                            Router.pushRoute('/login');
                        } else if (data === 'you are in blacklist') {
                            alert("당신은 블랙리스트에 올랐습니다.");
                        }
                    } else if (status == 418) {
                        alert("서비스가 잠시 중지되였습니다.")
                    }
                } else if (err.message === 'timeout of 15000ms exceeded') {
                    // Router.pushRoute('/login');
                    console.log('httpReq error======timeout of 15000ms exceeded===========');
                }
                reject(err)
            })
    })
}

/**
 * 배렬값을 가지는 자료에 대한 추가 혹은 삭제 동작을 진행한다.
 * @param collection 추가/삭제를 진행하게 될 db콜렉션
 * @param method    추가인가 삭제인가 "add"/"remove"값을 가진다.
 * @param id        조작을 진행하게 될 collection의 해당 document id
 * @param field     배렬 document
 * @param value     추가 혹은 삭제할 값
 * @returns {Promise<*>} 결과 document
 */
export function updateArray(collection, method, id, field, value) {
    let api = `/api/${collection}/${id}`;
    let updateMethod = (method === "add") ? "$push" : "$pull";
    let reqParam = {
        isCustom: true,
        filter: `{"id":"${id}"}`,
        update: `{"${updateMethod}" : { "${field}": "${value}" } }`,
    }
    return httpReq(api, 'put', reqParam);
}

/**
 * 자료값에 대한 수정작업을 진행한다.
 * @param collection    추가/삭제를 진행하게 될 db콜렉션
 * @param id            조작을 진행하게 될 collection의 해당 document id
 * @param field         변경할 field
 * @param value         증가값
 */
export function increase(collection, id, field, value) {
    let api = `/api/${collection}/${id}`;
    let reqParam = {
        isCustom: true,
        filter: `{"id":"${id}"}`,
        update: `{"$inc":{"${field}":"${value}"}}`,
    }
    return httpReq(api, 'put', reqParam);
}

/**
 * 배렬안의 값과 같은 항목을 가진 자료들을 얻는다.
 * @param collection    콜렉션이름
 * @param field         비교를 진행할 항목
 * @param array         자료배렬
 * @returns {*|Promise<any>|Promise<*>|Promise|Promise|Promise}
 */
export function getArray(collection, field, array) {
    if (!Tool.isValidArray(array))
        return Promise.resolve([]);
    let strArray = array.reduce((accum, cur) => {
        return `${accum},"${cur}"`;
    }, '');
    // 처음은 점이므로 첫 글자를 잘라낸다.
    strArray = strArray.slice(1);
    let filter = `{"${field}":{"$in":[${strArray}]}}`;
    let range = JSON.stringify([0, array.length]);

    let api = `/api/${collection}`;
    let reqParam = {
        filter: filter,
        range: range,
    }
    return httpReq(api, 'get', reqParam);
}


export function httpGetFullUrl(url, param) {
    return new Promise(function (resolve, reject) {
        // var req = new XMLHttpRequest();
        // req.open('GET', url, true);
        // req.onreadystatechange = function (aEvt) {
        //     if (req.readyState == 4) {
        //         console.log("Status: ", req.status);
        //         console.log("Response message: ", req.responseText);
        //     }
        // };
        // req.send(null);
        axios.get(url, param)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                drip_log(1, 'network err!');
                // event.emit('netErr', err);
                reject(err);
            })
    })
}

export function req(url, method, params) {
    return httpReq(url, method, params);
}

export function getServerUrl() {
    return config.apiUrl;
}

export function getStaticServerUrl() {
    return config.staticServerUrl;
}

export default {
    req,
    updateArray,
    getArray,
    getServerUrl,
    getStaticServerUrl,
    reqFullPath: httpGetFullUrl
}
