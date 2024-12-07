!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/pointandfigure
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Point and figure series type for Highcharts Stock
 *
 * (c) 2010-2024 Kamil Musialowski
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").RendererRegistry):"function"==typeof define&&define.amd?define("highcharts/pointandfigure",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"],["highcharts/highcharts","RendererRegistry"]],t):"object"==typeof exports?exports["highcharts/pointandfigure"]=t(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").RendererRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry,e.Highcharts.RendererRegistry)}(this,(e,t,r)=>(()=>{"use strict";var s,i={608:e=>{e.exports=r},512:e=>{e.exports=t},944:t=>{t.exports=e}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return i[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var h={};a.d(h,{default:()=>P});var n=a(944),l=/*#__PURE__*/a.n(n),p=a(512),u=/*#__PURE__*/a.n(p);let{seriesTypes:{scatter:{prototype:{pointClass:c}}}}=u(),d=class extends c{resolveMarker(){let e=this.series.options;this.marker=this.options.marker=this.upTrend?e.markerUp:e.marker,this.color=this.options.marker.lineColor}resolveColor(){super.resolveColor(),this.resolveMarker()}getClassName(){return super.getClassName.call(this)+(this.upTrend?" highcharts-point-up":" highcharts-point-down")}};var g=a(608),f=/*#__PURE__*/a.n(g);!function(e){let t=[];function r(e,t,r,s){return[["M",e,t],["L",e+r,t+s],["M",e+r,t],["L",e,t+s],["Z"]]}e.compose=function(e){-1===t.indexOf(e)&&(t.push(e),e.prototype.symbols.cross=r);let s=f().getRendererType();t.indexOf(s)&&t.push(s)}}(s||(s={}));let y=s,{composed:m}=l(),{scatter:x,column:{prototype:b}}=u().seriesTypes,{extend:k,merge:C,pushUnique:R,isNumber:v,relativeLength:M}=l();class S extends x{constructor(){super(...arguments),this.allowDG=!1}static compose(e){R(m,"pointandfigure")&&y.compose(e)}init(){super.init.apply(this,arguments),this.pnfDataGroups=[]}getProcessedData(){let e;if(!this.pnfDataGroups)return{modified:this.dataTable.modified,cropped:!1,cropStart:0,closestPointRange:1};let t=this.dataTable.modified,r=this.options,s=this.getColumn("x",!0),i=this.getColumn("y",!0),o=r.boxSize,a=v(o)?o:M(o,i[0]),h=this.pnfDataGroups,n=a*r.reversalAmount;function l(e,t,r){let s=h[h.length-1],i=t?1:-1,o=Math.floor(i*(e-r)/a);for(let e=1;e<=o;e++){let t=r+a*e*i;s.y.push(t)}}if(this.calculatedBoxSize=a,this.isDirtyData||0===h.length){this.pnfDataGroups.length=0;for(let t=0;t<i.length;t++){let r=s[t],o=i[t],n=i[0];if(o-n>=a){e=!0,h.push({x:r,y:[o],upTrend:e});break}if(n-o>=a){e=!1,h.push({x:r,y:[o],upTrend:e});break}}i.forEach((t,r)=>{let i=s[r],o=function(e){let t=e[e.length-1].y;return t[t.length-1]}(h);e&&(t-o>=a&&l(t,e,o),o-t>=n&&(e=!1,h.push({x:i,y:[],upTrend:e}),l(t,e,o))),!e&&(o-t>=a&&l(t,e,o),t-o>=n&&(e=!0,h.push({x:i,y:[],upTrend:e}),l(t,e,o)))})}let p=[],u=[],c=[];return h.forEach(e=>{let t=e.x,r=e.upTrend;e.y.forEach(e=>{u.push(t),c.push(e),p.push({x:t,y:e,upTrend:r})})}),t.setColumn("x",u),t.setColumn("y",c),this.pnfDataGroups=h,this.processedData=p,{modified:t,cropped:!1,cropStart:0,closestPointRange:1}}markerAttribs(e){let t=this.options,r={},s=e.pos();return r.width=this.markerWidth,r.height=this.markerHeight,s&&r.width&&r.height&&(r.x=s[0]-Math.round(r.width)/2,r.y=s[1]-Math.round(r.height)/2),t.crisp&&r.x&&(r.x=Math.floor(r.x)),r}translate(){let e=this.getColumnMetrics(),t=this.calculatedBoxSize;this.markerWidth=e.width+e.paddedWidth+e.offset,this.markerHeight=this.yAxis.toPixels(0)-this.yAxis.toPixels(t),super.translate()}}S.defaultOptions=C(x.defaultOptions,{boxSize:"1%",reversalAmount:3,tooltip:{pointFormat:'<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Close: {point.y:.2f}<br/>',headerFormat:""},turboThreshold:0,groupPadding:.2,pointPadding:.1,pointRange:null,dataGrouping:{enabled:!1},markerUp:{symbol:"cross",lineColor:"#00FF00",lineWidth:2},marker:{symbol:"circle",fillColor:"transparent",lineColor:"#FF0000",lineWidth:2},legendSymbol:"lineMarker"}),k(S.prototype,{takeOrdinalPosition:!0,pnfDataGroups:[],getColumnMetrics:b.getColumnMetrics,pointClass:d,sorted:!0}),u().registerSeriesType("pointandfigure",S);let D=l();S.compose(D.Renderer);let P=l();return h.default})());