(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[130],{UP5t:function(t,e,n){"use strict";n.r(e);var a=n("1OyB"),i=n("vuIU"),s=n("md7G"),o=n("foSv"),c=n("JX7q"),l=n("Ji7U"),r=n("q1tI"),d=n.n(r),_=(n("rkyY"),n("5ryX")),v=n("30+C"),m=n("oa/T"),u=n("de8u"),g=n("Z3vd"),p=n("LvDl"),y=n.n(p),N=n("MBUC"),h=d.a.createElement;function f(t,e,n){return e=Object(o.a)(e),Object(s.a)(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return function(){return!!t}()}()?Reflect.construct(e,n||[],Object(o.a)(t).constructor):e.apply(t,n))}var b=null,w=function(t){function e(t){var n;return Object(a.a)(this,e),n=f(this,e,[t]),b=Object(c.a)(n),n.state={chargeHistory:_.a.chargeHistory,content_continue_cnt:0,review_continue_cnt:0,advert_continue_cnt:0,follow_continue_cnt:0,invite_continue_cnt:0,attendBtnDisabled:!1},n.props.setting&&n.props.setting.data||n.props.getSetting(),n}return Object(l.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){_.a.get_free_point_info().then((function(t){b.setState({content_continue_cnt:t.content?t.content:0,review_continue_cnt:t.review?t.review:0,advert_continue_cnt:t.advert?t.advert:0,follow_continue_cnt:t.follow?t.follow:0,invite_continue_cnt:t.invite?t.invite:0})}),(function(t){console.log(t)}))}},{key:"exchangeMoney",value:function(t){alert(t)}},{key:"funcClickAttend",value:function(){var t=this,e=this.props,n=e.updateMi,a=e.system,i=e.setAppModalState,s=e.t,o=a&&a.ai&&a.ai.token;o?Object(N.d)("/api/user/present","post",{token:o}).then((function(e){"done"===e.msg?i("alert",s("MISSION_SUCCESS")):"same day"===e.msg?i("alert",s("ALREADY_ATTEND")):e.result&&n({stat:{login_continue:e.result}}),t.setState({attendBtnDisabled:!t.state.attendBtnDisabled}),console.log("funcClickAttend success",e)}),(function(t){console.log("httpReq err",t)})):console.log("nothing token....")}},{key:"render",value:function(){var t=this,e=this.props.setting.data,n=e.point_content,a=e.point_content_cnt,i=e.point_review,s=e.point_review_cnt,o=e.point_advert,c=e.point_advert_cnt,l=e.point_attend,r=e.point_invite,d=e.point_follow,_=e.point_follow_cnt,p=this.props,N=p.mi,f=p.t;for(var b in l)l[b].point;var w=l&&l[l.length-1]&&l[l.length-1].day,O=0,E=0;for(var A in l)E=l[A]&&l[A].point?l[A].point:0;if(N&&N.stat&&void 0!==N.stat.login_continue){var T=y.a.find(l&&l?l:[],{day:N.stat.login_continue+1});O=T?T.point:0}return h("div",{className:"div_column"},h(v.a,{className:"border-0",style:{margin:10}},h(m.a,{style:{backgroundColor:"rgba(255,170,194,0.48)",padding:15}},h("div",{className:"align-items-center div_row"},h("div",{className:"div_column",style:{flex:10}},h("div",{className:"div_row align-items-center"},h("h3",{style:{margin:"5px 0"}},f("EVERYDAYLOGIN",{day:w,checked_day:N&&N.stat&&N.stat.login_continue?N.stat.login_continue:0})+f("TOTAL_POINT",{point:E}))),h("div",{className:"div_row align-items-center justify-content-between"},h("h5",{style:{margin:"5px 0"}},f("GET_POINT_ATTEND",{point:O})))),h("div",{style:{flex:1,alignItems:"center"},className:"div_column"},h(g.a,{variant:"outlined",disabled:this.state.attendBtnDisabled,onClick:function(){t.funcClickAttend()}},f("CHECK_ATTEND")))))),h(v.a,{className:"border-0",style:{margin:10}},h(m.a,{style:{backgroundColor:"rgba(255,170,194,0.48)",padding:15}},h("div",{className:"align-items-center div_row"},h("div",{className:"div_column",style:{flex:10}},h("div",{className:"div_row align-items-center"},h("h3",{style:{margin:"5px 0"}},f("RECOMMEND_USER",{user_cnt:this.state.invite_continue_cnt}))),h("div",{className:"div_row align-items-center justify-content-between"},h("h5",{style:{margin:"5px 0"}},f("RECOMMEND_USER_ALERT",{coin:r})))),h("div",{style:{flex:1,alignItems:"center"},className:"div_column"},f("GAINS"),h(g.a,{variant:"outlined",disabled:!0},r*this.state.invite_continue_cnt+f("COIN")))))),h(v.a,{className:"border-0",style:{margin:10}},h(m.a,{className:"p-0",style:{backgroundColor:"rgba(143,241,255,0.6)",padding:15}},h("div",{className:"align-items-center div_row",style:{marginTop:5}},h("div",{className:"div_column",style:{flex:10}},h("div",{className:"div_row align-items-center"},h("h3",{style:{margin:"5px 0"}},f("MAKESOCIAL",{total_cnt:a||10,content_cnt:this.state.content_continue_cnt}))),h(u.a,{style:{height:10,marginRight:5},color:"secondary",variant:"determinate",value:this.state.content_continue_cnt/(a||10)*100}),h("h5",{style:{margin:"10px 0 0 0"}},f("MAKE_SOCIAL_ALERT",{cnt:a,point:a*n}))),h("div",{style:{flex:1,alignItems:"center"},className:"div_column"},f("GAINS"),h(g.a,{variant:"outlined",disabled:!0},n*this.state.content_continue_cnt+f("POINT")))))),h(v.a,{className:"border-0",style:{margin:10}},h(m.a,{className:"p-0",style:{backgroundColor:"rgba(155,232,183,0.58)",padding:15}},h("div",{className:"align-items-center div_row",style:{marginTop:5}},h("div",{className:"div_column",style:{flex:10}},h("div",{className:"div_row align-items-center"},h("h3",{style:{margin:"5px 0"}},f("MAKECOMMEN",{total_cnt:s,comment_cnt:this.state.review_continue_cnt}))),h(u.a,{style:{height:10,marginRight:5},color:"secondary",variant:"determinate",value:this.state.review_continue_cnt/(s||10)*100}),h("h5",{style:{margin:"10px 0 0 0"}},f("MAKE_COMMENT_ALERT",{comment_cnt:s,total_point:s*i}))),h("div",{style:{flex:1,alignItems:"center"},className:"div_column"},f("GAINS"),h(g.a,{variant:"outlined",disabled:!0},i*this.state.review_continue_cnt+f("POINT")))))),h(v.a,{className:"border-0",style:{margin:10}},h(m.a,{className:"p-0",style:{backgroundColor:"rgba(255,219,171,0.58)",padding:15}},h("div",{className:"align-items-center div_row",style:{marginTop:5}},h("div",{className:"div_column",style:{flex:10}},h("div",{className:"div_row align-items-center"},h("h3",{style:{margin:"5px 0"}},f("SHOW_ADVERT",{advert_cnt:this.state.advert_continue_cnt,total_cnt:c}))),h(u.a,{style:{height:10,marginRight:5},color:"secondary",variant:"determinate",value:this.state.advert_continue_cnt/(c||10)*100}),h("h5",{style:{margin:"10px 0 0 0"}},f("SHOW_ADVERT_ALERT",{total_point:c*o}))),h("div",{style:{flex:1,alignItems:"center"},className:"div_column"},f("GAINS"),h(g.a,{variant:"outlined",disabled:!0},o*this.state.advert_continue_cnt+f("POINT")))))),h(v.a,{className:"border-0",style:{margin:10}},h(m.a,{className:"p-0",style:{backgroundColor:"rgba(143,241,255,0.6)",padding:15}},h("div",{className:"align-items-center div_row",style:{marginTop:5}},h("div",{className:"div_column",style:{flex:10}},h("div",{className:"div_row align-items-center"},h("h3",{style:{margin:"5px 0"}},f("FOLLOW")+"("+"".concat(this.state.follow_continue_cnt,"/").concat(_||123)+")")),h(u.a,{style:{height:10,marginRight:5},color:"secondary",variant:"determinate",value:this.state.follow_continue_cnt/(_||123)*100}),h("h5",{style:{margin:"10px 0 0 0"}},f("FOLLOW_ALERT",{user_cnt:_||123,total_point:(_||123)*d}))),h("div",{style:{flex:1,alignItems:"center"},className:"div_column"},f("GAINS"),h(g.a,{variant:"outlined",disabled:!0},d*this.state.follow_continue_cnt+f("POINT")))))))}}]),e}(r.Component);e.default=w}}]);