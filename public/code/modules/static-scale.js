!/**
 * Highcharts Gantt JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/static-scale
 * @requires highcharts
 *
 * StaticScale
 *
 * (c) 2016-2024 Torstein Honsi, Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/static-scale",[["highcharts/highcharts"]],e):"object"==typeof exports?exports["highcharts/static-scale"]=e(require("highcharts")):t.Highcharts=e(t.Highcharts)}(this,t=>(()=>{"use strict";var e={944:e=>{e.exports=t}},i={};function r(t){var a=i[t];if(void 0!==a)return a.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var a={};r.d(a,{default:()=>u});var o=r(944),s=/*#__PURE__*/r.n(o);let{addEvent:h,defined:c,isNumber:l,pick:n}=s();function p(){let t=this.chart.options.chart;!this.horiz&&l(this.options.staticScale)&&(!t.height||t.scrollablePlotArea&&t.scrollablePlotArea.minHeight)&&(this.staticScale=this.options.staticScale)}function d(){if("adjustHeight"!==this.redrawTrigger){for(let t of this.axes||[]){let e=t.chart,i=!!e.initiatedScale&&e.options.animation,r=t.options.staticScale;if(t.staticScale&&c(t.min)){let a=n(t.brokenAxis&&t.brokenAxis.unitLength,t.max+t.tickInterval-t.min)*r,o=(a=Math.max(a,r))-e.plotHeight;!e.scrollablePixelsY&&Math.abs(o)>=1&&(e.plotHeight=a,e.redrawTrigger="adjustHeight",e.setSize(void 0,e.chartHeight+o,i)),t.series.forEach(function(t){let i=t.sharedClipKey&&e.sharedClips[t.sharedClipKey];i&&i.attr(e.inverted?{width:e.plotHeight}:{height:e.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=null}let g=s();({compose:function(t,e){let i=e.prototype;i.adjustHeight||(h(t,"afterSetOptions",p),i.adjustHeight=d,h(e,"render",i.adjustHeight))}}).compose(g.Axis,g.Chart);let u=s();return a.default})());