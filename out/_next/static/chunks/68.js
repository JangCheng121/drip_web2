(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[68],{

/***/ "./components/AlertModal.js":
/*!**********************************!*\
  !*** ./components/AlertModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _redux_modules_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/modules/system */ "./redux/modules/system.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _server_pageRoutes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../server/pageRoutes */ "./server/pageRoutes.js");
/* harmony import */ var _server_pageRoutes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_server_pageRoutes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_18__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }













var AlertModal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AlertModal, _React$Component);
  function AlertModal() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AlertModal);
    return _callSuper(this, AlertModal, arguments);
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AlertModal, [{
    key: "goPage",
    value: function goPage() {
      var _this$props = this.props,
        toggleFunc = _this$props.toggleFunc,
        goStatus = _this$props.goStatus,
        funcBtnOkCallback = _this$props.funcBtnOkCallback;
      toggleFunc();
      if (goStatus === 'login' || goStatus === 'advert_login') {
        _server_pageRoutes__WEBPACK_IMPORTED_MODULE_16__["Router"] && _server_pageRoutes__WEBPACK_IMPORTED_MODULE_16__["Router"].pushRoute('/login');
        return;
      } else if (goStatus === 'charge') {
        _server_pageRoutes__WEBPACK_IMPORTED_MODULE_16__["Router"].pushRoute('profile', {
          go_state: 'charge'
        });
        return;
      }
      funcBtnOkCallback();
    }
  }, {
    key: "notShowAgainChange",
    value: function notShowAgainChange(e) {
      var _this$props2 = this.props,
        goStatus = _this$props2.goStatus,
        funcCheckedCallback = _this$props2.funcCheckedCallback;
      var noShowChecked = e.target.checked;
      funcCheckedCallback(noShowChecked, goStatus);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props3 = this.props,
        toggleFunc = _this$props3.toggleFunc,
        alertStr = _this$props3.alertStr,
        t = _this$props3.t,
        checkStatus = _this$props3.checkStatus,
        btnOkStr = _this$props3.btnOkStr,
        modalStatus = _this$props3.modalStatus,
        funcBtnOkCallback = _this$props3.funcBtnOkCallback,
        goStatus = _this$props3.goStatus;
      return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fullWidth: true,
        open: modalStatus,
        onClose: toggleFunc
      }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], null, t('ALERT')), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], null, alertStr), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], null, checkStatus ? __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__["default"]
        // checked={state.checkedB}
        , {
          onChange: this.notShowAgainChange.bind(this),
          value: "checkedB",
          color: "primary"
        }),
        label: "DONTSHOW"
      }) : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: 'contained',
        onClick: function onClick() {
          return _this.goPage();
        },
        color: "primary"
      }, btnOkStr), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: 'contained',
        onClick: toggleFunc,
        color: "secondary",
        autoFocus: true
      }, t('CANCEL')), goStatus === 'advert_login' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: 'contained',
        color: "primary",
        onClick: funcBtnOkCallback
      }, t('CONTINUE')) : null));
    }
  }]);
  return AlertModal;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
AlertModal.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        return _context.abrupt("return", {
          namespacesRequired: ['common']
        });
      case 1:
      case "end":
        return _context.stop();
    }
  }, _callee);
}));
AlertModal.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_18__["withTranslation"])('common')(Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(function (dispatch) {
  return {
    notShowAlert_System: function notShowAlert_System(data) {
      return dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_14__["updateMI"](data));
    }
  };
})(AlertModal)));

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

/***/ }),

/***/ "./node_modules/@material-ui/icons/DeleteForever.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/DeleteForever.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteForever');

exports.default = _default;

/***/ }),

/***/ "./node_modules/next-routes/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/next-routes/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pathToRegexp = _interopRequireDefault(__webpack_require__(/*! path-to-regexp */ "./node_modules/next-routes/node_modules/path-to-regexp/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (opts) {
  return new Routes(opts);
};

var Routes =
/*#__PURE__*/
function () {
  function Routes() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$Link = _ref.Link,
        Link = _ref$Link === void 0 ? _link.default : _ref$Link,
        _ref$Router = _ref.Router,
        Router = _ref$Router === void 0 ? _router.default : _ref$Router;

    _classCallCheck(this, Routes);

    this.routes = [];
    this.Link = this.getLink(Link);
    this.Router = this.getRouter(Router);
  }

  _createClass(Routes, [{
    key: "add",
    value: function add(name, pattern, page) {
      var options;

      if (name instanceof Object) {
        options = name;
        name = options.name;
      } else {
        if (name[0] === '/') {
          page = pattern;
          pattern = name;
          name = null;
        }

        options = {
          name: name,
          pattern: pattern,
          page: page
        };
      }

      if (this.findByName(name)) {
        throw new Error("Route \"".concat(name, "\" already exists"));
      }

      this.routes.push(new Route(options));
      return this;
    }
  }, {
    key: "findByName",
    value: function findByName(name) {
      if (name) {
        return this.routes.filter(function (route) {
          return route.name === name;
        })[0];
      }
    }
  }, {
    key: "match",
    value: function match(url) {
      var parsedUrl = (0, _url.parse)(url, true);
      var pathname = parsedUrl.pathname,
          query = parsedUrl.query;
      return this.routes.reduce(function (result, route) {
        if (result.route) return result;
        var params = route.match(pathname);
        if (!params) return result;
        return _objectSpread({}, result, {
          route: route,
          params: params,
          query: _objectSpread({}, query, params)
        });
      }, {
        query: query,
        parsedUrl: parsedUrl
      });
    }
  }, {
    key: "findAndGetUrls",
    value: function findAndGetUrls(nameOrUrl, params) {
      var route = this.findByName(nameOrUrl);

      if (route) {
        return {
          route: route,
          urls: route.getUrls(params),
          byName: true
        };
      } else {
        var _this$match = this.match(nameOrUrl),
            _route = _this$match.route,
            query = _this$match.query;

        var href = _route ? _route.getHref(query) : nameOrUrl;
        var urls = {
          href: href,
          as: nameOrUrl
        };
        return {
          route: _route,
          urls: urls
        };
      }
    }
  }, {
    key: "getRequestHandler",
    value: function getRequestHandler(app, customHandler) {
      var _this = this;

      var nextHandler = app.getRequestHandler();
      return function (req, res) {
        var _this$match2 = _this.match(req.url),
            route = _this$match2.route,
            query = _this$match2.query,
            parsedUrl = _this$match2.parsedUrl;

        if (route) {
          if (customHandler) {
            customHandler({
              req: req,
              res: res,
              route: route,
              query: query
            });
          } else {
            app.render(req, res, route.page, query);
          }
        } else {
          nextHandler(req, res, parsedUrl);
        }
      };
    }
  }, {
    key: "getLink",
    value: function getLink(Link) {
      var _this2 = this;

      var LinkRoutes = function LinkRoutes(props) {
        var route = props.route,
            params = props.params,
            to = props.to,
            newProps = _objectWithoutProperties(props, ["route", "params", "to"]);

        var nameOrUrl = route || to;

        if (nameOrUrl) {
          Object.assign(newProps, _this2.findAndGetUrls(nameOrUrl, params).urls);
        }

        return _react.default.createElement(Link, newProps);
      };

      return LinkRoutes;
    }
  }, {
    key: "getRouter",
    value: function getRouter(Router) {
      var _this3 = this;

      var wrap = function wrap(method) {
        return function (route, params, options) {
          var _this3$findAndGetUrls = _this3.findAndGetUrls(route, params),
              byName = _this3$findAndGetUrls.byName,
              _this3$findAndGetUrls2 = _this3$findAndGetUrls.urls,
              as = _this3$findAndGetUrls2.as,
              href = _this3$findAndGetUrls2.href;

          return Router[method](href, as, byName ? options : params);
        };
      };

      Router.pushRoute = wrap('push');
      Router.replaceRoute = wrap('replace');
      Router.prefetchRoute = wrap('prefetch');
      return Router;
    }
  }]);

  return Routes;
}();

