(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[73],{

/***/ "./pages/Chatting/chattingPane/messageItems/AudioItem.js":
/*!***************************************************************!*\
  !*** ./pages/Chatting/chattingPane/messageItems/AudioItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioItem; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * AudioItem
 * */

var AudioItem = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AudioItem, _React$Component);
  function AudioItem(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AudioItem);
    _this = _callSuper(this, AudioItem, [props]);
    _this.state = {
      isPlaying: false
    };
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AudioItem, [{
    key: "playAudio",
    value: function playAudio() {
      if (this.state.isPlaying) {
        this.refs.audio.pause();
      } else {
        this.refs.audio.play();
      }
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        message = _this$props.message,
        arrow = _this$props.arrow,
        reverseStyle = _this$props.reverseStyle;
      var isPlaying = this.state.isPlaying;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        className: arrow
      }), __jsx("span", {
        className: "chat-text",
        style: reverseStyle,
        onClick: this.playAudio.bind(this)
      }, __jsx("div", null, __jsx("img", {
        alt: "",
        src: isPlaying ? "../../../../../static/img/common/audioPlay.gif" : "../../../../../static/img/common/audioPause.png",
        width: 25
      }))), __jsx("audio", {
        style: {
          display: 'none'
        },
        ref: "audio"
      }, __jsx("source", {
        src: message.content.data,
        type: "audio/mpeg"
      })));
    }
  }]);
  return AudioItem;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdHRpbmcvY2hhdHRpbmdQYW5lL21lc3NhZ2VJdGVtcy9BdWRpb0l0ZW0uanMiXSwibmFtZXMiOlsiQXVkaW9JdGVtIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwic3RhdGUiLCJpc1BsYXlpbmciLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInBsYXlBdWRpbyIsInJlZnMiLCJhdWRpbyIsInBhdXNlIiwicGxheSIsInNldFN0YXRlIiwicmVuZGVyIiwiX3RoaXMkcHJvcHMiLCJtZXNzYWdlIiwiYXJyb3ciLCJyZXZlcnNlU3R5bGUiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uQ2xpY2siLCJiaW5kIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJkaXNwbGF5IiwicmVmIiwiY29udGVudCIsImRhdGEiLCJ0eXBlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDMEI7QUFBQSxJQUVMQSxTQUFTLDBCQUFBQyxnQkFBQTtFQUFBQyxtRkFBQSxDQUFBRixTQUFBLEVBQUFDLGdCQUFBO0VBRTFCLFNBQUFELFVBQVlHLEtBQUssRUFBQztJQUFBLElBQUFDLEtBQUE7SUFBQUMseUZBQUEsT0FBQUwsU0FBQTtJQUNkSSxLQUFBLEdBQUFFLFVBQUEsT0FBQU4sU0FBQSxHQUFNRyxLQUFLO0lBQ1hDLEtBQUEsQ0FBS0csS0FBSyxHQUFDO01BQ1BDLFNBQVMsRUFBQztJQUNkLENBQUM7SUFBQSxPQUFBSixLQUFBO0VBQ0w7RUFBQ0ssc0ZBQUEsQ0FBQVQsU0FBQTtJQUFBVSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxVQUFBLEVBQVc7TUFDUCxJQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDQyxTQUFTLEVBQUM7UUFDcEIsSUFBSSxDQUFDSyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQUM7TUFDM0IsQ0FBQyxNQUFJO1FBQ0QsSUFBSSxDQUFDRixJQUFJLENBQUNDLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUM7TUFDMUI7TUFFQSxJQUFJLENBQUNDLFFBQVEsQ0FBQztRQUNWVCxTQUFTLEVBQUMsQ0FBQyxJQUFJLENBQUNELEtBQUssQ0FBQ0M7TUFDMUIsQ0FBQyxDQUFDO0lBRU47RUFBQztJQUFBRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTyxPQUFBLEVBQVM7TUFDTCxJQUFBQyxXQUFBLEdBQXVDLElBQUksQ0FBQ2hCLEtBQUs7UUFBMUNpQixPQUFPLEdBQUFELFdBQUEsQ0FBUEMsT0FBTztRQUFFQyxLQUFLLEdBQUFGLFdBQUEsQ0FBTEUsS0FBSztRQUFFQyxZQUFZLEdBQUFILFdBQUEsQ0FBWkcsWUFBWTtNQUNuQyxJQUFPZCxTQUFTLEdBQUksSUFBSSxDQUFDRCxLQUFLLENBQXZCQyxTQUFTO01BQ2hCLE9BQ0llLEtBQUEsQ0FBQUMsNENBQUEsQ0FBQUMsUUFBQSxRQUNJRixLQUFBO1FBQUtHLFNBQVMsRUFBRUw7TUFBTSxDQUFFLENBQUMsRUFDekJFLEtBQUE7UUFBTUcsU0FBUyxFQUFDLFdBQVc7UUFBQ0MsS0FBSyxFQUFFTCxZQUFhO1FBQUNNLE9BQU8sRUFBRSxJQUFJLENBQUNoQixTQUFTLENBQUNpQixJQUFJLENBQUMsSUFBSTtNQUFFLEdBQzVFTixLQUFBLGNBQ0lBLEtBQUE7UUFBS08sR0FBRyxFQUFDLEVBQUU7UUFBQ0MsR0FBRyxFQUFFdkIsU0FBUyxHQUFHLGdEQUFnRCxHQUFHLGlEQUFrRDtRQUFDd0IsS0FBSyxFQUFFO01BQUcsQ0FBQyxDQUM3SSxDQUNILENBQUMsRUFDWFQsS0FBQTtRQUFPSSxLQUFLLEVBQUU7VUFBQ00sT0FBTyxFQUFDO1FBQU0sQ0FBRTtRQUFDQyxHQUFHLEVBQUM7TUFBTyxHQUN2Q1gsS0FBQTtRQUFRUSxHQUFHLEVBQUVYLE9BQU8sQ0FBQ2UsT0FBTyxDQUFDQyxJQUFLO1FBQUNDLElBQUksRUFBQztNQUFZLENBQUMsQ0FDbEQsQ0FDVCxDQUFDO0lBRVg7RUFBQztFQUFBLE9BQUFyQyxTQUFBO0FBQUEsRUF0Q2tDd0IsNENBQUssQ0FBQ2MsU0FBUztBQUF4QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzczLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdWRpb0l0ZW1cbiAqICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBpc1BsYXlpbmc6ZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5QXVkaW8oKXtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc1BsYXlpbmcpe1xuICAgICAgICAgICAgdGhpcy5yZWZzLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5yZWZzLmF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNQbGF5aW5nOiF0aGlzLnN0YXRlLmlzUGxheWluZ1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge21lc3NhZ2UsIGFycm93LCByZXZlcnNlU3R5bGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge2lzUGxheWluZ30gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YXJyb3d9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hhdC10ZXh0XCIgc3R5bGU9e3JldmVyc2VTdHlsZX0gb25DbGljaz17dGhpcy5wbGF5QXVkaW8uYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PScnIHNyYz17aXNQbGF5aW5nID8gXCIuLi8uLi8uLi8uLi8uLi9zdGF0aWMvaW1nL2NvbW1vbi9hdWRpb1BsYXkuZ2lmXCIgOiBcIi4uLy4uLy4uLy4uLy4uL3N0YXRpYy9pbWcvY29tbW9uL2F1ZGlvUGF1c2UucG5nXCJ9IHdpZHRoPXsyNX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YXVkaW8gc3R5bGU9e3tkaXNwbGF5Oidub25lJ319IHJlZj1cImF1ZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXttZXNzYWdlLmNvbnRlbnQuZGF0YX0gdHlwZT1cImF1ZGlvL21wZWdcIi8+XG4gICAgICAgICAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=