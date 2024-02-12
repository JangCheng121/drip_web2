import moment from 'moment'
import 'moment/locale/ko';
import 'moment/locale/en-au';
import 'moment/locale/zh-cn';
import UrlParser from 'url-parse'
import { extendMoment } from 'moment-range';
import {i18n} from '../i18n';
// import _lodash from 'lodash'
import {dataService} from '../model/DataService';


const _moment = extendMoment(moment);
export const log_options = [
    { label: "critical", value: 0 },
    { label: "error", value: 1 },
    { label: "warning", value: 2 },
    { label: "event", value: 3 },
    { label: "debug", value: 4 },
    { label: "verbose", value: 5 }
];

var log_level = 6;
export function set_log_level(level) {
    log_level = level;
}
export function get_log_level() {
    return log_level;
}

export function drip_log (level, title, msg) {
    if (typeof title == 'string') {
        console_log(level, "[" + getTimeStr() + '] ' + title);
    } 
    else {
        console_log(level, "[" + getTimeStr() + '] ');
        console_log(level, title);
    }
    if (msg) {
        console_log(level, msg);
    }
}

function console_log(level, msg) {
    let mes;
    if (typeof msg == 'string'){
        mes = msg;
    }
    else {
        mes = JSON.stringify(msg)
    }
    // event.emit('MessageAdd', {level:level, msg:mes})

    if (level <= log_level) 
        console.log(mes)
}

export function urlByAppendingParams(url, params) {
    let result = url
    if (result.substr(result.length - 1) !== '?') {
        result = result + `?`
    }
    
    for (let key in params) {
        let value = params[key]
        result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
    }

    result = result.substring(0, result.length - 1);
    return result;
} 

export function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

export function getConstel(dat) {
    if (dat == null)
        return;
    var date = new Date(dat);
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var comp = m * 100 + d;
    var ret;
    if (comp <= 119) ret = 'GOAT';
    else if (comp <= 218) ret = 'AQUA';
    else if (comp <= 320) ret = 'FISH';
    else if (comp <= 420) ret = 'ARIES';
    else if (comp <= 520) ret = 'OX';
    else if (comp <= 621) ret = 'TWIN';
    else if (comp <= 722) ret = 'CRAB';
    else if (comp <= 822) ret = 'LION';
    else if (comp <= 922) ret = 'GIRL';
    else if (comp <= 1021) ret = 'CELE';
    else if (comp <= 1121) ret = 'SCORP';
    else if (comp <= 1221) ret = 'TICK';
    else ret = 'GOAT';
    return ret;
}

export function getTimeStr() {
    var dt = new Date();
    var y = dt.getFullYear();
    var m = dt.getMonth() + 1;
    var d = dt.getDate();
    var h = dt.getHours();
    var mm = dt.getMinutes();
    var ss = dt.getSeconds();

    var formattedDate = y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + ss;
    return formattedDate;
};

export function normalTimeStr(dateTime) {
    var normalTimeStr=dateTime.slice(0, 4)+"-"+dateTime.slice(5, 7)+"-"+dateTime.slice(8, 10)+" "+dateTime.slice(11, 19);
    return normalTimeStr
}

export function getBriefTimeGap (msec) {
    var v;
    var ret = {};
    v = Math.floor(msec / 1000 / 60 / 60 / 24 / 365);
    if (v) {
        ret.year = v;
        msec -= v*1000 * 60 * 60 * 24 * 365
    }
    v = Math.floor(msec / 1000 / 60 / 60 / 24 / 30);
    if (v) {
        ret.month = v;
        msec -= v*1000 * 60 * 60 * 24 * 30
    }
    v = Math.floor(msec / 1000 / 60 / 60 / 24);
    if (v) {
        ret.day = v;
        msec -= v*1000 * 60 * 60 * 24
    }
    v = Math.floor(msec / 1000 / 60 / 60);
    if (v) {
        ret.hour = v;
        msec -= v*1000 * 60 * 60
    }
    v = Math.floor(msec / 1000 / 60);
    if (v) {
        ret.minute = v;
        msec -= v*1000 * 60;
    }
    v = Math.floor(msec / 1000);
    if (v) {
        ret.second = v;
        msec -= v*1000
    } else {
        ret.second = 1;
    }
    let result = "";
    for(let key in ret){
        result += (ret[key] +":")
    }
    result = result.slice(0,-1);
    return result;
}

export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export function getIndexByValue(array, value) {
    if (!isValidArray(array))
        return -1;
    return array.findIndex(elem => elem == value);
}

export function isValidArray(array) {
    return array && Array.isArray(array) && array.length>0
}

