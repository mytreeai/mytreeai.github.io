(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0821":function(t,i,a){"use strict";var e=a("23c3"),s=a.n(e);s.a},"0c02":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a("562c"),s={data:function(){return{head_image:"/static/image/user.png",user_name:"未登录"}},onLoad:function(){},onShow:function(){this.user_name=e.store.userInfo.user_name,this.head_image=e.store.userInfo.head_image},onReady:function(){},onHide:function(){},onUnload:function(){},methods:{vip_open_click:function(){console.log("111111"),uni.navigateTo({url:"/pages/member-center/vipCenter"})}}};i.default=s},"1dcf":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"wp"},[a("v-uni-view",{staticClass:"m1 box"},[a("v-uni-view",{staticClass:"ul-list1"},[a("v-uni-navigator",{staticClass:"con",attrs:{url:"/pages/personal/personal","hover-class":"none"}},[a("v-uni-view",{staticClass:"li"},[a("v-uni-view",{staticClass:"pic"},[a("v-uni-image",{attrs:{src:t.head_image,mode:""}})],1),a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.user_name))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"m1"},[a("v-uni-view",{staticClass:"ul-list3"},[a("v-uni-view",{staticClass:"vip_txt"},[a("v-uni-text",{staticClass:"vip_text"},[t._v("畅享更多权益")])],1),a("v-uni-view",{staticClass:"vip_open_btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.vip_open_click.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"vip_open_btn_txt"},[t._v("立即开通")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"m1"},[a("v-uni-view",{staticClass:"ul-list4"},[a("v-uni-view",{staticClass:"li"},[a("v-uni-navigator",{staticClass:"con",attrs:{url:"/pages/messges/messageCenter","hover-class":"none"}},[a("v-uni-view",{staticClass:"pic"},[a("v-uni-image",{attrs:{src:"/static/image/invite-32.png",mode:""}})],1),a("v-uni-view",{staticClass:"txt"},[t._v("邀请好友")])],1)],1),a("v-uni-view",{staticClass:"li"},[a("v-uni-navigator",{staticClass:"con",attrs:{url:"/pages/equipment/equipment","hover-class":"none"}},[a("v-uni-view",{staticClass:"pic"},[a("v-uni-image",{attrs:{src:"/static/image/icons8-share-48.png",mode:""}})],1),a("v-uni-view",{staticClass:"txt"},[t._v("分享得会员")])],1)],1),a("v-uni-view",{staticClass:"li"},[a("v-uni-navigator",{staticClass:"con",attrs:{url:"/pages/contact/contact","hover-class":"none"}},[a("v-uni-view",{staticClass:"pic"},[a("v-uni-image",{attrs:{src:"/static/image/icons8-headset-96.png",mode:""}})],1),a("v-uni-view",{staticClass:"txt"},[t._v("添加客服")])],1)],1),a("v-uni-view",{staticClass:"li"},[a("v-uni-navigator",{staticClass:"con",attrs:{url:"","hover-class":"none"}},[a("v-uni-view",{staticClass:"pic"},[a("v-uni-image",{attrs:{src:"/static/image/broker2.png",mode:""}})],1),a("v-uni-view",{staticClass:"txt"},[t._v("成为代理商")])],1)],1),a("v-uni-view",{staticClass:"li"},[a("v-uni-navigator",{staticClass:"con",attrs:{url:"../chat/chat2 ","hover-class":"none"}},[a("v-uni-view",{staticClass:"pic"},[a("v-uni-image",{attrs:{src:"/static/image/help.png",mode:""}})],1),a("v-uni-view",{staticClass:"txt"},[t._v("帮助与反馈")])],1)],1),a("v-uni-view",{staticClass:"li"},[a("v-uni-navigator",{staticClass:"con",attrs:{url:"../catalogue/catalogue","hover-class":"none"}},[a("v-uni-view",{staticClass:"pic"},[a("v-uni-image",{attrs:{src:"/static/image/setting.png",mode:""}})],1),a("v-uni-view",{staticClass:"txt"},[a("v-uni-text",[t._v("设置")])],1)],1)],1)],1)],1)],1)},s=[]},"23c3":function(t,i,a){var e=a("b7c7");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("3a897dd5",e,!0,{sourceMap:!1,shadowMode:!1})},3058:function(t,i,a){"use strict";a.r(i);var e=a("0c02"),s=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},"3df2":function(t,i,a){"use strict";a.r(i);var e=a("1dcf"),s=a("3058");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("0821");var l=a("f0c5"),o=Object(l["a"])(s["default"],e["b"],e["c"],!1,null,"556147a5",null,!1,e["a"],void 0);i["default"]=o.exports},b7c7:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'uni-page-body[data-v-556147a5]{background-color:#fff}body.?%PAGE?%[data-v-556147a5]{background-color:#fff}.wp[data-v-556147a5]{padding:0 %?30?%}\n.box[data-v-556147a5]{padding-top:%?10?%}\n.ul-list1[data-v-556147a5]{padding:%?50?% 0;overflow:hidden;position:relative}.ul-list1 .pic[data-v-556147a5]{float:left;width:%?86?%;height:%?86?%;border-radius:50%;overflow:hidden;margin-right:%?15?%;background-color:#f6f7f8}.ul-list1 .pic uni-image[data-v-556147a5]{display:block;width:100%;height:100%;object-fit:cover}.ul-list1 .desc[data-v-556147a5]{padding-top:%?20?%;font-weight:700;letter-spacing:%?1?%;float:left}.ul-list1 .li[data-v-556147a5]::after{content:"";position:absolute;width:%?20?%;height:%?20?%;top:%?75?%;right:%?5?%;border-top:%?2?% #858585 solid;border-left:%?2?% #858585 solid;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ul-list2[data-v-556147a5]{overflow:hidden;margin-bottom:%?50?%;display:flex;justify-content:space-around}\n\n/* .ul-list2 .li {\n\tfloat: left;\n\twidth: 25%;\n} */.ul-list2 .li uni-text[data-v-556147a5]{display:block;text-align:center}.ul-list2 .li .con[data-v-556147a5]{display:block}.ul-list2 .li .s1[data-v-556147a5]{margin-bottom:%?15?%;font-size:%?38?%;color:#000;font-weight:700}.ul-list2 .li uni-text[data-v-556147a5]{font-size:%?22?%;color:#666}.ul-list3[data-v-556147a5]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#5b31ff;border-radius:%?20?%;padding:%?54?% %?24?% %?54?% %?42?%;margin-bottom:%?32?%}.vip_txt[data-v-556147a5]{display:flex;justify-self:center;align-items:center}.vip_text[data-v-556147a5]{color:#fff;font-size:20px}.vip_text[data-v-556147a5]::before{content:"购买套餐";color:#fff;font-size:15px}.vip_open_btn[data-v-556147a5]{display:flex;justify-content:center;align-items:center;\n\t/*background-color: linear-gradient(to right, #FEEF3C, #F3CD34);;*/background-color:#f3cd34;width:100px;height:30px;border-radius:15px}.vip_open_btn_txt[data-v-556147a5]{font-size:15px}.ul-list4[data-v-556147a5]{padding-bottom:%?180?%;padding-left:15px;padding-right:15px}.ul-list4 .li[data-v-556147a5]{overflow:hidden;padding:%?28?% 0 %?25?%;position:relative}.ul-list4 .li[data-v-556147a5]::after{content:"";position:absolute;width:%?15?%;height:%?15?%;top:%?44?%;right:%?15?%;border-top:%?2?% #c7c7c7 solid;border-left:%?2?% #c7c7c7 solid;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ul-list4 .con[data-v-556147a5]{display:block;overflow:hidden}.ul-list4 .li .pic[data-v-556147a5]{float:left;width:%?40?%;height:%?40?%;line-height:%?36?%;text-align:center;margin-right:%?15?%}.ul-list4 .li .pic uni-image[data-v-556147a5]{display:inline-block;max-width:100%;max-height:100%;vertical-align:middle}.ul-list4 .li .txt[data-v-556147a5]{float:left;font-size:%?32?%;padding-top:%?6?%}.ul-list5[data-v-556147a5]{position:fixed;bottom:0;left:0;right:0;background-color:#fff;padding:%?20?% 0;box-shadow:#c1c1b9 5px -3px 17px 1px}.ul-list5 .li[data-v-556147a5]{float:left;width:25%;text-align:center;display:block}.ul-list5 .li .pic[data-v-556147a5]{display:block}.ul-list5 .li .txt[data-v-556147a5]{display:inline-block}.ul-list5 .li uni-text[data-v-556147a5]{font-size:%?20?%;color:#666}.ul-list5 .li[data-v-556147a5]:hover{color:#5b31ff}',""]),t.exports=i}}]);