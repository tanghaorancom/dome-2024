(self["webpackChunkuni_app_mall_template"]=self["webpackChunkuni_app_mall_template"]||[]).push([[571],{52748:function(t,e,n){var i=n(4563);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var o=n(85892).Z;o("0fe1fe4f",i,!0,{sourceMap:!1,shadowMode:!1})},5424:function(t,e,n){var i=n(59835);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var o=n(85892).Z;o("4bfdfab7",i,!0,{sourceMap:!1,shadowMode:!1})},22345:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i,o={uniIcons:n(46008).Z},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-combox",class:t.border?"":"uni-combox__no-border"},[t.label?n("v-uni-view",{staticClass:"uni-combox__label",style:t.labelStyle},[n("v-uni-text",[t._v(t._s(t.label))])],1):t._e(),n("v-uni-view",{staticClass:"uni-combox__input-box"},[n("v-uni-input",{staticClass:"uni-combox__input",attrs:{type:"text",placeholder:t.placeholder,"placeholder-class":"uni-combox__input-plac"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}}),n("uni-icons",{attrs:{type:t.showSelector?"top":"bottom",size:"14",color:"#999"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}})],1),t.showSelector?n("v-uni-view",{staticClass:"uni-combox__selector"},[n("v-uni-view",{staticClass:"uni-popper__arrow"}),n("v-uni-scroll-view",{staticClass:"uni-combox__selector-scroll",attrs:{"scroll-y":"true"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.onScroll.apply(void 0,arguments)}}},[0===t.filterCandidatesLength?n("v-uni-view",{staticClass:"uni-combox__selector-empty"},[n("v-uni-text",[t._v(t._s(t.emptyTips))])],1):t._e(),t._l(t.filterCandidates,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-combox__selector-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectorClick(i)}}},[n("v-uni-text",[t._v(t._s(e))])],1)}))],2)],1):t._e(),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showSelector,expression:"showSelector"}],staticClass:"uni-combox__mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showSelector=!1}}})],1)},l=[],s=(n(95163),n(98010),n(63238),n(27471),n(64970),n(40895),{name:"uniCombox",emits:["input","update:modelValue"],props:{border:{type:Boolean,default:!0},label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:function(){return[]}},emptyTips:{type:String,default:"无匹配项"},value:{type:[String,Number],default:""}},data:function(){return{showSelector:!1,inputVal:"",blurTimer:null}},computed:{labelStyle:function(){return"auto"===this.labelWidth?"":"width: ".concat(this.labelWidth)},filterCandidates:function(){var t=this;return 0===this.inputVal||this.inputVal?this.candidates.filter((function(e){return e.toString().indexOf(t.inputVal)>-1})):this.candidates},filterCandidatesLength:function(){return this.filterCandidates.length}},watch:{value:{handler:function(t){this.inputVal=t},immediate:!0}},methods:{toggleSelector:function(){this.showSelector=!this.showSelector},onFocus:function(){this.showSelector=!0},onBlur:function(){var t=this;this.blurTimer=setTimeout((function(){t.showSelector=!1}),153)},onScroll:function(){this.blurTimer&&(clearTimeout(this.blurTimer),this.blurTimer=null)},onSelectorClick:function(t){this.inputVal=this.filterCandidates[t],this.showSelector=!1,this.$emit("input",this.inputVal),this.$emit("update:modelValue",this.inputVal)},onInput:function(){var t=this;setTimeout((function(){t.$emit("input",t.inputVal),t.$emit("update:modelValue",t.inputVal)}))}}}),r=s,c=(n(52748),n(96904)),u=(0,c.Z)(r,a,l,!1,null,"07eb998f",null,!1,o,i),p=u.exports},5038:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var i,o={uniCard:n(65090).Z,uniSection:n(83858).Z,uniCombox:n(22345).Z},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("组合框一般用于可以选择也可以输入的表单项。")])],1),n("uni-section",{attrs:{title:"基本用法",type:"line"}},[n("v-uni-view",{staticClass:"example-body"},[n("uni-combox",{attrs:{candidates:t.candidates,placeholder:"请选择所在城市"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),n("v-uni-view",{staticClass:"result-box"},[n("v-uni-text",[t._v("所选城市为："+t._s(t.city))])],1)],1)],1),n("uni-section",{attrs:{title:"无边框",subTitle:"使用 border = false 取消边框",type:"line"}},[n("v-uni-view",{staticClass:"example-body"},[n("uni-combox",{attrs:{border:!1,candidates:t.candidates,placeholder:"请选择所在城市"}})],1)],1),n("uni-section",{attrs:{title:"设置无匹配项时的提示语",subTitle:"使用 emptyTips 属性设置无匹配项时的提示语",type:"line"}},[n("v-uni-view",{staticClass:"example-body"},[n("uni-combox",{attrs:{emptyTips:"这里啥都没有",placeholder:"请选择所在城市"}})],1)],1)],1)},l=[],s={components:{},data:function(){return{candidates:["北京","南京","东京","武汉","天津","上海","海口"],city:""}}},r=s,c=(n(5424),n(96904)),u=(0,c.Z)(r,a,l,!1,null,"3c2f5fe0",null,!1,o,i),p=u.exports},4563:function(t,e,n){"use strict";n.r(e);var i=n(54933),o=n.n(i),a=n(93476),l=n.n(a),s=l()(o());s.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-combox[data-v-07eb998f]{font-size:14px;border:1px solid #dcdfe6;border-radius:4px;padding:6px 10px;position:relative;display:flex;flex-direction:row;align-items:center}.uni-combox__label[data-v-07eb998f]{font-size:16px;line-height:22px;padding-right:10px;color:#999}.uni-combox__input-box[data-v-07eb998f]{position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-combox__input[data-v-07eb998f]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-combox__input-plac[data-v-07eb998f]{font-size:14px;color:#999}.uni-combox__selector[data-v-07eb998f]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-combox__selector-scroll[data-v-07eb998f]{max-height:200px;box-sizing:border-box}.uni-combox__selector-empty[data-v-07eb998f],\n.uni-combox__selector-item[data-v-07eb998f]{display:flex;cursor:pointer;line-height:36px;font-size:14px;text-align:center;padding:0 10px}.uni-combox__selector-item[data-v-07eb998f]:hover{background-color:#f9f9f9}.uni-combox__selector-empty[data-v-07eb998f]:last-child,\n.uni-combox__selector-item[data-v-07eb998f]:last-child{border-bottom:none}.uni-popper__arrow[data-v-07eb998f],\n.uni-popper__arrow[data-v-07eb998f]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-07eb998f]{-webkit-filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-07eb998f]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-combox__no-border[data-v-07eb998f]{border:none}.uni-combox__mask[data-v-07eb998f]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:1}',""]),e["default"]=s},59835:function(t,e,n){"use strict";n.r(e);var i=n(54933),o=n.n(i),a=n(93476),l=n.n(a),s=l()(o());s.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.example-body[data-v-3c2f5fe0]{padding:12px;background-color:#fff}.result-box[data-v-3c2f5fe0]{text-align:center;padding:20px 0;font-size:16px}',""]),e["default"]=s}}]);