/**
 * 배렬에 한개 값을 추가 혹은 삭제한다.
 * 배렬에 값이 있는경우 삭제한다.
 * @param array
 * @param value
 * 리턴값 : 추가 혹은 삭제 한자료 => INFO_PUSHED_ARRAY
 */
export const INFO_PUSHED_ARRAY = {
    isPushed:false, //추가했는가?
    array:[],   //결과 배렬
}

export function pushArray(array, value, isPush = false) {
    let ret = createObject(INFO_PUSHED_ARRAY);
    if (!array || !value)
        return ret;

    if (!Array.isArray(array)) {
        ret.array = [];
    }

    ret.array = [].concat(array);
    ret.isPushed = isPush;

    let idx = getIndexByValue(array, value);
    let isExist = (idx !== -1);
    if (isExist === isPush) {
        return ret;
    }

    if (isPush) {
        ret.isPushed = true;
        ret.array.push(value);
    } else {
        ret.array.splice(idx, 1);
    }
    return ret;
}

export function getObjVal(obj, key) {
    let retVal = null;
    if (typeof key === 'string' && obj[key])
        return obj[key];

    if (isValidArray(key)) {
        let bExist = true;
        for (let x in key) {
            let subKey = key[x];
            if (obj[subKey]) {
                obj = obj[subKey];
            } else {
                bExist = false;
                break;
            }
        }
        bExist? retVal = obj: retVal = null;
    }
    return retVal;
}

export function getCurrentTime(dateTime = 0, format='fromNow') {
    let language = i18n.language?i18n.language:'cn';
    language = language==='cn'?'zh-cn':language==='en'?'en-NZ':'ko';
    moment.locale(language);
    if (format!=='fromNow') {
        return moment(dateTime).format(format);
    }
    return moment(dateTime).fromNow();
}

export function addDays(now, addDay) {
    let date = new Date(now);
    let returnDate = new Date(date.setTime( date.getTime() + addDay * 86400000 ));
    return returnDate;
}

export function isValidString(string) {
    return string && typeof string === "string" && string.length>0
}

export function isObject(obj) {
    return obj && typeof obj === 'object';
}

export function isString(str) {
    return str && typeof str === 'string';
}

export function parseInteger(str) {
    if (isNaN(str))
        return 0;
    return parseInt(str);
}

// 0보다 큰 옹근수 값이면 참을 반환
export function isInteger(number) {
    if (number === undefined || number === '')
        return false;

    if (isNaN(number) || number.indexOf('.') !== -1 || number.indexOf('-') !== -1) {
        return false
    }
    return true;
}


/**
 * 새로운 오브젝트를 만들고 값을 대입해준다.
 * @param protoObj  형타오브젝트 이놈이 가지는 키값들만 복사한다.
 * @param dataObj   새로운 자료를 가지고 있는 오브젝트
 * @returns {{}| 만든 객체}
 */
export function createObjectAndCopy(protoObj, dataObj) {
    if (!isObject(protoObj) || !isObject(dataObj))
        return {};

    let newObj = Object.assign({}, protoObj);
    for (let key in protoObj) {
        if (newObj.hasOwnProperty(key) && dataObj[key])
            newObj[key] = dataObj[key];
    }

    return newObj;
}

export function createObject(protoObj) {
    return Object.assign({}, protoObj);
}

/**
 * 배렬의 문자렬원소들을 한줄로 꿰멘다. 구슬이 서말이라도 꿰메야 보배대.
 * @param array
 * @param isNeedQuote 인용부호(웃반점)로 감싸겠는가?
 * @param linkLetter 련결시킬 문자
 */
export function getMergedString(array, isNeedQuote = true, linkLetter = ',') {
    if (!isValidArray(array))
        return '';
    let cQuote = isNeedQuote? `"`:``;
    let strArray = array.reduce((accum, cur) => {
        return `${accum},${cQuote}${cur}${cQuote}`;
    }, '');
    // 처음은 점이므로 첫 글자를 잘라낸다.
    strArray = strArray.slice(1);
    return strArray;
}

export function parseUrl(url) {
    let parser = new UrlParser(url);
    return parser;
}

export function isDateBetween(start, end, check=Date.now()) {
    const range = _moment.range(start, end);
    return range.contains(check);
}

export function abbrNum(number, minNum = 1000, decPlaces = 1) {
    number = parseInteger(number);
    if (number < minNum)
        return number;
    decPlaces = Math.pow(10,decPlaces);
    var abbrev = [ "k", "m", "b", "t" ];
    for (var i=abbrev.length-1; i>=0; i--) {
        var size = Math.pow(10,(i+1)*3);
        if(size <= number) {
            number = Math.round(number*decPlaces/size)/decPlaces;
            if((number == 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }
            number += abbrev[i];
            break;
        }
    }
    return number;
}