!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/drag-panes
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Drag-panes module
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/drag-panes",[["highcharts/highcharts"]],e):"object"==typeof exports?exports["highcharts/drag-panes"]=e(require("highcharts")):t.Highcharts=e(t.Highcharts)}(this,function(t){return function(){"use strict";var e={944:function(e){e.exports=t}},i={};function o(t){var r=i[t];if(void 0!==r)return r.exports;var n=i[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var r={};o.d(r,{default:function(){return M}});var n=o(944),s=/*#__PURE__*/o.n(n),a={minLength:"10%",maxLength:"100%",resize:{controlledAxis:{next:[],prev:[]},enabled:!1,cursor:"ns-resize",lineColor:"#cccccc",lineDashStyle:"Solid",lineWidth:4,x:0,y:0}},h=s().addEvent,c=s().clamp,u=s().isNumber,p=s().relativeLength,d=function(){function t(t){this.init(t)}return t.prototype.init=function(t,e){this.axis=t,this.options=t.options.resize||{},this.render(),e||this.addMouseEvents()},t.prototype.render=function(){var t=this.axis,e=t.chart,i=this.options,o=i.x||0,r=i.y,n=c(t.top+t.height+r,e.plotTop,e.plotTop+e.plotHeight),s={};e.styledMode||(s={cursor:i.cursor,stroke:i.lineColor,"stroke-width":i.lineWidth,dashstyle:i.lineDashStyle}),this.lastPos=n-r,this.controlLine||(this.controlLine=e.renderer.path().addClass("highcharts-axis-resizer")),this.controlLine.add(t.axisGroup);var a=e.styledMode?this.controlLine.strokeWidth():i.lineWidth;s.d=e.renderer.crispLine([["M",t.left+o,n],["L",t.left+t.width+o,n]],a),this.controlLine.attr(s)},t.prototype.addMouseEvents=function(){var t,e,i,o=this,r=o.controlLine.element,n=o.axis.chart.container,s=[];o.mouseMoveHandler=t=function(t){return o.onMouseMove(t)},o.mouseUpHandler=e=function(t){return o.onMouseUp(t)},o.mouseDownHandler=i=function(){return o.onMouseDown()},s.push(h(n,"mousemove",t),h(n.ownerDocument,"mouseup",e),h(r,"mousedown",i),h(n,"touchmove",t),h(n.ownerDocument,"touchend",e),h(r,"touchstart",i)),o.eventsToUnbind=s},t.prototype.onMouseMove=function(t){if(!t.touches||0!==t.touches[0].pageX){var e=this.axis.chart.pointer;this.grabbed&&e&&(this.hasDragged=!0,this.updateAxes(e.normalize(t).chartY-(this.options.y||0)))}},t.prototype.onMouseUp=function(t){var e=this.axis.chart.pointer;this.hasDragged&&e&&this.updateAxes(e.normalize(t).chartY-(this.options.y||0)),this.grabbed=this.hasDragged=this.axis.chart.activeResizer=void 0},t.prototype.onMouseDown=function(){var t;null===(t=this.axis.chart.pointer)||void 0===t||t.reset(!1,0),this.grabbed=this.axis.chart.activeResizer=!0},t.prototype.updateAxes=function(t){var e=this.axis.chart,i=this.options.controlledAxis,o=0===i.next.length?[e.yAxis.indexOf(this.axis)+1]:i.next,r=[this.axis].concat(i.prev),n=[],s=e.plotTop,a=e.plotHeight,h=s+a,d=function(t){return 100*t/a+"%"},l=function(t,e,i){return Math.round(c(t,e,i))};t=c(t,s,h);var f=!1,v=t-this.lastPos;if(!(v*v<1)){for(var x=!0,g=0,y=[r,o];g<y.length;g++)for(var m=y[g],z=0;z<m.length;z++){var b=m[z],M=u(b)?e.yAxis[b]:x?b:e.get(b),L=M&&M.options,w={},A=void 0,D=void 0;if(!L||L.isInternal){x=!1;continue}D=M.top;var P=Math.round(p(L.minLength||NaN,a)),O=Math.round(p(L.maxLength||NaN,a));if(x)(A=l(t-D,P,O))===O&&(f=!0),t=D+A,n.push({axis:M,options:{height:d(A)}});else{if(v=t-this.lastPos,A=l(M.len-v,P,O),(D=M.top+v)+A>h){var k=h-A-D;t+=k,D+=k}D<s&&(D=s)+A>h&&(A=a),A===P&&(f=!0),n.push({axis:M,options:{top:d(D-s),height:d(A)}})}x=!1,w.height=A}if(!f){for(var H=0;H<n.length;H++){var j=n[H];j.axis.update(j.options,!1)}e.redraw(!1)}}},t.prototype.destroy=function(){var t=this.axis;delete t.resizer,this.eventsToUnbind&&this.eventsToUnbind.forEach(function(t){return t()}),this.controlLine.destroy();for(var e=0,i=Object.keys(this);e<i.length;e++)this[i[e]]=null},t.resizerOptions=a,t}(),l=s().defaultOptions,f=s().addEvent,v=s().merge,x=s().wrap;function g(){var t=this.resizer,e=this.options.resize;if(e){var i=!1!==e.enabled;t?i?t.init(this,!0):t.destroy():i&&(this.resizer=new d(this))}}function y(t){!t.keepEvents&&this.resizer&&this.resizer.destroy()}function m(t){this.chart.activeResizer||t.apply(this,[].slice.call(arguments,1))}function z(t){this.chart.activeResizer||t.apply(this,[].slice.call(arguments,1))}var b=s();b.AxisResizer=d,({compose:function(t,e){t.keepProps.includes("resizer")||(v(!0,l.yAxis,d.resizerOptions),t.keepProps.push("resizer"),f(t,"afterRender",g),f(t,"destroy",y),x(e.prototype,"runPointActions",z),x(e.prototype,"drag",m))}}).compose(b.Axis,b.Pointer);var M=s();return r.default}()});