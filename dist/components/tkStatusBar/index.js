!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTk=e():t.VueTk=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){t.exports=n(6)},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],s=f[r.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(u(r.parts[i],e))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(u(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:o}}}}function s(t){for(var e=[],n={},r=0;r<t.length;r++){var s=t[r],i=s[0],o=s[1],a=s[2],u=s[3],c={css:o,media:a,sourceMap:u};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function i(t,e){var n=p(),r=_[_.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),_.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=_.indexOf(t);e>=0&&_.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function u(t,e){var n,r,s;if(e.singleton){var i=g++;n=v||(v=a(e)),r=c.bind(null,n,i,!1),s=c.bind(null,n,i,!0)}else n=a(e),r=l.bind(null,n),s=function(){o(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else s()}}function c(t,e,n,r){var s=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,s);else{var i=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function l(t,e){var n=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=d(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,_=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=s(t);return r(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var a=n[o],u=f[a.id];u.refs--,i.push(u)}if(t){var c=s(t);r(c,e)}for(var o=0;o<i.length;o++){var u=i[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete f[u.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(7),i=r(s),o={_class:null,_color:null,_show:!0,_space:!0,_height:null,setClass:function(t){this._class=t},setColor:function(t){this._color=t},show:function(){this._show=!0},hide:function(){this._show=!1},reset:function(){this._color=this._class=null,this._show=this._space=!0},height:function(){return null===this._height&&(i.default.plus&&window.plus.navigator.isImmersedStatusbar()?this._height=window.plus.navigator.getStatusbarHeight():this._height=0),this._height},toggle:function(){this._show=!this._show},isShow:function(){return this._show},setSpace:function(t){this._space=t}};t.exports=o},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.tkStatusBarState=e.install=e.default=void 0;var s=n(13),i=r(s),o=n(4),a=r(o),u=function(t){t.component("tk-status-bar",t.extend(i.default))};e.default=i.default,e.install=u,e.tkStatusBarState=a.default},function(t,e){"use strict";var n=function(){var t=navigator.userAgent,e=this,n={},r=[function(){var e=t.match(/(MicroMessenger)\/([\d\.]+)/i);return e&&(n.wechat={version:e[2].replace(/_/g,".")}),!1},function(){var e=t.match(/(Android);?[\s\/]+([\d.]+)?/);return e&&(n.android=!0,n.version=e[2],n.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion)),n.android===!0},function(){var e=t.match(/(iPhone\sOS)\s([\d_]+)/);if(e)n.ios=n.iphone=!0,n.version=e[2].replace(/_/g,".");else{var r=t.match(/(iPad).*OS\s([\d_]+)/);r&&(n.ios=n.ipad=!0,n.version=r[2].replace(/_/g,"."))}return n.ios===!0}];[].every.call(r,function(t){return!t.call(e)});var s=t.match(/Html5Plus/i);return s&&(n.plus=!0),n},r=n();t.exports=r},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),i=r(s);e.default={name:"StatusBar",data:function(){return{state:i.default}},computed:{_class:function(){return this.state.class},_style:function(){var t={height:this.state.height()+"px"};return this.state._color?t["background-color"]=this.state._color:this.color&&(t["background-color"]=this.color),t},isShow:function(){return this.state.isShow()&&0!==this.state.height()}},props:{color:String}},t.exports=e.default},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"div[data-v-2944193a]{background-color:#000;display:block;width:100%}.status-bar.fixed[data-v-2944193a]{position:fixed;top:0;left:0;width:100%;z-index:100000}",""])},,,function(t,e,n){var r,s;n(16),r=n(9);var i=n(14);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-2944193a",t.exports=r},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return t.isShow?e("div",{staticClass:"status-bar-wrapper"},[e("div",{staticClass:"status-bar fixed",class:t._class,style:t._style}),t._v(" "),t.state._space?e("div",{staticClass:"status-bar",class:t._class,style:t._style}):t._e()]):t._e()},staticRenderFns:[]}},,function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.id,r,""]]);n(2)(r,{});r.locals&&(t.exports=r.locals)}])});