(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[72],{

/***/ "./node_modules/react-swf/react-swf.js":
/*!*********************************************!*\
  !*** ./node_modules/react-swf/react-swf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! react-swf v1.0.7 | @syranide | MIT license */



var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/*
  flashVars = {key: string} or "key=value&..."

  allowFullScreen = true, false*
  allowFullScreenInteractive = true, false*
  allowNetworking = all*, internal, none
  allowScriptAccess = always, sameDomain, never

  align = l, t, r
  base = url
  bgcolor = #RRGGBB
  browserZoom = scale*, noscale
  fullScreenAspectRatio = portrait, landscape
  loop = true*, false
  menu = true*, false
  play = true*, false
  quality = low, autolow, autohigh, medium, high, best
  salign = l, t, r, tl, tr
  scale = default*, noborder, exactfit, noscale
  seamlessTabbing = true*, false
  wmode = window*, direct, opaque, transparent, gpu
*/

var supportedFPParamNames = {
  movie: 'movie', // react-swf/compat for IE8

  flashVars: 'flashvars',

  allowFullScreen: 'allowfullscreen',
  allowFullScreenInteractive: 'allowfullscreeninteractive',
  allowNetworking: 'allownetworking',
  allowScriptAccess: 'allowscriptaccess',

  align: 'align',
  base: 'base',
  bgcolor: 'bgcolor',
  browserZoom: 'browserzoom',
  fullScreenAspectRatio: 'fullscreenaspectratio',
  loop: 'loop',
  menu: 'menu',
  play: 'play',
  quality: 'quality',
  salign: 'salign',
  scale: 'scale',
  seamlessTabbing: 'seamlesstabbing',
  wmode: 'wmode'
};

var booleanFPParams = {
  allowFullScreen: true,
  allowFullScreenInteractive: true,
  loop: true,
  menu: true,
  play: true,
  seamlessTabbing: true
};


var ENCODE_FLASH_VARS_REGEX = /[\r%&+=]/g;
var ENCODE_FLASH_VARS_LOOKUP = {
  '\r': '%0D',
  '%': '%25',
  '&': '%26',
  '+': '%2B',
  '=': '%3D'
};

function encodeFlashVarsStringReplacer(match) {
  return ENCODE_FLASH_VARS_LOOKUP[match];
}

function encodeFlashVarsString(string) {
  return ('' + string).replace(
    ENCODE_FLASH_VARS_REGEX,
    encodeFlashVarsStringReplacer
  );
}

function encodeFlashVarsObject(object) {
  // Push to array; faster and scales better than string concat.
  var output = [];

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var value = object[key];

      if (value != null) {
        output.push(
          encodeFlashVarsString(key) + '=' + encodeFlashVarsString(value)
        );
      }
    }
  }

  return output.join('&');
}


/** @constructor */
function ReactSWF(props) {
  React.Component.call(this, props);

  var that = this;
  this._refCallback = function(c) {
    that._node = c;
  };

  // The only way to change Flash parameters or reload the movie is to update
  // the key of the ReactSWF element. This unmounts the previous instance and
  // reloads the movie. Store initial values to keep the DOM consistent.

  var params = {};

  for (var key in supportedFPParamNames) {
    if (supportedFPParamNames.hasOwnProperty(key) &&
        props.hasOwnProperty(key)) {
      var value = props[key];

      if (value != null) {
        var name = supportedFPParamNames[key];

        if (name === 'flashvars' && typeof value === 'object') {
          value = encodeFlashVarsObject(value);
        } else if (booleanFPParams.hasOwnProperty(key)) {
          // Force boolean parameter arguments to be boolean.
          value = !!value;
        }

        params[name] = '' + value;
      }
    }
  }

  this._node = null;
  this.state = {
    src: props.src,
    params: params
  };
}

ReactSWF.prototype = Object.create(React.Component.prototype);
ReactSWF.prototype.constructor = ReactSWF;
Object.assign(ReactSWF, React.Component);