var Route =
/*#__PURE__*/
function () {
  function Route(_ref2) {
    var name = _ref2.name,
        pattern = _ref2.pattern,
        _ref2$page = _ref2.page,
        page = _ref2$page === void 0 ? name : _ref2$page;

    _classCallCheck(this, Route);

    if (!name && !page) {
      throw new Error("Missing page to render for route \"".concat(pattern, "\""));
    }

    this.name = name;
    this.pattern = pattern || "/".concat(name);
    this.page = page.replace(/(^|\/)index$/, '').replace(/^\/?/, '/');
    this.regex = (0, _pathToRegexp.default)(this.pattern, this.keys = []);
    this.keyNames = this.keys.map(function (key) {
      return key.name;
    });
    this.toPath = _pathToRegexp.default.compile(this.pattern);
  }

  _createClass(Route, [{
    key: "match",
    value: function match(path) {
      var values = this.regex.exec(path);

      if (values) {
        return this.valuesToParams(values.slice(1));
      }
    }
  }, {
    key: "valuesToParams",
    value: function valuesToParams(values) {
      var _this4 = this;

      return values.reduce(function (params, val, i) {
        if (val === undefined) return params;
        return Object.assign(params, _defineProperty({}, _this4.keys[i].name, decodeURIComponent(val)));
      }, {});
    }
  }, {
    key: "getHref",
    value: function getHref() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return "".concat(this.page, "?").concat(toQuerystring(params));
    }
  }, {
    key: "getAs",
    value: function getAs() {
      var _this5 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var as = this.toPath(params) || '/';
      var keys = Object.keys(params);
      var qsKeys = keys.filter(function (key) {
        return _this5.keyNames.indexOf(key) === -1;
      });
      if (!qsKeys.length) return as;
      var qsParams = qsKeys.reduce(function (qs, key) {
        return Object.assign(qs, _defineProperty({}, key, params[key]));
      }, {});
      return "".concat(as, "?").concat(toQuerystring(qsParams));
    }
  }, {
    key: "getUrls",
    value: function getUrls(params) {
      var as = this.getAs(params);
      var href = this.getHref(params);
      return {
        as: as,
        href: href
      };
    }
  }]);

  return Route;
}();

var toQuerystring = function toQuerystring(obj) {
  return Object.keys(obj).filter(function (key) {
    return obj[key] !== null && obj[key] !== undefined;
  }).map(function (key) {
    var value = obj[key];

    if (Array.isArray(value)) {
      value = value.join('/');
    }

    return [encodeURIComponent(key), encodeURIComponent(value)].join('=');
  }).join('&');
};

/***/ }),

/***/ "./node_modules/next-routes/node_modules/path-to-regexp/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-routes/node_modules/path-to-regexp/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var start = options.start !== false
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = start ? '^' : ''
  var isEndDelimited = tokens.length === 0

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + '(' + capture + ')?'
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "./pages/profile/MyAdvert.js":
/*!***********************************!*\
  !*** ./pages/profile/MyAdvert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_css_mine_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/css/mine.css */ "./static/css/mine.css");
/* harmony import */ var _static_css_mine_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_mine_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_modules_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/modules/system */ "./redux/modules/system.js");
/* harmony import */ var _model_Const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../model/Const */ "./model/Const.js");
/* harmony import */ var _MaterialTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MaterialTable */ "./pages/profile/MaterialTable.js");
/* harmony import */ var _lib_tool__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/tool */ "./lib/tool.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _components_AlertModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/AlertModal */ "./components/AlertModal.js");
/* harmony import */ var _model_DataService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../model/DataService */ "./model/DataService.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ "./node_modules/@material-ui/icons/DeleteForever.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _model_Req__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../model/Req */ "./model/Req.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }












// import PropTypes from "prop-types";
// import {httpReq} from "../../model/Req";
// import _lodash from 'lodash'

var vm = null;
var MyAdvert = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyAdvert, _Component);
  function MyAdvert(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyAdvert);
    _this = _callSuper(this, MyAdvert, [props]);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "deleteItems", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(deleteIds) {
        var delete_result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_model_Req__WEBPACK_IMPORTED_MODULE_20__["httpReq"])('/api/advert', 'delete', {
                params: {
                  filter: {
                    ids: deleteIds
                  }
                }
              });
            case 2:
              delete_result = _context.sent;
              if (delete_result) {
                _this.tableRef.current && _this.tableRef.current.onQueryChange();
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    vm = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this);
    _this.state = {
      renderAdvertData: [],
      renderDataTotalLength: 0,
      loadMoreState: 'success',
      //start, fail, noData
      hasNoMoreData: false,
      //true:noMore,

      alertModalState: false,
      changeStateAdvertId: -1,
      advertState: false,
      selectedItem: null
    };
    _this.tableRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyAdvert, [{
    key: "funcChangeAdvertState",
    value: function funcChangeAdvertState(e, item) {
      var advert_id = item.id,
        advertState = e.target.checked;
      if (advert_id) {
        this.setState({
          selectedItem: item
        });
        this.funcToggleAlertModal(advert_id, advertState);
      }
    }
  }, {
    key: "funcToggleAlertModal",
    value: function funcToggleAlertModal(advert_id, advertState) {
      this.setState({
        alertModalState: !this.state.alertModalState,
        changeStateAdvertId: !this.state.alertModalState ? advert_id : -1,
        advertState: advertState
      });
    }
  }, {
    key: "funcAdvertStateSetFalse",
    value: function funcAdvertStateSetFalse() {
      var _this2 = this;
      var changeStateAdvertId = this.state.changeStateAdvertId,
        updateData = {
          state: this.state.advertState
        };
      var selectedItem = this.state.selectedItem;
      if (changeStateAdvertId === -1 || !selectedItem) return;
      if (selectedItem.guarantee < selectedItem.point) {
        _model_DataService__WEBPACK_IMPORTED_MODULE_18__["dataService"].showNotification('warning', '본 광고는 보증금 부족으로 출시할수 없습니다.');
        return;
      }
      _model_DataService__WEBPACK_IMPORTED_MODULE_18__["dataService"].updateMyAdvert(this.state.changeStateAdvertId, updateData).then(function (res) {
        vm.setState({
          alertModalState: false,
          changeStateAdvertId: -1
        });
        _this2.tableRef.current && _this2.tableRef.current.onQueryChange();
      }, function (err) {
        vm.setState({
          alertModalState: false,
          changeStateAdvertId: -1
        });
      });
    }
  }, {
    key: "renderMedia",
    value: function renderMedia(item) {
      var ai = this.props.ai;
      var token = ai.token;
      if (!item && !item[0] && item[0].src && item[0].thumb) {
        return __jsx("div", null, __jsx("img", {
          alt: "",
          src: "../../static/img/common/drip_default.png",
          style: {
            width: 25
          }
        }));
      }
      return __jsx("div", {
        className: "div_row"
      }, item.map(function (cell, key) {
        var cellUrl = cell.thumb ? cell.thumb : cell.src;
        return __jsx("div", {
          key: key,
          style: {
            width: 25,
            height: 25
          },
          className: "ml-1"
        }, __jsx("img", {
          alt: "",
          src: cellUrl + '?token=' + token,
          style: {
            width: '100%'
          }
        }));
      }));
    }
  }, {
    key: "renderAdvertState",
    value: function renderAdvertState(state, row) {
      var _this3 = this;
      return __jsx("div", null, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onChange: function onChange(e) {
          _this3.funcChangeAdvertState(e, row);
        },
        color: 'primary',
        outline: 'alt',
        label: true,
        checked: state
      }));
    }
  }, {
    key: "renderTime",
    value: function renderTime(item, row) {
      return __jsx("span", null, item ? _lib_tool__WEBPACK_IMPORTED_MODULE_15__["getCurrentTime"](item, 'YYYY-MM-DD') : 'Loading...');
    }
  }, {
    key: "renderAdvertUrl",
    value: function renderAdvertUrl(cellInfo) {
      return __jsx("a", {
        href: cellInfo
      }, cellInfo);
    }
  }, {
    key: "funcDeleteItems",
    value: function () {
      var _funcDeleteItems = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(evt, data) {
        var setAppModalState, delete_ids, index;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              setAppModalState = vm.props.setAppModalState;
              delete_ids = [];
              for (index in data) {
                if (data[index].id) {
                  delete_ids.push(data[index].id);
                }
              }
              setAppModalState('page', '선택된 항목들을 삭제하시겠습니까?', 'DELETE', function () {
                return vm.deleteItems(delete_ids);
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function funcDeleteItems(_x2, _x3) {
        return _funcDeleteItems.apply(this, arguments);
      }
      return funcDeleteItems;
    }()
  }, {
    key: "renderPayPoint",
    value: function renderPayPoint(item) {
      var payment_point = item.point * item.views;
      return __jsx("div", null, payment_point);
    }
  }, {
    key: "renderDetailPanel",
    value: function renderDetailPanel(item) {
      return __jsx("div", {
        style: {
          backgroundColor: "green",
          height: 100
        }
      }, "detail panel.....");
    }
  }, {
    key: "renderTotalGuarantee",
    value: function renderTotalGuarantee(item) {
      var total_guarantee = item.guarantee + item.point * item.views;
      return __jsx("div", null, total_guarantee);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var t = this.props.t,
        columns = [{
          title: "",
          field: 'media',
          render: function render(props) {
            return _this4.renderMedia(props.media);
          }
        }, {
          title: t("ADVERT_LINK"),
          field: 'url',
          render: function render(props) {
            return _this4.renderAdvertUrl(props.url);
          }
        }, {
          title: t("INSET_DATE"),
          field: 'ctime',
          render: function render(props) {
            return _this4.renderTime(props.ctime);
          }
        }, {
          title: t("FINISH_DATE"),
          field: 'etime',
          render: function render(props) {
            return _this4.renderTime(props.etime);
          } // Custom cell components!
        }, {
          title: t("ADVERT_GUARANTEE"),
          field: 'guarantee',
          render: function render(props) {
            return _this4.renderTotalGuarantee(props);
          }
        }, {
          title: t("PAY_POINT"),
          field: 'point',
          maxWidth: 100
        }, {
          title: t("VIEWS_CNT"),
          field: 'views',
          maxWidth: 100
        }, {
          title: t("CONSUMPTION_POINT"),
          field: '',
          maxWidth: 100,
          render: function render(props) {
            return _this4.renderPayPoint(props);
          }
        }, {
          title: t("REMAIN_POINT"),
          field: 'guarantee'
        }, {
          title: t("INCOMSTATE"),
          field: 'state',
          render: function render(props) {
            return _this4.renderAdvertState(props.state, props);
          },
          maxWidth: 100
        }];
      return __jsx("div", null, __jsx(_MaterialTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tableRef: this.tableRef,
        mi: this.props.mi,
        type: 'advert',
        context_t: this.props.t,
        noDataText: t('NO_DATA'),
        columns: columns,
        table_selection: true,
        table_action: [{
          tooltip: 'Remove All Selected Items',
          icon: function icon() {
            return __jsx(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_19___default.a, null);
          },
          onClick: function onClick(evt, data) {
            _this4.funcDeleteItems(evt, data);
          }
        }]
      }), __jsx(_components_AlertModal__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        modalStatus: this.state.alertModalState,
        goStatus: 'page',
        toggleFunc: this.funcToggleAlertModal.bind(this),
        alertStr: this.state.advertState ? t('ADVERT_STATE_TRUE_ALERT') : t('ADVERT_STATE_FALSE_ALERT'),
        btnOkStr: t('DONE'),
        funcBtnOkCallback: this.funcAdvertStateSetFalse.bind(this)
      })));
    }
  }]);
  return MyAdvert;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (state) {
  return {
    system: state.system,
    users: state.users,
    mi: state.system.mi,
    ai: state.system.ai,
    setting: state.system.setting,
    lang: state.i18nState.lang
  };
}, function (dispatch) {
  return {
    getHistory: function getHistory(type) {
      var loadType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _model_Const__WEBPACK_IMPORTED_MODULE_13__["LOAD_TYPE_INIT"];
      var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
      return dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_12__["getHistoryAsync"](type, loadType, filter, perPage));
    },
    getSetting: function getSetting() {
      return dispatch(_redux_modules_system__WEBPACK_IMPORTED_MODULE_12__["getSettingAsync"]());
    }
    // getUser: (id) => dispatch(Users.get(id)),
  };
})(MyAdvert));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./server/pageRoutes.js":
/*!******************************!*\
  !*** ./server/pageRoutes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Parameterized Routing with next-route
 *
 * Benefits: Less code, and easily handles complex url structures
 **/

