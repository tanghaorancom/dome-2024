(self["webpackChunkuni_app_mall_template"]=self["webpackChunkuni_app_mall_template"]||[]).push([[363],{47776:function(t,n,e){var o=e(21836);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var i=e(85892).Z;i("289d6ab6",o,!0,{sourceMap:!1,shadowMode:!1})},35148:function(t,n,e){var o=e(89167);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var i=e(85892).Z;i("78c71d8a",o,!0,{sourceMap:!1,shadowMode:!1})},18185:function(t,n,e){"use strict";var o;e.d(n,{Z:function(){return d}});var i,r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"segmented-control",class:["text"===t.styleType?"segmented-control--text":"segmented-control--button"],style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,(function(n,o){return e("v-uni-view",{key:o,staticClass:"segmented-control__item",class:["text"===t.styleType?"":"segmented-control__item--button",o===t.currentIndex&&"button"===t.styleType?"segmented-control__item--button--active":"",0===o&&"button"===t.styleType?"segmented-control__item--button--first":"",o===t.values.length-1&&"button"===t.styleType?"segmented-control__item--button--last":""],style:{backgroundColor:o===t.currentIndex&&"button"===t.styleType?t.activeColor:"",borderColor:o!==t.currentIndex||"text"!==t.styleType&&"button"!==t.styleType?"#d9d9d9":t.activeColor},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._onClick(o)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"segmented-control__text",class:"text"===t.styleType&&o===t.currentIndex?"segmented-control__item--text":"",style:{color:o===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor}},[t._v(t._s(n))])],1)],1)})),1)},s=[],l=(e(95163),{name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#2979FF"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}}),a=l,u=(e(35148),e(96904)),c=(0,u.Z)(a,r,s,!1,null,"42b46627",null,!1,o,i),d=c.exports},15329:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d}});var o,i={uniSegmentedControl:e(18185).Z},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",[e("v-uni-video",{attrs:{id:"myVideo",src:"http://127.0.0.1:9999/DC/?data=mall/%E4%BA%86%E4%B8%8D%E8%B5%B7%E6%88%91%E7%9A%84%E5%9B%BD.mp4","danmu-list":t.danmuList,"enable-danmu":!0,"danmu-btn":!0,controls:!0},on:{error:function(n){arguments[0]=n=t.$handleEvent(n),t.videoErrorCallback.apply(void 0,arguments)}}})],1)],1),e("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#dd524d"},on:{clickItem:function(n){arguments[0]=n=t.$handleEvent(n),t.onClickItem.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"content"},[0===t.current?e("v-uni-view",[e("v-uni-text",{staticClass:"content-text"},[t._v("选项卡1的内容")])],1):t._e(),1===t.current?e("v-uni-view",[e("v-uni-text",{staticClass:"content-text"},[t._v("选项卡2的内容")])],1):t._e(),2===t.current?e("v-uni-view",[e("v-uni-view",{staticClass:"uni-list uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",[e("v-uni-view",{staticClass:"uni-label"},[t._v("弹幕内容")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"在此处输入弹幕内容"},model:{value:t.danmuValue,callback:function(n){t.danmuValue=n},expression:"danmuValue"}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"page-body-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.sendDanmu.apply(void 0,arguments)}}},[t._v("发送弹幕")])],1)],1):t._e()],1)],1)},s=[],l=(e(64970),e(63238),e(40895),e(95988),{data:function(){return{src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:"",items:["选项卡1","选项卡2","发送弹幕"],current:0}},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo")},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var t=[],n=0;n<3;++n){var e=Math.floor(256*Math.random()).toString(16);e=1==e.length?"0"+e:e,t.push(e)}return"#"+t.join("")},onClickItem:function(t){this.current!==t.currentIndex&&(this.current=t.currentIndex)}}}),a=l,u=(e(47776),e(96904)),c=(0,u.Z)(a,r,s,!1,null,"55de3224",null,!1,i,o),d=c.exports},21836:function(t,n,e){"use strict";e.r(n);var o=e(54933),i=e.n(o),r=e(93476),s=e.n(r),l=s()(i());l.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    /*=================================A=============================*/uni-video[data-v-55de3224]{width:100%}\n    /*==================================B==============================*/.content[data-v-55de3224]{\ndisplay:flex;\njustify-content:center;align-items:center;height:150px;text-align:center}.content-text[data-v-55de3224]{font-size:14px;color:#666}",""]),n["default"]=l},89167:function(t,n,e){"use strict";e.r(n);var o=e(54933),i=e.n(o),r=e(93476),s=e.n(r),l=s()(i());l.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.segmented-control[data-v-42b46627]{display:flex;box-sizing:border-box;flex-direction:row;height:36px;overflow:hidden;cursor:pointer}.segmented-control__item[data-v-42b46627]{display:inline-flex;box-sizing:border-box;position:relative;flex:1;justify-content:center;align-items:center}.segmented-control__item--button[data-v-42b46627]{border-style:solid;border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:0}.segmented-control__item--button--first[data-v-42b46627]{border-left-width:1px;border-top-left-radius:5px;border-bottom-left-radius:5px}.segmented-control__item--button--last[data-v-42b46627]{border-top-right-radius:5px;border-bottom-right-radius:5px}.segmented-control__item--text[data-v-42b46627]{border-bottom-style:solid;border-bottom-width:2px;padding:6px 0}.segmented-control__text[data-v-42b46627]{font-size:14px;line-height:20px;text-align:center}',""]),n["default"]=l}}]);