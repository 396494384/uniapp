(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0f2c":function(t,i,n){"use strict";var e=n("e497"),a=n.n(e);a.a},"37a6":function(t,i,n){"use strict";var e=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("b6b9")),r={components:{List:a.default},data:function(){return{banner:[],goods:[]}},methods:{getBanner:function(){var t=this;return this.$ajax({loading:!0,url:"/api/getlunbo"}).then((function(i){t.banner=i.message}))},getGoods:function(){var t=this;return this.$ajax({loading:!0,url:"/api/getgoods?pageindex=1"}).then((function(i){t.goods=i.message}))}},onLoad:function(){this.getBanner(),this.getGoods()}};i.default=r},"4c73":function(t,i,n){"use strict";var e=n("79c9"),a=n.n(e);a.a},"639e":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"list"},t._l(t.goods,(function(i,e){return n("v-uni-navigator",{key:i.id,attrs:{url:"/pages/goods_details/goods_details?id="+i.id}},[n("v-uni-image",{attrs:{src:i.img_url,mode:"aspectFit"}}),n("v-uni-view",{staticClass:"price"},[n("v-uni-view",{staticClass:"new"},[t._v(t._s(i.sell_price))]),n("v-uni-view",{staticClass:"old"},[t._v(t._s(i.market_price))])],1),n("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title.slice(0,20))+"...")])],1)})),1)],1)},r=[]},7159:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={props:["goods"],data:function(){return{}},methods:{},created:function(){}};i.default=e},7913:function(t,i,n){"use strict";n.r(i);var e=n("9aec"),a=n("8371");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("0f2c");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"8a202410",null,!1,e["a"],o);i["default"]=c.exports},"79c9":function(t,i,n){var e=n("f710");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("6d596ba0",e,!0,{sourceMap:!1,shadowMode:!1})},"7b1b":function(t,i,n){"use strict";n.r(i);var e=n("7159"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},8371:function(t,i,n){"use strict";n.r(i);var e=n("37a6"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},"9aec":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"index"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:5e3,duration:1e3,circular:!0,"indicator-color":"rgba(0,0,0,0.5)","indicator-active-color":"#C8221E"}},t._l(t.banner,(function(t,i){return n("v-uni-swiper-item",{key:t.id},[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{attrs:{src:t.img,mode:""}})],1)],1)})),1),n("v-uni-view",{staticClass:"nav"},[n("v-uni-navigator",{staticClass:"nav_item",attrs:{"hover-class":"none",url:"/pages/goods/goods"}},[n("v-uni-view",{staticClass:"iconfont icon-ziyuan"}),n("v-uni-text",[t._v("超市")])],1),n("v-uni-navigator",{staticClass:"nav_item",attrs:{"hover-class":"none",url:"/pages/contact/contact"}},[n("v-uni-view",{staticClass:"iconfont icon-guanyuwomen"}),n("v-uni-text",[t._v("联系我们")])],1),n("v-uni-navigator",{staticClass:"nav_item",attrs:{"hover-class":"none",url:"/pages/pics/pics"}},[n("v-uni-view",{staticClass:"iconfont icon-tupian"}),n("v-uni-text",[t._v("社区图片")])],1),n("v-uni-navigator",{staticClass:"nav_item",attrs:{"hover-class":"none",url:"/pages/videos/videos"}},[n("v-uni-view",{staticClass:"iconfont icon-shipin"}),n("v-uni-text",[t._v("学习视频")])],1)],1),n("v-uni-view",{staticClass:"hot_goods"},[n("v-uni-view",{staticClass:"tit"},[t._v("推荐商品")]),n("List",{attrs:{goods:t.goods}})],1)],1)},r=[]},ad0a:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.index uni-swiper[data-v-8a202410]{width:%?750?%;height:%?380?%}.index uni-swiper .swiper-item uni-image[data-v-8a202410]{width:%?750?%;height:%?380?%}.index .nav[data-v-8a202410]{width:%?750?%;height:%?240?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.index .nav .nav_item[data-v-8a202410]{width:%?187.5?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:center;align-content:center}.index .nav .nav_item uni-view[data-v-8a202410]{width:%?100?%;height:%?100?%;border-radius:%?100?%;background-color:#c8221e;color:#fff;text-align:center;line-height:%?100?%;font-size:%?44?%}.index .nav .nav_item uni-view.icon-tupian[data-v-8a202410]{font-size:%?38?%}.index .nav .nav_item uni-text[data-v-8a202410]{width:100%;text-align:center;color:#666;margin-top:%?10?%}.index .hot_goods[data-v-8a202410]{background-color:#f5f5f5}.index .hot_goods .tit[data-v-8a202410]{line-height:%?90?%;background-color:#fff;color:#c8221e;font-size:%?32?%;text-align:center;border-top-width:1px;border-top-style:solid;border-top-color:#eee;letter-spacing:%?20?%}',""]),t.exports=i},b6b9:function(t,i,n){"use strict";n.r(i);var e=n("639e"),a=n("7b1b");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("4c73");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"e602ae74",null,!1,e["a"],o);i["default"]=c.exports},e497:function(t,i,n){var e=n("ad0a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("0379c0b7",e,!0,{sourceMap:!1,shadowMode:!1})},f710:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list[data-v-e602ae74]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:%?20?%;padding-top:%?20?%;padding-right:%?20?%;padding-bottom:%?20?%}.list uni-navigator[data-v-e602ae74]{width:%?345?%;background-color:#fff;overflow:hidden;margin-bottom:%?20?%}.list uni-navigator uni-image[data-v-e602ae74]{display:block;width:%?315?%;height:%?315?%;margin:%?20?% auto 0}.list uni-navigator uni-view.price[data-v-e602ae74]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list uni-navigator uni-view.price .new[data-v-e602ae74]{color:#c8221e;font-weight:700;font-size:%?36?%;padding-left:%?20?%}.list uni-navigator uni-view.price .old[data-v-e602ae74]{font-size:%?24?%;color:#999;text-decoration:line-through;font-style:italic;padding-left:%?20?%}.list uni-navigator uni-view.title[data-v-e602ae74]{color:#666;line-height:1.5;padding-left:%?20?%;padding-right:%?20?%;padding-bottom:%?20?%}',""]),t.exports=i}}]);