!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/boost-canvas
 * @requires highcharts
 *
 * Boost module
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").Color):"function"==typeof define&&define.amd?define("highcharts/boost-canvas",[["highcharts/highcharts"],["highcharts/highcharts","Color"]],e):"object"==typeof exports?exports["highcharts/boost-canvas"]=e(require("highcharts"),require("highcharts").Color):t.Highcharts=e(t.Highcharts,t.Highcharts.Color)}(this,function(t,e){return function(){"use strict";var i,o,r,n={620:function(t){t.exports=e},944:function(e){e.exports=t}},s={};function a(t){var e=s[t];if(void 0!==e)return e.exports;var i=s[t]={exports:{}};return n[t](i,i.exports,a),i.exports}a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var l={};a.d(l,{default:function(){return tu}});var h=a(944),u=/*#__PURE__*/a.n(h),d={};["area","areaspline","arearange","column","columnrange","bar","line","scatter","heatmap","bubble","treemap"].forEach(function(t){d[t]=!0}),u().composed,u().addEvent;var c=u().pick;function f(t){var e=t.series,i=t.boost=t.boost||{},o=t.options.boost||{},r=c(o.seriesThreshold,50);if(e.length>=r)return!0;if(1===e.length)return!1;var n=o.allowForce;if(void 0===n){n=!0;for(var s=0,a=t.xAxis;s<a.length;s++){var l=a[s];if(c(l.min,-1/0)>c(l.dataMin,-1/0)||c(l.max,1/0)<c(l.dataMax,1/0)){n=!1;break}}}if(void 0!==i.forceChartBoost){if(n)return i.forceChartBoost;i.forceChartBoost=void 0}for(var h,u=0,f=0,g=0;g<e.length;g++){var m=e[g];0!==(h=m.options).boostThreshold&&!1!==m.visible&&"heatmap"!==m.type&&(d[m.type]&&++u,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=-Number.MAX_VALUE;return t.forEach(function(t){if(null!=t&&void 0!==t.length&&t.length>0)return i=t.length,!0}),i}(m.getColumn("x",!0),h.data,m.points)>=(h.boostThreshold||Number.MAX_VALUE)&&++f)}return i.forceChartBoost=n&&(u===e.length&&f===u||f>5),i.forceChartBoost}u().pushUnique;var g=function(t,e){var i=t.navigator,o={x:t.plotLeft,y:t.plotTop,width:t.plotWidth,height:t.plotHeight};if(i&&t.inverted?(o.width+=i.top+i.height,i.opposite||(o.x=i.left)):i&&!t.inverted&&(o.height=i.top+i.height-t.plotTop),e.getClipBox){var r=e.xAxis,n=e.yAxis;if(o=e.getClipBox(),t.inverted){var s=o.width;o.width=o.height,o.height=s,o.x=n.pos,o.y=r.pos}else o.x=r.pos,o.y=n.pos}if(e===t){var a=t.inverted?t.xAxis:t.yAxis;a.length<=1&&(o.y=Math.min(a[0].pos,o.y),o.height=a[0].pos-t.plotTop+a[0].len)}return o},m=a(620),p=/*#__PURE__*/a.n(m),b={area:"LINES",arearange:"LINES",areaspline:"LINES",column:"LINES",columnrange:"LINES",bar:"LINES",line:"LINE_STRIP",scatter:"POINTS",heatmap:"TRIANGLES",treemap:"TRIANGLES",bubble:"POINTS"},x=u().clamp,v=u().error,A=u().pick,y=function(){function t(t){if(this.errors=[],this.uLocations={},this.gl=t,t&&!this.createShader())return}return t.prototype.bind=function(){this.gl&&this.shaderProgram&&this.gl.useProgram(this.shaderProgram)},t.prototype.createShader=function(){var t=this,e=this.stringToProgram("#version 100\n#define LN10 2.302585092994046\nprecision highp float;\nattribute vec4 aVertexPosition;\nattribute vec4 aColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform mat4 uPMatrix;\nuniform float pSize;\nuniform float translatedThreshold;\nuniform bool hasThreshold;\nuniform bool skipTranslation;\nuniform float xAxisTrans;\nuniform float xAxisMin;\nuniform float xAxisMinPad;\nuniform float xAxisPointRange;\nuniform float xAxisLen;\nuniform bool  xAxisPostTranslate;\nuniform float xAxisOrdinalSlope;\nuniform float xAxisOrdinalOffset;\nuniform float xAxisPos;\nuniform bool  xAxisCVSCoord;\nuniform bool  xAxisIsLog;\nuniform bool  xAxisReversed;\nuniform float yAxisTrans;\nuniform float yAxisMin;\nuniform float yAxisMinPad;\nuniform float yAxisPointRange;\nuniform float yAxisLen;\nuniform bool  yAxisPostTranslate;\nuniform float yAxisOrdinalSlope;\nuniform float yAxisOrdinalOffset;\nuniform float yAxisPos;\nuniform bool  yAxisCVSCoord;\nuniform bool  yAxisIsLog;\nuniform bool  yAxisReversed;\nuniform bool  isBubble;\nuniform bool  bubbleSizeByArea;\nuniform float bubbleZMin;\nuniform float bubbleZMax;\nuniform float bubbleZThreshold;\nuniform float bubbleMinSize;\nuniform float bubbleMaxSize;\nuniform bool  bubbleSizeAbs;\nuniform bool  isInverted;\nfloat bubbleRadius(){\nfloat value = aVertexPosition.w;\nfloat zMax = bubbleZMax;\nfloat zMin = bubbleZMin;\nfloat radius = 0.0;\nfloat pos = 0.0;\nfloat zRange = zMax - zMin;\nif (bubbleSizeAbs){\nvalue = value - bubbleZThreshold;\nzMax = max(zMax - bubbleZThreshold, zMin - bubbleZThreshold);\nzMin = 0.0;\n}\nif (value < zMin){\nradius = bubbleZMin / 2.0 - 1.0;\n} else {\npos = zRange > 0.0 ? (value - zMin) / zRange : 0.5;\nif (bubbleSizeByArea && pos > 0.0){\npos = sqrt(pos);\n}\nradius = ceil(bubbleMinSize + pos * (bubbleMaxSize - bubbleMinSize)) / 2.0;\n}\nreturn radius * 2.0;\n}\nfloat translate(float val,\nfloat pointPlacement,\nfloat localA,\nfloat localMin,\nfloat minPixelPadding,\nfloat pointRange,\nfloat len,\nbool  cvsCoord,\nbool  isLog,\nbool  reversed\n){\nfloat sign = 1.0;\nfloat cvsOffset = 0.0;\nif (cvsCoord) {\nsign *= -1.0;\ncvsOffset = len;\n}\nif (isLog) {\nval = log(val) / LN10;\n}\nif (reversed) {\nsign *= -1.0;\ncvsOffset -= sign * len;\n}\nreturn sign * (val - localMin) * localA + cvsOffset + \n(sign * minPixelPadding);\n}\nfloat xToPixels(float value) {\nif (skipTranslation){\nreturn value;// + xAxisPos;\n}\nreturn translate(value, 0.0, xAxisTrans, xAxisMin, xAxisMinPad, xAxisPointRange, xAxisLen, xAxisCVSCoord, xAxisIsLog, xAxisReversed);// + xAxisPos;\n}\nfloat yToPixels(float value, float checkTreshold) {\nfloat v;\nif (skipTranslation){\nv = value;// + yAxisPos;\n} else {\nv = translate(value, 0.0, yAxisTrans, yAxisMin, yAxisMinPad, yAxisPointRange, yAxisLen, yAxisCVSCoord, yAxisIsLog, yAxisReversed);// + yAxisPos;\nif (v > yAxisLen) {\nv = yAxisLen;\n}\n}\nif (checkTreshold > 0.0 && hasThreshold) {\nv = min(v, translatedThreshold);\n}\nreturn v;\n}\nvoid main(void) {\nif (isBubble){\ngl_PointSize = bubbleRadius();\n} else {\ngl_PointSize = pSize;\n}\nvColor = aColor;\nif (skipTranslation && isInverted) {\ngl_Position = uPMatrix * vec4(aVertexPosition.y + yAxisPos, aVertexPosition.x + xAxisPos, 0.0, 1.0);\n} else if (isInverted) {\ngl_Position = uPMatrix * vec4(yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, xToPixels(aVertexPosition.x) + xAxisPos, 0.0, 1.0);\n} else {\ngl_Position = uPMatrix * vec4(xToPixels(aVertexPosition.x) + xAxisPos, yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, 0.0, 1.0);\n}\n}","vertex"),i=this.stringToProgram("precision highp float;\nuniform vec4 fillColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform sampler2D uSampler;\nuniform bool isCircle;\nuniform bool hasColor;\nvoid main(void) {\nvec4 col = fillColor;\nvec4 tcol = texture2D(uSampler, gl_PointCoord.st);\nif (hasColor) {\ncol = vColor;\n}\nif (isCircle) {\ncol *= tcol;\nif (tcol.r < 0.0) {\ndiscard;\n} else {\ngl_FragColor = col;\n}\n} else {\ngl_FragColor = col;\n}\n}","fragment"),o=function(e){return t.gl.getUniformLocation(t.shaderProgram,e)};return e&&i?(this.shaderProgram=this.gl.createProgram(),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,i),this.gl.linkProgram(this.shaderProgram),this.gl.getProgramParameter(this.shaderProgram,this.gl.LINK_STATUS))?(this.gl.useProgram(this.shaderProgram),this.gl.bindAttribLocation(this.shaderProgram,0,"aVertexPosition"),this.pUniform=o("uPMatrix"),this.psUniform=o("pSize"),this.fcUniform=o("fillColor"),this.isBubbleUniform=o("isBubble"),this.bubbleSizeAbsUniform=o("bubbleSizeAbs"),this.bubbleSizeAreaUniform=o("bubbleSizeByArea"),this.uSamplerUniform=o("uSampler"),this.skipTranslationUniform=o("skipTranslation"),this.isCircleUniform=o("isCircle"),this.isInverted=o("isInverted"),!0):(this.errors.push(this.gl.getProgramInfoLog(this.shaderProgram)),this.handleErrors(),this.shaderProgram=!1,!1):(this.shaderProgram=!1,this.handleErrors(),!1)},t.prototype.handleErrors=function(){this.errors.length&&v("[highcharts boost] shader error - "+this.errors.join("\n"))},t.prototype.stringToProgram=function(t,e){var i=this.gl.createShader("vertex"===e?this.gl.VERTEX_SHADER:this.gl.FRAGMENT_SHADER);return(this.gl.shaderSource(i,t),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS))?i:(this.errors.push("when compiling "+e+" shader:\n"+this.gl.getShaderInfoLog(i)),!1)},t.prototype.destroy=function(){this.gl&&this.shaderProgram&&(this.gl.deleteProgram(this.shaderProgram),this.shaderProgram=!1)},t.prototype.fillColorUniform=function(){return this.fcUniform},t.prototype.getProgram=function(){return this.shaderProgram},t.prototype.pointSizeUniform=function(){return this.psUniform},t.prototype.perspectiveUniform=function(){return this.pUniform},t.prototype.reset=function(){this.gl&&this.shaderProgram&&(this.gl.uniform1i(this.isBubbleUniform,0),this.gl.uniform1i(this.isCircleUniform,0))},t.prototype.setBubbleUniforms=function(t,e,i,o){void 0===o&&(o=1);var r=t.options,n=Number.MAX_VALUE,s=-Number.MAX_VALUE;if(this.gl&&this.shaderProgram&&t.is("bubble")){var a=t.getPxExtremes();n=A(r.zMin,x(e,!1===r.displayNegative?r.zThreshold:-Number.MAX_VALUE,n)),s=A(r.zMax,Math.max(s,i)),this.gl.uniform1i(this.isBubbleUniform,1),this.gl.uniform1i(this.isCircleUniform,1),this.gl.uniform1i(this.bubbleSizeAreaUniform,"width"!==t.options.sizeBy),this.gl.uniform1i(this.bubbleSizeAbsUniform,t.options.sizeByAbsoluteValue),this.setUniform("bubbleMinSize",a.minPxSize*o),this.setUniform("bubbleMaxSize",a.maxPxSize*o),this.setUniform("bubbleZMin",n),this.setUniform("bubbleZMax",s),this.setUniform("bubbleZThreshold",t.options.zThreshold)}},t.prototype.setColor=function(t){this.gl&&this.shaderProgram&&this.gl.uniform4f(this.fcUniform,t[0]/255,t[1]/255,t[2]/255,t[3])},t.prototype.setDrawAsCircle=function(t){this.gl&&this.shaderProgram&&this.gl.uniform1i(this.isCircleUniform,t?1:0)},t.prototype.setInverted=function(t){this.gl&&this.shaderProgram&&this.gl.uniform1i(this.isInverted,t)},t.prototype.setPMatrix=function(t){this.gl&&this.shaderProgram&&this.gl.uniformMatrix4fv(this.pUniform,!1,t)},t.prototype.setPointSize=function(t){this.gl&&this.shaderProgram&&this.gl.uniform1f(this.psUniform,t)},t.prototype.setSkipTranslation=function(t){this.gl&&this.shaderProgram&&this.gl.uniform1i(this.skipTranslationUniform,!0===t?1:0)},t.prototype.setTexture=function(t){this.gl&&this.shaderProgram&&this.gl.uniform1i(this.uSamplerUniform,t)},t.prototype.setUniform=function(t,e){if(this.gl&&this.shaderProgram){var i=this.uLocations[t]=this.uLocations[t]||this.gl.getUniformLocation(this.shaderProgram,t);this.gl.uniform1f(i,e)}},t}(),P=function(){function t(t,e,i){this.buffer=!1,this.iterator=0,this.preAllocated=!1,this.vertAttribute=!1,this.components=i||2,this.dataComponents=i,this.gl=t,this.shader=e}return t.prototype.allocate=function(t){this.iterator=-1,this.preAllocated=new Float32Array(4*t)},t.prototype.bind=function(){if(!this.buffer)return!1;this.gl.vertexAttribPointer(this.vertAttribute,this.components,this.gl.FLOAT,!1,0,0)},t.prototype.build=function(t,e,i){var o;return(this.data=t||[],this.data&&0!==this.data.length||this.preAllocated)?(this.components=i||this.components,this.buffer&&this.gl.deleteBuffer(this.buffer),this.preAllocated||(o=new Float32Array(this.data)),this.buffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.preAllocated||o,this.gl.STATIC_DRAW),this.vertAttribute=this.gl.getAttribLocation(this.shader.getProgram(),e),this.gl.enableVertexAttribArray(this.vertAttribute),o=!1,!0):(this.destroy(),!1)},t.prototype.destroy=function(){this.buffer&&(this.gl.deleteBuffer(this.buffer),this.buffer=!1,this.vertAttribute=!1),this.iterator=0,this.components=this.dataComponents||2,this.data=[]},t.prototype.push=function(t,e,i,o){this.preAllocated&&(this.preAllocated[++this.iterator]=t,this.preAllocated[++this.iterator]=e,this.preAllocated[++this.iterator]=i,this.preAllocated[++this.iterator]=o)},t.prototype.render=function(t,e,i){var o=this.preAllocated?this.preAllocated.length:this.data.length;return!!this.buffer&&!!o&&((!t||t>o||t<0)&&(t=0),(!e||e>o)&&(e=o),!(t>=e)&&(i=i||"POINTS",this.gl.drawArrays(this.gl[i],t/this.components,(e-t)/this.components),!0))},t}(),T=p().parse,C=u().doc,S=u().win,E=u().isNumber,M=u().isObject,U=u().merge,R=u().objectEach,k=u().pick,w={column:!0,columnrange:!0,bar:!0,area:!0,areaspline:!0,arearange:!0},L={scatter:!0,bubble:!0},N=["webgl","experimental-webgl","moz-webgl","webkit-3d"],_=function(){function t(t){this.data=[],this.height=0,this.isInited=!1,this.markerData=[],this.series=[],this.textureHandles={},this.width=0,this.postRenderCallback=t,this.settings={pointSize:1,lineWidth:1,fillColor:"#AA00AA",useAlpha:!0,usePreallocated:!1,useGPUTranslations:!1,debug:{timeRendering:!1,timeSeriesProcessing:!1,timeSetup:!1,timeBufferCopy:!1,timeKDTree:!1,showSkipSummary:!1}}}return t.orthoMatrix=function(t,e){return[2/t,0,0,0,0,-(2/e),0,0,0,0,-2,0,-1,1,-1,1]},t.seriesPointCount=function(t){var e,i,o;return t.boosted?(e=!!t.options.stacking,i=(t.getColumn("x").length?t.getColumn("x"):void 0)||t.options.xData||t.getColumn("x",!0),o=(e?t.data:i||t.options.data).length,"treemap"===t.type?o*=12:"heatmap"===t.type?o*=6:w[t.type]&&(o*=2),o):0},t.prototype.getPixelRatio=function(){return this.settings.pixelRatio||S.devicePixelRatio||1},t.prototype.setOptions=function(t){"pixelRatio"in t||(t.pixelRatio=1),U(!0,this.settings,t)},t.prototype.allocateBuffer=function(e){var i=this.vbuffer,o=0;this.settings.usePreallocated&&(e.series.forEach(function(e){e.boosted&&(o+=t.seriesPointCount(e))}),i&&i.allocate(o))},t.prototype.allocateBufferForSingleSeries=function(e){var i=this.vbuffer,o=0;this.settings.usePreallocated&&(e.boosted&&(o=t.seriesPointCount(e)),i&&i.allocate(o))},t.prototype.clear=function(){var t=this.gl;t&&t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)},t.prototype.pushSeriesData=function(t,e){var i,o,r,n,s,a,l,h,u,d,c=this,f=this.data,g=this.settings,m=this.vbuffer,p=t.pointArrayMap&&"low,high"===t.pointArrayMap.join(","),b=t.chart,x=t.options,v=t.sorted,A=t.xAxis,y=t.yAxis,P=!!x.stacking,C=x.data,S=t.xAxis.getExtremes(),E=S.min-(t.xAxis.minPointOffset||0),U=S.max+(t.xAxis.minPointOffset||0),R=t.yAxis.getExtremes(),k=R.min-(t.yAxis.minPointOffset||0),L=R.max+(t.yAxis.minPointOffset||0),N=(t.getColumn("x").length?t.getColumn("x"):void 0)||x.xData||t.getColumn("x",!0),_=(t.getColumn("y").length?t.getColumn("y"):void 0)||x.yData||t.getColumn("y",!0),z=(t.getColumn("z").length?t.getColumn("z"):void 0)||x.zData||t.getColumn("z",!0),I=!N||0===N.length,D=x.connectNulls,B=t.points||!1,O=P?t.data:N||C,V={x:Number.MAX_VALUE,y:0},X={x:-Number.MAX_VALUE,y:0},G=void 0===b.index,F=w[t.type],H=x.zoneAxis||"y",W=x.zones||!1,Y=x.threshold,j=this.getPixelRatio(),q=t.chart.plotWidth,Z=!1,K=!1,Q=0,J=!1,$=-1,tt=!1,te=!1,ti=!1,to=!1,tr=!1,tn=!1,ts=!0,ta=!0,tl=!1,th=!1,tu=0;if(!x.boostData||!(x.boostData.length>0)){x.gapSize&&(th="value"!==x.gapUnit?x.gapSize*t.closestPointRange:x.gapSize),W&&(d=[],W.forEach(function(t,e){if(t.color){var i=T(t.color).rgba;i[0]/=255,i[1]/=255,i[2]/=255,d[e]=i,tl||void 0!==t.value||(tl=i)}}),tl||(tl=T(t.pointAttribs&&t.pointAttribs().fill||t.color).rgba,tl[0]/=255,tl[1]/=255,tl[2]/=255)),b.inverted&&(q=t.chart.plotHeight),t.closestPointRangePx=Number.MAX_VALUE;var td=function(t){t&&(e.colorData.push(t[0]),e.colorData.push(t[1]),e.colorData.push(t[2]),e.colorData.push(t[3]))},tc=function(t,i,o,r,n){void 0===r&&(r=1),td(n),1!==j&&(!g.useGPUTranslations||e.skipTranslation)&&(t*=j,i*=j,r*=j),g.usePreallocated&&m?(m.push(t,i,o?1:0,r),tu+=4):(f.push(t),f.push(i),f.push(o?j:0),f.push(r))},tf=function(){e.segments.length&&(e.segments[e.segments.length-1].to=f.length||tu)},tg=function(){e.segments.length&&e.segments[e.segments.length-1].from===(f.length||tu)||(tf(),e.segments.push({from:f.length||tu}))},tm=function(t,e,i,o,r){td(r),tc(t+i,e),td(r),tc(t,e),td(r),tc(t,e+o),td(r),tc(t,e+o),td(r),tc(t+i,e+o),td(r),tc(t+i,e)};if(tg(),B&&B.length>0){e.skipTranslation=!0,e.drawMode="TRIANGLES",B[0].node&&B[0].node.levelDynamic&&B.sort(function(t,e){if(t.node){if(t.node.levelDynamic>e.node.levelDynamic)return 1;if(t.node.levelDynamic<e.node.levelDynamic)return -1}return 0}),B.forEach(function(e){var i,o,r=e.plotY;if(void 0!==r&&!isNaN(r)&&null!==e.y&&e.shapeArgs){var s=e.shapeArgs,a=s.x,l=void 0===a?0:a,h=s.y,u=void 0===h?0:h,d=s.width,c=void 0===d?0:d,f=s.height,g=void 0===f?0:f;i=(o=b.styledMode?e.series.colorAttribs(e):o=e.series.pointAttribs(e))["stroke-width"]||0,tr=T(o.fill).rgba,tr[0]/=255,tr[1]/=255,tr[2]/=255,t.is("treemap")&&(i=i||1,n=T(o.stroke).rgba,n[0]/=255,n[1]/=255,n[2]/=255,tm(l,u,c,g,n),i/=2),t.is("heatmap")&&b.inverted&&(l=A.len-l,u=y.len-u,c=-c,g=-g),tm(l+i,u+i,c-2*i,g-2*i,tr)}}),tf();return}for(;$<O.length-1&&"break"!==function(){if(void 0===(l=O[++$]))return"continue";if(G)return"break";var n,c=C&&C[$];return(!I&&M(c,!0)&&c.color&&(tr=T(c.color).rgba,tr[0]/=255,tr[1]/=255,tr[2]/=255),I?(s=l[0],a=l[1],O[$+1]&&(te=O[$+1][0]),O[$-1]&&(tt=O[$-1][0]),l.length>=3&&(h=l[2],l[2]>e.zMax&&(e.zMax=l[2]),l[2]<e.zMin&&(e.zMin=l[2]))):(s=l,a=null==_?void 0:_[$],O[$+1]&&(te=O[$+1]),O[$-1]&&(tt=O[$-1]),z&&z.length&&(h=z[$],z[$]>e.zMax&&(e.zMax=z[$]),z[$]<e.zMin&&(e.zMin=z[$]))),D||null!==s&&null!==a)?(te&&te>=E&&te<=U&&(ti=!0),tt&&tt>=E&&tt<=U&&(to=!0),p?(I&&(a=l.slice(1,3)),u=null===(i=t.getColumn("low",!0))||void 0===i?void 0:i[$],a=(null===(o=t.getColumn("high",!0))||void 0===o?void 0:o[$])||0):P&&(s=l.x,u=(a=l.stackY)-l.y),null!=k&&null!=L&&(ts=a>=k&&a<=L),s>U&&X.x<U&&(X.x=s,X.y=a),s<E&&V.x>E&&(V.x=s,V.y=a),null===a&&D)?"continue":null!==a&&(ts||ti||to)?(v&&(te>=E||s>=E)&&(tt<=U||s<=U)&&(tn=!0),tn||ti||to)?(th&&s-tt>th&&tg(),W&&(W.some(function(t,e){var i=W[e-1];return"x"===H?void 0!==t.value&&s<=t.value&&(d[e]&&(!i||s>=i.value)&&(n=d[e]),!0):void 0!==t.value&&a<=t.value&&(d[e]&&(!i||a>=i.value)&&(n=d[e]),!0)}),tr=n||tl||tr),!g.useGPUTranslations&&(e.skipTranslation=!0,s=A.toPixels(s,!0),a=y.toPixels(a,!0),s>q&&"POINTS"===e.drawMode))?"continue":(e.hasMarkers&&tn&&!1!==Z&&(t.closestPointRangePx=Math.min(t.closestPointRangePx,Math.abs(s-Z))),!g.useGPUTranslations&&!g.usePreallocated&&Z&&1>Math.abs(s-Z)&&K&&1>Math.abs(a-K))?(g.debug.showSkipSummary&&++Q,"continue"):void(F&&(r=u||0,(!1===u||void 0===u)&&(r=a<0?a:0),(p||P)&&!y.logarithmic||(r=Math.max(null===Y?k:Y,k)),g.useGPUTranslations||(r=y.toPixels(r,!0)),tc(s,r,0,0,tr)),x.step&&!ta&&tc(s,K,0,2,tr),tc(s,a,0,"bubble"===t.type?h||1:2,tr),Z=s,K=a,J=!0,ta=!1):"continue":(tg(),"continue"):(tg(),"continue")}(););g.debug.showSkipSummary&&console.log("skipped points:",Q);var tp=function(t,i){if(g.useGPUTranslations||(e.skipTranslation=!0,t.x=A.toPixels(t.x,!0),t.y=y.toPixels(t.y,!0)),i){c.data=[t.x,t.y,0,2].concat(c.data);return}tc(t.x,t.y,0,2)};!J&&!1!==D&&"line_strip"===t.drawMode&&(V.x<Number.MAX_VALUE&&tp(V,!0),X.x>-Number.MAX_VALUE&&tp(X)),tf()}},t.prototype.pushSeries=function(t){var e=this.markerData,i=this.series,o=this.settings;i.length>0&&i[i.length-1].hasMarkers&&(i[i.length-1].markerTo=e.length),o.debug.timeSeriesProcessing&&console.time("building "+t.type+" series");var r={segments:[],markerFrom:e.length,colorData:[],series:t,zMin:Number.MAX_VALUE,zMax:-Number.MAX_VALUE,hasMarkers:!!t.options.marker&&!1!==t.options.marker.enabled,showMarkers:!0,drawMode:b[t.type]||"LINE_STRIP"};t.index>=i.length?i.push(r):i[t.index]=r,this.pushSeriesData(t,r),o.debug.timeSeriesProcessing&&console.timeEnd("building "+t.type+" series")},t.prototype.flush=function(){var t=this.vbuffer;this.data=[],this.markerData=[],this.series=[],t&&t.destroy()},t.prototype.setXAxis=function(t){var e=this.shader;if(e){var i=this.getPixelRatio();e.setUniform("xAxisTrans",t.transA*i),e.setUniform("xAxisMin",t.min),e.setUniform("xAxisMinPad",t.minPixelPadding*i),e.setUniform("xAxisPointRange",t.pointRange),e.setUniform("xAxisLen",t.len*i),e.setUniform("xAxisPos",t.pos*i),e.setUniform("xAxisCVSCoord",!t.horiz),e.setUniform("xAxisIsLog",!!t.logarithmic),e.setUniform("xAxisReversed",!!t.reversed)}},t.prototype.setYAxis=function(t){var e=this.shader;if(e){var i=this.getPixelRatio();e.setUniform("yAxisTrans",t.transA*i),e.setUniform("yAxisMin",t.min),e.setUniform("yAxisMinPad",t.minPixelPadding*i),e.setUniform("yAxisPointRange",t.pointRange),e.setUniform("yAxisLen",t.len*i),e.setUniform("yAxisPos",t.pos*i),e.setUniform("yAxisCVSCoord",!t.horiz),e.setUniform("yAxisIsLog",!!t.logarithmic),e.setUniform("yAxisReversed",!!t.reversed)}},t.prototype.setThreshold=function(t,e){var i=this.shader;i&&(i.setUniform("hasThreshold",t),i.setUniform("translatedThreshold",e))},t.prototype.renderChart=function(e){var i=this,o=this.gl,r=this.settings,n=this.shader,s=this.vbuffer,a=this.getPixelRatio();if(!e)return!1;this.width=e.chartWidth*a,this.height=e.chartHeight*a;var l=this.height,h=this.width;if(!o||!n||!h||!l)return!1;r.debug.timeRendering&&console.time("gl rendering"),o.canvas.width=h,o.canvas.height=l,n.bind(),o.viewport(0,0,h,l),n.setPMatrix(t.orthoMatrix(h,l)),r.lineWidth>1&&!u().isMS&&o.lineWidth(r.lineWidth),s&&(s.build(this.data,"aVertexPosition",4),s.bind()),n.setInverted(e.inverted),this.series.forEach(function(t,l){var h,u,d,c,f,g,m=t.series.options,b=m.marker,x=void 0!==m.lineWidth?m.lineWidth:1,v=m.threshold,A=E(v),y=t.series.yAxis.getThreshold(v),C=k(m.marker?m.marker.enabled:null,!!t.series.xAxis.isRadial||null,t.series.closestPointRangePx>2*((m.marker?m.marker.radius:10)||10)),S=i.textureHandles[b&&b.symbol||t.series.symbol]||i.textureHandles.circle,M=[];if(0!==t.segments.length&&t.segments[0].from!==t.segments[0].to&&(S.isReady&&(o.bindTexture(o.TEXTURE_2D,S.handle),n.setTexture(S.handle)),e.styledMode?t.series.markerGroup===(null===(h=t.series.chart.boost)||void 0===h?void 0:h.markerGroup)?(delete t.series.markerGroup,t.series.markerGroup=t.series.plotGroup("markerGroup","markers","visible",1,e.seriesGroup).addClass("highcharts-tracker"),g=t.series.markerGroup.getStyle("fill"),t.series.markerGroup.destroy(),t.series.markerGroup=null===(u=t.series.chart.boost)||void 0===u?void 0:u.markerGroup):g=null===(d=t.series.markerGroup)||void 0===d?void 0:d.getStyle("fill"):(g="POINTS"===t.drawMode&&t.series.pointAttribs&&t.series.pointAttribs().fill||t.series.color,m.colorByPoint&&(g=t.series.chart.options.colors[l])),t.series.fillOpacity&&m.fillOpacity&&(g=new(p())(g).setOpacity(k(m.fillOpacity,1)).get()),M=T(g).rgba,r.useAlpha||(M[3]=1),"add"===m.boostBlending?(o.blendFunc(o.SRC_ALPHA,o.ONE),o.blendEquation(o.FUNC_ADD)):"mult"===m.boostBlending||"multiply"===m.boostBlending?o.blendFunc(o.DST_COLOR,o.ZERO):"darken"===m.boostBlending?(o.blendFunc(o.ONE,o.ONE),o.blendEquation(o.FUNC_MIN)):o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA),n.reset(),t.colorData.length>0?(n.setUniform("hasColor",1),(f=new P(o,n)).build(Array(t.segments[0].from).concat(t.colorData),"aColor",4),f.bind()):(n.setUniform("hasColor",0),o.disableVertexAttribArray(o.getAttribLocation(n.getProgram(),"aColor"))),n.setColor(M),i.setXAxis(t.series.xAxis),i.setYAxis(t.series.yAxis),i.setThreshold(A,y),"POINTS"===t.drawMode&&n.setPointSize(2*k(m.marker&&m.marker.radius,.5)*a),n.setSkipTranslation(t.skipTranslation),"bubble"===t.series.type&&n.setBubbleUniforms(t.series,t.zMin,t.zMax,a),n.setDrawAsCircle(L[t.series.type]||!1),s)){if(x>0||"LINE_STRIP"!==t.drawMode)for(c=0;c<t.segments.length;c++)s.render(t.segments[c].from,t.segments[c].to,t.drawMode);if(t.hasMarkers&&C)for(n.setPointSize(2*k(m.marker&&m.marker.radius,5)*a),n.setDrawAsCircle(!0),c=0;c<t.segments.length;c++)s.render(t.segments[c].from,t.segments[c].to,"POINTS")}}),r.debug.timeRendering&&console.timeEnd("gl rendering"),this.postRenderCallback&&this.postRenderCallback(this),this.flush()},t.prototype.render=function(t){var e=this;if(this.clear(),t.renderer.forExport)return this.renderChart(t);this.isInited?this.renderChart(t):setTimeout(function(){e.render(t)},1)},t.prototype.setSize=function(e,i){var o=this.shader;o&&(this.width!==e||this.height!==i)&&(this.width=e,this.height=i,o.bind(),o.setPMatrix(t.orthoMatrix(e,i)))},t.prototype.init=function(t,e){var i=this,o=this.settings;if(this.isInited=!1,!t)return!1;o.debug.timeSetup&&console.time("gl setup");for(var r=0;r<N.length&&(this.gl=t.getContext(N[r],{}),!this.gl);++r);var n=this.gl;if(!n)return!1;e||this.flush(),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.disable(n.DEPTH_TEST),n.depthFunc(n.LESS);var s=this.shader=new y(n);if(!s)return!1;this.vbuffer=new P(n,s);var a=function(t,e){var o={isReady:!1,texture:C.createElement("canvas"),handle:n.createTexture()},r=o.texture.getContext("2d");i.textureHandles[t]=o,o.texture.width=512,o.texture.height=512,r.mozImageSmoothingEnabled=!1,r.webkitImageSmoothingEnabled=!1,r.msImageSmoothingEnabled=!1,r.imageSmoothingEnabled=!1,r.strokeStyle="rgba(255, 255, 255, 0)",r.fillStyle="#FFF",e(r);try{n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.handle),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,o.texture),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.bindTexture(n.TEXTURE_2D,null),o.isReady=!0}catch(t){}};return a("circle",function(t){t.beginPath(),t.arc(256,256,256,0,2*Math.PI),t.stroke(),t.fill()}),a("square",function(t){t.fillRect(0,0,512,512)}),a("diamond",function(t){t.beginPath(),t.moveTo(256,0),t.lineTo(512,256),t.lineTo(256,512),t.lineTo(0,256),t.lineTo(256,0),t.fill()}),a("triangle",function(t){t.beginPath(),t.moveTo(0,512),t.lineTo(256,0),t.lineTo(512,512),t.lineTo(0,512),t.fill()}),a("triangle-down",function(t){t.beginPath(),t.moveTo(0,0),t.lineTo(256,512),t.lineTo(512,0),t.lineTo(0,0),t.fill()}),this.isInited=!0,o.debug.timeSetup&&console.timeEnd("gl setup"),!0},t.prototype.destroy=function(){var t=this.gl,e=this.shader,i=this.vbuffer;this.flush(),i&&i.destroy(),e&&e.destroy(),t&&(R(this.textureHandles,function(e){e.handle&&t.deleteTexture(e.handle)}),t.canvas.width=1,t.canvas.height=1)},t}(),z=(u().getOptions,u().composed,u().doc),I=u().noop,D=u().win,B=(u().addEvent,u().destroyObjectProperties),O=u().error,V=(u().extend,u().fireEvent),X=u().isArray,G=u().isNumber,F=u().pick,H=(u().pushUnique,u().wrap,u().defined);function W(t,e){var i=e.boost;t&&i&&i.target&&i.canvas&&!f(e.chart)&&t.allocateBufferForSingleSeries(e)}function Y(t,e){var i,r,n,s=t.constructor,a=t.seriesGroup||e.group,l=t.chartWidth,h=t.chartHeight,u=t,d="undefined"!=typeof SVGForeignObjectElement,c=!1;f(t)?u=t:(u=e,c=!!((null===(i=e.options.events)||void 0===i?void 0:i.click)||(null===(n=null===(r=e.options.point)||void 0===r?void 0:r.events)||void 0===n?void 0:n.click)));var m=u.boost=u.boost||{};if(d=!1,o||(o=z.createElement("canvas")),!m.target&&(m.canvas=o,t.renderer.forExport||!d?(u.renderTarget=m.target=t.renderer.image("",0,0,l,h).addClass("highcharts-boost-canvas").add(a),m.clear=function(){m.target.attr({href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="})},m.copy=function(){m.resize(),m.target.attr({href:m.canvas.toDataURL("image/png")})}):(m.targetFo=t.renderer.createElement("foreignObject").add(a),u.renderTarget=m.target=z.createElement("canvas"),m.targetCtx=m.target.getContext("2d"),m.targetFo.element.appendChild(m.target),m.clear=function(){m.target.width=m.canvas.width,m.target.height=m.canvas.height},m.copy=function(){m.target.width=m.canvas.width,m.target.height=m.canvas.height,m.targetCtx.drawImage(m.canvas,0,0)}),m.resize=function(){var e,i;l=t.chartWidth,h=t.chartHeight,(m.targetFo||m.target).attr({x:0,y:0,width:l,height:h}).css({pointerEvents:c?void 0:"none",mixedBlendMode:"normal",opacity:1}).addClass(c?"highcharts-tracker":""),u instanceof s&&(null===(i=null===(e=u.boost)||void 0===e?void 0:e.markerGroup)||void 0===i||i.translate(t.plotLeft,t.plotTop))},m.clipRect=t.renderer.clipRect(),(m.targetFo||m.target).attr({zIndex:e.options.zIndex}),u instanceof s&&(u.boost.markerGroup=u.renderer.g().add(a).translate(e.xAxis.pos,e.yAxis.pos))),m.canvas.width=l,m.canvas.height=h,m.clipRect){var p=g(t,u),b=p.width===t.clipBox.width&&p.height===t.clipBox.height?a:m.targetFo||m.target;m.clipRect.attr(p),null==b||b.clip(m.clipRect)}return m.resize(),m.clear(),!m.wgl&&(m.wgl=new _(function(t){t.settings.debug.timeBufferCopy&&console.time("buffer copy"),m.copy(),t.settings.debug.timeBufferCopy&&console.timeEnd("buffer copy")}),m.wgl.init(m.canvas)||O("[highcharts boost] - unable to init WebGL renderer"),m.wgl.setOptions(t.options.boost||{}),u instanceof s&&m.wgl.allocateBuffer(t)),m.wgl.setSize(l,h),m.wgl}function j(t){var e=t.points;if(e){var i=void 0,o=void 0;for(o=0;o<e.length;o+=1)(i=e[o])&&i.destroyElements&&i.destroyElements()}["graph","area","tracker"].forEach(function(e){var i=t[e];i&&(t[e]=i.destroy())});for(var r=0,n=t.zones;r<n.length;r++)B(n[r],void 0,!0)}function q(t,e,i,o,r,n){for(var s=(r=r||0)+(o=o||3e3),a=!0;a&&r<s&&r<t.length;)a=e(t[r],r),++r;a&&(r<t.length?n?q(t,e,i,o,r,n):D.requestAnimationFrame?D.requestAnimationFrame(function(){q(t,e,i,o,r)}):setTimeout(q,0,t,e,i,o,r):i&&i())}function Z(t,e){var i=t.options,o=t.dataTable.modified.rowCount,r=t.xAxis&&t.xAxis.options,n=t.yAxis&&t.yAxis.options,s=t.colorAxis&&t.colorAxis.options;return o>(i.boostThreshold||Number.MAX_VALUE)&&G(n.min)&&G(n.max)&&(!e||G(r.min)&&G(r.max))&&(!s||G(s.min)&&G(s.max))}var K=function(t,e){return!t.forceCrop&&(f(t.chart)||(e?e.length:0)>=(t.options.boostThreshold||Number.MAX_VALUE))};function Q(t){var e=t.boost;e&&e.canvas&&e.target&&e.wgl&&!f(t.chart)&&e.wgl.render(t.chart)}function J(t){var e=this.options,i=this.xAxis,o=this.yAxis;if(!this.isDirty&&!i.isDirty&&!o.isDirty&&!t)return!1;this.yAxis.setTickInterval();var r=e.boostThreshold||0,n=e.cropThreshold,s=this.getColumn("x"),a=i.getExtremes(),l=null!==(m=a.max)&&void 0!==m?m:Number.MAX_VALUE,h=null!==(p=a.min)&&void 0!==p?p:-Number.MAX_VALUE,u=this.getColumn("y"),d=o.getExtremes(),c=null!==(b=d.max)&&void 0!==b?b:Number.MAX_VALUE,f=null!==(x=d.min)&&void 0!==x?x:-Number.MAX_VALUE;if(!this.boosted&&i.old&&o.old&&h>=(null!==(v=i.old.min)&&void 0!==v?v:-Number.MAX_VALUE)&&l<=(null!==(A=i.old.max)&&void 0!==A?A:Number.MAX_VALUE)&&f>=(null!==(y=o.old.min)&&void 0!==y?y:-Number.MAX_VALUE)&&c<=(null!==(P=o.old.max)&&void 0!==P?P:Number.MAX_VALUE))return this.dataTable.modified.setColumns({x:s,y:u}),!0;var g=this.dataTable.rowCount;if(!r||g<r||n&&!this.forceCrop&&!this.getExtremesFromAll&&!e.getExtremesFromAll&&g<n)return this.dataTable.modified.setColumns({x:s,y:u}),!0;for(var m,p,b,x,v,A,y,P,T,C,S,E,M,U,R,k,w,L,N=[],_=[],z=[],I=!(G(a.max)||G(a.min)),D=!(G(d.max)||G(d.min)),B=!1,O=s[0],V=s[0],X=null==u?void 0:u[0],F=null==u?void 0:u[0],H=0,W=s.length;H<W;++H)w=s[H],L=null==u?void 0:u[H],w>=h&&w<=l&&L>=f&&L<=c?(N.push({x:w,y:L}),_.push(w),z.push(L),I&&(O=Math.max(O,w),V=Math.min(V,w)),D&&(X=Math.max(X,L),F=Math.min(F,L))):B=!0;return I&&(null!==(T=(M=i.options).max)&&void 0!==T||(M.max=O),null!==(C=(U=i.options).min)&&void 0!==C||(U.min=V)),D&&(null!==(S=(R=o.options).max)&&void 0!==S||(R.max=X),null!==(E=(k=o.options).min)&&void 0!==E||(k.min=F)),this.cropped=B,this.cropStart=0,this.dataTable.modified.setColumns({x:_,y:z}),K(this,_)||(this.processedData=N),!0}var $=p().parse,tt=u().doc,te=u().noop,ti=u().addEvent,to=u().fireEvent,tr=u().isNumber,tn=u().merge,ts=u().pick,ta=u().wrap;!function(t){var e,i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";function o(t,e,i,o,r){r&&e!==r.clientX&&(t.moveTo(r.clientX,r.yBottom),t.lineTo(r.clientX,r.plotY),t.lineTo(e,i),t.lineTo(e,o))}function r(t,e,i,o,r){t.moveTo(e,i),t.arc(e,i,this.radii&&this.radii[r],0,2*Math.PI,!1)}function n(t,e,i,o){t.rect(e-1,i,1,o-i)}function s(){this.boost&&this.boost.copy&&this.boost.copy()}function a(){var t=this.boost||{};t.target&&t.target.attr({href:i}),t.canvas&&t.canvas.getContext("2d").clearRect(0,0,t.canvas.width,t.canvas.height)}function l(){f(this.chart)?this.boost&&this.boost.clear&&this.boost.clear():this.boost&&this.boost.copy?this.boost.copy():this.chart.boost&&this.chart.boost.copy&&this.chart.boost.copy()}function h(t,e,i){t.lineTo(e,i)}function d(){var t,e=this.chart,o=f(e)?e:this,r=o===e?e.seriesGroup:e.seriesGroup||this.group,n=e.chartWidth,s=e.chartHeight,a=function(t,e,i,o,r,n,s){t.call(this,i,e,o,r,n,s)},l=o.boost=o.boost||{};return t=l.targetCtx,l.canvas||(l.canvas=tt.createElement("canvas"),l.target=e.renderer.image("",0,0,n,s).addClass("highcharts-boost-canvas").add(r),t=l.targetCtx=l.canvas.getContext("2d"),e.inverted&&["moveTo","lineTo","rect","arc"].forEach(function(e){ta(t,e,a)}),l.copy=function(){l.target.attr({href:l.canvas.toDataURL("image/png")})},l.clear=function(){t.clearRect(0,0,l.canvas.width,l.canvas.height),o===l.target&&l.target.attr({href:i})},l.clipRect=e.renderer.clipRect(),l.target.clip(l.clipRect)),l.canvas.width!==n&&(l.canvas.width=n),l.canvas.height!==s&&(l.canvas.height=s),l.target.attr({x:0,y:0,width:n,height:s,style:"pointer-events: none",href:i}),l.clipRect&&l.clipRect.attr(g(e,o)),t}function c(){var t=this,o=t.options,r=t.chart,n=t.xAxis,s=t.yAxis,a=r.options.boost||{},l={timeRendering:a.timeRendering||!1,timeSeriesProcessing:a.timeSeriesProcessing||!1,timeSetup:a.timeSetup||!1},h=t.getColumn("x",!0),d=t.getColumn("y",!0),c=o.data,f=n.getExtremes(),g=f.min,m=f.max,b=s.getExtremes(),x=b.min,v=b.max,A={},y=!!t.sampling,P=o.marker&&o.marker.radius,T=t.cvsStrokeBatch||1e3,C=o.enableMouseTracking,S=o.threshold,E=tr(S),M=s.getThreshold(S),U=t.fill,R=t.pointArrayMap&&"low,high"===t.pointArrayMap.join(","),k=!!o.stacking,w=t.cropStart||0,L=r.options.loading,N=t.requireSorting,_=o.connectNulls,z=!h,I=k?t.data:h||c,D=t.fillOpacity?p().parse(t.color).setOpacity(ts(o.fillOpacity,.75)).get():t.color,B="x"===o.findNearestPointBy,O=this.boost||{},V=t.cvsDrawPoint,X=o.lineWidth?t.cvsLineTo:void 0,G=P&&P<=1?t.cvsMarkerSquare:t.cvsMarkerCircle;O.target&&O.target.attr({href:i}),(t.points||t.graph)&&j(t),t.plotGroup("group","series",t.visible?"visible":"hidden",o.zIndex,r.seriesGroup),t.markerGroup=t.group,ti(t,"destroy",function(){t.markerGroup=null});var F=this.points=[],H=this.getContext();if(t.buildKDTree=te,O.clear&&O.clear(),t.visible){c.length>99999&&(r.options.loading=tn(L,{labelStyle:{backgroundColor:$("#ffffff").setOpacity(.75).get(),padding:"1em",borderRadius:"0.5em"},style:{backgroundColor:"none",opacity:1}}),u().clearTimeout(e),r.showLoading("Drawing..."),r.options.loading=L),l.timeRendering&&console.time("canvas rendering");var W,Y,Z,K,Q,J,tt,ta,tl=0,th=M,tu=function(){U?(H.fillStyle=D,H.fill()):(H.strokeStyle=t.color,H.lineWidth=o.lineWidth,H.stroke())},td=function(e,i,o,n){0===tl&&(H.beginPath(),X&&(H.lineJoin="round")),r.scroller&&"highcharts-navigator-series"===t.options.className?(i+=r.scroller.top,o&&(o+=r.scroller.top)):i+=r.plotTop,e+=r.plotLeft,Z?H.moveTo(e,i):V?V(H,e,i,o,Y):X?X(H,e,i):G&&G.call(t,H,e,i,P,n),(tl+=1)===T&&(tu(),tl=0),Y={clientX:e,plotY:i,yBottom:o}},tc=(this.getColumn("x").length?this.getColumn("x"):void 0)||this.options.xData||!!this.getColumn("x",!0).length&&this.getColumn("x",!0),tf=function(t,e,i){ta=B?t:t+","+e,C&&!A[ta]&&(A[ta]=!0,r.inverted&&(t=n.len-t,e=s.len-e),F.push({x:!!tc&&tc[w+i],clientX:t,plotX:t,plotY:e,i:w+i}))};q(I,function(e,i){var o,a,l,h,u,c,f=void 0===r.index,p=!1,b=!1,A=NaN,P=NaN,T=!0;return!f&&(z?(o=e[0],a=e[1],I[i+1]&&(A=I[i+1][0]),I[i-1]&&(P=I[i-1][0])):(o=e,a=d[i],I[i+1]&&(A=I[i+1]),I[i-1]&&(P=I[i-1])),A&&A>=g&&A<=m&&(p=!0),P&&P>=g&&P<=m&&(b=!0),R?(z&&(a=e.slice(1,3)),c=a[0],a=a[1]):k&&(o=e.x,c=(a=e.stackY)-e.y),u=null===a,N||(T=a>=x&&a<=v),!u&&(o>=g&&o<=m&&T||p||b)&&(l=Math.round(n.toPixels(o,!0)),y?((void 0===J||l===W)&&(R||(c=a),(void 0===tt||a>Q)&&(Q=a,tt=i),(void 0===J||c<K)&&(K=c,J=i)),l!==W&&(void 0!==J&&(h=s.toPixels(Q,!0),th=s.toPixels(K,!0),td(l,E?Math.min(h,M):h,E?Math.max(th,M):th,i),tf(l,h,tt),th!==h&&tf(l,th,J)),J=tt=void 0,W=l)):(td(l,h=Math.round(s.toPixels(a,!0)),th,i),tf(l,h,i))),Z=u&&!_,i%5e4==0&&(t.boost&&t.boost.copy?t.boost.copy():t.chart.boost&&t.chart.boost.copy&&t.chart.boost.copy())),!f},function(){var i=r.loadingDiv,o=r.loadingShown;tu(),t.canvasToSVG(),l.timeRendering&&console.timeEnd("canvas rendering"),to(t,"renderedCanvas"),o&&(i.style.transition="opacity 250ms",i.opacity=0,r.loadingShown=!1,e=setTimeout(function(){i.parentNode&&i.parentNode.removeChild(i),r.loadingDiv=r.loadingSpan=null},250)),delete t.buildKDTree,t.buildKDTree()},r.renderer.forExport?Number.MAX_VALUE:void 0)}}function m(t,e,i,o){t.moveTo(e,i),t.arc(e,i,o,0,2*Math.PI,!1)}function b(t,e,i,o){t.rect(e-o,i-o,2*o,2*o)}function x(){var t=this.chart,e=this.getContext(),i=this.chart.inverted,o=this.xAxis,r=this.yAxis;e?(this.points.forEach(function(n){var s,a=n.plotY;if(void 0!==a&&!isNaN(a)&&null!==n.y&&e){var l=n.shapeArgs||{},h=l.x,u=void 0===h?0:h,d=l.y,c=void 0===d?0:d,f=l.width,g=void 0===f?0:f,m=l.height,p=void 0===m?0:m;s=t.styledMode?n.series.colorAttribs(n):n.series.pointAttribs(n),e.fillStyle=s.fill,i?e.fillRect(r.len-c+o.left,o.len-u+r.top,-p,-g):e.fillRect(u+o.left,c+r.top,g,p)}}),this.canvasToSVG()):this.chart.showLoading("Your browser doesn't support HTML5 canvas, <br>please use a modern browser")}t.compose=function(t,e,i){var u=e.prototype;if(!u.renderCanvas){var f=i.area,g=i.bubble,p=i.column,v=i.heatmap,A=i.scatter;if(t.prototype.callbacks.push(function(t){ti(t,"predraw",a),ti(t,"render",s)}),u.canvasToSVG=l,u.cvsLineTo=h,u.getContext=d,u.renderCanvas=c,f){var y=f.prototype;y.cvsDrawPoint=o,y.fill=!0,y.fillOpacity=!0,y.sampling=!0}if(g){var P=g.prototype;P.cvsMarkerCircle=r,P.cvsStrokeBatch=1}if(p){var T=p.prototype;T.cvsDrawPoint=n,T.fill=!0,T.sampling=!0}if(v&&ta(v.prototype,"drawPoints",x),A){var C=A.prototype;C.cvsMarkerCircle=m,C.cvsMarkerSquare=b,C.fill=!0}}}}(r||(r={}));var tl=r,th=u();th.initCanvasBoost=function(){tl.compose(th.Chart,th.Series,th.seriesTypes)};var tu=u();return l.default}()});