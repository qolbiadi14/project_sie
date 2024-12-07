!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/trendline
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/trendline",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],e):"object"==typeof exports?exports["highcharts/trendline"]=e(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,function(t,e){return function(){"use strict";var r,n={512:function(t){t.exports=e},944:function(e){e.exports=t}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return n[t](r,r.exports,i),r.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var a={};i.d(a,{default:function(){return v}});var s=i(944),u=/*#__PURE__*/i.n(s),h=i(512),c=/*#__PURE__*/i.n(h),p=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=c().seriesTypes.sma,l=u().extend,d=u().merge,g=u().isArray,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.updateAllPoints=!0,e}return p(e,t),e.prototype.getValues=function(t,e){for(var r=t.xData,n=t.yData,o=[],i=[],a=[],s=[],u=e.index,h=0,c=0,p=0,f=0,l=0,d=0;d<r.length;d++)(0===d||r[d]!==r[d-1])&&l++,o.push(l);for(var d=0;d<o.length;d++)p+=o[d],f+=g(n[d])?n[d][u]:n[d];for(var y=p/o.length,v=f/n.length,d=0;d<o.length;d++){var x=g(n[d])?n[d][u]:n[d];h+=(o[d]-y)*(x-v),c+=Math.pow(o[d]-y,2)}for(var d=0;d<o.length;d++)if(r[d]!==a[a.length-1]){var m=r[d],x=v+h/c*(o[d]-y);i.push([m,x]),a.push(m),s.push(x)}return{xData:a,yData:s,values:i}},e.defaultOptions=d(f.defaultOptions,{params:{period:void 0,index:3}}),e}(f);l(y.prototype,{nameBase:"Trendline",nameComponents:void 0}),c().registerSeriesType("trendline",y);var v=u();return a.default}()});