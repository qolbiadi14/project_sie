!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/windbarb
 * @requires highcharts
 *
 * Wind barb series module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").dataGrouping.approximations,require("highcharts").Series.types.column,require("highcharts").Series,require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/windbarb",[["highcharts/highcharts"],["highcharts/highcharts","dataGrouping","approximations"],["highcharts/highcharts","Series","types","column"],["highcharts/highcharts","Series"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/windbarb"]=r(require("highcharts"),require("highcharts").dataGrouping.approximations,require("highcharts").Series.types.column,require("highcharts").Series,require("highcharts").SeriesRegistry):t.Highcharts=r(t.Highcharts,t.Highcharts.dataGrouping.approximations,t.Highcharts.Series.types.column,t.Highcharts.Series,t.Highcharts.SeriesRegistry)}(this,function(t,r,o,e,i){return function(){"use strict";var n,s,a,p={448:function(t){t.exports=o},820:function(t){t.exports=e},512:function(t){t.exports=i},956:function(t){t.exports=r},944:function(r){r.exports=t}},h={};function l(t){var r=h[t];if(void 0!==r)return r.exports;var o=h[t]={exports:{}};return p[t](o,o.exports,l),o.exports}l.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(r,{a:r}),r},l.d=function(t,r){for(var o in r)l.o(r,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},l.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)};var c={};l.d(c,{default:function(){return z}});var u=l(944),f=/*#__PURE__*/l.n(u),d=l(956),g=/*#__PURE__*/l.n(d),y=l(448),b=/*#__PURE__*/l.n(y),v=l(820),x=/*#__PURE__*/l.n(v),m=f().composed,S=b().prototype,O=x().prototype,w=f().defined,L=f().pushUnique,_=f().stableSort;!function(t){function r(t){return O.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this,t)}function o(){S.translate.apply(this);var t,r,o,e,i,n,s,a,p,h=this,l=h.options,c=h.chart,u=h.points,f=l.onSeries,d=f&&c.get(f),g=d&&d.options.step,y=d&&d.points,b=c.inverted,v=h.xAxis,x=h.yAxis,m=u.length-1,O=l.onKey||"y",L=y&&y.length,k=0;if(d&&d.visible&&L)for(k=(d.pointXOffset||0)+(d.barW||0)/2,a=d.currentDataGrouping,n=y[L-1].x+(a?a.totalRange:0),_(u,function(t,r){return t.x-r.x}),O="plot"+O[0].toUpperCase()+O.substr(1);L--&&u[m]&&"break"!==function(){if(i=y[L],(o=u[m]).y=i.y,i.x<=o.x&&void 0!==i[O]){if(o.x<=n&&(o.plotY=i[O],i.x<o.x&&!g&&(s=y[L+1])&&void 0!==s[O])){if(w(o.plotX)&&d.is("spline")){for(var e=[i.plotX||0,i.plotY||0],a=[s.plotX||0,s.plotY||0],h=(null===(t=i.controlPoints)||void 0===t?void 0:t.high)||e,l=(null===(r=s.controlPoints)||void 0===r?void 0:r.low)||a,c=function(t,r){return Math.pow(1-t,3)*e[r]+3*(1-t)*(1-t)*t*h[r]+3*(1-t)*t*t*l[r]+t*t*t*a[r]},f=0,b=1,v=void 0,S=0;S<100;S++){var _=(f+b)/2,k=c(_,0);if(null===k)break;if(.25>Math.abs(k-o.plotX)){v=_;break}k<o.plotX?f=_:b=_}w(v)&&(o.plotY=c(v,1),o.y=x.toValue(o.plotY,!0))}else p=(o.x-i.x)/(s.x-i.x),o.plotY+=p*(s[O]-i[O]),o.y+=p*(s.y-i.y)}if(m--,L++,m<0)return"break"}}(););u.forEach(function(t,r){var o;t.plotX+=k,(void 0===t.plotY||b)&&(t.plotX>=0&&t.plotX<=v.len?b?(t.plotY=v.translate(t.x,0,1,0,1),t.plotX=w(t.y)?x.translate(t.y,0,0,0,1):0):t.plotY=(v.opposite?0:h.yAxis.len)+v.offset:t.shapeArgs={}),(e=u[r-1])&&e.plotX===t.plotX&&(void 0===e.stackIndex&&(e.stackIndex=0),o=e.stackIndex+1),t.stackIndex=o}),this.onSeries=d}t.compose=function(t){if(L(m,"OnSeries")){var e=t.prototype;e.getPlotBox=r,e.translate=o}return t},t.getPlotBox=r,t.translate=o}(a||(a={}));var k=a,P=l(512),X=/*#__PURE__*/l.n(P),A=(n=function(t,r){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}),G=f().isNumber,M=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return A(r,t),r.prototype.isValid=function(){return G(this.value)&&this.value>=0},r}(b().prototype.pointClass),j={dataGrouping:{enabled:!0,approximation:"windbarb",groupPixelWidth:30},lineWidth:2,onSeries:null,states:{hover:{lineWidthPlus:0}},tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>'},vectorLength:20,colorKey:"value",yOffset:-20,xOffset:0},Y=(s=function(t,r){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}s(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}),q=f().animObject,C=X().seriesTypes.column,H=f().extend,I=f().merge,T=f().pick,W=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return Y(r,t),r.prototype.init=function(r,o){t.prototype.init.call(this,r,o)},r.prototype.pointAttribs=function(t,r){var o=this.options,e=t.color||this.color,i=this.options.lineWidth;return r&&(e=o.states[r].color||e,i=(o.states[r].lineWidth||i)+(o.states[r].lineWidthPlus||0)),{stroke:e,"stroke-width":i}},r.prototype.windArrow=function(t){var r,o=t.beaufortLevel,e=this.options.vectorLength/20,i=1.943844*t.value,n=-10;if(t.isNull)return[];if(0===o)return this.chart.renderer.symbols.circle(-10*e,-10*e,20*e,20*e);var s=[["M",0,7*e],["L",-1.5*e,7*e],["L",0,10*e],["L",1.5*e,7*e],["L",0,7*e],["L",0,-10*e]];if((r=(i-i%50)/50)>0)for(;r--;)s.push(-10===n?["L",0,n*e]:["M",0,n*e],["L",5*e,n*e+2],["L",0,n*e+4]),i-=50,n+=7;if((r=(i-i%10)/10)>0)for(;r--;)s.push(-10===n?["L",0,n*e]:["M",0,n*e],["L",7*e,n*e]),i-=10,n+=3;if((r=(i-i%5)/5)>0)for(;r--;)s.push(-10===n?["L",0,n*e]:["M",0,n*e],["L",4*e,n*e]),i-=5,n+=3;return s},r.prototype.drawPoints=function(){for(var t=this.chart,r=this.yAxis,o=t.inverted,e=this.options.vectorLength/2,i=0,n=this.points;i<n.length;i++){var s=n[i],a=s.plotX,p=s.plotY;!1===this.options.clip||t.isInsidePlot(a,0)?(s.graphic||(s.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+T(s.colorIndex,s.series.colorIndex))),s.graphic.attr({d:this.windArrow(s),translateX:a+this.options.xOffset,translateY:p+this.options.yOffset,rotation:s.direction}),this.chart.styledMode||s.graphic.attr(this.pointAttribs(s))):s.graphic&&(s.graphic=s.graphic.destroy()),s.tooltipPos=[a+this.options.xOffset+(o&&!this.onSeries?e:0),p+this.options.yOffset-(o?0:e+r.pos-t.plotTop)]}},r.prototype.animate=function(t){t?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},q(this.options.animation))},r.prototype.markerAttribs=function(){return{}},r.prototype.getExtremes=function(){return{}},r.prototype.shouldShowTooltip=function(r,o,e){return void 0===e&&(e={}),e.ignoreX=this.chart.inverted,e.ignoreY=!e.ignoreX,t.prototype.shouldShowTooltip.call(this,r,o,e)},r.defaultOptions=I(C.defaultOptions,j),r}(C);k.compose(W),H(W.prototype,{beaufortFloor:[0,.3,1.6,3.4,5.5,8,10.8,13.9,17.2,20.8,24.5,28.5,32.7],beaufortName:["Calm","Light air","Light breeze","Gentle breeze","Moderate breeze","Fresh breeze","Strong breeze","Near gale","Gale","Strong gale","Storm","Violent storm","Hurricane"],invertible:!1,parallelArrays:["x","value","direction"],pointArrayMap:["value","direction"],pointClass:M,trackerGroups:["markerGroup"],translate:function(){var t=this.beaufortFloor,r=this.beaufortName;k.translate.call(this);for(var o=0,e=this.points;o<e.length;o++){for(var i=e[o],n=0;n<t.length&&!(t[n]>i.value);n++);i.beaufortLevel=n-1,i.beaufort=r[n-1]}}}),X().registerSeriesType("windbarb",W),g().windbarb||(g().windbarb=function(t,r){for(var o=0,e=0,i=0,n=t.length;i<n;i++)o+=t[i]*Math.cos(r[i]*f().deg2rad),e+=t[i]*Math.sin(r[i]*f().deg2rad);return[t.reduce(function(t,r){return t+r},0)/t.length,Math.atan2(e,o)/f().deg2rad]});var z=f();return c.default}()});