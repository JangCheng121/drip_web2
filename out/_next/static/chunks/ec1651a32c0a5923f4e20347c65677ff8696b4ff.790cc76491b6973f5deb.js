(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"469l":function(t,e,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),s=a("H2TA"),l=a("5AJ6"),c=Object(l.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=i.forwardRef((function(t,e){var a=t.alt,s=t.children,l=t.classes,m=t.className,f=t.component,u=void 0===f?"div":f,d=t.imgProps,g=t.sizes,p=t.src,h=t.srcSet,b=t.variant,v=void 0===b?"circular":b,O=Object(n.a)(t,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,j=function(t){var e=t.src,a=t.srcSet,r=i.useState(!1),n=r[0],o=r[1];return i.useEffect((function(){if(e||a){o(!1);var t=!0,r=new Image;return r.src=e,r.srcSet=a,r.onload=function(){t&&o("loaded")},r.onerror=function(){t&&o("error")},function(){t=!1}}}),[e,a]),n}({src:p,srcSet:h}),x=p||h,R=x&&"error"!==j;return y=R?i.createElement("img",Object(r.a)({alt:a,src:p,srcSet:h,sizes:g,className:l.img},d)):null!=s?s:x&&a?a[0]:i.createElement(c,{className:l.fallback}),i.createElement(u,Object(r.a)({className:Object(o.default)(l.root,l.system,l[v],m,!R&&l.colorDefault),ref:e},O),y)}));e.a=Object(s.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:t.palette.background.default,backgroundColor:"light"===t.palette.type?t.palette.grey[400]:t.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:t.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)},IFCi:function(t,e,a){"use strict";a("ODXe");var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),s=a("H2TA"),l=a("NqtD"),c=i.forwardRef((function(t,e){var a=t.anchorOrigin,s=void 0===a?{vertical:"top",horizontal:"right"}:a,c=t.badgeContent,m=t.children,f=t.classes,u=t.className,d=t.color,g=void 0===d?"default":d,p=t.component,h=void 0===p?"span":p,b=t.invisible,v=t.max,O=void 0===v?99:v,y=t.overlap,j=void 0===y?"rectangle":y,x=t.showZero,R=void 0!==x&&x,I=t.variant,T=void 0===I?"standard":I,w=Object(n.a)(t,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),C=b;null==b&&(0===c&&!R||null==c&&"dot"!==T)&&(C=!0);var S="";return"dot"!==T&&(S=c>O?"".concat(O,"+"):c),i.createElement(h,Object(r.a)({className:Object(o.default)(f.root,u),ref:e},w),m,i.createElement("span",{className:Object(o.default)(f.badge,f["".concat(s.horizontal).concat(Object(l.a)(s.vertical),"}")],f["anchorOrigin".concat(Object(l.a)(s.vertical)).concat(Object(l.a)(s.horizontal)).concat(Object(l.a)(j))],"default"!==g&&f["color".concat(Object(l.a)(g))],C&&f.invisible,"dot"===T&&f.dot)},S))}));e.a=Object(s.a)((function(t){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorError:{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginTopRightRectangular:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginBottomRightRectangular:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginTopLeftRectangular:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginBottomLeftRectangular:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginTopRightCircular:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginBottomRightCircular:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginTopLeftCircular:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginBottomLeftCircular:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(c)},IsqK:function(t,e,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),s=a("H2TA"),l=a("ofer"),c=a("MquD"),m=i.forwardRef((function(t,e){var a=t.children,s=t.classes,m=t.className,f=t.disableTypography,u=void 0!==f&&f,d=t.inset,g=void 0!==d&&d,p=t.primary,h=t.primaryTypographyProps,b=t.secondary,v=t.secondaryTypographyProps,O=Object(n.a)(t,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),y=i.useContext(c.a).dense,j=null!=p?p:a;null==j||j.type===l.a||u||(j=i.createElement(l.a,Object(r.a)({variant:y?"body2":"body1",className:s.primary,component:"span",display:"block"},h),j));var x=b;return null==x||x.type===l.a||u||(x=i.createElement(l.a,Object(r.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},v),x)),i.createElement("div",Object(r.a)({className:Object(o.default)(s.root,m,y&&s.dense,g&&s.inset,j&&x&&s.multiline),ref:e},O),j,x)}));e.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(m)},SLcR:function(t,e,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),s=a("H2TA"),l=a("MquD"),c=i.forwardRef((function(t,e){var a=t.classes,s=t.className,c=Object(n.a)(t,["classes","className"]),m=i.useContext(l.a);return i.createElement("div",Object(r.a)({className:Object(o.default)(a.root,s,"flex-start"===m.alignItems&&a.alignItemsFlexStart),ref:e},c))}));e.a=Object(s.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(c)},TjOe:function(t,e,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),s=a("H2TA"),l=i.forwardRef((function(t,e){var a=t.classes,s=t.className,l=Object(n.a)(t,["classes","className"]);return i.createElement("div",Object(r.a)({className:Object(o.default)(a.root,s),ref:e},l))}));l.muiName="ListItemSecondaryAction",e.a=Object(s.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(l)},wNhT:function(t,e,a){"use strict";a.r(e);var r=a("wx14"),n=a("1OyB"),i=a("vuIU"),o=a("md7G"),s=a("foSv"),l=a("Ji7U"),c=a("q1tI"),m=a.n(c),f=a("eD//"),u=a("tVbE"),d=a("TjOe"),g=a("IsqK"),p=a("SLcR"),h=a("IP2g"),b=a("wHSu"),v=a("469l"),O=a("IFCi"),y=a("LvDl"),j=a.n(y),x=m.a.createElement;function R(t,e,a){return e=Object(s.a)(e),Object(o.a)(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return function(){return!!t}()}()?Reflect.construct(e,a||[],Object(s.a)(t).constructor):e.apply(t,a))}var I=function(t){var e=t.userInfo,a=(t.t,t.users,t.mi,t.isCreator),r=t.userGiftData,n=t.presentData,i=0;return r.map((function(t,e){var a=j.a.find(n,{id:t.gift_id});return i+=a&&a.price?a.price:0})),x(u.a,{button:!0},x(p.a,null,x(O.a,{overlap:"circle",anchororigin:{vertical:"top",horizontal:"right"},badgeContent:a&&e&&"virtual"===e.role?x(h.a,{style:{color:"#f95452"},icon:b.k}):null},x(v.a,{style:{backgroundColor:"#d6d6d6"},alt:"user avatar",src:e.picture}))),x(g.a,{id:e.name,primary:e.name}),x(d.a,{style:{display:"flex",alignItems:"center"}},i,x("img",{alt:"",src:"../../../static/img/common/point.png",style:{width:25,height:25}})))},T=function(t){function e(){return Object(n.a)(this,e),R(this,e,arguments)}return Object(l.a)(e,t),Object(i.a)(e,[{key:"shouldComponentUpdate",value:function(t,e,a){return this.props.activeChannelInfo.gifts!==t.activeChannelInfo.gifts}},{key:"render",value:function(){var t=this,e=this.props,a=e.activeChannelInfo,n=e.users,i=e.mi,o=e.getUser,s=a.gifts,l=j.a.groupBy(s,"sender");return x(f.a,{dense:!0},Object.keys(l).map((function(e,a){var s=e;if(s===i.id)return null;var c=n[s];return c?x(I,Object(r.a)({},t.props,{key:a,userInfo:c,userGiftData:l[e]})):(o(s),null)})))}}]),e}(m.a.Component);e.default=T}}]);