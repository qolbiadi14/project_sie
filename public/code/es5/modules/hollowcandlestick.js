!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/hollowcandlestick
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Hollow Candlestick series type for Highcharts Stock
 *
 * (c) 2010-2024 Karol Kolodziej
 *
 * License: www.highcharts.com/license
 */function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").Axis):"function"==typeof define&&define.amd?define("highcharts/hollowcandlestick",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"],["highcharts/highcharts","Axis"]],o):"object"==typeof exports?exports["highcharts/hollowcandlestick"]=o(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").Axis):t.Highcharts=o(t.Highcharts,t.Highcharts.SeriesRegistry,t.Highcharts.Axis)}(this,function(t,o,r){return function(){"use strict";var e,i,n={532:function(t){t.exports=r},512:function(t){t.exports=o},944:function(o){o.exports=t}},s={};function l(t){var o=s[t];if(void 0!==o)return o.exports;var r=s[t]={exports:{}};return n[t](r,r.exports,l),r.exports}l.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(o,{a:o}),o},l.d=function(t,o){for(var r in o)l.o(o,r)&&!l.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},l.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)};var a={};l.d(a,{default:function(){return k}});var c=l(944),p=/*#__PURE__*/l.n(c),u=l(512),h=/*#__PURE__*/l.n(u),f=(e=function(t,o){return(e=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])})(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}),d=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return f(o,t),o.prototype.getClassName=function(){var o=t.prototype.getClassName.apply(this),r=this.index,e=this.series.hollowCandlestickData[r];return e.isBullish||"up"!==e.trendDirection||(o+="-bearish-up"),o},o}(h().seriesTypes.candlestick.prototype.pointClass),y=l(532),g=/*#__PURE__*/l.n(y),v=(i=function(t,o){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])})(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}i(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}),w=h().seriesTypes.candlestick,C=p().addEvent,b=p().merge,x=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.hollowCandlestickData=[],o}return v(o,t),o.prototype.getPriceMovement=function(){var t,o=this.allGroupedTable||this.dataTable,r=o.rowCount,e=this.hollowCandlestickData;e.length=0;for(var i=0;i<r;i++){var n=o.getRow(i,this.pointArrayMap);e.push(this.isBullish(n,i?t:n)),t=n}},o.prototype.getLineColor=function(t){return"up"===t?this.options.upColor||"#06b535":this.options.color||"#f21313"},o.prototype.getPointFill=function(t){return t.isBullish?"transparent":"up"===t.trendDirection?this.options.upColor||"#06b535":this.options.color||"#f21313"},o.prototype.init=function(){t.prototype.init.apply(this,arguments),this.hollowCandlestickData=[]},o.prototype.isBullish=function(t,o){return{isBullish:(t[0]||0)<=(t[3]||0),trendDirection:(t[3]||0)<((null==o?void 0:o[3])||0)?"down":"up"}},o.prototype.pointAttribs=function(o,r){var e,i=t.prototype.pointAttribs.call(this,o,r),n=o.index,s=this.hollowCandlestickData[n];return i.fill=this.getPointFill(s)||i.fill,i.stroke=this.getLineColor(s.trendDirection)||i.stroke,r&&(e=this.options.states[r],i.fill=e.color||i.fill,i.stroke=e.lineColor||i.stroke,i["stroke-width"]=e.lineWidth||i["stroke-width"]),i},o.defaultOptions=b(w.defaultOptions,{color:"#f21313",dataGrouping:{groupAll:!0,groupPixelWidth:10},lineColor:"#f21313",upColor:"#06b535",upLineColor:"#06b535"}),o}(w);C(x,"updatedData",function(){this.hollowCandlestickData.length&&(this.hollowCandlestickData.length=0)}),C(g(),"postProcessData",function(){this.series.forEach(function(t){t.is("hollowcandlestick")&&t.getPriceMovement()})}),x.prototype.pointClass=d,h().registerSeriesType("hollowcandlestick",x);var k=p();return a.default}()});