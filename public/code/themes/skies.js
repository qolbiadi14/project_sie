!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/themes/skies
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/skies",[["highcharts/highcharts"]],t):"object"==typeof exports?exports["highcharts/skies"]=t(require("highcharts")):e.Highcharts=t(e.Highcharts)}(this,e=>(()=>{"use strict";var t,r={944:t=>{t.exports=e}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>d});var s=i(944),l=/*#__PURE__*/i.n(s);let{setOptions:n}=l();!function(e){e.options={colors:["#514F78","#42A07B","#9B5E4A","#72727F","#1F949A","#82914E","#86777F","#42A07B"],chart:{className:"skies",borderWidth:0,plotShadow:!0,plotBackgroundImage:"https://www.highcharts.com/samples/graphics/skies.jpg",plotBackgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"rgba(255, 255, 255, 1)"],[1,"rgba(255, 255, 255, 0)"]]},plotBorderWidth:1},title:{style:{color:"#3E576F",font:"16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}},subtitle:{style:{color:"#6D869F",font:"12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}},xAxis:{gridLineWidth:0,lineColor:"#C0D0E0",tickColor:"#C0D0E0",labels:{style:{color:"#666",fontWeight:"bold"}},title:{style:{color:"#666",font:"12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}}},yAxis:{alternateGridColor:"rgba(255, 255, 255, .5)",lineColor:"#C0D0E0",tickColor:"#C0D0E0",tickWidth:1,labels:{style:{color:"#666",fontWeight:"bold"}},title:{style:{color:"#666",font:"12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}}},legend:{itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#3E576F"},itemHoverStyle:{color:"black"},itemHiddenStyle:{color:"silver"}}},e.apply=function(){n(e.options)}}(t||(t={}));let c=t;l().theme=c.options,c.apply();let d=l();return a.default})());