ReactSWF.propTypes = {
  src: PropTypes.string.isRequired,
  movie: PropTypes.string, // react-swf/compat for IE8

  flashVars: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  allowFullScreen: PropTypes.bool,
  allowFullScreenInteractive: PropTypes.bool,
  allowNetworking: PropTypes.oneOf(['all', 'internal', 'none']),
  allowScriptAccess: PropTypes.oneOf(['always', 'sameDomain', 'never']),

  align: PropTypes.oneOf(['l', 't', 'r']),
  base: PropTypes.string,
  bgcolor: PropTypes.string,
  browserZoom: PropTypes.oneOf(['scale', 'noscale']),
  fullScreenAspectRatio: PropTypes.oneOf(['portrait', 'landscape']),
  loop: PropTypes.bool,
  menu: PropTypes.bool,
  play: PropTypes.bool,
  quality: PropTypes.oneOf(['low', 'autolow', 'autohigh', 'medium', 'high', 'best']),
  salign: PropTypes.oneOf(['l', 't', 'r', 'tl', 'tr']),
  scale: PropTypes.oneOf(['default', 'noborder', 'exactfit', 'noscale']),
  seamlessTabbing: PropTypes.bool,
  wmode: PropTypes.oneOf(['window', 'direct', 'opaque', 'transparent', 'gpu'])
};

ReactSWF.prototype.getFPDOMNode = function() {
  return this._node;
};

ReactSWF.prototype.shouldComponentUpdate = function(nextProps) {
  var prevProps = this.props;

  for (var key in prevProps) {
    // Ignore all Flash parameter props
    if (prevProps.hasOwnProperty(key) &&
        !supportedFPParamNames.hasOwnProperty(key) &&
        (!nextProps.hasOwnProperty(key) ||
         !Object.is(prevProps[key], nextProps[key]))) {
      return true;
    }
  }

  for (var key in nextProps) {
    if (nextProps.hasOwnProperty(key) &&
        !supportedFPParamNames.hasOwnProperty(key) &&
        !prevProps.hasOwnProperty(key)) {
      return true;
    }
  }

  return false;
};

ReactSWF.prototype.render = function() {
  var props = this.props;
  var state = this.state;

  // AS3 `ExternalInterface.addCallback` requires a unique node ID in IE8-10.
  // There is however no isolated way to play nice with server-rendering, so
  // we must leave it up to the user.

  var objectProps = {
    ref: this._refCallback,
    children: [],
    type: 'application/x-shockwave-flash',
    data: state.src,
    // Discard `props.src`
    src: null
  };

  for (var key in props) {
    // Ignore props that are Flash parameters or managed by this component.
    if (props.hasOwnProperty(key) &&
        !supportedFPParamNames.hasOwnProperty(key) &&
        !objectProps.hasOwnProperty(key)) {
      objectProps[key] = props[key];
    }
  }

  var objectChildren = objectProps.children;

  for (var name in state.params) {
    objectChildren.push(
      React.createElement('param', {
        key: name,
        name: name,
        value: state.params[name]
      })
    );
  }

  // Push `props.children` to the end of the children, React will generate a
  // key warning if there are multiple children. This is preferable for now.
  if (props.children != null) {
    objectChildren.push(props.children);
  }

  return React.createElement('object', objectProps);
};

module.exports = ReactSWF;


/***/ }),

/***/ "./pages/Chatting/chattingPane/RtmpPublisher.js":
/*!******************************************************!*\
  !*** ./pages/Chatting/chattingPane/RtmpPublisher.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RtmpPublisher; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_swf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swf */ "./node_modules/react-swf/react-swf.js");
