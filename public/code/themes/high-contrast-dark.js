!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/themes/high-contrast-dark
 * @requires highcharts
 *
 * (c) 2009-2024 Highsoft AS
 *
 * License: www.highcharts.com/license
 */function(o,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/high-contrast-dark",[["highcharts/highcharts"]],r):"object"==typeof exports?exports["highcharts/high-contrast-dark"]=r(require("highcharts")):o.Highcharts=r(o.Highcharts)}(this,o=>(()=>{"use strict";var r,e={944:r=>{r.exports=o}},l={};function t(o){var r=l[o];if(void 0!==r)return r.exports;var i=l[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.n=o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return t.d(r,{a:r}),r},t.d=(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},t.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r);var i={};t.d(i,{default:()=>d});var a=t(944),n=/*#__PURE__*/t.n(a);let{setOptions:s}=n();!function(o){let r="#F0F0F3";o.options={colors:["#67B9EE","#CEEDA5","#9F6AE1","#FEA26E","#6BA48F","#EA3535","#8D96B7","#ECCA15","#20AA09","#E0C3E4"],chart:{backgroundColor:"#1f1f20",plotBorderColor:"#606063"},title:{style:{color:r}},subtitle:{style:{color:r}},xAxis:{gridLineColor:"#707073",labels:{style:{color:r}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:r}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:r}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:r}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:r}},plotOptions:{series:{dataLabels:{color:r},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"},map:{nullColor:"#353535"}},legend:{backgroundColor:"transparent",itemStyle:{color:r},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"},title:{style:{color:"#D0D0D0"}}},credits:{style:{color:r}},drilldown:{activeAxisLabelStyle:{color:r},activeDataLabelStyle:{color:r}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#eee"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:r}},select:{fill:"#303030",stroke:"#101010",style:{color:r}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:r},labelStyle:{color:r}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(180,180,255,0.2)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"}},o.apply=function(){s(o.options)}}(r||(r={}));let c=r;n().theme=c.options,c.apply();let d=n();return i.default})());