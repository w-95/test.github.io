(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qrcode-index"],{1951:function(e,t,n){"use strict";n.r(t);var i=n("eddf"),a=n("b8d4");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("b10c");var o=n("f0c5"),d=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"bf5e941e",null,!1,i["a"],void 0);t["default"]=d.exports},"328f":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n("3320");t.default={data:function(){return{url:"/static/qrcode.jpg",qrHeaderTitle:"Cachito",qrHeaderTips:"在线客服"}},methods:{saveImage:function(){}}}},3320:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.base64ToPath=function(e){return new Promise((function(t,n){if("object"===("undefined"===typeof window?"undefined":(0,a.default)(window))&&"document"in window){e=e.split(",");var i=e[0].match(/:(.*?);/)[1],d=atob(e[1]),u=d.length,c=new Uint8Array(u);while(u--)c[u]=d.charCodeAt(u);return t((window.URL||window.webkitURL).createObjectURL(new Blob([c],{type:i})))}var f=e.split(",")[0].match(/data\:\S+\/(\S+);/);f?f=f[1]:n(new Error("base64 error"));var s=function(){return Date.now()+String(o++)}()+"."+f;if("object"!==("undefined"===typeof plus?"undefined":(0,a.default)(plus)))if("object"===("undefined"===typeof wx?"undefined":(0,a.default)(wx))&&wx.canIUse("getFileSystemManager")){l=wx.env.USER_DATA_PATH+"/"+s;wx.getFileSystemManager().writeFile({filePath:l,data:r(e),encoding:"base64",success:function(){t(l)},fail:function(e){n(e)}})}else n(new Error("not support"));else{var l="_doc/uniapp_temp/"+s;if(!function(e,t){for(var n=e.split("."),i=t.split("."),a=!1,r=0;r<i.length;r++){var o=n[r]-i[r];if(0!==o){a=o>0;break}}return a}("Android"===plus.os.name?"1.9.9.80627":"1.9.9.80472",plus.runtime.innerVersion))return void plus.io.resolveLocalFileSystemURL("_doc",(function(i){i.getDirectory("uniapp_temp",{create:!0,exclusive:!1},(function(i){i.getFile(s,{create:!0,exclusive:!1},(function(i){i.createWriter((function(i){i.onwrite=function(){t(l)},i.onerror=n,i.seek(0),i.writeAsBinary(r(e))}),n)}),n)}),n)}),n);var w=new plus.nativeObj.Bitmap(s);w.loadBase64Data(e,(function(){w.save(l,{},(function(){w.clear(),t(l)}),(function(e){w.clear(),n(e)}))}),(function(e){w.clear(),n(e)}))}}))},t.pathToBase64=function(e){return new Promise((function(t,n){if("object"===("undefined"===typeof window?"undefined":(0,a.default)(window))&&"document"in window){if("function"===typeof FileReader){var i=new XMLHttpRequest;return i.open("GET",e,!0),i.responseType="blob",i.onload=function(){if(200===this.status){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=n,e.readAsDataURL(this.response)}},i.onerror=n,void i.send()}var r=document.createElement("canvas"),o=r.getContext("2d"),d=new Image;return d.onload=function(){r.width=d.width,r.height=d.height,o.drawImage(d,0,0),t(r.toDataURL()),r.height=r.width=0},d.onerror=n,void(d.src=e)}"object"!==("undefined"===typeof plus?"undefined":(0,a.default)(plus))?"object"===("undefined"===typeof wx?"undefined":(0,a.default)(wx))&&wx.canIUse("getFileSystemManager")?wx.getFileSystemManager().readFile({filePath:e,encoding:"base64",success:function(e){t("data:image/png;base64,"+e.data)},fail:function(e){n(e)}}):n(new Error("not support")):plus.io.resolveLocalFileSystemURL(function(e){if(0===e.indexOf("_www")||0===e.indexOf("_doc")||0===e.indexOf("_documents")||0===e.indexOf("_downloads"))return e;if(0===e.indexOf("file://"))return e;if(0===e.indexOf("/storage/emulated/0/"))return e;if(0===e.indexOf("/")){var t=plus.io.convertAbsoluteFileSystem(e);if(t!==e)return t;e=e.substr(1)}return"_www/"+e}(e),(function(e){e.file((function(e){var i=new plus.io.FileReader;i.onload=function(e){t(e.target.result)},i.onerror=function(e){n(e)},i.readAsDataURL(e)}),(function(e){n(e)}))}),(function(e){n(e)}))}))};var a=i(n("53ca"));function r(e){var t=e.split(",");return t[t.length-1]}n("c975"),n("d3b7"),n("d9e2"),n("d401"),n("ac1f"),n("466d"),n("81b2"),n("0eb6"),n("b7ef"),n("8bd4"),n("ace4"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("986a"),n("1d02"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("b39a"),n("72f7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var o=0},"912c":function(e,t,n){var i=n("ddfd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("471f7b72",i,!0,{sourceMap:!1,shadowMode:!1})},b10c:function(e,t,n){"use strict";var i=n("912c"),a=n.n(i);a.a},b8d4:function(e,t,n){"use strict";n.r(t);var i=n("328f"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},ddfd:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-bf5e941e]{width:100%;height:100%}.qrcode-box[data-v-bf5e941e]{width:100%;height:100%;\n\t/* background-color: rgba(0, 0, 0, 1); */display:flex;align-items:center;justify-content:center;padding:%?30?%;box-sizing:border-box;background:#f8f8f8;-webkit-animation:fadeIn 1s 1;animation:fadeIn 1s 1;opacity:1}.qrcode-content[data-v-bf5e941e]{width:100%;padding:%?40?%;box-sizing:border-box;border-radius:%?16?%;background:#fff}.qrcode-img[data-v-bf5e941e]{width:100%;margin:0 auto;margin-top:%?48?%}.qr-title[data-v-bf5e941e]{width:100%;text-align:center;margin-top:%?12?%;font-size:%?30?%;color:#999998}.header-box[data-v-bf5e941e]{width:100%;display:flex;align-items:center}.header-box > uni-image[data-v-bf5e941e]{width:%?108?%;height:%?108?%;border-radius:50%}.header-box > .header-text[data-v-bf5e941e]{margin-left:%?20?%}.header-box > .header-text > uni-view[data-v-bf5e941e]{font-size:%?38?%;font-family:Courier New,Courier,monospace}.header-box > .header-text > uni-view[data-v-bf5e941e]:nth-last-child(1){color:#666;font-size:%?34?%;margin-top:%?4?%}",""]),e.exports=t},eddf:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"qrcode-box"},[n("v-uni-view",{staticClass:"qrcode-content"},[n("v-uni-view",{staticClass:"header-box"},[n("v-uni-image",{attrs:{src:"/static/logo.png"}}),n("v-uni-view",{staticClass:"header-text"},[n("v-uni-view",[e._v(e._s(e.qrHeaderTitle))]),n("v-uni-view",[e._v(e._s(e.qrHeaderTips))])],1)],1),n("v-uni-image",{staticClass:"qrcode-img",attrs:{src:"/static/qrcode.jpg",mode:"widthFix"},on:{longpress:function(t){arguments[0]=t=e.$handleEvent(t),e.saveImage.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"qr-title"},[e._v("截图保存，关注公众号，联系客服")])],1)],1)},a=[]}}]);