/* harmony import */ var react_swf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var SWF_ID_PREFIX = '__MyExternalInterfaceExample_SWFID_';
var SWF_PUBLISHER_ON_PLAY = 'SWF_PUBLISHER_ON_PLAY';
var SWF_PUBLISHER_ON_ERROR = 'SWF_PUBLISHER_ON_ERROR';
var nextUID = 0;
var RtmpPublisher = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RtmpPublisher, _Component);
  function RtmpPublisher(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RtmpPublisher);
    _this = _callSuper(this, RtmpPublisher, [props]);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isPlaying: false
    });
    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this._uid = 0;
    _this._uid = nextUID++;
    window[SWF_PUBLISHER_ON_PLAY + _this._uid] = _this.onPlayButton.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    window[SWF_PUBLISHER_ON_ERROR + _this._uid] = _this.onError.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onPlayButton.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RtmpPublisher, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete window[SWF_PUBLISHER_ON_PLAY + this._uid];
      delete window[SWF_PUBLISHER_ON_ERROR + this._uid];
    }
  }, {
    key: "onPlayButton",
    value: function onPlayButton(isPlay) {
      console.log('RtmpPublisher====================clickBtn===========', isPlay);
      var _this$props = this.props,
        startLive = _this$props.startLive,
        stopLive = _this$props.stopLive;
      if (isPlay) {
        startLive && startLive();
      } else {
        stopLive && stopLive();
      }
    }
  }, {
    key: "onError",
    value: function onError() {
      console.log('onError', arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        streamKey = _this$props2.streamKey,
        start_state = _this$props2.start_state;
      return __jsx("div", {
        style: {
          width: '100%',
          height: '100%',
          maxHeight: 700
        }
      }, __jsx(react_swf__WEBPACK_IMPORTED_MODULE_8___default.a, {
        ref: function ref(c) {
          _this2._swfPlayerNode = c;
          _this2.ref = c;
        },
        id: SWF_ID_PREFIX + this._uid,
        src: "../static/swf/rtmpPublisher.swf",
        allowFullScreen: true,
        allowscriptaccess: "always",
        width: "100%",
        height: "100%",
        wmode: "transparent",
        flashVars: {
          streamer: _config_config__WEBPACK_IMPORTED_MODULE_9__["config"].rtmpUrl,
          file: streamKey,
          onPlayButton: SWF_PUBLISHER_ON_PLAY + this._uid,
          onError: SWF_PUBLISHER_ON_ERROR + this._uid,
          start_state: start_state
        }
      }));
    }
  }]);
  return RtmpPublisher;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN3Zi9yZWFjdC1zd2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NoYXR0aW5nL2NoYXR0aW5nUGFuZS9SdG1wUHVibGlzaGVyLmpzIl0sIm5hbWVzIjpbIlNXRl9JRF9QUkVGSVgiLCJTV0ZfUFVCTElTSEVSX09OX1BMQVkiLCJTV0ZfUFVCTElTSEVSX09OX0VSUk9SIiwibmV4dFVJRCIsIlJ0bXBQdWJsaXNoZXIiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiaXNQbGF5aW5nIiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJfdWlkIiwid2luZG93Iiwib25QbGF5QnV0dG9uIiwiYmluZCIsIm9uRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiaXNQbGF5IiwiY29uc29sZSIsImxvZyIsIl90aGlzJHByb3BzIiwic3RhcnRMaXZlIiwic3RvcExpdmUiLCJhcmd1bWVudHMiLCJyZW5kZXIiLCJfdGhpczIiLCJfdGhpcyRwcm9wczIiLCJzdHJlYW1LZXkiLCJzdGFydF9zdGF0ZSIsIl9fanN4Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsIlJlYWN0U1dGIiwiYyIsIl9zd2ZQbGF5ZXJOb2RlIiwiaWQiLCJzcmMiLCJhbGxvd0Z1bGxTY3JlZW4iLCJhbGxvd3NjcmlwdGFjY2VzcyIsIndtb2RlIiwiZmxhc2hWYXJzIiwic3RyZWFtZXIiLCJjb25maWciLCJydG1wVXJsIiwiZmlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVhOztBQUViLGdCQUFnQixtQkFBTyxDQUFDLHNEQUFZO0FBQ3BDLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFM0I7QUFDQSxlQUFlLFlBQVk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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UyxHQUFBRCxZQUFBLENBQVRDLFNBQVM7UUFBRUMsV0FBVyxHQUFBRixZQUFBLENBQVhFLFdBQVc7TUFFN0IsT0FDSUMsS0FBQTtRQUFLQyxLQUFLLEVBQUU7VUFBQ0MsS0FBSyxFQUFFLE1BQU07VUFBRUMsTUFBTSxFQUFFLE1BQU07VUFBRUMsU0FBUyxFQUFDO1FBQUc7TUFBRSxHQUN2REosS0FBQSxDQUFDSyxnREFBUTtRQUNMN0IsR0FBRyxFQUFFLFNBQUFBLElBQUE4QixDQUFDLEVBQUk7VUFDTlYsTUFBSSxDQUFDVyxjQUFjLEdBQUdELENBQUM7VUFDdkJWLE1BQUksQ0FBQ3BCLEdBQUcsR0FBRzhCLENBQUM7UUFDaEIsQ0FBRTtRQUNGRSxFQUFFLEVBQUU5QyxhQUFhLEdBQUcsSUFBSSxDQUFDaUIsSUFBSztRQUM5QjhCLEdBQUcsRUFBQyxpQ0FBaUM7UUFDckNDLGVBQWUsRUFBRSxJQUFLO1FBQ3RCQyxpQkFBaUIsRUFBQyxRQUFRO1FBQzFCVCxLQUFLLEVBQUMsTUFBTTtRQUNaQyxNQUFNLEVBQUMsTUFBTTtRQUNiUyxLQUFLLEVBQUMsYUFBYTtRQUNuQkMsU0FBUyxFQUFFO1VBQ1BDLFFBQVEsRUFBRUMscURBQU0sQ0FBQ0MsT0FBTztVQUN4QkMsSUFBSSxFQUFFbkIsU0FBUztVQUNmakIsWUFBWSxFQUFFbEIscUJBQXFCLEdBQUcsSUFBSSxDQUFDZ0IsSUFBSTtVQUMvQ0ksT0FBTyxFQUFFbkIsc0JBQXNCLEdBQUcsSUFBSSxDQUFDZSxJQUFJO1VBQzNDb0IsV0FBVyxFQUFFQTtRQUNqQjtNQUFFLENBQ0wsQ0FDQSxDQUFDO0lBRWQ7RUFBQztFQUFBLE9BQUFqQyxhQUFBO0FBQUEsRUEvRHNDb0QsK0NBQVM7QUFBbEIiLCJmaWxlIjoic3RhdGljL2NodW5rcy83Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISByZWFjdC1zd2YgdjEuMC43IHwgQHN5cmFuaWRlIHwgTUlUIGxpY2Vuc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLypcbiAgZmxhc2hWYXJzID0ge2tleTogc3RyaW5nfSBvciBcImtleT12YWx1ZSYuLi5cIlxuXG4gIGFsbG93RnVsbFNjcmVlbiA9IHRydWUsIGZhbHNlKlxuICBhbGxvd0Z1bGxTY3JlZW5JbnRlcmFjdGl2ZSA9IHRydWUsIGZhbHNlKlxuICBhbGxvd05ldHdvcmtpbmcgPSBhbGwqLCBpbnRlcm5hbCwgbm9uZVxuICBhbGxvd1NjcmlwdEFjY2VzcyA9IGFsd2F5cywgc2FtZURvbWFpbiwgbmV2ZXJcblxuICBhbGlnbiA9IGwsIHQsIHJcbiAgYmFzZSA9IHVybFxuICBiZ2NvbG9yID0gI1JSR0dCQlxuICBicm93c2VyWm9vbSA9IHNjYWxlKiwgbm9zY2FsZVxuICBmdWxsU2NyZWVuQXNwZWN0UmF0aW8gPSBwb3J0cmFpdCwgbGFuZHNjYXBlXG4gIGxvb3AgPSB0cnVlKiwgZmFsc2VcbiAgbWVudSA9IHRydWUqLCBmYWxzZVxuICBwbGF5ID0gdHJ1ZSosIGZhbHNlXG4gIHF1YWxpdHkgPSBsb3csIGF1dG9sb3csIGF1dG9oaWdoLCBtZWRpdW0sIGhpZ2gsIGJlc3RcbiAgc2FsaWduID0gbCwgdCwgciwgdGwsIHRyXG4gIHNjYWxlID0gZGVmYXVsdCosIG5vYm9yZGVyLCBleGFjdGZpdCwgbm9zY2FsZVxuICBzZWFtbGVzc1RhYmJpbmcgPSB0cnVlKiwgZmFsc2VcbiAgd21vZGUgPSB3aW5kb3cqLCBkaXJlY3QsIG9wYXF1ZSwgdHJhbnNwYXJlbnQsIGdwdVxuKi9cblxudmFyIHN1cHBvcnRlZEZQUGFyYW1OYW1lcyA9IHtcbiAgbW92aWU6ICdtb3ZpZScsIC8vIHJlYWN0LXN3Zi9jb21wYXQgZm9yIElFOFxuXG4gIGZsYXNoVmFyczogJ2ZsYXNodmFycycsXG5cbiAgYWxsb3dGdWxsU2NyZWVuOiAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgYWxsb3dGdWxsU2NyZWVuSW50ZXJhY3RpdmU6ICdhbGxvd2Z1bGxzY3JlZW5pbnRlcmFjdGl2ZScsXG4gIGFsbG93TmV0d29ya2luZzogJ2FsbG93bmV0d29ya2luZycsXG4gIGFsbG93U2NyaXB0QWNjZXNzOiAnYWxsb3dzY3JpcHRhY2Nlc3MnLFxuXG4gIGFsaWduOiAnYWxpZ24nLFxuICBiYXNlOiAnYmFzZScsXG4gIGJnY29sb3I6ICdiZ2NvbG9yJyxcbiAgYnJvd3Nlclpvb206ICdicm93c2Vyem9vbScsXG4gIGZ1bGxTY3JlZW5Bc3BlY3RSYXRpbzogJ2Z1bGxzY3JlZW5hc3BlY3RyYXRpbycsXG4gIGxvb3A6ICdsb29wJyxcbiAgbWVudTogJ21lbnUnLFxuICBwbGF5OiAncGxheScsXG4gIHF1YWxpdHk6ICdxdWFsaXR5JyxcbiAgc2FsaWduOiAnc2FsaWduJyxcbiAgc2NhbGU6ICdzY2FsZScsXG4gIHNlYW1sZXNzVGFiYmluZzogJ3NlYW1sZXNzdGFiYmluZycsXG4gIHdtb2RlOiAnd21vZGUnXG59O1xuXG52YXIgYm9vbGVhbkZQUGFyYW1zID0ge1xuICBhbGxvd0Z1bGxTY3JlZW46IHRydWUsXG4gIGFsbG93RnVsbFNjcmVlbkludGVyYWN0aXZlOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBtZW51OiB0cnVlLFxuICBwbGF5OiB0cnVlLFxuICBzZWFtbGVzc1RhYmJpbmc6IHRydWVcbn07XG5cblxudmFyIEVOQ09ERV9GTEFTSF9WQVJTX1JFR0VYID0gL1tcXHIlJis9XS9nO1xudmFyIEVOQ09ERV9GTEFTSF9WQVJTX0xPT0tVUCA9IHtcbiAgJ1xccic6ICclMEQnLFxuICAnJSc6ICclMjUnLFxuICAnJic6ICclMjYnLFxuICAnKyc6ICclMkInLFxuICAnPSc6ICclM0QnXG59O1xuXG5mdW5jdGlvbiBlbmNvZGVGbGFzaFZhcnNTdHJpbmdSZXBsYWNlcihtYXRjaCkge1xuICByZXR1cm4gRU5DT0RFX0ZMQVNIX1ZBUlNfTE9PS1VQW21hdGNoXTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlRmxhc2hWYXJzU3RyaW5nKHN0cmluZykge1xuICByZXR1cm4gKCcnICsgc3RyaW5nKS5yZXBsYWNlKFxuICAgIEVOQ09ERV9GTEFTSF9WQVJTX1JFR0VYLFxuICAgIGVuY29kZUZsYXNoVmFyc1N0cmluZ1JlcGxhY2VyXG4gICk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUZsYXNoVmFyc09iamVjdChvYmplY3QpIHtcbiAgLy8gUHVzaCB0byBhcnJheTsgZmFzdGVyIGFuZCBzY2FsZXMgYmV0dGVyIHRoYW4gc3RyaW5nIGNvbmNhdC5cbiAgdmFyIG91dHB1dCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBvdXRwdXQucHVzaChcbiAgICAgICAgICBlbmNvZGVGbGFzaFZhcnNTdHJpbmcoa2V5KSArICc9JyArIGVuY29kZUZsYXNoVmFyc1N0cmluZyh2YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0LmpvaW4oJyYnKTtcbn1cblxuXG4vKiogQGNvbnN0cnVjdG9yICovXG5mdW5jdGlvbiBSZWFjdFNXRihwcm9wcykge1xuICBSZWFjdC5Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB0aGlzLl9yZWZDYWxsYmFjayA9IGZ1bmN0aW9uKGMpIHtcbiAgICB0aGF0Ll9ub2RlID0gYztcbiAgfTtcblxuICAvLyBUaGUgb25seSB3YXkgdG8gY2hhbmdlIEZsYXNoIHBhcmFtZXRlcnMgb3IgcmVsb2FkIHRoZSBtb3ZpZSBpcyB0byB1cGRhdGVcbiAgLy8gdGhlIGtleSBvZiB0aGUgUmVhY3RTV0YgZWxlbWVudC4gVGhpcyB1bm1vdW50cyB0aGUgcHJldmlvdXMgaW5zdGFuY2UgYW5kXG4gIC8vIHJlbG9hZHMgdGhlIG1vdmllLiBTdG9yZSBpbml0aWFsIHZhbHVlcyB0byBrZWVwIHRoZSBET00gY29uc2lzdGVudC5cblxuICB2YXIgcGFyYW1zID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHN1cHBvcnRlZEZQUGFyYW1OYW1lcykge1xuICAgIGlmIChzdXBwb3J0ZWRGUFBhcmFtTmFtZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgICBwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YXIgbmFtZSA9IHN1cHBvcnRlZEZQUGFyYW1OYW1lc1trZXldO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnZmxhc2h2YXJzJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFsdWUgPSBlbmNvZGVGbGFzaFZhcnNPYmplY3QodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGJvb2xlYW5GUFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgLy8gRm9yY2UgYm9vbGVhbiBwYXJhbWV0ZXIgYXJndW1lbnRzIHRvIGJlIGJvb2xlYW4uXG4gICAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zW25hbWVdID0gJycgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLl9ub2RlID0gbnVsbDtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBzcmM6IHByb3BzLnNyYyxcbiAgICBwYXJhbXM6IHBhcmFtc1xuICB9O1xufVxuXG5SZWFjdFNXRi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlYWN0LkNvbXBvbmVudC5wcm90b3R5cGUpO1xuUmVhY3RTV0YucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVhY3RTV0Y7XG5PYmplY3QuYXNzaWduKFJlYWN0U1dGLCBSZWFjdC5Db21wb25lbnQpO1xuXG5SZWFjdFNXRi5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtb3ZpZTogUHJvcFR5cGVzLnN0cmluZywgLy8gcmVhY3Qtc3dmL2NvbXBhdCBmb3IgSUU4XG5cbiAgZmxhc2hWYXJzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgYWxsb3dGdWxsU2NyZWVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWxsb3dGdWxsU2NyZWVuSW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBhbGxvd05ldHdvcmtpbmc6IFByb3BUeXBlcy5vbmVPZihbJ2FsbCcsICdpbnRlcm5hbCcsICdub25lJ10pLFxuICBhbGxvd1NjcmlwdEFjY2VzczogUHJvcFR5cGVzLm9uZU9mKFsnYWx3YXlzJywgJ3NhbWVEb21haW4nLCAnbmV2ZXInXSksXG5cbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2wnLCAndCcsICdyJ10pLFxuICBiYXNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiZ2NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBicm93c2VyWm9vbTogUHJvcFR5cGVzLm9uZU9mKFsnc2NhbGUnLCAnbm9zY2FsZSddKSxcbiAgZnVsbFNjcmVlbkFzcGVjdFJhdGlvOiBQcm9wVHlwZXMub25lT2YoWydwb3J0cmFpdCcsICdsYW5kc2NhcGUnXSksXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sLFxuICBtZW51OiBQcm9wVHlwZXMuYm9vbCxcbiAgcGxheTogUHJvcFR5cGVzLmJvb2wsXG4gIHF1YWxpdHk6IFByb3BUeXBlcy5vbmVPZihbJ2xvdycsICdhdXRvbG93JywgJ2F1dG9oaWdoJywgJ21lZGl1bScsICdoaWdoJywgJ2Jlc3QnXSksXG4gIHNhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbCcsICd0JywgJ3InLCAndGwnLCAndHInXSksXG4gIHNjYWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ25vYm9yZGVyJywgJ2V4YWN0Zml0JywgJ25vc2NhbGUnXSksXG4gIHNlYW1sZXNzVGFiYmluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHdtb2RlOiBQcm9wVHlwZXMub25lT2YoWyd3aW5kb3cnLCAnZGlyZWN0JywgJ29wYXF1ZScsICd0cmFuc3BhcmVudCcsICdncHUnXSlcbn07XG5cblJlYWN0U1dGLnByb3RvdHlwZS5nZXRGUERPTU5vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX25vZGU7XG59O1xuXG5SZWFjdFNXRi5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gIGZvciAodmFyIGtleSBpbiBwcmV2UHJvcHMpIHtcbiAgICAvLyBJZ25vcmUgYWxsIEZsYXNoIHBhcmFtZXRlciBwcm9wc1xuICAgIGlmIChwcmV2UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgICAhc3VwcG9ydGVkRlBQYXJhbU5hbWVzLmhhc093blByb3BlcnR5KGtleSkgJiZcbiAgICAgICAgKCFuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSB8fFxuICAgICAgICAgIU9iamVjdC5pcyhwcmV2UHJvcHNba2V5XSwgbmV4dFByb3BzW2tleV0pKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgICAhc3VwcG9ydGVkRlBQYXJhbU5hbWVzLmhhc093blByb3BlcnR5KGtleSkgJiZcbiAgICAgICAgIXByZXZQcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5SZWFjdFNXRi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgLy8gQVMzIGBFeHRlcm5hbEludGVyZmFjZS5hZGRDYWxsYmFja2AgcmVxdWlyZXMgYSB1bmlxdWUgbm9kZSBJRCBpbiBJRTgtMTAuXG4gIC8vIFRoZXJlIGlzIGhvd2V2ZXIgbm8gaXNvbGF0ZWQgd2F5IHRvIHBsYXkgbmljZSB3aXRoIHNlcnZlci1yZW5kZXJpbmcsIHNvXG4gIC8vIHdlIG11c3QgbGVhdmUgaXQgdXAgdG8gdGhlIHVzZXIuXG5cbiAgdmFyIG9iamVjdFByb3BzID0ge1xuICAgIHJlZjogdGhpcy5fcmVmQ2FsbGJhY2ssXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIHR5cGU6ICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcsXG4gICAgZGF0YTogc3RhdGUuc3JjLFxuICAgIC8vIERpc2NhcmQgYHByb3BzLnNyY2BcbiAgICBzcmM6IG51bGxcbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAvLyBJZ25vcmUgcHJvcHMgdGhhdCBhcmUgRmxhc2ggcGFyYW1ldGVycyBvciBtYW5hZ2VkIGJ5IHRoaXMgY29tcG9uZW50LlxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXG4gICAgICAgICFzdXBwb3J0ZWRGUFBhcmFtTmFtZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgICAhb2JqZWN0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgb2JqZWN0UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIG9iamVjdENoaWxkcmVuID0gb2JqZWN0UHJvcHMuY2hpbGRyZW47XG5cbiAgZm9yICh2YXIgbmFtZSBpbiBzdGF0ZS5wYXJhbXMpIHtcbiAgICBvYmplY3RDaGlsZHJlbi5wdXNoKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGFyYW0nLCB7XG4gICAgICAgIGtleTogbmFtZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdmFsdWU6IHN0YXRlLnBhcmFtc1tuYW1lXVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gUHVzaCBgcHJvcHMuY2hpbGRyZW5gIHRvIHRoZSBlbmQgb2YgdGhlIGNoaWxkcmVuLCBSZWFjdCB3aWxsIGdlbmVyYXRlIGFcbiAgLy8ga2V5IHdhcm5pbmcgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNoaWxkcmVuLiBUaGlzIGlzIHByZWZlcmFibGUgZm9yIG5vdy5cbiAgaWYgKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcbiAgICBvYmplY3RDaGlsZHJlbi5wdXNoKHByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvYmplY3QnLCBvYmplY3RQcm9wcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0U1dGO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdFNXRiBmcm9tICdyZWFjdC1zd2YnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZydcclxuXHJcbmNvbnN0IFNXRl9JRF9QUkVGSVggPSAnX19NeUV4dGVybmFsSW50ZXJmYWNlRXhhbXBsZV9TV0ZJRF8nO1xyXG5jb25zdCBTV0ZfUFVCTElTSEVSX09OX1BMQVkgPSAnU1dGX1BVQkxJU0hFUl9PTl9QTEFZJztcclxuY29uc3QgU1dGX1BVQkxJU0hFUl9PTl9FUlJPUiA9ICdTV0ZfUFVCTElTSEVSX09OX0VSUk9SJztcclxuXHJcbmxldCBuZXh0VUlEID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ0bXBQdWJsaXNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5yZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLl91aWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3VpZCA9IG5leHRVSUQrKztcclxuICAgICAgICB3aW5kb3dbU1dGX1BVQkxJU0hFUl9PTl9QTEFZICsgdGhpcy5fdWlkXSA9IHRoaXMub25QbGF5QnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgd2luZG93W1NXRl9QVUJMSVNIRVJfT05fRVJST1IgKyB0aGlzLl91aWRdID0gdGhpcy5vbkVycm9yLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblBsYXlCdXR0b24uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBkZWxldGUgd2luZG93W1NXRl9QVUJMSVNIRVJfT05fUExBWSArIHRoaXMuX3VpZF07XHJcbiAgICAgICAgZGVsZXRlIHdpbmRvd1tTV0ZfUFVCTElTSEVSX09OX0VSUk9SICsgdGhpcy5fdWlkXTtcclxuICAgIH1cclxuXHJcbiAgICBvblBsYXlCdXR0b24oaXNQbGF5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1J0bXBQdWJsaXNoZXI9PT09PT09PT09PT09PT09PT09PWNsaWNrQnRuPT09PT09PT09PT0nLCBpc1BsYXkpO1xyXG4gICAgICAgIGNvbnN0IHtzdGFydExpdmUsIHN0b3BMaXZlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKGlzUGxheSkge1xyXG4gICAgICAgICAgICBzdGFydExpdmUmJnN0YXJ0TGl2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0b3BMaXZlJiZzdG9wTGl2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVycm9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkVycm9yJywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtzdHJlYW1LZXksIHN0YXJ0X3N0YXRlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgbWF4SGVpZ2h0OjcwMH19PlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0U1dGXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3dmUGxheWVyTm9kZSA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmID0gYztcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtTV0ZfSURfUFJFRklYICsgdGhpcy5fdWlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9zd2YvcnRtcFB1Ymxpc2hlci5zd2ZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBhbGxvd3NjcmlwdGFjY2Vzcz1cImFsd2F5c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHdtb2RlPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZsYXNoVmFycz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1lcjogY29uZmlnLnJ0bXBVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IHN0cmVhbUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QbGF5QnV0dG9uOiBTV0ZfUFVCTElTSEVSX09OX1BMQVkgKyB0aGlzLl91aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IFNXRl9QVUJMSVNIRVJfT05fRVJST1IgKyB0aGlzLl91aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0X3N0YXRlOiBzdGFydF9zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=