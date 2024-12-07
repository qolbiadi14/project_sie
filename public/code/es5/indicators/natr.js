!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Paweł Dalek
 *
 * License: www.highcharts.com/license
 */function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/natr",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/natr"]=r(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=r(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,function(t,r){return function(){"use strict";var e,n={512:function(t){t.exports=r},944:function(r){r.exports=t}},o={};function i(t){var r=o[t];if(void 0!==r)return r.exports;var e=o[t]={exports:{}};return n[t](e,e.exports,i),e.exports}i.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(r,{a:r}),r},i.d=function(t,r){for(var e in r)i.o(r,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},i.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)};var u={};i.d(u,{default:function(){return g}});var s=i(944),a=/*#__PURE__*/i.n(s),c=i(512),f=/*#__PURE__*/i.n(c),p=(e=function(t,r){return(e=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}),h=f().seriesTypes.atr,l=a().merge,y=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return p(r,t),r.prototype.getValues=function(r,e){var n=t.prototype.getValues.apply(this,arguments),o=n.values.length,i=r.yData,u=0,s=e.period-1;if(n){for(;u<o;u++)n.yData[u]=n.values[u][1]/i[s][3]*100,n.values[u][1]=n.yData[u],s++;return n}},r.defaultOptions=l(h.defaultOptions,{tooltip:{valueSuffix:"%"}}),r}(h);f().registerSeriesType("natr",y);var g=a();return u.default}()});