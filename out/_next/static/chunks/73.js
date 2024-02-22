(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[73],{

/***/ "./pages/Chatting/chattingPane/MpegTsPlayer.js":
/*!*****************************************************!*\
  !*** ./pages/Chatting/chattingPane/MpegTsPlayer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import * as mpegts from 'mpegts.js';

var MpegtsPlayer = function MpegtsPlayer(_ref) {
  _s();
  var src = _ref.src;
  var videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var player;
    if (true) {
      __webpack_require__.e(/*! import() */ 83).then(__webpack_require__.t.bind(null, /*! mpegts.js */ "./node_modules/mpegts.js/dist/mpegts.js", 7)).then(function (mpegts) {
        if (mpegts.isSupported()) {
          player = mpegts.createPlayer({
            type: 'mse',
            // Assuming 'mse' for Media Source Extensions
            url: src
          }, {
            // Configuration options here
          });
          player.attachMediaElement(videoRef.current);
          player.load();
          player.play();
        }
      });
    }
    return function () {
      if (player) {
        player.pause();
        player.detachMediaElement();
        player.destroy();
      }
    };
  }, [src]);
  return __jsx("video", {
    width: '100%',
    height: '100%',
    ref: videoRef,
    controls: true
  });
};
_s(MpegtsPlayer, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c = MpegtsPlayer;
/* harmony default export */ __webpack_exports__["default"] = (MpegtsPlayer);
var _c;
$RefreshReg$(_c, "MpegtsPlayer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdHRpbmcvY2hhdHRpbmdQYW5lL01wZWdUc1BsYXllci5qcyJdLCJuYW1lcyI6WyJNcGVndHNQbGF5ZXIiLCJfcmVmIiwiX3MiLCJzcmMiLCJ2aWRlb1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInBsYXllciIsInRoZW4iLCJtcGVndHMiLCJpc1N1cHBvcnRlZCIsImNyZWF0ZVBsYXllciIsInR5cGUiLCJ1cmwiLCJhdHRhY2hNZWRpYUVsZW1lbnQiLCJjdXJyZW50IiwibG9hZCIsInBsYXkiLCJwYXVzZSIsImRldGFjaE1lZGlhRWxlbWVudCIsImRlc3Ryb3kiLCJfX2pzeCIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIiwiY29udHJvbHMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2pEOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQWdCO0VBQUFDLEVBQUE7RUFBQSxJQUFWQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztFQUN2QixJQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBSSxDQUFDO0VBRTdCQyx1REFBUyxDQUFDLFlBQU07SUFDZCxJQUFJQyxNQUFNO0lBQ1YsVUFBbUM7TUFDakMsK0lBQW1CLENBQUNDLElBQUksQ0FBQyxVQUFDQyxNQUFNLEVBQUs7UUFDbkMsSUFBSUEsTUFBTSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1VBQ3hCSCxNQUFNLEdBQUdFLE1BQU0sQ0FBQ0UsWUFBWSxDQUFDO1lBQzNCQyxJQUFJLEVBQUUsS0FBSztZQUFFO1lBQ2JDLEdBQUcsRUFBRVY7VUFDUCxDQUFDLEVBQUU7WUFDRDtVQUFBLENBQ0QsQ0FBQztVQUNGSSxNQUFNLENBQUNPLGtCQUFrQixDQUFDVixRQUFRLENBQUNXLE9BQU8sQ0FBQztVQUMzQ1IsTUFBTSxDQUFDUyxJQUFJLENBQUMsQ0FBQztVQUNiVCxNQUFNLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQ2Y7TUFDRixDQUFDLENBQUM7SUFDSjtJQUVBLE9BQU8sWUFBTTtNQUNYLElBQUlWLE1BQU0sRUFBRTtRQUNWQSxNQUFNLENBQUNXLEtBQUssQ0FBQyxDQUFDO1FBQ2RYLE1BQU0sQ0FBQ1ksa0JBQWtCLENBQUMsQ0FBQztRQUMzQlosTUFBTSxDQUFDYSxPQUFPLENBQUMsQ0FBQztNQUNsQjtJQUNGLENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ2pCLEdBQUcsQ0FBQyxDQUFDO0VBRVQsT0FBT2tCLEtBQUE7SUFDSEMsS0FBSyxFQUFFLE1BQU87SUFDZEMsTUFBTSxFQUFFLE1BQU87SUFDZkMsR0FBRyxFQUFFcEIsUUFBUztJQUFDcUIsUUFBUTtFQUFBLENBQUUsQ0FBQztBQUM5QixDQUFDO0FBQUN2QixFQUFBLENBbENBRixZQUFZO0FBQUEwQixFQUFBLEdBQVoxQixZQUFZO0FBb0NDQSwyRUFBWSxFQUFDO0FBQUEsSUFBQTBCLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCAqIGFzIG1wZWd0cyBmcm9tICdtcGVndHMuanMnO1xyXG5cclxuXHJcbmNvbnN0IE1wZWd0c1BsYXllciA9ICh7IHNyYyB9KSA9PiB7XHJcbiAgICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IHBsYXllcjtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgaW1wb3J0KCdtcGVndHMuanMnKS50aGVuKChtcGVndHMpID0+IHtcclxuICAgICAgICAgIGlmIChtcGVndHMuaXNTdXBwb3J0ZWQoKSkge1xyXG4gICAgICAgICAgICBwbGF5ZXIgPSBtcGVndHMuY3JlYXRlUGxheWVyKHtcclxuICAgICAgICAgICAgICB0eXBlOiAnbXNlJywgLy8gQXNzdW1pbmcgJ21zZScgZm9yIE1lZGlhIFNvdXJjZSBFeHRlbnNpb25zXHJcbiAgICAgICAgICAgICAgdXJsOiBzcmMsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAvLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgaGVyZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGxheWVyLmF0dGFjaE1lZGlhRWxlbWVudCh2aWRlb1JlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgcGxheWVyLmxvYWQoKTtcclxuICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBsYXllcikge1xyXG4gICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgICBwbGF5ZXIuZGV0YWNoTWVkaWFFbGVtZW50KCk7XHJcbiAgICAgICAgICBwbGF5ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0sIFtzcmNdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIDx2aWRlbyBcclxuICAgICAgICB3aWR0aD17JzEwMCUnfVxyXG4gICAgICAgIGhlaWdodD17JzEwMCUnfVxyXG4gICAgICAgIHJlZj17dmlkZW9SZWZ9IGNvbnRyb2xzIC8+O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgTXBlZ3RzUGxheWVyO1xyXG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ==