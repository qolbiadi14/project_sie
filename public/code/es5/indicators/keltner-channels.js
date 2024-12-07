!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/keltner-channels
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Daniel Studencki
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/keltner-channels",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],e):"object"==typeof exports?exports["highcharts/keltner-channels"]=e(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,function(t,e){return function(){"use strict";var r,o,i={512:function(t){t.exports=e},944:function(e){e.exports=t}},n={};function a(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={exports:{}};return i[t](r,r.exports,a),r.exports}a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var s={};a.d(s,{default:function(){return C}});var p=a(944),l=/*#__PURE__*/a.n(p),h=a(512),c=/*#__PURE__*/a.n(h),u=c().seriesTypes.sma.prototype,f=l().defined,y=l().error,d=l().merge;!function(t){var e=["bottomLine"],r=["top","bottom"],o=["top"];function i(t){return"plot"+t.charAt(0).toUpperCase()+t.slice(1)}function n(t,e){var r=[];return(t.pointArrayMap||[]).forEach(function(t){t!==e&&r.push(i(t))}),r}function a(){var t,e=this,r=e.pointValKey,o=e.linesApiNames,a=e.areaLinesNames,s=e.points,p=e.options,l=e.graph,h={options:{gapSize:p.gapSize}},c=[],g=n(e,r),m=s.length;if(g.forEach(function(e,r){for(c[r]=[];m--;)t=s[m],c[r].push({x:t.x,plotX:t.plotX,plotY:t[e],isNull:!f(t[e])});m=s.length}),e.userOptions.fillColor&&a.length){var v=c[g.indexOf(i(a[0]))],x=1===a.length?s:c[g.indexOf(i(a[1]))],b=e.color;e.points=x,e.nextPoints=v,e.color=e.userOptions.fillColor,e.options=d(s,h),e.graph=e.area,e.fillGraph=!0,u.drawGraph.call(e),e.area=e.graph,delete e.nextPoints,delete e.fillGraph,e.color=b}o.forEach(function(t,r){c[r]?(e.points=c[r],p[t]?e.options=d(p[t].styles,h):y('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),e.graph=e["graph"+t],u.drawGraph.call(e),e["graph"+t]=e.graph):y('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),e.points=s,e.options=p,e.graph=l,u.drawGraph.call(e)}function s(t){var e,r=[],o=[];if(t=t||this.points,this.fillGraph&&this.nextPoints){if((e=u.getGraphPath.call(this,this.nextPoints))&&e.length){e[0][0]="L",r=u.getGraphPath.call(this,t),o=e.slice(0,r.length);for(var i=o.length-1;i>=0;i--)r.push(o[i])}}else r=u.getGraphPath.apply(this,arguments);return r}function p(t){var e=[];return(this.pointArrayMap||[]).forEach(function(r){e.push(t[r])}),e}function l(){var t,e=this,r=this.pointArrayMap,o=[];o=n(this),u.translate.apply(this,arguments),this.points.forEach(function(i){r.forEach(function(r,n){t=i[r],e.dataModify&&(t=e.dataModify.modifyValue(t)),null!==t&&(i[o[n]]=e.yAxis.toPixels(t,!0))})})}t.compose=function(t){var i=t.prototype;return i.linesApiNames=i.linesApiNames||e.slice(),i.pointArrayMap=i.pointArrayMap||r.slice(),i.pointValKey=i.pointValKey||"top",i.areaLinesNames=i.areaLinesNames||o.slice(),i.drawGraph=a,i.getGraphPath=s,i.toYData=p,i.translate=l,t}}(o||(o={}));var g=o,m=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),v=c().seriesTypes.sma,x=l().correctFloat,b=l().extend,A=l().merge,O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return m(e,t),e.prototype.init=function(){c().seriesTypes.sma.prototype.init.apply(this,arguments),this.options=A({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)},e.prototype.getValues=function(t,e){var r,o,i,n,a,s,p,l=e.period,h=e.periodATR,u=e.multiplierATR,f=e.index,y=t.yData,d=y?y.length:0,g=[],m=c().seriesTypes.ema.prototype.getValues(t,{period:l,index:f}),v=c().seriesTypes.atr.prototype.getValues(t,{period:h}),b=[],A=[];if(!(d<l)){for(p=l;p<=d;p++)a=m.values[p-l],s=v.values[p-h],n=a[0],o=x(a[1]+u*s[1]),i=x(a[1]-u*s[1]),r=a[1],g.push([n,o,r,i]),b.push(n),A.push([o,r,i]);return{values:g,xData:b,yData:A}}},e.defaultOptions=A(v.defaultOptions,{params:{index:0,period:20,periodATR:10,multiplierATR:2},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">●</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'},marker:{enabled:!1},dataGrouping:{approximation:"averages"},lineWidth:1}),e}(v);b(O.prototype,{nameBase:"Keltner Channels",areaLinesNames:["top","bottom"],nameComponents:["period","periodATR","multiplierATR"],linesApiNames:["topLine","bottomLine"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"}),g.compose(O),c().registerSeriesType("keltnerchannels",O);var C=l();return s.default}()});