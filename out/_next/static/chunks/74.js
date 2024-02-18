(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[74],{

/***/ "./pages/Chatting/chattingPane/messageItems/PresentItem.js":
/*!*****************************************************************!*\
  !*** ./pages/Chatting/chattingPane/messageItems/PresentItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/**
 * PresentItem
 * */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var message = props.message;
  if (!message || !message.content || !message.content.data) {
    return null;
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    alt: "present",
    src: message.content.data.img,
    style: {
      maxWidth: 50
    }
  }), __jsx("span", null, "x", message.content.data.cnt));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdHRpbmcvY2hhdHRpbmdQYW5lL21lc3NhZ2VJdGVtcy9QcmVzZW50SXRlbS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsIm1lc3NhZ2UiLCJjb250ZW50IiwiZGF0YSIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsImFsdCIsInNyYyIsImltZyIsInN0eWxlIiwibWF4V2lkdGgiLCJjbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQzBCO0FBRVgseUVBQUNBLEtBQUssRUFBSTtFQUVqQixJQUFPQyxPQUFPLEdBQUlELEtBQUssQ0FBaEJDLE9BQU87RUFDZCxJQUFJLENBQUNBLE9BQU8sSUFBSSxDQUFDQSxPQUFPLENBQUNDLE9BQU8sSUFBSSxDQUFDRCxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO0lBQ3ZELE9BQU8sSUFBSTtFQUNmO0VBQ0EsT0FDSUMsS0FBQSxDQUFBQyw0Q0FBQSxDQUFBQyxRQUFBLFFBQ0lGLEtBQUE7SUFBS0csR0FBRyxFQUFDLFNBQVM7SUFBQ0MsR0FBRyxFQUFFUCxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDTSxHQUFJO0lBQUNDLEtBQUssRUFBRTtNQUFDQyxRQUFRLEVBQUM7SUFBRTtFQUFFLENBQUMsQ0FBQyxFQUN6RVAsS0FBQSxvQkFBUUgsT0FBTyxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQ1MsR0FBVSxDQUN6QyxDQUFDO0FBRWYsQ0FBQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcmVzZW50SXRlbVxuICogKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKT0+IHtcblxuICAgICAgICBjb25zdCB7bWVzc2FnZX0gPSBwcm9wcztcbiAgICAgICAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLmNvbnRlbnQgfHwgIW1lc3NhZ2UuY29udGVudC5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD0ncHJlc2VudCcgc3JjPXttZXNzYWdlLmNvbnRlbnQuZGF0YS5pbWd9IHN0eWxlPXt7bWF4V2lkdGg6NTB9fS8+XG4gICAgICAgICAgICAgICAgPHNwYW4+eHttZXNzYWdlLmNvbnRlbnQuZGF0YS5jbnR9PC9zcGFuPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=