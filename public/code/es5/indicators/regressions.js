!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/regressions
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Kamil Kulig
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/regressions",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],e):"object"==typeof exports?exports["highcharts/regressions"]=e(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,function(t,e){return function(){"use strict";var r,n,o,i,s={512:function(t){t.exports=e},944:function(e){e.exports=t}},a={};function p(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={exports:{}};return s[t](r,r.exports,p),r.exports}p.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return p.d(e,{a:e}),e},p.d=function(t,e){for(var r in e)p.o(e,r)&&!p.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},p.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var u={};p.d(u,{default:function(){return Y}});var c=p(944),l=/*#__PURE__*/p.n(c),f=p(512),y=/*#__PURE__*/p.n(f),h=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),g=y().seriesTypes.sma,d=l().isArray,_=l().extend,O=l().merge,v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e.prototype.getRegressionLineParameters=function(t,e){var r,n,o=this.options.params.index,i=function(t,e){return d(t)?t[e]:t},s=t.reduce(function(t,e){return e+t},0),a=e.reduce(function(t,e){return i(e,o)+t},0),p=s/t.length,u=a/e.length,c=0,l=0;for(n=0;n<t.length;n++)c+=(r=t[n]-p)*(i(e[n],o)-u),l+=Math.pow(r,2);var f=l?c/l:0;return{slope:f,intercept:u-f*p}},e.prototype.getEndPointY=function(t,e){return t.slope*e+t.intercept},e.prototype.transformXData=function(t,e){var r=t[0];return t.map(function(t){return(t-r)/e})},e.prototype.findClosestDistance=function(t){var e,r,n;for(n=1;n<t.length-1;n++)(e=t[n]-t[n-1])>0&&(void 0===r||e<r)&&(r=e);return r},e.prototype.getValues=function(t,e){var r,n,o,i,s,a,p,u,c,l=t.xData,f=t.yData,y=e.period,h={xData:[],yData:[],values:[]},g=this.options.params.xAxisUnit||this.findClosestDistance(l);for(n=y-1;n<=l.length-1;n++)o=n-y+1,i=n+1,s=l[n],p=l.slice(o,i),u=f.slice(o,i),c=this.transformXData(p,g),r=this.getRegressionLineParameters(c,u),a=this.getEndPointY(r,c[c.length-1]),h.values.push({regressionLineParameters:r,x:s,y:a}),d(h.xData)&&h.xData.push(s),d(h.yData)&&h.yData.push(a);return h},e.defaultOptions=O(g.defaultOptions,{params:{xAxisUnit:null},tooltip:{valueDecimals:4}}),e}(g);_(v.prototype,{nameBase:"Linear Regression Indicator"}),y().registerSeriesType("linearRegression",v);var x=(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),m=y().seriesTypes.linearRegression,b=l().extend,P=l().merge,j=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return x(e,t),e.prototype.getEndPointY=function(t){return t.slope},e.defaultOptions=P(m.defaultOptions),e}(m);b(j.prototype,{nameBase:"Linear Regression Slope Indicator"}),y().registerSeriesType("linearRegressionSlope",j);var R=(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),w=y().seriesTypes.linearRegression,S=l().extend,T=l().merge,D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return R(e,t),e.prototype.getEndPointY=function(t){return t.intercept},e.defaultOptions=T(w.defaultOptions),e}(w);S(D.prototype,{nameBase:"Linear Regression Intercept Indicator"}),y().registerSeriesType("linearRegressionIntercept",D);var A=(i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),E=y().seriesTypes.linearRegression,I=l().extend,L=l().merge,C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return A(e,t),e.prototype.slopeToAngle=function(t){return 180/Math.PI*Math.atan(t)},e.prototype.getEndPointY=function(t){return this.slopeToAngle(t.slope)},e.defaultOptions=L(E.defaultOptions,{tooltip:{pointFormat:'<span style="color:{point.color}">●</span>{series.name}: <b>{point.y}\xb0</b><br/>'}}),e}(E);I(C.prototype,{nameBase:"Linear Regression Angle Indicator"}),y().registerSeriesType("linearRegressionAngle",C);var Y=l();return u.default}()});