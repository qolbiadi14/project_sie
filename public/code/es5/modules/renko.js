!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/renko
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Renko series type for Highcharts Stock
 *
 * (c) 2010-2024 Pawel Lysy
 *
 * License: www.highcharts.com/license
 */function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").Series.types.column):"function"==typeof define&&define.amd?define("highcharts/renko",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"],["highcharts/highcharts","Series","types","column"]],r):"object"==typeof exports?exports["highcharts/renko"]=r(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").Series.types.column):t.Highcharts=r(t.Highcharts,t.Highcharts.SeriesRegistry,t.Highcharts.Series.types.column)}(this,function(t,r,e){return function(){"use strict";var o,n,i={448:function(t){t.exports=e},512:function(t){t.exports=r},944:function(r){r.exports=t}},s={};function a(t){var r=s[t];if(void 0!==r)return r.exports;var e=s[t]={exports:{}};return i[t](e,e.exports,a),e.exports}a.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(r,{a:r}),r},a.d=function(t,r){for(var e in r)a.o(r,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)};var p={};a.d(p,{default:function(){return C}});var u=a(944),c=/*#__PURE__*/a.n(u),h=a(512),l=/*#__PURE__*/a.n(h),f=(o=function(t,r){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}),y=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return f(r,t),r.prototype.getClassName=function(){return t.prototype.getClassName.call(this)+(this.upTrend?" highcharts-point-up":" highcharts-point-down")},r}(l().seriesTypes.column.prototype.pointClass),g={boxSize:4,groupPadding:0,pointPadding:0,downColor:"#ff0000",navigatorOptions:{type:"renko"},fillColor:"transparent",borderWidth:2,lineWidth:0,stickyTracking:!0,borderRadius:{where:"all"},tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.low:.2f} - {point.y:.2f}</b><br/>'}},d=a(448),m=/*#__PURE__*/a.n(d),v=(n=function(t,r){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}),x=c().extend,b=c().merge,_=c().relativeLength,w=c().isNumber,O=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.hasDerivedData=!0,r.allowDG=!1,r}return v(r,t),r.prototype.init=function(){t.prototype.init.apply(this,arguments),this.renkoData=[]},r.prototype.setData=function(r,e,o){this.renkoData=[],t.prototype.setData.call(this,r,e,o,!1)},r.prototype.getXExtremes=function(t){return this.processData(),{min:(t=this.getColumn("x",!0))[0],max:t[t.length-1]}},r.prototype.getProcessedData=function(){var t=this.dataTable.modified,r=[],e=[],o=[],n=this.getColumn("x",!0),i=this.getColumn("y",!0);if(!this.renkoData||this.renkoData.length>0)return{modified:t,closestPointRange:1,cropped:!1,cropStart:0};for(var s=this.options.boxSize,a=w(s)?s:_(s,i[0]),p=[],u=n.length,c=0,h=i[0],l=1;l<u;l++){var f=i[l]-i[l-1];if(f>a){2===c&&(h+=a);for(var y=0;y<f/a;y++)p.push({x:n[l]+y,low:h,y:h+a,color:this.options.color,upTrend:!0}),h+=a;c=1}else if(Math.abs(f)>a){1===c&&(h-=a);for(var y=0;y<Math.abs(f)/a;y++)p.push({x:n[l]+y,low:h-a,y:h,color:this.options.downColor,upTrend:!1}),h-=a;c=2}}this.renkoData=p;for(var g=0;g<p.length;g++){var d=p[g];r.push(d.x),e.push(d.y),o.push(d.low)}return this.processedData=p,t.setColumn("x",r),t.setColumn("y",e),t.setColumn("low",o),{modified:t,cropped:!1,cropStart:0,closestPointRange:1}},r.defaultOptions=b(m().defaultOptions,g),r}(m());x(O.prototype,{pointClass:y}),l().registerSeriesType("renko",O);var C=c();return p.default}()});