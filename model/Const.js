import {config} from '../config/config'
/*
* Net Status
* */
export const NET_STATUS_NORMAL = 0;
export const NET_STATUS_ERROR = 1;

export const NET_INFO = {
    status:NET_STATUS_NORMAL,
    code : 0,
};

/* Request Status */
export const COUNT_ONE_PAGE = 35;

export const STATUS_REQ_IDLE    = `${config.appName}/STATUS_REQ_IDLE`;
export const STATUS_REQ_START   = `${config.appName}/STATUS_REQ_START`;
export const STATUS_REQ_SUCCESS = `${config.appName}/STATUS_REQ_SUCCESS`;
export const STATUS_REQ_FAIL    = `${config.appName}/STATUS_REQ_FAIL`;
export const STATUS_REQ_RESEND  = `${config.appName}/STATUS_REQ_RESEND`;
export const STATUS_REQ_NOMORE  = `${config.appName}/STATUS_REQ_NOMORE`;

export const LOAD_TYPE_INIT = `LOAD_TYPE_INIT`;
export const LOAD_TYPE_MORE = `LOAD_TYPE_MORE`;

export const GET_TYPE_LASTID = `GET_TYPE_LASTID`;
export const GET_TYPE_COUNT = `GET_TYPE_COUNT`;

/** Socket Message Types **/
export const SOCK_MES_TYPE_SYS = 'mesSys';
export const SOCK_MES_TYPE_CHAT = 'mesChat';

export const CASH_IN = 1;
export const CASH_OUT = 2;

/** social **/
export const MAX_CHAT_LENGTH = 100;

/**
 * chat Const
 **/
export const CUSTOM_SERVICE_ID = 1;
export const CUSTOM_SERVICE_CHANNEL = 1;
export const DEFAULT_ACTIVE_CHANNEL = -2;
export const DEFAULT_EXPIRED_CHANNEL = -1;
export const DEFAULT_EXPIRE_CHANNEL = -1;

export const CHAT_TYPE_LIVE = 'video';
export const CHAT_TYPE_AUDIO = 'audio';
export const CHAT_TYPE_TEXT = 'text';

export const CHAT_ROOM_FREE = 0;
export const CHAT_ROOM_PAY = 1;
export const CHAT_ROOM_TIME =2;


export const CHAT_CONTENT_TEXT = 'text';
export const CHAT_CONTENT_IMAGE = 'image';
export const CHAT_CONTENT_VIDEO = 'video';
export const CHAT_CONTENT_AUDIO = 'audio';
export const CHAT_CONTENT_PRESENT = 'gift';
export const CHAT_CONTENT_OTHER = 'other';
export const CHAT_USET_JOIN_LEAVE = 'user_join_leave';

export const CHAT_ALLOW_USER = 'allowChat';
export const CHAT_DISALLOW_USER = 'disAllowChat';
export const CHAT_ADD_MANAGER_USER = 'addManager';
export const CHAT_DELL_MANAGER_USER = 'delManager';

export const CHANNEL_STOP_POINT = 'point';
export const CHANNEL_STOP_EXIT = 'exit';
export const CHANNEL_STOP_EXPIRE = 'expire';
export const CHANNEL_STOP_ADMIN = 'admin';

export const CHAT_NOTI_MAX_LENGTH = 200;
export const CHAT_NOTE_MAX_LENGTH = 100;

export const CHAT_POINT_LIMIT = 1000000;

/**
 * Categories
 * **/

export const CATEGORY_ALL = -1;
export const CATEGORY_CHAT_ID = 30;//24;
export const CATEGORY_LIVE_ID =  35;
export const CATEGORY_IMAGE_ID = 3;
export const CATEGORY_VIDEO_ID = 2;

export const TAB_CREATE_VALUE = 99999;

/**
 * Routes
 * */
export const ROUTE_CONSULTATION = "consultation";

/**
 * Home
 * **/

export const CHANNEL_COUNT = 3;