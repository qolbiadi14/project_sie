!/**
 * Highcharts Gantt JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/grid-axis
 * @requires highcharts
 *
 * GridAxis
 *
 * (c) 2016-2024 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("highcharts"),require("highcharts").Axis):"function"==typeof define&&define.amd?define("highcharts/grid-axis",[["highcharts/highcharts"],["highcharts/highcharts","Axis"]],i):"object"==typeof exports?exports["highcharts/grid-axis"]=i(require("highcharts"),require("highcharts").Axis):t.Highcharts=i(t.Highcharts,t.Highcharts.Axis)}(this,function(t,i){return function(){"use strict";var e,s,r={532:function(t){t.exports=i},944:function(i){i.exports=t}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var e=n[t]={exports:{}};return r[t](e,e.exports,o),e.exports}o.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(i,{a:i}),i},o.d=function(t,i){for(var e in i)o.o(i,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)};var h={};o.d(h,{default:function(){return D}});var a=o(944),d=/*#__PURE__*/o.n(a),l=o(532),c=/*#__PURE__*/o.n(l),u=d().dateFormats,f=d().addEvent,g=d().defined,p=d().erase,m=d().find,x=d().isArray,k=d().isNumber,v=d().merge,b=d().pick,P=d().timeUnits,y=d().wrap;function w(t){return d().isObject(t,!0)}function L(t,i){var e={width:0,height:0};if(i.forEach(function(i){var s,r=t[i],n=0,o=0;w(r)&&(n=(s=w(r.label)?r.label:{}).getBBox?s.getBBox().height:0,s.textStr&&!k(s.textPxLength)&&(s.textPxLength=s.getBBox().width),o=k(s.textPxLength)?Math.round(s.textPxLength):0,s.textStr&&(o=Math.round(s.getBBox().width)),e.height=Math.max(n,e.height),e.width=Math.max(o,e.width))}),"treegrid"===this.type&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode){var s=this.treeGrid.mapOfPosToGridNode[-1].height||0;e.width+=this.options.labels.indentation*(s-1)}return e}function B(t){var i=this.grid,e=3===this.side;if(e||t.apply(this),!(null==i?void 0:i.isColumn)){var s=(null==i?void 0:i.columns)||[];e&&(s=s.slice().reverse()),s.forEach(function(t){t.getOffset()})}e&&t.apply(this)}function O(t){if(!0===(this.options.grid||{}).enabled){var i=this.axisTitle,e=this.height,r=this.horiz,n=this.left,o=this.offset,h=this.opposite,a=this.options,d=this.top,l=this.width,c=this.tickSize(),u=i&&i.getBBox().width,f=a.title.x,g=a.title.y,p=b(a.title.margin,r?5:10),m=i?this.chart.renderer.fontMetrics(i).f:0,x=(r?d+e:n)+(r?1:-1)*(h?-1:1)*(c?c[0]/2:0)+(this.side===s.bottom?m:0);t.titlePosition.x=r?n-(u||0)/2-p+f:x+(h?l:0)+o+f,t.titlePosition.y=r?x-(h?e:0)+(h?m:-m)/2+o+g:d-p+g}}function T(){var t,i=this.chart,e=this.options.grid,s=void 0===e?{}:e,r=this.userOptions;if(s.enabled&&((t=this.options).labels.align=b(t.labels.align,"center"),this.categories||(t.showLastLabel=!1),this.labelRotation=0,t.labels.rotation=0,t.minTickInterval=1),s.columns)for(var n=this.grid.columns=[],o=this.grid.columnIndex=0;++o<s.columns.length;){var h=v(r,s.columns[o],{isInternal:!0,linkedTo:0,scrollbar:{enabled:!1}},{grid:{columns:void 0}}),a=new(c())(this.chart,h,"yAxis");a.grid.isColumn=!0,a.grid.columnIndex=o,p(i.axes,a),p(i[this.coll]||[],a),n.push(a)}}function M(){var t=this.axisTitle,i=this.grid,e=this.options;if(!0===(e.grid||{}).enabled){var r=this.min||0,n=this.max||0,o=this.ticks[this.tickPositions[0]];if(t&&!this.chart.styledMode&&(null==o?void 0:o.slotWidth)&&!this.options.title.style.width&&t.css({width:"".concat(o.slotWidth,"px")}),this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions),this.rightWall&&this.rightWall.destroy(),this.grid&&this.grid.isOuterAxis()&&this.axisLine){var h=e.lineWidth;if(h){var a=this.getLinePath(h),d=a[0],l=a[1],c=(this.tickSize("tick")||[1])[0]*(this.side===s.top||this.side===s.left?-1:1);if("M"===d[0]&&"L"===l[0]&&(this.horiz?(d[2]+=c,l[2]+=c):(d[1]+=c,l[1]+=c)),!this.horiz&&this.chart.marginRight){var u=["L",this.left,d[2]||0],f=[d,u],g=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(n+this.tickmarkOffset)],p=[["M",l[1]||0,this.toPixels(n+this.tickmarkOffset)],g];this.grid.upperBorder||r%1==0||(this.grid.upperBorder=this.grid.renderBorder(f)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:e.lineColor,"stroke-width":e.lineWidth}),this.grid.upperBorder.animate({d:f})),this.grid.lowerBorder||n%1==0||(this.grid.lowerBorder=this.grid.renderBorder(p)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:e.lineColor,"stroke-width":e.lineWidth}),this.grid.lowerBorder.animate({d:p}))}this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:e.lineColor,"stroke-width":e.lineWidth}),this.grid.axisLineExtra.animate({d:a})):this.grid.axisLineExtra=this.grid.renderBorder(a),this.axisLine[this.showAxis?"show":"hide"]()}}if((i&&i.columns||[]).forEach(function(t){return t.render()}),!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)&&this.tickPositions.length){for(var m=this.tickmarkOffset,x=this.tickPositions[this.tickPositions.length-1],k=this.tickPositions[0],v=void 0,b=void 0;(v=this.hiddenLabels.pop())&&v.element;)v.show();for(;(b=this.hiddenMarks.pop())&&b.element;)b.show();(v=this.ticks[k].label)&&(r-k>m?this.hiddenLabels.push(v.hide()):v.show()),(v=this.ticks[x].label)&&(x-n>m?this.hiddenLabels.push(v.hide()):v.show());var P=this.ticks[x].mark;P&&x-n<m&&x-n>0&&this.ticks[x].isLast&&this.hiddenMarks.push(P.hide())}}}function W(){var t=this.tickPositions&&this.tickPositions.info,i=this.options,e=i.grid||{},s=this.userOptions.labels||{};e.enabled&&(this.horiz?(this.series.forEach(function(t){t.options.pointRange=0}),t&&i.dateTimeLabelFormats&&i.labels&&!g(s.align)&&(!1===i.dateTimeLabelFormats[t.unitName].range||t.count>1)&&(i.labels.align="left",g(s.x)||(i.labels.x=3))):"treegrid"!==this.type&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function S(t){var i,e=this.options,s=t.userOptions,r=e&&w(e.grid)?e.grid:{};!0===r.enabled&&(i=v(!0,{className:"highcharts-grid-axis "+(s.className||""),dateTimeLabelFormats:{hour:{list:["%[HM]","%[H]"]},day:{list:["%[AeB]","%[aeb]","%[E]"]},week:{list:["Week %W","W%W"]},month:{list:["%[B]","%[b]","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"0.9em"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0,style:{textOverflow:"ellipsis"}},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},s),"xAxis"!==this.coll||(g(s.linkedTo)&&!g(s.tickPixelInterval)&&(i.tickPixelInterval=350),!(!g(s.tickPixelInterval)&&g(s.linkedTo))||g(s.tickPositioner)||g(s.tickInterval)||g(s.units)||(i.tickPositioner=function(t,e){var s=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(s){for(var r=i.units||[],n=void 0,o=1,h="year",a=0;a<r.length;a++){var d=r[a];if(d&&d[0]===s.unitName){n=a;break}}var l=k(n)&&r[n+1];if(l){h=l[0]||"year";var c=l[1];o=c&&c[0]||1}else"year"===s.unitName&&(o=10*s.count);var u=P[h];return this.tickInterval=u*o,this.chart.time.getTimeTicks({unitRange:u,count:o,unitName:h},t,e,this.options.startOfWeek)}})),v(!0,this.options,i),this.horiz&&(e.minPadding=b(s.minPadding,0),e.maxPadding=b(s.maxPadding,0)),k(e.grid.borderWidth)&&(e.tickWidth=e.lineWidth=r.borderWidth))}function A(t){var i=t.userOptions,e=i&&i.grid||{},s=e.columns;e.enabled&&s&&v(!0,this.options,s[0])}function z(){(this.grid.columns||[]).forEach(function(t){return t.setScale()})}function E(t){var i=this.horiz,e=this.maxLabelDimensions,s=this.options.grid,r=void 0===s?{}:s;if(r.enabled&&e){var n=2*this.options.labels.distance,o=i?r.cellHeight||n+e.height:n+e.width;x(t.tickSize)?t.tickSize[0]=o:t.tickSize=[o,0]}}function I(){this.axes.forEach(function(t){(t.grid&&t.grid.columns||[]).forEach(function(t){t.setAxisSize(),t.setAxisTranslation()})})}function C(t){var i=this.grid;(i.columns||[]).forEach(function(i){return i.destroy(t.keepEvents)}),i.columns=void 0}function G(t){var i=t.userOptions||{},e=i.grid||{};e.enabled&&g(e.borderColor)&&(i.tickColor=i.lineColor=e.borderColor),this.grid||(this.grid=new j(this)),this.hiddenLabels=[],this.hiddenMarks=[]}function N(t){var i=this.label,e=this.axis,r=e.reversed,n=e.chart,o=e.options.grid||{},h=e.options.labels,a=h.align,d=s[e.side],l=t.tickmarkOffset,c=e.tickPositions,u=this.pos-l,f=k(c[t.index+1])?c[t.index+1]-l:(e.max||0)+l,g=e.tickSize("tick"),p=g?g[0]:0,m=g?g[1]/2:0;if(!0===o.enabled){var x,v=void 0,b=void 0,P=void 0;if("top"===d?x=(v=e.top+e.offset)-p:"bottom"===d?v=(x=n.chartHeight-e.bottom+e.offset)+p:(v=e.top+e.len-(e.translate(r?f:u)||0),x=e.top+e.len-(e.translate(r?u:f)||0)),"right"===d?P=(b=n.chartWidth-e.right+e.offset)+p:"left"===d?b=(P=e.left+e.offset)-p:(b=Math.round(e.left+(e.translate(r?f:u)||0))-m,P=Math.min(Math.round(e.left+(e.translate(r?u:f)||0))-m,e.left+e.len)),this.slotWidth=P-b,t.pos.x="left"===a?b:"right"===a?P:b+(P-b)/2,t.pos.y=x+(v-x)/2,i){var y=n.renderer.fontMetrics(i),w=i.getBBox().height;if(h.useHTML)t.pos.y+=y.b+-(w/2);else{var L=Math.round(w/y.h);t.pos.y+=(y.b-(y.h-y.f))/2+-((L-1)*y.h/2)}}t.pos.x+=e.horiz&&h.x||0}}function H(t){var i=t.axis,e=t.value;if(i.options.grid&&i.options.grid.enabled){var s=i.tickPositions,r=(i.linkedParent||i).series[0],n=e===s[0],o=e===s[s.length-1],h=r&&m(r.options.data,function(t){return t[i.isXAxis?"x":"y"]===e}),a=void 0;h&&r.is("gantt")&&(a=v(h),d().seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(a,i.chart)),t.isFirst=n,t.isLast=o,t.point=a}}function F(){var t=this.options,i=t.grid||{},e=this.categories,s=this.tickPositions,r=s[0],n=s[1],o=s[s.length-1],h=s[s.length-2],a=this.linkedParent&&this.linkedParent.min,d=this.linkedParent&&this.linkedParent.max,l=a||this.min,c=d||this.max,u=this.tickInterval,f=k(l)&&l>=r+u&&l<n,g=k(l)&&r<l&&r+u>l,p=k(c)&&o>c&&o-u<c,m=k(c)&&c<=o-u&&c>h;!0===i.enabled&&!e&&(this.isXAxis||this.isLinked)&&((g||f)&&!t.startOnTick&&(s[0]=l),(p||m)&&!t.endOnTick&&(s[s.length-1]=c))}function R(t){var i,e=this.options.grid;return!0===(void 0===e?{}:e).enabled&&this.categories?this.tickInterval:t.apply(this,(i=arguments,Array.prototype.slice.call(i,1)))}(e=s||(s={}))[e.top=0]="top",e[e.right=1]="right",e[e.bottom=2]="bottom",e[e.left=3]="left";var j=function(){function t(t){this.axis=t}return t.prototype.isOuterAxis=function(){var t,i=this.axis,e=i.chart,s=i.grid.columnIndex,r=(null===(t=i.linkedParent)||void 0===t?void 0:t.grid.columns)||i.grid.columns||[],n=s?i.linkedParent:i,o=-1,h=0;return 3===i.side&&!e.inverted&&r.length?!i.linkedParent:((e[i.coll]||[]).forEach(function(t,e){t.side!==i.side||t.options.isInternal||(h=e,t!==n||(o=e))}),h===o&&(!k(s)||r.length===s))},t.prototype.renderBorder=function(t){var i=this.axis,e=i.chart.renderer,s=i.options,r=e.path(t).addClass("highcharts-axis-line").add(i.axisGroup);return e.styledMode||r.attr({stroke:s.lineColor,"stroke-width":s.lineWidth,zIndex:7}),r},t}();u.E=function(t){return this.dateFormat("%a",t,!0).charAt(0)},u.W=function(t){var i=this.toParts(t),e=(i[7]+6)%7,s=i.slice(0);s[2]=i[2]-e+3;var r=this.toParts(this.makeTime(s[0],0,1));return 4!==r[7]&&(i[1]=0,i[2]=1+(11-r[7])%7),(1+Math.floor((this.makeTime(s[0],s[1],s[2])-this.makeTime(r[0],r[1],r[2]))/6048e5)).toString()};var q=d();({compose:function(t,i,e){return t.keepProps.includes("grid")||(t.keepProps.push("grid"),t.prototype.getMaxLabelDimensions=L,y(t.prototype,"unsquish",R),y(t.prototype,"getOffset",B),f(t,"init",G),f(t,"afterGetTitlePosition",O),f(t,"afterInit",T),f(t,"afterRender",M),f(t,"afterSetAxisTranslation",W),f(t,"afterSetOptions",S),f(t,"afterSetOptions",A),f(t,"afterSetScale",z),f(t,"afterTickSize",E),f(t,"trimTicks",F),f(t,"destroy",C),f(i,"afterSetChartSize",I),f(e,"afterGetLabelPosition",N),f(e,"labelFormat",H)),t}}).compose(q.Axis,q.Chart,q.Tick);var D=d();return h.default}()});