!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/mfi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Money Flow Index indicator for Highcharts Stock
 *
 * (c) 2010-2024 Grzegorz Blachliński
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/mfi",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/mfi"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,function(e,t){return function(){"use strict";var r,n={512:function(e){e.exports=t},944:function(t){t.exports=e}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var u={};i.d(u,{default:function(){return S}});var s=i(944),a=/*#__PURE__*/i.n(s),c=i(512),h=/*#__PURE__*/i.n(c),f=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=h().seriesTypes.sma,l=a().extend,y=a().merge,d=a().error,g=a().isArray;function v(e){return e.reduce(function(e,t){return e+t})}function m(e){return(e[1]+e[2]+e[3])/3}var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),t.prototype.getValues=function(e,t){var r,n,o,i,u,s,a=t.period,c=e.xData,h=e.yData,f=h?h.length:0,p=t.decimals,l=e.chart.get(t.volumeSeriesID),y=(null==l?void 0:l.getColumn("y"))||[],x=[],S=[],O=[],_=[],b=[],j=!1,D=1;if(!l){d("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);return}if(!(c.length<=a)&&g(h[0])&&4===h[0].length&&y){for(r=m(h[D]);D<a+1;)n=r,j=(r=m(h[D]))>=n,o=r*y[D],_.push(j?o:0),b.push(j?0:o),D++;for(s=D-1;s<f;s++)s>D-1&&(_.shift(),b.shift(),n=r,j=(r=m(h[s]))>n,o=r*y[s],_.push(j?o:0),b.push(j?0:o)),i=v(b),u=parseFloat((100-100/(1+v(_)/i)).toFixed(p)),x.push([c[s],u]),S.push(c[s]),O.push(u);return{values:x,xData:S,yData:O}}},t.defaultOptions=y(p.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),t}(p);l(x.prototype,{nameBase:"Money Flow Index"}),h().registerSeriesType("mfi",x);var S=a();return u.default}()});