(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[78],{

/***/ "./pages/profile/ChargeExchange.js":
/*!*****************************************!*\
  !*** ./pages/profile/ChargeExchange.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var ChargeExchange = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChargeExchange, _React$Component);
  function ChargeExchange() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChargeExchange);
    return _callSuper(this, ChargeExchange, arguments);
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChargeExchange, [{
    key: "goDownloadPage",
    value: function goDownloadPage() {
      window.open('https://down.ad-lib.live', '_blank');
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var t = this.props.t;
      return __jsx("div", {
        style: {
          textAlign: 'center'
        }
      }, t('PLEASE_USE_APP'), __jsx("div", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "outlined",
        onClick: function onClick() {
          _this.goDownloadPage();
        }
      }, t('APPDOWNLOAD'))));
    }
  }]);
  return ChargeExchange;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (ChargeExchange);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9DaGFyZ2VFeGNoYW5nZS5qcyJdLCJuYW1lcyI6WyJDaGFyZ2VFeGNoYW5nZSIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnb0Rvd25sb2FkUGFnZSIsIndpbmRvdyIsIm9wZW4iLCJyZW5kZXIiLCJfdGhpcyIsInQiLCJwcm9wcyIsIl9fanN4Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZTtBQUFBLElBRW5DQSxjQUFjLDBCQUFBQyxnQkFBQTtFQUFBQyxtRkFBQSxDQUFBRixjQUFBLEVBQUFDLGdCQUFBO0VBQUEsU0FBQUQsZUFBQTtJQUFBRyx5RkFBQSxPQUFBSCxjQUFBO0lBQUEsT0FBQUksVUFBQSxPQUFBSixjQUFBLEVBQUFLLFNBQUE7RUFBQTtFQUFBQyxzRkFBQSxDQUFBTixjQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVoQixTQUFBQyxlQUFBLEVBQWlCO01BQ2JDLE1BQU0sQ0FBQ0MsSUFBSSxDQUNQLDBCQUEwQixFQUMxQixRQUNKLENBQUM7SUFDTDtFQUFDO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFJLE9BQUEsRUFBUztNQUFBLElBQUFDLEtBQUE7TUFDTCxJQUFPQyxDQUFDLEdBQUksSUFBSSxDQUFDQyxLQUFLLENBQWZELENBQUM7TUFDUixPQUNJRSxLQUFBO1FBQUtDLEtBQUssRUFBRTtVQUFDQyxTQUFTLEVBQUM7UUFBUTtNQUFFLEdBQzVCSixDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFDcEJFLEtBQUEsY0FDSUEsS0FBQSxDQUFDRyx3REFBTTtRQUNIQyxPQUFPLEVBQUMsVUFBVTtRQUNsQkMsT0FBTyxFQUFFLFNBQUFBLFFBQUEsRUFBTTtVQUFDUixLQUFJLENBQUNKLGNBQWMsQ0FBQyxDQUFDO1FBQUE7TUFBRSxHQUV0Q0ssQ0FBQyxDQUFDLGFBQWEsQ0FDWixDQUNQLENBQ0osQ0FBQztJQUVkO0VBQUM7RUFBQSxPQUFBZCxjQUFBO0FBQUEsRUF4QndCc0IsNENBQUssQ0FBQ0MsU0FBUztBQTJCN0J2Qiw2RUFBYyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzc4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY2xhc3MgQ2hhcmdlRXhjaGFuZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgZ29Eb3dubG9hZFBhZ2UoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXHJcbiAgICAgICAgICAgICdodHRwczovL2Rvd24uYWQtbGliLmxpdmUnLFxyXG4gICAgICAgICAgICAnX2JsYW5rJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHt0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAge3QoJ1BMRUFTRV9VU0VfQVBQJyl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLmdvRG93bmxvYWRQYWdlKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ0FQUERPV05MT0FEJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmdlRXhjaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9