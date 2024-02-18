(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[78],{

/***/ "./pages/profile/GetPoint.js":
/*!***********************************!*\
  !*** ./pages/profile/GetPoint.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_css_mine_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/css/mine.css */ "./static/css/mine.css");
/* harmony import */ var _static_css_mine_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_mine_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _model_DataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/DataService */ "./model/DataService.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _model_Req__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../model/Req */ "./model/Req.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }









var vm = null;
var GetPoint = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GetPoint, _Component);
  function GetPoint(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetPoint);
    _this = _callSuper(this, GetPoint, [props]);
    vm = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this);
    _this.state = {
      chargeHistory: _model_DataService__WEBPACK_IMPORTED_MODULE_8__["dataService"].chargeHistory,
      content_continue_cnt: 0,
      review_continue_cnt: 0,
      advert_continue_cnt: 0,
      follow_continue_cnt: 0,
      invite_continue_cnt: 0,
      attendBtnDisabled: false
    };
    if (!_this.props.setting || !_this.props.setting.data) {
      _this.props.getSetting();
    }
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GetPoint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _model_DataService__WEBPACK_IMPORTED_MODULE_8__["dataService"].get_free_point_info().then(function (res) {
        vm.setState({
          content_continue_cnt: res.content ? res.content : 0,
          review_continue_cnt: res.review ? res.review : 0,
          advert_continue_cnt: res.advert ? res.advert : 0,
          follow_continue_cnt: res.follow ? res.follow : 0,
          invite_continue_cnt: res.invite ? res.invite : 0
        });
      }, function (err) {
        console.log(err);
      });
    }
  }, {
    key: "exchangeMoney",
    value: function exchangeMoney(money) {
      alert(money);
    }
  }, {
    key: "funcClickAttend",
    value: function funcClickAttend() {
      var _this2 = this;
      var _this$props = this.props,
        updateMi = _this$props.updateMi,
        system = _this$props.system,
        setAppModalState = _this$props.setAppModalState,
        t = _this$props.t;
      var token = system && system.ai && system.ai.token;
      if (!token) {
        console.log('nothing token....');
        return;
      }
      Object(_model_Req__WEBPACK_IMPORTED_MODULE_14__["httpReq"])('/api/user/present', 'post', {
        token: token
      }).then(function (res) {
        if (res.msg === 'done') {
          setAppModalState('alert', t('MISSION_SUCCESS'));
        } else if (res.msg === 'same day') {
          setAppModalState('alert', t('ALREADY_ATTEND'));
        } else if (res.result) {
          updateMi({
            stat: {
              login_continue: res.result
            }
          });
        }
        _this2.setState({
          attendBtnDisabled: !_this2.state.attendBtnDisabled
        });
        console.log('funcClickAttend success', res);
      }, function (err) {
        console.log('httpReq err', err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props$setting$d = this.props.setting.data,
        point_content = _this$props$setting$d.point_content,
        point_content_cnt = _this$props$setting$d.point_content_cnt,
        point_review = _this$props$setting$d.point_review,
        point_review_cnt = _this$props$setting$d.point_review_cnt,
        point_advert = _this$props$setting$d.point_advert,
        point_advert_cnt = _this$props$setting$d.point_advert_cnt,
        point_attend = _this$props$setting$d.point_attend,
        point_invite = _this$props$setting$d.point_invite,
        point_follow = _this$props$setting$d.point_follow,
        point_follow_cnt = _this$props$setting$d.point_follow_cnt,
        _this$props2 = this.props,
        mi = _this$props2.mi,
        t = _this$props2.t;
      var totalGetPoint = 0;
      for (var index in point_attend) {
        totalGetPoint += point_attend[index].point;
      }
      var total_attend_day = point_attend && point_attend[point_attend.length - 1] && point_attend[point_attend.length - 1].day;
      var today_get_point_attend = 0;
      var total_get_point_login = 0;
      for (var _index in point_attend) {
        total_get_point_login = point_attend[_index] && point_attend[_index].point ? point_attend[_index].point : 0;
      }
      if (mi && mi.stat && mi.stat.login_continue !== undefined) {
        var today_attend_data = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.find(point_attend && point_attend ? point_attend : [], {
          day: mi.stat.login_continue + 1
        });
        today_get_point_attend = today_attend_data ? today_attend_data.point : 0;
      }
      return __jsx("div", {
        className: "div_column"
      }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          backgroundColor: 'rgba(255,170,194,0.48)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row"
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('EVERYDAYLOGIN', {
        day: total_attend_day,
        checked_day: mi && mi.stat && mi.stat.login_continue ? mi.stat.login_continue : 0
      }) + t('TOTAL_POINT', {
        point: total_get_point_login
      }))), __jsx("div", {
        className: "div_row align-items-center justify-content-between"
      }, __jsx("h5", {
        style: {
          margin: '5px 0'
        }
      }, t('GET_POINT_ATTEND', {
        point: today_get_point_attend
      })))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: 'center'
        },
        className: "div_column"
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: this.state.attendBtnDisabled,
        onClick: function onClick() {
          _this3.funcClickAttend();
        }
      }, t('CHECK_ATTEND')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          backgroundColor: 'rgba(255,170,194,0.48)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row"
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('RECOMMEND_USER', {
        user_cnt: this.state.invite_continue_cnt
      }))), __jsx("div", {
        className: "div_row align-items-center justify-content-between"
      }, __jsx("h5", {
        style: {
          margin: '5px 0'
        }
      }, t('RECOMMEND_USER_ALERT', {
        coin: point_invite
      })))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_invite * this.state.invite_continue_cnt + t('COIN')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "p-0",
        style: {
          backgroundColor: 'rgba(143,241,255,0.6)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row",
        style: {
          marginTop: 5
        }
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('MAKESOCIAL', {
        total_cnt: point_content_cnt ? point_content_cnt : 10,
        content_cnt: this.state.content_continue_cnt
      }))), __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          height: 10,
          marginRight: 5
        },
        color: "secondary",
        variant: "determinate",
        value: this.state.content_continue_cnt / (point_content_cnt ? point_content_cnt : 10) * 100
      }), __jsx("h5", {
        style: {
          margin: '10px 0 0 0'
        }
      }, t('MAKE_SOCIAL_ALERT', {
        cnt: point_content_cnt,
        point: point_content_cnt * point_content
      }))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_content * this.state.content_continue_cnt + t('POINT')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "p-0",
        style: {
          backgroundColor: 'rgba(155,232,183,0.58)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row",
        style: {
          marginTop: 5
        }
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('MAKECOMMEN', {
        total_cnt: point_review_cnt,
        comment_cnt: this.state.review_continue_cnt
      }))), __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          height: 10,
          marginRight: 5
        },
        color: "secondary",
        variant: "determinate",
        value: this.state.review_continue_cnt / (point_review_cnt ? point_review_cnt : 10) * 100
      }), __jsx("h5", {
        style: {
          margin: '10px 0 0 0'
        }
      }, t('MAKE_COMMENT_ALERT', {
        comment_cnt: point_review_cnt,
        total_point: point_review_cnt * point_review
      }))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_review * this.state.review_continue_cnt + t('POINT')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "p-0",
        style: {
          backgroundColor: 'rgba(255,219,171,0.58)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row",
        style: {
          marginTop: 5
        }
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('SHOW_ADVERT', {
        advert_cnt: this.state.advert_continue_cnt,
        total_cnt: point_advert_cnt
      }))), __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          height: 10,
          marginRight: 5
        },
        color: "secondary",
        variant: "determinate",
        value: this.state.advert_continue_cnt / (point_advert_cnt ? point_advert_cnt : 10) * 100
      }), __jsx("h5", {
        style: {
          margin: '10px 0 0 0'
        }
      }, t('SHOW_ADVERT_ALERT', {
        total_point: point_advert_cnt * point_advert
      }))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_advert * this.state.advert_continue_cnt + t('POINT')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "p-0",
        style: {
          backgroundColor: 'rgba(143,241,255,0.6)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row",
        style: {
          marginTop: 5
        }
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('FOLLOW') + '(' + "".concat(this.state.follow_continue_cnt, "/").concat(point_follow_cnt ? point_follow_cnt : 123) + ')')), __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          height: 10,
          marginRight: 5
        },
        color: "secondary",
        variant: "determinate",
        value: this.state.follow_continue_cnt / (point_follow_cnt ? point_follow_cnt : 123) * 100
      }), __jsx("h5", {
        style: {
          margin: '10px 0 0 0'
        }
      }, t('FOLLOW_ALERT', {
        user_cnt: point_follow_cnt ? point_follow_cnt : 123,
        total_point: (point_follow_cnt ? point_follow_cnt : 123) * point_follow
      }))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_follow * this.state.follow_continue_cnt + t('POINT')))))));
    }
  }]);
  return GetPoint;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (GetPoint);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9HZXRQb2ludC5qcyJdLCJuYW1lcyI6WyJ2bSIsIkdldFBvaW50IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInN0YXRlIiwiY2hhcmdlSGlzdG9yeSIsImRhdGFTZXJ2aWNlIiwiY29udGVudF9jb250aW51ZV9jbnQiLCJyZXZpZXdfY29udGludWVfY250IiwiYWR2ZXJ0X2NvbnRpbnVlX2NudCIsImZvbGxvd19jb250aW51ZV9jbnQiLCJpbnZpdGVfY29udGludWVfY250IiwiYXR0ZW5kQnRuRGlzYWJsZWQiLCJzZXR0aW5nIiwiZGF0YSIsImdldFNldHRpbmciLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0X2ZyZWVfcG9pbnRfaW5mbyIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsImNvbnRlbnQiLCJyZXZpZXciLCJhZHZlcnQiLCJmb2xsb3ciLCJpbnZpdGUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXhjaGFuZ2VNb25leSIsIm1vbmV5IiwiYWxlcnQiLCJmdW5jQ2xpY2tBdHRlbmQiLCJfdGhpczIiLCJfdGhpcyRwcm9wcyIsInVwZGF0ZU1pIiwic3lzdGVtIiwic2V0QXBwTW9kYWxTdGF0ZSIsInQiLCJ0b2tlbiIsImFpIiwiaHR0cFJlcSIsIm1zZyIsInJlc3VsdCIsInN0YXQiLCJsb2dpbl9jb250aW51ZSIsInJlbmRlciIsIl90aGlzMyIsIl90aGlzJHByb3BzJHNldHRpbmckZCIsInBvaW50X2NvbnRlbnQiLCJwb2ludF9jb250ZW50X2NudCIsInBvaW50X3JldmlldyIsInBvaW50X3Jldmlld19jbnQiLCJwb2ludF9hZHZlcnQiLCJwb2ludF9hZHZlcnRfY250IiwicG9pbnRfYXR0ZW5kIiwicG9pbnRfaW52aXRlIiwicG9pbnRfZm9sbG93IiwicG9pbnRfZm9sbG93X2NudCIsIl90aGlzJHByb3BzMiIsIm1pIiwidG90YWxHZXRQb2ludCIsImluZGV4IiwicG9pbnQiLCJ0b3RhbF9hdHRlbmRfZGF5IiwibGVuZ3RoIiwiZGF5IiwidG9kYXlfZ2V0X3BvaW50X2F0dGVuZCIsInRvdGFsX2dldF9wb2ludF9sb2dpbiIsInVuZGVmaW5lZCIsInRvZGF5X2F0dGVuZF9kYXRhIiwiX2xvZGFzaCIsImZpbmQiLCJfX2pzeCIsImNsYXNzTmFtZSIsIkNhcmQiLCJzdHlsZSIsIm1hcmdpbiIsIkNhcmRDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImZsZXgiLCJjaGVja2VkX2RheSIsImFsaWduSXRlbXMiLCJCdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidXNlcl9jbnQiLCJjb2luIiwibWFyZ2luVG9wIiwidG90YWxfY250IiwiY29udGVudF9jbnQiLCJMaW5lYXJQcm9ncmVzcyIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJjbnQiLCJjb21tZW50X2NudCIsInRvdGFsX3BvaW50IiwiYWR2ZXJ0X2NudCIsImNvbmNhdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTDtBQUNrQjtBQUNWO0FBQ2M7QUFDTTtBQUNoQjtBQUNqQjtBQUNXO0FBRXhDLElBQUlBLEVBQUUsR0FBRyxJQUFJO0FBQUMsSUFDUkMsUUFBUSwwQkFBQUMsVUFBQTtFQUFBQyxtRkFBQSxDQUFBRixRQUFBLEVBQUFDLFVBQUE7RUFFVixTQUFBRCxTQUFZRyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLHlGQUFBLE9BQUFMLFFBQUE7SUFDZkksS0FBQSxHQUFBRSxVQUFBLE9BQUFOLFFBQUEsR0FBTUcsS0FBSztJQUNYSixFQUFFLEdBQUFRLGdHQUFBLENBQUFILEtBQUEsQ0FBTztJQUNU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QjdHLHVFQUFRLEVBQUMiLCJmaWxlIjoic3RhdGljL2NodW5rcy83OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi8uLi9zdGF0aWMvY3NzL21pbmUuY3NzJ1xuaW1wb3J0IHtkYXRhU2VydmljZX0gZnJvbSBcIi4uLy4uL21vZGVsL0RhdGFTZXJ2aWNlXCI7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgX2xvZGFzaCBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtodHRwUmVxfSBmcm9tIFwiLi4vLi4vbW9kZWwvUmVxXCI7XG5cbmxldCB2bSA9IG51bGw7XG5jbGFzcyBHZXRQb2ludCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHZtID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYXJnZUhpc3RvcnkgOiBkYXRhU2VydmljZS5jaGFyZ2VIaXN0b3J5LFxuICAgICAgICAgICAgY29udGVudF9jb250aW51ZV9jbnQgOiAwLFxuICAgICAgICAgICAgcmV2aWV3X2NvbnRpbnVlX2NudCA6IDAsXG4gICAgICAgICAgICBhZHZlcnRfY29udGludWVfY250IDogMCxcbiAgICAgICAgICAgIGZvbGxvd19jb250aW51ZV9jbnQgOiAwLFxuICAgICAgICAgICAgaW52aXRlX2NvbnRpbnVlX2NudCA6IDAsXG5cbiAgICAgICAgICAgIGF0dGVuZEJ0bkRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNldHRpbmcgfHwgIXRoaXMucHJvcHMuc2V0dGluZy5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFNldHRpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkYXRhU2VydmljZS5nZXRfZnJlZV9wb2ludF9pbmZvKCkudGhlbihcbiAgICAgICAgICAgIChyZXMpPT57XG4gICAgICAgICAgICAgICAgdm0uc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50X2NvbnRpbnVlX2NudCA6IHJlcy5jb250ZW50P3Jlcy5jb250ZW50OjAsXG4gICAgICAgICAgICAgICAgICAgIHJldmlld19jb250aW51ZV9jbnQgOiByZXMucmV2aWV3P3Jlcy5yZXZpZXc6MCxcbiAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0X2NvbnRpbnVlX2NudCA6IHJlcy5hZHZlcnQ/cmVzLmFkdmVydDowLFxuICAgICAgICAgICAgICAgICAgICBmb2xsb3dfY29udGludWVfY250IDogcmVzLmZvbGxvdz9yZXMuZm9sbG93OjAsXG4gICAgICAgICAgICAgICAgICAgIGludml0ZV9jb250aW51ZV9jbnQgOiByZXMuaW52aXRlP3Jlcy5pbnZpdGU6MCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnIpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGV4Y2hhbmdlTW9uZXkobW9uZXkpIHtcbiAgICAgICAgYWxlcnQobW9uZXkpO1xuICAgIH1cblxuICAgIGZ1bmNDbGlja0F0dGVuZCgpIHtcbiAgICAgICAgY29uc3Qge3VwZGF0ZU1pLCBzeXN0ZW0sIHNldEFwcE1vZGFsU3RhdGUsIHR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHRva2VuID0gc3lzdGVtJiZzeXN0ZW0uYWkmJnN5c3RlbS5haS50b2tlbjtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGhpbmcgdG9rZW4uLi4uJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBodHRwUmVxKCcvYXBpL3VzZXIvcHJlc2VudCcsICdwb3N0Jywge3Rva2VuOnRva2VufSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLm1zZyA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFwcE1vZGFsU3RhdGUoJ2FsZXJ0JywgdCgnTUlTU0lPTl9TVUNDRVNTJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLm1zZyA9PT0gJ3NhbWUgZGF5Jykge1xuICAgICAgICAgICAgICAgICAgICBzZXRBcHBNb2RhbFN0YXRlKCdhbGVydCcsIHQoJ0FMUkVBRFlfQVRURU5EJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNaSh7c3RhdDp7bG9naW5fY29udGludWU6cmVzLnJlc3VsdH19KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXR0ZW5kQnRuRGlzYWJsZWQ6IXRoaXMuc3RhdGUuYXR0ZW5kQnRuRGlzYWJsZWR9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZnVuY0NsaWNrQXR0ZW5kIHN1Y2Nlc3MnLCByZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaHR0cFJlcSBlcnInLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvaW50X2NvbnRlbnQsXG4gICAgICAgICAgICAgICAgcG9pbnRfY29udGVudF9jbnQsXG4gICAgICAgICAgICAgICAgcG9pbnRfcmV2aWV3LFxuICAgICAgICAgICAgICAgIHBvaW50X3Jldmlld19jbnQsXG4gICAgICAgICAgICAgICAgcG9pbnRfYWR2ZXJ0LFxuICAgICAgICAgICAgICAgIHBvaW50X2FkdmVydF9jbnQsXG4gICAgICAgICAgICAgICAgcG9pbnRfYXR0ZW5kLC8vYXJyYXlcbiAgICAgICAgICAgICAgICBwb2ludF9pbnZpdGUsXG4gICAgICAgICAgICAgICAgcG9pbnRfZm9sbG93LFxuICAgICAgICAgICAgICAgIHBvaW50X2ZvbGxvd19jbnQsXG4gICAgICAgICAgICB9PSB0aGlzLnByb3BzLnNldHRpbmcuZGF0YSxcbiAgICAgICAgICAgIHttaSwgdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgdG90YWxHZXRQb2ludCA9IDA7XG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIHBvaW50X2F0dGVuZCkge1xuICAgICAgICAgICAgdG90YWxHZXRQb2ludCArPSBwb2ludF9hdHRlbmRbaW5kZXhdLnBvaW50O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3RhbF9hdHRlbmRfZGF5ID0gcG9pbnRfYXR0ZW5kJiZwb2ludF9hdHRlbmRbcG9pbnRfYXR0ZW5kLmxlbmd0aC0xXSYmcG9pbnRfYXR0ZW5kW3BvaW50X2F0dGVuZC5sZW5ndGgtMV0uZGF5O1xuICAgICAgICBsZXQgdG9kYXlfZ2V0X3BvaW50X2F0dGVuZCA9IDA7XG4gICAgICAgIGxldCB0b3RhbF9nZXRfcG9pbnRfbG9naW4gPSAwO1xuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBwb2ludF9hdHRlbmQpIHtcbiAgICAgICAgICAgIHRvdGFsX2dldF9wb2ludF9sb2dpbiA9IHBvaW50X2F0dGVuZFtpbmRleF0mJnBvaW50X2F0dGVuZFtpbmRleF0ucG9pbnQ/cG9pbnRfYXR0ZW5kW2luZGV4XS5wb2ludDowO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaSYmbWkuc3RhdCYmbWkuc3RhdC5sb2dpbl9jb250aW51ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgdG9kYXlfYXR0ZW5kX2RhdGEgPV9sb2Rhc2guZmluZChwb2ludF9hdHRlbmQmJnBvaW50X2F0dGVuZD9wb2ludF9hdHRlbmQ6W10sIHtkYXk6KG1pLnN0YXQubG9naW5fY29udGludWUgKyAxKX0pO1xuICAgICAgICAgICAgdG9kYXlfZ2V0X3BvaW50X2F0dGVuZCA9IHRvZGF5X2F0dGVuZF9kYXRhP3RvZGF5X2F0dGVuZF9kYXRhLnBvaW50OjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfY29sdW1uJz5cbiAgICAgICAgICAgICAgICB7Lyrsl7Dsho0g66Gc6re47J24Ki99XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIiBzdHlsZT17e21hcmdpbjoxMH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwxNzAsMTk0LDAuNDgpJywgcGFkZGluZzoxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkaXZfcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X2NvbHVtbicgc3R5bGU9e3tmbGV4OjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfcm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW46ICc1cHggMCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnRVZFUllEQVlMT0dJTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTp0b3RhbF9hdHRlbmRfZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZF9kYXk6bWkmJm1pLnN0YXQmJm1pLnN0YXQubG9naW5fY29udGludWU/bWkuc3RhdC5sb2dpbl9jb250aW51ZTowXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCgnVE9UQUxfUE9JTlQnLCB7cG9pbnQ6dG90YWxfZ2V0X3BvaW50X2xvZ2lufSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17e21hcmdpbjonNXB4IDAnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ0dFVF9QT0lOVF9BVFRFTkQnLCB7cG9pbnQ6dG9kYXlfZ2V0X3BvaW50X2F0dGVuZH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6MSwgYWxpZ25JdGVtczonY2VudGVyJ319IGNsYXNzTmFtZT0nZGl2X2NvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5hdHRlbmRCdG5EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuZnVuY0NsaWNrQXR0ZW5kKCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnQ0hFQ0tfQVRURU5EJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIHsvKu2ajOybkOy2lOyynCovfVxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci0wXCIgc3R5bGU9e3ttYXJnaW46MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMTcwLDE5NCwwLjQ4KScsIHBhZGRpbmc6MTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZGl2X3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nIHN0eWxlPXt7ZmxleDoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luOiAnNXB4IDAnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ1JFQ09NTUVORF9VU0VSJyx7dXNlcl9jbnQ6dGhpcy5zdGF0ZS5pbnZpdGVfY29udGludWVfY250LH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3ttYXJnaW46JzVweCAwJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdSRUNPTU1FTkRfVVNFUl9BTEVSVCcsIHtjb2luOnBvaW50X2ludml0ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6MSwgYWxpZ25JdGVtczpcImNlbnRlclwifX0gY2xhc3NOYW1lPSdkaXZfY29sdW1uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ0dBSU5TJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBvaW50X2ludml0ZSp0aGlzLnN0YXRlLmludml0ZV9jb250aW51ZV9jbnQpICsgdCgnQ09JTicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICB7Lyrqsozsi5zquIAg7J6R7ISxKi99XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIiBzdHlsZT17e21hcmdpbjoxMH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPSdwLTAnIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiYSgxNDMsMjQxLDI1NSwwLjYpJywgcGFkZGluZzoxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkaXZfcm93JyBzdHlsZT17e21hcmdpblRvcDo1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nIHN0eWxlPXt7ZmxleDoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luOic1cHggMCd9fT57dCgnTUFLRVNPQ0lBTCcsIHt0b3RhbF9jbnQ6cG9pbnRfY29udGVudF9jbnQ/cG9pbnRfY29udGVudF9jbnQ6MTAsIGNvbnRlbnRfY250OnRoaXMuc3RhdGUuY29udGVudF9jb250aW51ZV9jbnR9KX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIHN0eWxlPXt7aGVpZ2h0OjEwLCBtYXJnaW5SaWdodDo1fX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50X2NvbnRpbnVlX2NudC8ocG9pbnRfY29udGVudF9jbnQ/cG9pbnRfY29udGVudF9jbnQ6MTApKjEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7bWFyZ2luOicxMHB4IDAgMCAwJ319Pnt0KCdNQUtFX1NPQ0lBTF9BTEVSVCcsIHtjbnQ6cG9pbnRfY29udGVudF9jbnQsIHBvaW50OnBvaW50X2NvbnRlbnRfY250KnBvaW50X2NvbnRlbnR9KX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjEsIGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IGNsYXNzTmFtZT0nZGl2X2NvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdHQUlOUycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwb2ludF9jb250ZW50KnRoaXMuc3RhdGUuY29udGVudF9jb250aW51ZV9jbnQpICsgdCgnUE9JTlQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgey8q64yT6riAIOyekeyEsSovfVxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci0wXCIgc3R5bGU9e3ttYXJnaW46MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT0ncC0wJyBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMTU1LDIzMiwxODMsMC41OCknLCBwYWRkaW5nOjE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGRpdl9yb3cnIHN0eWxlPXt7bWFyZ2luVG9wOjV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X2NvbHVtbicgc3R5bGU9e3tmbGV4OjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfcm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW46JzVweCAwJ319Pnt0KCdNQUtFQ09NTUVOJywge3RvdGFsX2NudDpwb2ludF9yZXZpZXdfY250LCBjb21tZW50X2NudDp0aGlzLnN0YXRlLnJldmlld19jb250aW51ZV9jbnR9KX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIHN0eWxlPXt7aGVpZ2h0OjEwLCBtYXJnaW5SaWdodDo1fX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yZXZpZXdfY29udGludWVfY250Lyhwb2ludF9yZXZpZXdfY250P3BvaW50X3Jldmlld19jbnQ6MTApKjEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7bWFyZ2luOicxMHB4IDAgMCAwJ319Pnt0KCdNQUtFX0NPTU1FTlRfQUxFUlQnLCB7Y29tbWVudF9jbnQ6cG9pbnRfcmV2aWV3X2NudCwgdG90YWxfcG9pbnQ6cG9pbnRfcmV2aWV3X2NudCpwb2ludF9yZXZpZXd9KX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjEsIGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IGNsYXNzTmFtZT0nZGl2X2NvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdHQUlOUycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwb2ludF9yZXZpZXcqdGhpcy5zdGF0ZS5yZXZpZXdfY29udGludWVfY250KSArIHQoJ1BPSU5UJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIHsvKuq0keqzoCDrs7TquLAqL31cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItMFwiIHN0eWxlPXt7bWFyZ2luOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9J3AtMCcgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyMTksMTcxLDAuNTgpJywgcGFkZGluZzoxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkaXZfcm93JyBzdHlsZT17e21hcmdpblRvcDo1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nIHN0eWxlPXt7ZmxleDoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luOic1cHggMCd9fT57dCgnU0hPV19BRFZFUlQnLCB7YWR2ZXJ0X2NudDp0aGlzLnN0YXRlLmFkdmVydF9jb250aW51ZV9jbnQsIHRvdGFsX2NudDpwb2ludF9hZHZlcnRfY250fSl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyBzdHlsZT17e2hlaWdodDoxMCwgbWFyZ2luUmlnaHQ6NX19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuYWR2ZXJ0X2NvbnRpbnVlX2NudC8ocG9pbnRfYWR2ZXJ0X2NudD9wb2ludF9hZHZlcnRfY250OjEwKSoxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17e21hcmdpbjonMTBweCAwIDAgMCd9fT57dCgnU0hPV19BRFZFUlRfQUxFUlQnLCB7IHRvdGFsX3BvaW50OnBvaW50X2FkdmVydF9jbnQqcG9pbnRfYWR2ZXJ0fSl9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDoxLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnR0FJTlMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocG9pbnRfYWR2ZXJ0KnRoaXMuc3RhdGUuYWR2ZXJ0X2NvbnRpbnVlX2NudCkgKyB0KCdQT0lOVCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICAgIHsvKu2MlOuhnOyeiSovfVxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci0wXCIgc3R5bGU9e3ttYXJnaW46MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT0ncC0wJyBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMTQzLDI0MSwyNTUsMC42KScsIHBhZGRpbmc6MTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZGl2X3Jvdycgc3R5bGU9e3ttYXJnaW5Ub3A6NX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfY29sdW1uJyBzdHlsZT17e2ZsZXg6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9yb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbjonNXB4IDAnfX0+e3QoJ0ZPTExPVycpICsgJygnICsgYCR7dGhpcy5zdGF0ZS5mb2xsb3dfY29udGludWVfY250fS8ke3BvaW50X2ZvbGxvd19jbnQ/cG9pbnRfZm9sbG93X2NudDoxMjN9YCArICcpJyB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyBzdHlsZT17e2hlaWdodDoxMCwgbWFyZ2luUmlnaHQ6NX19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZm9sbG93X2NvbnRpbnVlX2NudC8ocG9pbnRfZm9sbG93X2NudD9wb2ludF9mb2xsb3dfY250OjEyMykqMTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3ttYXJnaW46JzEwcHggMCAwIDAnfX0+e3QoJ0ZPTExPV19BTEVSVCcsIHt1c2VyX2NudDpwb2ludF9mb2xsb3dfY250P3BvaW50X2ZvbGxvd19jbnQ6MTIzLCB0b3RhbF9wb2ludDoocG9pbnRfZm9sbG93X2NudD9wb2ludF9mb2xsb3dfY250OjEyMykqcG9pbnRfZm9sbG93fSl9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDoxLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnR0FJTlMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocG9pbnRfZm9sbG93KnRoaXMuc3RhdGUuZm9sbG93X2NvbnRpbnVlX2NudCkgKyB0KCdQT0lOVCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0UG9pbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9