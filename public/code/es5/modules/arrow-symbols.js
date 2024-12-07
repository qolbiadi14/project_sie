!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/arrow-symbols
 * @requires highcharts
 *
 * Arrow Symbols
 *
 * (c) 2017-2024 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/arrow-symbols",[["highcharts/highcharts"]],t):"object"==typeof exports?exports["highcharts/arrow-symbols"]=t(require("highcharts")):r.Highcharts=t(r.Highcharts)}(this,function(r){return function(){"use strict";var t={944:function(t){t.exports=r}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}o.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(t,{a:t}),t},o.d=function(r,t){for(var e in t)o.o(t,e)&&!o.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},o.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)};var n={};o.d(n,{default:function(){return h}});var i=o(944),u=/*#__PURE__*/o.n(i);function f(r,t,e,o){return[["M",r,t+o/2],["L",r+e,t],["L",r,t+o/2],["L",r+e,t+o]]}function a(r,t,e,o){return f(r,t,e/2,o)}function c(r,t,e,o){return[["M",r+e,t],["L",r,t+o/2],["L",r+e,t+o],["Z"]]}function s(r,t,e,o){return c(r,t,e/2,o)}({compose:function(r){var t=r.prototype.symbols;t.arrow=f,t["arrow-filled"]=c,t["arrow-filled-half"]=s,t["arrow-half"]=a,t["triangle-left"]=c,t["triangle-left-half"]=s}}).compose(u().SVGRenderer);var h=u();return n.default}()});