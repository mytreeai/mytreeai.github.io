(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scene-scene"],{"0895":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.waterfall-item[data-v-652b9a1b]{padding:%?16?%;background-color:#fff;border-radius:20px;font-size:%?28?%;color:#666}.waterfall-item uni-image[data-v-652b9a1b]{display:block;width:100%;height:%?350?%}.waterfall-item .content[data-v-652b9a1b]{margin-top:%?16?%}.waterfall-item .content .title[data-v-652b9a1b]{text-align:center;font-size:15px;font-weight:bolder;color:#000}.waterfall-item .content .money[data-v-652b9a1b]{color:#fa3534;margin-top:%?8?%}.waterfall-item .content .label[data-v-652b9a1b]{background-color:#fa3534;color:#fff;font-size:%?20?%;padding:%?4?% %?16?%;border-radius:%?20?%}.waterfall-item .content .shop-name[data-v-652b9a1b]{font-size:%?20?%;color:#999}',""]),t.exports=e},"18ad":function(t,e,a){var n=a("573f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("30f859f5",n,!0,{sourceMap:!1,shadowMode:!1})},"1a63":function(t,e,a){var n=a("34a0");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("f129d872",n,!0,{sourceMap:!1,shadowMode:!1})},"34a0":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.waterfall-box[data-v-15c3e6ca]{padding:%?20?% %?10?%;box-sizing:border-box}.waterfall-box > uni-view[data-v-15c3e6ca]{padding:0 %?10?%}.waterfall-box .list-item[data-v-15c3e6ca]{margin-bottom:0;opacity:0;overflow:hidden;height:0}.waterfall-box .list-item.show[data-v-15c3e6ca]{margin-bottom:%?20?%;opacity:1;overflow:auto;height:auto}.h-flex-x[data-v-15c3e6ca]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start}.h-flex-x.h-flex-2 > uni-view[data-v-15c3e6ca]{width:50%}',""]),t.exports=e},"49a6":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,default:function(){return[]}},selectType:{type:String,default:""},selectTypeId:{type:String,default:"_id"},labelKey:{type:String,default:"category"},hasLaunch:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fff"}},data:function(){return{showLaunch:!1,scrollIntoView:""}},methods:{handleSelectItem:function(t){this.scrollIntoView="tab".concat(t),this.showLaunch=!1,this.$emit("handleSelectTab",this.list[t])},handleShowLaunch:function(){this.showLaunch=!this.showLaunch}}};e.default=n},"49db":function(t,e,a){"use strict";a.r(e);var n=a("9356"),i=a("ac07");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("572c");var r=a("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"652b9a1b",null,!1,n["a"],void 0);e["default"]=l.exports},"4bb6":function(t,e,a){"use strict";a.r(e);var n=a("ff03"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"572c":function(t,e,a){"use strict";var n=a("ec49"),i=a.n(n);i.a},"573c":function(t,e,a){"use strict";a.r(e);var n=a("f452"),i=a("9e84");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("aae6");var r=a("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"c04f3c6a",null,!1,n["a"],void 0);e["default"]=l.exports},"573f":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".wrap[data-v-257d8132]{width:100vw;height:100vh;background-color:#f6f7f8}.load-txt[data-v-257d8132]{padding:0 0 %?20?% 0;text-align:center;color:#999;font-size:%?24?%}.load-icon[data-v-257d8132]{width:%?300?%;height:%?300?%;margin:0 auto %?20?% auto;display:block}",""]),t.exports=e},"6ef5":function(t,e,a){"use strict";a.r(e);var n=a("82f7"),i=a("4bb6");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("988f");var r=a("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"257d8132",null,!1,n["a"],void 0);e["default"]=l.exports},7996:function(t,e,a){"use strict";a.r(e);var n=a("ddae"),i=a("a07f");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("e43b");var r=a("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"15c3e6ca",null,!1,n["a"],void 0);e["default"]=l.exports},"82f7":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={selectTab:a("573c").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"wrap"},[a("v-uni-view",{staticStyle:{"{width":"100%","font-size":"36rpx","margin-left":"30rpx"}},[t._v("选择场景")]),a("select-tab",{staticStyle:{width:"100%"},attrs:{bgcolor:"inherit",selectTypeId:t.selectTypeId,hasLaunch:t.hasLaunch,selectType:t.selectType,labelKey:t.labelKey,list:t.scene_category_list},on:{handleSelectTab:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectTab.apply(void 0,arguments)}}}),a("v-uni-view",[a("helang-waterfall-list",{attrs:{status:t.waterfall.status,list:t.waterfall.list,reset:t.waterfall.reset},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},done:function(e){arguments[0]=e=t.$handleEvent(e),t.onDone.apply(void 0,arguments)}}},[["await"==t.waterfall.status?a("v-uni-view",[a("v-uni-view",{staticClass:"load-txt"},[t._v("上拉加载更多")])],1):"loading"==t.waterfall.status||"success"==t.waterfall.status?a("v-uni-view",[a("v-uni-view",{staticClass:"load-txt"},[t._v("加载中")])],1):"finish"==t.waterfall.status?a("v-uni-view",[a("v-uni-view",{staticClass:"load-txt"},[t._v("没有更多了")])],1):"fail"==t.waterfall.status?a("v-uni-view",[a("v-uni-image",{staticClass:"load-icon",attrs:{src:"/uni_modules/helang-waterfall/static/waterfall/fail.png"}}),a("v-uni-view",{staticClass:"load-txt"},[t._v("出错了，请刷新重试")])],1):"empty"==t.waterfall.status?a("v-uni-view",[a("v-uni-image",{staticClass:"load-icon",attrs:{src:"/uni_modules/helang-waterfall/static/waterfall/empty.png"}}),a("v-uni-view",{staticClass:"load-txt"},[t._v("暂无数据")])],1):a("v-uni-view")]],2)],1)],1)},s=[]},9356:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"waterfall-item-container"},[a("v-uni-view",{staticClass:"waterfall-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:t.params.url,mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.emitHeight.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.emitHeight.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.params.title))])],1)],1)],1)},i=[]},"988f":function(t,e,a){"use strict";var n=a("18ad"),i=a.n(n);i.a},"9e84":function(t,e,a){"use strict";a.r(e);var n=a("49a6"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},a07f:function(t,e,a){"use strict";a.r(e);var n=a("d98c"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},a94b:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scroll-view[data-v-c04f3c6a]{white-space:nowrap;box-sizing:border-box}.select-common-item[data-v-c04f3c6a]{display:inline-block;padding:%?0?% %?50?%;flex-shrink:0;font-size:%?30?%;border-radius:%?60?%;height:%?60?%;line-height:%?60?%;margin-right:%?25?%;position:relative;\r\n  /*background: rgba(245, 246, 248, 1);*/background-color:#fff;\r\n  /*color: #a9a9a9;*/margin-right:%?15?%}.select-common-item.selected[data-v-c04f3c6a]{color:#333;background:linear-gradient(90deg,#feef3c,#f3cd34);-webkit-animation:Selected-data-v-c04f3c6a .8s;animation:Selected-data-v-c04f3c6a .8s}@-webkit-keyframes Selected-data-v-c04f3c6a{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes Selected-data-v-c04f3c6a{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}.select-tab[data-v-c04f3c6a]{width:100%;box-sizing:border-box;z-index:99;border-top-left-radius:%?20?%;border-top-right-radius:%?20?%;display:flex;padding:%?20?%;\r\n  /*background: #fff;*/position:relative}.select-tab.hasLaunch[data-v-c04f3c6a]{padding-right:%?70?%}.select-tab .select-common-item[data-v-c04f3c6a]:last-of-type{margin-right:%?0?%}.select-tab .launch[data-v-c04f3c6a]{position:absolute;top:50%;right:%?20?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.select-tab .launch .icon[data-v-c04f3c6a]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.select-tab .launch .icon.rotate[data-v-c04f3c6a]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.select-tab[data-v-c04f3c6a]::-webkit-scrollbar{display:none}.launch-content[data-v-c04f3c6a]{display:flex;flex-wrap:wrap;padding:%?30?% %?20?% %?0?% %?20?%;background:#fff;overflow-y:scroll}.launch-content.close[data-v-c04f3c6a]{display:none}.launch-content .select-common-item[data-v-c04f3c6a]{width:30%;margin:0 5% %?20?% 0;padding:0 %?20?%;box-sizing:border-box;text-align:center;overflow:hidden;transition-property:all;transition-duration:1s}.launch-content .select-common-item[data-v-c04f3c6a]:nth-of-type(3n){margin-right:0}',""]),t.exports=e},aae6:function(t,e,a){"use strict";var n=a("d819"),i=a.n(n);i.a},ac07:function(t,e,a){"use strict";a.r(e);var n=a("b319"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},b319:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("ac1f");var n={name:"helangWaterfallItem",options:{virtualHost:!0},props:{params:{type:Object,default:function(){return{}}},tag:{type:String|Number,default:""},index:{type:Number,default:-1}},data:function(){return{}},methods:{emitHeight:function(t){var e=this,a=uni.createSelectorQuery().in(this);a.select(".waterfall-item-container").boundingClientRect((function(t){var a=Math.floor(t.height);e.$emit("height",a,e.$props.tag)})).exec()},onTap:function(){this.$emit("click",this.$props.index,this.$props.tag)}}};e.default=n},d819:function(t,e,a){var n=a("a94b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7853a9e2",n,!0,{sourceMap:!1,shadowMode:!1})},d98c:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2909")),s=n(a("5530"));a("caad"),a("a434"),a("14d9");var r=n(a("49db")),l={name:"helangWaterfallList",options:{virtualHost:!0},components:{"helang-waterfall-item":r.default},props:{status:{type:String,default:""},list:{type:Array,default:function(){return[]}},reset:{type:Boolean,default:!1}},watch:{"$props.status":function(t,e){"success"==t?this.startRender():this.showList||this.resetData()}},computed:{showList:function(){return!["fail","empty"].includes(this.$props.status)}},data:function(){return{leftHeight:0,rightHeight:0,leftList:[],rightList:[],awaitRenderList:[],showPage:1}},mounted:function(){"success"==this.$props.status&&this.startRender()},methods:{onHeight:function(t,e){var a=uni.upx2px(20);"left"==e?this.leftHeight+=t+a:this.rightHeight+=t+a,this.renderList()},onClick:function(t,e){"left"==e?this.$emit("click",this.leftList[t],t,e):this.$emit("click",this.rightList[t],t,e)},renderList:function(){if(this.awaitRenderList.length<1)return this.showPage++,this.$emit("done"),void(this.leftHeight>1e8&&(this.leftHeight>this.rightHeight?(this.leftHeight=2,this.rightHeight=1):(this.leftHeight=1,this.rightHeight=2)));var t=(0,s.default)((0,s.default)({},this.awaitRenderList.splice(0,1)[0]),{},{_current_page:this.showPage,_render_id:(new Date).getTime()});this.leftHeight>this.rightHeight?this.rightList.push(t):this.leftList.push(t)},resetData:function(){this.leftHeight=0,this.rightHeight=0,this.leftList=[],this.rightList=[],this.awaitRenderList=[],this.showPage=1},startRender:function(){this.showList?!this.$props.list||this.$props.list.length<1?console.log("河浪瀑布流插件提示：当前数据为空，不会触发列表渲染"):(this.$props.reset&&this.resetData(),this.awaitRenderList=(0,i.default)(this.$props.list),this.renderList()):this.resetData()}}};e.default=l},ddae:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.showList?a("v-uni-view",{staticClass:"waterfall-box h-flex-x h-flex-2"},[a("v-uni-view",t._l(t.leftList,(function(e,n){return a("v-uni-view",{key:e._render_id,staticClass:"list-item",class:{show:t.showPage>e._current_page}},[a("helang-waterfall-item",{attrs:{params:e,tag:"left",index:n},on:{height:function(e){arguments[0]=e=t.$handleEvent(e),t.onHeight.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1)})),1),a("v-uni-view",t._l(t.rightList,(function(e,n){return a("v-uni-view",{key:e._render_id,staticClass:"list-item",class:{show:t.showPage>e._current_page}},[a("helang-waterfall-item",{attrs:{params:e,tag:"right",index:n},on:{height:function(e){arguments[0]=e=t.$handleEvent(e),t.onHeight.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1)})),1)],1):t._e(),t._t("default")],2)},i=[]},e43b:function(t,e,a){"use strict";var n=a("1a63"),i=a.n(n);i.a},ec49:function(t,e,a){var n=a("0895");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("9ac28568",n,!0,{sourceMap:!1,shadowMode:!1})},f452:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"select-tab",class:t.hasLaunch?"hasLaunch":"",style:{"background-color":t.bgcolor}},[a("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"show-scrollbar":"false","scroll-with-animation":"true","scroll-x":"true","enable-flex":"true",scrollIntoView:t.scrollIntoView}},t._l(t.list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select-common-item",class:e[t.selectTypeId]==t.selectType?"selected":"",attrs:{id:"tab"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectItem(n)}}},[t._v(t._s(e[t.labelKey]))])})),1),t.hasLaunch?a("v-uni-view",{staticClass:"launch",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleShowLaunch.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"icon",class:t.showLaunch?"rotate":""},[a("uni-icons",{attrs:{type:"bottom",size:"18"}})],1)],1):t._e()],1),a("v-uni-view",{staticClass:"launch-content",class:t.showLaunch?"":"close"},t._l(t.list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select-common-item",class:e[t.selectTypeId]==t.selectType?"selected":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectItem(n)}}},[t._v(t._s(e[t.labelKey]))])})),1)],1)},i=[]},ff03:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("14d9"),a("99af");var i=n(a("7996")),s={components:{"helang-waterfall-list":i.default},data:function(){return{hasLaunch:!0,selectType:"",selectTypeId:"id",labelKey:"category",scene_map:new Map,scene_category_list:[],waterfall:{status:"",reset:!1,list:[]}}},onLoad:function(){},onReady:function(){this.getSceneList()},methods:{handleSelectTab:function(t){if(this.selectType!==t[this.selectTypeId]){this.selectType=t[this.selectTypeId],console.log("selectType:"+this.selectType),this.waterfall.status="loading",this.waterfall.reset=!0,this.waterfall.list=[];for(var e=this.scene_map.get(this.selectType),a=0;a<e.length;a++)this.waterfall.list.push({id:e[a].id,url:e[a].src,title:e[a].title});this.waterfall.list.length<1?this.waterfall.status="finish":this.waterfall.status="success"}},onClick:function(t,e,a){console.log(t);uni.showToast({title:"".concat({left:"左",right:"右"}[a],"侧列表第").concat(e+1,"个被点击"),icon:"none"})},onDone:function(){this.waterfall.reset=!1,this.waterfall.status="finish"},getSceneList:function(){var t=[{id:"life",category:"生活",content:[{id:0,src:"/static/image/scene/guitar.png",title:"爱好"},{id:1,src:"/static/image/scene/guitar.png",title:"爱好"},{id:2,src:"/static/image/scene/guitar.png",title:"爱好"}]},{id:"travel",category:"旅游",content:[{id:0,src:"/static/image/scene/travel.png",title:"问路"},{id:1,src:"/static/image/scene/travel.png",title:"问路"},{id:2,src:"/static/image/scene/travel.png",title:"问路"}]},{id:"work",category:"职场",content:[{id:0,src:"/static/image/scene/travel.png",title:"面试"},{id:1,src:"/static/image/scene/travel.png",title:"面试"},{id:2,src:"/static/image/scene/travel.png",title:"面试"}]}];this.waterfall.status="loading",this.waterfall.reset=!0;for(var e=0;e<t.length;e++)this.scene_category_list.push({id:t[e].id,category:t[e].category}),this.scene_map.set(t[e].id,t[e].content);this.selectType="life";for(var a=this.scene_map.get(this.selectType),n=0;n<a.length;n++)this.waterfall.list.push({id:a[n].id,url:a[n].src,title:a[n].title});this.waterfall.list.length<1?this.waterfall.status="finish":this.waterfall.status="success"}}};e.default=s}}]);