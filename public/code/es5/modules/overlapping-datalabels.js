!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/overlapping-datalabels
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/overlapping-datalabels",[["highcharts/highcharts"]],e):"object"==typeof exports?exports["highcharts/overlapping-datalabels"]=e(require("highcharts")):t.Highcharts=e(t.Highcharts)}(this,function(t){return function(){"use strict";var e,a,n={944:function(e){e.exports=t}},r={};function i(t){var e=r[t];if(void 0!==e)return e.exports;var a=r[t]={exports:{}};return n[t](a,a.exports,i),a.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var o={};i.d(o,{default:function(){return b}});var l=i(944),s=/*#__PURE__*/i.n(l);(e=a||(a={})).getCenterOfPoints=function(t){var e=t.reduce(function(t,e){return t.x+=e.x,t.y+=e.y,t},{x:0,y:0});return{x:e.x/t.length,y:e.y/t.length}},e.getDistanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},e.getAngleBetweenPoints=function(t,e){return Math.atan2(e.x-t.x,e.y-t.y)},e.pointInPolygon=function(t,e){var a,n,r=t.x,i=t.y,o=e.length,l=!1;for(a=0,n=o-1;a<o;n=a++){var s=e[a],h=s[0],c=s[1],p=e[n],u=p[0],d=p[1];c>i!=d>i&&r<(u-h)*(i-c)/(d-c)+h&&(l=!l)}return l};var h=a.pointInPolygon,c=s().addEvent,p=s().fireEvent,u=s().objectEach,d=s().pick;function v(t){for(var e,a,n,r,i,o=t.length,l=!1,s=0;s<o;s++)(e=t[s])&&(e.oldOpacity=e.opacity,e.newOpacity=1,e.absoluteBox=function(t){var e,a;if(t&&(!t.alignAttr||t.placed)){var n=t.box?0:t.padding||0,r=t.alignAttr||{x:t.attr("x"),y:t.attr("y")},i=t.getBBox();return t.width=i.width,t.height=i.height,{x:r.x+((null===(e=t.parentGroup)||void 0===e?void 0:e.translateX)||0)+n,y:r.y+((null===(a=t.parentGroup)||void 0===a?void 0:a.translateY)||0)+n,width:(t.width||0)-2*n,height:(t.height||0)-2*n,polygon:null==i?void 0:i.polygon}}}(e));t.sort(function(t,e){return(e.labelrank||0)-(t.labelrank||0)});for(var s=0;s<o;++s)for(var c=null==(r=(a=t[s])&&a.absoluteBox)?void 0:r.polygon,u=s+1;u<o;++u){i=(n=t[u])&&n.absoluteBox;var d=!1;if(r&&i&&a!==n&&0!==a.newOpacity&&0!==n.newOpacity&&"hidden"!==a.visibility&&"hidden"!==n.visibility){var v=i.polygon;if(c&&v&&c!==v?function(t,e){for(var a=0;a<t.length;a++){var n=t[a];if(h({x:n[0],y:n[1]},e))return!0}return!1}(c,v)&&(d=!0):i.x>=r.x+r.width||i.x+i.width<=r.x||i.y>=r.y+r.height||i.y+i.height<=r.y||(d=!0),d){var g=a.labelrank<n.labelrank?a:n,y=g.text;g.newOpacity=0,(null==y?void 0:y.element.querySelector("textPath"))&&y.hide()}}}for(var b=0;b<t.length;b++)f(t[b],this)&&(l=!0);l&&p(this,"afterHideAllOverlappingLabels")}function f(t,e){var a,n,r=!1;return t&&(n=t.newOpacity,t.oldOpacity!==n&&(t.hasClass("highcharts-data-label")?(t[n?"removeClass":"addClass"]("highcharts-data-label-hidden"),a=function(){e.styledMode||t.css({pointerEvents:n?"auto":"none"})},r=!0,t[t.isOld?"animate":"attr"]({opacity:n},void 0,a),p(e,"afterHideOverlappingLabel")):t.attr({opacity:n})),t.isOld=!0),r}function g(){for(var t,e=this,a=[],n=0,r=e.labelCollectors||[];n<r.length;n++){var i=r[n];a=a.concat(i())}for(var o=0,l=e.yAxis||[];o<l.length;o++){var s=l[o];s.stacking&&s.options.stackLabels&&!s.options.stackLabels.allowOverlap&&u(s.stacking.stacks,function(t){u(t,function(t){t.label&&a.push(t.label)})})}for(var h=0,c=e.series||[];h<c.length;h++){var p=c[h];if(p.visible&&(null===(t=p.hasDataLabels)||void 0===t?void 0:t.call(p))){var v=function(t){for(var n=function(t){t.visible&&(t.dataLabels||[]).forEach(function(n){var r,i,o=n.options||{};n.labelrank=d(o.labelrank,t.labelrank,null===(r=t.shapeArgs)||void 0===r?void 0:r.height),(null!==(i=o.allowOverlap)&&void 0!==i?i:Number(o.distance)>0)?(n.oldOpacity=n.opacity,n.newOpacity=1,f(n,e)):a.push(n)})},r=0;r<t.length;r++)n(t[r])};v(p.nodes||[]),v(p.points)}}this.hideOverlappingLabels(a)}var y=s();y.OverlappingDataLabels=y.OverlappingDataLabels||{compose:function(t){var e=t.prototype;e.hideOverlappingLabels||(e.hideOverlappingLabels=v,c(t,"render",g))}},y.OverlappingDataLabels.compose(y.Chart);var b=s();return o.default}()});