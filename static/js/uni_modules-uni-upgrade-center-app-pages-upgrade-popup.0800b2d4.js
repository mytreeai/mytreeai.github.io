(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-upgrade-center-app-pages-upgrade-popup"],{"069e":function(t,e,n){"use strict";var i=n("7920"),a=n.n(i);a.a},1785:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-9b2f87f0]{background:transparent}body.?%PAGE?%[data-v-9b2f87f0]{background:transparent}.flex-center[data-v-9b2f87f0]{\ndisplay:flex;\njustify-content:center;align-items:center}.mask[data-v-9b2f87f0]{position:fixed;left:0;top:0;right:0;bottom:0;background-color:rgba(0,0,0,.65)}.botton-radius[data-v-9b2f87f0]{border-bottom-left-radius:%?30?%;border-bottom-right-radius:%?30?%}.content[data-v-9b2f87f0]{position:relative;top:0;width:%?600?%;background-color:#fff;box-sizing:border-box;padding:0 %?50?%;font-family:Source Han Sans CN}.text[data-v-9b2f87f0]{\ndisplay:block;\nline-height:200px;text-align:center;color:#fff}.content-top[data-v-9b2f87f0]{position:absolute;top:%?-195?%;left:0;width:%?600?%;height:%?270?%}.content-top-text[data-v-9b2f87f0]{font-size:%?45?%;font-weight:700;color:#f8f8fa;position:absolute;top:%?120?%;left:%?50?%;z-index:1}.content-header[data-v-9b2f87f0]{height:%?70?%}.title[data-v-9b2f87f0]{font-size:%?33?%;font-weight:700;color:#3da7ff;line-height:38px}.footer[data-v-9b2f87f0]{height:%?150?%;display:flex;align-items:center;justify-content:space-around}.box-des-scroll[data-v-9b2f87f0]{box-sizing:border-box;padding:0 %?40?%;height:%?200?%;text-align:left}.box-des[data-v-9b2f87f0]{font-size:%?26?%;color:#000;line-height:%?50?%}.progress-box[data-v-9b2f87f0]{width:100%}.progress[data-v-9b2f87f0]{width:90%;height:%?40?%;border-radius:35px}.close-img[data-v-9b2f87f0]{width:%?70?%;height:%?70?%;z-index:1000;position:absolute;bottom:%?-120?%;left:calc(50% - %?70?% / 2)}.content-button[data-v-9b2f87f0]{text-align:center;flex:1;font-size:%?30?%;font-weight:400;color:#fff;border-radius:%?40?%;margin:0 %?18?%;height:%?80?%;line-height:%?80?%;background:linear-gradient(90deg,#1785ff,#3da7ff)}.flex-column[data-v-9b2f87f0]{display:flex;flex-direction:column;align-items:center}",""]),t.exports=e},"25d4":function(t,e,n){"use strict";n.r(e);var i=n("d022"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"4fae":function(t,e,n){t.exports=n.p+"static/img/app_update_close.901cf6af.png"},7920:function(t,e,n){var i=n("1785");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("03e8eb38",i,!0,{sourceMap:!1,shadowMode:!1})},ac25:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mask flex-center"},[i("v-uni-view",{staticClass:"content botton-radius"},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-text",{staticClass:"content-top-text"},[t._v(t._s(t.title))]),i("v-uni-image",{staticClass:"content-top",staticStyle:{top:"0"},attrs:{width:"100%",height:"100%",src:n("d536")}})],1),i("v-uni-view",{staticClass:"content-header"}),i("v-uni-view",{staticClass:"content-body"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.subTitle))])],1),i("v-uni-view",{staticClass:"body"},[i("v-uni-scroll-view",{staticClass:"box-des-scroll",attrs:{"scroll-y":"true"}},[i("v-uni-text",{staticClass:"box-des"},[t._v(t._s(t.contents))])],1)],1),i("v-uni-view",{staticClass:"footer flex-center"},[t.isAppStore?[i("v-uni-button",{staticClass:"content-button",staticStyle:{border:"none",color:"#fff"},attrs:{plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpToAppStore.apply(void 0,arguments)}}},[t._v(t._s(t.downLoadBtnTextiOS))])]:[t.downloadSuccess?t.downloadSuccess&&!t.installed?i("v-uni-button",{staticClass:"content-button",staticStyle:{border:"none",color:"#fff"},attrs:{plain:!0,loading:t.installing,disabled:t.installing},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.installPackage.apply(void 0,arguments)}}},[t._v(t._s(t.installing?"正在安装……":"下载完成，立即安装"))]):t._e():[t.downloading?i("v-uni-view",{staticClass:"progress-box flex-column"},[i("v-uni-progress",{staticClass:"progress",attrs:{"border-radius":"35",percent:t.downLoadPercent,activeColor:"#3DA7FF","show-info":!0,"stroke-width":"10"}}),i("v-uni-view",{staticStyle:{width:"100%","font-size":"28rpx",display:"flex","justify-content":"space-around"}},[i("v-uni-text",[t._v(t._s(t.downLoadingText))]),i("v-uni-text",[t._v("("+t._s(t.downloadedSize)+"/"+t._s(t.packageFileSize)+"M)")])],1)],1):i("v-uni-button",{staticClass:"content-button",staticStyle:{border:"none",color:"#fff"},attrs:{plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateApp.apply(void 0,arguments)}}},[t._v(t._s(t.downLoadBtnText))])],t.installed&&t.isWGT?i("v-uni-button",{staticClass:"content-button",staticStyle:{border:"none",color:"#fff"},attrs:{plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.restart.apply(void 0,arguments)}}},[t._v("安装完毕，点击重启")]):t._e()]],2)],1),t.is_mandatory?t._e():i("v-uni-image",{staticClass:"close-img",attrs:{src:n("4fae")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.closeUpdate.apply(void 0,arguments)}}})],1)],1)},a=[]},d022:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c7eb")),o=i(n("1da1"));n("a9e3"),n("c975"),n("caad"),n("2532"),n("4de4"),n("d3b7"),n("13d5"),n("d81d"),n("4e82");var r,s="UNI_ADMIN_UPGRADE_CENTER_LOCAL_FILE_PATH",c=null;var l={data:function(){return{installForBeforeFilePath:"",installed:!1,installing:!1,downloadSuccess:!1,downloading:!1,downLoadPercent:0,downloadedSize:0,packageFileSize:0,tempFilePath:"",title:"更新日志",contents:"",is_mandatory:!1,subTitle:"发现新版本",downLoadBtnTextiOS:"立即跳转更新",downLoadBtnText:"立即下载更新",downLoadingText:"安装包下载中，请稍后"}},onLoad:function(t){var e=t.local_storage_key;if(!e)return console.error("local_storage_key为空，请检查后重试"),void uni.navigateBack();var n=uni.getStorageSync(e);if(!n)return console.error("安装包信息为空，请检查后重试"),void uni.navigateBack();var i=["version","url","type"];for(var a in n)if(-1!==i.indexOf(a)&&!n[a])return console.error("参数 ".concat(a," 必填，请检查后重试")),void uni.navigateBack();Object.assign(this,n),this.checkLocalStoragePackage()},onBackPress:function(){if(this.is_mandatory)return!0;c&&c.abort()},onHide:function(){r=null},computed:{isWGT:function(){return"wgt"===this.type},isiOS:function(){return!this.isWGT&&this.platform.includes("iOS")},isAppStore:function(){return this.isiOS||!this.isiOS&&!this.isWGT&&-1===this.url.indexOf(".apk")}},methods:{checkLocalStoragePackage:function(){var t=uni.getStorageSync(s);if(t){var e=t.version,n=t.savedFilePath,i=t.installed;i||0!==function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";t=String(t).split("."),e=String(e).split(".");for(var n=Math.min(t.length,e.length),i=0,a=0;a<n;a++){var o=Number(t[a]),r=Number(e[a]);if(o>r){i=1;break}if(o<r){i=-1;break}}if(0===i&&t.length!==e.length)for(var s=t.length>e.length,c=s?t:e,l=n;l<c.length;l++){var d=Number(c[l]);if(d>0){i=s?1:-1;break}}return i}(e,this.version)?this.deleteSavedFile(n):(this.downloadSuccess=!0,this.installForBeforeFilePath=n,this.tempFilePath=n)}},closeUpdate:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.downloading){e.next=5;break}if(!t.is_mandatory){e.next=3;break}return e.abrupt("return",uni.showToast({title:"下载中，请稍后……",icon:"none",duration:500}));case 3:return uni.showModal({title:"是否取消下载？",cancelText:"否",confirmText:"是",success:function(t){t.confirm&&(c&&c.abort(),uni.navigateBack())}}),e.abrupt("return");case 5:if(!t.downloadSuccess||!t.tempFilePath){e.next=10;break}return e.next=8,t.saveFile(t.tempFilePath,t.version);case 8:return uni.navigateBack(),e.abrupt("return");case 10:uni.navigateBack();case 11:case"end":return e.stop()}}),e)})))()},updateApp:function(){var t=this;this.checkStoreScheme().catch((function(){t.downloadPackage()}))},checkStoreScheme:function(){var t=(this.store_list||[]).filter((function(t){return t.enable}));return t&&t.length?(t.sort((function(t,e){return e.priority-t.priority})).map((function(t){return t.scheme})).reduce((function(t,e,n){return r=(t||(t=Promise.reject())).catch((function(){return new Promise((function(t,n){plus.runtime.openURL(e,(function(t){n(t)}))}))})),r}),r),r):Promise.reject()},downloadPackage:function(){var t=this;this.downloading=!0,c=uni.downloadFile({url:this.url,success:function(e){200==e.statusCode&&(t.downloadSuccess=!0,t.tempFilePath=e.tempFilePath,t.is_mandatory&&t.installPackage())},complete:function(){t.downloading=!1,t.downLoadPercent=0,t.downloadedSize=0,t.packageFileSize=0,c=null}}),c.onProgressUpdate((function(e){t.downLoadPercent=e.progress,t.downloadedSize=(e.totalBytesWritten/Math.pow(1024,2)).toFixed(2),t.packageFileSize=(e.totalBytesExpectedToWrite/Math.pow(1024,2)).toFixed(2)}))},installPackage:function(){},restart:function(){this.installed=!1},saveFile:function(t,e){return new Promise((function(n,i){uni.saveFile({tempFilePath:t,success:function(t){var n=t.savedFilePath;uni.setStorageSync(s,{version:e,savedFilePath:n})},complete:function(){n()}})}))},deleteSavedFile:function(t){return uni.removeStorageSync(s),uni.removeSavedFile({filePath:t})},jumpToAppStore:function(){plus.runtime.openURL(this.url)}}};e.default=l},d536:function(t,e,n){t.exports=n.p+"static/img/bg_top.125b3525.png"},ffe4:function(t,e,n){"use strict";n.r(e);var i=n("ac25"),a=n("25d4");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("069e");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"9b2f87f0",null,!1,i["a"],void 0);e["default"]=s.exports}}]);