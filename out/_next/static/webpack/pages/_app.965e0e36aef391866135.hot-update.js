webpackHotUpdate_N_E("pages/_app",{

/***/ "./model/DataService.js":
/*!******************************!*\
  !*** ./model/DataService.js ***!
  \******************************/
/*! exports provided: default, dataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataService", function() { return dataService; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Req__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Req */ "./model/Req.js");
/* harmony import */ var _redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/modules/medias */ "./redux/modules/medias.js");
/* harmony import */ var _redux_modules_contents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/modules/contents */ "./redux/modules/contents.js");
/* harmony import */ var _redux_modules_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/modules/users */ "./redux/modules/users.js");
/* harmony import */ var _redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/modules/chat/actions/actions */ "./redux/modules/chat/actions/actions.js");
/* harmony import */ var _redux_modules_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/modules/system */ "./redux/modules/system.js");
/* harmony import */ var _redux_modules_note__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/modules/note */ "./redux/modules/note.js");
/* harmony import */ var _redux_modules_categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/modules/categories */ "./redux/modules/categories.js");
/* harmony import */ var _redux_common_PropoTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/common/PropoTypes */ "./redux/common/PropoTypes.js");
/* harmony import */ var _model_Const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/Const */ "./model/Const.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-notifications */ "./node_modules/react-notifications/lib/index.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-notifications/lib/notifications.css */ "./node_modules/react-notifications/lib/notifications.css");
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Auth */ "./model/Auth.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_21__);




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }



















