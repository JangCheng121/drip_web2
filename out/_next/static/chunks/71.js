(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[71],{

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

/***/ "./pages/profile/Exchange.js":
/*!***********************************!*\
  !*** ./pages/profile/Exchange.js ***!
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _model_DataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/DataService */ "./model/DataService.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_tool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/tool */ "./lib/tool.js");
/* harmony import */ var _redux_modules_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/modules/system */ "./redux/modules/system.js");
/* harmony import */ var _MaterialTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MaterialTable */ "./pages/profile/MaterialTable.js");
/* harmony import */ var _model_Const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../model/Const */ "./model/Const.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");






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
    key: "exchangeMoney",
    value: function exchangeMoney(money) {
      var exchangeMoney = this.props.exchangeMoney;
      this.toggle();
      exchangeMoney(money);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        dataItem = _this$props.dataItem,
        btnStr = _this$props.btnStr,
        containerStr = _this$props.containerStr,
        mi = _this$props.mi,
        state = _this$props.state,
        id = _this$props.id,
        cancelBtnStr = _this$props.cancelBtnStr,
        moneyStr = _this$props.moneyStr,
        btnState = _this$props.btnState;
      return __jsx("span", null, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "col-auto p-0 border-0",
        style: {
          borderRadius: 15,
          // minHeight: 200,
          boxShadow: '3px 5px 6px 0px #b8b8b8'
          // height: 250
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_23__["default"], {
        className: "p-0 money_bg_img"
      }, __jsx("img", {
        alt: "",
        className: "money_title_img",
        src: dataItem.img
      }), __jsx("h4", {
        className: "mb-0 col-auto money_exchange_title_text"
      }, dataItem.cash, " ", moneyStr), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        id: 'Popover-' + id,
        className: "money_exchange_title_button btn-brand align-items-center d-flex justify-content-center",
        onClick: function onClick(e) {
          _this2.toggle.bind(_this2, e);
        },
        disabled: dataItem.money > mi.coin || btnState
      }, __jsx("img", {
        alt: "",
        src: "../../static/img/common/coin.png",
        style: {
          width: 30,
          height: 30
        }
      }), __jsx("span", {
        className: "mb-0",
        style: {
          fontSize: 18
        }
      }, dataItem.money)), dataItem.money > mi.coin ? null : __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__["default"], {
        style: {
          padding: 5
        }
      }, __jsx("h3", {
        className: "pl-3 pt-2 mb-0"
      }, dataItem.money + state), __jsx("h3", {
        className: "p-3"
      }, containerStr), __jsx("div", {
        style: {
          flexDirection: 'row',
          justifyContent: "center"
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        variant: "outlined",
        color: "primary",
        style: {
          margin: 10
        },
        onClick: function onClick() {
          _this2.exchangeMoney(dataItem.money);
        },
        disabled: btnState
      }, btnStr), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        variant: "outlined",
        style: {
          margin: 10
        },
        color: "danger",
        onClick: function onClick() {
          _this2.toggle();
        }
      }, cancelBtnStr)))))));
    }
  }]);
  return PopoverItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
