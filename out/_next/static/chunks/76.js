(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[76],{

/***/ "./pages/Chatting/chattingPane/messageItems/TextItem.js":
/*!**************************************************************!*\
  !*** ./pages/Chatting/chattingPane/messageItems/TextItem.js ***!
  \**************************************************************/
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
/* harmony import */ var _lib_tool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/tool */ "./lib/tool.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * TextItem
 * */




var TextItem = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TextItem, _React$Component);
  function TextItem() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextItem);
    return _callSuper(this, TextItem, arguments);
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextItem, [{
    key: "render",
    value: function render() {
      var message = this.props.message;
      var msg_content_data = message.content && message.content.data,
        render_text = '';
      if (_lib_tool__WEBPACK_IMPORTED_MODULE_6__["isString"](msg_content_data)) {
        render_text = msg_content_data;
      }
      return __jsx("div", {
        style: {
          padding: '10px 20px',
          wordBreak: 'break-word'
        }
      }, render_text);
    }
  }]);
  return TextItem;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return {
    // setting : state.system.setting.data,
  };
})(TextItem));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdHRpbmcvY2hhdHRpbmdQYW5lL21lc3NhZ2VJdGVtcy9UZXh0SXRlbS5qcyJdLCJuYW1lcyI6WyJUZXh0SXRlbSIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJtZXNzYWdlIiwicHJvcHMiLCJtc2dfY29udGVudF9kYXRhIiwiY29udGVudCIsImRhdGEiLCJyZW5kZXJfdGV4dCIsIlRvb2xzIiwiX19qc3giLCJzdHlsZSIsInBhZGRpbmciLCJ3b3JkQnJlYWsiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFMEI7QUFDb0I7QUFDVjtBQUFBLElBRTlCQSxRQUFRLDBCQUFBQyxnQkFBQTtFQUFBQyxtRkFBQSxDQUFBRixRQUFBLEVBQUFDLGdCQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRyx5RkFBQSxPQUFBSCxRQUFBO0lBQUEsT0FBQUksVUFBQSxPQUFBSixRQUFBLEVBQUFLLFNBQUE7RUFBQTtFQUFBQyxzRkFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVWLFNBQUFDLE9BQUEsRUFBUztNQUNMLElBQU9DLE9BQU8sR0FBSSxJQUFJLENBQUNDLEtBQUssQ0FBckJELE9BQU87TUFDZCxJQUFJRSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDRyxPQUFPLElBQUVILE9BQU8sQ0FBQ0csT0FBTyxDQUFDQyxJQUFJO1FBQ3hEQyxXQUFXLEdBQUcsRUFBRTtNQUNwQixJQUFJQyxrREFBYyxDQUFDSixnQkFBZ0IsQ0FBQyxFQUFFO1FBQ2xDRyxXQUFXLEdBQUdILGdCQUFnQjtNQUNsQztNQUNBLE9BQ0tLLEtBQUE7UUFBS0MsS0FBSyxFQUFFO1VBQUNDLE9BQU8sRUFBQyxXQUFXO1VBQUNDLFNBQVMsRUFBQztRQUFZO01BQUUsR0FBRUwsV0FBaUIsQ0FBQztJQUV0RjtFQUFDO0VBQUEsT0FBQWYsUUFBQTtBQUFBLEVBWmtCcUIsNENBQUssQ0FBQ0MsU0FBUztBQWV2QkMsMEhBQU8sQ0FDbEIsVUFBQUMsS0FBSztFQUFBLE9BQUs7SUFDTjtFQUFBLENBQ0g7QUFBQSxDQUNMLENBQUMsQ0FBQ3hCLFFBQVEsQ0FBQyxFQUFDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRleHRJdGVtXG4gKiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUb29scyBmcm9tICcuLi8uLi8uLi8uLi9saWIvdG9vbCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jbGFzcyBUZXh0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHttZXNzYWdlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBtc2dfY29udGVudF9kYXRhID0gbWVzc2FnZS5jb250ZW50JiZtZXNzYWdlLmNvbnRlbnQuZGF0YSxcbiAgICAgICAgICAgIHJlbmRlcl90ZXh0ID0gJyc7XG4gICAgICAgIGlmIChUb29scy5pc1N0cmluZyhtc2dfY29udGVudF9kYXRhKSkge1xuICAgICAgICAgICAgcmVuZGVyX3RleHQgPSBtc2dfY29udGVudF9kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6JzEwcHggMjBweCcsd29yZEJyZWFrOidicmVhay13b3JkJ319PntyZW5kZXJfdGV4dH08L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBzdGF0ZSA9PiAoe1xuICAgICAgICAvLyBzZXR0aW5nIDogc3RhdGUuc3lzdGVtLnNldHRpbmcuZGF0YSxcbiAgICB9KVxuKShUZXh0SXRlbSk7XG4iXSwic291cmNlUm9vdCI6IiJ9