var routes = module.exports = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js")();
routes.add({
  name: 'login',
  pattern: 'login'
}).add('detailView', '/detailView/:id', 'detailView').add('UserProfile', '/UserProfile/:user_id', 'UserProfile').add('searchResult', '/searchResult/:searchData', 'searchResult').add('profile', '/profile/:go_state', 'profile');

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGVydE1vZGFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZUZvcmV2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0LXJvdXRlcy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1yb3V0ZXMvbm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlL015QWR2ZXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9zZXJ2ZXIvcGFnZVJvdXRlcy5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFwcGx5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJBbGVydE1vZGFsIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9jbGFzc0NhbGxDaGVjayIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdvUGFnZSIsIl90aGlzJHByb3BzIiwicHJvcHMiLCJ0b2dnbGVGdW5jIiwiZ29TdGF0dXMiLCJmdW5jQnRuT2tDYWxsYmFjayIsIlJvdXRlciIsInB1c2hSb3V0ZSIsImdvX3N0YXRlIiwibm90U2hvd0FnYWluQ2hhbmdlIiwiX3RoaXMkcHJvcHMyIiwiZnVuY0NoZWNrZWRDYWxsYmFjayIsIm5vU2hvd0NoZWNrZWQiLCJ0YXJnZXQiLCJjaGVja2VkIiwicmVuZGVyIiwiX3RoaXMiLCJfdGhpcyRwcm9wczMiLCJhbGVydFN0ciIsImNoZWNrU3RhdHVzIiwiYnRuT2tTdHIiLCJtb2RhbFN0YXR1cyIsIl9fanN4IiwiRGlhbG9nIiwiZnVsbFdpZHRoIiwib3BlbiIsIm9uQ2xvc2UiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dBY3Rpb25zIiwiRm9ybUNvbnRyb2xMYWJlbCIsImNvbnRyb2wiLCJDaGVja2JveCIsIm9uQ2hhbmdlIiwiYmluZCIsImNvbG9yIiwibGFiZWwiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImF1dG9Gb2N1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiY29ubmVjdCIsImRpc3BhdGNoIiwibm90U2hvd0FsZXJ0X1N5c3RlbSIsImRhdGEiLCJTeXN0ZW0iLCJ2bSIsIk15QWR2ZXJ0IiwiX0NvbXBvbmVudCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfcmVmIiwiZGVsZXRlSWRzIiwiZGVsZXRlX3Jlc3VsdCIsImh0dHBSZXEiLCJwYXJhbXMiLCJmaWx0ZXIiLCJpZHMiLCJ0YWJsZVJlZiIsImN1cnJlbnQiLCJvblF1ZXJ5Q2hhbmdlIiwiX3giLCJzdGF0ZSIsInJlbmRlckFkdmVydERhdGEiLCJyZW5kZXJEYXRhVG90YWxMZW5ndGgiLCJsb2FkTW9yZVN0YXRlIiwiaGFzTm9Nb3JlRGF0YSIsImFsZXJ0TW9kYWxTdGF0ZSIsImNoYW5nZVN0YXRlQWR2ZXJ0SWQiLCJhZHZlcnRTdGF0ZSIsInNlbGVjdGVkSXRlbSIsImNyZWF0ZVJlZiIsImZ1bmNDaGFuZ2VBZHZlcnRTdGF0ZSIsIml0ZW0iLCJhZHZlcnRfaWQiLCJpZCIsInNldFN0YXRlIiwiZnVuY1RvZ2dsZUFsZXJ0TW9kYWwiLCJmdW5jQWR2ZXJ0U3RhdGVTZXRGYWxzZSIsIl90aGlzMiIsInVwZGF0ZURhdGEiLCJndWFyYW50ZWUiLCJwb2ludCIsImRhdGFTZXJ2aWNlIiwic2hvd05vdGlmaWNhdGlvbiIsInVwZGF0ZU15QWR2ZXJ0IiwicmVzIiwiZXJyIiwicmVuZGVyTWVkaWEiLCJhaSIsInRva2VuIiwic3JjIiwidGh1bWIiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NOYW1lIiwibWFwIiwiY2VsbCIsImNlbGxVcmwiLCJoZWlnaHQiLCJyZW5kZXJBZHZlcnRTdGF0ZSIsInJvdyIsIl90aGlzMyIsIlN3aXRjaCIsIm91dGxpbmUiLCJyZW5kZXJUaW1lIiwiVG9vbHMiLCJyZW5kZXJBZHZlcnRVcmwiLCJjZWxsSW5mbyIsImhyZWYiLCJfZnVuY0RlbGV0ZUl0ZW1zIiwiX2NhbGxlZTIiLCJldnQiLCJzZXRBcHBNb2RhbFN0YXRlIiwiZGVsZXRlX2lkcyIsImluZGV4IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGVsZXRlSXRlbXMiLCJmdW5jRGVsZXRlSXRlbXMiLCJfeDIiLCJfeDMiLCJyZW5kZXJQYXlQb2ludCIsInBheW1lbnRfcG9pbnQiLCJ2aWV3cyIsInJlbmRlckRldGFpbFBhbmVsIiwiYmFja2dyb3VuZENvbG9yIiwicmVuZGVyVG90YWxHdWFyYW50ZWUiLCJ0b3RhbF9ndWFyYW50ZWUiLCJfdGhpczQiLCJjb2x1bW5zIiwidGl0bGUiLCJmaWVsZCIsIm1lZGlhIiwidXJsIiwiY3RpbWUiLCJldGltZSIsIm1heFdpZHRoIiwiUGFnaW5hdGlvblRhYmxlIiwibWkiLCJjb250ZXh0X3QiLCJub0RhdGFUZXh0IiwidGFibGVfc2VsZWN0aW9uIiwidGFibGVfYWN0aW9uIiwidG9vbHRpcCIsImljb24iLCJEZWxldGVJY29uIiwiX2V4dGVuZHMiLCJzeXN0ZW0iLCJ1c2VycyIsInNldHRpbmciLCJsYW5nIiwiaTE4blN0YXRlIiwiZ2V0SGlzdG9yeSIsImxvYWRUeXBlIiwidW5kZWZpbmVkIiwiQ09OU1QiLCJwZXJQYWdlIiwiZ2V0U2V0dGluZyIsInJvdXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiYWRkIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJC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QUFBQSxDQUNMLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWlILE1BQU0sR0FBSUMsTUFBTSxDQUFDQyxPQUFPLEdBQUdDLG1CQUFPLENBQUMsNkRBQWEsQ0FBQyxDQUFDLENBQUU7QUFFMURILE1BQU0sQ0FDREksR0FBRyxDQUFDO0VBQUNyTixJQUFJLEVBQUUsT0FBTztFQUFFc04sT0FBTyxFQUFFO0FBQU8sQ0FBQyxDQUFDLENBQ3RDRCxHQUFHLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUNsREEsR0FBRyxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxhQUFhLENBQUMsQ0FDMURBLEdBQUcsQ0FBQyxjQUFjLEVBQUUsMkJBQTJCLEVBQUUsY0FBYyxDQUFDLENBQ2hFQSxHQUFHLENBQUMsU0FBUyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgKiBhcyBTeXN0ZW0gZnJvbSBcIi4uL3JlZHV4L21vZHVsZXMvc3lzdGVtXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCIuLi9zZXJ2ZXIvcGFnZVJvdXRlc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bic7XG5cbmNsYXNzIEFsZXJ0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgZ29QYWdlKCkge1xuICAgICAgICBjb25zdCB7dG9nZ2xlRnVuYywgZ29TdGF0dXMsIGZ1bmNCdG5Pa0NhbGxiYWNrfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRvZ2dsZUZ1bmMoKTtcbiAgICAgICAgaWYgKGdvU3RhdHVzID09PSAnbG9naW4nIHx8IGdvU3RhdHVzID09PSAnYWR2ZXJ0X2xvZ2luJykge1xuICAgICAgICAgICAgUm91dGVyICYmIFJvdXRlci5wdXNoUm91dGUoJy9sb2dpbicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGdvU3RhdHVzID09PSAnY2hhcmdlJykge1xuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgncHJvZmlsZScseyBnb19zdGF0ZTogJ2NoYXJnZScgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZnVuY0J0bk9rQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBub3RTaG93QWdhaW5DaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7Z29TdGF0dXMsIGZ1bmNDaGVja2VkQ2FsbGJhY2t9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IG5vU2hvd0NoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICBmdW5jQ2hlY2tlZENhbGxiYWNrKG5vU2hvd0NoZWNrZWQsIGdvU3RhdHVzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB0b2dnbGVGdW5jLCBhbGVydFN0ciwgdCxcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzLCBidG5Pa1N0ciwgbW9kYWxTdGF0dXMsIGZ1bmNCdG5Pa0NhbGxiYWNrLCBnb1N0YXR1c1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWxTdGF0dXN9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dG9nZ2xlRnVuY31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdBTEVSVCcpfVxuICAgICAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHthbGVydFN0cn1cbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIHtjaGVja1N0YXR1cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrZWQ9e3N0YXRlLmNoZWNrZWRCfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubm90U2hvd0FnYWluQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrZWRCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRE9OVFNIT1dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD17J2NvbnRhaW5lZCd9IG9uQ2xpY2s9eygpID0+IHRoaXMuZ29QYWdlKCl9IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2J0bk9rU3RyfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXsnY29udGFpbmVkJ30gb25DbGljaz17dG9nZ2xlRnVuY30gY29sb3I9XCJzZWNvbmRhcnlcIiBhdXRvRm9jdXM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnQ0FOQ0VMJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7Z29TdGF0dXMgPT09ICdhZHZlcnRfbG9naW4nID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD17J2NvbnRhaW5lZCd9IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2Z1bmNCdG5Pa0NhbGxiYWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnQ09OVElOVUUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5BbGVydE1vZGFsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbiddLFxufSlcblxuQWxlcnRNb2RhbC5wcm9wVHlwZXMgPSB7XG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29tbW9uJykoY29ubmVjdChcbiAgICBkaXNwYXRjaCA9PiAoe1xuICAgICAgICBub3RTaG93QWxlcnRfU3lzdGVtOiAoZGF0YSkgPT4gZGlzcGF0Y2goU3lzdGVtLnVwZGF0ZU1JKGRhdGEpKSxcbiAgICB9KVxuKShBbGVydE1vZGFsKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyem0yLjQ2LTcuMTJsMS40MS0xLjQxTDEyIDEyLjU5bDIuMTItMi4xMiAxLjQxIDEuNDFMMTMuNDEgMTRsMi4xMiAyLjEyLTEuNDEgMS40MUwxMiAxNS40MWwtMi4xMiAyLjEyLTEuNDEtMS40MUwxMC41OSAxNGwtMi4xMy0yLjEyek0xNS41IDRsLTEtMWgtNWwtMSAxSDV2MmgxNFY0elwiXG59KSwgJ0RlbGV0ZUZvcmV2ZXInKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcGF0aFRvUmVnZXhwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicGF0aC10by1yZWdleHBcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VybCA9IHJlcXVpcmUoXCJ1cmxcIik7XG5cbnZhciBfbGluayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm5leHQvbGlua1wiKSk7XG5cbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9yb3V0ZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHJldHVybiBuZXcgUm91dGVzKG9wdHMpO1xufTtcblxudmFyIFJvdXRlcyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJvdXRlcygpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWYkTGluayA9IF9yZWYuTGluayxcbiAgICAgICAgTGluayA9IF9yZWYkTGluayA9PT0gdm9pZCAwID8gX2xpbmsuZGVmYXVsdCA6IF9yZWYkTGluayxcbiAgICAgICAgX3JlZiRSb3V0ZXIgPSBfcmVmLlJvdXRlcixcbiAgICAgICAgUm91dGVyID0gX3JlZiRSb3V0ZXIgPT09IHZvaWQgMCA/IF9yb3V0ZXIuZGVmYXVsdCA6IF9yZWYkUm91dGVyO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlcyk7XG5cbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuTGluayA9IHRoaXMuZ2V0TGluayhMaW5rKTtcbiAgICB0aGlzLlJvdXRlciA9IHRoaXMuZ2V0Um91dGVyKFJvdXRlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUm91dGVzLCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIHBhdHRlcm4sIHBhZ2UpIHtcbiAgICAgIHZhciBvcHRpb25zO1xuXG4gICAgICBpZiAobmFtZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBvcHRpb25zID0gbmFtZTtcbiAgICAgICAgbmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuYW1lWzBdID09PSAnLycpIHtcbiAgICAgICAgICBwYWdlID0gcGF0dGVybjtcbiAgICAgICAgICBwYXR0ZXJuID0gbmFtZTtcbiAgICAgICAgICBuYW1lID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICAgIHBhZ2U6IHBhZ2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmluZEJ5TmFtZShuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSb3V0ZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBhbHJlYWR5IGV4aXN0c1wiKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucm91dGVzLnB1c2gobmV3IFJvdXRlKG9wdGlvbnMpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kQnlOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRCeU5hbWUobmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICByZXR1cm4gcm91dGUubmFtZSA9PT0gbmFtZTtcbiAgICAgICAgfSlbMF07XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hdGNoKHVybCkge1xuICAgICAgdmFyIHBhcnNlZFVybCA9ICgwLCBfdXJsLnBhcnNlKSh1cmwsIHRydWUpO1xuICAgICAgdmFyIHBhdGhuYW1lID0gcGFyc2VkVXJsLnBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5ID0gcGFyc2VkVXJsLnF1ZXJ5O1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCByb3V0ZSkge1xuICAgICAgICBpZiAocmVzdWx0LnJvdXRlKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICB2YXIgcGFyYW1zID0gcm91dGUubWF0Y2gocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXBhcmFtcykgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHJlc3VsdCwge1xuICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBxdWVyeTogX29iamVjdFNwcmVhZCh7fSwgcXVlcnksIHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgICB9LCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgcGFyc2VkVXJsOiBwYXJzZWRVcmxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kQW5kR2V0VXJsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kQW5kR2V0VXJscyhuYW1lT3JVcmwsIHBhcmFtcykge1xuICAgICAgdmFyIHJvdXRlID0gdGhpcy5maW5kQnlOYW1lKG5hbWVPclVybCk7XG5cbiAgICAgIGlmIChyb3V0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICB1cmxzOiByb3V0ZS5nZXRVcmxzKHBhcmFtcyksXG4gICAgICAgICAgYnlOYW1lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3RoaXMkbWF0Y2ggPSB0aGlzLm1hdGNoKG5hbWVPclVybCksXG4gICAgICAgICAgICBfcm91dGUgPSBfdGhpcyRtYXRjaC5yb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5ID0gX3RoaXMkbWF0Y2gucXVlcnk7XG5cbiAgICAgICAgdmFyIGhyZWYgPSBfcm91dGUgPyBfcm91dGUuZ2V0SHJlZihxdWVyeSkgOiBuYW1lT3JVcmw7XG4gICAgICAgIHZhciB1cmxzID0ge1xuICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgYXM6IG5hbWVPclVybFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJvdXRlOiBfcm91dGUsXG4gICAgICAgICAgdXJsczogdXJsc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZXF1ZXN0SGFuZGxlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZXF1ZXN0SGFuZGxlcihhcHAsIGN1c3RvbUhhbmRsZXIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBuZXh0SGFuZGxlciA9IGFwcC5nZXRSZXF1ZXN0SGFuZGxlcigpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgICAgICB2YXIgX3RoaXMkbWF0Y2gyID0gX3RoaXMubWF0Y2gocmVxLnVybCksXG4gICAgICAgICAgICByb3V0ZSA9IF90aGlzJG1hdGNoMi5yb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5ID0gX3RoaXMkbWF0Y2gyLnF1ZXJ5LFxuICAgICAgICAgICAgcGFyc2VkVXJsID0gX3RoaXMkbWF0Y2gyLnBhcnNlZFVybDtcblxuICAgICAgICBpZiAocm91dGUpIHtcbiAgICAgICAgICBpZiAoY3VzdG9tSGFuZGxlcikge1xuICAgICAgICAgICAgY3VzdG9tSGFuZGxlcih7XG4gICAgICAgICAgICAgIHJlcTogcmVxLFxuICAgICAgICAgICAgICByZXM6IHJlcyxcbiAgICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHAucmVuZGVyKHJlcSwgcmVzLCByb3V0ZS5wYWdlLCBxdWVyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHRIYW5kbGVyKHJlcSwgcmVzLCBwYXJzZWRVcmwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMaW5rXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExpbmsoTGluaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBMaW5rUm91dGVzID0gZnVuY3Rpb24gTGlua1JvdXRlcyhwcm9wcykge1xuICAgICAgICB2YXIgcm91dGUgPSBwcm9wcy5yb3V0ZSxcbiAgICAgICAgICAgIHBhcmFtcyA9IHByb3BzLnBhcmFtcyxcbiAgICAgICAgICAgIHRvID0gcHJvcHMudG8sXG4gICAgICAgICAgICBuZXdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wicm91dGVcIiwgXCJwYXJhbXNcIiwgXCJ0b1wiXSk7XG5cbiAgICAgICAgdmFyIG5hbWVPclVybCA9IHJvdXRlIHx8IHRvO1xuXG4gICAgICAgIGlmIChuYW1lT3JVcmwpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld1Byb3BzLCBfdGhpczIuZmluZEFuZEdldFVybHMobmFtZU9yVXJsLCBwYXJhbXMpLnVybHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGluaywgbmV3UHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIExpbmtSb3V0ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFJvdXRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3V0ZXIoUm91dGVyKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHdyYXAgPSBmdW5jdGlvbiB3cmFwKG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHJvdXRlLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzJGZpbmRBbmRHZXRVcmxzID0gX3RoaXMzLmZpbmRBbmRHZXRVcmxzKHJvdXRlLCBwYXJhbXMpLFxuICAgICAgICAgICAgICBieU5hbWUgPSBfdGhpczMkZmluZEFuZEdldFVybHMuYnlOYW1lLFxuICAgICAgICAgICAgICBfdGhpczMkZmluZEFuZEdldFVybHMyID0gX3RoaXMzJGZpbmRBbmRHZXRVcmxzLnVybHMsXG4gICAgICAgICAgICAgIGFzID0gX3RoaXMzJGZpbmRBbmRHZXRVcmxzMi5hcyxcbiAgICAgICAgICAgICAgaHJlZiA9IF90aGlzMyRmaW5kQW5kR2V0VXJsczIuaHJlZjtcblxuICAgICAgICAgIHJldHVybiBSb3V0ZXJbbWV0aG9kXShocmVmLCBhcywgYnlOYW1lID8gb3B0aW9ucyA6IHBhcmFtcyk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlID0gd3JhcCgncHVzaCcpO1xuICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZSA9IHdyYXAoJ3JlcGxhY2UnKTtcbiAgICAgIFJvdXRlci5wcmVmZXRjaFJvdXRlID0gd3JhcCgncHJlZmV0Y2gnKTtcbiAgICAgIHJldHVybiBSb3V0ZXI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlcztcbn0oKTtcblxudmFyIFJvdXRlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUm91dGUoX3JlZjIpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWUsXG4gICAgICAgIHBhdHRlcm4gPSBfcmVmMi5wYXR0ZXJuLFxuICAgICAgICBfcmVmMiRwYWdlID0gX3JlZjIucGFnZSxcbiAgICAgICAgcGFnZSA9IF9yZWYyJHBhZ2UgPT09IHZvaWQgMCA/IG5hbWUgOiBfcmVmMiRwYWdlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlKTtcblxuICAgIGlmICghbmFtZSAmJiAhcGFnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBwYWdlIHRvIHJlbmRlciBmb3Igcm91dGUgXFxcIlwiLmNvbmNhdChwYXR0ZXJuLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybiB8fCBcIi9cIi5jb25jYXQobmFtZSk7XG4gICAgdGhpcy5wYWdlID0gcGFnZS5yZXBsYWNlKC8oXnxcXC8paW5kZXgkLywgJycpLnJlcGxhY2UoL15cXC8/LywgJy8nKTtcbiAgICB0aGlzLnJlZ2V4ID0gKDAsIF9wYXRoVG9SZWdleHAuZGVmYXVsdCkodGhpcy5wYXR0ZXJuLCB0aGlzLmtleXMgPSBbXSk7XG4gICAgdGhpcy5rZXlOYW1lcyA9IHRoaXMua2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGtleS5uYW1lO1xuICAgIH0pO1xuICAgIHRoaXMudG9QYXRoID0gX3BhdGhUb1JlZ2V4cC5kZWZhdWx0LmNvbXBpbGUodGhpcy5wYXR0ZXJuKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZSwgW3tcbiAgICBrZXk6IFwibWF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWF0Y2gocGF0aCkge1xuICAgICAgdmFyIHZhbHVlcyA9IHRoaXMucmVnZXguZXhlYyhwYXRoKTtcblxuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNUb1BhcmFtcyh2YWx1ZXMuc2xpY2UoMSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZXNUb1BhcmFtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZXNUb1BhcmFtcyh2YWx1ZXMpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAocGFyYW1zLCB2YWwsIGkpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gcGFyYW1zO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwYXJhbXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX3RoaXM0LmtleXNbaV0ubmFtZSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbCkpKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SHJlZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIcmVmKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5wYWdlLCBcIj9cIikuY29uY2F0KHRvUXVlcnlzdHJpbmcocGFyYW1zKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEFzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFzKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgdmFyIGFzID0gdGhpcy50b1BhdGgocGFyYW1zKSB8fCAnLyc7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgICB2YXIgcXNLZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gX3RoaXM1LmtleU5hbWVzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgICB9KTtcbiAgICAgIGlmICghcXNLZXlzLmxlbmd0aCkgcmV0dXJuIGFzO1xuICAgICAgdmFyIHFzUGFyYW1zID0gcXNLZXlzLnJlZHVjZShmdW5jdGlvbiAocXMsIGtleSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihxcywgX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIHBhcmFtc1trZXldKSk7XG4gICAgICB9LCB7fSk7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoYXMsIFwiP1wiKS5jb25jYXQodG9RdWVyeXN0cmluZyhxc1BhcmFtcykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRVcmxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVybHMocGFyYW1zKSB7XG4gICAgICB2YXIgYXMgPSB0aGlzLmdldEFzKHBhcmFtcyk7XG4gICAgICB2YXIgaHJlZiA9IHRoaXMuZ2V0SHJlZihwYXJhbXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXM6IGFzLFxuICAgICAgICBocmVmOiBocmVmXG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZTtcbn0oKTtcblxudmFyIHRvUXVlcnlzdHJpbmcgPSBmdW5jdGlvbiB0b1F1ZXJ5c3RyaW5nKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBvYmpba2V5XSAhPT0gbnVsbCAmJiBvYmpba2V5XSAhPT0gdW5kZWZpbmVkO1xuICB9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2VuY29kZVVSSUNvbXBvbmVudChrZXkpLCBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXS5qb2luKCc9Jyk7XG4gIH0pLmpvaW4oJyYnKTtcbn07IiwiLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcGF0aFRvUmVnZXhwXG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5tb2R1bGUuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZVxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBcblxuLyoqXG4gKiBEZWZhdWx0IGNvbmZpZ3MuXG4gKi9cbnZhciBERUZBVUxUX0RFTElNSVRFUiA9ICcvJ1xudmFyIERFRkFVTFRfREVMSU1JVEVSUyA9ICcuLydcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIjp0ZXN0KFxcXFxkKyk/XCIgPT4gW1widGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIl1cbiAgLy8gXCIoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWRdXG4gICcoPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpKFsrKj9dKT8nXG5dLmpvaW4oJ3wnKSwgJ2cnKVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIpIHx8IERFRkFVTFRfREVMSU1JVEVSXG4gIHZhciBkZWxpbWl0ZXJzID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXJzKSB8fCBERUZBVUxUX0RFTElNSVRFUlNcbiAgdmFyIHBhdGhFc2NhcGVkID0gZmFsc2VcbiAgdmFyIHJlc1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBwYXRoRXNjYXBlZCA9IHRydWVcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIHByZXYgPSAnJ1xuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBuYW1lID0gcmVzWzJdXG4gICAgdmFyIGNhcHR1cmUgPSByZXNbM11cbiAgICB2YXIgZ3JvdXAgPSByZXNbNF1cbiAgICB2YXIgbW9kaWZpZXIgPSByZXNbNV1cblxuICAgIGlmICghcGF0aEVzY2FwZWQgJiYgcGF0aC5sZW5ndGgpIHtcbiAgICAgIHZhciBrID0gcGF0aC5sZW5ndGggLSAxXG5cbiAgICAgIGlmIChkZWxpbWl0ZXJzLmluZGV4T2YocGF0aFtrXSkgPiAtMSkge1xuICAgICAgICBwcmV2ID0gcGF0aFtrXVxuICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBrKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gICAgICBwYXRoID0gJydcbiAgICAgIHBhdGhFc2NhcGVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbCA9IHByZXYgIT09ICcnICYmIG5leHQgIT09IHVuZGVmaW5lZCAmJiBuZXh0ICE9PSBwcmV2XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSBwcmV2IHx8IGRlZmF1bHREZWxpbWl0ZXJcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXBcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZXYsXG4gICAgICBkZWxpbWl0ZXI6IGRlbGltaXRlcixcbiAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgcGFydGlhbDogcGFydGlhbCxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6ICdbXicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICddKz8nXG4gICAgfSlcbiAgfVxuXG4gIC8vIFB1c2ggYW55IHJlbWFpbmluZyBjaGFyYWN0ZXJzLlxuICBpZiAocGF0aCB8fCBpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoICsgc3RyLnN1YnN0cihpbmRleCkpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGVuY29kZSA9IChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RlKSB8fCBlbmNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZFxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFycmF5JylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIGNvbnRpbnVlXG5cbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pXG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pXG5cbiAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCBnb3QgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICAgIH1cblxuICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkgcGF0aCArPSB0b2tlbi5wcmVmaXhcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlICcgKyAodG9rZW4ucmVwZWF0ID8gJ2FuIGFycmF5JyA6ICdhIHN0cmluZycpKVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheT19ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICBpZiAoIWtleXMpIHJldHVybiBwYXRoXG5cbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgcGF0dGVybjogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5PX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86JyArIHBhcnRzLmpvaW4oJ3wnKSArICcpJywgZmxhZ3Mob3B0aW9ucykpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXk9fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgdG9rZW5zXG4gKiBAcGFyYW0gIHtBcnJheT19ICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gIHZhciBzdGFydCA9IG9wdGlvbnMuc3RhcnQgIT09IGZhbHNlXG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgdmFyIGRlbGltaXRlciA9IGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBERUZBVUxUX0RFTElNSVRFUilcbiAgdmFyIGRlbGltaXRlcnMgPSBvcHRpb25zLmRlbGltaXRlcnMgfHwgREVGQVVMVF9ERUxJTUlURVJTXG4gIHZhciBlbmRzV2l0aCA9IFtdLmNvbmNhdChvcHRpb25zLmVuZHNXaXRoIHx8IFtdKS5tYXAoZXNjYXBlU3RyaW5nKS5jb25jYXQoJyQnKS5qb2luKCd8JylcbiAgdmFyIHJvdXRlID0gc3RhcnQgPyAnXicgOiAnJ1xuICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0b2tlbnMubGVuZ3RoID09PSAwXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgICBpc0VuZERlbGltaXRlZCA9IGkgPT09IHRva2Vucy5sZW5ndGggLSAxICYmIGRlbGltaXRlcnMuaW5kZXhPZih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IHRva2VuLnJlcGVhdFxuICAgICAgICA/ICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpKD86JyArIGVzY2FwZVN0cmluZyh0b2tlbi5kZWxpbWl0ZXIpICsgJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJykpKidcbiAgICAgICAgOiB0b2tlbi5wYXR0ZXJuXG5cbiAgICAgIGlmIChrZXlzKSBrZXlzLnB1c2godG9rZW4pXG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpICsgJygnICsgY2FwdHVyZSArICcpPydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZSArPSAnKD86JyArIGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpICsgJygnICsgY2FwdHVyZSArICcpJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICBpZiAoIXN0cmljdCkgcm91dGUgKz0gJyg/OicgKyBkZWxpbWl0ZXIgKyAnKT8nXG5cbiAgICByb3V0ZSArPSBlbmRzV2l0aCA9PT0gJyQnID8gJyQnIDogJyg/PScgKyBlbmRzV2l0aCArICcpJ1xuICB9IGVsc2Uge1xuICAgIGlmICghc3RyaWN0KSByb3V0ZSArPSAnKD86JyArIGRlbGltaXRlciArICcoPz0nICsgZW5kc1dpdGggKyAnKSk/J1xuICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHJvdXRlICs9ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wnICsgZW5kc1dpdGggKyAnKSdcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7QXJyYXk9fSAgICAgICAgICAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCBrZXlzLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIGtleXMsIG9wdGlvbnMpXG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgJy4uLy4uL3N0YXRpYy9jc3MvbWluZS5jc3MnXG5pbXBvcnQgKiBhcyBTeXN0ZW0gZnJvbSBcIi4uLy4uL3JlZHV4L21vZHVsZXMvc3lzdGVtXCI7XG5pbXBvcnQgKiBhcyBDT05TVCBmcm9tIFwiLi4vLi4vbW9kZWwvQ29uc3RcIjtcbmltcG9ydCBQYWdpbmF0aW9uVGFibGUgZnJvbSBcIi4vTWF0ZXJpYWxUYWJsZVwiO1xuaW1wb3J0ICogYXMgVG9vbHMgZnJvbSBcIi4uLy4uL2xpYi90b29sXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgQWxlcnRNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BbGVydE1vZGFsXCI7XG5pbXBvcnQge2RhdGFTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbW9kZWwvRGF0YVNlcnZpY2VcIjtcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlRm9yZXZlclwiO1xuaW1wb3J0IHtodHRwUmVxfSBmcm9tIFwiLi4vLi4vbW9kZWwvUmVxXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBpbXBvcnQge2h0dHBSZXF9IGZyb20gXCIuLi8uLi9tb2RlbC9SZXFcIjtcbi8vIGltcG9ydCBfbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxubGV0IHZtID0gbnVsbDtcblxuY2xhc3MgTXlBZHZlcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB2bSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZW5kZXJBZHZlcnREYXRhOiBbXSxcbiAgICAgICAgICAgIHJlbmRlckRhdGFUb3RhbExlbmd0aDogMCxcbiAgICAgICAgICAgIGxvYWRNb3JlU3RhdGU6ICdzdWNjZXNzJywvL3N0YXJ0LCBmYWlsLCBub0RhdGFcbiAgICAgICAgICAgIGhhc05vTW9yZURhdGE6IGZhbHNlLC8vdHJ1ZTpub01vcmUsXG5cbiAgICAgICAgICAgIGFsZXJ0TW9kYWxTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICBjaGFuZ2VTdGF0ZUFkdmVydElkOiAtMSxcbiAgICAgICAgICAgIGFkdmVydFN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIH1cblxuICAgIGZ1bmNDaGFuZ2VBZHZlcnRTdGF0ZShlLCBpdGVtKSB7XG4gICAgICAgIGxldCBhZHZlcnRfaWQgPSBpdGVtLmlkLCBhZHZlcnRTdGF0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGlmIChhZHZlcnRfaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbTppdGVtfSk7XG4gICAgICAgICAgICB0aGlzLmZ1bmNUb2dnbGVBbGVydE1vZGFsKGFkdmVydF9pZCwgYWR2ZXJ0U3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY1RvZ2dsZUFsZXJ0TW9kYWwoYWR2ZXJ0X2lkLCBhZHZlcnRTdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFsZXJ0TW9kYWxTdGF0ZTogIXRoaXMuc3RhdGUuYWxlcnRNb2RhbFN0YXRlLFxuICAgICAgICAgICAgY2hhbmdlU3RhdGVBZHZlcnRJZDogIXRoaXMuc3RhdGUuYWxlcnRNb2RhbFN0YXRlID8gYWR2ZXJ0X2lkIDogLTEsXG4gICAgICAgICAgICBhZHZlcnRTdGF0ZTogYWR2ZXJ0U3RhdGUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmNBZHZlcnRTdGF0ZVNldEZhbHNlKCkge1xuICAgICAgICBsZXQgY2hhbmdlU3RhdGVBZHZlcnRJZCA9IHRoaXMuc3RhdGUuY2hhbmdlU3RhdGVBZHZlcnRJZCxcbiAgICAgICAgICAgIHVwZGF0ZURhdGEgPSB7c3RhdGU6IHRoaXMuc3RhdGUuYWR2ZXJ0U3RhdGV9O1xuICAgICAgICBsZXQge3NlbGVjdGVkSXRlbX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChjaGFuZ2VTdGF0ZUFkdmVydElkID09PSAtMSB8fCAhc2VsZWN0ZWRJdGVtKSByZXR1cm47XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0uZ3VhcmFudGVlIDwgc2VsZWN0ZWRJdGVtLnBvaW50KSB7XG4gICAgICAgICAgICBkYXRhU2VydmljZS5zaG93Tm90aWZpY2F0aW9uKCd3YXJuaW5nJywgJ+uzuCDqtJHqs6DripQg67O07Kad6riIIOu2gOyhseycvOuhnCDstpzsi5ztlaDsiJgg7JeG7Iq164uI64ukLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVNlcnZpY2UudXBkYXRlTXlBZHZlcnQodGhpcy5zdGF0ZS5jaGFuZ2VTdGF0ZUFkdmVydElkLCB1cGRhdGVEYXRhKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNb2RhbFN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlU3RhdGVBZHZlcnRJZDogLTEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZVJlZi5jdXJyZW50ICYmIHRoaXMudGFibGVSZWYuY3VycmVudC5vblF1ZXJ5Q2hhbmdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNb2RhbFN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlU3RhdGVBZHZlcnRJZDogLTEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXJNZWRpYShpdGVtKSB7XG4gICAgICAgIGNvbnN0IHthaX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgdG9rZW4gPSBhaS50b2tlbjtcbiAgICAgICAgaWYgKCFpdGVtICYmICFpdGVtWzBdICYmIGl0ZW1bMF0uc3JjICYmIGl0ZW1bMF0udGh1bWIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9Jycgc3JjPScuLi8uLi9zdGF0aWMvaW1nL2NvbW1vbi9kcmlwX2RlZmF1bHQucG5nJyBzdHlsZT17e3dpZHRoOiAyNX19Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9yb3cnPlxuICAgICAgICAgICAgICAgIHtpdGVtLm1hcCgoY2VsbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsVXJsID0gY2VsbC50aHVtYiA/IGNlbGwudGh1bWIgOiBjZWxsLnNyYztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IHN0eWxlPXt7d2lkdGg6IDI1LCBoZWlnaHQ6IDI1fX0gY2xhc3NOYW1lPSdtbC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nJyBzcmM9e2NlbGxVcmwgKyAnP3Rva2VuPScgKyB0b2tlbn0gc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyQWR2ZXJ0U3RhdGUoc3RhdGUsIHJvdykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoIG9uQ2hhbmdlPXsoZSk9Pnt0aGlzLmZ1bmNDaGFuZ2VBZHZlcnRTdGF0ZShlLCByb3cpfX0gY29sb3I9eydwcmltYXJ5J30gb3V0bGluZT17J2FsdCd9IGxhYmVsIGNoZWNrZWQ9e3N0YXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXJUaW1lKGl0ZW0sIHJvdykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+e2l0ZW0gPyBUb29scy5nZXRDdXJyZW50VGltZShpdGVtLCAnWVlZWS1NTS1ERCcpIDogJ0xvYWRpbmcuLi4nfTwvc3Bhbj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlckFkdmVydFVybChjZWxsSW5mbykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj17Y2VsbEluZm99PntjZWxsSW5mb308L2E+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jRGVsZXRlSXRlbXMoZXZ0LCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtzZXRBcHBNb2RhbFN0YXRlfSA9IHZtLnByb3BzO1xuICAgICAgICBsZXQgZGVsZXRlX2lkcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtpbmRleF0uaWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVfaWRzLnB1c2goZGF0YVtpbmRleF0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldEFwcE1vZGFsU3RhdGUoJ3BhZ2UnLCAn7ISg7YOd65CcIO2VreuqqeuTpOydhCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/JywgJ0RFTEVURScsICgpPT52bS5kZWxldGVJdGVtcyhkZWxldGVfaWRzKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbXMgPSBhc3luYyAoZGVsZXRlSWRzKSA9PiB7XG4gICAgICAgIGxldCBkZWxldGVfcmVzdWx0ID0gYXdhaXQgaHR0cFJlcSgnL2FwaS9hZHZlcnQnLCAnZGVsZXRlJywge3BhcmFtczp7ZmlsdGVyOntpZHM6ZGVsZXRlSWRzfX19KTtcbiAgICAgICAgaWYgKGRlbGV0ZV9yZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVSZWYuY3VycmVudCAmJiB0aGlzLnRhYmxlUmVmLmN1cnJlbnQub25RdWVyeUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyUGF5UG9pbnQoaXRlbSkge1xuICAgICAgICBsZXQgcGF5bWVudF9wb2ludCA9IGl0ZW0ucG9pbnQgKiBpdGVtLnZpZXdzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cGF5bWVudF9wb2ludH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlckRldGFpbFBhbmVsKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJncmVlblwiLCBoZWlnaHQ6MTAwfX0+XG4gICAgICAgICAgICAgICAgZGV0YWlsIHBhbmVsLi4uLi5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlclRvdGFsR3VhcmFudGVlKGl0ZW0pIHtcbiAgICAgICAgbGV0IHRvdGFsX2d1YXJhbnRlZSA9IGl0ZW0uZ3VhcmFudGVlICsgKGl0ZW0ucG9pbnQgKiBpdGVtLnZpZXdzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RvdGFsX2d1YXJhbnRlZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXCJcIiksXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnbWVkaWEnLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IHByb3BzID0+ICh0aGlzLnJlbmRlck1lZGlhKHByb3BzLm1lZGlhKSksXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdChcIkFEVkVSVF9MSU5LXCIpLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3VybCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogcHJvcHMgPT4gKHRoaXMucmVuZGVyQWR2ZXJ0VXJsKHByb3BzLnVybCkpLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHQoXCJJTlNFVF9EQVRFXCIpLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2N0aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBwcm9wcyA9PiAodGhpcy5yZW5kZXJUaW1lKHByb3BzLmN0aW1lKSksXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdChcIkZJTklTSF9EQVRFXCIpLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2V0aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBwcm9wcyA9PiAodGhpcy5yZW5kZXJUaW1lKHByb3BzLmV0aW1lKSkgLy8gQ3VzdG9tIGNlbGwgY29tcG9uZW50cyFcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0KFwiQURWRVJUX0dVQVJBTlRFRVwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdndWFyYW50ZWUnLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IHByb3BzID0+ICh0aGlzLnJlbmRlclRvdGFsR3VhcmFudGVlKHByb3BzKSlcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0KFwiUEFZX1BPSU5UXCIpLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3BvaW50JyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0KFwiVklFV1NfQ05UXCIpLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3ZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0KFwiQ09OU1VNUFRJT05fUE9JTlRcIiksXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBwcm9wcyA9PiAodGhpcy5yZW5kZXJQYXlQb2ludChwcm9wcykpXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdChcIlJFTUFJTl9QT0lOVFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdndWFyYW50ZWUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHQoXCJJTkNPTVNUQVRFXCIpLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3N0YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBwcm9wcyA9PiAodGhpcy5yZW5kZXJBZHZlcnRTdGF0ZShwcm9wcy5zdGF0ZSwgcHJvcHMpKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblRhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlUmVmPXt0aGlzLnRhYmxlUmVmfVxuICAgICAgICAgICAgICAgICAgICBtaT17dGhpcy5wcm9wcy5taX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17J2FkdmVydCd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRfdD17dGhpcy5wcm9wcy50fVxuICAgICAgICAgICAgICAgICAgICBub0RhdGFUZXh0PXt0KCdOT19EQVRBJyl9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlX3NlbGVjdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgdGFibGVfYWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJ1JlbW92ZSBBbGwgU2VsZWN0ZWQgSXRlbXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICgpPT48RGVsZXRlSWNvbiAvPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoZXZ0LCBkYXRhKSA9PiB7dGhpcy5mdW5jRGVsZXRlSXRlbXMoZXZ0LCBkYXRhKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFN0YXR1cz17dGhpcy5zdGF0ZS5hbGVydE1vZGFsU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29TdGF0dXM9eydwYWdlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVGdW5jPXt0aGlzLmZ1bmNUb2dnbGVBbGVydE1vZGFsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnRTdHI9e3RoaXMuc3RhdGUuYWR2ZXJ0U3RhdGUgPyB0KCdBRFZFUlRfU1RBVEVfVFJVRV9BTEVSVCcpIDogdCgnQURWRVJUX1NUQVRFX0ZBTFNFX0FMRVJUJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuT2tTdHI9e3QoJ0RPTkUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jQnRuT2tDYWxsYmFjaz17dGhpcy5mdW5jQWR2ZXJ0U3RhdGVTZXRGYWxzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgc3RhdGUgPT4gKHtcbiAgICAgICAgc3lzdGVtOiBzdGF0ZS5zeXN0ZW0sXG4gICAgICAgIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgICAgICAgbWk6IHN0YXRlLnN5c3RlbS5taSxcbiAgICAgICAgYWk6IHN0YXRlLnN5c3RlbS5haSxcbiAgICAgICAgc2V0dGluZzogc3RhdGUuc3lzdGVtLnNldHRpbmcsXG4gICAgICAgIGxhbmc6IHN0YXRlLmkxOG5TdGF0ZS5sYW5nLFxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGdldEhpc3Rvcnk6ICh0eXBlLCBsb2FkVHlwZSA9IENPTlNULkxPQURfVFlQRV9JTklULCBmaWx0ZXIgPSB7fSwgcGVyUGFnZSA9IDEwKSA9PiBkaXNwYXRjaChTeXN0ZW0uZ2V0SGlzdG9yeUFzeW5jKHR5cGUsIGxvYWRUeXBlLCBmaWx0ZXIsIHBlclBhZ2UpKSxcbiAgICAgICAgZ2V0U2V0dGluZzogKCkgPT4gZGlzcGF0Y2goU3lzdGVtLmdldFNldHRpbmdBc3luYygpKSxcbiAgICAgICAgLy8gZ2V0VXNlcjogKGlkKSA9PiBkaXNwYXRjaChVc2Vycy5nZXQoaWQpKSxcbiAgICB9KVxuKShNeUFkdmVydCk7XG4iLCIvKipcclxuICogUGFyYW1ldGVyaXplZCBSb3V0aW5nIHdpdGggbmV4dC1yb3V0ZVxyXG4gKlxyXG4gKiBCZW5lZml0czogTGVzcyBjb2RlLCBhbmQgZWFzaWx5IGhhbmRsZXMgY29tcGxleCB1cmwgc3RydWN0dXJlc1xyXG4gKiovXHJcblxyXG5jb25zdCByb3V0ZXMgPSAobW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCkpO1xyXG5cclxucm91dGVzXHJcbiAgICAuYWRkKHtuYW1lOiAnbG9naW4nLCBwYXR0ZXJuOiAnbG9naW4nfSlcclxuICAgIC5hZGQoJ2RldGFpbFZpZXcnLCAnL2RldGFpbFZpZXcvOmlkJywgJ2RldGFpbFZpZXcnKVxyXG4gICAgLmFkZCgnVXNlclByb2ZpbGUnLCAnL1VzZXJQcm9maWxlLzp1c2VyX2lkJywgJ1VzZXJQcm9maWxlJylcclxuICAgIC5hZGQoJ3NlYXJjaFJlc3VsdCcsICcvc2VhcmNoUmVzdWx0LzpzZWFyY2hEYXRhJywgJ3NlYXJjaFJlc3VsdCcpXHJcbiAgICAuYWRkKCdwcm9maWxlJywgJy9wcm9maWxlLzpnb19zdGF0ZScsICdwcm9maWxlJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==