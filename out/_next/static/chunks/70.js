(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[70],{

/***/ "./node_modules/@material-ui/icons/ArrowForward.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowForward.js ***!
  \*********************************************************/
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
  d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
}), 'ArrowForward');

exports.default = _default;

/***/ }),

/***/ "./pages/profile/ChargeMoney.js":
/*!**************************************!*\
  !*** ./pages/profile/ChargeMoney.js ***!
  \**************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _redux_modules_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/modules/system */ "./redux/modules/system.js");
/* harmony import */ var _static_css_mine_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../static/css/mine.css */ "./static/css/mine.css");
/* harmony import */ var _static_css_mine_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_css_mine_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _lib_tool__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../lib/tool */ "./lib/tool.js");
/* harmony import */ var _model_DataService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../model/DataService */ "./model/DataService.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _model_Const__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../model/Const */ "./model/Const.js");
/* harmony import */ var _MaterialTable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./MaterialTable */ "./pages/profile/MaterialTable.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




















var vm = null;
var PopoverItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PopoverItem, _Component);
  function PopoverItem(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PopoverItem);
    _this = _callSuper(this, PopoverItem, [props]);
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      popoverOpen: false
    };
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PopoverItem, [{
    key: "toggle",
    value: function toggle(e) {
      if (e) {
        this.anchorEl = e.currentTarget;
      }
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: "chargeMoney",
    value: function chargeMoney() {
      var chargeFunc = this.props.chargeFunc;
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
      chargeFunc();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        dataItem = _this$props.dataItem,
        index = _this$props.index,
        state = _this$props.state,
        containerStr = _this$props.containerStr,
        btnStr = _this$props.btnStr,
        cancelBtnStr = _this$props.cancelBtnStr,
        pointStr = _this$props.pointStr,
        btnState = _this$props.btnState,
        cash_rate = _this$props.cash_rate,
        chargeFunc = _this$props.chargeFunc;
      return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "col-auto p-0 border-0 mb-0 mt-4",
        style: {
          borderRadius: 15,
          boxShadow: '3px 5px 6px 0px #b8b8b8'
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "p-0 money_bg_img"
      }, __jsx("img", {
        alt: "",
        className: "money_title_img" //
        ,
        src: dataItem.img
      }), __jsx("h4", {
        className: "mb-0 col-auto money_title_text"
      }, lodash__WEBPACK_IMPORTED_MODULE_18___default.a.floor(dataItem.money / cash_rate, 2), " ", pointStr), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: 'Popover-' + index,
        className: "money_title_button" //
        ,
        style: {
          width: 100,
          borderRadius: 10,
          color: 'white',
          backgroundColor: '#FF695C',
          height: 50,
          alignItems: 'center',
          boxShadow: '3px 5px 6px 0px #b8b8b8'
        },
        onClick: function onClick(e) {
          _this2.toggle(e);
        },
        disabled: btnState
      }, __jsx("h4", {
        className: "mb-0",
        style: {
          marginBottom: 0,
          alignItems: 'center',
          marginTop: 0
        }
      }, dataItem.cash)), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_25__["default"], {
        open: this.state.popoverOpen,
        anchorEl: this.anchorEl,
        onClose: this.toggle,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'center'
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24__["default"], {
        style: {
          padding: 5
        }
      }, __jsx("h3", {
        style: {
          marginLeft: 15,
          margin: 5
        }
      }, lodash__WEBPACK_IMPORTED_MODULE_18___default.a.floor(dataItem.money / cash_rate, 2) + state), __jsx("h3", {
        style: {
          marginLeft: 15,
          margin: 5
        }
      }, containerStr), __jsx("div", {
        style: {
          flexDirection: 'row',
          justifyContent: "center"
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "outlined",
        color: "primary",
        style: {
          margin: 10
        },
        onClick: function onClick() {
          chargeFunc();
          _this2.toggle();
        },
        disabled: btnState
      }, btnStr), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "outlined",
        style: {
          margin: 10
        },
        color: "danger",
        onClick: function onClick() {
          _this2.toggle();
        }
      }, cancelBtnStr))))));
    }
  }]);
  return PopoverItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