var vm = null;
var DataService = /*#__PURE__*/function () {
  function DataService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DataService);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "store", {});
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_appSetModalState", null);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "openLiveFinishModal", null);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "currentRoute", '');
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "chargeHistory", []);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "chargeSetting", []);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "exchangeSetting", []);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "panStatus", {
      page: '',
      activeTab: '',
      scrollY: 0
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "popupData", []);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "selectTopTypeStr", 'TOPCLICK');
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "selectTopBeforeDateStr", 'TOTALTOP');
    /*
    * common
    * */
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "splitPath", function (path) {
      var result = path.replace(/\\/g, "/").match(/(.*\/)?(\..*?|.*?)(\.[^.]*?)?(#.*$|\?.*$|$)/);
      return {
        dirname: result[1] || "",
        filename: result[2] || "",
        extension: result[3] || "",
        params: result[4] || ""
      };
    });
    /*해당 id 를 가지는 contents 자료를 가져온다.
    * 이미 적재된 contents 목록에 요구하는 자료가 없는 경우 개별적으로 호출한다.*/
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getContentById", function (id) {
      if (!id) return;
      id = parseInt(id);
      Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/content/' + id, 'get').then(function (res) {
        vm.dispatchAction(_redux_modules_contents__WEBPACK_IMPORTED_MODULE_6__["ActAddOneItem"], {
          type: 'contents',
          item: res
        });
        var state = vm.store.getState(); //.users[res.user_id]
        var users = state.users;
        var user = users[res.user_id];
        if (!user) {
          vm.dispatchAction(_redux_modules_users__WEBPACK_IMPORTED_MODULE_7__["get"], res.user_id);
        }
      }, function (err) {
        console.log(err);
      });
    });
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DataService, [{
    key: "init",
    value: function init(store) {
      var system_ai_token;
      if (store) {
        vm.store = store;
      }
      if (!_Auth__WEBPACK_IMPORTED_MODULE_20__["auth"].ai || !_Auth__WEBPACK_IMPORTED_MODULE_20__["auth"].ai.token) {
        system_ai_token = vm.store.getState().system.ai.token;
        if (!system_ai_token) {
          var local_persist = JSON.parse(localStorage.getItem('persist:HLive'));
          var system_ai = local_persist && local_persist.system && JSON.parse(local_persist.system).ai;
          system_ai_token = local_persist && local_persist.system && system_ai && system_ai.token;
        }
        _Auth__WEBPACK_IMPORTED_MODULE_20__["auth"].ai.token = system_ai_token;
      }
      vm.initConnect();
      vm.loadInitData();
    }
  }, {
    key: "loadInitData",
    value: function loadInitData() {
      console.log("Loading...");
      var dispatch = vm.store.dispatch;
      dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["getSettingAsync"]()); //설정정보
      dispatch(_redux_modules_categories__WEBPACK_IMPORTED_MODULE_11__["getCategoriesAsync"]()); //카테고리자료
      dispatch(_redux_modules_note__WEBPACK_IMPORTED_MODULE_10__["requestUnreadNote"]()); //unread 쪽지적재
      // dispatch(actions.fetchChannels());//채팅자료적재
    }
  }, {
    key: "initConnect",
    value: function initConnect() {
      // const ai = vm.store.getState().system.ai;
      var ai = _Auth__WEBPACK_IMPORTED_MODULE_20__["auth"].ai;
      var token = ai.token;
      Object(_Req__WEBPACK_IMPORTED_MODULE_4__["reqInit"])(token);
      vm.socket_connect();
    }
  }, {
    key: "getMediaType",
    value: function getMediaType(mime) {
      if (!mime) {
        return 'invalid';
      }
      var array = mime.split('/');
      if (array && array[0].length) {
        return array[0];
      } else {
        return 'invalid';
      }
    }
  }, {
    key: "showNotification",
    value: function showNotification(state, str, callBack) {
      // if (str !== 'timeout of 15000ms exceeded') return;
      react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"][state](_i18n__WEBPACK_IMPORTED_MODULE_21__["i18n"] && _i18n__WEBPACK_IMPORTED_MODULE_21__["i18n"].t ? _i18n__WEBPACK_IMPORTED_MODULE_21__["i18n"].t(str) : str,
      //content string
      '',
      //title
      5000,
      //duration time
      function () {
        //callBack function
        if (callBack) {
          callBack();
        }
      });
    }

    /*
    * =============charge=====================
    * */
  }, {
    key: "getChargeHistory",
    value: function getChargeHistory(charge_exchange) {
      var loadType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      return new Promise(function (resolve, reject) {
        var param = {};
        param.filter = {
          user_id: dataService.mi.id,
          type: charge_exchange === 'charge' ? 1 : 2
        };
        param.range = JSON.stringify([loadType === 'loadMore' ? vm.chargeHistory.length : 0, perPage]);
        Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/cash_history', 'get', param).then(function (res) {
          resolve(res);
          charge_exchange === 'charge' ? vm.chargeHistory = res : vm.exchangeHistory = res;
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "getChargeSet",
    value: function getChargeSet() {
      return new Promise( /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
          var settingRes;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/cash_set', 'get');
              case 2:
                settingRes = _context.sent;
                resolve(settingRes);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "requestCoinToPoint",
    value: function requestCoinToPoint(coin, point) {
      return new Promise(function (resolve, reject) {
        var reqParam = {
          coin: coin,
          point: point
        };
        _Req__WEBPACK_IMPORTED_MODULE_4__["default"].req('/api/coin_to_point', 'post', reqParam).then(function (res) {
          if (res.coin_history) vm.addHistory(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["HIS_TYPE_COIN"], res.coin_history);
          if (res.point_history) vm.addHistory(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["HIS_TYPE_POINT"], res.point_history);
          if (res.user) {
            vm.dispatchAction(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["updateMI"], {
              point: res.user.point,
              coin: res.user.coin
            });
          }
          resolve(res);
        })["catch"](function (err) {
          reject(err);
        });
      });
    }

    /*********
     * chargeState:충전일때'point', 환전일때'coin'
     * settingId:묶음처리일 때 settingId,
     * money:변환할 현금(충전), 금화(환전),
     * exchangeResult:변환된 결과 포인트(충전), 현금(환전)
     * *************/
  }, {
    key: "charge",
    value: function charge(chargeState) {
      var settingId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var money = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var exchangeResult = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return new Promise(function (resolve, reject) {
        var cash_setting = {
          point: vm.chargeSetting,
          coin: vm.exchangeSetting
        };
        var mi = vm.store.getState().system.mi;
        var params = {},
          setting_data = cash_setting[chargeState][lodash__WEBPACK_IMPORTED_MODULE_18___default.a.findIndex(cash_setting[chargeState], {
            id: settingId
          })];
        if (settingId !== -1) {
          params.settingId = settingId;
        } else {
          params.type = chargeState === 'point' ? 1 : 2;
          params[chargeState === 'point' ? 'cash' : 'money'] = money;
        }
        Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/charge_exchange', 'post', params).then(function (response) {
          var cash_history = {
            user_id: mi.id,
            type: settingId !== -1 ? setting_data.type : chargeState === 'point' ? 1 : 2,
            cash: settingId !== -1 ? setting_data.cash : chargeState === 'point' ? money : exchangeResult,
            money: settingId !== -1 ? setting_data.money : chargeState === 'point' ? exchangeResult : money,
            ctime: new Date(),
            utime: new Date(),
            state: 'done'
          };
          var point_coin_history = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
            user_id: mi.id
          }, chargeState, settingId !== -1 ? setting_data.money : chargeState === 'point' ? exchangeResult : money), "type", chargeState === 'point' ? 1 : 2), "info", "".concat(chargeState)), "ctime", new Date());
          mi[chargeState] = mi[chargeState] + (chargeState === 'point' ? exchangeResult : money) * (chargeState === 'point' ? 1 : -1);
          vm.dispatchAction(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["updateMI"], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, chargeState, mi[chargeState]));
          if (cash_history) {
            chargeState === 'point' ? vm.addHistory(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["HIS_TYPE_CHARGE"], cash_history) : vm.addHistory(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["HIS_TYPE_EXCHANGE"], cash_history);
          }
          if (point_coin_history) {
            chargeState === 'point' ? vm.addHistory(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["HIS_TYPE_POINT"], point_coin_history) : vm.addHistory(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["HIS_TYPE_COIN"], point_coin_history);
          }
          resolve(true);
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: "get_free_point_info",
    value: function get_free_point_info() {
      return new Promise(function (resolve, reject) {
        var mi = vm.store.getState().system.mi;
        if (mi.id) {
          Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/money/get_free_point_info', 'get', {
            user_id: mi.id
          }).then(function (response) {
            resolve(response);
          }, function (error) {
            console.log('get_free_point_info err==============', error);
            reject(error);
          });
        }
      });
    }
  }, {
    key: "addHistory",
    value: function addHistory(historyType, history) {
      vm.store && vm.store.dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["addHistory"](historyType, history));
    }
  }, {
    key: "postContentAdvertData",
    value: function postContentAdvertData(data, modelType) {
      return new Promise(function (resolve, reject) {
        Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])("/api/".concat(modelType), 'post', data).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    }

    /****
     * uploadMedia: 다매체화일을 서버에 업로드한다.
     *           로컬에서 올린 자료는 다시 다운할 필요가 없으므로 앱의 자료등록부에 옮겨놓고 그것을 업로드한다.
     * type: 다매체 종류 image, voice, video,
     * path: 원본화일의 경로
     * from: 매체를 올리는 대상, chat, social, userprofile, ...
     * bOriginName: 원본이름을 유지하겠는가?    서버에 올릴때 로컬에 복사하면서 이름을 변경하겠는가 하는것을 결정한다.
     * cbPath : 경로를 결정한 후에 호출되는 콜백함수이다.
     * ******/
  }, {
    key: "dataURLtoFile",
    value: function dataURLtoFile(data, filename) {
      var arr = data.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {
        type: mime
      });
    }
  }, {
    key: "uploadMedia",
    value: function uploadMedia(type, srcPath) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var from = arguments.length > 3 ? arguments[3] : undefined;
      var bOriginName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var file = arguments.length > 5 ? arguments[5] : undefined;
      var cbPath = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var index = arguments.length > 7 ? arguments[7] : undefined;
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
          var srcPathElem, dstFileName, dstFullName, dstDirPath, url, newMedia, progressFunc, upResult;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                // 파일이름을 결정한다.
                srcPathElem = vm.splitPath(file.name);
                dstFileName = !bOriginName ? "".concat(vm.getUniqueFileName(index + 1)) : srcPathElem.filename;
                dstFullName = "".concat(dstFileName).concat(srcPathElem.extension);
                dstDirPath = '/assets/content';
                url = "".concat(dstDirPath, "/").concat(dstFullName);
                if (cbPath) cbPath(srcPath, url, duration, type);
                newMedia = Object.assign({}, _redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__["MEDIA"]);
                newMedia.path = srcPath;
                newMedia.duration = duration;
                newMedia.direction = _redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__["DIRECTION_UP"];
                newMedia.type = type;
                newMedia.from = from;
                newMedia.file = file;
                vm.dispatchAction(_redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__["addNew"], {
                  url: url,
                  value: newMedia
                });
                vm.dispatchAction(_redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__["setStatus"], {
                  url: url,
                  status: _redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__["STATUS_REQUEST"]
                });
                _context2.prev = 15;
                progressFunc = function progressFunc(progress) {
                  vm.dispatchAction(_redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__["setProgress"], {
                    url: url,
                    progress: progress
                  });
                };
                _context2.next = 19;
                return vm.uploadFile(type, from, file, dstFileName, progressFunc);
              case 19:
                upResult = _context2.sent;
                vm.dispatchAction(_redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__["setSuccess"], {
                  url: url
                });
                resolve(upResult);
                _context2.next = 28;
                break;
              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](15);
                vm.dispatchAction(_redux_modules_medias__WEBPACK_IMPORTED_MODULE_5__["setError"], url);
                reject();
              case 28:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[15, 24]]);
        }));
        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(type, from, file, filename, progressFunc) {
      return new Promise(function (resolve, reject) {
        var state = vm.store.getState();
        var uploader = new XMLHttpRequest();
        var data = new FormData();
        data.append("file", file);
        var params = "field=file";
        uploader.open('POST', Object(_Req__WEBPACK_IMPORTED_MODULE_4__["getServerUrl"])() + '/api/system/file_upload?' + params, true);
        uploader.setRequestHeader('type', type);
        uploader.setRequestHeader('from', from);
        var mi = state && state.system && state.system.mi;
        uploader.setRequestHeader('user_id', mi.id);
        uploader.setRequestHeader('filename', filename);
        var token = state.system.ai.token;
        console.log('DataService.uploadFile=====mi.id=====', token);
        uploader.setRequestHeader('authorization', token);
        uploader.onprogress = function (e) {
          var progress = parseInt(e.loaded / e.total * 100, 10);
          progressFunc(progress);
        };
        uploader.onerror = function (e) {
          console.log('upload Error', e);
          reject(e);
        };
        uploader.ontimeout = function (e) {
          console.log('upload timeout', e);
          reject(e);
        };
        uploader.onabort = function (e) {
          console.log('upload aborted', e);
          reject(e);
        };
        uploader.onload = function (e) {
          var res = JSON.parse(uploader.responseText);
          if (typeof res !== 'object' || !res.result || res.result !== "ok" || !res.fname) {
            reject('upload result error');
          } else {
            res.fname = res.fname.replace('./', '');
            resolve(res);
          }
        };
        uploader.send(data);
      });
    }
  }, {
    key: "getUniqueFileName",
    value: function getUniqueFileName() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var state = vm.store.getState();
      var mi = state && state.system && state.system.mi;
      return "".concat(mi.id, "_").concat(moment__WEBPACK_IMPORTED_MODULE_17___default()(new Date()).format("YYYYMMDDhhmmss"), "_").concat(index);
    }
  }, {
    key: "dispatchAction",
    value: function dispatchAction(action, payload) {
      vm.store.dispatch(action(payload));
    }
  }, {
    key: "deletePost",
    value:
    //dataId=>콘텐트 or 댓글 아이디, type=> content or review
    function deletePost(dataId, type, contentId) {
      //dataId: content id
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (dataId) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return", reject('invalid dataId'));
              case 2:
                console.log('delete Post===========', type);
                Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/' + type + '/' + dataId, 'delete').then(function (res) {
                  // let state = vm.store.getState();
                  if (type === 'content') {
                    vm.store && vm.store.dispatch(_redux_modules_contents__WEBPACK_IMPORTED_MODULE_6__["removeContent"](dataId));
                  } else if (type === 'review') {
                    vm.store && vm.store.dispatch(_redux_modules_contents__WEBPACK_IMPORTED_MODULE_6__["removeReview"](dataId, contentId));
                  } else if (type === 'channel') {
                    vm.store && vm.dispatchAction(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["channelExpired"], parseInt(dataId));
                  }
                  resolve(res);
                }, function (err) {
                  reject(err);
                });
              case 4:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /*
    * 소켓
    * */
  }, {
    key: "socket_connect",
    value: function socket_connect() {
      console.log('소켓련결', Object(_Req__WEBPACK_IMPORTED_MODULE_4__["getServerUrl"])());
      vm.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_14___default()(Object(_Req__WEBPACK_IMPORTED_MODULE_4__["getServerUrl"])());
      vm.socket.on('connect', function (p_socket) {
        var token = vm.store.getState().system.ai.token;
        var ai_token = _Auth__WEBPACK_IMPORTED_MODULE_20__["auth"].ai && _Auth__WEBPACK_IMPORTED_MODULE_20__["auth"].ai.token;
        if (!ai_token) {
          return;
        }
        vm.socket.emit('mesSockInfo', {
          token: ai_token
        });
      });
      vm.socket.on('reconnect', function (data) {
        var token = vm.store.getState().system.ai.token;
        var ai_token = _Auth__WEBPACK_IMPORTED_MODULE_20__["auth"].ai && _Auth__WEBPACK_IMPORTED_MODULE_20__["auth"].ai.token;
        if (!ai_token) {
          return;
        }
        vm.socket.emit('mesSockInfo', {
          token: ai_token
        });
      });
      vm.socket.on('token error', function (data) {
        console.log('dataService.socket.on token error============');
        vm.dispatchAction(_redux_common_PropoTypes__WEBPACK_IMPORTED_MODULE_12__["resetRedux"]);
        next_router__WEBPACK_IMPORTED_MODULE_19___default.a.pushRoute('/login');
      });
      vm.socket.on('disconnect', function (p_socket) {
        // vm.showNotification('error', 'socket disconnect');
      });

      //다른데서 내 id 로 가입.....
      vm.socket.on('mesExit', function () {
        console.log('socket.on mesExit...............');
        next_router__WEBPACK_IMPORTED_MODULE_19___default.a.pushRoute('/login');
      });

      //채팅관련
      vm.socket.on('userLeaveChannel', function (data) {
        var channel_id = data.channel_id,
          user_id = data.user_id,
          type = data.type;
        if (!channel_id || !user_id) return;
        data.isAdd = false;
        vm.dispatchAction(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelUser"], data);
        var state = vm.store.getState();
        var mi = state && state.system && state.system.mi;
        var channels = state.chat && state.chat.channels;
        var activeChannelInfo = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.filter(channels.data, {
          id: channel_id
        })[0];
        if (type === 'kickout' && user_id === mi.id && activeChannelInfo && activeChannelInfo.creator !== mi.id) {
          vm._appSetModalState && vm._appSetModalState('alert', 'CHATEXIT', 'DONE', next_router__WEBPACK_IMPORTED_MODULE_19___default.a.back);
          vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelInfo"](channel_id, {
            kickOuted: true
          }));
        }
      });
      vm.socket.on('userJoinChannel', function (data) {
        if (!data.channel_id || !data.user_id) return;
        data.isAdd = true;
        vm.dispatchAction(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelUser"], data);
      });
      vm.socket.on('newChannel', function (channel) {
        vm.dispatchAction(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["addChannel"], channel);
      });
      vm.socket.on('newMessage', /*#__PURE__*/function () {
        var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(message, callback) {
          var gift_id, gift_cnt, gift_data, channels, activeChannelInfo, new_gifts;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                console.log('newMessage=======start......=========', message);
                if (message.mode === 'private') {
                  //mode:channel='기타', live, private:'1:1'
                  message.channel_id = _model_Const__WEBPACK_IMPORTED_MODULE_13__["CUSTOM_SERVICE_CHANNEL"];
                }
                if (!(message.type === 'gift' && message.content && message.content.data && message.content.data.gift_id)) {
                  _context4.next = 14;
                  break;
                }
                gift_id = message.content.data.gift_id;
                gift_cnt = message.content.data.cnt;
                _context4.next = 7;
                return Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/gift/' + gift_id, 'get');
              case 7:
                gift_data = _context4.sent;
                message.content.data.img = gift_data.img;
                channels = vm.store.getState().chat.channels;
                activeChannelInfo = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.filter(channels.data, {
                  id: message.channel_id
                })[0];
                new_gifts = activeChannelInfo && activeChannelInfo.gifts ? activeChannelInfo.gifts : [];
                new_gifts.push({
                  gift_id: gift_id,
                  sender: message.sender
                });
                vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelInfo"](message.channel_id, {
                  nLike: activeChannelInfo && activeChannelInfo.nLike + gift_data.price * gift_cnt,
                  gifts: new_gifts
                }));
              case 14:
                if (!(message.type === 'text' && message.content && message.content.data === '')) {
                  _context4.next = 16;
                  break;
                }
                return _context4.abrupt("return");
              case 16:
                message.ctime = new Date();
                console.log('newMessage================', message);
                vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["addMessage"](message));
                if (vm.currentRoute === _model_Const__WEBPACK_IMPORTED_MODULE_13__["ROUTE_CONSULTATION"]) {
                  callback(message.id);
                } else {
                  vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["setUnreadCount"](vm.store.getState().chat.messages.unreadCount + 1));
                }
              case 20:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
      vm.socket.on('channelExpired', function (channel_id) {
        vm.dispatchAction(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["channelExpired"], parseInt(channel_id));
        vm.store.dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["setEnterChannel"](channel_id, false));
      });
      vm.socket.on('stopChannel', function (data) {
        var channel_id = data.channel_id,
          type = data.type,
          block_reason = data.block_reason;
        var channels = vm.store.getState().chat.channels;
        console.log('accept socket.on stopChannel======', data.channel_id);
        vm.dispatchAction(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["channelExpired"], parseInt(data.channel_id));
        vm.store.dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["setEnterChannel"](data.channel_id, false));
        if (channels && channels.activeChannel && channels.activeChannel === channel_id) {
          vm.openLiveFinishModal && vm.openLiveFinishModal(channel_id, type, block_reason);
        }
      });
      vm.socket.on('channelWillExpire', function (channel_id) {
        vm.dispatchAction(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["channelWillExpire"], channel_id);
      });
      vm.socket.on('commandChannel', function (data) {
        var channel_id = data.channel_id,
          user_id = data.user_id,
          command = data.command;
        var state = vm.store.getState();
        var mi = state.system.mi;
        if (mi.id !== user_id) return;
        var channels = state.chat.channels;
        var channelId = _redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["getChannelIdWithRawId"](channel_id, vm.store);
        if (!channelId) return;
        var active_channel = channels.data[channelId];
        var others = active_channel.others;
        var managers = active_channel.managers;
        var alertStr = '';
        console.log('commandChannel first managers=======', {
          managers: managers,
          command: command,
          user_id: user_id
        });
        if (command === _model_Const__WEBPACK_IMPORTED_MODULE_13__["CHAT_ADD_MANAGER_USER"] || command === _model_Const__WEBPACK_IMPORTED_MODULE_13__["CHAT_DELL_MANAGER_USER"]) {
          var manager_includes = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.includes(managers, user_id);
          if (command === _model_Const__WEBPACK_IMPORTED_MODULE_13__["CHAT_ADD_MANAGER_USER"] && !manager_includes) {
            managers.push(user_id);
          } else if (manager_includes) {
            managers = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.without(managers, user_id);
          }
          alertStr = command === _model_Const__WEBPACK_IMPORTED_MODULE_13__["CHAT_ADD_MANAGER_USER"] ? 'ROOMMANAGER' : 'DELMANAGER';
          vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelInfo"](channel_id, {
            managers: managers
          }));
        } else if (command === _model_Const__WEBPACK_IMPORTED_MODULE_13__["CHAT_ALLOW_USER"] || command === _model_Const__WEBPACK_IMPORTED_MODULE_13__["CHAT_DISALLOW_USER"]) {
          for (var key in others) {
            var item = others[key];
            if (item.user_id === user_id) {
              item.allow = command === 'allowChat' ? true : false;
              break;
            }
          }
          alertStr = command === _model_Const__WEBPACK_IMPORTED_MODULE_13__["CHAT_ALLOW_USER"] ? 'CHATENABLE' : 'CHATUNABLE';
          vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelInfo"](channel_id, {
            others: others
          }));
        }
        vm._appSetModalState && vm._appSetModalState('alert', alertStr);
      });
      vm.socket.on('changeNotification', function (data) {
        vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["changeNotification"](data.channel_id, data.notification));
      });
      vm.socket.on('newNote', function (data) {
        vm.store.dispatch(_redux_modules_note__WEBPACK_IMPORTED_MODULE_10__["addNote"](data, true));
        vm.store.dispatch(_redux_modules_note__WEBPACK_IMPORTED_MODULE_10__["addUnreadNoteId"]([data.id]));
        vm.showNotification('info', '새 쪽지가 왔습니다.');
      });
      vm.socket.on('pointChange', function (data) {
        var historyItem = data.historyItem,
          unit = data.unit,
          amount = data.amount;
        // vm.store.dispatch(System.doIncreasePoint(data.point, data.isAdd));
        vm.showNotification('info', 'point change.');
        vm.store.dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["updateMI"](Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, unit, amount)));
      });
      vm.socket.on('pointNotEnough', function () {
        vm.store.dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["updateMI"]({
          pointStatus: _redux_modules_system__WEBPACK_IMPORTED_MODULE_9__["POINT_STATUS_NOTENOUGH"]
        }));
      });
      vm.socket.on('autoNoteStopped', function (data) {
        vm.showNotification('warning', '보유머니부족으로 당신이 개설한 xxx 방의 자동쪽지전송이 중지되였습니다.');
      });
      vm.socket.on('autoNoteSend', function (data) {
        vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelInfo"](data.channel_id, {
          send_note_cnt: data.send_note_cnt
        }));
      });

      //라이브

      vm.socket.on('likeLive', function (data) {
        var channels = vm.store.getState().chat.channels;
        var activeChannelInfo = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.filter(channels.data, {
          id: data.channel_id
        })[0];
        vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelInfo"](data.channel_id, {
          nLike: activeChannelInfo.nLike + 1
        }));
      });
      vm.socket.on('channelUpdate', /*#__PURE__*/function () {
        var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
          var id, channels, activeChannelInfo;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                id = data.id;
                channels = vm.store.getState().chat.channels;
                activeChannelInfo = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.filter(channels.data, {
                  id: id
                })[0];
                if (activeChannelInfo) {
                  vm.store.dispatch(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["updateChannelInfo"](id, data));
                } else {
                  vm.dispatchAction(_redux_modules_chat_actions_actions__WEBPACK_IMPORTED_MODULE_8__["addChannel"], data);
                }
              case 4:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return function (_x9) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "sendSocket",
    value: function sendSocket(type, data, callback) {
      if (!vm.socket) {
        next_router__WEBPACK_IMPORTED_MODULE_19___default.a.pushRoute('/');
        return;
      }
      console.log('소켓자료를 보낸다.', type, data);
      if (!vm.socket || !vm.socket.connected) {
        vm.socket_connect();
      }
      vm.socket.emit(type, data, callback);
    }

    // 뭘 하나 봤당
  }, {
    key: "sendMesContentViewed",
    value: function sendMesContentViewed(contentId) {
      var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'content';
      var state = vm.store.getState();
      if (!state || !state.system || !state.system.mi || !state.system.mi.id) {
        return;
      }
      vm.sendSocket(_model_Const__WEBPACK_IMPORTED_MODULE_13__["SOCK_MES_TYPE_SYS"], {
        type: "View",
        user_id: state.system.mi.id,
        content_id: contentId,
        content_type: contentType
      });
    }

    //좋아요/안좋아요
  }, {
    key: "sendMesLike",
    value: function sendMesLike(dstType, dstId, isLike) {
      var state = vm.store.getState();
      if (!state || !state.system || !state.system.mi || !state.system.mi.id) {
        return;
      }
      vm.sendSocket(_model_Const__WEBPACK_IMPORTED_MODULE_13__["SOCK_MES_TYPE_SYS"], {
        type: "Like",
        user_id: state.system.mi.id,
        dest_type: dstType,
        dest_id: dstId,
        is_like: isLike
      });
    }

    // 콘텐츠를 즐겨찾기에 보관했다.
  }, {
    key: "sendMesAddFavoure",
    value: function sendMesAddFavoure(contentId, isAdd) {
      var state = vm.store.getState();
      if (!state || !state.system || !state.system.mi || !state.system.mi.id) {
        return;
      }
      vm.sendSocket(_model_Const__WEBPACK_IMPORTED_MODULE_13__["SOCK_MES_TYPE_SYS"], {
        type: "Favour",
        user_id: state.system.mi.id,
        content_id: contentId,
        is_favour: isAdd
      });
    }

    // 팔로잉했다.
  }, {
    key: "sendMesFollow",
    value: function sendMesFollow(followerId, isFollow) {
      var state = vm.store.getState();
      if (!state || !state.system || !state.system.mi || !state.system.mi.id) {
        return;
      }
      vm.sendSocket(_model_Const__WEBPACK_IMPORTED_MODULE_13__["SOCK_MES_TYPE_SYS"], {
        type: "Follow",
        user_id: state.system.mi.id,
        follower_id: followerId,
        is_follow: isFollow
      });
    }
  }, {
    key: "requestReviews",
    value: function requestReviews(idArray) {
      return _Req__WEBPACK_IMPORTED_MODULE_4__["default"].getArray('review', 'id', idArray);
    }
  }, {
    key: "requestSetting",
    value: function requestSetting() {
      return _Req__WEBPACK_IMPORTED_MODULE_4__["default"].req('/api/setting', 'get');
    }
  }, {
    key: "requestCategories",
    value: function requestCategories() {
      return Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/category', 'get');
    }
  }, {
    key: "requestGetContents",
    value: function requestGetContents(reqParam) {
      var haveHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/content/get_list', 'get', reqParam, haveHeader);
    }
  }, {
    key: "requestAddReview",
    value: function requestAddReview(reviewItem, type, dstItemId) {
      return new Promise(function (resolve, reject) {
        if (type !== "review" && type !== "content") reject('invalid type');
        if (!dstItemId) reject('invalid item id');
        _Req__WEBPACK_IMPORTED_MODULE_4__["default"].req('/api/review', 'post', reviewItem).then(function (res) {
          _Req__WEBPACK_IMPORTED_MODULE_4__["default"].updateArray(type, "add", dstItemId, "reviews", res.id);
          resolve(res);
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: "requestBuyTicket",
    value: function requestBuyTicket(categoryId, ticketId, userId) {
      var path = '/api/user/enter_category';
      var reqParam = {
        category_id: categoryId,
        id: ticketId
      };
      return _Req__WEBPACK_IMPORTED_MODULE_4__["default"].req(path, 'post', reqParam);
    }

    /*
    * 광고자료를 얻어온다.
    * */
    // getAdverts() {
    //     return new Promise(async (resolve, reject) => {
    //         let res = await httpReq(
    //             '/api/advert',
    //             'get',
    //         );
    //         vm.advertsData = res;
    //         vm.getSetting();
    //         resolve(res);
    //     })
    // }
  }, {
    key: "getSetting",
    value: function getSetting() {
      return new Promise( /*#__PURE__*/function () {
        var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
          var settingRes;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/setting', 'get');
              case 2:
                settingRes = _context6.sent;
                vm.settingData = settingRes[0];
                resolve(vm.settingData);
              case 5:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        return function (_x10, _x11) {
          return _ref6.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "getPopup",
    value: function getPopup() {
      return new Promise( /*#__PURE__*/function () {
        var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
          var popupRes;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                if (!vm.popupData.length) {
                  _context7.next = 2;
                  break;
                }
                return _context7.abrupt("return", resolve(vm.popupData));
              case 2:
                _context7.next = 4;
                return Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/popup', 'get');
              case 4:
                popupRes = _context7.sent;
                if (!popupRes.length) reject('error');
                vm.popupData = popupRes;
                resolve(vm.popupData);
              case 8:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function (_x12, _x13) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    //receivers:쪽지받을 유저들의 아이디 배렬, noteContent={data: 'noteContent'}
  }, {
    key: "funcSendNote",
    value: function funcSendNote(receivers, noteContent) {
      var state = vm.store.getState();
      var mi = state && state.system && state.system.mi;
      for (var i = 0; i < receivers.length; i++) {
        var data = {
          sender: mi.id,
          receiver: receivers[i],
          type: 'text',
          content: noteContent,
          ctime: new Date()
        };
        vm.sendSocket('newNote', data);
      }
    }
  }, {
    key: "updateMyAdvert",
    value: function updateMyAdvert(advertId, updateData) {
      return new Promise( /*#__PURE__*/function () {
        var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
          var reqParam;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                if (!(!advertId || !updateData)) {
                  _context8.next = 2;
                  break;
                }
                return _context8.abrupt("return");
              case 2:
                reqParam = {
                  isCustom: true,
                  filter: "{\"id\":\"".concat(advertId, "\"}"),
                  update: JSON.stringify(updateData)
                };
                Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/advert/' + advertId, 'put', reqParam).then(function (res) {
                  resolve(res);
                }, function (err) {
                  console.log(err);
                  reject(err);
                });
              case 4:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }));
        return function (_x14, _x15) {
          return _ref8.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "updateDbField",
    value: function updateDbField(db_collection, db_item_id, filter_key, update_data) {
      return new Promise( /*#__PURE__*/function () {
        var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
          var filterField, updateData, reqParam;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                if (!(!db_collection || !filter_key || !update_data)) {
                  _context9.next = 3;
                  break;
                }
                reject('fail update data....');
                return _context9.abrupt("return");
              case 3:
                filterField = {}, updateData = {};
                Object.keys(filter_key).map(function (key) {
                  return filterField[key] = filter_key[key];
                });
                Object.keys(update_data).map(function (key) {
                  return updateData[key] = update_data[key];
                });
                reqParam = {
                  isCustom: true,
                  filter: JSON.stringify(filterField),
                  update: JSON.stringify(updateData)
                };
                Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/' + db_collection + '/' + db_item_id, 'put', reqParam).then(function (res) {
                  resolve(res);
                }, function (err) {
                  console.log(err);
                  reject(err);
                });
              case 8:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }));
        return function (_x16, _x17) {
          return _ref9.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "funcGetMoneyState",
    value: function funcGetMoneyState() {
      return new Promise( /*#__PURE__*/function () {
        var _ref10 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                Object(_Req__WEBPACK_IMPORTED_MODULE_4__["httpReq"])('/api/money/get_money_stat', 'get').then(function (res) {
                  resolve(res);
                }, function (err) {
                  console.log(err);
                  reject(err);
                });
              case 1:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        }));
        return function (_x18, _x19) {
          return _ref10.apply(this, arguments);
        };
      }());
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (DataService.instance == null) {
        DataService.instance = new DataService();
        vm = DataService.instance;
      }
      return this.instance;
    }
  }]);
  return DataService;
}();
Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(DataService, "instance", null);

var dataService = DataService.getInstance();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWwvRGF0YVNlcnZpY2UuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwidm0iLCJEYXRhU2VydmljZSIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhZ2UiLCJhY3RpdmVUYWIiLCJzY3JvbGxZIiwicGF0aCIsInJlc3VsdCIsInJlcGxhY2UiLCJtYXRjaCIsImRpcm5hbWUiLCJmaWxlbmFtZSIsImV4dGVuc2lvbiIsInBhcmFtcyIsImlkIiwicGFyc2VJbnQiLCJodHRwUmVxIiwicmVzIiwiZGlzcGF0Y2hBY3Rpb24iLCJDb250ZW50cyIsIml0ZW0iLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJ1c2VycyIsInVzZXIiLCJ1c2VyX2lkIiwiVXNlcnMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiaW5pdCIsInN5c3RlbV9haV90b2tlbiIsImF1dGgiLCJhaSIsInRva2VuIiwic3lzdGVtIiwibG9jYWxfcGVyc2lzdCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzeXN0ZW1fYWkiLCJpbml0Q29ubmVjdCIsImxvYWRJbml0RGF0YSIsImRpc3BhdGNoIiwiU3lzdGVtIiwiQ2F0ZWdvcmllcyIsIk5vdGUiLCJyZXFJbml0Iiwic29ja2V0X2Nvbm5lY3QiLCJnZXRNZWRpYVR5cGUiLCJtaW1lIiwiYXJyYXkiLCJzcGxpdCIsInNob3dOb3RpZmljYXRpb24iLCJzdHIiLCJjYWxsQmFjayIsIk5vdGlmaWNhdGlvbk1hbmFnZXIiLCJpMThuIiwiZ2V0Q2hhcmdlSGlzdG9yeSIsImNoYXJnZV9leGNoYW5nZSIsImxvYWRUeXBlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwicGVyUGFnZSIsInJlamVjdCIsInBhcmFtIiwiZmlsdGVyIiwiZGF0YVNlcnZpY2UiLCJtaSIsInJhbmdlIiwic3RyaW5naWZ5IiwiY2hhcmdlSGlzdG9yeSIsImV4Y2hhbmdlSGlzdG9yeSIsImdldENoYXJnZVNldCIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJzZXR0aW5nUmVzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl94IiwiX3gyIiwiYXBwbHkiLCJyZXF1ZXN0Q29pblRvUG9pbnQiLCJjb2luIiwicG9pbnQiLCJyZXFQYXJhbSIsIkh0dHBNYW5hZ2VyIiwicmVxIiwiY29pbl9oaXN0b3J5IiwiYWRkSGlzdG9yeSIsInBvaW50X2hpc3RvcnkiLCJjaGFyZ2UiLCJjaGFyZ2VTdGF0ZSIsInNldHRpbmdJZCIsIm1vbmV5IiwiZXhjaGFuZ2VSZXN1bHQiLCJjYXNoX3NldHRpbmciLCJjaGFyZ2VTZXR0aW5nIiwiZXhjaGFuZ2VTZXR0aW5nIiwic2V0dGluZ19kYXRhIiwiX2xvZGFzaCIsImZpbmRJbmRleCIsInJlc3BvbnNlIiwiY2FzaF9oaXN0b3J5IiwiY2FzaCIsImN0aW1lIiwiRGF0ZSIsInV0aW1lIiwicG9pbnRfY29pbl9oaXN0b3J5IiwiY29uY2F0IiwiZ2V0X2ZyZWVfcG9pbnRfaW5mbyIsImVycm9yIiwiaGlzdG9yeVR5cGUiLCJoaXN0b3J5IiwicG9zdENvbnRlbnRBZHZlcnREYXRhIiwiZGF0YSIsIm1vZGVsVHlwZSIsImRhdGFVUkx0b0ZpbGUiLCJhcnIiLCJic3RyIiwiYXRvYiIsInU4YXJyIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJGaWxlIiwidXBsb2FkTWVkaWEiLCJzcmNQYXRoIiwiZHVyYXRpb24iLCJmcm9tIiwiYk9yaWdpbk5hbWUiLCJmaWxlIiwiY2JQYXRoIiwiaW5kZXgiLCJfcmVmMiIsIl9jYWxsZWUyIiwic3JjUGF0aEVsZW0iLCJkc3RGaWxlTmFtZSIsImRzdEZ1bGxOYW1lIiwiZHN0RGlyUGF0aCIsInVybCIsIm5ld01lZGlhIiwicHJvZ3Jlc3NGdW5jIiwidXBSZXN1bHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzcGxpdFBhdGgiLCJnZXRVbmlxdWVGaWxlTmFtZSIsImFzc2lnbiIsIk1lZGlhcyIsImRpcmVjdGlvbiIsInN0YXR1cyIsIlNUQVRVU19SRVFVRVNUIiwicHJvZ3Jlc3MiLCJ1cGxvYWRGaWxlIiwidDAiLCJfeDMiLCJfeDQiLCJ1cGxvYWRlciIsIlhNTEh0dHBSZXF1ZXN0IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJvcGVuIiwiZ2V0U2VydmVyVXJsIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucHJvZ3Jlc3MiLCJsb2FkZWQiLCJ0b3RhbCIsIm9uZXJyb3IiLCJvbnRpbWVvdXQiLCJvbmFib3J0Iiwib25sb2FkIiwicmVzcG9uc2VUZXh0IiwiZm5hbWUiLCJzZW5kIiwibW9tZW50IiwiZm9ybWF0IiwiYWN0aW9uIiwicGF5bG9hZCIsImRlbGV0ZVBvc3QiLCJkYXRhSWQiLCJjb250ZW50SWQiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiYWN0aW9ucyIsIl94NSIsIl94NiIsInNvY2tldCIsInNvY2tldElPQ2xpZW50Iiwib24iLCJwX3NvY2tldCIsImFpX3Rva2VuIiwiZW1pdCIsIlJlZHV4UHJvdG8iLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJjaGFubmVsX2lkIiwiaXNBZGQiLCJjaGFubmVscyIsImNoYXQiLCJhY3RpdmVDaGFubmVsSW5mbyIsImNyZWF0b3IiLCJfYXBwU2V0TW9kYWxTdGF0ZSIsImJhY2siLCJraWNrT3V0ZWQiLCJjaGFubmVsIiwiX3JlZjQiLCJfY2FsbGVlNCIsIm1lc3NhZ2UiLCJjYWxsYmFjayIsImdpZnRfaWQiLCJnaWZ0X2NudCIsImdpZnRfZGF0YSIsIm5ld19naWZ0cyIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIm1vZGUiLCJDT05TVCIsImNvbnRlbnQiLCJjbnQiLCJpbWciLCJnaWZ0cyIsInNlbmRlciIsIm5MaWtlIiwicHJpY2UiLCJjdXJyZW50Um91dGUiLCJtZXNzYWdlcyIsInVucmVhZENvdW50IiwiX3g3IiwiX3g4IiwiYmxvY2tfcmVhc29uIiwiYWN0aXZlQ2hhbm5lbCIsIm9wZW5MaXZlRmluaXNoTW9kYWwiLCJjb21tYW5kIiwiY2hhbm5lbElkIiwiYWN0aXZlX2NoYW5uZWwiLCJvdGhlcnMiLCJtYW5hZ2VycyIsImFsZXJ0U3RyIiwibWFuYWdlcl9pbmNsdWRlcyIsImluY2x1ZGVzIiwid2l0aG91dCIsImFsbG93Iiwibm90aWZpY2F0aW9uIiwiaGlzdG9yeUl0ZW0iLCJ1bml0IiwiYW1vdW50IiwicG9pbnRTdGF0dXMiLCJQT0lOVF9TVEFUVVNfTk9URU5PVUdIIiwic2VuZF9ub3RlX2NudCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfeDkiLCJzZW5kU29ja2V0IiwiY29ubmVjdGVkIiwic2VuZE1lc0NvbnRlbnRWaWV3ZWQiLCJjb250ZW50VHlwZSIsImNvbnRlbnRfaWQiLCJjb250ZW50X3R5cGUiLCJzZW5kTWVzTGlrZSIsImRzdFR5cGUiLCJkc3RJZCIsImlzTGlrZSIsImRlc3RfdHlwZSIsImRlc3RfaWQiLCJpc19saWtlIiwic2VuZE1lc0FkZEZhdm91cmUiLCJpc19mYXZvdXIiLCJzZW5kTWVzRm9sbG93IiwiZm9sbG93ZXJJZCIsImlzRm9sbG93IiwiZm9sbG93ZXJfaWQiLCJpc19mb2xsb3ciLCJyZXF1ZXN0UmV2aWV3cyIsImlkQXJyYXkiLCJnZXRBcnJheSIsInJlcXVlc3RTZXR0aW5nIiwicmVxdWVzdENhdGVnb3JpZXMiLCJyZXF1ZXN0R2V0Q29udGVudHMiLCJoYXZlSGVhZGVyIiwicmVxdWVzdEFkZFJldmlldyIsInJldmlld0l0ZW0iLCJkc3RJdGVtSWQiLCJ1cGRhdGVBcnJheSIsInJlcXVlc3RCdXlUaWNrZXQiLCJjYXRlZ29yeUlkIiwidGlja2V0SWQiLCJ1c2VySWQiLCJjYXRlZ29yeV9pZCIsImdldFNldHRpbmciLCJfcmVmNiIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2Iiwic2V0dGluZ0RhdGEiLCJfeDEwIiwiX3gxMSIsImdldFBvcHVwIiwiX3JlZjciLCJfY2FsbGVlNyIsInBvcHVwUmVzIiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwicG9wdXBEYXRhIiwiX3gxMiIsIl94MTMiLCJmdW5jU2VuZE5vdGUiLCJyZWNlaXZlcnMiLCJub3RlQ29udGVudCIsInJlY2VpdmVyIiwidXBkYXRlTXlBZHZlcnQiLCJhZHZlcnRJZCIsInVwZGF0ZURhdGEiLCJfcmVmOCIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiaXNDdXN0b20iLCJ1cGRhdGUiLCJfeDE0IiwiX3gxNSIsInVwZGF0ZURiRmllbGQiLCJkYl9jb2xsZWN0aW9uIiwiZGJfaXRlbV9pZCIsImZpbHRlcl9rZXkiLCJ1cGRhdGVfZGF0YSIsIl9yZWY5IiwiX2NhbGxlZTkiLCJmaWx0ZXJGaWVsZCIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsIm1hcCIsIl94MTYiLCJfeDE3IiwiZnVuY0dldE1vbmV5U3RhdGUiLCJfcmVmMTAiLCJfY2FsbGVlMTAiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsIl94MTgiLCJfeDE5IiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENB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QUFDLENBQUM7UUFDeENELEVBQUUsR0FBR0MsV0FBVyxDQUFDOFYsUUFBUTtNQUM3QjtNQUNBLE9BQU8sSUFBSSxDQUFDQSxRQUFRO0lBQ3hCO0VBQUM7RUFBQSxPQUFBOVYsV0FBQTtBQUFBO0FBQUFFLHlGQUFBLENBM0JnQkYsV0FBVyxjQUNWLElBQUk7QUFETTtBQTIxQnpCLElBQU11RSxXQUFXLEdBQUd2RSxXQUFXLENBQUM2VixXQUFXLENBQUMsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjk2NWUwZTM2YWVmMzkxODY2MTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2h0dHBSZXEsIGdldFNlcnZlclVybCwgcmVxSW5pdH0gZnJvbSBcIi4vUmVxXCI7XG5pbXBvcnQgKiBhcyBNZWRpYXMgZnJvbSBcIi4uL3JlZHV4L21vZHVsZXMvbWVkaWFzXCI7XG5pbXBvcnQgKiBhcyBDb250ZW50cyBmcm9tIFwiLi4vcmVkdXgvbW9kdWxlcy9jb250ZW50c1wiO1xuaW1wb3J0ICogYXMgVXNlcnMgZnJvbSBcIi4uL3JlZHV4L21vZHVsZXMvdXNlcnNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3JlZHV4L21vZHVsZXMvY2hhdC9hY3Rpb25zL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIFN5c3RlbSBmcm9tIFwiLi4vcmVkdXgvbW9kdWxlcy9zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIE5vdGUgZnJvbSAnLi4vcmVkdXgvbW9kdWxlcy9ub3RlJztcbmltcG9ydCAqIGFzIENhdGVnb3JpZXMgZnJvbSAnLi4vcmVkdXgvbW9kdWxlcy9jYXRlZ29yaWVzJztcbmltcG9ydCAqIGFzIFJlZHV4UHJvdG8gZnJvbSAnLi4vcmVkdXgvY29tbW9uL1Byb3BvVHlwZXMnXG5pbXBvcnQgSHR0cE1hbmFnZXIgZnJvbSBcIi4vUmVxXCI7XG5pbXBvcnQgKiBhcyBDT05TVCBmcm9tICcuLi9tb2RlbC9Db25zdCc7XG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9uTWFuYWdlcn0gZnJvbSAncmVhY3Qtbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgJ3JlYWN0LW5vdGlmaWNhdGlvbnMvbGliL25vdGlmaWNhdGlvbnMuY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IF9sb2Rhc2ggZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHthdXRofSBmcm9tIFwiLi9BdXRoXCJcbmltcG9ydCB7aTE4bn0gZnJvbSAnLi4vaTE4bic7XG5cbmxldCB2bSA9IG51bGw7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhU2VydmljZSB7XG4gICAgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcblxuICAgIHN0b3JlID0ge307XG4gICAgX2FwcFNldE1vZGFsU3RhdGUgPSBudWxsO1xuICAgIG9wZW5MaXZlRmluaXNoTW9kYWwgPSBudWxsO1xuICAgIGN1cnJlbnRSb3V0ZSA9ICcnO1xuICAgIGNoYXJnZUhpc3RvcnkgPSBbXTtcbiAgICBjaGFyZ2VTZXR0aW5nID0gW107XG4gICAgZXhjaGFuZ2VTZXR0aW5nID0gW107XG4gICAgcGFuU3RhdHVzID0ge1xuICAgICAgICBwYWdlOiAnJyxcbiAgICAgICAgYWN0aXZlVGFiOiAnJyxcbiAgICAgICAgc2Nyb2xsWTogMFxuICAgIH07XG4gICAgcG9wdXBEYXRhID0gW107XG5cbiAgICBzZWxlY3RUb3BUeXBlU3RyID0gJ1RPUENMSUNLJztcbiAgICBzZWxlY3RUb3BCZWZvcmVEYXRlU3RyID0gJ1RPVEFMVE9QJztcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcblxuICAgICAgICBpZiAoRGF0YVNlcnZpY2UuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgRGF0YVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgRGF0YVNlcnZpY2UoKTtcbiAgICAgICAgICAgIHZtID0gRGF0YVNlcnZpY2UuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5pdChzdG9yZSkge1xuICAgICAgICBsZXQgc3lzdGVtX2FpX3Rva2VuO1xuICAgICAgICBpZiAoc3RvcmUpIHtcbiAgICAgICAgICAgIHZtLnN0b3JlID0gc3RvcmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdXRoLmFpIHx8ICFhdXRoLmFpLnRva2VuKSB7XG4gICAgICAgICAgICBzeXN0ZW1fYWlfdG9rZW4gPSB2bS5zdG9yZS5nZXRTdGF0ZSgpLnN5c3RlbS5haS50b2tlbjtcbiAgICAgICAgICAgIGlmICghc3lzdGVtX2FpX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsX3BlcnNpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJzaXN0OkhMaXZlJykpO1xuICAgICAgICAgICAgICAgIGxldCBzeXN0ZW1fYWkgPSBsb2NhbF9wZXJzaXN0JiZsb2NhbF9wZXJzaXN0LnN5c3RlbSAmJiBKU09OLnBhcnNlKGxvY2FsX3BlcnNpc3Quc3lzdGVtKS5haTtcbiAgICAgICAgICAgICAgICBzeXN0ZW1fYWlfdG9rZW4gPSBsb2NhbF9wZXJzaXN0JiZsb2NhbF9wZXJzaXN0LnN5c3RlbSYmc3lzdGVtX2FpJiZzeXN0ZW1fYWkudG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdXRoLmFpLnRva2VuID0gc3lzdGVtX2FpX3Rva2VuO1xuICAgICAgICB9XG4gICAgICAgIHZtLmluaXRDb25uZWN0KCk7XG4gICAgICAgIHZtLmxvYWRJbml0RGF0YSgpO1xuICAgIH1cblxuICAgIGxvYWRJbml0RGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nLi4uXCIpO1xuICAgICAgICBjb25zdCBkaXNwYXRjaCA9IHZtLnN0b3JlLmRpc3BhdGNoO1xuICAgICAgICBkaXNwYXRjaChTeXN0ZW0uZ2V0U2V0dGluZ0FzeW5jKCkpOy8v7ISk7KCV7KCV67O0XG4gICAgICAgIGRpc3BhdGNoKENhdGVnb3JpZXMuZ2V0Q2F0ZWdvcmllc0FzeW5jKCkpOy8v7Lm07YWM6rOg66as7J6Q66OMXG4gICAgICAgIGRpc3BhdGNoKE5vdGUucmVxdWVzdFVucmVhZE5vdGUoKSk7Ly91bnJlYWQg7Kq97KeA7KCB7J6sXG4gICAgICAgIC8vIGRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hDaGFubmVscygpKTsvL+yxhO2MheyekOujjOyggeyerFxuICAgIH1cblxuICAgIGluaXRDb25uZWN0KCkge1xuICAgICAgICAvLyBjb25zdCBhaSA9IHZtLnN0b3JlLmdldFN0YXRlKCkuc3lzdGVtLmFpO1xuICAgICAgICBjb25zdCBhaSA9IGF1dGguYWk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYWkudG9rZW47XG4gICAgICAgIHJlcUluaXQodG9rZW4pO1xuICAgICAgICB2bS5zb2NrZXRfY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGdldE1lZGlhVHlwZShtaW1lKSB7XG4gICAgICAgIGlmICghbWltZSkge1xuICAgICAgICAgICAgcmV0dXJuICdpbnZhbGlkJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJyYXkgPSBtaW1lLnNwbGl0KCcvJyk7XG4gICAgICAgIGlmIChhcnJheSAmJiBhcnJheVswXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnaW52YWxpZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Tm90aWZpY2F0aW9uKHN0YXRlLCBzdHIsIGNhbGxCYWNrKSB7XG4gICAgICAgIC8vIGlmIChzdHIgIT09ICd0aW1lb3V0IG9mIDE1MDAwbXMgZXhjZWVkZWQnKSByZXR1cm47XG4gICAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXJbc3RhdGVdKFxuICAgICAgICAgICAgaTE4biYmaTE4bi50P2kxOG4udChzdHIpOnN0ciwvL2NvbnRlbnQgc3RyaW5nXG4gICAgICAgICAgICAnJywvL3RpdGxlXG4gICAgICAgICAgICA1MDAwLC8vZHVyYXRpb24gdGltZVxuICAgICAgICAgICAgKCkgPT4gey8vY2FsbEJhY2sgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoY2FsbEJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICAvKlxuICAgICogPT09PT09PT09PT09PWNoYXJnZT09PT09PT09PT09PT09PT09PT09PVxuICAgICogKi9cbiAgICBnZXRDaGFyZ2VIaXN0b3J5KGNoYXJnZV9leGNoYW5nZSwgbG9hZFR5cGUgPSAnaW5pdCcsIHBlclBhZ2UgPSAxMCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHBhcmFtID0ge307XG4gICAgICAgICAgICBwYXJhbS5maWx0ZXIgPSB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogZGF0YVNlcnZpY2UubWkuaWQsXG4gICAgICAgICAgICAgICAgdHlwZTogY2hhcmdlX2V4Y2hhbmdlID09PSAnY2hhcmdlJyA/IDEgOiAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhcmFtLnJhbmdlID0gSlNPTi5zdHJpbmdpZnkoW2xvYWRUeXBlID09PSAnbG9hZE1vcmUnID8gdm0uY2hhcmdlSGlzdG9yeS5sZW5ndGggOiAwLCBwZXJQYWdlXSk7XG4gICAgICAgICAgICBodHRwUmVxKCcvYXBpL2Nhc2hfaGlzdG9yeScsICdnZXQnLCBwYXJhbSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlX2V4Y2hhbmdlID09PSAnY2hhcmdlJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5jaGFyZ2VIaXN0b3J5ID0gcmVzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZtLmV4Y2hhbmdlSGlzdG9yeSA9IHJlcztcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldENoYXJnZVNldCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBzZXR0aW5nUmVzID0gYXdhaXQgaHR0cFJlcShcbiAgICAgICAgICAgICAgICAnL2FwaS9jYXNoX3NldCcsXG4gICAgICAgICAgICAgICAgJ2dldCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXNvbHZlKHNldHRpbmdSZXMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlcXVlc3RDb2luVG9Qb2ludChjb2luLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlcVBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGNvaW46IGNvaW4sXG4gICAgICAgICAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEh0dHBNYW5hZ2VyLnJlcSgnL2FwaS9jb2luX3RvX3BvaW50JywgJ3Bvc3QnLCByZXFQYXJhbSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29pbl9oaXN0b3J5KSB2bS5hZGRIaXN0b3J5KFN5c3RlbS5ISVNfVFlQRV9DT0lOLCByZXMuY29pbl9oaXN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5wb2ludF9oaXN0b3J5KSB2bS5hZGRIaXN0b3J5KFN5c3RlbS5ISVNfVFlQRV9QT0lOVCwgcmVzLnBvaW50X2hpc3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc3BhdGNoQWN0aW9uKFN5c3RlbS51cGRhdGVNSSwge3BvaW50OiByZXMudXNlci5wb2ludCwgY29pbjogcmVzLnVzZXIuY29pbn0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqKioqKioqKlxuICAgICAqIGNoYXJnZVN0YXRlOuy2qeyghOydvOuVjCdwb2ludCcsIO2ZmOyghOydvOuVjCdjb2luJ1xuICAgICAqIHNldHRpbmdJZDrrrLbsnYzsspjrpqzsnbwg65WMIHNldHRpbmdJZCxcbiAgICAgKiBtb25leTrrs4DtmZjtlaAg7ZiE6riIKOy2qeyghCksIOq4iO2ZlCjtmZjsoIQpLFxuICAgICAqIGV4Y2hhbmdlUmVzdWx0OuuzgO2ZmOuQnCDqsrDqs7wg7Y+s7J247Yq4KOy2qeyghCksIO2YhOq4iCjtmZjsoIQpXG4gICAgICogKioqKioqKioqKioqKi9cbiAgICBjaGFyZ2UoY2hhcmdlU3RhdGUsIHNldHRpbmdJZCA9IC0xLCBtb25leSA9IDAsIGV4Y2hhbmdlUmVzdWx0ID0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgICAgICBjb25zdCBjYXNoX3NldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgcG9pbnQ6IHZtLmNoYXJnZVNldHRpbmcsXG4gICAgICAgICAgICAgICAgY29pbjogdm0uZXhjaGFuZ2VTZXR0aW5nXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbWkgPSB2bS5zdG9yZS5nZXRTdGF0ZSgpLnN5c3RlbS5taTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7fSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nX2RhdGEgPSBjYXNoX3NldHRpbmdbY2hhcmdlU3RhdGVdW19sb2Rhc2guZmluZEluZGV4KGNhc2hfc2V0dGluZ1tjaGFyZ2VTdGF0ZV0sIHtpZDogc2V0dGluZ0lkfSldO1xuXG4gICAgICAgICAgICBpZiAoc2V0dGluZ0lkICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zZXR0aW5nSWQgPSBzZXR0aW5nSWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcy50eXBlID0gY2hhcmdlU3RhdGUgPT09ICdwb2ludCcgPyAxIDogMjtcbiAgICAgICAgICAgICAgICBwYXJhbXNbY2hhcmdlU3RhdGUgPT09ICdwb2ludCcgPyAnY2FzaCcgOiAnbW9uZXknXSA9IG1vbmV5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodHRwUmVxKCcvYXBpL2NoYXJnZV9leGNoYW5nZScsICdwb3N0JywgcGFyYW1zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FzaF9oaXN0b3J5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogbWkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBzZXR0aW5nSWQgIT09IC0xID8gc2V0dGluZ19kYXRhLnR5cGUgOiBjaGFyZ2VTdGF0ZSA9PT0gJ3BvaW50JyA/IDEgOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaDogc2V0dGluZ0lkICE9PSAtMSA/IHNldHRpbmdfZGF0YS5jYXNoIDogY2hhcmdlU3RhdGUgPT09ICdwb2ludCcgPyBtb25leSA6IGV4Y2hhbmdlUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXk6IHNldHRpbmdJZCAhPT0gLTEgPyBzZXR0aW5nX2RhdGEubW9uZXkgOiBjaGFyZ2VTdGF0ZSA9PT0gJ3BvaW50JyA/IGV4Y2hhbmdlUmVzdWx0IDogbW9uZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBjdGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdkb25lJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnRfY29pbl9oaXN0b3J5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogbWkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hhcmdlU3RhdGVdOiBzZXR0aW5nSWQgIT09IC0xID8gc2V0dGluZ19kYXRhLm1vbmV5IDogY2hhcmdlU3RhdGUgPT09ICdwb2ludCcgPyBleGNoYW5nZVJlc3VsdCA6IG1vbmV5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY2hhcmdlU3RhdGUgPT09ICdwb2ludCcgPyAxIDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IGAke2NoYXJnZVN0YXRlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdGltZTogbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG1pW2NoYXJnZVN0YXRlXSA9IG1pW2NoYXJnZVN0YXRlXSArICgoY2hhcmdlU3RhdGUgPT09ICdwb2ludCcgPyBleGNoYW5nZVJlc3VsdCA6IG1vbmV5KSAqIChjaGFyZ2VTdGF0ZSA9PT0gJ3BvaW50JyA/IDEgOiAtMSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZtLmRpc3BhdGNoQWN0aW9uKFN5c3RlbS51cGRhdGVNSSwge1tjaGFyZ2VTdGF0ZV06IG1pW2NoYXJnZVN0YXRlXX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXNoX2hpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJnZVN0YXRlID09PSAncG9pbnQnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hZGRIaXN0b3J5KFN5c3RlbS5ISVNfVFlQRV9DSEFSR0UsIGNhc2hfaGlzdG9yeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZtLmFkZEhpc3RvcnkoU3lzdGVtLkhJU19UWVBFX0VYQ0hBTkdFLCBjYXNoX2hpc3RvcnkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50X2NvaW5faGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmdlU3RhdGUgPT09ICdwb2ludCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZEhpc3RvcnkoU3lzdGVtLkhJU19UWVBFX1BPSU5ULCBwb2ludF9jb2luX2hpc3RvcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2bS5hZGRIaXN0b3J5KFN5c3RlbS5ISVNfVFlQRV9DT0lOLCBwb2ludF9jb2luX2hpc3RvcnkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRfZnJlZV9wb2ludF9pbmZvKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc3QgbWkgPSB2bS5zdG9yZS5nZXRTdGF0ZSgpLnN5c3RlbS5taTtcbiAgICAgICAgICAgIGlmIChtaS5pZCkge1xuICAgICAgICAgICAgICAgIGh0dHBSZXEoJy9hcGkvbW9uZXkvZ2V0X2ZyZWVfcG9pbnRfaW5mbycsICdnZXQnLCB7dXNlcl9pZDptaS5pZH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldF9mcmVlX3BvaW50X2luZm8gZXJyPT09PT09PT09PT09PT0nLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZEhpc3RvcnkoaGlzdG9yeVR5cGUsIGhpc3RvcnkpIHtcbiAgICAgICAgdm0uc3RvcmUgJiYgdm0uc3RvcmUuZGlzcGF0Y2goU3lzdGVtLmFkZEhpc3RvcnkoaGlzdG9yeVR5cGUsIGhpc3RvcnkpKTtcbiAgICB9XG5cbiAgICBwb3N0Q29udGVudEFkdmVydERhdGEoZGF0YSwgbW9kZWxUeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBodHRwUmVxKGAvYXBpLyR7bW9kZWxUeXBlfWAsICdwb3N0JywgZGF0YSkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKioqKlxuICAgICAqIHVwbG9hZE1lZGlhOiDri6Trp6TssrTtmZTsnbzsnYQg7ISc67KE7JeQIOyXheuhnOuTnO2VnOuLpC5cbiAgICAgKiAgICAgICAgICAg66Gc7Lus7JeQ7IScIOyYrOumsCDsnpDro4zripQg64uk7IucIOuLpOyatO2VoCDtlYTsmpTqsIAg7JeG7Jy866+A66GcIOyVseydmCDsnpDro4zrk7HroZ3rtoDsl5Ag7Jiu6rKo64aT6rOgIOq3uOqyg+ydhCDsl4XroZzrk5ztlZzri6QuXG4gICAgICogdHlwZTog64uk66ek7LK0IOyiheulmCBpbWFnZSwgdm9pY2UsIHZpZGVvLFxuICAgICAqIHBhdGg6IOybkOuzuO2ZlOydvOydmCDqsr3roZxcbiAgICAgKiBmcm9tOiDrp6TssrTrpbwg7Jis66as64qUIOuMgOyDgSwgY2hhdCwgc29jaWFsLCB1c2VycHJvZmlsZSwgLi4uXG4gICAgICogYk9yaWdpbk5hbWU6IOybkOuzuOydtOumhOydhCDsnKDsp4DtlZjqsqDripTqsIA/ICAgIOyEnOuyhOyXkCDsmKzrprTrlYwg66Gc7Lus7JeQIOuzteyCrO2VmOuptOyEnCDsnbTrpoTsnYQg67OA6rK97ZWY6rKg64qU6rCAIO2VmOuKlOqyg+ydhCDqsrDsoJXtlZzri6QuXG4gICAgICogY2JQYXRoIDog6rK966Gc66W8IOqysOygle2VnCDtm4Tsl5Ag7Zi47Lac65CY64qUIOy9nOuwse2VqOyImOydtOuLpC5cbiAgICAgKiAqKioqKiovXG4gICAgZGF0YVVSTHRvRmlsZShkYXRhLCBmaWxlbmFtZSkge1xuICAgICAgICBsZXQgYXJyID0gZGF0YS5zcGxpdCgnLCcpLCBtaW1lID0gYXJyWzBdLm1hdGNoKC86KC4qPyk7LylbMV0sXG4gICAgICAgICAgICBic3RyID0gYXRvYihhcnJbMV0pLCBuID0gYnN0ci5sZW5ndGgsIHU4YXJyID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgICAgIHU4YXJyW25dID0gYnN0ci5jaGFyQ29kZUF0KG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRmlsZShbdThhcnJdLCBmaWxlbmFtZSwge3R5cGU6IG1pbWV9KTtcbiAgICB9XG5cbiAgICB1cGxvYWRNZWRpYSh0eXBlLCBzcmNQYXRoLCBkdXJhdGlvbiA9IDAsIGZyb20sIGJPcmlnaW5OYW1lID0gZmFsc2UsIGZpbGUsIGNiUGF0aCA9IG51bGwsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyDtjIzsnbzsnbTrpoTsnYQg6rKw7KCV7ZWc64ukLlxuICAgICAgICAgICAgbGV0IHNyY1BhdGhFbGVtID0gdm0uc3BsaXRQYXRoKGZpbGUubmFtZSk7XG4gICAgICAgICAgICBsZXQgZHN0RmlsZU5hbWUgPSAhYk9yaWdpbk5hbWUgPyBgJHt2bS5nZXRVbmlxdWVGaWxlTmFtZShpbmRleCArIDEpfWAgOiBzcmNQYXRoRWxlbS5maWxlbmFtZTtcbiAgICAgICAgICAgIGxldCBkc3RGdWxsTmFtZSA9IGAke2RzdEZpbGVOYW1lfSR7c3JjUGF0aEVsZW0uZXh0ZW5zaW9ufWA7XG4gICAgICAgICAgICBsZXQgZHN0RGlyUGF0aCA9ICcvYXNzZXRzL2NvbnRlbnQnO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gYCR7ZHN0RGlyUGF0aH0vJHtkc3RGdWxsTmFtZX1gO1xuICAgICAgICAgICAgaWYgKGNiUGF0aClcbiAgICAgICAgICAgICAgICBjYlBhdGgoc3JjUGF0aCwgdXJsLCBkdXJhdGlvbiwgdHlwZSk7XG5cbiAgICAgICAgICAgIGxldCBuZXdNZWRpYSA9IE9iamVjdC5hc3NpZ24oe30sIE1lZGlhcy5NRURJQSk7XG4gICAgICAgICAgICBuZXdNZWRpYS5wYXRoID0gc3JjUGF0aDtcbiAgICAgICAgICAgIG5ld01lZGlhLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICBuZXdNZWRpYS5kaXJlY3Rpb24gPSBNZWRpYXMuRElSRUNUSU9OX1VQO1xuICAgICAgICAgICAgbmV3TWVkaWEudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICBuZXdNZWRpYS5mcm9tID0gZnJvbTtcbiAgICAgICAgICAgIG5ld01lZGlhLmZpbGUgPSBmaWxlO1xuXG4gICAgICAgICAgICB2bS5kaXNwYXRjaEFjdGlvbihNZWRpYXMuYWRkTmV3LCB7dXJsOiB1cmwsIHZhbHVlOiBuZXdNZWRpYX0pO1xuICAgICAgICAgICAgdm0uZGlzcGF0Y2hBY3Rpb24oTWVkaWFzLnNldFN0YXR1cywge3VybDogdXJsLCBzdGF0dXM6IE1lZGlhcy5TVEFUVVNfUkVRVUVTVH0pO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc0Z1bmMgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uZGlzcGF0Y2hBY3Rpb24oTWVkaWFzLnNldFByb2dyZXNzLCB7dXJsOiB1cmwsIHByb2dyZXNzOiBwcm9ncmVzc30pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IHVwUmVzdWx0ID0gYXdhaXQgdm0udXBsb2FkRmlsZSh0eXBlLCBmcm9tLCBmaWxlLCBkc3RGaWxlTmFtZSwgcHJvZ3Jlc3NGdW5jKTtcblxuICAgICAgICAgICAgICAgIHZtLmRpc3BhdGNoQWN0aW9uKE1lZGlhcy5zZXRTdWNjZXNzLCB7dXJsOiB1cmx9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVwUmVzdWx0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB2bS5kaXNwYXRjaEFjdGlvbihNZWRpYXMuc2V0RXJyb3IsIHVybCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBsb2FkRmlsZSh0eXBlLCBmcm9tLCBmaWxlLCBmaWxlbmFtZSwgcHJvZ3Jlc3NGdW5jKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHZtLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICBsZXQgdXBsb2FkZXIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gXCJmaWVsZD1maWxlXCI7XG4gICAgICAgICAgICB1cGxvYWRlci5vcGVuKCdQT1NUJywgZ2V0U2VydmVyVXJsKCkgKyAnL2FwaS9zeXN0ZW0vZmlsZV91cGxvYWQ/JyArIHBhcmFtcywgdHJ1ZSk7XG4gICAgICAgICAgICB1cGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCd0eXBlJywgdHlwZSk7XG4gICAgICAgICAgICB1cGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCdmcm9tJywgZnJvbSk7XG4gICAgICAgICAgICBsZXQgbWkgPSBzdGF0ZSYmc3RhdGUuc3lzdGVtJiZzdGF0ZS5zeXN0ZW0ubWk7XG4gICAgICAgICAgICB1cGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCd1c2VyX2lkJywgbWkuaWQpO1xuICAgICAgICAgICAgdXBsb2FkZXIuc2V0UmVxdWVzdEhlYWRlcignZmlsZW5hbWUnLCBmaWxlbmFtZSk7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHN0YXRlLnN5c3RlbS5haS50b2tlbjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhU2VydmljZS51cGxvYWRGaWxlPT09PT1taS5pZD09PT09JywgdG9rZW4pO1xuICAgICAgICAgICAgdXBsb2FkZXIuc2V0UmVxdWVzdEhlYWRlcignYXV0aG9yaXphdGlvbicsIHRva2VuKTtcblxuICAgICAgICAgICAgdXBsb2FkZXIub25wcm9ncmVzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gcGFyc2VJbnQoZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwLCAxMCk7XG5cbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Z1bmMocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHVwbG9hZGVyLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWQgRXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdXBsb2FkZXIub250aW1lb3V0ID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkIHRpbWVvdXQnLCBlKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdXBsb2FkZXIub25hYm9ydCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZCBhYm9ydGVkJywgZSk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHVwbG9hZGVyLm9ubG9hZCA9IChlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZSh1cGxvYWRlci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzICE9PSAnb2JqZWN0JyB8fCAhcmVzLnJlc3VsdCB8fCByZXMucmVzdWx0ICE9PSBcIm9rXCIgfHwgIXJlcy5mbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ3VwbG9hZCByZXN1bHQgZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXMuZm5hbWUgPSByZXMuZm5hbWUucmVwbGFjZSgnLi8nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB1cGxvYWRlci5zZW5kKGRhdGEpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBjb21tb25cbiAgICAqICovXG4gICAgc3BsaXRQYXRoID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHBhdGgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIikubWF0Y2goLyguKlxcLyk/KFxcLi4qP3wuKj8pKFxcLlteLl0qPyk/KCMuKiR8XFw/LiokfCQpLyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJuYW1lOiByZXN1bHRbMV0gfHwgXCJcIixcbiAgICAgICAgICAgIGZpbGVuYW1lOiByZXN1bHRbMl0gfHwgXCJcIixcbiAgICAgICAgICAgIGV4dGVuc2lvbjogcmVzdWx0WzNdIHx8IFwiXCIsXG4gICAgICAgICAgICBwYXJhbXM6IHJlc3VsdFs0XSB8fCBcIlwiXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGdldFVuaXF1ZUZpbGVOYW1lKGluZGV4ID0gMSkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHZtLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIGxldCBtaSA9IHN0YXRlJiZzdGF0ZS5zeXN0ZW0mJnN0YXRlLnN5c3RlbS5taTtcbiAgICAgICAgcmV0dXJuIGAke21pLmlkfV8ke21vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoXCJZWVlZTU1ERGhobW1zc1wiKX1fJHtpbmRleH1gO1xuICAgIH1cblxuICAgIGRpc3BhdGNoQWN0aW9uKGFjdGlvbiwgcGF5bG9hZCkge1xuICAgICAgICB2bS5zdG9yZS5kaXNwYXRjaChhY3Rpb24ocGF5bG9hZCkpO1xuICAgIH1cblxuICAgIC8q7ZW064u5IGlkIOulvCDqsIDsp4DripQgY29udGVudHMg7J6Q66OM66W8IOqwgOyguOyYqOuLpC5cbiAgICAqIOydtOuvuCDsoIHsnqzrkJwgY29udGVudHMg66qp66Gd7JeQIOyalOq1rO2VmOuKlCDsnpDro4zqsIAg7JeG64qUIOqyveyasCDqsJzrs4TsoIHsnLzroZwg7Zi47Lac7ZWc64ukLiovXG4gICAgZ2V0Q29udGVudEJ5SWQgPSAoaWQpID0+IHtcbiAgICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGlkKTtcbiAgICAgICAgaHR0cFJlcSgnL2FwaS9jb250ZW50LycgKyBpZCwgJ2dldCcpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZGlzcGF0Y2hBY3Rpb24oQ29udGVudHMuQWN0QWRkT25lSXRlbSwge3R5cGU6ICdjb250ZW50cycsIGl0ZW06IHJlc30pO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0ZSA9IHZtLnN0b3JlLmdldFN0YXRlKCk7Ly8udXNlcnNbcmVzLnVzZXJfaWRdXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gc3RhdGUudXNlcnM7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSB1c2Vyc1tyZXMudXNlcl9pZF07XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmRpc3BhdGNoQWN0aW9uKFVzZXJzLmdldCwgcmVzLnVzZXJfaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vZGF0YUlkPT7svZjthZDtirggb3Ig64yT6riAIOyVhOydtOuUlCwgdHlwZT0+IGNvbnRlbnQgb3IgcmV2aWV3XG4gICAgZGVsZXRlUG9zdChkYXRhSWQsIHR5cGUsIGNvbnRlbnRJZCkgey8vZGF0YUlkOiBjb250ZW50IGlkXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGFJZCkgcmV0dXJuIHJlamVjdCgnaW52YWxpZCBkYXRhSWQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgUG9zdD09PT09PT09PT09JywgdHlwZSk7XG4gICAgICAgICAgICBodHRwUmVxKCcvYXBpLycgKyB0eXBlICsgJy8nICsgZGF0YUlkLCAnZGVsZXRlJykudGhlbihcbiAgICAgICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBzdGF0ZSA9IHZtLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnN0b3JlICYmIHZtLnN0b3JlLmRpc3BhdGNoKENvbnRlbnRzLnJlbW92ZUNvbnRlbnQoZGF0YUlkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JldmlldycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnN0b3JlICYmIHZtLnN0b3JlLmRpc3BhdGNoKENvbnRlbnRzLnJlbW92ZVJldmlldyhkYXRhSWQsIGNvbnRlbnRJZCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGFubmVsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uc3RvcmUgJiYgdm0uZGlzcGF0Y2hBY3Rpb24oYWN0aW9ucy5jaGFubmVsRXhwaXJlZCwgcGFyc2VJbnQoZGF0YUlkKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLypcbiAgICAqIOyGjOy8k1xuICAgICogKi9cbiAgICBzb2NrZXRfY29ubmVjdCgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygn7IaM7LyT66Co6rKwJywgZ2V0U2VydmVyVXJsKCkpXG5cbiAgICAgICAgdm0uc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZ2V0U2VydmVyVXJsKCkpO1xuICAgICAgICB2bS5zb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAocF9zb2NrZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdm0uc3RvcmUuZ2V0U3RhdGUoKS5zeXN0ZW0uYWkudG9rZW47XG4gICAgICAgICAgICBjb25zdCBhaV90b2tlbiA9IGF1dGguYWkmJmF1dGguYWkudG9rZW47XG4gICAgICAgICAgICBpZiAoIWFpX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0uc29ja2V0LmVtaXQoJ21lc1NvY2tJbmZvJywge3Rva2VuOiBhaV90b2tlbn0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdm0uc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB2bS5zdG9yZS5nZXRTdGF0ZSgpLnN5c3RlbS5haS50b2tlbjtcbiAgICAgICAgICAgIGNvbnN0IGFpX3Rva2VuID0gYXV0aC5haSYmYXV0aC5haS50b2tlbjtcbiAgICAgICAgICAgIGlmICghYWlfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnNvY2tldC5lbWl0KCdtZXNTb2NrSW5mbycsIHt0b2tlbjogYWlfdG9rZW59KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdm0uc29ja2V0Lm9uKCd0b2tlbiBlcnJvcicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YVNlcnZpY2Uuc29ja2V0Lm9uIHRva2VuIGVycm9yPT09PT09PT09PT09Jyk7XG4gICAgICAgICAgICB2bS5kaXNwYXRjaEFjdGlvbihSZWR1eFByb3RvLnJlc2V0UmVkdXgpO1xuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnL2xvZ2luJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZtLnNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uIChwX3NvY2tldCkge1xuICAgICAgICAgICAgLy8gdm0uc2hvd05vdGlmaWNhdGlvbignZXJyb3InLCAnc29ja2V0IGRpc2Nvbm5lY3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/ri6TrpbjrjbDshJwg64K0IGlkIOuhnCDqsIDsnoUuLi4uLlxuICAgICAgICB2bS5zb2NrZXQub24oJ21lc0V4aXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc29ja2V0Lm9uIG1lc0V4aXQuLi4uLi4uLi4uLi4uLi4nKTtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoJy9sb2dpbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+yxhO2Mheq0gOugqFxuICAgICAgICB2bS5zb2NrZXQub24oJ3VzZXJMZWF2ZUNoYW5uZWwnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtjaGFubmVsX2lkLCB1c2VyX2lkLCB0eXBlfSA9IGRhdGE7XG4gICAgICAgICAgICBpZiAoIWNoYW5uZWxfaWQgfHwgIXVzZXJfaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZGF0YS5pc0FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgdm0uZGlzcGF0Y2hBY3Rpb24oYWN0aW9ucy51cGRhdGVDaGFubmVsVXNlciwgZGF0YSk7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHZtLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICBjb25zdCBtaSA9IHN0YXRlJiZzdGF0ZS5zeXN0ZW0mJnN0YXRlLnN5c3RlbS5taTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWxzID0gc3RhdGUuY2hhdCYmc3RhdGUuY2hhdC5jaGFubmVscztcbiAgICAgICAgICAgIGxldCBhY3RpdmVDaGFubmVsSW5mbyA9IF9sb2Rhc2guZmlsdGVyKGNoYW5uZWxzLmRhdGEsIHtpZDogY2hhbm5lbF9pZH0pWzBdO1xuICAgICAgICAgICAgaWYgKHR5cGU9PT0na2lja291dCcgJiYgdXNlcl9pZCA9PT0gbWkuaWQgJiYgYWN0aXZlQ2hhbm5lbEluZm8gJiYgYWN0aXZlQ2hhbm5lbEluZm8uY3JlYXRvciAhPT0gbWkuaWQpIHtcbiAgICAgICAgICAgICAgICB2bS5fYXBwU2V0TW9kYWxTdGF0ZSYmdm0uX2FwcFNldE1vZGFsU3RhdGUoJ2FsZXJ0JywgJ0NIQVRFWElUJywgJ0RPTkUnLCBSb3V0ZXIuYmFjayk7XG4gICAgICAgICAgICAgICAgdm0uc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVDaGFubmVsSW5mbyhjaGFubmVsX2lkLCB7a2lja091dGVkOiB0cnVlfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZtLnNvY2tldC5vbigndXNlckpvaW5DaGFubmVsJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEuY2hhbm5lbF9pZCB8fCAhZGF0YS51c2VyX2lkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGRhdGEuaXNBZGQgPSB0cnVlO1xuICAgICAgICAgICAgdm0uZGlzcGF0Y2hBY3Rpb24oYWN0aW9ucy51cGRhdGVDaGFubmVsVXNlciwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2bS5zb2NrZXQub24oJ25ld0NoYW5uZWwnLCBjaGFubmVsID0+IHtcbiAgICAgICAgICAgIHZtLmRpc3BhdGNoQWN0aW9uKGFjdGlvbnMuYWRkQ2hhbm5lbCwgY2hhbm5lbClcbiAgICAgICAgfSk7XG4gICAgICAgIHZtLnNvY2tldC5vbignbmV3TWVzc2FnZScsIGFzeW5jIChtZXNzYWdlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25ld01lc3NhZ2U9PT09PT09c3RhcnQuLi4uLi49PT09PT09PT0nLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLm1vZGUgPT09ICdwcml2YXRlJykgey8vbW9kZTpjaGFubmVsPSfquLDtg4AnLCBsaXZlLCBwcml2YXRlOicxOjEnXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsX2lkID0gQ09OU1QuQ1VTVE9NX1NFUlZJQ0VfQ0hBTk5FTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGU9PT0nZ2lmdCcgJiYgbWVzc2FnZS5jb250ZW50ICYmIG1lc3NhZ2UuY29udGVudC5kYXRhICYmIG1lc3NhZ2UuY29udGVudC5kYXRhLmdpZnRfaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2lmdF9pZCA9IG1lc3NhZ2UuY29udGVudC5kYXRhLmdpZnRfaWQ7XG4gICAgICAgICAgICAgICAgbGV0IGdpZnRfY250ID0gbWVzc2FnZS5jb250ZW50LmRhdGEuY250O1xuICAgICAgICAgICAgICAgIGxldCBnaWZ0X2RhdGEgPSBhd2FpdCBodHRwUmVxKCcvYXBpL2dpZnQvJytnaWZ0X2lkLCAnZ2V0Jyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5jb250ZW50LmRhdGEuaW1nID0gZ2lmdF9kYXRhLmltZztcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFubmVscyA9IHZtLnN0b3JlLmdldFN0YXRlKCkuY2hhdC5jaGFubmVscztcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlQ2hhbm5lbEluZm8gPSBfbG9kYXNoLmZpbHRlcihjaGFubmVscy5kYXRhLCB7aWQ6IG1lc3NhZ2UuY2hhbm5lbF9pZH0pWzBdO1xuICAgICAgICAgICAgICAgIGxldCBuZXdfZ2lmdHMgPSBhY3RpdmVDaGFubmVsSW5mbyYmYWN0aXZlQ2hhbm5lbEluZm8uZ2lmdHM/YWN0aXZlQ2hhbm5lbEluZm8uZ2lmdHM6W107XG4gICAgICAgICAgICAgICAgbmV3X2dpZnRzLnB1c2goe2dpZnRfaWQ6Z2lmdF9pZCwgc2VuZGVyOm1lc3NhZ2Uuc2VuZGVyfSk7XG4gICAgICAgICAgICAgICAgdm0uc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVDaGFubmVsSW5mbyhtZXNzYWdlLmNoYW5uZWxfaWQsIHtuTGlrZTogYWN0aXZlQ2hhbm5lbEluZm8mJmFjdGl2ZUNoYW5uZWxJbmZvLm5MaWtlICsgKGdpZnRfZGF0YS5wcmljZSAqIGdpZnRfY250KSwgZ2lmdHM6IG5ld19naWZ0c30pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZT09PSd0ZXh0JyAmJiBtZXNzYWdlLmNvbnRlbnQgJiYgbWVzc2FnZS5jb250ZW50LmRhdGEgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2UuY3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25ld01lc3NhZ2U9PT09PT09PT09PT09PT09JywgbWVzc2FnZSk7XG4gICAgICAgICAgICB2bS5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmFkZE1lc3NhZ2UobWVzc2FnZSkpO1xuICAgICAgICAgICAgaWYgKHZtLmN1cnJlbnRSb3V0ZSA9PT0gQ09OU1QuUk9VVEVfQ09OU1VMVEFUSU9OKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVzc2FnZS5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZtLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuc2V0VW5yZWFkQ291bnQodm0uc3RvcmUuZ2V0U3RhdGUoKS5jaGF0Lm1lc3NhZ2VzLnVucmVhZENvdW50ICsgMSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdm0uc29ja2V0Lm9uKCdjaGFubmVsRXhwaXJlZCcsIGNoYW5uZWxfaWQgPT4ge1xuICAgICAgICAgICAgdm0uZGlzcGF0Y2hBY3Rpb24oYWN0aW9ucy5jaGFubmVsRXhwaXJlZCwgcGFyc2VJbnQoY2hhbm5lbF9pZCkpO1xuICAgICAgICAgICAgdm0uc3RvcmUuZGlzcGF0Y2goU3lzdGVtLnNldEVudGVyQ2hhbm5lbChjaGFubmVsX2lkLCBmYWxzZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdm0uc29ja2V0Lm9uKCdzdG9wQ2hhbm5lbCcsIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2NoYW5uZWxfaWQsIHR5cGUsIGJsb2NrX3JlYXNvbn0gPSBkYXRhO1xuICAgICAgICAgICAgY29uc3QgY2hhbm5lbHMgPSB2bS5zdG9yZS5nZXRTdGF0ZSgpLmNoYXQuY2hhbm5lbHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWNjZXB0IHNvY2tldC5vbiBzdG9wQ2hhbm5lbD09PT09PScsIGRhdGEuY2hhbm5lbF9pZCk7XG4gICAgICAgICAgICB2bS5kaXNwYXRjaEFjdGlvbihhY3Rpb25zLmNoYW5uZWxFeHBpcmVkLCBwYXJzZUludChkYXRhLmNoYW5uZWxfaWQpKTtcbiAgICAgICAgICAgIHZtLnN0b3JlLmRpc3BhdGNoKFN5c3RlbS5zZXRFbnRlckNoYW5uZWwoZGF0YS5jaGFubmVsX2lkLCBmYWxzZSkpO1xuICAgICAgICAgICAgaWYgKGNoYW5uZWxzICYmIGNoYW5uZWxzLmFjdGl2ZUNoYW5uZWwgJiYgY2hhbm5lbHMuYWN0aXZlQ2hhbm5lbCA9PT0gY2hhbm5lbF9pZCkge1xuICAgICAgICAgICAgICAgIHZtLm9wZW5MaXZlRmluaXNoTW9kYWwgJiYgdm0ub3BlbkxpdmVGaW5pc2hNb2RhbChjaGFubmVsX2lkLCB0eXBlLCBibG9ja19yZWFzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdm0uc29ja2V0Lm9uKCdjaGFubmVsV2lsbEV4cGlyZScsIGNoYW5uZWxfaWQgPT4ge1xuICAgICAgICAgICAgdm0uZGlzcGF0Y2hBY3Rpb24oYWN0aW9ucy5jaGFubmVsV2lsbEV4cGlyZSwgY2hhbm5lbF9pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2bS5zb2NrZXQub24oJ2NvbW1hbmRDaGFubmVsJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7Y2hhbm5lbF9pZCwgdXNlcl9pZCwgY29tbWFuZH0gPSBkYXRhO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB2bS5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgbWkgPSBzdGF0ZS5zeXN0ZW0ubWk7XG5cbiAgICAgICAgICAgIGlmIChtaS5pZCAhPT0gdXNlcl9pZCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgY2hhbm5lbHMgPSBzdGF0ZS5jaGF0LmNoYW5uZWxzO1xuICAgICAgICAgICAgY29uc3QgY2hhbm5lbElkID0gYWN0aW9ucy5nZXRDaGFubmVsSWRXaXRoUmF3SWQoY2hhbm5lbF9pZCwgdm0uc3RvcmUpO1xuXG4gICAgICAgICAgICBpZiAoIWNoYW5uZWxJZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVfY2hhbm5lbCA9IGNoYW5uZWxzLmRhdGFbY2hhbm5lbElkXTtcbiAgICAgICAgICAgIGxldCBvdGhlcnMgPSBhY3RpdmVfY2hhbm5lbC5vdGhlcnM7XG4gICAgICAgICAgICBsZXQgbWFuYWdlcnMgPSBhY3RpdmVfY2hhbm5lbC5tYW5hZ2VycztcbiAgICAgICAgICAgIGxldCBhbGVydFN0ciA9ICcnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbW1hbmRDaGFubmVsIGZpcnN0IG1hbmFnZXJzPT09PT09PScsIHttYW5hZ2VycywgY29tbWFuZCwgdXNlcl9pZH0pO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQgPT09IENPTlNULkNIQVRfQUREX01BTkFHRVJfVVNFUiB8fCBjb21tYW5kID09PSBDT05TVC5DSEFUX0RFTExfTUFOQUdFUl9VU0VSKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hbmFnZXJfaW5jbHVkZXMgPSBfbG9kYXNoLmluY2x1ZGVzKG1hbmFnZXJzLCB1c2VyX2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZCA9PT0gQ09OU1QuQ0hBVF9BRERfTUFOQUdFUl9VU0VSICYmICFtYW5hZ2VyX2luY2x1ZGVzICkge1xuICAgICAgICAgICAgICAgICAgICBtYW5hZ2Vycy5wdXNoKHVzZXJfaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihtYW5hZ2VyX2luY2x1ZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZXJzID0gX2xvZGFzaC53aXRob3V0KG1hbmFnZXJzLCB1c2VyX2lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxlcnRTdHIgPSBjb21tYW5kPT09Q09OU1QuQ0hBVF9BRERfTUFOQUdFUl9VU0VSPydST09NTUFOQUdFUic6J0RFTE1BTkFHRVInO1xuICAgICAgICAgICAgICAgIHZtLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlQ2hhbm5lbEluZm8oY2hhbm5lbF9pZCwge21hbmFnZXJzOiBtYW5hZ2Vyc30pKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kID09PSBDT05TVC5DSEFUX0FMTE9XX1VTRVIgfHwgY29tbWFuZCA9PT0gQ09OU1QuQ0hBVF9ESVNBTExPV19VU0VSKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG90aGVycykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG90aGVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS51c2VyX2lkID09PSB1c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFsbG93ID0gY29tbWFuZCA9PT0gJ2FsbG93Q2hhdCcgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbGVydFN0ciA9IGNvbW1hbmQ9PT1DT05TVC5DSEFUX0FMTE9XX1VTRVI/J0NIQVRFTkFCTEUnOidDSEFUVU5BQkxFJztcbiAgICAgICAgICAgICAgICB2bS5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZUNoYW5uZWxJbmZvKGNoYW5uZWxfaWQsIHtvdGhlcnM6IG90aGVyc30pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0uX2FwcFNldE1vZGFsU3RhdGUmJnZtLl9hcHBTZXRNb2RhbFN0YXRlKCdhbGVydCcsIGFsZXJ0U3RyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZtLnNvY2tldC5vbignY2hhbmdlTm90aWZpY2F0aW9uJywgZGF0YSA9PiB7XG4gICAgICAgICAgICB2bS5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmNoYW5nZU5vdGlmaWNhdGlvbihkYXRhLmNoYW5uZWxfaWQsIGRhdGEubm90aWZpY2F0aW9uKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2bS5zb2NrZXQub24oJ25ld05vdGUnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHZtLnN0b3JlLmRpc3BhdGNoKE5vdGUuYWRkTm90ZShkYXRhLCB0cnVlKSk7XG4gICAgICAgICAgICB2bS5zdG9yZS5kaXNwYXRjaChOb3RlLmFkZFVucmVhZE5vdGVJZChbZGF0YS5pZF0pKTtcbiAgICAgICAgICAgIHZtLnNob3dOb3RpZmljYXRpb24oJ2luZm8nLCAn7IOIIOyqveyngOqwgCDsmZTsirXri4jri6QuJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2bS5zb2NrZXQub24oJ3BvaW50Q2hhbmdlJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7aGlzdG9yeUl0ZW0sIHVuaXQsIGFtb3VudH0gPSBkYXRhO1xuICAgICAgICAgICAgLy8gdm0uc3RvcmUuZGlzcGF0Y2goU3lzdGVtLmRvSW5jcmVhc2VQb2ludChkYXRhLnBvaW50LCBkYXRhLmlzQWRkKSk7XG4gICAgICAgICAgICB2bS5zaG93Tm90aWZpY2F0aW9uKCdpbmZvJywgJ3BvaW50IGNoYW5nZS4nKTtcbiAgICAgICAgICAgIHZtLnN0b3JlLmRpc3BhdGNoKFN5c3RlbS51cGRhdGVNSSh7W3VuaXRdOmFtb3VudH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZtLnNvY2tldC5vbigncG9pbnROb3RFbm91Z2gnLCAoKSA9PiB7XG4gICAgICAgICAgICB2bS5zdG9yZS5kaXNwYXRjaChTeXN0ZW0udXBkYXRlTUkoe3BvaW50U3RhdHVzOiBTeXN0ZW0uUE9JTlRfU1RBVFVTX05PVEVOT1VHSH0pKVxuICAgICAgICB9KTtcbiAgICAgICAgdm0uc29ja2V0Lm9uKCdhdXRvTm90ZVN0b3BwZWQnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHZtLnNob3dOb3RpZmljYXRpb24oJ3dhcm5pbmcnLCAn67O07Jyg66i464uI67aA7KGx7Jy866GcIOuLueyLoOydtCDqsJzshKTtlZwgeHh4IOuwqeydmCDsnpDrj5nsqr3sp4DsoITshqHsnbQg7KSR7KeA65CY7JiA7Iq164uI64ukLicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdm0uc29ja2V0Lm9uKCdhdXRvTm90ZVNlbmQnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHZtLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlQ2hhbm5lbEluZm8oZGF0YS5jaGFubmVsX2lkLCB7c2VuZF9ub3RlX2NudDogZGF0YS5zZW5kX25vdGVfY250fSkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8v65287J2067iMXG5cbiAgICAgICAgdm0uc29ja2V0Lm9uKCdsaWtlTGl2ZScsIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhbm5lbHMgPSB2bS5zdG9yZS5nZXRTdGF0ZSgpLmNoYXQuY2hhbm5lbHM7XG4gICAgICAgICAgICBsZXQgYWN0aXZlQ2hhbm5lbEluZm8gPSBfbG9kYXNoLmZpbHRlcihjaGFubmVscy5kYXRhLCB7aWQ6IGRhdGEuY2hhbm5lbF9pZH0pWzBdO1xuICAgICAgICAgICAgdm0uc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVDaGFubmVsSW5mbyhkYXRhLmNoYW5uZWxfaWQsIHtuTGlrZTogYWN0aXZlQ2hhbm5lbEluZm8ubkxpa2UgKyAxfSkpXG4gICAgICAgIH0pXG4gICAgICAgIHZtLnNvY2tldC5vbignY2hhbm5lbFVwZGF0ZScsYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtpZH0gPSBkYXRhO1xuICAgICAgICAgICAgY29uc3QgY2hhbm5lbHMgPSB2bS5zdG9yZS5nZXRTdGF0ZSgpLmNoYXQuY2hhbm5lbHM7XG4gICAgICAgICAgICBsZXQgYWN0aXZlQ2hhbm5lbEluZm8gPSBfbG9kYXNoLmZpbHRlcihjaGFubmVscy5kYXRhLCB7aWQ6IGlkfSlbMF07XG4gICAgICAgICAgICBpZiAoYWN0aXZlQ2hhbm5lbEluZm8pIHtcbiAgICAgICAgICAgICAgICB2bS5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZUNoYW5uZWxJbmZvKGlkLCBkYXRhKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdm0uZGlzcGF0Y2hBY3Rpb24oYWN0aW9ucy5hZGRDaGFubmVsLCBkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNlbmRTb2NrZXQodHlwZSwgZGF0YSwgY2FsbGJhY2spIHtcblxuICAgICAgICBpZiAoIXZtLnNvY2tldCkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCfshozsvJPsnpDro4zrpbwg67O064K464ukLicsIHR5cGUsIGRhdGEpO1xuICAgICAgICBpZiAoIXZtLnNvY2tldCB8fCAhdm0uc29ja2V0LmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdm0uc29ja2V0X2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICB2bS5zb2NrZXQuZW1pdCh0eXBlLCBkYXRhLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy8g662YIO2VmOuCmCDrtKTri7lcbiAgICBzZW5kTWVzQ29udGVudFZpZXdlZChjb250ZW50SWQsIGNvbnRlbnRUeXBlID0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdm0uc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUuc3lzdGVtIHx8ICFzdGF0ZS5zeXN0ZW0ubWkgfHwgIXN0YXRlLnN5c3RlbS5taS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZtLnNlbmRTb2NrZXQoXG4gICAgICAgICAgICBDT05TVC5TT0NLX01FU19UWVBFX1NZUyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlZpZXdcIixcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBzdGF0ZS5zeXN0ZW0ubWkuaWQsXG4gICAgICAgICAgICAgICAgY29udGVudF9pZDogY29udGVudElkLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRfdHlwZTogY29udGVudFR5cGVcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy/soovslYTsmpQv7JWI7KKL7JWE7JqUXG4gICAgc2VuZE1lc0xpa2UoZHN0VHlwZSwgZHN0SWQsIGlzTGlrZSkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHZtLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIGlmICghc3RhdGUgfHwgIXN0YXRlLnN5c3RlbSB8fCAhc3RhdGUuc3lzdGVtLm1pIHx8IXN0YXRlLnN5c3RlbS5taS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZtLnNlbmRTb2NrZXQoXG4gICAgICAgICAgICBDT05TVC5TT0NLX01FU19UWVBFX1NZUyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxpa2VcIixcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBzdGF0ZS5zeXN0ZW0ubWkuaWQsXG4gICAgICAgICAgICAgICAgZGVzdF90eXBlOiBkc3RUeXBlLFxuICAgICAgICAgICAgICAgIGRlc3RfaWQ6IGRzdElkLFxuICAgICAgICAgICAgICAgIGlzX2xpa2U6IGlzTGlrZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLy8g7L2Y7YWQ7Lig66W8IOymkOqyqOywvuq4sOyXkCDrs7TqtIDtlojri6QuXG4gICAgc2VuZE1lc0FkZEZhdm91cmUoY29udGVudElkLCBpc0FkZCkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHZtLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIGlmICghc3RhdGUgfHwgIXN0YXRlLnN5c3RlbSB8fCAhc3RhdGUuc3lzdGVtLm1pIHx8IXN0YXRlLnN5c3RlbS5taS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZtLnNlbmRTb2NrZXQoXG4gICAgICAgICAgICBDT05TVC5TT0NLX01FU19UWVBFX1NZUyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZhdm91clwiLFxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHN0YXRlLnN5c3RlbS5taS5pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50X2lkOiBjb250ZW50SWQsXG4gICAgICAgICAgICAgICAgaXNfZmF2b3VyOiBpc0FkZFxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLy8g7YyU66Gc7J6J7ZaI64ukLlxuICAgIHNlbmRNZXNGb2xsb3coZm9sbG93ZXJJZCwgaXNGb2xsb3cpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB2bS5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5zeXN0ZW0gfHwgIXN0YXRlLnN5c3RlbS5taSB8fCFzdGF0ZS5zeXN0ZW0ubWkuaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2bS5zZW5kU29ja2V0KFxuICAgICAgICAgICAgQ09OU1QuU09DS19NRVNfVFlQRV9TWVMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJGb2xsb3dcIixcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBzdGF0ZS5zeXN0ZW0ubWkuaWQsXG4gICAgICAgICAgICAgICAgZm9sbG93ZXJfaWQ6IGZvbGxvd2VySWQsXG4gICAgICAgICAgICAgICAgaXNfZm9sbG93OiBpc0ZvbGxvd1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVxdWVzdFJldmlld3MoaWRBcnJheSkge1xuICAgICAgICByZXR1cm4gSHR0cE1hbmFnZXIuZ2V0QXJyYXkoJ3JldmlldycsICdpZCcsIGlkQXJyYXkpXG4gICAgfVxuXG4gICAgcmVxdWVzdFNldHRpbmcoKSB7XG4gICAgICAgIHJldHVybiBIdHRwTWFuYWdlci5yZXEoJy9hcGkvc2V0dGluZycsICdnZXQnKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Q2F0ZWdvcmllcygpIHtcbiAgICAgICAgcmV0dXJuIGh0dHBSZXEoJy9hcGkvY2F0ZWdvcnknLCAnZ2V0JylcbiAgICB9XG5cbiAgICByZXF1ZXN0R2V0Q29udGVudHMocmVxUGFyYW0sIGhhdmVIZWFkZXI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGh0dHBSZXEoJy9hcGkvY29udGVudC9nZXRfbGlzdCcsICdnZXQnLCByZXFQYXJhbSwgaGF2ZUhlYWRlcik7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFkZFJldmlldyhyZXZpZXdJdGVtLCB0eXBlLCBkc3RJdGVtSWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBcInJldmlld1wiICYmIHR5cGUgIT09IFwiY29udGVudFwiKVxuICAgICAgICAgICAgICAgIHJlamVjdCgnaW52YWxpZCB0eXBlJyk7XG4gICAgICAgICAgICBpZiAoIWRzdEl0ZW1JZClcbiAgICAgICAgICAgICAgICByZWplY3QoJ2ludmFsaWQgaXRlbSBpZCcpO1xuXG4gICAgICAgICAgICBIdHRwTWFuYWdlci5yZXEoJy9hcGkvcmV2aWV3JywgJ3Bvc3QnLCByZXZpZXdJdGVtKVxuICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIdHRwTWFuYWdlci51cGRhdGVBcnJheSh0eXBlLCBcImFkZFwiLCBkc3RJdGVtSWQsIFwicmV2aWV3c1wiLCByZXMuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVxdWVzdEJ1eVRpY2tldChjYXRlZ29yeUlkLCB0aWNrZXRJZCwgdXNlcklkKSB7XG4gICAgICAgIGxldCBwYXRoID0gJy9hcGkvdXNlci9lbnRlcl9jYXRlZ29yeSc7XG4gICAgICAgIGxldCByZXFQYXJhbSA9IHtcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgaWQ6IHRpY2tldElkLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBIdHRwTWFuYWdlci5yZXEocGF0aCwgJ3Bvc3QnLCByZXFQYXJhbSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAqIOq0keqzoOyekOujjOulvCDslrvslrTsmKjri6QuXG4gICAgKiAqL1xuICAgIC8vIGdldEFkdmVydHMoKSB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gICAgICAgICBsZXQgcmVzID0gYXdhaXQgaHR0cFJlcShcbiAgICAvLyAgICAgICAgICAgICAnL2FwaS9hZHZlcnQnLFxuICAgIC8vICAgICAgICAgICAgICdnZXQnLFxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgIHZtLmFkdmVydHNEYXRhID0gcmVzO1xuICAgIC8vICAgICAgICAgdm0uZ2V0U2V0dGluZygpO1xuICAgIC8vICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIGdldFNldHRpbmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgc2V0dGluZ1JlcyA9IGF3YWl0IGh0dHBSZXEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2V0dGluZycsXG4gICAgICAgICAgICAgICAgJ2dldCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2bS5zZXR0aW5nRGF0YSA9IHNldHRpbmdSZXNbMF07XG4gICAgICAgICAgICByZXNvbHZlKHZtLnNldHRpbmdEYXRhKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRQb3B1cCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh2bS5wb3B1cERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodm0ucG9wdXBEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwb3B1cFJlcyA9IGF3YWl0IGh0dHBSZXEoXG4gICAgICAgICAgICAgICAgJy9hcGkvcG9wdXAnLFxuICAgICAgICAgICAgICAgICdnZXQnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFwb3B1cFJlcy5sZW5ndGgpIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgICAgIHZtLnBvcHVwRGF0YSA9IHBvcHVwUmVzO1xuICAgICAgICAgICAgcmVzb2x2ZSh2bS5wb3B1cERhdGEpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vcmVjZWl2ZXJzOuyqveyngOuwm+ydhCDsnKDsoIDrk6TsnZgg7JWE7J2065SUIOuwsOugrCwgbm90ZUNvbnRlbnQ9e2RhdGE6ICdub3RlQ29udGVudCd9XG4gICAgZnVuY1NlbmROb3RlKHJlY2VpdmVycywgbm90ZUNvbnRlbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB2bS5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICBsZXQgbWkgPSBzdGF0ZSYmc3RhdGUuc3lzdGVtJiZzdGF0ZS5zeXN0ZW0ubWk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzZW5kZXI6IG1pLmlkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVyOiByZWNlaXZlcnNbaV0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vdGVDb250ZW50LFxuICAgICAgICAgICAgICAgIGN0aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZtLnNlbmRTb2NrZXQoJ25ld05vdGUnLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdXBkYXRlTXlBZHZlcnQoYWR2ZXJ0SWQsIHVwZGF0ZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghYWR2ZXJ0SWQgfHwgIXVwZGF0ZURhdGEpIHJldHVybjtcbiAgICAgICAgICAgIGxldCByZXFQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpc0N1c3RvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGB7XCJpZFwiOlwiJHthZHZlcnRJZH1cIn1gLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogSlNPTi5zdHJpbmdpZnkodXBkYXRlRGF0YSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHR0cFJlcSgnL2FwaS9hZHZlcnQvJyArIGFkdmVydElkLCAncHV0JywgcmVxUGFyYW0pLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVEYkZpZWxkKGRiX2NvbGxlY3Rpb24sIGRiX2l0ZW1faWQsIGZpbHRlcl9rZXksIHVwZGF0ZV9kYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRiX2NvbGxlY3Rpb24gfHwgIWZpbHRlcl9rZXkgfHwgIXVwZGF0ZV9kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdmYWlsIHVwZGF0ZSBkYXRhLi4uLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmaWx0ZXJGaWVsZCA9IHt9LCB1cGRhdGVEYXRhID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXJfa2V5KS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJGaWVsZFtrZXldID0gZmlsdGVyX2tleVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cGRhdGVfZGF0YSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlRGF0YVtrZXldID0gdXBkYXRlX2RhdGFba2V5XTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcmVxUGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaXNDdXN0b206IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeShmaWx0ZXJGaWVsZCksXG4gICAgICAgICAgICAgICAgdXBkYXRlOiBKU09OLnN0cmluZ2lmeSh1cGRhdGVEYXRhKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodHRwUmVxKCcvYXBpLycgKyBkYl9jb2xsZWN0aW9uICsgJy8nICsgZGJfaXRlbV9pZCwgJ3B1dCcsIHJlcVBhcmFtKS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY0dldE1vbmV5U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBodHRwUmVxKCcvYXBpL21vbmV5L2dldF9tb25leV9zdGF0JywgJ2dldCcpLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGF0YVNlcnZpY2UgPSBEYXRhU2VydmljZS5nZXRJbnN0YW5jZSgpXG4iXSwic291cmNlUm9vdCI6IiJ9