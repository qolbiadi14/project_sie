!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/geoheatmap
 * @requires highcharts
 *
 * (c) 2009-2024
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/geoheatmap",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],e):"object"==typeof exports?exports["highcharts/geoheatmap"]=e(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,function(t,e){return function(){"use strict";var i,o,r={512:function(t){t.exports=e},944:function(e){e.exports=t}},n={};function a(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,a),i.exports}a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var s={};a.d(s,{default:function(){return z}});var p=a(944),h=/*#__PURE__*/a.n(p),l=a(512),c=/*#__PURE__*/a.n(l),u=(i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),d=c().seriesTypes.map.prototype.pointClass,y=h().isNumber,f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.applyOptions=function(e,i){var o=t.prototype.applyOptions.call(this,e,i),r=o.options,n=r.lat,a=r.lon;if(y(a)&&y(n)){var s=this.series.options,p=s.colsize,h=void 0===p?1:p,l=s.rowsize,c=void 0===l?1:l,u=a-h/2,d=n-c/2;o.geometry=o.options.geometry={type:"Polygon",coordinates:[[[u,d],[u+h,d],[u+h,d+c],[u,d+c],[u,d]]]}}return o},e}(d),g=h().doc,v=h().defined,m=h().pick,b=function(t){var e=t.canvas,i=t.context;return e&&i?(i.clearRect(0,0,e.width,e.height),i):(t.canvas=g.createElement("canvas"),t.context=t.canvas.getContext("2d",{willReadFrequently:!0})||void 0,t.context)},x=(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),w=h().animObject,D=h().stop,C=h().noop,O=function(t,e){var i=e.series.colorAxis;if(i){var o=i.toColor(t||0,e).split(")")[0].split("(")[1].split(",").map(function(t){return m(parseFloat(t),parseInt(t,10))});return o[3]=255*m(o[3],1),v(t)&&e.visible||(o[3]=0),o}return[0,0,0,0]},j=c().seriesTypes.map,_=h().addEvent,P=h().extend,T=h().isNumber,I=h().isObject,A=h().merge,L=h().pick;function R(t){return t-360*Math.floor((t+180)/360)}var U=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isDirtyCanvas=!0,e}return x(e,t),e.prototype.update=function(){this.options=A(this.options,arguments[0]),this.getInterpolation().enabled&&(this.isDirtyCanvas=!0,this.points.forEach(function(t){t.graphic&&(t.graphic.destroy(),delete t.graphic)})),t.prototype.update.apply(this,arguments)},e.prototype.translate=function(){(!this.getInterpolation().enabled||!this.image||this.isDirty||this.isDirtyData)&&t.prototype.translate.apply(this,arguments)},e.prototype.getInterpolation=function(){return I(this.options.interpolation)?this.options.interpolation:{blur:1,enabled:this.options.interpolation}},e.prototype.drawPoints=function(){var e=this.chart.mapView,i=this.options;if(this.getInterpolation().enabled&&e&&this.bounds){var o=this.context||b(this),r=this.canvas,n=this.colorAxis,a=this.image,s=this.chart,p=this.points,h=[L(i.colsize,1),L(i.rowsize,1)],l=h[0],c=h[1],u=e.projectedUnitsToPixels({x:this.bounds.x1,y:this.bounds.y2}),d=e.projectedUnitsToPixels({x:this.bounds.x2,y:this.bounds.y1});if(r&&o&&n&&u&&d){var y={x:u.x,y:u.y,width:d.x-u.x,height:d.y-u.y};if(this.isDirtyCanvas||this.isDirtyData||"Orthographic"===e.projection.options.name){this.isDirtyCanvas=!0;var f=r.width=~~(360/l)+1,g=r.height=~~(180/c)+1,v=new Uint8ClampedArray(f*g*4);this.directTouch=!1;for(var m=0;m<p.length;m++){var x=p[m],C=new Uint8ClampedArray(O(x.value,x)),j=x.options,_=j.lon,P=j.lat;T(_)&&T(P)&&v.set(C,4*Math.ceil(f*(g-1-(P+90)/c)+(_+180)/l))}var I=this.getInterpolation().blur,R=0===I?1:11*I,U=~~y.width,z=~~y.height,S=new ImageData(v,f,g);r.width=~~(f*R),r.height=~~(g*R),o.putImageData(S,0,0),o.globalCompositeOperation="copy",o.drawImage(r,0,0,S.width,S.height,0,0,r.width,r.height);var k=o.getImageData(0,0,r.width,r.height),M=new ImageData(this.getProjectedImageData(e,U,z,k,r,y.x,y.y),U,z);o.globalCompositeOperation="copy",r.width=U,r.height=z,o.putImageData(M,0,0)}if(a){if(s.renderer.globalAnimation&&s.hasRendered){var N=Number(a.attr("x")),q=Number(a.attr("y")),E=Number(a.attr("width")),X=Number(a.attr("height")),F=function(t,e){a.attr({x:N+(y.x-N)*e.pos,y:q+(y.y-q)*e.pos,width:E+(y.width-E)*e.pos,height:X+(y.height-X)*e.pos})},H=A(w(s.renderer.globalAnimation)),V=H.step;H.step=function(){V&&V.apply(this,arguments),F.apply(this,arguments)},a.attr(A({animator:0},this.isDirtyCanvas?{href:r.toDataURL("image/png",1)}:void 0)).animate({animator:1},H)}else D(a),a.attr(A(y,this.isDirtyCanvas?{href:r.toDataURL("image/png",1)}:void 0))}else this.image=s.renderer.image(r.toDataURL("image/png",1)).attr(y).add(this.group);this.isDirtyCanvas=!1}}else t.prototype.drawPoints.apply(this,arguments)},e.prototype.getProjectedImageData=function(t,e,i,o,r,n,a){for(var s,p=new Uint8ClampedArray(e*i*4),h=L(null===(s=t.projection.options.rotation)||void 0===s?void 0:s[0],0),l=r.width/360,c=-1*r.height/180,u=-1,d=0;d<p.length;d+=4){var y=d/4%e;0===y&&u++;var f=t.pixelsToLonLat({x:n+y,y:a+u});if(f){f.lon>-180-h&&f.lon<180-h&&(f.lon=R(f.lon));var g=[f.lon,f.lat],v=g[0]*l+r.width/2,m=g[1]*c+r.height/2;if(v>=0&&v<=r.width&&m>=0&&m<=r.height){var b=Math.floor(m)*r.width*4+4*Math.round(v);p[d]=o.data[b],p[d+1]=o.data[b+1],p[d+2]=o.data[b+2],p[d+3]=o.data[b+3]}}}return p},e.prototype.searchPoint=function(t,e){var i=this.chart,o=i.mapView;if(o&&this.bounds&&this.image&&i.tooltip&&i.tooltip.options.enabled){if(!i.pointer.hasDragged&&(.01>=+this.image.attr("animator")||+this.image.attr("animator")>=.99)){var r=o.projectedUnitsToPixels({x:this.bounds.x1,y:this.bounds.y2}),n=o.projectedUnitsToPixels({x:this.bounds.x2,y:this.bounds.y1});if(i.pointer.normalize(t),t.lon&&t.lat&&r&&n&&t.chartX-i.plotLeft>r.x&&t.chartX-i.plotLeft<n.x&&t.chartY-i.plotTop>r.y&&t.chartY-i.plotTop<n.y)return this.searchKDTree({clientX:t.chartX,lon:R(t.lon),lat:t.lat},e,t)}else i.tooltip.destroy()}},e.defaultOptions=A(j.defaultOptions,{nullColor:"transparent",tooltip:{pointFormat:"Lat: {point.lat}, Lon: {point.lon}, Value: {point.value}<br/>"},borderWidth:0,colsize:1,rowsize:1,stickyTracking:!0,interpolation:{enabled:!1,blur:1}}),e}(j);_(U,"afterDataClassLegendClick",function(){this.isDirtyCanvas=!0,this.drawPoints()}),P(U.prototype,{type:"geoheatmap",applyJitter:C,pointClass:f,pointArrayMap:["lon","lat","value"],kdAxisArray:["lon","lat"]}),c().registerSeriesType("geoheatmap",U);var z=h();return s.default}()});