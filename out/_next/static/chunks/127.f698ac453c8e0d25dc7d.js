(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[127],{owQP:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var a=n("1OyB"),o=n("vuIU"),i=n("md7G"),r=n("foSv"),c=n("Ji7U"),s=n("q1tI"),l=n.n(s),u=n("5ryX"),d=l.a.createElement;function p(t,e,n){return e=Object(r.a)(e),Object(i.a)(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return function(){return!!t}()}()?Reflect.construct(e,n||[],Object(r.a)(t).constructor):e.apply(t,n))}var f=function(t){function e(t){var n;return Object(a.a)(this,e),(n=p(this,e,[t])).state={playVideo:!1},n}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.props.message,n=e.content.data,a=u.a.splitPath(n),o=a.dirname,i=a.filename,r="".concat(o).concat(i,".png");return d("div",null,d("div",{onClick:function(){t.setState({playVideo:!t.state.playVideo})}},this.state.playVideo?d("video",{controls:!0,autoPlay:!0,poster:r,width:250,style:{borderRadius:15},onEnded:function(){t.setState({playVideo:!1})}},d("source",{src:e.content.data})):d("div",{style:{position:"relative"}},d("img",{alt:"",src:r,style:{borderRadius:10},width:250}),d("img",{alt:"",src:"../../../../static/img/play.png",width:40,style:{position:"absolute",transform:"translate(-50%, -50%)",left:"50%",top:"50%"}}))))}}]),e}(l.a.Component)}}]);