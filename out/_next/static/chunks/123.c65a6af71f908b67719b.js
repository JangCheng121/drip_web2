(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[123],{"7LO0":function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return p}));var n=e("1OyB"),i=e("vuIU"),s=e("md7G"),o=e("foSv"),c=e("Ji7U"),r=e("q1tI"),u=e.n(r),l=u.a.createElement;function d(t,a,e){return a=Object(o.a)(a),Object(s.a)(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return function(){return!!t}()}()?Reflect.construct(a,e||[],Object(o.a)(t).constructor):a.apply(t,e))}var p=function(t){function a(t){var e;return Object(n.a)(this,a),(e=d(this,a,[t])).state={isPlaying:!1},e}return Object(c.a)(a,t),Object(i.a)(a,[{key:"playAudio",value:function(){this.state.isPlaying?this.refs.audio.pause():this.refs.audio.play(),this.setState({isPlaying:!this.state.isPlaying})}},{key:"render",value:function(){var t=this.props,a=t.message,e=t.arrow,n=t.reverseStyle,i=this.state.isPlaying;return l(u.a.Fragment,null,l("div",{className:e}),l("span",{className:"chat-text",style:n,onClick:this.playAudio.bind(this)},l("div",null,l("img",{alt:"",src:i?"../../../../../static/img/common/audioPlay.gif":"../../../../../static/img/common/audioPause.png",width:25}))),l("audio",{style:{display:"none"},ref:"audio"},l("source",{src:a.content.data,type:"audio/mpeg"})))}}]),a}(u.a.Component)}}]);