!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/dependency-wheel
 * @requires highcharts
 * @requires highcharts/modules/sankey
 *
 * Dependency wheel module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").SVGElement):"function"==typeof define&&define.amd?define("highcharts/dependency-wheel",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"],["highcharts/highcharts","SVGElement"]],e):"object"==typeof exports?exports["highcharts/dependency-wheel"]=e(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").SVGElement):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry,t.Highcharts.SVGElement)}(this,(t,e,r)=>(()=>{"use strict";var a,s={28:t=>{t.exports=r},512:t=>{t.exports=e},944:e=>{e.exports=t}},i={};function n(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return s[t](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};n.d(o,{default:()=>j});var h=n(944),l=/*#__PURE__*/n.n(h),d=n(512),c=/*#__PURE__*/n.n(d);let{sankey:{prototype:{pointClass:p}}}=c().seriesTypes,{pInt:u,wrap:g}=l(),f=class extends p{getDataLabelPath(t){let e=this,r=e.series.chart.renderer,a=e.shapeArgs,s=e.angle<0||e.angle>Math.PI,i=a.start||0,n=a.end||0;return e.dataLabelPath?(e.dataLabelPath=e.dataLabelPath.destroy(),delete e.dataLabelPath):g(t,"destroy",function(t){return e.dataLabelPath&&(e.dataLabelPath=e.dataLabelPath.destroy()),t.call(this)}),e.dataLabelPath=r.arc({open:!0,longArc:Math.abs(Math.abs(i)-Math.abs(n))<Math.PI?0:1}).attr({x:a.x,y:a.y,r:(a.r||0)+u(t.options?.distance||0),start:s?i:n,end:s?n:i,clockwise:+s}).add(r.defs),e.dataLabelPath}isValid(){return!0}},{defined:x,getAlignFactor:y,relativeLength:m}=l();!function(t){t.compose=function(t,r){return t.sankeyColumn=new e(t,r),t};class e{constructor(t,e){this.points=t,this.series=e}getTranslationFactor(t){let e=this.points,r=e.slice(),a=t.chart,s=t.options.minLinkWidth||0,i,n=0,o,h=(a.plotSizeY||0)-(t.options.borderWidth||0)-(e.length-1)*t.nodePadding;for(;e.length;){for(n=h/e.sankeyColumn.sum(),i=!1,o=e.length;o--;)e[o].getSum()*n<s&&(e.splice(o,1),h=Math.max(0,h-s),i=!0);if(!i)break}for(let t of(e.length=0,r))e.push(t);return n}top(t){let e=this.series,r=e.nodePadding,a=this.points.reduce((a,s)=>(a>0&&(a+=r),a+=Math.max(s.getSum()*t,e.options.minLinkWidth||0)),0);return y(e.options.nodeAlignment||"center")*((e.chart.plotSizeY||0)-a)}left(t){let e=this.series,r=e.chart,a=e.options.equalNodes,s=r.inverted?r.plotHeight:r.plotWidth,i=e.nodePadding,n=this.points.reduce((r,n)=>(r>0&&(r+=i),r+=a?s/n.series.nodes.length-i:Math.max(n.getSum()*t,e.options.minLinkWidth||0)),0);return((r.plotSizeX||0)-Math.round(n))/2}sum(){return this.points.reduce((t,e)=>t+e.getSum(),0)}offset(t,e){let r=this.points,a=this.series,s=a.nodePadding,i=0,n;if(a.is("organization")&&t.hangsFrom)return{absoluteTop:t.hangsFrom.nodeY};for(let o=0;o<r.length;o++){let h=r[o].getSum(),l=Math.max(h*e,a.options.minLinkWidth||0),d=t.options[a.chart.inverted?"offsetHorizontal":"offsetVertical"],c=t.options.offset||0;if(n=h?l+s:0,r[o]===t)return{relativeTop:i+(x(d)?m(d,l):m(c,n))};i+=n}}}t.SankeyColumnAdditions=e}(a||(a={}));let b=a;var P=n(28),M=/*#__PURE__*/n.n(P);let{deg2rad:L}=l(),{addEvent:k,merge:S,uniqueKey:v,defined:T,extend:C}=l();function A(t,e){e=S(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},e);let r=this.renderer.url,a=this.text||this,s=a.textPath,{attributes:i,enabled:n}=e;if(t=t||s&&s.path,s&&s.undo(),t&&n){let e=k(a,"afterModifyTree",e=>{if(t&&n){let s=t.attr("id");s||t.attr("id",s=v());let n={x:0,y:0};T(i.dx)&&(n.dx=i.dx,delete i.dx),T(i.dy)&&(n.dy=i.dy,delete i.dy),a.attr(n),this.attr({transform:""}),this.box&&(this.box=this.box.destroy());let o=e.nodes.slice(0);e.nodes.length=0,e.nodes[0]={tagName:"textPath",attributes:C(i,{"text-anchor":i.textAnchor,href:`${r}#${s}`}),children:o}}});a.textPath={path:t,undo:e}}else a.attr({dx:0,dy:0}),delete a.textPath;return this.added&&(a.textCache="",this.renderer.buildText(a)),this}function N(t){let e=t.bBox,r=this.element?.querySelector("textPath");if(r){let t=[],{b:a,h:s}=this.renderer.fontMetrics(this.element),i=s-a,n=RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)',"g"),o=r.innerHTML.replace(n,"").split(/<tspan class="highcharts-br"[^>]*>/),h=o.length,l=(t,e)=>{let{x:s,y:n}=e,o=(r.getRotationOfChar(t)-90)*L,h=Math.cos(o),l=Math.sin(o);return[[s-i*h,n-i*l],[s+a*h,n+a*l]]};for(let e=0,a=0;a<h;a++){let s=o[a].length;for(let i=0;i<s;i+=5)try{let s=e+i+a,[n,o]=l(s,r.getStartPositionOfChar(s));0===i?(t.push(o),t.push(n)):(0===a&&t.unshift(o),a===h-1&&t.push(n))}catch(t){break}e+=s-1;try{let s=e+a,i=r.getEndPositionOfChar(s),[n,o]=l(s,i);t.unshift(o),t.unshift(n)}catch(t){break}}t.length&&t.push(t[0].slice()),e.polygon=t}return e}function O(t){let e=t.labelOptions,r=t.point,a=e[r.formatPrefix+"TextPath"]||e.textPath;a&&!e.useHTML&&(this.setTextPath(r.getDataLabelPath?.(this)||r.graphic,a),r.dataLabelPath&&!a.enabled&&(r.dataLabelPath=r.dataLabelPath.destroy()))}let{animObject:w}=l(),{deg2rad:H}=l(),{pie:q,sankey:F}=c().seriesTypes,{extend:R,merge:W,relativeLength:Y}=l();({compose:function(t){k(t,"afterGetBBox",N),k(t,"beforeAddingDataLabel",O);let e=t.prototype;e.setTextPath||(e.setTextPath=A)}}).compose(M());class B extends F{animate(t){if(!t){let t=w(this.options.animation).duration/2/this.nodes.length,e=0;for(let r of this.nodes){let a=r.graphic;a&&(a.attr({opacity:0}),setTimeout(()=>{r.graphic&&r.graphic.animate({opacity:1},{duration:t})},t*e++))}for(let t of this.points){let e=t.graphic;!t.isNode&&e&&e.attr({opacity:0}).animate({opacity:1},this.options.animation)}}}createNode(t){let e=super.createNode(t);return e.getSum=()=>e.linksFrom.concat(e.linksTo).reduce((t,e)=>t+e.weight,0),e.offset=t=>{let r=t=>t.fromNode===e?t.toNode:t.fromNode,a=0,s=e.linksFrom.concat(e.linksTo),i;s.sort((t,e)=>r(t).index-r(e).index);for(let t=0;t<s.length;t++)if(r(s[t]).index>e.index){s=s.slice(0,t).reverse().concat(s.slice(t).reverse()),i=!0;break}i||s.reverse();for(let e=0;e<s.length;e++){if(s[e]===t)return a;a+=s[e].weight}},e}createNodeColumns(){let t=[b.compose([],this)];for(let e of this.nodes)e.column=0,t[0].push(e);return t}getNodePadding(){return this.options.nodePadding/Math.PI}translate(){let t=this.options,e=2*Math.PI/(this.chart.plotHeight+this.getNodePadding()),r=this.getCenter(),a=(t.startAngle-90)*H,s=t.borderRadius,i="object"==typeof s?s.radius:s;for(let s of(super.translate(),this.nodeColumns[0]))if(s.sum){let n=s.shapeArgs,o=r[0],h=r[1],l=r[2]/2,d=l-Y(("auto"===t.nodeWidth?20:t.nodeWidth)||0,l),c=a+e*(n.y||0),p=a+e*((n.y||0)+(n.height||0));for(let r of(s.angle=c+(p-c)/2,s.shapeType="arc",s.shapeArgs={x:o,y:h,r:l,innerR:d,start:c,end:p,borderRadius:i},s.dlBox={x:o+Math.cos((c+p)/2)*(l+d)/2,y:h+Math.sin((c+p)/2)*(l+d)/2,width:1,height:1},s.linksFrom))if(r.linkBase){let s,i;let n=r.linkBase.map((n,l)=>{let c=e*n,p=Math.cos(a+c)*(d+1),u=Math.sin(a+c)*(d+1);return s=t.curveFactor||0,(i=Math.abs(r.linkBase[3-l]*e-c))>Math.PI&&(i=2*Math.PI-i),(i*=d)<d&&(s*=i/d),{x:o+p,y:h+u,cpX:o+(1-s)*p,cpY:h+(1-s)*u}});r.shapeArgs={d:[["M",n[0].x,n[0].y],["A",d,d,0,0,1,n[1].x,n[1].y],["C",n[1].cpX,n[1].cpY,n[2].cpX,n[2].cpY,n[2].x,n[2].y],["A",d,d,0,0,1,n[3].x,n[3].y],["C",n[3].cpX,n[3].cpY,n[0].cpX,n[0].cpY,n[0].x,n[0].y]]}}}}}B.defaultOptions=W(F.defaultOptions,{center:[null,null],curveFactor:.6,startAngle:0,dataLabels:{textPath:{enabled:!1,attributes:{dy:5}}}}),R(B.prototype,{orderNodes:!1,getCenter:q.prototype.getCenter}),B.prototype.pointClass=f,c().registerSeriesType("dependencywheel",B);let j=l();return o.default})());