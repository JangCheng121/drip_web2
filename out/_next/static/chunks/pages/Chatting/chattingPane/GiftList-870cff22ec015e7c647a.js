_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[140,115],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("s4An");function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(o.a)(e,t)}},MquD:function(e,t,n){"use strict";var o=n("q1tI"),i=o.createContext({});t.a=i},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"eD//":function(e,t,n){"use strict";var o=n("wx14"),i=n("Ff2n"),r=n("q1tI"),a=n("iuhU"),c=n("H2TA"),s=n("MquD"),d=r.forwardRef((function(e,t){var n=e.children,c=e.classes,d=e.className,u=e.component,l=void 0===u?"ul":u,f=e.dense,p=void 0!==f&&f,b=e.disablePadding,m=void 0!==b&&b,v=e.subheader,g=Object(i.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),h=r.useMemo((function(){return{dense:p}}),[p]);return r.createElement(s.a.Provider,{value:h},r.createElement(l,Object(o.a)({className:Object(a.default)(c.root,d,p&&c.dense,!m&&c.padding,v&&c.subheader),ref:t},g),v,n))}));t.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(d)},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},md7G:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("U8pU"),i=n("JX7q");function r(e,t){if(t&&("object"===Object(o.a)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(i.a)(e)}},oGml:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Chatting/chattingPane/GiftList",function(){return n("wNhT")}])},tVbE:function(e,t,n){"use strict";var o=n("wx14"),i=n("Ff2n"),r=n("q1tI"),a=n("iuhU"),c=n("H2TA"),s=n("VD++"),d=n("ucBr"),u=n("bfFb"),l=n("MquD"),f=n("i8i4"),p="undefined"===typeof window?r.useEffect:r.useLayoutEffect,b=r.forwardRef((function(e,t){var n=e.alignItems,c=void 0===n?"center":n,b=e.autoFocus,m=void 0!==b&&b,v=e.button,g=void 0!==v&&v,h=e.children,w=e.classes,y=e.className,j=e.component,O=e.ContainerComponent,C=void 0===O?"li":O,x=e.ContainerProps,N=(x=void 0===x?{}:x).className,E=Object(i.a)(x,["className"]),P=e.dense,_=void 0!==P&&P,T=e.disabled,I=void 0!==T&&T,k=e.disableGutters,D=void 0!==k&&k,A=e.divider,F=void 0!==A&&A,V=e.focusVisibleClassName,q=e.selected,L=void 0!==q&&q,M=Object(i.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),S=r.useContext(l.a),B={dense:_||S.dense||!1,alignItems:c},G=r.useRef(null);p((function(){m&&G.current&&G.current.focus()}),[m]);var R=r.Children.toArray(h),U=R.length&&Object(d.a)(R[R.length-1],["ListItemSecondaryAction"]),J=r.useCallback((function(e){G.current=f.findDOMNode(e)}),[]),$=Object(u.a)(J,t),X=Object(o.a)({className:Object(a.default)(w.root,y,B.dense&&w.dense,!D&&w.gutters,F&&w.divider,I&&w.disabled,g&&w.button,"center"!==c&&w.alignItemsFlexStart,U&&w.secondaryAction,L&&w.selected),disabled:I},M),H=j||"li";return g&&(X.component=j||"div",X.focusVisibleClassName=Object(a.default)(w.focusVisible,V),H=s.a),U?(H=X.component||j?H:"div","li"===C&&("li"===H?H="div":"li"===X.component&&(X.component="div")),r.createElement(l.a.Provider,{value:B},r.createElement(C,Object(o.a)({className:Object(a.default)(w.container,N),ref:$},E),r.createElement(H,X,R),R.pop()))):r.createElement(l.a.Provider,{value:B},r.createElement(H,Object(o.a)({ref:$},X),R))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n}},[["oGml",5,4,7,2,0,6,17,46]]]);