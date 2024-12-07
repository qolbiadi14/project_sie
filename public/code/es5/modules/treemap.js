!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/treemap
 * @requires highcharts
 *
 * (c) 2014-2024 Highsoft AS
 * Authors: Jon Arild Nygard / Oystein Moseng
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").Templating,require("highcharts").Color,require("highcharts").SeriesRegistry,require("highcharts").SVGElement):"function"==typeof define&&define.amd?define("highcharts/treemap",[["highcharts/highcharts"],["highcharts/highcharts","Templating"],["highcharts/highcharts","Color"],["highcharts/highcharts","SeriesRegistry"],["highcharts/highcharts","SVGElement"]],e):"object"==typeof exports?exports["highcharts/treemap"]=e(require("highcharts"),require("highcharts").Templating,require("highcharts").Color,require("highcharts").SeriesRegistry,require("highcharts").SVGElement):t.Highcharts=e(t.Highcharts,t.Highcharts.Templating,t.Highcharts.Color,t.Highcharts.SeriesRegistry,t.Highcharts.SVGElement)}(this,function(t,e,r,i,o){return function(){"use strict";var s,n,a,l,h={620:function(t){t.exports=r},28:function(t){t.exports=o},512:function(t){t.exports=i},984:function(t){t.exports=e},944:function(e){e.exports=t}},p={};function d(t){var e=p[t];if(void 0!==e)return e.exports;var r=p[t]={exports:{}};return h[t](r,r.exports,d),r.exports}d.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return d.d(e,{a:e}),e},d.d=function(t,e){for(var r in e)d.o(e,r)&&!d.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var u={};d.d(u,{default:function(){return tH}});var c=d(944),v=/*#__PURE__*/d.n(c),g={lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}},f=d(984),y=/*#__PURE__*/d.n(f)().format,b=v().composed,m=v().addEvent,x=v().defined,w=v().extend,T=v().fireEvent,B=v().isString,L=v().merge,A=v().objectEach,O=v().pick,P=v().pushUnique;function S(){if(this.breadcrumbs){var t=this.resetZoomButton&&this.resetZoomButton.getBBox(),e=this.breadcrumbs.options;t&&"right"===e.position.align&&"plotBox"===e.relativeTo&&this.breadcrumbs.alignBreadcrumbsGroup(-t.width-e.buttonSpacing)}}function C(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function M(){var t=this.breadcrumbs;if(t&&!t.options.floating&&t.level){var e=t.options,r=e.buttonTheme,i=(r.height||0)+2*(r.padding||0)+e.buttonSpacing,o=e.position.verticalAlign;"bottom"===o?(this.marginBottom=(this.marginBottom||0)+i,t.yOffset=i):"middle"!==o?(this.plotTop+=i,t.yOffset=-i):t.yOffset=void 0}}function R(){this.breadcrumbs&&this.breadcrumbs.redraw()}function N(t){!0===t.resetSelection&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}var I=function(){function t(e,r){this.elementList={},this.isDirty=!0,this.level=0,this.list=[];var i=L(e.options.drilldown&&e.options.drilldown.drillUpButton,t.defaultOptions,e.options.navigation&&e.options.navigation.breadcrumbs,r);this.chart=e,this.options=i||{}}return t.compose=function(t,e){P(b,"Breadcrumbs")&&(m(t,"destroy",C),m(t,"afterShowResetZoom",S),m(t,"getMargins",M),m(t,"redraw",R),m(t,"selection",N),w(e.lang,g.lang))},t.prototype.updateProperties=function(t){this.setList(t),this.setLevel(),this.isDirty=!0},t.prototype.setList=function(t){this.list=t},t.prototype.setLevel=function(){this.level=this.list.length&&this.list.length-1},t.prototype.getLevel=function(){return this.level},t.prototype.getButtonText=function(t){var e=this.chart,r=this.options,i=e.options.lang,o=O(r.format,r.showFullPath?"{level.name}":"← {level.name}"),s=i&&O(i.drillUpText,i.mainBreadcrumb),n=r.formatter&&r.formatter(t)||y(o,{level:t.levelOptions},e)||"";return(B(n)&&!n.length||"← "===n)&&x(s)&&(n=r.showFullPath?s:"← "+s),n},t.prototype.redraw=function(){this.isDirty&&this.render(),this.group&&this.group.align(),this.isDirty=!1},t.prototype.render=function(){var t=this.chart,e=this.options;!this.group&&e&&(this.group=t.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:e.zIndex}).add()),e.showFullPath?this.renderFullPathButtons():this.renderSingleButton(),this.alignBreadcrumbsGroup()},t.prototype.renderFullPathButtons=function(){this.destroySingleButton(),this.resetElementListState(),this.updateListElements(),this.destroyListElements()},t.prototype.renderSingleButton=function(){var t=this.chart,e=this.list,r=this.options.buttonSpacing;this.destroyListElements();var i=this.group?this.group.getBBox().width:r,o=e[e.length-2];!t.drillUpButton&&this.level>0?t.drillUpButton=this.renderButton(o,i,r):t.drillUpButton&&(this.level>0?this.updateSingleButton():this.destroySingleButton())},t.prototype.alignBreadcrumbsGroup=function(t){if(this.group){var e=this.options,r=e.buttonTheme,i=e.position,o="chart"===e.relativeTo||"spacingBox"===e.relativeTo?void 0:"plotBox",s=this.group.getBBox(),n=2*(r.padding||0)+e.buttonSpacing;i.width=s.width+n,i.height=s.height+n;var a=L(i);t&&(a.x+=t),this.options.rtl&&(a.x+=i.width),a.y=O(a.y,this.yOffset,0),this.group.align(a,!0,o)}},t.prototype.renderButton=function(t,e,r){var i=this,o=this.chart,s=i.options,n=L(s.buttonTheme),a=o.renderer.button(i.getButtonText(t),e,r,function(e){var r,o=s.events&&s.events.click;o&&(r=o.call(i,e,t)),!1!==r&&(s.showFullPath?e.newLevel=t.level:e.newLevel=i.level-1,T(i,"up",e))},n).addClass("highcharts-breadcrumbs-button").add(i.group);return o.styledMode||a.attr(s.style),a},t.prototype.renderSeparator=function(t,e){var r=this.chart,i=this.options.separator,o=r.renderer.label(i.text,t,e,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);return r.styledMode||o.css(i.style),o},t.prototype.update=function(t){L(!0,this.options,t),this.destroy(),this.isDirty=!0},t.prototype.updateSingleButton=function(){var t=this.chart,e=this.list[this.level-1];t.drillUpButton&&t.drillUpButton.attr({text:this.getButtonText(e)})},t.prototype.destroy=function(){this.destroySingleButton(),this.destroyListElements(!0),this.group&&this.group.destroy(),this.group=void 0},t.prototype.destroyListElements=function(t){var e=this.elementList;A(e,function(r,i){(t||!e[i].updated)&&((r=e[i]).button&&r.button.destroy(),r.separator&&r.separator.destroy(),delete r.button,delete r.separator,delete e[i])}),t&&(this.elementList={})},t.prototype.destroySingleButton=function(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)},t.prototype.resetElementListState=function(){A(this.elementList,function(t){t.updated=!1})},t.prototype.updateListElements=function(){for(var t,e,r=this.elementList,i=this.options.buttonSpacing,o=this.list,s=this.options.rtl,n=s?-1:1,a=function(t,e){return n*t.getBBox().width+n*e},l=function(t,e,r){t.translate(e-t.getBBox().width,r)},h=this.group?a(this.group,i):i,p=0,d=o.length;p<d;++p){var u=p===d-1,c=void 0,v=void 0;r[(e=o[p]).level]?(c=(t=r[e.level]).button,t.separator||u?t.separator&&u&&(t.separator.destroy(),delete t.separator):(h+=n*i,t.separator=this.renderSeparator(h,i),s&&l(t.separator,h,i),h+=a(t.separator,i)),r[e.level].updated=!0):(c=this.renderButton(e,h,i),s&&l(c,h,i),h+=a(c,i),u||(v=this.renderSeparator(h,i),s&&l(v,h,i),h+=a(v,i)),r[e.level]={button:c,separator:v,updated:!0}),c&&c.setState(u?2:0)}},t.defaultOptions=g.options,t}(),D=d(620),U=/*#__PURE__*/d.n(D),E=d(512),k=/*#__PURE__*/d.n(E),H=d(28),W=/*#__PURE__*/d.n(H),V=k().seriesTypes.column.prototype,G=v().addEvent,j=v().defined;!function(t){function e(t){var e=this.series,r=e.chart.renderer;this.moveToTopOnHover&&this.graphic&&(e.stateMarkerGraphic||(e.stateMarkerGraphic=new(W())(r,"use").css({pointerEvents:"none"}).add(this.graphic.parentGroup)),(null==t?void 0:t.state)==="hover"?(this.graphic.attr({id:this.id}),e.stateMarkerGraphic.attr({href:"".concat(r.url,"#").concat(this.id),visibility:"visible"})):e.stateMarkerGraphic.attr({href:""}))}t.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&this.value!==1/0&&this.value!==-1/0&&(void 0===this.value||!isNaN(this.value))}},t.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(t){var e={};return j(t.color)&&(!t.state||"normal"===t.state)&&(e[this.colorProp||"fill"]=t.color),e},pointAttribs:V.pointAttribs},t.compose=function(t){return G(t.prototype.pointClass,"afterSetState",e),t}}(a||(a={}));var _=a,F=function(){function t(t,e,r,i){this.height=t,this.width=e,this.plot=i,this.direction=r,this.startDirection=r,this.total=0,this.nW=0,this.lW=0,this.nH=0,this.lH=0,this.elArr=[],this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(t,e){return Math.max(t/e,e/t)}}}return t.prototype.addElement=function(t){this.lP.total=this.elArr[this.elArr.length-1],this.total=this.total+t,0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH)),this.elArr.push(t)},t.prototype.reset=function(){this.nW=0,this.lW=0,this.elArr=[],this.total=0},t}(),q=function(){function t(){this.childrenTotal=0,this.visible=!1}return t.prototype.init=function(t,e,r,i,o,s,n){return this.id=t,this.i=e,this.children=r,this.height=i,this.level=o,this.series=s,this.parent=n,this},t}(),z=function(){return(z=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},K=function(t,e){var r=e.animatableAttribs,i=e.onComplete,o=e.css,s=e.renderer,n=t.series&&t.series.chart.hasRendered?void 0:t.series&&t.series.options.animation,a=t.graphic;if(e.attribs=z(z({},e.attribs),{class:t.getClassName()})||{},t.shouldDraw())a||(a="text"===e.shapeType?s.text():"image"===e.shapeType?s.image(e.imageUrl||"").attr(e.shapeArgs||{}):s[e.shapeType](e.shapeArgs||{}),t.graphic=a,a.add(e.group)),o&&a.css(o),a.attr(e.attribs).animate(r,!e.isNew&&n,i);else if(a){var l=function(){t.graphic=a=a&&a.destroy(),"function"==typeof i&&i()};Object.keys(r).length?a.animate(r,void 0,function(){return l()}):l()}},Y=(s=function(t,e){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),Z=k().seriesTypes,X=Z.pie.prototype.pointClass,J=Z.scatter.prototype.pointClass,Q=v().extend,$=v().isNumber,tt=v().pick,te=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.shapeType="rect",e}return Y(e,t),e.prototype.draw=function(t){K(this,t)},e.prototype.getClassName=function(){var e=this.series,r=e.options,i=t.prototype.getClassName.call(this);return this.node.level<=e.nodeMap[e.rootNode].level&&this.node.children.length?i+=" highcharts-above-level":this.node.isLeaf||tt(r.interactByLeaf,!r.allowTraversingTree)?this.node.isLeaf||(i+=" highcharts-internal-node"):i+=" highcharts-internal-node-interactive",i},e.prototype.isValid=function(){return!!(this.id||$(this.value))},e.prototype.setState=function(e){t.prototype.setState.apply(this,arguments),this.graphic&&this.graphic.attr({zIndex:"hover"===e?1:0})},e.prototype.shouldDraw=function(){return $(this.plotY)&&null!==this.y},e}(J);Q(te.prototype,{setVisible:X.prototype.setVisible});var tr=v().isString,ti={allowTraversingTree:!1,animationLimit:250,borderRadius:0,showInLegend:!1,marker:void 0,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){var t=this&&this.point?this.point:{};return tr(t.name)?t.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:k().seriesTypes.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}},legendSymbol:"rectangle",traverseToLeaf:!1};(l||(l={})).recursive=function t(e,r,i){var o=r.call(i||this,e);!1!==o&&t(o,r,i)};var to=l,ts=(v().extend,v().isArray),tn=v().isNumber,ta=v().isObject,tl=v().merge,th=v().pick,tp=(v().relativeLength,function(t,e){var r,i,o,s,n,a,l,h=e.index,p=e.mapOptionsToLevel,d=e.parentColor,u=e.parentColorIndex,c=e.series,v=e.colors,g=e.siblings,f=c.points,y=c.chart.options.chart;return t&&(i=f[t.i],o=p[t.level]||{},i&&o.colorByPoint&&(n=i.index%(v?v.length:y.colorCount),s=v&&v[n]),c.chart.styledMode||(a=th(i&&i.options.color,o&&o.color,s,d&&((r=o&&o.colorVariation)&&"brightness"===r.key&&h&&g?U().parse(d).brighten(r.to*(h/g)).get():d),c.color)),l=th(i&&i.options.colorIndex,o&&o.colorIndex,n,u,e.colorIndex)),{color:a,colorIndex:l}}),td=function(t){var e,r,i,o,s,n,a={};if(ta(t))for(o=tn(t.from)?t.from:1,n=t.levels,r={},e=ta(t.defaults)?t.defaults:{},ts(n)&&(r=n.reduce(function(t,r){var i,s,n;return ta(r)&&tn(r.level)&&(s=th((n=tl({},r)).levelIsConstant,e.levelIsConstant),delete n.levelIsConstant,delete n.level,ta(t[i=r.level+(s?0:o-1)])?tl(!0,t[i],n):t[i]=n),t},{})),s=tn(t.to)?t.to:1,i=0;i<=s;i++)a[i]=tl({},e,ta(r[i])?r[i]:{});return a},tu=function(t){var e,r;return ta(t)&&(r=ta(t.options)?t.options:{},e=th(t.rootNode,r.rootId,""),ta(t.userOptions)&&(t.userOptions.rootId=e),t.rootNode=e),e},tc=(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),tv=U().parse,tg=v().composed,tf=v().noop,ty=k().seriesTypes,tb=ty.column,tm=ty.scatter,tx=v().addEvent,tw=v().correctFloat,tT=v().crisp,tB=v().defined,tL=v().error,tA=v().extend,tO=v().fireEvent,tP=v().isArray,tS=v().isObject,tC=v().isString,tM=v().merge,tR=v().pick,tN=v().pushUnique,tI=v().stableSort,tD=!1;function tU(){var t,e=this.xAxis,r=this.yAxis;e&&r&&(this.is("treemap")?(t={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,minPadding:0,max:100,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]},tA(r.options,t),tA(e.options,t),tD=!0):tD&&(r.setOptions(r.userOptions),e.setOptions(e.userOptions),tD=!1))}var tE=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return tc(e,t),e.compose=function(t){tN(tg,"TreemapSeries")&&tx(t,"afterBindAxes",tU)},e.prototype.algorithmCalcPoints=function(t,e,r,i){var o,s,n,a,l,h=r.plot,p=r.elArr.length-1,d=r.lW,u=r.lH,c=0;e?(d=r.nW,u=r.nH):l=r.elArr[p];for(var v=0,g=r.elArr;v<g.length;v++){var f=g[v];(e||c<p)&&(0===r.direction?(o=h.x,s=h.y,a=f/(n=d)):(o=h.x,s=h.y,n=f/(a=u)),i.push({x:o,y:s,width:n,height:tw(a)}),0===r.direction?h.y=h.y+a:h.x=h.x+n),c+=1}r.reset(),0===r.direction?r.width=r.width-d:r.height=r.height-u,h.y=h.parent.y+(h.parent.height-r.height),h.x=h.parent.x+(h.parent.width-r.width),t&&(r.direction=1-r.direction),e||r.addElement(l)},e.prototype.algorithmFill=function(t,e,r){for(var i,o,s,n,a,l=[],h=e.direction,p=e.x,d=e.y,u=e.width,c=e.height,v=0;v<r.length;v++){var g=r[v];i=e.width*e.height*(g.val/e.val),o=p,s=d,0===h?(u-=n=i/(a=c),p+=n):(c-=a=i/(n=u),d+=a),l.push({x:o,y:s,width:n,height:a}),t&&(h=1-h)}return l},e.prototype.algorithmLowAspectRatio=function(t,e,r){for(var i,o=[],s={x:e.x,y:e.y,parent:e},n=e.direction,a=r.length-1,l=new F(e.height,e.width,n,s),h=0,p=0;p<r.length;p++){var d=r[p];i=e.width*e.height*(d.val/e.val),l.addElement(i),l.lP.nR>l.lP.lR&&this.algorithmCalcPoints(t,!1,l,o,s),h===a&&this.algorithmCalcPoints(t,!0,l,o,s),++h}return o},e.prototype.alignDataLabel=function(t,e,r){var i=r.style;i&&!tB(i.textOverflow)&&e.text&&e.getBBox().width>(e.text.textWidth||0)&&e.css({textOverflow:"ellipsis",width:i.width+="px"}),tb.prototype.alignDataLabel.apply(this,arguments),t.dataLabel&&t.dataLabel.attr({zIndex:(t.node.zIndex||0)+1})},e.prototype.calculateChildrenAreas=function(t,e){var r=this.options,i=this.mapOptionsToLevel[t.level+1],o=tR(this[i&&i.layoutAlgorithm]&&i.layoutAlgorithm,r.layoutAlgorithm),s=r.alternateStartingDirection,n=t.children.filter(function(t){return!t.ignore}),a=[];i&&i.layoutStartingDirection&&(e.direction="vertical"===i.layoutStartingDirection?0:1),a=this[o](e,n);for(var l=-1,h=0;h<n.length;h++){var p=n[h],d=a[++l];p.values=tM(d,{val:p.childrenTotal,direction:s?1-e.direction:e.direction}),p.pointValues=tM(d,{x:d.x/this.axisRatio,y:100-d.y-d.height,width:d.width/this.axisRatio}),p.children.length&&this.calculateChildrenAreas(p,p.values)}},e.prototype.createList=function(t){var e=this.chart,r=e.breadcrumbs,i=[];if(r){var o=0;i.push({level:o,levelOptions:e.series[0]});for(var s=t.target.nodeMap[t.newRootId],n=[];s.parent||""===s.parent;)n.push(s),s=t.target.nodeMap[s.parent];for(var a=0,l=n.reverse();a<l.length;a++){var h=l[a];i.push({level:++o,levelOptions:h})}i.length<=1&&(i.length=0)}return i},e.prototype.drawDataLabels=function(){for(var e,r,i,o=this.mapOptionsToLevel,s=this.points.filter(function(t){return t.node.visible}),n=0;n<s.length;n++){var a=s[n];if(i=o[a.node.level],r={style:{}},a.node.isLeaf||(r.enabled=!1),i&&i.dataLabels&&(r=tM(r,i.dataLabels),this.hasDataLabels=function(){return!0}),a.shapeArgs){var l={width:"".concat(a.shapeArgs.width||0,"px"),lineClamp:Math.floor((a.shapeArgs.height||0)/16)};tA(r.style,l),null===(e=a.dataLabel)||void 0===e||e.css(l)}a.dlOptions=tM(r,a.options.dataLabels)}t.prototype.drawDataLabels.call(this)},e.prototype.drawPoints=function(t){void 0===t&&(t=this.points);for(var e=this.chart,r=e.renderer,i=e.styledMode,o=this.options,s=i?{}:o.shadow,n=o.borderRadius,a=e.pointCount<o.animationLimit,l=o.allowTraversingTree,h=0,p=t;h<p.length;h++){var d=p[h],u=d.node.levelDynamic,c={},v={},g={},f="level-group-"+d.node.level,y=!!d.graphic,b=a&&y,m=d.shapeArgs;d.shouldDraw()&&(d.isInside=!0,n&&(v.r=n),tM(!0,b?c:v,y?m:{},i?{}:this.pointAttribs(d,d.selected?"select":void 0)),this.colorAttribs&&i&&tA(g,this.colorAttribs(d)),this[f]||(this[f]=r.g(f).attr({zIndex:1e3-(u||0)}).add(this.group),this[f].survive=!0)),d.draw({animatableAttribs:c,attribs:v,css:g,group:this[f],imageUrl:d.imageUrl,renderer:r,shadow:s,shapeArgs:m,shapeType:d.shapeType}),l&&d.graphic&&(d.drillId=o.interactByLeaf?this.drillToByLeaf(d):this.drillToByGroup(d))}},e.prototype.drillToByGroup=function(t){var e=!1;return t.node.isLeaf||t.node.level-this.nodeMap[this.rootNode].level!=1||(e=t.id),e},e.prototype.drillToByLeaf=function(t){var e,r=t.series.options.traverseToLeaf,i=!1;if(t.node.parent!==this.rootNode&&t.node.isLeaf){if(r)i=t.id;else for(e=t.node;!i;)void 0!==e.parent&&(e=this.nodeMap[e.parent]),e.parent===this.rootNode&&(i=e.id)}return i},e.prototype.drillToNode=function(t,e){tL(32,!1,void 0,{"treemap.drillToNode":"use treemap.setRootNode"}),this.setRootNode(t,e)},e.prototype.drillUp=function(){var t=this.nodeMap[this.rootNode];t&&tC(t.parent)&&this.setRootNode(t.parent,!0,{trigger:"traverseUpButton"})},e.prototype.getExtremes=function(){var e=t.prototype.getExtremes.call(this,this.colorValueData),r=e.dataMin,i=e.dataMax;return this.valueMin=r,this.valueMax=i,t.prototype.getExtremes.call(this)},e.prototype.getListOfParents=function(t,e){for(var r=tP(t)?t:[],i=tP(e)?e:[],o=r.reduce(function(t,e,r){var i=tR(e.parent,"");return void 0===t[i]&&(t[i]=[]),t[i].push(r),t},{"":[]}),s=0,n=Object.keys(o);s<n.length;s++){var a=n[s],l=o[a];if(""!==a&&-1===i.indexOf(a)){for(var h=0;h<l.length;h++){var p=l[h];o[""].push(p)}delete o[a]}}return o},e.prototype.getTree=function(){var t=this.data.map(function(t){return t.id}),e=this.getListOfParents(this.data,t);return this.nodeMap={},this.nodeList=[],this.buildTree("",-1,0,e)},e.prototype.buildTree=function(t,e,r,i,o){for(var s,n=[],a=this.points[e],l=0,h=0,p=i[t]||[];h<p.length;h++){var d=p[h];l=Math.max((s=this.buildTree(this.points[d].id,d,r+1,i,t)).height+1,l),n.push(s)}for(var u=new this.NodeClass().init(t,e,n,l,r,this,o),c=0;c<n.length;c++)n[c].parentNode=u;return this.nodeMap[u.id]=u,this.nodeList.push(u),a&&(a.node=u,u.point=a),u},e.prototype.hasData=function(){return!!this.dataTable.rowCount},e.prototype.init=function(e,r){var i=this,o=tM(r.drillUpButton,r.breadcrumbs),s=tx(i,"setOptions",function(t){var e=t.userOptions;tB(e.allowDrillToNode)&&!tB(e.allowTraversingTree)&&(e.allowTraversingTree=e.allowDrillToNode,delete e.allowDrillToNode),tB(e.drillUpButton)&&!tB(e.traverseUpButton)&&(e.traverseUpButton=e.drillUpButton,delete e.drillUpButton)});t.prototype.init.call(this,e,r),delete i.opacity,i.eventsToUnbind.push(s),i.options.allowTraversingTree&&(i.eventsToUnbind.push(tx(i,"click",i.onClickDrillToNode)),i.eventsToUnbind.push(tx(i,"setRootNode",function(t){var e=i.chart;e.breadcrumbs&&e.breadcrumbs.updateProperties(i.createList(t))})),i.eventsToUnbind.push(tx(i,"update",function(t,e){var r=this.chart.breadcrumbs;r&&t.options.breadcrumbs&&r.update(t.options.breadcrumbs)})),i.eventsToUnbind.push(tx(i,"destroy",function(t){var e=this.chart;e.breadcrumbs&&!t.keepEventsForUpdate&&(e.breadcrumbs.destroy(),e.breadcrumbs=void 0)}))),e.breadcrumbs||(e.breadcrumbs=new I(e,o)),i.eventsToUnbind.push(tx(e.breadcrumbs,"up",function(t){for(var e=this.level-t.newLevel,r=0;r<e;r++)i.drillUp()}))},e.prototype.onClickDrillToNode=function(t){var e=t.point,r=e&&e.drillId;tC(r)&&(e.setState(""),this.setRootNode(r,!0,{trigger:"click"}))},e.prototype.pointAttribs=function(t,e){var r,i=tS(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},o=t&&i[t.node.level]||{},s=this.options,n=e&&s.states&&s.states[e]||{},a=t&&t.getClassName()||"",l={stroke:t&&t.borderColor||o.borderColor||n.borderColor||s.borderColor,"stroke-width":tR(t&&t.borderWidth,o.borderWidth,n.borderWidth,s.borderWidth),dashstyle:t&&t.borderDashStyle||o.borderDashStyle||n.borderDashStyle||s.borderDashStyle,fill:t&&t.color||this.color};return -1!==a.indexOf("highcharts-above-level")?(l.fill="none",l["stroke-width"]=0):-1!==a.indexOf("highcharts-internal-node-interactive")?(r=tR(n.opacity,s.opacity),l.fill=tv(l.fill).setOpacity(r).get(),l.cursor="pointer"):-1!==a.indexOf("highcharts-internal-node")?l.fill="none":e&&(l.fill=tv(l.fill).brighten(n.brightness).get()),l},e.prototype.setColorRecursive=function(t,e,r,i,o){var s=this&&this.chart,n=s&&s.options&&s.options.colors;if(t){var a=tp(t,{colors:n,index:i,mapOptionsToLevel:this.mapOptionsToLevel,parentColor:e,parentColorIndex:r,series:this,siblings:o}),l=this.points[t.i];l&&(l.color=a.color,l.colorIndex=a.colorIndex);for(var h=-1,p=0,d=t.children||[];p<d.length;p++){var u=d[p];this.setColorRecursive(u,a.color,a.colorIndex,++h,t.children.length)}}},e.prototype.setPointValues=function(){for(var t=this.points,e=this.xAxis,r=this.yAxis,i=this.chart.styledMode,o=0;o<t.length;o++){var s=t[o],n=s.node,a=n.pointValues,l=n.visible;if(a&&l){var h=a.height,p=a.width,d=a.x,u=a.y,c=i?0:this.pointAttribs(s)["stroke-width"]||0,v=tT(e.toPixels(d,!0),c,!0),g=tT(e.toPixels(d+p,!0),c,!0),f=tT(r.toPixels(u,!0),c,!0),y=tT(r.toPixels(u+h,!0),c,!0),b={x:Math.min(v,g),y:Math.min(f,y),width:Math.abs(g-v),height:Math.abs(y-f)};s.plotX=b.x+b.width/2,s.plotY=b.y+b.height/2,s.shapeArgs=b}else delete s.plotX,delete s.plotY}},e.prototype.setRootNode=function(t,e,r){tO(this,"setRootNode",tA({newRootId:t,previousRootId:this.rootNode,redraw:tR(e,!0),series:this},r),function(t){var e=t.series;e.idPreviousRoot=t.previousRootId,e.rootNode=t.newRootId,e.isDirty=!0,t.redraw&&e.chart.redraw()})},e.prototype.setState=function(e){this.options.inactiveOtherPoints=!0,t.prototype.setState.call(this,e,!1),this.options.inactiveOtherPoints=!1},e.prototype.setTreeValues=function(t){for(var e=this.options,r=this.rootNode,i=this.nodeMap[r],o="boolean"!=typeof e.levelIsConstant||e.levelIsConstant,s=[],n=this.points[t.i],a=0,l=0,h=t.children;l<h.length;l++){var p=h[l];p=this.setTreeValues(p),s.push(p),p.ignore||(a+=p.val)}tI(s,function(t,e){return(t.sortIndex||0)-(e.sortIndex||0)});var d=tR(n&&n.options.value,a);return n&&(n.value=d),tA(t,{children:s,childrenTotal:a,ignore:!(tR(n&&n.visible,!0)&&d>0),isLeaf:t.visible&&!a,levelDynamic:t.level-(o?0:i.level),name:tR(n&&n.name,""),sortIndex:tR(n&&n.sortIndex,-d),val:d}),t},e.prototype.sliceAndDice=function(t,e){return this.algorithmFill(!0,t,e)},e.prototype.squarified=function(t,e){return this.algorithmLowAspectRatio(!0,t,e)},e.prototype.strip=function(t,e){return this.algorithmLowAspectRatio(!1,t,e)},e.prototype.stripes=function(t,e){return this.algorithmFill(!1,t,e)},e.prototype.translate=function(){var e,r,i,o,s=this,n=s.options,a=tu(s);t.prototype.translate.call(this);var l=s.tree=s.getTree();e=s.nodeMap[a],""===a||e||(s.setRootNode("",!1),a=s.rootNode,e=s.nodeMap[a]),s.mapOptionsToLevel=td({from:e.level+1,levels:n.levels,to:l.height,defaults:{levelIsConstant:s.options.levelIsConstant,colorByPoint:n.colorByPoint}}),to.recursive(s.nodeMap[s.rootNode],function(t){var e=t.parent,r=!1;return t.visible=!0,(e||""===e)&&(r=s.nodeMap[e]),r}),to.recursive(s.nodeMap[s.rootNode].children,function(t){for(var e=!1,r=0;r<t.length;r++){var i=t[r];i.visible=!0,i.children.length&&(e=(e||[]).concat(i.children))}return e}),s.setTreeValues(l),s.axisRatio=s.xAxis.len/s.yAxis.len,s.nodeMap[""].pointValues=r={x:0,y:0,width:100,height:100},s.nodeMap[""].values=i=tM(r,{width:r.width*s.axisRatio,direction:"vertical"===n.layoutStartingDirection?0:1,val:l.val}),s.calculateChildrenAreas(l,i),s.colorAxis||n.colorByPoint||s.setColorRecursive(s.tree),n.allowTraversingTree&&(o=e.pointValues,s.xAxis.setExtremes(o.x,o.x+o.width,!1),s.yAxis.setExtremes(o.y,o.y+o.height,!1),s.xAxis.setScale(),s.yAxis.setScale()),s.setPointValues()},e.defaultOptions=tM(tm.defaultOptions,ti),e}(tm);tA(tE.prototype,{buildKDTree:tf,colorAttribs:_.seriesMembers.colorAttribs,colorKey:"colorValue",directTouch:!0,getExtremesFromAll:!0,getSymbol:tf,optionalAxis:"colorAxis",parallelArrays:["x","y","value","colorValue"],pointArrayMap:["value","colorValue"],pointClass:te,NodeClass:q,trackerGroups:["group","dataLabelsGroup"],utils:to}),_.compose(tE),k().registerSeriesType("treemap",tE);var tk=v();tk.Breadcrumbs=tk.Breadcrumbs||I,tk.Breadcrumbs.compose(tk.Chart,tk.defaultOptions),tE.compose(tk.Series);var tH=v();return u.default}()});