var ChargeMoney = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ChargeMoney, _Component2);
  function ChargeMoney(props) {
    var _this3;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChargeMoney);
    _this3 = _callSuper(this, ChargeMoney, [props]);
    vm = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3);
    _this3.state = {
      modalState: false,
      chargeSetting: _model_DataService__WEBPACK_IMPORTED_MODULE_20__["dataService"].chargeSetting,
      exchangeSetting: _model_DataService__WEBPACK_IMPORTED_MODULE_20__["dataService"].exchangeSetting,
      pageSize: 10,
      requireChargeState: false,
      exchangeCashValue: 0,
      exchangePointValue: 0
    };
    var _this3$props = _this3.props,
      system = _this3$props.system,
      getHistory = _this3$props.getHistory;
    var model = system[_redux_modules_system__WEBPACK_IMPORTED_MODULE_16__["HIS_TYPE_CHARGE"]];
    if ((!model.data || !model.data.length) && model.status !== _model_Const__WEBPACK_IMPORTED_MODULE_22__["STATUS_REQ_START"] && model.status !== _model_Const__WEBPACK_IMPORTED_MODULE_22__["STATUS_REQ_NOMORE"]) {
      // getHistory(System.HIS_TYPE_CHARGE, CONST.LOAD_TYPE_INIT);
    }
    if (!_this3.state.chargeSetting.length || !_this3.state.exchangeSetting.length) {
      _model_DataService__WEBPACK_IMPORTED_MODULE_20__["dataService"].getChargeSet().then(function (response) {
        var chargeSet = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.sortBy(lodash__WEBPACK_IMPORTED_MODULE_18___default.a.filter(response, {
          type: 1
        }), ['cash']);
        var exchangeSet = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.sortBy(lodash__WEBPACK_IMPORTED_MODULE_18___default.a.filter(response, {
          type: 2
        }), ['cash']);
        _model_DataService__WEBPACK_IMPORTED_MODULE_20__["dataService"].chargeSetting = chargeSet;
        _model_DataService__WEBPACK_IMPORTED_MODULE_20__["dataService"].exchangeSetting = exchangeSet;
        vm.setState({
          chargeSetting: chargeSet,
          exchangeSetting: exchangeSet
        });
      }, function (error) {
        console.log('get ChargeSet error');
      });
    }
    return _this3;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChargeMoney, [{
    key: "sendChargeState",
    value: function sendChargeState(settingId, cash, point) {
      // if (this.state.toChangeMoney <= 0) return;
      if (settingId === undefined) return;
      this.setState({
        requireChargeState: true
      });
      _model_DataService__WEBPACK_IMPORTED_MODULE_20__["dataService"].charge('point', settingId, cash, point).then(function (response) {
        vm.setState({
          requireChargeState: false
        });
        vm.openModal();
      })["catch"](function (error) {
        vm.setState({
          requireChargeState: false
        });
      });
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.setState({
        modalState: !this.state.modalState
      });
    }
  }, {
    key: "renderCurrentCtime",
    value: function renderCurrentCtime(item, row) {
      return __jsx("span", null, item ? _lib_tool__WEBPACK_IMPORTED_MODULE_19__["getCurrentTime"](item, 'L') : 'LOADING');
    }
  }, {
    key: "renderCharge",
    value: function renderCharge() {
      var _this4 = this;
      var _this$props2 = this.props,
        setting = _this$props2.setting,
        t = _this$props2.t;
      var lang = _i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].language;
      var cash_rate = lang === 'ko' ? setting && setting.data && setting.data.exchange_dollar_won : lang === 'cn' ? setting && setting.data && setting.data.exchange_dollar_rmb : 1;
      return __jsx("div", {
        style: {
          flexDirection: 'row',
          flexWrap: "wrap",
          display: 'flex',
          width: '100%',
          justifyContent: "center"
        }
      }, this.state.chargeSetting.map(function (dataItem, index) {
        return __jsx("div", {
          key: index,
          style: {
            minWidth: 200,
            maxWidth: '20%',
            margin: 10,
            flexDirection: "column",
            display: 'flex',
            width: '15%'
          }
        }, __jsx(PopoverItem, {
          cash_rate: cash_rate ? cash_rate : 1,
          btnState: _this4.state.requireChargeState,
          dataItem: dataItem,
          index: index,
          state: t("POINT"),
          containerStr: t('ISTOCHARGE'),
          btnStr: t("MONEYCHARGE"),
          cancelBtnStr: t("CANCLE"),
          chargeFunc: function chargeFunc() {
            _this4.sendChargeState(dataItem.id, dataItem.cash, lodash__WEBPACK_IMPORTED_MODULE_18___default.a.floor(dataItem.money / cash_rate, 2));
          },
          pointStr: 'POINT'
          // contextT={}
        }));
      }));
    }
  }, {
    key: "renderTableProState",
    value: function renderTableProState(item, row) {
      var viewStates = {
        "done": 'EXCHANGE_FINISHED',
        "pending": 'EXCHANGE_PENDING'
      };
      return __jsx("span", null, viewStates[item]);
    }
  }, {
    key: "funcLoadHistory",
    value: function funcLoadHistory() {
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var loadType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _model_Const__WEBPACK_IMPORTED_MODULE_22__["LOAD_TYPE_INIT"];
      var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var sort = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var type = _redux_modules_system__WEBPACK_IMPORTED_MODULE_16__["HIS_TYPE_CHARGE"];
      var _this$props3 = this.props,
        getHistory = _this$props3.getHistory,
        system = _this$props3.system;
      if (system[type] && system[type].status === _model_Const__WEBPACK_IMPORTED_MODULE_22__["STATUS_REQ_START"]) return;
      getHistory(type, loadType, filter, perPage, sort);
    }
  }, {
    key: "changeInputCash",
    value: function changeInputCash(value) {
      var setting = this.props.setting;
      var lang = _i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].language;
      var data = setting && setting.data;
      if (!data) return;
      var invalid = !isNaN(value) ? false : true,
        cash_rate = lang === 'ko' ? setting && setting.data && setting.data.exchange_dollar_won : lang === 'cn' ? setting && setting.data && setting.data.exchange_dollar_rmb : 1;
      if (!data.exchange_rate_point || !data.exchange_rate_coin) return;
      if (!invalid) {
        var fromCoin = parseInt(value);
        var toPoint = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.floor(fromCoin * data.exchange_rate_point * data.exchange_rate_coin / cash_rate, 2);
        this.setState({
          exchangeCashValue: fromCoin ? fromCoin : 0,
          exchangePointValue: toPoint ? toPoint : 0
        });
      }
    }
  }, {
    key: "funcExchangeCash2Point",
    value: function funcExchangeCash2Point() {
      if (!this.state.exchangeCashValue || !this.state.exchangePointValue) return;
      this.setState({
        requireChargeState: true
      });
      _model_DataService__WEBPACK_IMPORTED_MODULE_20__["dataService"].charge('point', -1, this.state.exchangeCashValue, this.state.exchangePointValue).then(function (response) {
        vm.setState({
          exchangeCashValue: 0,
          exchangePointValue: 0,
          requireChargeState: false
        });
        vm.openModal();
      }, function (err) {
        vm.setState({
          exchangeCashValue: 0,
          exchangePointValue: 0,
          requireChargeState: false
        });
        vm.openModal();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var rendData = [],
        _this$props4 = this.props,
        t = _this$props4.t,
        mi = _this$props4.mi,
        system = _this$props4.system,
        setting = _this$props4.setting;
      var columns = [{
        title: t("REQUESTDATE"),
        field: 'ctime',
        // String-based value accessors!
        render: function render(props) {
          return _this5.renderCurrentCtime(props.ctime);
        }
      }, {
        title: t("RESPONSEDATE"),
        field: 'utime',
        render: function render(props) {
          return _this5.renderCurrentCtime(props.utime);
        }
      }, {
        title: t("CASH"),
        field: 'cash'
      }, {
        title: t("POINT"),
        // Custom header components!
        field: 'money'
      }];
      var lang = _i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].language;
      var type = _redux_modules_system__WEBPACK_IMPORTED_MODULE_16__["HIS_TYPE_CHARGE"],
        cash_rate = lang === 'ko' ? setting && setting.data && setting.data.exchange_dollar_won : lang === 'cn' ? setting && setting.data && setting.data.exchange_dollar_rmb : 1;
      for (var index = 0; index < system[type].totalLength ? system[type].totalLength : 0; index++) {
        var buf = system[type].data[index];
        if (buf) rendData.push(buf);else rendData.push([]);
      }
      var chargeSetting = this.state.chargeSetting;
      return __jsx("div", {
        style: {
          padding: 15
        }
      }, __jsx("div", {
        className: "mt-3 ml-0 mr-0 mb-5",
        style: {
          width: '100%',
          flexDirection: 'row',
          display: 'flex'
        }
      }, chargeSetting.length ? __jsx("div", {
        style: {
          flexDirection: "column",
          display: "flex",
          width: '100%'
        }
      }, __jsx("div", {
        style: {
          margin: 2,
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, __jsx("div", {
        className: "col-auto p-2 point_coin_view"
      }, __jsx("img", {
        alt: "",
        src: "../../static/img/common/point.png",
        style: {
          width: 30,
          height: 30
        }
      }), __jsx("h4", {
        className: "mb-0 ml-2",
        style: {
          color: 'white'
        }
      }, mi.point ? mi.point : 0))), this.renderCharge()) : null), __jsx("div", {
        className: "ml-0 mr-0 align-items-center",
        style: {
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center'
        }
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "filled-adornment-extra-dense",
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])({
          margin: 10,
          flexBasis: 200
        }),
        variant: "filled",
        margin: "dense",
        hiddenLabel: true,
        value: this.state.exchangeCashValue,
        onChange: function onChange(e) {
          _this5.changeInputCash(e.target.value);
        },
        InputProps: {
          inputProps: {
            'aria-label': 'amount in Euro'
          },
          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__["default"], {
            position: "start"
          }, "1\u20A9")
        }
      }), __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default.a, {
        style: {
          fontSize: 30
        }
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "filled-adornment-extra-dense",
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])({
          margin: 10,
          flexBasis: 200
        }),
        variant: "filled",
        margin: "dense",
        hiddenLabel: true,
        value: this.state.exchangePointValue,
        disabled: true,
        InputProps: {
          inputProps: {
            'aria-label': 'amount in Euro'
          },
          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__["default"], {
            position: "start"
          }, lodash__WEBPACK_IMPORTED_MODULE_18___default.a.floor((setting.data && setting.data.exchange_rate_point ? setting.data.exchange_rate_point : 0) * (setting.data && setting.data.exchange_rate_coin ? setting.data.exchange_rate_coin : 0) / (cash_rate ? cash_rate : 1), 2), __jsx("img", {
            alt: "",
            src: "../../static/img/common/point.png",
            style: {
              width: 20,
              height: 20
            }
          }))
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "outlined",
        color: "primary",
        style: {
          margin: 1
        },
        disabled: !this.state.exchangePointValue || this.state.requireChargeState,
        onClick: function onClick() {
          _this5.funcExchangeCash2Point();
        },
        className: "btn red point-btn m-3 "
      }, t('POINTOUT'))), __jsx(_MaterialTable__WEBPACK_IMPORTED_MODULE_23__["default"], {
        mi: this.props.mi,
        context_t: this.props.t,
        type: type,
        columns: columns,
        noDataText: system[type].status === _model_Const__WEBPACK_IMPORTED_MODULE_22__["STATUS_REQ_NOMORE"] ? t('NO_DATA') : t('LOADING')
        // getHistory={this.props.getHistory}
        // modelStatus={system[type].status}
        // renderData={system[type].data}
        // exitDataLength={system[type].length ? system[type].length : 0}
        // totalDataCnt={system[type].totalLength ? system[type].totalLength : 0}
        // funcLoadData={this.funcLoadHistory.bind(this)}
      }));
    }
  }]);
  return ChargeMoney;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ChargeMoney);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUvQ2hhcmdlTW9uZXkuanMiXSwibmFtZXMiOlsidm0iLCJQb3BvdmVySXRlbSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsInRvZ2dsZSIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic3RhdGUiLCJwb3BvdmVyT3BlbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZSIsImFuY2hvckVsIiwiY3VycmVudFRhcmdldCIsInNldFN0YXRlIiwiY2hhcmdlTW9uZXkiLCJjaGFyZ2VGdW5jIiwicmVuZGVyIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJkYXRhSXRlbSIsImluZGV4IiwiY29udGFpbmVyU3RyIiwiYnRuU3RyIiwiY2FuY2VsQnRuU3RyIiwicG9pbnRTdHIiLCJidG5TdGF0ZSIsImNhc2hfcmF0ZSIsIl9fanN4IiwiQ2FyZCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiQ2FyZENvbnRlbnQiLCJhbHQiLCJzcmMiLCJpbWciLCJfbG9kYXNoIiwiZmxvb3IiLCJtb25leSIsIkJ1dHRvbiIsImlkIiwid2lkdGgiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImFsaWduSXRlbXMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJjYXNoIiwiUG9wb3ZlciIsIm9wZW4iLCJvbkNsb3NlIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNmb3JtT3JpZ2luIiwiVHlwb2dyYXBoeSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwibWFyZ2luIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwidmFyaWFudCIsIkNvbXBvbmVudCIsIkNoYXJnZU1vbmV5IiwiX0NvbXBvbmVudDIiLCJfdGhpczMiLCJtb2RhbFN0YXRlIiwiY2hhcmdlU2V0dGluZyIsImRhdGFTZXJ2aWNlIiwiZXhjaGFuZ2VTZXR0aW5nIiwicGFnZVNpemUiLCJyZXF1aXJlQ2hhcmdlU3RhdGUiLCJleGNoYW5nZUNhc2hWYWx1ZSIsImV4Y2hhbmdlUG9pbnRWYWx1ZSIsIl90aGlzMyRwcm9wcyIsInN5c3RlbSIsImdldEhpc3RvcnkiLCJtb2RlbCIsIlN5c3RlbSIsImRhdGEiLCJsZW5ndGgiLCJzdGF0dXMiLCJDT05TVCIsImdldENoYXJnZVNldCIsInRoZW4iLCJyZXNwb25zZSIsImNoYXJnZVNldCIsInNvcnRCeSIsImZpbHRlciIsInR5cGUiLCJleGNoYW5nZVNldCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlbmRDaGFyZ2VTdGF0ZSIsInNldHRpbmdJZCIsInBvaW50IiwidW5kZWZpbmVkIiwiY2hhcmdlIiwib3Blbk1vZGFsIiwicmVuZGVyQ3VycmVudEN0aW1lIiwiaXRlbSIsInJvdyIsIlRvb2xzIiwicmVuZGVyQ2hhcmdlIiwiX3RoaXM0IiwiX3RoaXMkcHJvcHMyIiwic2V0dGluZyIsInQiLCJsYW5nIiwiaTE4biIsImxhbmd1YWdlIiwiZXhjaGFuZ2VfZG9sbGFyX3dvbiIsImV4Y2hhbmdlX2RvbGxhcl9ybWIiLCJmbGV4V3JhcCIsImRpc3BsYXkiLCJtYXAiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwicmVuZGVyVGFibGVQcm9TdGF0ZSIsInZpZXdTdGF0ZXMiLCJmdW5jTG9hZEhpc3RvcnkiLCJhcmd1bWVudHMiLCJwZXJQYWdlIiwibG9hZFR5cGUiLCJwYWdlIiwic29ydCIsIl90aGlzJHByb3BzMyIsImNoYW5nZUlucHV0Q2FzaCIsImludmFsaWQiLCJpc05hTiIsImV4Y2hhbmdlX3JhdGVfcG9pbnQiLCJleGNoYW5nZV9yYXRlX2NvaW4iLCJmcm9tQ29pbiIsInBhcnNlSW50IiwidG9Qb2ludCIsImZ1bmNFeGNoYW5nZUNhc2gyUG9pbnQiLCJlcnIiLCJfdGhpczUiLCJyZW5kRGF0YSIsIl90aGlzJHByb3BzNCIsIm1pIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJjdGltZSIsInV0aW1lIiwidG90YWxMZW5ndGgiLCJidWYiLCJwdXNoIiwiVGV4dEZpZWxkIiwiY2xzeCIsImZsZXhCYXNpcyIsImhpZGRlbkxhYmVsIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJJbnB1dFByb3BzIiwiaW5wdXRQcm9wcyIsInN0YXJ0QWRvcm5tZW50IiwiSW5wdXRBZG9ybm1lbnQiLCJwb3NpdGlvbiIsIkFycm93Rm9yd2FyZEljb24iLCJmb250U2l6ZSIsIlBhZ2luYXRpb25UYWJsZSIsImNvbnRleHRfdCIsIm5vRGF0YVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GLDhCQUE4QixtQkFBTyxDQUFDLHNIQUErQzs7QUFFckY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFbkQsNENBQTRDLG1CQUFPLENBQUMsdUZBQXVCOztBQUUzRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CdUM7QUFDSjtBQUNEO0FBQzZCO0FBQ0Q7QUFDakI7QUFDSDtBQUNjO0FBQ2hDO0FBQzRCO0FBQ0M7QUFDbkI7QUFDTjtBQUNZO0FBQ1k7QUFDaEI7QUFDTztBQUNHO0FBQ1E7QUFDTjtBQUVoRCxJQUFJQSxFQUFFLEdBQUcsSUFBSTtBQUFDLElBRVJDLFdBQVcsMEJBQUFDLFVBQUE7RUFBQUMsbUZBQUEsQ0FBQUYsV0FBQSxFQUFBQyxVQUFBO0VBQ2IsU0FBQUQsWUFBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyx5RkFBQSxPQUFB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O1FBQ2xDYixLQUFLLEVBQUU7VUFBQ2dDLE1BQU0sRUFBRTtRQUFDLENBQUU7UUFDbkJkLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQzNDLEtBQUssQ0FBQ3dFLGtCQUFrQixJQUFJLElBQUksQ0FBQ3hFLEtBQUssQ0FBQ3NFLGtCQUFtQjtRQUMxRTVCLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQU07VUFDWCtGLE1BQUksQ0FBQ0Ysc0JBQXNCLENBQUMsQ0FBQztRQUNqQyxDQUFFO1FBQ0YvRyxTQUFTLEVBQUM7TUFBd0IsR0FFckNtRixDQUFDLENBQUMsVUFBVSxDQUNULENBQ1AsQ0FBQyxFQUVOckYsS0FBQSxDQUFDNEksdURBQWU7UUFDWnRCLEVBQUUsRUFBRSxJQUFJLENBQUNuSixLQUFLLENBQUNtSixFQUFHO1FBQ2xCdUIsU0FBUyxFQUFFLElBQUksQ0FBQzFLLEtBQUssQ0FBQ2tILENBQUU7UUFDeEJuQixJQUFJLEVBQUVBLElBQUs7UUFDWHFELE9BQU8sRUFBRUEsT0FBUTtRQUNqQnVCLFVBQVUsRUFBRTFGLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDLENBQUNSLE1BQU0sS0FBS0MsK0RBQXVCLEdBQUcwQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxTQUFTO1FBQ3hGO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUFBLENBQ0gsQ0FvQkEsQ0FBQztJQUVkO0VBQUM7RUFBQSxPQUFBN0MsV0FBQTtBQUFBLEVBNVJxQkQsK0NBQVM7QUErUnBCQywwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOHpcIlxufSksICdBcnJvd0ZvcndhcmQnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkJztcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0ICogYXMgU3lzdGVtIGZyb20gXCIuLi8uLi9yZWR1eC9tb2R1bGVzL3N5c3RlbVwiO1xuaW1wb3J0ICcuLi8uLi9zdGF0aWMvY3NzL21pbmUuY3NzJ1xuaW1wb3J0IF9sb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgVG9vbHMgZnJvbSBcIi4uLy4uL2xpYi90b29sXCI7XG5pbXBvcnQge2RhdGFTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbW9kZWwvRGF0YVNlcnZpY2VcIjtcbmltcG9ydCAncmVhY3QtdGFibGUvcmVhY3QtdGFibGUuY3NzJ1xuaW1wb3J0ICogYXMgQ09OU1QgZnJvbSBcIi4uLy4uL21vZGVsL0NvbnN0XCI7XG5pbXBvcnQgUGFnaW5hdGlvblRhYmxlIGZyb20gJy4vTWF0ZXJpYWxUYWJsZSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIjtcblxubGV0IHZtID0gbnVsbDtcblxuY2xhc3MgUG9wb3Zlckl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3BvdmVyT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdG9nZ2xlKGUpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwb3BvdmVyT3BlbjogIXRoaXMuc3RhdGUucG9wb3Zlck9wZW4sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJnZU1vbmV5KCkge1xuICAgICAgICBjb25zdCB7Y2hhcmdlRnVuY30gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3BvdmVyT3BlbjogIXRoaXMuc3RhdGUucG9wb3Zlck9wZW59KTtcbiAgICAgICAgY2hhcmdlRnVuYygpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7ZGF0YUl0ZW0sIGluZGV4LCBzdGF0ZSwgY29udGFpbmVyU3RyLCBidG5TdHIsIGNhbmNlbEJ0blN0ciwgcG9pbnRTdHIsIGJ0blN0YXRlLCBjYXNoX3JhdGUsIGNoYXJnZUZ1bmN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nY29sLWF1dG8gcC0wIGJvcmRlci0wIG1iLTAgbXQtNCdcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICczcHggNXB4IDZweCAwcHggI2I4YjhiOCcsXG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPSdwLTAgbW9uZXlfYmdfaW1nJz57LyoqL31cbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9JycgY2xhc3NOYW1lPSdtb25leV90aXRsZV9pbWcnLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFJdGVtLmltZ30vPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0wIGNvbC1hdXRvIG1vbmV5X3RpdGxlX3RleHQnPntfbG9kYXNoLmZsb29yKGRhdGFJdGVtLm1vbmV5IC8gY2FzaF9yYXRlLCAyKX0ge3BvaW50U3RyfTwvaDQ+ey8qKi99XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9eydQb3BvdmVyLScgKyBpbmRleH0gY2xhc3NOYW1lPSdtb25leV90aXRsZV9idXR0b24nLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGNjk1QycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICczcHggNXB4IDZweCAwcHggI2I4YjhiOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnRuU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTAnIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luVG9wOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFJdGVtLmNhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjb250ZXh0VCgnQ09VTlRSWV9NT05FWV9TWU1CT0wnKX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUucG9wb3Zlck9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5hbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMudG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7cGFkZGluZzogNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkxlZnQ6MTUsIG1hcmdpbjo1fX0+e19sb2Rhc2guZmxvb3IoZGF0YUl0ZW0ubW9uZXkgLyBjYXNoX3JhdGUsIDIpICsgc3RhdGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5MZWZ0OjE1LCBtYXJnaW46NX19Pntjb250YWluZXJTdHJ9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleERpcmVjdGlvbjoncm93JywganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyZ2VGdW5jKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnRuU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidG5TdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7bWFyZ2luOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2RhbmdlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbmNlbEJ0blN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhcmdlTW9uZXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB2bSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb2RhbFN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGNoYXJnZVNldHRpbmc6IGRhdGFTZXJ2aWNlLmNoYXJnZVNldHRpbmcsXG4gICAgICAgICAgICBleGNoYW5nZVNldHRpbmc6IGRhdGFTZXJ2aWNlLmV4Y2hhbmdlU2V0dGluZyxcbiAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcblxuICAgICAgICAgICAgcmVxdWlyZUNoYXJnZVN0YXRlOiBmYWxzZSxcblxuICAgICAgICAgICAgZXhjaGFuZ2VDYXNoVmFsdWU6IDAsXG4gICAgICAgICAgICBleGNoYW5nZVBvaW50VmFsdWU6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHtzeXN0ZW0sIGdldEhpc3Rvcnl9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IG1vZGVsID0gc3lzdGVtW1N5c3RlbS5ISVNfVFlQRV9DSEFSR0VdO1xuICAgICAgICBpZiAoKCFtb2RlbC5kYXRhIHx8ICFtb2RlbC5kYXRhLmxlbmd0aCkgJiYgbW9kZWwuc3RhdHVzICE9PSBDT05TVC5TVEFUVVNfUkVRX1NUQVJUICYmIG1vZGVsLnN0YXR1cyAhPT0gQ09OU1QuU1RBVFVTX1JFUV9OT01PUkUpIHtcbiAgICAgICAgICAgIC8vIGdldEhpc3RvcnkoU3lzdGVtLkhJU19UWVBFX0NIQVJHRSwgQ09OU1QuTE9BRF9UWVBFX0lOSVQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jaGFyZ2VTZXR0aW5nLmxlbmd0aCB8fCAhdGhpcy5zdGF0ZS5leGNoYW5nZVNldHRpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRDaGFyZ2VTZXQoKS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcmdlU2V0ID0gX2xvZGFzaC5zb3J0QnkoX2xvZGFzaC5maWx0ZXIocmVzcG9uc2UsIHt0eXBlOiAxfSksIFsnY2FzaCddKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4Y2hhbmdlU2V0ID0gX2xvZGFzaC5zb3J0QnkoX2xvZGFzaC5maWx0ZXIocmVzcG9uc2UsIHt0eXBlOiAyfSksIFsnY2FzaCddKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UuY2hhcmdlU2V0dGluZyA9IGNoYXJnZVNldDtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UuZXhjaGFuZ2VTZXR0aW5nID0gZXhjaGFuZ2VTZXQ7XG4gICAgICAgICAgICAgICAgICAgIHZtLnNldFN0YXRlKHtjaGFyZ2VTZXR0aW5nOiBjaGFyZ2VTZXQsIGV4Y2hhbmdlU2V0dGluZzogZXhjaGFuZ2VTZXR9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IENoYXJnZVNldCBlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRDaGFyZ2VTdGF0ZShzZXR0aW5nSWQsIGNhc2gsIHBvaW50KSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLnRvQ2hhbmdlTW9uZXkgPD0gMCkgcmV0dXJuO1xuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVxdWlyZUNoYXJnZVN0YXRlOiB0cnVlfSk7XG4gICAgICAgIGRhdGFTZXJ2aWNlLmNoYXJnZSgncG9pbnQnLCBzZXR0aW5nSWQsIGNhc2gsIHBvaW50KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uc2V0U3RhdGUoe3JlcXVpcmVDaGFyZ2VTdGF0ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB2bS5vcGVuTW9kYWwoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uc2V0U3RhdGUoe3JlcXVpcmVDaGFyZ2VTdGF0ZTogZmFsc2V9KTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RhbFN0YXRlOiAhdGhpcy5zdGF0ZS5tb2RhbFN0YXRlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ3VycmVudEN0aW1lKGl0ZW0sIHJvdykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+e2l0ZW0gPyBUb29scy5nZXRDdXJyZW50VGltZShpdGVtLCAnTCcpIDogKCdMT0FESU5HJyl9PC9zcGFuPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyQ2hhcmdlKCkge1xuICAgICAgICBjb25zdCB7c2V0dGluZywgdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgbGFuZyA9IGkxOG4ubGFuZ3VhZ2U7XG4gICAgICAgIGxldCBjYXNoX3JhdGUgPSBsYW5nID09PSAna28nID8gc2V0dGluZyAmJiBzZXR0aW5nLmRhdGEgJiYgc2V0dGluZy5kYXRhLmV4Y2hhbmdlX2RvbGxhcl93b24gOiBsYW5nID09PSAnY24nID8gc2V0dGluZyAmJiBzZXR0aW5nLmRhdGEgJiYgc2V0dGluZy5kYXRhLmV4Y2hhbmdlX2RvbGxhcl9ybWIgOiAxO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246ICdyb3cnLCBmbGV4V3JhcDpcIndyYXBcIiwgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDonMTAwJScsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFyZ2VTZXR0aW5nLm1hcCgoZGF0YUl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluV2lkdGg6IDIwMCwgbWF4V2lkdGg6ICcyMCUnLCBtYXJnaW46IDEwLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGRpc3BsYXk6J2ZsZXgnLCB3aWR0aDonMTUlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2hfcmF0ZT17Y2FzaF9yYXRlP2Nhc2hfcmF0ZToxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5TdGF0ZT17dGhpcy5zdGF0ZS5yZXF1aXJlQ2hhcmdlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJdGVtPXtkYXRhSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dChcIlBPSU5UXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTdHI9e3QoJ0lTVE9DSEFSR0UnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuU3RyPXt0KFwiTU9ORVlDSEFSR0VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ0blN0cj17dChcIkNBTkNMRVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmdlRnVuYz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kQ2hhcmdlU3RhdGUoZGF0YUl0ZW0uaWQsIGRhdGFJdGVtLmNhc2gsIF9sb2Rhc2guZmxvb3IoZGF0YUl0ZW0ubW9uZXkgLyBjYXNoX3JhdGUsIDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludFN0cj17KCdQT0lOVCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZXh0VD17fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXJUYWJsZVByb1N0YXRlKGl0ZW0sIHJvdykge1xuICAgICAgICBjb25zdCB2aWV3U3RhdGVzID0ge1xuICAgICAgICAgICAgXCJkb25lXCI6ICgnRVhDSEFOR0VfRklOSVNIRUQnKSxcbiAgICAgICAgICAgIFwicGVuZGluZ1wiOiAoJ0VYQ0hBTkdFX1BFTkRJTkcnKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt2aWV3U3RhdGVzW2l0ZW1dfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY0xvYWRIaXN0b3J5KGZpbHRlciA9IHt9LCBwZXJQYWdlID0gMTAsIGxvYWRUeXBlID0gQ09OU1QuTE9BRF9UWVBFX0lOSVQsIHBhZ2UgPSAwLCBzb3J0ID0gW10pIHtcbiAgICAgICAgbGV0IHR5cGUgPSBTeXN0ZW0uSElTX1RZUEVfQ0hBUkdFO1xuICAgICAgICBjb25zdCB7Z2V0SGlzdG9yeSwgc3lzdGVtfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChzeXN0ZW1bdHlwZV0gJiYgc3lzdGVtW3R5cGVdLnN0YXR1cyA9PT0gQ09OU1QuU1RBVFVTX1JFUV9TVEFSVClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZ2V0SGlzdG9yeSh0eXBlLCBsb2FkVHlwZSwgZmlsdGVyLCBwZXJQYWdlLCBzb3J0KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VJbnB1dENhc2godmFsdWUpIHtcbiAgICAgICAgY29uc3Qge3NldHRpbmd9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGxhbmcgPSBpMThuLmxhbmd1YWdlO1xuICAgICAgICBsZXQgZGF0YSA9IHNldHRpbmcgJiYgc2V0dGluZy5kYXRhO1xuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICAgICAgbGV0IGludmFsaWQgPSAhaXNOYU4odmFsdWUpID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICAgICAgY2FzaF9yYXRlID0gbGFuZyA9PT0gJ2tvJyA/IHNldHRpbmcgJiYgc2V0dGluZy5kYXRhICYmIHNldHRpbmcuZGF0YS5leGNoYW5nZV9kb2xsYXJfd29uIDogbGFuZyA9PT0gJ2NuJyA/IHNldHRpbmcgJiYgc2V0dGluZy5kYXRhICYmIHNldHRpbmcuZGF0YS5leGNoYW5nZV9kb2xsYXJfcm1iIDogMTtcbiAgICAgICAgaWYgKCFkYXRhLmV4Y2hhbmdlX3JhdGVfcG9pbnQgfHwgIWRhdGEuZXhjaGFuZ2VfcmF0ZV9jb2luKSByZXR1cm47XG4gICAgICAgIGlmICghaW52YWxpZCkge1xuICAgICAgICAgICAgbGV0IGZyb21Db2luID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgbGV0IHRvUG9pbnQgPSBfbG9kYXNoLmZsb29yKGZyb21Db2luICogZGF0YS5leGNoYW5nZV9yYXRlX3BvaW50ICogZGF0YS5leGNoYW5nZV9yYXRlX2NvaW4gLyBjYXNoX3JhdGUsIDIpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhjaGFuZ2VDYXNoVmFsdWU6IGZyb21Db2luID8gZnJvbUNvaW4gOiAwLCBleGNoYW5nZVBvaW50VmFsdWU6IHRvUG9pbnQgPyB0b1BvaW50IDogMH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY0V4Y2hhbmdlQ2FzaDJQb2ludCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmV4Y2hhbmdlQ2FzaFZhbHVlIHx8ICF0aGlzLnN0YXRlLmV4Y2hhbmdlUG9pbnRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXF1aXJlQ2hhcmdlU3RhdGU6IHRydWV9KTtcbiAgICAgICAgZGF0YVNlcnZpY2UuY2hhcmdlKCdwb2ludCcsIC0xLCB0aGlzLnN0YXRlLmV4Y2hhbmdlQ2FzaFZhbHVlLCB0aGlzLnN0YXRlLmV4Y2hhbmdlUG9pbnRWYWx1ZSkudGhlbihcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnNldFN0YXRlKHtleGNoYW5nZUNhc2hWYWx1ZTogMCwgZXhjaGFuZ2VQb2ludFZhbHVlOiAwLCByZXF1aXJlQ2hhcmdlU3RhdGU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdm0ub3Blbk1vZGFsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnNldFN0YXRlKHtleGNoYW5nZUNhc2hWYWx1ZTogMCwgZXhjaGFuZ2VQb2ludFZhbHVlOiAwLCByZXF1aXJlQ2hhcmdlU3RhdGU6IGZhbHNlfSlcbiAgICAgICAgICAgICAgICB2bS5vcGVuTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcmVuZERhdGEgPSBbXSwge3QsIG1pLCBzeXN0ZW0sIHNldHRpbmd9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdChcIlJFUVVFU1REQVRFXCIpLFxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY3RpbWUnLCAvLyBTdHJpbmctYmFzZWQgdmFsdWUgYWNjZXNzb3JzIVxuICAgICAgICAgICAgICAgIHJlbmRlcjogcHJvcHMgPT4gKHRoaXMucmVuZGVyQ3VycmVudEN0aW1lKHByb3BzLmN0aW1lKSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdChcIlJFU1BPTlNFREFURVwiKSxcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3V0aW1lJyxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHByb3BzID0+ICh0aGlzLnJlbmRlckN1cnJlbnRDdGltZShwcm9wcy51dGltZSkpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHQoXCJDQVNIXCIpLFxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY2FzaCcsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHQoXCJQT0lOVFwiKSwgLy8gQ3VzdG9tIGhlYWRlciBjb21wb25lbnRzIVxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbW9uZXknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgbGFuZyA9IGkxOG4ubGFuZ3VhZ2U7XG4gICAgICAgIGxldCB0eXBlID0gU3lzdGVtLkhJU19UWVBFX0NIQVJHRSxcbiAgICAgICAgICAgIGNhc2hfcmF0ZSA9IGxhbmcgPT09ICdrbycgPyBzZXR0aW5nICYmIHNldHRpbmcuZGF0YSAmJiBzZXR0aW5nLmRhdGEuZXhjaGFuZ2VfZG9sbGFyX3dvbiA6IGxhbmcgPT09ICdjbicgPyBzZXR0aW5nICYmIHNldHRpbmcuZGF0YSAmJiBzZXR0aW5nLmRhdGEuZXhjaGFuZ2VfZG9sbGFyX3JtYiA6IDE7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzeXN0ZW1bdHlwZV0udG90YWxMZW5ndGggPyBzeXN0ZW1bdHlwZV0udG90YWxMZW5ndGggOiAwOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgYnVmID0gc3lzdGVtW3R5cGVdLmRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGJ1ZikgcmVuZERhdGEucHVzaChidWYpO1xuICAgICAgICAgICAgZWxzZSByZW5kRGF0YS5wdXNoKFtdKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQge2NoYXJnZVNldHRpbmd9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjE1fX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTMgbWwtMCBtci0wIG1iLTUnIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgZmxleERpcmVjdGlvbjogJ3JvdycsIGRpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgICAgICAgICAgICB7Y2hhcmdlU2V0dGluZy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgZGlzcGxheTpcImZsZXhcIiwgd2lkdGg6JzEwMCUnfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1hdXRvIHAtMiBwb2ludF9jb2luX3ZpZXcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9Jycgc3JjPScuLi8uLi9zdGF0aWMvaW1nL2NvbW1vbi9wb2ludC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IDMwLCBoZWlnaHQ6IDMwfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMCBtbC0yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT57bWkucG9pbnQgPyBtaS5wb2ludCA6IDB9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGFyZ2UoKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0wIG1yLTAgYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbGV4RGlyZWN0aW9uOiAncm93JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGxlZC1hZG9ybm1lbnQtZXh0cmEtZGVuc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHttYXJnaW46IDEwLCBmbGV4QmFzaXM6IDIwMH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXhjaGFuZ2VDYXNoVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUlucHV0Q2FzaChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdhbW91bnQgaW4gRXVybycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4x4oKpPC9JbnB1dEFkb3JubWVudD4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSWNvbiBzdHlsZT17e2ZvbnRTaXplOiAzMH19Lz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxsZWQtYWRvcm5tZW50LWV4dHJhLWRlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCh7bWFyZ2luOiAxMCwgZmxleEJhc2lzOiAyMDB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmV4Y2hhbmdlUG9pbnRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdhbW91bnQgaW4gRXVybycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19sb2Rhc2guZmxvb3IoKHNldHRpbmcuZGF0YSYmc2V0dGluZy5kYXRhLmV4Y2hhbmdlX3JhdGVfcG9pbnQ/c2V0dGluZy5kYXRhLmV4Y2hhbmdlX3JhdGVfcG9pbnQ6MCkgKiAoc2V0dGluZy5kYXRhJiZzZXR0aW5nLmRhdGEuZXhjaGFuZ2VfcmF0ZV9jb2luP3NldHRpbmcuZGF0YS5leGNoYW5nZV9yYXRlX2NvaW46MCkgLyAoY2FzaF9yYXRlP2Nhc2hfcmF0ZToxKSwgMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PScnIHNyYz0nLi4vLi4vc3RhdGljL2ltZy9jb21tb24vcG9pbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6MjAsIGhlaWdodDoyMH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogMX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmV4Y2hhbmdlUG9pbnRWYWx1ZSB8fCB0aGlzLnN0YXRlLnJlcXVpcmVDaGFyZ2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnVuY0V4Y2hhbmdlQ2FzaDJQb2ludCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gcmVkIHBvaW50LWJ0biBtLTMgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ1BPSU5UT1VUJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb25UYWJsZVxuICAgICAgICAgICAgICAgICAgICBtaT17dGhpcy5wcm9wcy5taX1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dF90PXt0aGlzLnByb3BzLnR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgIG5vRGF0YVRleHQ9e3N5c3RlbVt0eXBlXS5zdGF0dXMgPT09IENPTlNULlNUQVRVU19SRVFfTk9NT1JFID8gdCgnTk9fREFUQScpIDogdCgnTE9BRElORycpfVxuICAgICAgICAgICAgICAgICAgICAvLyBnZXRIaXN0b3J5PXt0aGlzLnByb3BzLmdldEhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgIC8vIG1vZGVsU3RhdHVzPXtzeXN0ZW1bdHlwZV0uc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJEYXRhPXtzeXN0ZW1bdHlwZV0uZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgLy8gZXhpdERhdGFMZW5ndGg9e3N5c3RlbVt0eXBlXS5sZW5ndGggPyBzeXN0ZW1bdHlwZV0ubGVuZ3RoIDogMH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdG90YWxEYXRhQ250PXtzeXN0ZW1bdHlwZV0udG90YWxMZW5ndGggPyBzeXN0ZW1bdHlwZV0udG90YWxMZW5ndGggOiAwfVxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jTG9hZERhdGE9e3RoaXMuZnVuY0xvYWRIaXN0b3J5LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbFN0YXRlfSB0b2dnbGU9e3RoaXMub3Blbk1vZGFsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21vZGFsLXByaW1hcnkgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtbC0yIG1yLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTAnPnsoXCJDSEFSR0VTVUNDRVNTXCIpfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEZvb3RlciBjbGFzc05hbWU9J3AtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIG1yLTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PScnIHNyYz0nLi4vLi4vYXNzZXRzL2ltZy9jb21tb24vcG9pbnQucG5nJyBzdHlsZT17e3dpZHRoOiAyNX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtbC0yIG1iLTAnPnttaS5wb2ludH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nY29sLWF1dG8gcHQtMCBwYi0wIG1sLTMgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17e2JvcmRlclJhZGl1czogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nJyBzcmM9Jy4uLy4uL2Fzc2V0cy9pbWcvY29tbW9uL2NvaW4ucG5nJyBzdHlsZT17e3dpZHRoOiAzMCwgaGVpZ2h0OiAzMH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtYi0wJz57bWkuY29pbiA/IG1pLmNvaW4gOiAwfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpfT5PazwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyZ2VNb25leTtcbiJdLCJzb3VyY2VSb290IjoiIn0=