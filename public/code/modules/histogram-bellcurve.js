!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/histogram-bellcurve
 * @requires highcharts
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Sebastian Domas
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").Series,require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/histogram-bellcurve",[["highcharts/highcharts"],["highcharts/highcharts","Series"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/histogram-bellcurve"]=t(require("highcharts"),require("highcharts").Series,require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.Series,e.Highcharts.SeriesRegistry)}(this,(e,t,s)=>(()=>{"use strict";var i,r={820:e=>{e.exports=t},512:e=>{e.exports=s},944:t=>{t.exports=e}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var s=a[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};n.d(o,{default:()=>I});var h=n(944),l=/*#__PURE__*/n.n(h),d=n(820),u=/*#__PURE__*/n.n(d);let{noop:p}=l(),{addEvent:c,defined:g}=l();!function(e){function t(){u().prototype.init.apply(this,arguments),this.initialised=!1,this.baseSeries=null,this.eventRemovers=[],this.addEvents()}function s(){let e=this.chart,t=this.options.baseSeries,s=g(t)&&(e.series[t]||e.get(t));this.baseSeries=s||null}function i(){this.eventRemovers.push(c(this.chart,"afterLinkSeries",()=>{this.setBaseSeries(),this.baseSeries&&!this.initialised&&(this.setDerivedData(),this.addBaseSeriesEvents(),this.initialised=!0)}))}function r(){this.eventRemovers.push(c(this.baseSeries,"updatedData",()=>{this.setDerivedData()}),c(this.baseSeries,"destroy",()=>{this.baseSeries=null,this.initialised=!1}))}function a(){this.eventRemovers.forEach(e=>{e()}),u().prototype.destroy.apply(this,arguments)}e.hasDerivedData=!0,e.setDerivedData=p,e.compose=function(e){let n=e.prototype;return n.addBaseSeriesEvents=r,n.addEvents=i,n.destroy=a,n.init=t,n.setBaseSeries=s,e},e.init=t,e.setBaseSeries=s,e.addEvents=i,e.addBaseSeriesEvents=r,e.destroy=a}(i||(i={}));let v=i;var f=n(512),b=/*#__PURE__*/n.n(f);let{column:m}=b().seriesTypes,{arrayMax:y,arrayMin:D,correctFloat:S,extend:x,isNumber:M,merge:q}=l(),O={"square-root":function(e){return Math.ceil(Math.sqrt(e.options.data.length))},sturges:function(e){return Math.ceil(Math.log(e.options.data.length)*Math.LOG2E)},rice:function(e){return Math.ceil(2*Math.pow(e.options.data.length,1/3))}};class R extends m{binsNumber(){let e=this.options.binsNumber,t=O[e]||"function"==typeof e&&e;return Math.ceil(t&&t(this.baseSeries)||(M(e)?e:O["square-root"](this.baseSeries)))}derivedData(e,t,s){var i;let r;let a=S(y(e)),n=S(D(e)),o=[],h={},l=[];for(s=this.binWidth=S(M(s)?s||1:(a-n)/t),this.options.pointRange=Math.max(s,0),r=n;r<a&&(this.userOptions.binWidth||S(a-r)>=s||0>=S(S(n+o.length*s)-r));r=S(r+s))o.push(r),h[r]=0;0!==h[n]&&(o.push(n),h[n]=0);let d=(i=o.map(e=>parseFloat(e)),function(e){let t=1;for(;i[t]<=e;)t++;return i[--t]});for(let t of e)h[S(d(t))]++;for(let e of Object.keys(h))l.push({x:Number(e),y:h[e],x2:S(Number(e)+s)});return l.sort((e,t)=>e.x-t.x),l[l.length-1].x2=a,l}setDerivedData(){let e=this.baseSeries?.getColumn("y");if(!e?.length){this.setData([]);return}let t=this.derivedData(e,this.binsNumber(),this.options.binWidth);this.setData(t,!1)}}R.defaultOptions=q(m.defaultOptions,{binsNumber:"square-root",binWidth:void 0,pointPadding:0,groupPadding:0,grouping:!1,pointPlacement:"between",tooltip:{headerFormat:"",pointFormat:'<span style="font-size: 0.8em">{point.x} - {point.x2}</span><br/><span style="color:{point.color}">●</span> {series.name} <b>{point.y}</b><br/>'}}),x(R.prototype,{hasDerivedData:v.hasDerivedData}),v.compose(R),b().registerSeriesType("histogram",R);let{areaspline:E}=b().seriesTypes,{correctFloat:N,isNumber:j,merge:B}=l();class P extends E{static mean(e){let t=e.length,s=e.reduce(function(e,t){return e+t},0);return t>0&&s/t}static standardDeviation(e,t){let s=e.length;t=j(t)?t:P.mean(e);let i=e.reduce((e,s)=>{let i=s-t;return e+i*i},0);return s>1&&Math.sqrt(i/(s-1))}static normalDensity(e,t,s){let i=e-t;return Math.exp(-(i*i)/(2*s*s))/(s*Math.sqrt(2*Math.PI))}derivedData(e,t){let s=this.options,i=s.intervals,r=s.pointsInInterval,a=i*r*2+1,n=t/r,o=[],h=e-i*t;for(let s=0;s<a;s++)o.push([h,P.normalDensity(h,e,t)]),h+=n;return o}setDerivedData(){this.baseSeries?.getColumn("y").length&&(this.setMean(),this.setStandardDeviation(),this.setData(this.derivedData(this.mean||0,this.standardDeviation||0),!1,void 0,!1))}setMean(){this.mean=N(P.mean(this.baseSeries?.getColumn("y")||[]))}setStandardDeviation(){this.standardDeviation=N(P.standardDeviation(this.baseSeries?.getColumn("y")||[],this.mean))}}P.defaultOptions=B(E.defaultOptions,{intervals:3,pointsInInterval:3,marker:{enabled:!1}}),v.compose(P),b().registerSeriesType("bellcurve",P);let I=l();return o.default})());