!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/psar
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Parabolic SAR Indicator for Highcharts Stock
 *
 * (c) 2010-2024 Grzegorz Blachliński
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/psar",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],e):"object"==typeof exports?exports["highcharts/psar"]=e(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,function(t,e){return function(){"use strict";var r,n={512:function(t){t.exports=e},944:function(e){e.exports=t}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return n[t](r,r.exports,o),r.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var a={};o.d(a,{default:function(){return g}});var c=o(944),s=/*#__PURE__*/o.n(c),u=o(512),h=/*#__PURE__*/o.n(u),l=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=h().seriesTypes.sma,f=s().merge;function d(t,e){return parseFloat(t.toFixed(e))}var y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nameComponents=void 0,e}return l(e,t),e.prototype.getValues=function(t,e){var r,n,i,o,a,c,s,u,h,l,p,f,y,g,m,x,v,b,O,_,j,F,A,M,S,P=t.xData,q=t.yData,w=e.maxAccelerationFactor,D=e.increment,R=e.initialAccelerationFactor,H=e.decimals,T=e.index,C=[],W=[],k=[],E=e.initialAccelerationFactor,V=q[0][1],z=1,B=q[0][2];if(!(T>=q.length)){for(S=0;S<T;S++)V=Math.max(q[S][1],V),B=Math.min(q[S][2],d(B,H));for(g=q[S][1]>B?1:-1,m=V-B,x=(E=e.initialAccelerationFactor)*m,C.push([P[T],B]),W.push(P[T]),k.push(d(B,H)),S=T+1;S<q.length;S++)b=q[S-1][2],O=q[S-2][2],_=q[S-1][1],j=q[S-2][1],A=q[S][1],M=q[S][2],null!==O&&null!==j&&null!==b&&null!==_&&null!==A&&null!==M&&(r=g,n=z,i=B,o=x,a=V,B=r===n?1===r?i+o<Math.min(O,b)?i+o:Math.min(O,b):i+o>Math.max(j,_)?i+o:Math.max(j,_):a,l=g,p=V,F=1===l?A>p?A:p:M<p?M:p,f=z,y=B,c=v=1===f&&M>y||-1===f&&A>y?1:-1,s=g,u=V,h=E,x=(E=c===s?1===c&&F>u||-1===c&&F<u?h===w?w:d(h+D,2):h:R)*(m=F-B),C.push([P[S],d(B,H)]),W.push(P[S]),k.push(d(B,H)),z=g,g=v,V=F);return{values:C,xData:W,yData:k}}},e.defaultOptions=f(p.defaultOptions,{lineWidth:0,marker:{enabled:!0},states:{hover:{lineWidthPlus:0}},params:{period:void 0,initialAccelerationFactor:.02,maxAccelerationFactor:.2,increment:.02,index:2,decimals:4}}),e}(p);h().registerSeriesType("psar",y);var g=s();return a.default}()});