_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[147,122],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},6250:function(t,e,n){"use strict";var r=n("17x9"),o=n("q1tI"),a={movie:"movie",flashVars:"flashvars",allowFullScreen:"allowfullscreen",allowFullScreenInteractive:"allowfullscreeninteractive",allowNetworking:"allownetworking",allowScriptAccess:"allowscriptaccess",align:"align",base:"base",bgcolor:"bgcolor",browserZoom:"browserzoom",fullScreenAspectRatio:"fullscreenaspectratio",loop:"loop",menu:"menu",play:"play",quality:"quality",salign:"salign",scale:"scale",seamlessTabbing:"seamlesstabbing",wmode:"wmode"},i={allowFullScreen:!0,allowFullScreenInteractive:!0,loop:!0,menu:!0,play:!0,seamlessTabbing:!0},c=/[\r%&+=]/g,l={"\r":"%0D","%":"%25","&":"%26","+":"%2B","=":"%3D"};function s(t){return l[t]}function u(t){return(""+t).replace(c,s)}function f(t){var e=[];for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];null!=r&&e.push(u(n)+"="+u(r))}return e.join("&")}function p(t){o.Component.call(this,t);var e=this;this._refCallback=function(t){e._node=t};var n={};for(var r in a)if(a.hasOwnProperty(r)&&t.hasOwnProperty(r)){var c=t[r];if(null!=c){var l=a[r];"flashvars"===l&&"object"===typeof c?c=f(c):i.hasOwnProperty(r)&&(c=!!c),n[l]=""+c}}this._node=null,this.state={src:t.src,params:n}}p.prototype=Object.create(o.Component.prototype),p.prototype.constructor=p,Object.assign(p,o.Component),p.propTypes={src:r.string.isRequired,movie:r.string,flashVars:r.oneOfType([r.object,r.string]),allowFullScreen:r.bool,allowFullScreenInteractive:r.bool,allowNetworking:r.oneOf(["all","internal","none"]),allowScriptAccess:r.oneOf(["always","sameDomain","never"]),align:r.oneOf(["l","t","r"]),base:r.string,bgcolor:r.string,browserZoom:r.oneOf(["scale","noscale"]),fullScreenAspectRatio:r.oneOf(["portrait","landscape"]),loop:r.bool,menu:r.bool,play:r.bool,quality:r.oneOf(["low","autolow","autohigh","medium","high","best"]),salign:r.oneOf(["l","t","r","tl","tr"]),scale:r.oneOf(["default","noborder","exactfit","noscale"]),seamlessTabbing:r.bool,wmode:r.oneOf(["window","direct","opaque","transparent","gpu"])},p.prototype.getFPDOMNode=function(){return this._node},p.prototype.shouldComponentUpdate=function(t){var e=this.props;for(var n in e)if(e.hasOwnProperty(n)&&!a.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||!Object.is(e[n],t[n])))return!0;for(var n in t)if(t.hasOwnProperty(n)&&!a.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!0;return!1},p.prototype.render=function(){var t=this.props,e=this.state,n={ref:this._refCallback,children:[],type:"application/x-shockwave-flash",data:e.src,src:null};for(var r in t)!t.hasOwnProperty(r)||a.hasOwnProperty(r)||n.hasOwnProperty(r)||(n[r]=t[r]);var i=n.children;for(var c in e.params)i.push(o.createElement("param",{key:c,name:c,value:e.params[c]}));return null!=t.children&&i.push(t.children),o.createElement("object",n)},t.exports=p},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("s4An");function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Object(r.a)(t,e)}},OcYQ:function(t,e){var n={appName:"HLive",appPort:5e3,appUrl:"".concat("https://web.live-casino-club.com",":").concat(5e3),apiUrl:"".concat("https://api.live-casino-club.com",":").concat(443),staticServerUrl:"https://static.live-casino-club.com",databaseUrl:"mongodb://localhost/".concat("drip"),rtmpUrl:"".concat("rtmp://live.live-casino-club.com",":").concat(1935,"/live"),hlsUrl:"".concat("https://live.live-casino-club.com",":").concat(443,"/live"),jsonOptions:{headers:{"Content-Type":"application/json"}},secret:"SeCrEtKeYfOrHaShInGDriP"};t.exports={config:n}},PDTM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Chatting/chattingPane/RtmpPublisher",function(){return n("ZbiX")}])},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},ZbiX:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n("1OyB"),o=n("vuIU"),a=n("md7G"),i=n("foSv"),c=n("JX7q"),l=n("Ji7U"),s=n("rePB"),u=n("q1tI"),f=n.n(u),p=n("6250"),b=n.n(p),y=n("OcYQ"),h=f.a.createElement;function w(t,e,n){return e=Object(i.a)(e),Object(a.a)(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return function(){return!!t}()}()?Reflect.construct(e,n||[],Object(i.a)(t).constructor):e.apply(t,n))}var d=0,v=function(t){function e(t){var n;return Object(r.a)(this,e),n=w(this,e,[t]),Object(s.a)(Object(c.a)(n),"state",{isPlaying:!1}),n.ref=f.a.createRef(),n._uid=0,n._uid=d++,window["SWF_PUBLISHER_ON_PLAY"+n._uid]=n.onPlayButton.bind(Object(c.a)(n)),window["SWF_PUBLISHER_ON_ERROR"+n._uid]=n.onError.bind(Object(c.a)(n)),n.onPlayButton.bind(Object(c.a)(n)),n}return Object(l.a)(e,t),Object(o.a)(e,[{key:"componentWillUnmount",value:function(){delete window["SWF_PUBLISHER_ON_PLAY"+this._uid],delete window["SWF_PUBLISHER_ON_ERROR"+this._uid]}},{key:"onPlayButton",value:function(t){console.log("RtmpPublisher====================clickBtn===========",t);var e=this.props,n=e.startLive,r=e.stopLive;t?n&&n():r&&r()}},{key:"onError",value:function(){console.log("onError",arguments)}},{key:"render",value:function(){var t=this,e=this.props,n=e.streamKey,r=e.start_state;return h("div",{style:{width:"100%",height:"100%",maxHeight:700}},h(b.a,{ref:function(e){t._swfPlayerNode=e,t.ref=e},id:"__MyExternalInterfaceExample_SWFID_"+this._uid,src:"../static/swf/rtmpPublisher.swf",allowFullScreen:!0,allowscriptaccess:"always",width:"100%",height:"100%",wmode:"transparent",flashVars:{streamer:y.config.rtmpUrl,file:n,onPlayButton:"SWF_PUBLISHER_ON_PLAY"+this._uid,onError:"SWF_PUBLISHER_ON_ERROR"+this._uid,start_state:r}}))}}]),e}(u.Component)},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("U8pU"),o=n("JX7q");function a(t,e){if(e&&("object"===Object(r.a)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Object(o.a)(t)}},o46R:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("U8pU");function o(t){var e=function(t,e){if("object"!=Object(r.a)(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=Object(r.a)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==Object(r.a)(e)?e:String(e)}},rePB:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("o46R");function o(t,e,n){return(e=Object(r.a)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},s4An:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("o46R");function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Object(r.a)(o.key),o)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}}},[["PDTM",5,4,0]]]);