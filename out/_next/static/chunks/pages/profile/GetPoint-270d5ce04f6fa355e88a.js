_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[187,108,130],{"30+C":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=n("iuhU"),s=n("kKAo"),l=n("H2TA"),c=i.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.raised,d=void 0!==c&&c,u=Object(r.a)(e,["classes","className","raised"]);return i.createElement(s.a,Object(a.a)({className:Object(o.default)(n.root,l),elevation:d?8:1,ref:t},u))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},UP5t:function(e,t,n){"use strict";n.r(t);var a=n("1OyB"),r=n("vuIU"),i=n("md7G"),o=n("foSv"),s=n("JX7q"),l=n("Ji7U"),c=n("q1tI"),d=n.n(c),u=(n("rkyY"),n("5ryX")),m=n("30+C"),_=n("oa/T"),v=n("de8u"),f=n("Z3vd"),b=n("LvDl"),g=n.n(b),p=n("MBUC"),y=d.a.createElement;function h(e,t,n){return t=Object(o.a)(t),Object(i.a)(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,n||[],Object(o.a)(e).constructor):t.apply(e,n))}var w=null,N=function(e){function t(e){var n;return Object(a.a)(this,t),n=h(this,t,[e]),w=Object(s.a)(n),n.state={chargeHistory:u.a.chargeHistory,content_continue_cnt:0,review_continue_cnt:0,advert_continue_cnt:0,follow_continue_cnt:0,invite_continue_cnt:0,attendBtnDisabled:!1},n.props.setting&&n.props.setting.data||n.props.getSetting(),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){u.a.get_free_point_info().then((function(e){w.setState({content_continue_cnt:e.content?e.content:0,review_continue_cnt:e.review?e.review:0,advert_continue_cnt:e.advert?e.advert:0,follow_continue_cnt:e.follow?e.follow:0,invite_continue_cnt:e.invite?e.invite:0})}),(function(e){console.log(e)}))}},{key:"exchangeMoney",value:function(e){alert(e)}},{key:"funcClickAttend",value:function(){var e=this,t=this.props,n=t.updateMi,a=t.system,r=t.setAppModalState,i=t.t,o=a&&a.ai&&a.ai.token;o?Object(p.d)("/api/user/present","post",{token:o}).then((function(t){"done"===t.msg?r("alert",i("MISSION_SUCCESS")):"same day"===t.msg?r("alert",i("ALREADY_ATTEND")):t.result&&n({stat:{login_continue:t.result}}),e.setState({attendBtnDisabled:!e.state.attendBtnDisabled}),console.log("funcClickAttend success",t)}),(function(e){console.log("httpReq err",e)})):console.log("nothing token....")}},{key:"render",value:function(){var e=this,t=this.props.setting.data,n=t.point_content,a=t.point_content_cnt,r=t.point_review,i=t.point_review_cnt,o=t.point_advert,s=t.point_advert_cnt,l=t.point_attend,c=t.point_invite,d=t.point_follow,u=t.point_follow_cnt,b=this.props,p=b.mi,h=b.t;for(var w in l)l[w].point;var N=l&&l[l.length-1]&&l[l.length-1].day,O=0,k=0;for(var j in l)k=l[j]&&l[j].point?l[j].point:0;if(p&&p.stat&&void 0!==p.stat.login_continue){var x=g.a.find(l&&l?l:[],{day:p.stat.login_continue+1});O=x?x.point:0}return y("div",{className:"div_column"},y(m.a,{className:"border-0",style:{margin:10}},y(_.a,{style:{backgroundColor:"rgba(255,170,194,0.48)",padding:15}},y("div",{className:"align-items-center div_row"},y("div",{className:"div_column",style:{flex:10}},y("div",{className:"div_row align-items-center"},y("h3",{style:{margin:"5px 0"}},h("EVERYDAYLOGIN",{day:N,checked_day:p&&p.stat&&p.stat.login_continue?p.stat.login_continue:0})+h("TOTAL_POINT",{point:k}))),y("div",{className:"div_row align-items-center justify-content-between"},y("h5",{style:{margin:"5px 0"}},h("GET_POINT_ATTEND",{point:O})))),y("div",{style:{flex:1,alignItems:"center"},className:"div_column"},y(f.a,{variant:"outlined",disabled:this.state.attendBtnDisabled,onClick:function(){e.funcClickAttend()}},h("CHECK_ATTEND")))))),y(m.a,{className:"border-0",style:{margin:10}},y(_.a,{style:{backgroundColor:"rgba(255,170,194,0.48)",padding:15}},y("div",{className:"align-items-center div_row"},y("div",{className:"div_column",style:{flex:10}},y("div",{className:"div_row align-items-center"},y("h3",{style:{margin:"5px 0"}},h("RECOMMEND_USER",{user_cnt:this.state.invite_continue_cnt}))),y("div",{className:"div_row align-items-center justify-content-between"},y("h5",{style:{margin:"5px 0"}},h("RECOMMEND_USER_ALERT",{coin:c})))),y("div",{style:{flex:1,alignItems:"center"},className:"div_column"},h("GAINS"),y(f.a,{variant:"outlined",disabled:!0},c*this.state.invite_continue_cnt+h("COIN")))))),y(m.a,{className:"border-0",style:{margin:10}},y(_.a,{className:"p-0",style:{backgroundColor:"rgba(143,241,255,0.6)",padding:15}},y("div",{className:"align-items-center div_row",style:{marginTop:5}},y("div",{className:"div_column",style:{flex:10}},y("div",{className:"div_row align-items-center"},y("h3",{style:{margin:"5px 0"}},h("MAKESOCIAL",{total_cnt:a||10,content_cnt:this.state.content_continue_cnt}))),y(v.a,{style:{height:10,marginRight:5},color:"secondary",variant:"determinate",value:this.state.content_continue_cnt/(a||10)*100}),y("h5",{style:{margin:"10px 0 0 0"}},h("MAKE_SOCIAL_ALERT",{cnt:a,point:a*n}))),y("div",{style:{flex:1,alignItems:"center"},className:"div_column"},h("GAINS"),y(f.a,{variant:"outlined",disabled:!0},n*this.state.content_continue_cnt+h("POINT")))))),y(m.a,{className:"border-0",style:{margin:10}},y(_.a,{className:"p-0",style:{backgroundColor:"rgba(155,232,183,0.58)",padding:15}},y("div",{className:"align-items-center div_row",style:{marginTop:5}},y("div",{className:"div_column",style:{flex:10}},y("div",{className:"div_row align-items-center"},y("h3",{style:{margin:"5px 0"}},h("MAKECOMMEN",{total_cnt:i,comment_cnt:this.state.review_continue_cnt}))),y(v.a,{style:{height:10,marginRight:5},color:"secondary",variant:"determinate",value:this.state.review_continue_cnt/(i||10)*100}),y("h5",{style:{margin:"10px 0 0 0"}},h("MAKE_COMMENT_ALERT",{comment_cnt:i,total_point:i*r}))),y("div",{style:{flex:1,alignItems:"center"},className:"div_column"},h("GAINS"),y(f.a,{variant:"outlined",disabled:!0},r*this.state.review_continue_cnt+h("POINT")))))),y(m.a,{className:"border-0",style:{margin:10}},y(_.a,{className:"p-0",style:{backgroundColor:"rgba(255,219,171,0.58)",padding:15}},y("div",{className:"align-items-center div_row",style:{marginTop:5}},y("div",{className:"div_column",style:{flex:10}},y("div",{className:"div_row align-items-center"},y("h3",{style:{margin:"5px 0"}},h("SHOW_ADVERT",{advert_cnt:this.state.advert_continue_cnt,total_cnt:s}))),y(v.a,{style:{height:10,marginRight:5},color:"secondary",variant:"determinate",value:this.state.advert_continue_cnt/(s||10)*100}),y("h5",{style:{margin:"10px 0 0 0"}},h("SHOW_ADVERT_ALERT",{total_point:s*o}))),y("div",{style:{flex:1,alignItems:"center"},className:"div_column"},h("GAINS"),y(f.a,{variant:"outlined",disabled:!0},o*this.state.advert_continue_cnt+h("POINT")))))),y(m.a,{className:"border-0",style:{margin:10}},y(_.a,{className:"p-0",style:{backgroundColor:"rgba(143,241,255,0.6)",padding:15}},y("div",{className:"align-items-center div_row",style:{marginTop:5}},y("div",{className:"div_column",style:{flex:10}},y("div",{className:"div_row align-items-center"},y("h3",{style:{margin:"5px 0"}},h("FOLLOW")+"("+"".concat(this.state.follow_continue_cnt,"/").concat(u||123)+")")),y(v.a,{style:{height:10,marginRight:5},color:"secondary",variant:"determinate",value:this.state.follow_continue_cnt/(u||123)*100}),y("h5",{style:{margin:"10px 0 0 0"}},h("FOLLOW_ALERT",{user_cnt:u||123,total_point:(u||123)*d}))),y("div",{style:{flex:1,alignItems:"center"},className:"div_column"},h("GAINS"),y(f.a,{variant:"outlined",disabled:!0},d*this.state.follow_continue_cnt+h("POINT")))))))}}]),t}(c.Component);t.default=N},de8u:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=n("iuhU"),s=n("NqtD"),l=n("H2TA"),c=n("ye/S"),d=n("tr08"),u=i.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.color,u=void 0===c?"primary":c,m=e.value,_=e.valueBuffer,v=e.variant,f=void 0===v?"indeterminate":v,b=Object(r.a)(e,["classes","className","color","value","valueBuffer","variant"]),g=Object(d.a)(),p={},y={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==m){p["aria-valuenow"]=Math.round(m),p["aria-valuemin"]=0,p["aria-valuemax"]=100;var h=m-100;"rtl"===g.direction&&(h=-h),y.bar1.transform="translateX(".concat(h,"%)")}else 0;if("buffer"===f)if(void 0!==_){var w=(_||0)-100;"rtl"===g.direction&&(w=-w),y.bar2.transform="translateX(".concat(w,"%)")}else 0;return i.createElement("div",Object(a.a)({className:Object(o.default)(n.root,n["color".concat(Object(s.a)(u))],l,{determinate:n.determinate,indeterminate:n.indeterminate,buffer:n.buffer,query:n.query}[f]),role:"progressbar"},p,{ref:t},b),"buffer"===f?i.createElement("div",{className:Object(o.default)(n.dashed,n["dashedColor".concat(Object(s.a)(u))])}):null,i.createElement("div",{className:Object(o.default)(n.bar,n["barColor".concat(Object(s.a)(u))],("indeterminate"===f||"query"===f)&&n.bar1Indeterminate,{determinate:n.bar1Determinate,buffer:n.bar1Buffer}[f]),style:y.bar1}),"determinate"===f?null:i.createElement("div",{className:Object(o.default)(n.bar,("indeterminate"===f||"query"===f)&&n.bar2Indeterminate,"buffer"===f?[n["color".concat(Object(s.a)(u))],n.bar2Buffer]:n["barColor".concat(Object(s.a)(u))]),style:y.bar2}))}));t.a=Object(l.a)((function(e){var t=function(t){return"light"===e.palette.type?Object(c.j)(t,.62):Object(c.b)(t,.5)},n=t(e.palette.primary.main),a=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:n},colorSecondary:{backgroundColor:a},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(u)},kzDg:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/GetPoint",function(){return n("UP5t")}])},"oa/T":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=n("iuhU"),s=n("H2TA"),l=i.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.component,c=void 0===l?"div":l,d=Object(r.a)(e,["classes","className","component"]);return i.createElement(c,Object(a.a)({className:Object(o.default)(n.root,s),ref:t},d))}));t.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},rkyY:function(e,t){throw new Error("Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at D:\\work\\Drip_web_0207\\node_modules\\webpack\\lib\\NormalModule.js:333:18\n    at D:\\work\\Drip_web_0207\\node_modules\\loader-runner\\lib\\LoaderRunner.js:373:3\n    at iterateNormalLoaders (D:\\work\\Drip_web_0207\\node_modules\\loader-runner\\lib\\LoaderRunner.js:214:10)\n    at iterateNormalLoaders (D:\\work\\Drip_web_0207\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\work\\Drip_web_0207\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at runSyncOrAsync (D:\\work\\Drip_web_0207\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:12)\n    at iterateNormalLoaders (D:\\work\\Drip_web_0207\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (D:\\work\\Drip_web_0207\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (D:\\work\\Drip_web_0207\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at D:\\work\\Drip_web_0207\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9")}},[["kzDg",5,4,7,10,13,0,6,9,11,12]]]);