var Exchange = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Exchange, _Component2);
  function Exchange(props) {
    var _this3;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Exchange);
    _this3 = _callSuper(this, Exchange, [props]);
    vm = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3);
    _this3.state = {
      modalState: false,
      exchangeSetting: _model_DataService__WEBPACK_IMPORTED_MODULE_9__["dataService"].exchangeSetting,
      coinToPoint: false,
      btnDisable: false,
      fromExchangeCoin: 0,
      toExchangePoint: 0,
      requireExchangeState: false,
      exchangeCoin2Value: 0,
      exchange2CashValue: 0
    };
    var _this3$props = _this3.props,
      system = _this3$props.system,
      getHistory = _this3$props.getHistory,
      setting = _this3$props.setting,
      getSetting = _this3$props.getSetting;
    var model = system[_redux_modules_system__WEBPACK_IMPORTED_MODULE_12__["HIS_TYPE_EXCHANGE"]];
    if ((!model.data || !model.data.length) && model.status !== _model_Const__WEBPACK_IMPORTED_MODULE_14__["STATUS_REQ_START"] && model.status !== _model_Const__WEBPACK_IMPORTED_MODULE_14__["STATUS_REQ_NOMORE"]) {
      // getHistory(System.HIS_TYPE_EXCHANGE);
    }
    if (!setting || !setting.data || !setting.data.exchange_rate_point || !setting.data.exchange_rate_coin) {
      getSetting();
    }
    if (!_this3.state.exchangeSetting.length) {
      _model_DataService__WEBPACK_IMPORTED_MODULE_9__["dataService"].getChargeSet().then(function (response) {
        var chargeSet = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.sortBy(lodash__WEBPACK_IMPORTED_MODULE_8___default.a.filter(response, {
          type: 1
        }), ['cash']);
        var exchangeSet = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.sortBy(lodash__WEBPACK_IMPORTED_MODULE_8___default.a.filter(response, {
          type: 2
        }), ['cash']);
        _model_DataService__WEBPACK_IMPORTED_MODULE_9__["dataService"].chargeSetting = chargeSet;
        _model_DataService__WEBPACK_IMPORTED_MODULE_9__["dataService"].exchangeSetting = exchangeSet;
        vm.setState({
          exchangeSetting: exchangeSet
        });
      }, function (error) {
        console.log('get ChargeSet error');
      });
    }
    return _this3;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Exchange, [{
    key: "sendChangeState",
    value: function sendChangeState(settingId, coin, cash) {
      if (settingId === undefined || coin <= 0) return;
      this.setState({
        requireExchangeState: true
      });
      _model_DataService__WEBPACK_IMPORTED_MODULE_9__["dataService"].charge('coin', settingId, coin, cash).then(function (response) {
        vm.setState({
          requireExchangeState: false
        });
        vm.openModal();
        // alert('Charge success');
      })["catch"](function (error) {
        // vm.openModal();
        // alert('Charge fail');
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
    key: "funcClickCoinToPoint",
    value: function funcClickCoinToPoint() {
      this.setState({
        coinToPoint: !this.state.coinToPoint
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(target) {
      var data = this.props.setting.data,
        mi = this.props.mi;
      var value = target.value,
        invalid = !isNaN(value) ? false : true;
      if (!data.exchange_rate_point) return;
      if (invalid) return;
      if (target.name === 'coin2point') {
        if (value > mi.coin) {
          value = mi.coin;
        }
        var fromCoin = parseInt(value);
        var toPoint = fromCoin * data.exchange_rate_point;
        this.setState({
          fromExchangeCoin: fromCoin ? fromCoin : 0,
          toExchangePoint: toPoint ? toPoint : 0,
          btnDisable: toPoint ? true : false
        });
      } else if (target.name === 'coin2cash') {
        var _fromCoin = parseInt(value);
        if (_fromCoin > mi.coin) {
          _fromCoin = mi.coin;
        }
        var toCash = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.round(_fromCoin / data.exchange_rate_point / data.exchange_rate_coin, 2);
        this.setState({
          exchangeCoin2Value: _fromCoin ? _fromCoin : 0,
          exchange2CashValue: toCash ? toCash : 0
        });
      }
    }
  }, {
    key: "funcLoadMoreHistory",
    value: function funcLoadMoreHistory() {
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var loadType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _model_Const__WEBPACK_IMPORTED_MODULE_14__["LOAD_TYPE_INIT"];
      var _this$props2 = this.props,
        getHistory = _this$props2.getHistory,
        system = _this$props2.system;
      var type = _redux_modules_system__WEBPACK_IMPORTED_MODULE_12__["HIS_TYPE_EXCHANGE"];
      if (system[type] && system[type].status === _model_Const__WEBPACK_IMPORTED_MODULE_14__["STATUS_REQ_START"]) return;
      getHistory(type, loadType, filter, perPage);
    }
  }, {
    key: "funcExchangeCoinToPoint",
    value: function funcExchangeCoinToPoint() {
      var mi = this.props.mi;
      if (!this.state.toExchangePoint) return;
      if (this.state.fromExchangeCoin > mi.coin) {
        return;
      }
      this.setState({
        requireExchangeState: true
      });
      _model_DataService__WEBPACK_IMPORTED_MODULE_9__["dataService"].requestCoinToPoint(this.state.fromExchangeCoin, this.state.toExchangePoint).then(function (response) {
        vm.setState({
          fromExchangeCoin: 0,
          toExchangePoint: 0,
          coinToPoint: false,
          requireExchangeState: false
        });
      }, function (err) {});
    }
  }, {
    key: "funcExchangeCoin2Cash",
    value: function funcExchangeCoin2Cash() {
      var setting = this.props.setting;
      if (!this.state.exchangeCoin2Value || !this.state.exchange2CashValue || this.state.exchangeCoin2Value < setting.data.cash_out_from) {
        return;
      }
      this.setState({
        requireExchangeState: true
      });
      _model_DataService__WEBPACK_IMPORTED_MODULE_9__["dataService"].charge('coin', -1, this.state.exchangeCoin2Value, this.state.exchange2CashValue).then(function (response) {
        _model_DataService__WEBPACK_IMPORTED_MODULE_9__["dataService"].showNotification('success', 'Exchange success!!');
        vm.setState({
          exchangeCoin2Value: 0,
          exchange2CashValue: 0,
          requireExchangeState: false
        });
        vm.openModal();
      }, function (err) {});
    }
  }, {
    key: "renderCurrentCtime",
    value: function renderCurrentCtime(item, row) {
      return __jsx("span", null, item ? _lib_tool__WEBPACK_IMPORTED_MODULE_11__["getCurrentTime"](item, 'L') : '로드중');
    }
  }, {
    key: "renderTableProState",
    value: function renderTableProState(item, row) {
      var viewStates = {
        "done": '결산됨',
        "pending": '대기중'
      };
      return __jsx("span", null, viewStates[item]);
    }
  }, {
    key: "renderExchange",
    value: function renderExchange(exchangeSetting) {
      var _this4 = this;
      var mi = this.props.mi;
      return __jsx("div", {
        style: {
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 5,
          display: "flex"
        }
      }, exchangeSetting.map(function (dataItem, index) {
        return __jsx("div", {
          key: index,
          style: {
            minWidth: 200,
            flexDirection: "column",
            display: 'flex'
          },
          className: "col-md-2 col-sm-3"
        }, __jsx(PopoverItem, {
          btnState: _this4.state.requireExchangeState,
          state: '금화',
          dataItem: dataItem,
          btnStr: '환전',
          mi: mi,
          exchangeMoney: function exchangeMoney() {
            _this4.sendChangeState(dataItem.id, dataItem.money, dataItem.cash);
          },
          containerStr: "ISTOEXCHANGE",
          key: index,
          item: {
            placement: 'right',
            text: 'Right'
          },
          id: index,
          cancelBtnStr: '취소',
          moneyStr: '₩'
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var rendData = [],
        _this$props3 = this.props,
        mi = _this$props3.mi,
        system = _this$props3.system,
        setting = _this$props3.setting,
        t = _this$props3.t;
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
        } // Custom cell components!
      }, {
        title: t("CASH"),
        field: 'cash'
      }, {
        title: t("POINT"),
        // Custom header components!
        field: 'money'
      }
      /*{
          Header: this.context.t("INCOMSTATE"), // Custom header components!
          accessor: 'state',
          Cell: props => <span className='number'>{this.renderTableProState(props.value)}</span>,
          className:'table_text_align_center',
      }*/];
      var type = _redux_modules_system__WEBPACK_IMPORTED_MODULE_12__["HIS_TYPE_EXCHANGE"];
      for (var index = 0; index < system[type].totalLength ? system[type].totalLength : 0; index++) {
        var buf = system[type].data[index];
        if (buf) rendData.push(buf);else rendData.push([]);
      }
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
      }, __jsx("div", {
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
        src: "../../static/img/common/coin.png",
        style: {
          width: 30,
          height: 30
        }
      }), __jsx("h4", {
        className: "mb-0 ml-2",
        style: {
          color: 'white'
        }
      }, mi.coin ? mi.coin : 0))))), __jsx("span", null, t('EXCHANGE_ENABLE_ALERT', {
        coin: setting.data && setting.data.cash_out_from ? setting.data.cash_out_from : 1000
      })), __jsx("div", {
        style: {
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center'
        }
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "filled-adornment-extra-dense",
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])({
          margin: 10,
          flexBasis: 200
        }),
        variant: "filled",
        margin: "dense",
        hiddenLabel: true,
        name: "coin2cash",
        value: this.state.exchangeCoin2Value,
        onChange: function onChange(e) {
          _this5.handleInputChange(e.target);
        },
        InputProps: {
          inputProps: {
            'aria-label': 'amount in Euro'
          },
          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__["default"], {
            position: "start"
          }, "1", __jsx("img", {
            alt: "",
            src: "../../static/img/common/coin.png",
            style: {
              width: 20,
              height: 20
            }
          }))
        }
      }), __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_18___default.a, {
        style: {
          fontSize: 30
        }
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "filled-adornment-extra-dense",
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])({
          margin: 10,
          flexBasis: 200
        }),
        variant: "filled",
        margin: "dense",
        hiddenLabel: true,
        value: this.state.exchange2CashValue,
        disabled: true,
        InputProps: {
          inputProps: {
            'aria-label': 'amount in Euro'
          },
          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__["default"], {
            position: "start"
          }, lodash__WEBPACK_IMPORTED_MODULE_8___default.a.round(1 / (setting.data && setting.data.exchange_rate_point ? setting.data.exchange_rate_point : 1) / (setting.data && setting.data.exchange_rate_coin ? setting.data.exchange_rate_coin : 1), 2), "\u20A9")
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        variant: "outlined",
        color: "primary",
        style: {
          margin: 1
        },
        disabled: this.state.exchangeCoin2Value < (setting.data && setting.data.cash_out_from ? setting.data.cash_out_from : 1000) || this.state.requireExchangeState,
        onClick: function onClick() {
          _this5.funcExchangeCoin2Cash();
        },
        className: "btn red point-btn m-3 "
      }, t('POINTOUT'))), __jsx("div", {
        style: {
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center'
        }
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "filled-adornment-extra-dense",
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])({
          margin: 10,
          flexBasis: 200
        }),
        variant: "filled",
        margin: "dense",
        hiddenLabel: true,
        name: "coin2point",
        value: this.state.fromExchangeCoin,
        onChange: function onChange(e) {
          _this5.handleInputChange(e.target);
        },
        InputProps: {
          inputProps: {
            'aria-label': 'amount in Euro'
          },
          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__["default"], {
            position: "start"
          }, "1", __jsx("img", {
            alt: "",
            src: "../../static/img/common/coin.png",
            style: {
              width: 20,
              height: 20
            }
          }))
        }
      }), __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_18___default.a, {
        style: {
          fontSize: 30
        }
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "filled-adornment-extra-dense",
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])({
          margin: 10,
          flexBasis: 200
        }),
        variant: "filled",
        margin: "dense",
        hiddenLabel: true,
        value: this.state.toExchangePoint,
        disabled: true,
        InputProps: {
          inputProps: {
            'aria-label': 'amount in Euro'
          },
          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__["default"], {
            position: "start"
          }, setting.data && setting.data.exchange_rate_point ? setting.data.exchange_rate_point : 1, __jsx("img", {
            alt: "",
            src: "../../static/img/common/point.png",
            style: {
              width: 20,
              height: 20
            }
          }))
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        variant: "outlined",
        color: "primary",
        style: {
          margin: 1
        },
        disabled: !this.state.btnDisable,
        onClick: function onClick() {
          _this5.funcExchangeCoinToPoint();
        },
        className: "btn red point-btn m-3 "
      }, t('POINTOUT'))), __jsx(_MaterialTable__WEBPACK_IMPORTED_MODULE_13__["default"], {
        mi: this.props.mi,
        context_t: this.props.t,
        getHistory: this.props.getHistory,
        type: type,
        noDataText: system[type].status === _model_Const__WEBPACK_IMPORTED_MODULE_14__["STATUS_REQ_NOMORE"] ? t('NO_DATA') : t('LOADING'),
        columns: columns
        // modelStatus={system[type].status}
        // renderData={rendData?rendData:[]}
        // exitDataLength={system[type].length?system[type].length:0}
        // totalDataCnt={system[type].totalLength?system[type].totalLength:0}
        // funcLoadData={this.funcLoadMoreHistory.bind(this)}
      }));
    }
  }]);
  return Exchange;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Exchange);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUvRXhjaGFuZ2UuanMiXSwibmFtZXMiOlsidm0iLCJQb3BvdmVySXRlbSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsInRvZ2dsZSIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic3RhdGUiLCJwb3BvdmVyT3BlbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZSIsImFuY2hvckVsIiwiY3VycmVudFRhcmdldCIsInNldFN0YXRlIiwiZXhjaGFuZ2VNb25leSIsIm1vbmV5IiwicmVuZGVyIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJkYXRhSXRlbSIsImJ0blN0ciIsImNvbnRhaW5lclN0ciIsIm1pIiwiaWQiLCJjYW5jZWxCdG5TdHIiLCJtb25leVN0ciIsImJ0blN0YXRlIiwiX19qc3giLCJDYXJkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJDYXJkQ29udGVudCIsImFsdCIsInNyYyIsImltZyIsImNhc2giLCJCdXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjb2luIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsIlBvcG92ZXIiLCJvcGVuIiwib25DbG9zZSIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zZm9ybU9yaWdpbiIsIlR5cG9ncmFwaHkiLCJwYWRkaW5nIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwidmFyaWFudCIsImNvbG9yIiwibWFyZ2luIiwiQ29tcG9uZW50IiwiRXhjaGFuZ2UiLCJfQ29tcG9uZW50MiIsIl90aGlzMyIsIm1vZGFsU3RhdGUiLCJleGNoYW5nZVNldHRpbmciLCJkYXRhU2VydmljZSIsImNvaW5Ub1BvaW50IiwiYnRuRGlzYWJsZSIsImZyb21FeGNoYW5nZUNvaW4iLCJ0b0V4Y2hhbmdlUG9pbnQiLCJyZXF1aXJlRXhjaGFuZ2VTdGF0ZSIsImV4Y2hhbmdlQ29pbjJWYWx1ZSIsImV4Y2hhbmdlMkNhc2hWYWx1ZSIsIl90aGlzMyRwcm9wcyIsInN5c3RlbSIsImdldEhpc3RvcnkiLCJzZXR0aW5nIiwiZ2V0U2V0dGluZyIsIm1vZGVsIiwiU3lzdGVtIiwiZGF0YSIsImxlbmd0aCIsInN0YXR1cyIsIkNPTlNUIiwiZXhjaGFuZ2VfcmF0ZV9wb2ludCIsImV4Y2hhbmdlX3JhdGVfY29pbiIsImdldENoYXJnZVNldCIsInRoZW4iLCJyZXNwb25zZSIsImNoYXJnZVNldCIsIl9sb2Rhc2giLCJzb3J0QnkiLCJmaWx0ZXIiLCJ0eXBlIiwiZXhjaGFuZ2VTZXQiLCJjaGFyZ2VTZXR0aW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VuZENoYW5nZVN0YXRlIiwic2V0dGluZ0lkIiwidW5kZWZpbmVkIiwiY2hhcmdlIiwib3Blbk1vZGFsIiwiZnVuY0NsaWNrQ29pblRvUG9pbnQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsImludmFsaWQiLCJpc05hTiIsIm5hbWUiLCJmcm9tQ29pbiIsInBhcnNlSW50IiwidG9Qb2ludCIsInRvQ2FzaCIsInJvdW5kIiwiZnVuY0xvYWRNb3JlSGlzdG9yeSIsImFyZ3VtZW50cyIsInBlclBhZ2UiLCJsb2FkVHlwZSIsIl90aGlzJHByb3BzMiIsImZ1bmNFeGNoYW5nZUNvaW5Ub1BvaW50IiwicmVxdWVzdENvaW5Ub1BvaW50IiwiZXJyIiwiZnVuY0V4Y2hhbmdlQ29pbjJDYXNoIiwiY2FzaF9vdXRfZnJvbSIsInNob3dOb3RpZmljYXRpb24iLCJyZW5kZXJDdXJyZW50Q3RpbWUiLCJpdGVtIiwicm93IiwiVG9vbHMiLCJyZW5kZXJUYWJsZVByb1N0YXRlIiwidmlld1N0YXRlcyIsInJlbmRlckV4Y2hhbmdlIiwiX3RoaXM0IiwibWFyZ2luVG9wIiwiZGlzcGxheSIsIm1hcCIsImluZGV4IiwibWluV2lkdGgiLCJwbGFjZW1lbnQiLCJ0ZXh0IiwiX3RoaXM1IiwicmVuZERhdGEiLCJfdGhpcyRwcm9wczMiLCJ0IiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJjdGltZSIsInV0aW1lIiwidG90YWxMZW5ndGgiLCJidWYiLCJwdXNoIiwiYWxpZ25JdGVtcyIsIlRleHRGaWVsZCIsImNsc3giLCJmbGV4QmFzaXMiLCJoaWRkZW5MYWJlbCIsIm9uQ2hhbmdlIiwiSW5wdXRQcm9wcyIsImlucHV0UHJvcHMiLCJzdGFydEFkb3JubWVudCIsIklucHV0QWRvcm5tZW50IiwicG9zaXRpb24iLCJBcnJvd0ZvcndhcmRJY29uIiwiUGFnaW5hdGlvblRhYmxlIiwiY29udGV4dF90Iiwibm9EYXRhVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnVDO0FBQ0w7QUFDTjtBQUN3QjtBQUNqQjtBQUNLO0FBQ2E7QUFDUDtBQUNIO0FBQ1M7QUFDNUI7QUFDc0M7QUFDQztBQUNsQjtBQUNTO0FBQ047QUFDTjtBQUNjO0FBRXhELElBQUlBLEVBQUUsR0FBRyxJQUFJO0FBQUMsSUFFUkMsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxtRkFBQSxDQUFBRixXQUFBLEVBQUFDLFVBQUE7RUFDYixTQUFBRCxZQUFZRyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLHlGQUFB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QUFDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOHpcIlxufSksICdBcnJvd0ZvcndhcmQnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uLy4uL3N0YXRpYy9jc3MvbWluZS5jc3MnXG5pbXBvcnQgX2xvZGFzaCBmcm9tICdsb2Rhc2gnXG5pbXBvcnQge2RhdGFTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbW9kZWwvRGF0YVNlcnZpY2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCAqIGFzIFRvb2xzIGZyb20gXCIuLi8uLi9saWIvdG9vbFwiO1xuaW1wb3J0ICogYXMgU3lzdGVtIGZyb20gXCIuLi8uLi9yZWR1eC9tb2R1bGVzL3N5c3RlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb25UYWJsZSBmcm9tICcuL01hdGVyaWFsVGFibGUnO1xuaW1wb3J0ICogYXMgQ09OU1QgZnJvbSBcIi4uLy4uL21vZGVsL0NvbnN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBQb3BvdmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCI7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5cbmxldCB2bSA9IG51bGw7XG5cbmNsYXNzIFBvcG92ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcG9wb3Zlck9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRvZ2dsZShlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB0aGlzLmFuY2hvckVsID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcG9wb3Zlck9wZW46ICF0aGlzLnN0YXRlLnBvcG92ZXJPcGVuLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZXhjaGFuZ2VNb25leShtb25leSkge1xuICAgICAgICBjb25zdCB7ZXhjaGFuZ2VNb25leX0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICBleGNoYW5nZU1vbmV5KG1vbmV5KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhSXRlbSwgYnRuU3RyLCBjb250YWluZXJTdHIsIG1pLCBzdGF0ZSwgaWQsIGNhbmNlbEJ0blN0ciwgbW9uZXlTdHIsIGJ0blN0YXRlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2NvbC1hdXRvIHAtMCBib3JkZXItMCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW5IZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnM3B4IDVweCA2cHggMHB4ICNiOGI4YjgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDI1MFxuXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9J3AtMCBtb25leV9iZ19pbWcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9JycgY2xhc3NOYW1lPSdtb25leV90aXRsZV9pbWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YUl0ZW0uaW1nfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0wIGNvbC1hdXRvIG1vbmV5X2V4Y2hhbmdlX3RpdGxlX3RleHQnPntkYXRhSXRlbS5jYXNofSB7bW9uZXlTdHJ9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9eydQb3BvdmVyLScgKyBpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtb25leV9leGNoYW5nZV90aXRsZV9idXR0b24gYnRuLWJyYW5kIGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIGUpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RhdGFJdGVtLm1vbmV5ID4gbWkuY29pbiB8fCBidG5TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nJyBzcmM9Jy4uLy4uL3N0YXRpYy9pbWcvY29tbW9uL2NvaW4ucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMzAsIGhlaWdodDogMzB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYi0wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IDE4fX0+e2RhdGFJdGVtLm1vbmV5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFJdGVtLm1vbmV5ID4gbWkuY29pbiA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIG9wZW49e3RoaXMuc3RhdGUucG9wb3Zlck9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMuYW5jaG9yRWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLnRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3twYWRkaW5nOiA1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdwbC0zIHB0LTIgbWItMCc+e2RhdGFJdGVtLm1vbmV5ICsgc3RhdGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3AtMyc+e2NvbnRhaW5lclN0cn08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J3JvdycsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLmV4Y2hhbmdlTW9uZXkoZGF0YUl0ZW0ubW9uZXkpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidG5TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidG5TdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e21hcmdpbjogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2RhbmdlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLnRvZ2dsZSgpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxCdG5TdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBFeGNoYW5nZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHZtID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vZGFsU3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgZXhjaGFuZ2VTZXR0aW5nOiBkYXRhU2VydmljZS5leGNoYW5nZVNldHRpbmcsXG4gICAgICAgICAgICBjb2luVG9Qb2ludDogZmFsc2UsXG4gICAgICAgICAgICBidG5EaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZyb21FeGNoYW5nZUNvaW46IDAsXG4gICAgICAgICAgICB0b0V4Y2hhbmdlUG9pbnQ6IDAsXG5cbiAgICAgICAgICAgIHJlcXVpcmVFeGNoYW5nZVN0YXRlIDogZmFsc2UsXG5cbiAgICAgICAgICAgIGV4Y2hhbmdlQ29pbjJWYWx1ZSA6IDAsXG4gICAgICAgICAgICBleGNoYW5nZTJDYXNoVmFsdWUgOiAwLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7c3lzdGVtLCBnZXRIaXN0b3J5LCBzZXR0aW5nLCBnZXRTZXR0aW5nfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBtb2RlbCA9IHN5c3RlbVtTeXN0ZW0uSElTX1RZUEVfRVhDSEFOR0VdO1xuICAgICAgICBpZiAoKCFtb2RlbC5kYXRhIHx8ICFtb2RlbC5kYXRhLmxlbmd0aCkgJiYgbW9kZWwuc3RhdHVzICE9PSBDT05TVC5TVEFUVVNfUkVRX1NUQVJUICYmIG1vZGVsLnN0YXR1cyAhPT0gQ09OU1QuU1RBVFVTX1JFUV9OT01PUkUpIHtcbiAgICAgICAgICAgIC8vIGdldEhpc3RvcnkoU3lzdGVtLkhJU19UWVBFX0VYQ0hBTkdFKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNldHRpbmcgfHwgIXNldHRpbmcuZGF0YSB8fCAhc2V0dGluZy5kYXRhLmV4Y2hhbmdlX3JhdGVfcG9pbnQgfHwgIXNldHRpbmcuZGF0YS5leGNoYW5nZV9yYXRlX2NvaW4pIHtcbiAgICAgICAgICAgIGdldFNldHRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXhjaGFuZ2VTZXR0aW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Q2hhcmdlU2V0KCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJnZVNldCA9IF9sb2Rhc2guc29ydEJ5KF9sb2Rhc2guZmlsdGVyKHJlc3BvbnNlLCB7dHlwZTogMX0pLCBbJ2Nhc2gnXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBleGNoYW5nZVNldCA9IF9sb2Rhc2guc29ydEJ5KF9sb2Rhc2guZmlsdGVyKHJlc3BvbnNlLCB7dHlwZTogMn0pLCBbJ2Nhc2gnXSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmNoYXJnZVNldHRpbmcgPSBjaGFyZ2VTZXQ7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmV4Y2hhbmdlU2V0dGluZyA9IGV4Y2hhbmdlU2V0O1xuICAgICAgICAgICAgICAgICAgICB2bS5zZXRTdGF0ZSh7ZXhjaGFuZ2VTZXR0aW5nOiBleGNoYW5nZVNldH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgQ2hhcmdlU2V0IGVycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZENoYW5nZVN0YXRlKHNldHRpbmdJZCwgY29pbiwgY2FzaCkge1xuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSB1bmRlZmluZWQgfHwgY29pbiA8PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlcXVpcmVFeGNoYW5nZVN0YXRlOnRydWV9KTtcbiAgICAgICAgZGF0YVNlcnZpY2UuY2hhcmdlKCdjb2luJywgc2V0dGluZ0lkLCBjb2luLCBjYXNoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uc2V0U3RhdGUoe3JlcXVpcmVFeGNoYW5nZVN0YXRlOmZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdm0ub3Blbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ0NoYXJnZSBzdWNjZXNzJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHZtLm9wZW5Nb2RhbCgpO1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdDaGFyZ2UgZmFpbCcpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsU3RhdGU6ICF0aGlzLnN0YXRlLm1vZGFsU3RhdGV9KTtcbiAgICB9XG5cbiAgICBmdW5jQ2xpY2tDb2luVG9Qb2ludCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29pblRvUG9pbnQ6IXRoaXMuc3RhdGUuY29pblRvUG9pbnR9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gdGhpcy5wcm9wcy5zZXR0aW5nLCB7bWl9PXRoaXMucHJvcHM7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIGludmFsaWQgPSAhaXNOYU4odmFsdWUpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBpZiAoIWRhdGEuZXhjaGFuZ2VfcmF0ZV9wb2ludCkgcmV0dXJuO1xuICAgICAgICBpZiAoaW52YWxpZCkgcmV0dXJuO1xuICAgICAgICBpZiAodGFyZ2V0Lm5hbWUgPT09ICdjb2luMnBvaW50Jykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gbWkuY29pbikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbWkuY29pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmcm9tQ29pbiA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgICAgIGxldCB0b1BvaW50ID0gZnJvbUNvaW4gKiBkYXRhLmV4Y2hhbmdlX3JhdGVfcG9pbnQ7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tRXhjaGFuZ2VDb2luOiBmcm9tQ29pbj9mcm9tQ29pbjowLCB0b0V4Y2hhbmdlUG9pbnQ6dG9Qb2ludD90b1BvaW50OjAsIGJ0bkRpc2FibGU6dG9Qb2ludD90cnVlOmZhbHNlfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT09ICdjb2luMmNhc2gnKSB7XG4gICAgICAgICAgICBsZXQgZnJvbUNvaW4gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZnJvbUNvaW4gPiBtaS5jb2luKSB7XG4gICAgICAgICAgICAgICAgZnJvbUNvaW4gPSBtaS5jb2luO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRvQ2FzaCA9IF9sb2Rhc2gucm91bmQoZnJvbUNvaW4gLyBkYXRhLmV4Y2hhbmdlX3JhdGVfcG9pbnQgLyBkYXRhLmV4Y2hhbmdlX3JhdGVfY29pbiwgMik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleGNoYW5nZUNvaW4yVmFsdWU6IGZyb21Db2luP2Zyb21Db2luOjAsIGV4Y2hhbmdlMkNhc2hWYWx1ZTp0b0Nhc2g/dG9DYXNoOjB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmNMb2FkTW9yZUhpc3RvcnkoZmlsdGVyPXt9LCBwZXJQYWdlPTEwLCBsb2FkVHlwZT1DT05TVC5MT0FEX1RZUEVfSU5JVCkge1xuICAgICAgICBjb25zdCB7Z2V0SGlzdG9yeSwgc3lzdGVtfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB0eXBlID0gU3lzdGVtLkhJU19UWVBFX0VYQ0hBTkdFO1xuICAgICAgICBpZiAoc3lzdGVtW3R5cGVdICYmIHN5c3RlbVt0eXBlXS5zdGF0dXMgPT09IENPTlNULlNUQVRVU19SRVFfU1RBUlQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGdldEhpc3RvcnkodHlwZSwgbG9hZFR5cGUsIGZpbHRlciwgcGVyUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY0V4Y2hhbmdlQ29pblRvUG9pbnQoKSB7XG4gICAgICAgIGNvbnN0IHttaX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG9FeGNoYW5nZVBvaW50KSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZyb21FeGNoYW5nZUNvaW4gPiBtaS5jb2luKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVxdWlyZUV4Y2hhbmdlU3RhdGU6dHJ1ZX0pO1xuICAgICAgICBkYXRhU2VydmljZS5yZXF1ZXN0Q29pblRvUG9pbnQodGhpcy5zdGF0ZS5mcm9tRXhjaGFuZ2VDb2luLCB0aGlzLnN0YXRlLnRvRXhjaGFuZ2VQb2ludCkudGhlbihcbiAgICAgICAgICAgIChyZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICB2bS5zZXRTdGF0ZSh7ZnJvbUV4Y2hhbmdlQ29pbjowLCB0b0V4Y2hhbmdlUG9pbnQ6MCwgY29pblRvUG9pbnQ6ZmFsc2UsIHJlcXVpcmVFeGNoYW5nZVN0YXRlOmZhbHNlfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jRXhjaGFuZ2VDb2luMkNhc2goKSB7XG4gICAgICAgIGNvbnN0IHtzZXR0aW5nfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5leGNoYW5nZUNvaW4yVmFsdWUgfHwgIXRoaXMuc3RhdGUuZXhjaGFuZ2UyQ2FzaFZhbHVlIHx8IHRoaXMuc3RhdGUuZXhjaGFuZ2VDb2luMlZhbHVlIDwgc2V0dGluZy5kYXRhLmNhc2hfb3V0X2Zyb20pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXF1aXJlRXhjaGFuZ2VTdGF0ZTp0cnVlfSk7XG4gICAgICAgIGRhdGFTZXJ2aWNlLmNoYXJnZSgnY29pbicsLTEsIHRoaXMuc3RhdGUuZXhjaGFuZ2VDb2luMlZhbHVlLCB0aGlzLnN0YXRlLmV4Y2hhbmdlMkNhc2hWYWx1ZSkudGhlbihcbiAgICAgICAgICAgIChyZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgJ0V4Y2hhbmdlIHN1Y2Nlc3MhIScpO1xuICAgICAgICAgICAgICAgIHZtLnNldFN0YXRlKHtleGNoYW5nZUNvaW4yVmFsdWU6MCwgZXhjaGFuZ2UyQ2FzaFZhbHVlOjAsIHJlcXVpcmVFeGNoYW5nZVN0YXRlOmZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdm0ub3Blbk1vZGFsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXJDdXJyZW50Q3RpbWUoaXRlbSwgcm93KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj57aXRlbT9Ub29scy5nZXRDdXJyZW50VGltZShpdGVtLCAnTCcpOign66Gc65Oc7KSRJyl9PC9zcGFuPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyVGFibGVQcm9TdGF0ZShpdGVtLCByb3cpIHtcbiAgICAgICAgY29uc3Qgdmlld1N0YXRlcyA9IHtcbiAgICAgICAgICAgIFwiZG9uZVwiIDogKCfqsrDsgrDrkKgnKSxcbiAgICAgICAgICAgIFwicGVuZGluZ1wiIDogKCfrjIDquLDspJEnKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt2aWV3U3RhdGVzW2l0ZW1dfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyRXhjaGFuZ2UoZXhjaGFuZ2VTZXR0aW5nKSB7XG4gICAgICAgIGNvbnN0IHttaX0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246XCJyb3dcIiwganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIiwgbWFyZ2luVG9wOjUsIGRpc3BsYXk6XCJmbGV4XCJ9fSA+XG4gICAgICAgICAgICAgICAge2V4Y2hhbmdlU2V0dGluZy5tYXAoKGRhdGFJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17e21pbldpZHRoOiAyMDAsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgZGlzcGxheTonZmxleCd9fSBjbGFzc05hbWU9J2NvbC1tZC0yIGNvbC1zbS0zJz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVySXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5TdGF0ZT17dGhpcy5zdGF0ZS5yZXF1aXJlRXhjaGFuZ2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9eygn6riI7ZmUJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJdGVtPXtkYXRhSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuU3RyPXsoJ+2ZmOyghCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaT17bWl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2hhbmdlTW9uZXk9eygpPT57dGhpcy5zZW5kQ2hhbmdlU3RhdGUoZGF0YUl0ZW0uaWQsIGRhdGFJdGVtLm1vbmV5LCBkYXRhSXRlbS5jYXNoKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0cj17KFwiSVNUT0VYQ0hBTkdFXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBpdGVtPXt7cGxhY2VtZW50OiAncmlnaHQnLCB0ZXh0OiAnUmlnaHQnLH19IGlkPXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnRuU3RyPXsoJ+y3qOyGjCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25leVN0cj17KCfigqknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCByZW5kRGF0YSA9IFtdLCB7bWksIHN5c3RlbSwgc2V0dGluZywgdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0KFwiUkVRVUVTVERBVEVcIiksXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdjdGltZScsIC8vIFN0cmluZy1iYXNlZCB2YWx1ZSBhY2Nlc3NvcnMhXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBwcm9wcyA9PiAodGhpcy5yZW5kZXJDdXJyZW50Q3RpbWUocHJvcHMuY3RpbWUpKSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdChcIlJFU1BPTlNFREFURVwiKSxcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3V0aW1lJyxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHByb3BzID0+ICh0aGlzLnJlbmRlckN1cnJlbnRDdGltZShwcm9wcy51dGltZSkpLCAvLyBDdXN0b20gY2VsbCBjb21wb25lbnRzIVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0KFwiQ0FTSFwiKSxcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2Nhc2gnLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0KFwiUE9JTlRcIiksIC8vIEN1c3RvbSBoZWFkZXIgY29tcG9uZW50cyFcbiAgICAgICAgICAgICAgICBmaWVsZDogJ21vbmV5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKntcbiAgICAgICAgICAgICAgICBIZWFkZXI6IHRoaXMuY29udGV4dC50KFwiSU5DT01TVEFURVwiKSwgLy8gQ3VzdG9tIGhlYWRlciBjb21wb25lbnRzIVxuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAnc3RhdGUnLFxuICAgICAgICAgICAgICAgIENlbGw6IHByb3BzID0+IDxzcGFuIGNsYXNzTmFtZT0nbnVtYmVyJz57dGhpcy5yZW5kZXJUYWJsZVByb1N0YXRlKHByb3BzLnZhbHVlKX08L3NwYW4+LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTondGFibGVfdGV4dF9hbGlnbl9jZW50ZXInLFxuICAgICAgICAgICAgfSovXG4gICAgICAgIF07XG4gICAgICAgIGxldCB0eXBlID0gU3lzdGVtLkhJU19UWVBFX0VYQ0hBTkdFO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3lzdGVtW3R5cGVdLnRvdGFsTGVuZ3RoP3N5c3RlbVt0eXBlXS50b3RhbExlbmd0aDowOyBpbmRleCArKykge1xuICAgICAgICAgICAgbGV0IGJ1ZiA9IHN5c3RlbVt0eXBlXS5kYXRhW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChidWYpIHJlbmREYXRhLnB1c2goYnVmKTtcbiAgICAgICAgICAgIGVsc2UgcmVuZERhdGEucHVzaChbXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjE1fX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTMgbWwtMCBtci0wIG1iLTUnIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgZmxleERpcmVjdGlvbjogJ3JvdycsIGRpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgICAgICAgICAgICB7Lyp7Y2hhcmdlU2V0dGluZy5sZW5ndGggPyovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgZGlzcGxheTpcImZsZXhcIiwgd2lkdGg6JzEwMCUnfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1hdXRvIHAtMiBwb2ludF9jb2luX3ZpZXcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9Jycgc3JjPScuLi8uLi9zdGF0aWMvaW1nL2NvbW1vbi9jb2luLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMzAsIGhlaWdodDogMzB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0wIG1sLTInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PnttaS5jb2luID8gbWkuY29pbiA6IDB9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjogbnVsbCovfVxuICAgICAgICAgICAgICAgICAgICB7Lyp9Ki99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8q6riI7ZmUIC0+IO2YhOq4iCovfVxuICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdFWENIQU5HRV9FTkFCTEVfQUxFUlQnLCB7Y29pbiA6IHNldHRpbmcuZGF0YSYmc2V0dGluZy5kYXRhLmNhc2hfb3V0X2Zyb20/c2V0dGluZy5kYXRhLmNhc2hfb3V0X2Zyb206MTAwMH0pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleERpcmVjdGlvbjogJ3JvdycsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxsZWQtYWRvcm5tZW50LWV4dHJhLWRlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCh7bWFyZ2luOiAxMCwgZmxleEJhc2lzOiAyMDB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2luMmNhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXhjaGFuZ2VDb2luMlZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZS50YXJnZXQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Ftb3VudCBpbiBFdXJvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PScnIHNyYz0nLi4vLi4vc3RhdGljL2ltZy9jb21tb24vY29pbi5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDoyMCwgaGVpZ2h0OjIwfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZEljb24gc3R5bGU9e3tmb250U2l6ZTogMzB9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsbGVkLWFkb3JubWVudC1leHRyYS1kZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goe21hcmdpbjogMTAsIGZsZXhCYXNpczogMjAwfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbkxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5leGNoYW5nZTJDYXNoVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnYW1vdW50IGluIEV1cm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfbG9kYXNoLnJvdW5kKDEvKHNldHRpbmcuZGF0YSYmc2V0dGluZy5kYXRhLmV4Y2hhbmdlX3JhdGVfcG9pbnQ/c2V0dGluZy5kYXRhLmV4Y2hhbmdlX3JhdGVfcG9pbnQ6MSkgLyAoc2V0dGluZy5kYXRhJiZzZXR0aW5nLmRhdGEuZXhjaGFuZ2VfcmF0ZV9jb2luP3NldHRpbmcuZGF0YS5leGNoYW5nZV9yYXRlX2NvaW46MSksIDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigqlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogMX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZXhjaGFuZ2VDb2luMlZhbHVlIDwgKHNldHRpbmcuZGF0YSYmc2V0dGluZy5kYXRhLmNhc2hfb3V0X2Zyb20/c2V0dGluZy5kYXRhLmNhc2hfb3V0X2Zyb206MTAwMCkgfHwgdGhpcy5zdGF0ZS5yZXF1aXJlRXhjaGFuZ2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuZnVuY0V4Y2hhbmdlQ29pbjJDYXNoKCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biByZWQgcG9pbnQtYnRuIG0tMyBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnUE9JTlRPVVQnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8q6riI7ZmUIC0+IO2PrOyduO2KuCovfVxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4RGlyZWN0aW9uOiAncm93JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGxlZC1hZG9ybm1lbnQtZXh0cmEtZGVuc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHttYXJnaW46IDEwLCBmbGV4QmFzaXM6IDIwMH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvaW4ycG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZnJvbUV4Y2hhbmdlQ29pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9Pnt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUudGFyZ2V0KX19XG4gICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdhbW91bnQgaW4gRXVybycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nJyBzcmM9Jy4uLy4uL3N0YXRpYy9pbWcvY29tbW9uL2NvaW4ucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6MjAsIGhlaWdodDoyMH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJY29uIHN0eWxlPXt7Zm9udFNpemU6IDMwfX0vPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGxlZC1hZG9ybm1lbnQtZXh0cmEtZGVuc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHttYXJnaW46IDEwLCBmbGV4QmFzaXM6IDIwMH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG9FeGNoYW5nZVBvaW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Ftb3VudCBpbiBFdXJvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZy5kYXRhJiZzZXR0aW5nLmRhdGEuZXhjaGFuZ2VfcmF0ZV9wb2ludD9zZXR0aW5nLmRhdGEuZXhjaGFuZ2VfcmF0ZV9wb2ludDoxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nJyBzcmM9Jy4uLy4uL3N0YXRpYy9pbWcvY29tbW9uL3BvaW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOjIwLCBoZWlnaHQ6MjB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5idG5EaXNhYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5mdW5jRXhjaGFuZ2VDb2luVG9Qb2ludCgpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gcmVkIHBvaW50LWJ0biBtLTMgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ1BPSU5UT1VUJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb25UYWJsZVxuICAgICAgICAgICAgICAgICAgICBtaT17dGhpcy5wcm9wcy5taX1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dF90PXt0aGlzLnByb3BzLnR9XG4gICAgICAgICAgICAgICAgICAgIGdldEhpc3Rvcnk9e3RoaXMucHJvcHMuZ2V0SGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhVGV4dD17c3lzdGVtW3R5cGVdLnN0YXR1cz09PUNPTlNULlNUQVRVU19SRVFfTk9NT1JFP3QoJ05PX0RBVEEnKSA6IHQoJ0xPQURJTkcnKX1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgLy8gbW9kZWxTdGF0dXM9e3N5c3RlbVt0eXBlXS5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlckRhdGE9e3JlbmREYXRhP3JlbmREYXRhOltdfVxuICAgICAgICAgICAgICAgICAgICAvLyBleGl0RGF0YUxlbmd0aD17c3lzdGVtW3R5cGVdLmxlbmd0aD9zeXN0ZW1bdHlwZV0ubGVuZ3RoOjB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvdGFsRGF0YUNudD17c3lzdGVtW3R5cGVdLnRvdGFsTGVuZ3RoP3N5c3RlbVt0eXBlXS50b3RhbExlbmd0aDowfVxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jTG9hZERhdGE9e3RoaXMuZnVuY0xvYWRNb3JlSGlzdG9yeS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbFN0YXRlfSB0b2dnbGU9e3RoaXMub3Blbk1vZGFsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21vZGFsLXByaW1hcnkgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtbC0yIG1yLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTAnPnsoXCLshLHqs7zsoIHsnLzroZwg7ZmY7KCE65CY7JiA7Iq164uI64ukLlwiKX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXIgY2xhc3NOYW1lPSdwLTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBtci00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nJyBzcmM9Jy4uLy4uL3N0YXRpYy9pbWcvY29tbW9uL3BvaW50LnBuZycgc3R5bGU9e3t3aWR0aDogMjV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbWwtMiBtYi0wJz57bWkucG9pbnR9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J2NvbC1hdXRvIHB0LTAgcGItMCBtbC0zIGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3tib3JkZXJSYWRpdXM6IDIwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9Jycgc3JjPScuLi8uLi9zdGF0aWMvaW1nL2NvbW1vbi9jb2luLnBuZycgc3R5bGU9e3t3aWR0aDogMzAsIGhlaWdodDogMzB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbWItMCc+e21pLmNvaW4gPyBtaS5jb2luIDogMH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsLmJpbmQodGhpcyl9PnsoJ+2ZleyduCcpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==