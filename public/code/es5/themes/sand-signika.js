!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/themes/sand-signika
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/sand-signika",[["highcharts/highcharts"]],t):"object"==typeof exports?exports["highcharts/sand-signika"]=t(require("highcharts")):e.Highcharts=t(e.Highcharts)}(this,function(e){return function(){"use strict";var t,o,r={944:function(t){t.exports=e}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var s={};i.d(s,{default:function(){return p}});var a=i(944),l=/*#__PURE__*/i.n(a),c=l().setOptions,h=l().addEvent,f=l().createElement;(t=o||(o={})).options={colors:["#f45b5b","#8085e9","#8d4654","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:null,style:{fontFamily:"Signika, serif"}},title:{style:{color:"black",fontSize:"16px",fontWeight:"bold"}},subtitle:{style:{color:"black"}},tooltip:{borderWidth:0},legend:{backgroundColor:"#E0E0E8",itemStyle:{fontWeight:"bold",fontSize:"13px"}},xAxis:{labels:{style:{color:"#6e6e70"}}},yAxis:{labels:{style:{color:"#6e6e70"}}},plotOptions:{series:{shadow:!0},candlestick:{lineColor:"#404048"},map:{shadow:!1}},navigator:{xAxis:{gridLineColor:"#D0D0D8"}},rangeSelector:{buttonTheme:{fill:"white",stroke:"#C0C0C8","stroke-width":1,states:{select:{fill:"#D0D0D8"}}}},scrollbar:{trackBorderColor:"#C0C0C8"}},t.apply=function(){f("link",{href:"https://fonts.googleapis.com/css?family=Signika:400,700",rel:"stylesheet",type:"text/css"},null,document.getElementsByTagName("head")[0]),h(l().Chart,"afterGetContainer",function(){this.container.style.background="url(https://www.highcharts.com/samples/graphics/sand.png)"}),c(t.options)};var u=o;l().theme=u.options,u.apply();var p=l();return s.default}()});