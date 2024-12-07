!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module modules/arc-diagram
 * @requires highcharts/modules/sankey
 *
 * Arc diagram module
 *
 * (c) 2021 Piotr Madej
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").Series,require("highcharts").SVGRenderer,require("highcharts").SVGElement):"function"==typeof define&&define.amd?define("highcharts/arc-diagram",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"],["highcharts/highcharts","Series"],["highcharts/highcharts","SVGRenderer"],["highcharts/highcharts","SVGElement"]],e):"object"==typeof exports?exports["highcharts/arc-diagram"]=e(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").Series,require("highcharts").SVGRenderer,require("highcharts").SVGElement):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry,t.Highcharts.Series,t.Highcharts.SVGRenderer,t.Highcharts.SVGElement)}(this,function(t,e,o,n,i){return function(){"use strict";var r,s,a,h,l,p,d={28:function(t){t.exports=i},540:function(t){t.exports=n},820:function(t){t.exports=o},512:function(t){t.exports=e},944:function(e){e.exports=t}},c={};function u(t){var e=c[t];if(void 0!==e)return e.exports;var o=c[t]={exports:{}};return d[t](o,o.exports,u),o.exports}u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,{a:e}),e},u.d=function(t,e){for(var o in e)u.o(e,o)&&!u.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var f={};u.d(f,{default:function(){return tp}});var g=u(944),m=/*#__PURE__*/u.n(g),y=u(512),v=/*#__PURE__*/u.n(y),x=v().series,k=x.prototype,b=x.prototype.pointClass.prototype,S=m().defined,P=m().extend,L=m().find,O=m().merge,N=m().pick;!function(t){function e(){return this.data=[].concat(this.points||[],this.nodes),k.destroy.apply(this,arguments)}function o(){this.nodes&&(this.nodes.forEach(function(t){t.destroy()}),this.nodes.length=0),k.setData.apply(this,arguments)}function n(t){var e=arguments,o=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==t&&o.forEach(function(t){t&&t.series&&(b.setState.apply(t,e),!t.isNode&&(t.fromNode.graphic&&b.setState.apply(t.fromNode,e),t.toNode&&t.toNode.graphic&&b.setState.apply(t.toNode,e)))}),b.setState.apply(this,e)}function i(t,e,o,n){var i=this,r=this.series.options.nodes,s=this.series.options.data,a=(null==s?void 0:s.length)||0,h=null==s?void 0:s[this.index];if(b.update.call(this,t,!this.isNode&&e,o,n),this.isNode){var l=(r||[]).reduce(function(t,e,o){return i.id===e.id?o:t},-1),p=O(r&&r[l]||{},(null==s?void 0:s[this.index])||{});s&&(h?s[this.index]=h:s.length=a),r?l>=0?r[l]=p:r.push(p):this.series.options.nodes=[p],N(e,!0)&&this.series.chart.redraw(o)}}t.compose=function(t,r){var s=t.prototype,a=r.prototype;return s.setNodeState=n,s.setState=n,s.update=i,a.destroy=e,a.setData=o,r},t.createNode=function(t){var e,o=this.pointClass,n=function(t,e){return L(t,function(t){return t.id===e})},i=n(this.nodes,t);if(!i){e=this.options.nodes&&n(this.options.nodes,t);var r=new o(this,P({className:"highcharts-node",isNode:!0,id:t,y:1},e));r.linksTo=[],r.linksFrom=[],r.getSum=function(){var t=0,e=0;return r.linksTo.forEach(function(e){t+=e.weight||0}),r.linksFrom.forEach(function(t){e+=t.weight||0}),Math.max(t,e)},r.offset=function(t,e){for(var o=0,n=0;n<r[e].length;n++){if(r[e][n]===t)return o;o+=r[e][n].weight}},r.hasShape=function(){var t=0;return r.linksTo.forEach(function(e){e.outgoing&&t++}),!r.linksTo.length||t!==r.linksTo.length},r.index=this.nodes.push(r)-1,i=r}return i.formatPrefix="node",i.name=i.name||i.options.id||"",i.mass=N(i.options.mass,i.options.marker&&i.options.marker.radius,this.options.marker&&this.options.marker.radius,4),i},t.destroy=e,t.generatePoints=function(){var t=this,e=this.chart,o={};k.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach(function(t){t.linksFrom.length=0,t.linksTo.length=0,t.level=t.options.level}),this.points.forEach(function(n){S(n.from)&&(o[n.from]||(o[n.from]=t.createNode(n.from)),o[n.from].linksFrom.push(n),n.fromNode=o[n.from],e.styledMode?n.colorIndex=N(n.options.colorIndex,o[n.from].colorIndex):n.color=n.options.color||o[n.from].color),S(n.to)&&(o[n.to]||(o[n.to]=t.createNode(n.to)),o[n.to].linksTo.push(n),n.toNode=o[n.to]),n.name=n.name||n.id},this),this.nodeLookup=o},t.setNodeState=n,t.updateNode=i}(l||(l={}));var T=l,C=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),M=v().seriesTypes.sankey.prototype.pointClass,w=m().extend,W=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return C(e,t),e.prototype.isValid=function(){return!0},e}(M);w(W.prototype,{setState:T.setNodeState});var A={centeredLinks:!1,equalNodes:!1,dataLabels:{linkTextPath:{attributes:{startOffset:"25%"}}},marker:{fillOpacity:1,lineWidth:0,states:{},symbol:"circle"},offset:"100%",reversed:!1},E=m().defined,_=m().getAlignFactor,q=m().relativeLength;(s=p||(p={})).compose=function(t,e){return t.sankeyColumn=new a(t,e),t},a=function(){function t(t,e){this.points=t,this.series=e}return t.prototype.getTranslationFactor=function(t){for(var e,o,n=this.points,i=n.slice(),r=t.chart,s=t.options.minLinkWidth||0,a=0,h=(r.plotSizeY||0)-(t.options.borderWidth||0)-(n.length-1)*t.nodePadding;n.length;){for(a=h/n.sankeyColumn.sum(),e=!1,o=n.length;o--;)n[o].getSum()*a<s&&(n.splice(o,1),h=Math.max(0,h-s),e=!0);if(!e)break}n.length=0;for(var l=0;l<i.length;l++){var p=i[l];n.push(p)}return a},t.prototype.top=function(t){var e=this.series,o=e.nodePadding,n=this.points.reduce(function(n,i){return n>0&&(n+=o),n+=Math.max(i.getSum()*t,e.options.minLinkWidth||0)},0);return _(e.options.nodeAlignment||"center")*((e.chart.plotSizeY||0)-n)},t.prototype.left=function(t){var e=this.series,o=e.chart,n=e.options.equalNodes,i=o.inverted?o.plotHeight:o.plotWidth,r=e.nodePadding,s=this.points.reduce(function(o,s){return o>0&&(o+=r),o+=n?i/s.series.nodes.length-r:Math.max(s.getSum()*t,e.options.minLinkWidth||0)},0);return((o.plotSizeX||0)-Math.round(s))/2},t.prototype.sum=function(){return this.points.reduce(function(t,e){return t+e.getSum()},0)},t.prototype.offset=function(t,e){var o,n=this.points,i=this.series,r=i.nodePadding,s=0;if(i.is("organization")&&t.hangsFrom)return{absoluteTop:t.hangsFrom.nodeY};for(var a=0;a<n.length;a++){var h=n[a].getSum(),l=Math.max(h*e,i.options.minLinkWidth||0),p=t.options[i.chart.inverted?"offsetHorizontal":"offsetVertical"],d=t.options.offset||0;if(o=h?l+r:0,n[a]===t)return{relativeTop:s+(E(p)?q(p,l):q(d,o))};s+=o}},t}(),s.SankeyColumnAdditions=a;var H=p,j=u(820),z=/*#__PURE__*/u.n(j),F=u(540),R=/*#__PURE__*/u.n(F),Y=u(28),X=/*#__PURE__*/u.n(Y),B=m().deg2rad,V=m().addEvent,D=m().merge,G=m().uniqueKey,I=m().defined,K=m().extend;function Z(t,e){var o=this;e=D(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},e);var n=this.renderer.url,i=this.text||this,r=i.textPath,s=e.attributes,a=e.enabled;if(t=t||r&&r.path,r&&r.undo(),t&&a){var h=V(i,"afterModifyTree",function(e){if(t&&a){var r=t.attr("id");r||t.attr("id",r=G());var h={x:0,y:0};I(s.dx)&&(h.dx=s.dx,delete s.dx),I(s.dy)&&(h.dy=s.dy,delete s.dy),i.attr(h),o.attr({transform:""}),o.box&&(o.box=o.box.destroy());var l=e.nodes.slice(0);e.nodes.length=0,e.nodes[0]={tagName:"textPath",attributes:K(s,{"text-anchor":s.textAnchor,href:"".concat(n,"#").concat(r)}),children:l}}});i.textPath={path:t,undo:h}}else i.attr({dx:0,dy:0}),delete i.textPath;return this.added&&(i.textCache="",this.renderer.buildText(i)),this}function J(t){var e,o=t.bBox,n=null===(e=this.element)||void 0===e?void 0:e.querySelector("textPath");if(n){for(var i=[],r=this.renderer.fontMetrics(this.element),s=r.b,a=r.h-s,h=RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)',"g"),l=n.innerHTML.replace(h,"").split(/<tspan class="highcharts-br"[^>]*>/),p=l.length,d=function(t,e){var o=e.x,i=e.y,r=(n.getRotationOfChar(t)-90)*B,h=Math.cos(r),l=Math.sin(r);return[[o-a*h,i-a*l],[o+s*h,i+s*l]]},c=0,u=0;u<p;u++){for(var f=l[u].length,g=0;g<f;g+=5)try{var m=c+g+u,y=d(m,n.getStartPositionOfChar(m)),v=y[0],x=y[1];0===g?(i.push(x),i.push(v)):(0===u&&i.unshift(x),u===p-1&&i.push(v))}catch(t){break}c+=f-1;try{var m=c+u,k=n.getEndPositionOfChar(m),b=d(m,k),v=b[0],x=b[1];i.unshift(x),i.unshift(v)}catch(t){break}}i.length&&i.push(i[0].slice()),o.polygon=i}return o}function Q(t){var e,o=t.labelOptions,n=t.point,i=o[n.formatPrefix+"TextPath"]||o.textPath;i&&!o.useHTML&&(this.setTextPath((null===(e=n.getDataLabelPath)||void 0===e?void 0:e.call(n,this))||n.graphic,i),n.dataLabelPath&&!i.enabled&&(n.dataLabelPath=n.dataLabelPath.destroy()))}var U=(h=function(t,e){return(h=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}h(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),$=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)0>e.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(o[n[i]]=t[n[i]]);return o};({compose:function(t){V(t,"afterGetBBox",J),V(t,"beforeAddingDataLabel",Q);var e=t.prototype;e.setTextPath||(e.setTextPath=Z)}}).compose(X());var tt=R().prototype.symbols,te=v().seriesTypes,to=te.column,tn=te.sankey,ti=m().crisp,tr=m().extend,ts=m().merge,ta=m().pick,th=m().relativeLength,tl=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return U(e,t),e.prototype.createNodeColumns=function(){var t=this,e=this,o=e.chart,n=H.compose([],e);return n.sankeyColumn.maxLength=o.inverted?o.plotHeight:o.plotWidth,n.sankeyColumn.getTranslationFactor=function(e){for(var i,r,s,a=n.slice(),h=t.options.minLinkWidth||0,l=0,p=0,d=1,c=0,u=(o.plotSizeX||0)-(e.options.marker&&e.options.marker.lineWidth||0)-(n.length-1)*e.nodePadding;n.length;){for(l=u/n.sankeyColumn.sum(),i=!1,r=n.length;r--;){s=n[r].getSum()*l*d;var f=Math.min(o.plotHeight,o.plotWidth);s>f?d=Math.min(f/s,d):s<h&&(n.splice(r,1),u-=h,s=h,i=!0),c+=s*(1-d)/2,p=Math.max(p,s)}if(!i)break}return n.length=0,a.forEach(function(t){t.scale=d,n.push(t)}),n.sankeyColumn.maxRadius=p,n.sankeyColumn.scale=d,n.sankeyColumn.additionalSpace=c,l},n.sankeyColumn.offset=function(t,i){for(var r,s=t.series.options.equalNodes,a=e.nodePadding,h=Math.min(o.plotWidth,o.plotHeight,(n.sankeyColumn.maxLength||0)/e.nodes.length-a),l=n.sankeyColumn.additionalSpace||0,p=0;p<n.length;p++){var d=n[p].getSum()*(n.sankeyColumn.scale||0),c=s?h:Math.max(d*i,e.options.minLinkWidth||0);if(r=d?c+a:0,n[p]===t)return{relativeLeft:l+th(t.options.offset||0,r)};l+=r}},e.nodes.forEach(function(t){t.column=0,n.push(t)}),[n]},e.prototype.translateLink=function(t){var e,o,n=t.fromNode,i=t.toNode,r=this.chart,s=this.translationFactor,a=t.options,h=this.options,l=ta(a.linkWeight,h.linkWeight,Math.max((t.weight||0)*s*n.scale,this.options.minLinkWidth||0)),p=t.series.options.centeredLinks,d=n.nodeY,c=function(e,o){var n=(e.offset(t,o)||0)*s;return Math.min(e.nodeX+n,e.nodeX+(e.shapeArgs&&e.shapeArgs.height||0)-l)},u=p?n.nodeX+((n.shapeArgs.height||0)-l)/2:c(n,"linksFrom"),f=p?i.nodeX+((i.shapeArgs.height||0)-l)/2:c(i,"linksTo"),g=d;u>f&&(u=(e=[f,u])[0],f=e[1]),h.reversed&&(u=(o=[f,u])[0],f=o[1],g=(r.plotSizeY||0)-g),t.shapeType="path",t.linkBase=[u,u+l,f,f+l];var m=(f+l-u)/Math.abs(f+l-u)*ta(h.linkRadius,Math.min(Math.abs(f+l-u)/2,n.nodeY-Math.abs(l)));t.shapeArgs={d:[["M",u,g],["A",(f+l-u)/2,m,0,0,1,f+l,g],["L",f,g],["A",(f-u-l)/2,m-l,0,0,0,u+l,g],["Z"]]},t.dlBox={x:u+(f-u)/2,y:g-m,height:l,width:0},t.tooltipPos=r.inverted?[(r.plotSizeY||0)-t.dlBox.y-l/2,(r.plotSizeX||0)-t.dlBox.x]:[t.dlBox.x,t.dlBox.y+l/2],t.y=t.plotY=1,t.x=t.plotX=1,t.color||(t.color=n.color)},e.prototype.translateNode=function(t,e){var o,n=this.translationFactor,i=this.chart,r=i.inverted?i.plotWidth:i.plotHeight,s=this.options,a=Math.min(i.plotWidth,i.plotHeight,r/t.series.nodes.length-this.nodePadding),h=t.getSum()*(e.sankeyColumn.scale||0),l=s.equalNodes?a:Math.max(h*n,this.options.minLinkWidth||0),p=(null===(o=s.marker)||void 0===o?void 0:o.lineWidth)||0,d=e.sankeyColumn.offset(t,n),c=ti(ta(d&&d.absoluteLeft,(e.sankeyColumn.left(n)||0)+(d&&d.relativeLeft||0)),p),u=ts(s.marker,t.options.marker),f=u.symbol,g=u.radius,m=parseInt(s.offset,10)*((i.inverted?i.plotWidth:i.plotHeight)-(ti(this.colDistance*(t.column||0)+(u.lineWidth||0)/2,p)+(e.sankeyColumn.scale||0)*(e.sankeyColumn.maxRadius||0)/2))/100;if(t.sum=h,h){t.nodeX=c,t.nodeY=m;var y=t.options.width||s.width||l,v=t.options.height||s.height||l,x=m;s.reversed&&(x=(i.plotSizeY||0)-m,i.inverted&&(x=(i.plotSizeY||0)-m)),this.mapOptionsToLevel&&(t.dlOptions=tn.getDLOptions({level:this.mapOptionsToLevel[t.level],optionsPoint:t.options})),t.plotX=1,t.plotY=1,t.tooltipPos=i.inverted?[(i.plotSizeY||0)-x-v/2,(i.plotSizeX||0)-c-y/2]:[c+y/2,x+v/2],t.shapeType="path",t.shapeArgs={d:tt[f||"circle"](c,x-(g||v)/2,g||y,g||v),width:g||y,height:g||v},t.dlBox={x:c+y/2,y:x,height:0,width:0}}else t.dlOptions={enabled:!1}},e.prototype.drawDataLabels=function(){if(this.options.dataLabels){var t=this.options.dataLabels.textPath;to.prototype.drawDataLabels.call(this,this.nodes),this.options.dataLabels.textPath=this.options.dataLabels.linkTextPath,to.prototype.drawDataLabels.call(this,this.data),this.options.dataLabels.textPath=t}},e.prototype.pointAttribs=function(e,o){if(e&&e.isNode){var n=$(z().prototype.pointAttribs.apply(this,arguments),[]);return n}return t.prototype.pointAttribs.apply(this,arguments)},e.prototype.markerAttribs=function(e){return e.isNode?t.prototype.markerAttribs.apply(this,arguments):{}},e.defaultOptions=ts(tn.defaultOptions,A),e}(tn);tr(tl.prototype,{orderNodes:!1}),tl.prototype.pointClass=W,v().registerSeriesType("arcdiagram",tl);var tp=m();return f.default}()});