(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[117],{E39E:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=o},qkH7:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),i=a("vuIU"),r=a("md7G"),o=a("foSv"),l=a("JX7q"),s=a("Ji7U"),c=a("q1tI"),h=a.n(c),g=a("k7Sn"),u=a("E39E"),d=a.n(u),p=a("7SZd"),m=a("Z3vd"),f=a("30+C"),x=a("oa/T"),y=a("iuhU"),v=a("r9w1"),S=a("4uOB"),b=(a("rkyY"),a("LvDl")),C=a.n(b),_=a("cjxU"),O=a("5ryX"),N=(a("qBGJ"),a("DZua")),E=a("tNXx"),w=a("ofer"),k=a("5Gel"),I=h.a.createElement;function P(e,t,a){return t=Object(o.a)(t),Object(r.a)(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,a||[],Object(o.a)(e).constructor):t.apply(e,a))}var j=null,T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=P(this,t,[e])).toggle=a.toggle.bind(Object(l.a)(a)),a.state={popoverOpen:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(e){e&&(this.anchorEl=e.currentTarget),this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"chargeMoney",value:function(){var e=this.props.chargeFunc;this.setState({popoverOpen:!this.state.popoverOpen}),e()}},{key:"render",value:function(){var e=this,t=this.props,a=t.dataItem,n=t.index,i=t.state,r=t.containerStr,o=t.btnStr,l=t.cancelBtnStr,s=t.pointStr,c=t.btnState,h=t.cash_rate,g=t.chargeFunc;return I(f.a,{className:"col-auto p-0 border-0 mb-0 mt-4",style:{borderRadius:15,boxShadow:"3px 5px 6px 0px #b8b8b8"}},I(x.a,{className:"p-0 money_bg_img"},I("img",{alt:"",className:"money_title_img",src:a.img}),I("h4",{className:"mb-0 col-auto money_title_text"},C.a.floor(a.money/h,2)," ",s),I(m.a,{id:"Popover-"+n,className:"money_title_button",style:{width:100,borderRadius:10,color:"white",backgroundColor:"#FF695C",height:50,alignItems:"center",boxShadow:"3px 5px 6px 0px #b8b8b8"},onClick:function(t){e.toggle(t)},disabled:c},I("h4",{className:"mb-0",style:{marginBottom:0,alignItems:"center",marginTop:0}},a.cash)),I(k.a,{open:this.state.popoverOpen,anchorEl:this.anchorEl,onClose:this.toggle,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},I(w.a,{style:{padding:5}},I("h3",{style:{marginLeft:15,margin:5}},C.a.floor(a.money/h,2)+i),I("h3",{style:{marginLeft:15,margin:5}},r),I("div",{style:{flexDirection:"row",justifyContent:"center"}},I(m.a,{variant:"outlined",color:"primary",style:{margin:10},onClick:function(){g(),e.toggle()},disabled:c},o),I(m.a,{variant:"outlined",style:{margin:10},color:"danger",onClick:function(){e.toggle()}},l))))))}}]),t}(c.Component),D=function(e){function t(e){var a;Object(n.a)(this,t),a=P(this,t,[e]),j=Object(l.a)(a),a.state={modalState:!1,chargeSetting:O.a.chargeSetting,exchangeSetting:O.a.exchangeSetting,pageSize:10,requireChargeState:!1,exchangeCashValue:0,exchangePointValue:0};var i=a.props,r=i.system,o=(i.getHistory,r[S.a]);return(!o.data||!o.data.length)&&o.status!==N.U&&(o.status,N.T),a.state.chargeSetting.length&&a.state.exchangeSetting.length||O.a.getChargeSet().then((function(e){var t=C.a.sortBy(C.a.filter(e,{type:1}),["cash"]),a=C.a.sortBy(C.a.filter(e,{type:2}),["cash"]);O.a.chargeSetting=t,O.a.exchangeSetting=a,j.setState({chargeSetting:t,exchangeSetting:a})}),(function(e){console.log("get ChargeSet error")})),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"sendChargeState",value:function(e,t,a){void 0!==e&&(this.setState({requireChargeState:!0}),O.a.charge("point",e,t,a).then((function(e){j.setState({requireChargeState:!1}),j.openModal()})).catch((function(e){j.setState({requireChargeState:!1})})))}},{key:"openModal",value:function(){this.setState({modalState:!this.state.modalState})}},{key:"renderCurrentCtime",value:function(e,t){return I("span",null,e?_.h(e,"L"):"LOADING")}},{key:"renderCharge",value:function(){var e=this,t=this.props,a=t.setting,n=t.t,i=g.i18n.language,r="ko"===i?a&&a.data&&a.data.exchange_dollar_won:"cn"===i?a&&a.data&&a.data.exchange_dollar_rmb:1;return I("div",{style:{flexDirection:"row",flexWrap:"wrap",display:"flex",width:"100%",justifyContent:"center"}},this.state.chargeSetting.map((function(t,a){return I("div",{key:a,style:{minWidth:200,maxWidth:"20%",margin:10,flexDirection:"column",display:"flex",width:"15%"}},I(T,{cash_rate:r||1,btnState:e.state.requireChargeState,dataItem:t,index:a,state:n("POINT"),containerStr:n("ISTOCHARGE"),btnStr:n("MONEYCHARGE"),cancelBtnStr:n("CANCLE"),chargeFunc:function(){e.sendChargeState(t.id,t.cash,C.a.floor(t.money/r,2))},pointStr:"POINT"}))})))}},{key:"renderTableProState",value:function(e,t){return I("span",null,{done:"EXCHANGE_FINISHED",pending:"EXCHANGE_PENDING"}[e])}},{key:"funcLoadHistory",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N.M,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=S.a,r=this.props,o=r.getHistory,l=r.system;l[i]&&l[i].status===N.U||o(i,a,e,t,n)}},{key:"changeInputCash",value:function(e){var t=this.props.setting,a=g.i18n.language,n=t&&t.data;if(n){var i=!!isNaN(e),r="ko"===a?t&&t.data&&t.data.exchange_dollar_won:"cn"===a?t&&t.data&&t.data.exchange_dollar_rmb:1;if(n.exchange_rate_point&&n.exchange_rate_coin&&!i){var o=parseInt(e),l=C.a.floor(o*n.exchange_rate_point*n.exchange_rate_coin/r,2);this.setState({exchangeCashValue:o||0,exchangePointValue:l||0})}}}},{key:"funcExchangeCash2Point",value:function(){this.state.exchangeCashValue&&this.state.exchangePointValue&&(this.setState({requireChargeState:!0}),O.a.charge("point",-1,this.state.exchangeCashValue,this.state.exchangePointValue).then((function(e){j.setState({exchangeCashValue:0,exchangePointValue:0,requireChargeState:!1}),j.openModal()}),(function(e){j.setState({exchangeCashValue:0,exchangePointValue:0,requireChargeState:!1}),j.openModal()})))}},{key:"render",value:function(){for(var e=this,t=[],a=this.props,n=a.t,i=a.mi,r=a.system,o=a.setting,l=[{title:n("REQUESTDATE"),field:"ctime",render:function(t){return e.renderCurrentCtime(t.ctime)}},{title:n("RESPONSEDATE"),field:"utime",render:function(t){return e.renderCurrentCtime(t.utime)}},{title:n("CASH"),field:"cash"},{title:n("POINT"),field:"money"}],s=g.i18n.language,c=S.a,h="ko"===s?o&&o.data&&o.data.exchange_dollar_won:"cn"===s?o&&o.data&&o.data.exchange_dollar_rmb:1,u=0;u<r[c].totalLength&&r[c].totalLength;u++){var f=r[c].data[u];f?t.push(f):t.push([])}var x=this.state.chargeSetting;return I("div",{style:{padding:15}},I("div",{className:"mt-3 ml-0 mr-0 mb-5",style:{width:"100%",flexDirection:"row",display:"flex"}},x.length?I("div",{style:{flexDirection:"column",display:"flex",width:"100%"}},I("div",{style:{margin:2,flexDirection:"row",display:"flex",alignItems:"center",justifyContent:"center"}},I("div",{className:"col-auto p-2 point_coin_view"},I("img",{alt:"",src:"../../static/img/common/point.png",style:{width:30,height:30}}),I("h4",{className:"mb-0 ml-2",style:{color:"white"}},i.point?i.point:0))),this.renderCharge()):null),I("div",{className:"ml-0 mr-0 align-items-center",style:{flexDirection:"row",display:"flex",alignItems:"center"}},I(v.a,{id:"filled-adornment-extra-dense",className:Object(y.default)({margin:10,flexBasis:200}),variant:"filled",margin:"dense",hiddenLabel:!0,value:this.state.exchangeCashValue,onChange:function(t){e.changeInputCash(t.target.value)},InputProps:{inputProps:{"aria-label":"amount in Euro"},startAdornment:I(p.a,{position:"start"},"1\u20a9")}}),I(d.a,{style:{fontSize:30}}),I(v.a,{id:"filled-adornment-extra-dense",className:Object(y.default)({margin:10,flexBasis:200}),variant:"filled",margin:"dense",hiddenLabel:!0,value:this.state.exchangePointValue,disabled:!0,InputProps:{inputProps:{"aria-label":"amount in Euro"},startAdornment:I(p.a,{position:"start"},C.a.floor((o.data&&o.data.exchange_rate_point?o.data.exchange_rate_point:0)*(o.data&&o.data.exchange_rate_coin?o.data.exchange_rate_coin:0)/(h||1),2),I("img",{alt:"",src:"../../static/img/common/point.png",style:{width:20,height:20}}))}}),I(m.a,{variant:"outlined",color:"primary",style:{margin:1},disabled:!this.state.exchangePointValue||this.state.requireChargeState,onClick:function(){e.funcExchangeCash2Point()},className:"btn red point-btn m-3 "},n("POINTOUT"))),I(E.default,{mi:this.props.mi,context_t:this.props.t,type:c,columns:l,noDataText:r[c].status===N.T?n("NO_DATA"):n("LOADING")}))}}]),t}(c.Component);t.default=D}}]);