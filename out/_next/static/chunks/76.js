(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[76],{

/***/ "./pages/Chatting/chattingPane/messageItems/VideoItem.js":
/*!***************************************************************!*\
  !*** ./pages/Chatting/chattingPane/messageItems/VideoItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoItem; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_DataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../model/DataService */ "./model/DataService.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * VideoItem
 * */



var VideoItem = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(VideoItem, _React$Component);
  function VideoItem(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VideoItem);
    _this = _callSuper(this, VideoItem, [props]);
    _this.state = {
      playVideo: false
    };
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var message = this.props.message;
      var path = message.content.data;
      var pathElem = _model_DataService__WEBPACK_IMPORTED_MODULE_6__["dataService"].splitPath(path);
      var dirname = pathElem.dirname;
      var filename = pathElem.filename;
      var url = "".concat(dirname).concat(filename, ".png");
      return __jsx("div", null, __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            playVideo: !_this2.state.playVideo
          });
        }
      }, this.state.playVideo ? __jsx("video", {
        controls: true,
        autoPlay: true,
        poster: url,
        width: 250,
        style: {
          borderRadius: 15
        },
        onEnded: function onEnded() {
          _this2.setState({
            playVideo: false
          });
        }
      }, __jsx("source", {
        src: message.content.data
      })) : __jsx("div", {
        style: {
          position: 'relative'
        }
      }, __jsx("img", {
        alt: "",
        src: url,
        style: {
          borderRadius: 10
        },
        width: 250
      }), __jsx("img", {
        alt: "",
        src: "../../../../static/img/play.png",
        width: 40,
        style: {
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%'
        }
      }))));
    }
  }]);
  return VideoItem;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdHRpbmcvY2hhdHRpbmdQYW5lL21lc3NhZ2VJdGVtcy9WaWRlb0l0ZW0uanMiXSwibmFtZXMiOlsiVmlkZW9JdGVtIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwic3RhdGUiLCJwbGF5VmlkZW8iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzMiIsIm1lc3NhZ2UiLCJwYXRoIiwiY29udGVudCIsImRhdGEiLCJwYXRoRWxlbSIsImRhdGFTZXJ2aWNlIiwic3BsaXRQYXRoIiwiZGlybmFtZSIsImZpbGVuYW1lIiwidXJsIiwiY29uY2F0IiwiX19qc3giLCJvbkNsaWNrIiwic2V0U3RhdGUiLCJjb250cm9scyIsImF1dG9QbGF5IiwicG9zdGVyIiwid2lkdGgiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsIm9uRW5kZWQiLCJzcmMiLCJwb3NpdGlvbiIsImFsdCIsInRyYW5zZm9ybSIsImxlZnQiLCJ0b3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFMEI7QUFDZ0M7QUFBQSxJQUVyQ0EsU0FBUywwQkFBQUMsZ0JBQUE7RUFBQUMsbUZBQUEsQ0FBQUYsU0FBQSxFQUFBQyxnQkFBQTtFQUUxQixTQUFBRCxVQUFZRyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLHlGQUFBLE9BQUFMLFNBQUE7SUFDZkksS0FBQSxHQUFBRSxVQUFBLE9BQUFOLFNBQUEsR0FBTUcsS0FBSztJQUNYQyxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNUQyxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQUMsT0FBQUosS0FBQTtFQUNOO0VBQUNLLHNGQUFBLENBQUFULFNBQUE7SUFBQVUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsT0FBQSxFQUFTO01BQUEsSUFBQUMsTUFBQTtNQUNMLElBQU9DLE9BQU8sR0FBSyxJQUFJLENBQUNYLEtBQUssQ0FBdEJXLE9BQU87TUFDZCxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJO01BQ2pDLElBQU1DLFFBQVEsR0FBR0MsOERBQVcsQ0FBQ0MsU0FBUyxDQUFDTCxJQUFJLENBQUM7TUFDNUMsSUFBTU0sT0FBTyxHQUFHSCxRQUFRLENBQUNHLE9BQU87TUFDaEMsSUFBTUMsUUFBUSxHQUFHSixRQUFRLENBQUNJLFFBQVE7TUFDbEMsSUFBTUMsR0FBRyxNQUFBQyxNQUFBLENBQU1ILE9BQU8sRUFBQUcsTUFBQSxDQUFHRixRQUFRLFNBQU07TUFDdkMsT0FDSUcsS0FBQSxjQUNJQSxLQUFBO1FBQUtDLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQU07VUFDaEJiLE1BQUksQ0FBQ2MsUUFBUSxDQUFDO1lBQUNuQixTQUFTLEVBQUUsQ0FBQ0ssTUFBSSxDQUFDTixLQUFLLENBQUNDO1VBQVMsQ0FBQyxDQUFDO1FBQ3JEO01BQUUsR0FFTSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsU0FBUyxHQUNoQmlCLEtBQUE7UUFBT0csUUFBUTtRQUFDQyxRQUFRO1FBQUNDLE1BQU0sRUFBRVAsR0FBSTtRQUFDUSxLQUFLLEVBQUUsR0FBSTtRQUMxQ0MsS0FBSyxFQUFFO1VBQUNDLFlBQVksRUFBRTtRQUFFLENBQUU7UUFDMUJDLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQU07VUFDWHJCLE1BQUksQ0FBQ2MsUUFBUSxDQUFDO1lBQUNuQixTQUFTLEVBQUU7VUFBSyxDQUFDLENBQUM7UUFDckM7TUFBRSxHQUNMaUIsS0FBQTtRQUFRVSxHQUFHLEVBQUVyQixPQUFPLENBQUNFLE9BQU8sQ0FBQ0M7TUFBSyxDQUFDLENBQ2hDLENBQUMsR0FDUlEsS0FBQTtRQUFLTyxLQUFLLEVBQUU7VUFBQ0ksUUFBUSxFQUFFO1FBQVU7TUFBRSxHQUMvQlgsS0FBQTtRQUFLWSxHQUFHLEVBQUMsRUFBRTtRQUFDRixHQUFHLEVBQUVaLEdBQUk7UUFBQ1MsS0FBSyxFQUFFO1VBQUNDLFlBQVksRUFBRTtRQUFFLENBQUU7UUFBQ0YsS0FBSyxFQUFFO01BQUksQ0FBQyxDQUFDLEVBQzlETixLQUFBO1FBQUtZLEdBQUcsRUFBQyxFQUFFO1FBQUNGLEdBQUcsRUFBQyxpQ0FBaUM7UUFBQ0osS0FBSyxFQUFFLEVBQUc7UUFDdkRDLEtBQUssRUFBRTtVQUNISSxRQUFRLEVBQUUsVUFBVTtVQUNwQkUsU0FBUyxFQUFFLHVCQUF1QjtVQUNsQ0MsSUFBSSxFQUFFLEtBQUs7VUFDWEMsR0FBRyxFQUFFO1FBQ1Q7TUFBRSxDQUFDLENBQ1AsQ0FJWixDQUNKLENBQUM7SUFFZDtFQUFDO0VBQUEsT0FBQXhDLFNBQUE7QUFBQSxFQTlDa0N5Qyw0Q0FBSyxDQUFDQyxTQUFTO0FBQXhCIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZpZGVvSXRlbVxuICogKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtkYXRhU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVsL0RhdGFTZXJ2aWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwbGF5VmlkZW86IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge21lc3NhZ2UsfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHBhdGggPSBtZXNzYWdlLmNvbnRlbnQuZGF0YTtcbiAgICAgICAgY29uc3QgcGF0aEVsZW0gPSBkYXRhU2VydmljZS5zcGxpdFBhdGgocGF0aCk7XG4gICAgICAgIGNvbnN0IGRpcm5hbWUgPSBwYXRoRWxlbS5kaXJuYW1lO1xuICAgICAgICBjb25zdCBmaWxlbmFtZSA9IHBhdGhFbGVtLmZpbGVuYW1lO1xuICAgICAgICBjb25zdCB1cmwgPSBgJHtkaXJuYW1lfSR7ZmlsZW5hbWV9LnBuZ2A7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwbGF5VmlkZW86ICF0aGlzLnN0YXRlLnBsYXlWaWRlb30pXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGxheVZpZGVvID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gY29udHJvbHMgYXV0b1BsYXkgcG9zdGVyPXt1cmx9IHdpZHRoPXsyNTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAxNX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kZWQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXlWaWRlbzogZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e21lc3NhZ2UuY29udGVudC5kYXRhfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWRlbz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nJyBzcmM9e3VybH0gc3R5bGU9e3tib3JkZXJSYWRpdXM6IDEwfX0gd2lkdGg9ezI1MH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nJyBzcmM9XCIuLi8uLi8uLi8uLi9zdGF0aWMvaW1nL3BsYXkucG5nXCIgd2lkdGg9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==