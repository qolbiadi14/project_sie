!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/funnel
 * @requires highcharts
 *
 * Highcharts funnel module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/funnel",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],e):"object"==typeof exports?exports["highcharts/funnel"]=e(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,(t,e)=>(()=>{"use strict";var i={512:t=>{t.exports=e},944:e=>{e.exports=t}},a={};function s(t){var e=a[t];if(void 0!==e)return e.exports;var d=a[t]={exports:{}};return i[t](d,d.exports,s),d.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var d={};s.d(d,{default:()=>X});var o=s(944),r=/*#__PURE__*/s.n(o);let{defaultOptions:n}=r(),{noop:h}=r(),{addEvent:l,extend:p,isObject:c,merge:u,relativeLength:g}=r(),x={radius:0,scope:"stack",where:void 0},y={optionsToObject:function(t,e){return c(t)||(t={radius:t||0}),u(x,e,t)}};var f=s(512),b=/*#__PURE__*/s.n(f);let{composed:L,noop:m}=r(),{column:v,pie:M}=b().seriesTypes,{addEvent:W,correctFloat:A,extend:C,fireEvent:P,isArray:k,merge:O,pick:H,pushUnique:w,relativeLength:S,splat:j}=r(),D=b().series.prototype.alignDataLabel;function I(t,e){return/%$/.test(t)?e*parseInt(t,10)/100:parseInt(t,10)}class T extends M{alignDataLabel(t,e,i,a,s){let d=t.series,o=d.options.reversed,r=t.dlBox||t.shapeArgs,{align:n,padding:h=0,verticalAlign:l}=i,p=((d.options||{}).dataLabels||{}).inside,c=d.center[1],u=t.plotY||0,g=e.height??e.getBBox().height,x=d.getWidthAt((o?2*c-u:u)-r.height/2+g),y="middle"===l?(r.topWidth-r.bottomWidth)/4:(x-r.bottomWidth)/2,f=r.y,b=r.x;"middle"===l?f=r.y-r.height/2+g/2:"top"===l&&(f=r.y-r.height+g+h),("top"===l&&!o||"bottom"===l&&o||"middle"===l)&&("right"===n?b=r.x-h+y:"left"===n&&(b=r.x+h-y)),a={x:b,y:o?f-r.height:f,width:r.bottomWidth,height:r.height},i.verticalAlign="bottom",p&&(i.distance=void 0),p&&t.visible&&D.call(d,t,e,i,a,s),p&&(!t.visible&&t.dataLabel&&(t.dataLabel.placed=!1),t.contrastColor&&e.css({color:t.contrastColor}))}drawDataLabels(){(j(this.options.dataLabels||{})[0].inside?v:M).prototype.drawDataLabels.call(this)}getDataLabelPosition(t,e){let i=t.plotY||0,a=t.half?1:-1,s=this.getX(i,!!t.half,t);return{distance:e,natural:{x:0,y:i},computed:{},alignment:t.half?"right":"left",connectorPosition:{breakAt:{x:s+(e-5)*a,y:i},touchingSliceAt:{x:s+e*a,y:i}}}}translate(){let t=this,e=t.chart,i=t.options,a=i.reversed,s=i.ignoreHiddenPoint,d=y.optionsToObject(i.borderRadius),o=e.plotWidth,r=e.plotHeight,n=i.center,h=I(n[0],o),l=I(n[1],r),p=I(i.width,o),c=I(i.height,r),u=I(i.neckWidth,o),g=I(i.neckHeight,r),x=l-c/2+c-g,f=t.points,b=S(d.radius,p),L=d.scope,v="left"===i.dataLabels.position?1:0,M=t=>{let e=Math.tan(t/2),i=Math.cos(j),s=Math.sin(j),d=b,o=d/e,r=Math.tan((Math.PI-t)/3.2104);return o>D&&(d=(o=D)*e),{dx:[o*i,(o-(r*=d))*i,o-r,o],dy:[o*s,(o-r)*s,o-r,o].map(t=>a?-t:t)}},W=0,C=0,k,O,w,j,D,T,R,Y,q,B,X,N;for(let e of(t.getWidthAt=function(t){let e=l-c/2;return t>x||c===g?u:u+(p-u)*(1-(t-e)/(c-g))},t.getX=function(e,i,s){return h+(i?-1:1)*(t.getWidthAt(a?2*l-e:e)/2+(s.dataLabel?.dataLabelPosition?.distance??S(this.options.dataLabels?.distance||0,p)))},t.center=[h,l,c],t.centerX=h,f))e.y&&e.isValid()&&(!s||!1!==e.visible)&&(W+=e.y);for(let e of f){if(N=null,w=W?e.y/W:0,B=(R=l-c/2+C*c)+w*c,Y=(T=h-(k=t.getWidthAt(R))/2)+k,X=(q=h-(k=t.getWidthAt(B))/2)+k,A(R)>=x?(T=q=h-u/2,Y=X=h+u/2):B>x&&(N=B,X=(q=h-(k=t.getWidthAt(x))/2)+k,B=x),a&&(R=2*l-R,B=2*l-B,null!==N&&(N=2*l-N)),b&&("point"===L||0===e.index||e.index===f.length-1||null!==N)){let t=Math.abs(B-R),i=Y-X,a=X-q,s=Math.sqrt(i*i+t*t);j=Math.atan(0!==i?t/i:1/0),D=s/2,null!==N&&(D=Math.min(D,Math.abs(N-B)/2)),a>=1&&(D=Math.min(D,a/2));let d=M(j);if(O="stack"===L&&0!==e.index?[["M",T,R],["L",Y,R]]:[["M",T+d.dx[0],R+d.dy[0]],["C",T+d.dx[1],R+d.dy[1],T+d.dx[2],R,T+d.dx[3],R],["L",Y-d.dx[3],R],["C",Y-d.dx[2],R,Y-d.dx[1],R+d.dy[1],Y-d.dx[0],R+d.dy[0]]],null!==N){let t=M(Math.PI/2);d=M(Math.PI/2+j),O.push(["L",X+d.dx[0],B-d.dy[0]],["C",X+d.dx[1],B-d.dy[1],X,B+d.dy[2],X,B+d.dy[3]]),"stack"===L&&e.index!==f.length-1?O.push(["L",X,N],["L",q,N]):O.push(["L",X,N-t.dy[3]],["C",X,N-t.dy[2],X-t.dx[2],N,X-t.dx[3],N],["L",q+t.dx[3],N],["C",q+t.dx[2],N,q,N-t.dy[2],q,N-t.dy[3]]),O.push(["L",q,B+d.dy[3]],["C",q,B+d.dy[2],q-d.dx[1],B-d.dy[1],q-d.dx[0],B-d.dy[0]])}else a>=1?(d=M(Math.PI-j),"stack"===L&&0===e.index?O.push(["L",X,B],["L",q,B]):O.push(["L",X+d.dx[0],B-d.dy[0]],["C",X+d.dx[1],B-d.dy[1],X-d.dx[2],B,X-d.dx[3],B],["L",q+d.dx[3],B],["C",q+d.dx[2],B,q-d.dx[1],B-d.dy[1],q-d.dx[0],B-d.dy[0]])):(d=M(Math.PI-2*j),O.push(["L",q+d.dx[0],B-d.dy[0]],["C",q+d.dx[1],B-d.dy[1],q-d.dx[1],B-d.dy[1],q-d.dx[0],B-d.dy[0]]))}else O=[["M",T,R],["L",Y,R],["L",X,B]],null!==N&&O.push(["L",X,N],["L",q,N]),O.push(["L",q,B]);O.push(["Z"]),e.shapeType="path",e.shapeArgs={d:O},e.percentage=100*w,e.plotX=h,e.plotY=(R+(N||B))/2,e.tooltipPos=[h,e.plotY],e.dlBox={x:q,y:R,topWidth:Y-T,bottomWidth:X-q,height:Math.abs(H(N,B)-R),width:NaN},e.slice=m,e.half=v,e.isValid()&&(!s||!1!==e.visible)&&(C+=w)}P(t,"afterTranslate")}sortByAngle(t){t.sort((t,e)=>t.plotY-e.plotY)}}T.defaultOptions=O(M.defaultOptions,{animation:!1,borderRadius:0,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,size:!0,dataLabels:{connectorWidth:1,verticalAlign:"middle"},states:{select:{color:"#cccccc",borderColor:"#000000"}}}),C(T.prototype,{animate:m}),function(t){function e(){for(let t of this.series){let e=t.options&&t.options.dataLabels;k(e)&&(e=e[0]),t.is("pie")&&t.placeDataLabels&&e&&!e.inside&&t.placeDataLabels()}}t.compose=function(t){w(L,"FunnelSeries")&&W(t,"afterHideAllOverlappingLabels",e)}}(T||(T={})),b().registerSeriesType("funnel",T);let R=T,{merge:Y}=r();class q extends R{}q.defaultOptions=Y(R.defaultOptions,{neckHeight:"0%",neckWidth:"0%",reversed:!0}),b().registerSeriesType("pyramid",q);let B=r();R.compose(B.Chart);let X=r();return d.default})());