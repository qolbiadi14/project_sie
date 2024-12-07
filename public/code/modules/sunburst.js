!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/sunburst
 * @requires highcharts
 *
 * (c) 2016-2024 Highsoft AS
 * Authors: Jon Arild Nygard
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").Templating,require("highcharts").Color,require("highcharts").SeriesRegistry,require("highcharts").SVGElement,require("highcharts").Series):"function"==typeof define&&define.amd?define("highcharts/sunburst",[["highcharts/highcharts"],["highcharts/highcharts","Templating"],["highcharts/highcharts","Color"],["highcharts/highcharts","SeriesRegistry"],["highcharts/highcharts","SVGElement"],["highcharts/highcharts","Series"]],e):"object"==typeof exports?exports["highcharts/sunburst"]=e(require("highcharts"),require("highcharts").Templating,require("highcharts").Color,require("highcharts").SeriesRegistry,require("highcharts").SVGElement,require("highcharts").Series):t.Highcharts=e(t.Highcharts,t.Highcharts.Templating,t.Highcharts.Color,t.Highcharts.SeriesRegistry,t.Highcharts.SVGElement,t.Highcharts.Series)}(this,(t,e,i,s,r,o)=>(()=>{"use strict";var l,a,n,h={620:t=>{t.exports=i},28:t=>{t.exports=r},820:t=>{t.exports=o},512:t=>{t.exports=s},984:t=>{t.exports=e},944:e=>{e.exports=t}},d={};function p(t){var e=d[t];if(void 0!==e)return e.exports;var i=d[t]={exports:{}};return h[t](i,i.exports,p),i.exports}p.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return p.d(e,{a:e}),e},p.d=(t,e)=>{for(var i in e)p.o(e,i)&&!p.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},p.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var u={};p.d(u,{default:()=>eL});var c=p(944),g=/*#__PURE__*/p.n(c);let v={lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}};var f=p(984);let{format:b}=/*#__PURE__*/p.n(f)(),{composed:m}=g(),{addEvent:y,defined:x,extend:P,fireEvent:T,isString:L,merge:w,objectEach:A,pick:R,pushUnique:S}=g();function O(){if(this.breadcrumbs){let t=this.resetZoomButton&&this.resetZoomButton.getBBox(),e=this.breadcrumbs.options;t&&"right"===e.position.align&&"plotBox"===e.relativeTo&&this.breadcrumbs.alignBreadcrumbsGroup(-t.width-e.buttonSpacing)}}function B(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function C(){let t=this.breadcrumbs;if(t&&!t.options.floating&&t.level){let e=t.options,i=e.buttonTheme,s=(i.height||0)+2*(i.padding||0)+e.buttonSpacing,r=e.position.verticalAlign;"bottom"===r?(this.marginBottom=(this.marginBottom||0)+s,t.yOffset=s):"middle"!==r?(this.plotTop+=s,t.yOffset=-s):t.yOffset=void 0}}function M(){this.breadcrumbs&&this.breadcrumbs.redraw()}function I(t){!0===t.resetSelection&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}class N{static compose(t,e){S(m,"Breadcrumbs")&&(y(t,"destroy",B),y(t,"afterShowResetZoom",O),y(t,"getMargins",C),y(t,"redraw",M),y(t,"selection",I),P(e.lang,v.lang))}constructor(t,e){this.elementList={},this.isDirty=!0,this.level=0,this.list=[];let i=w(t.options.drilldown&&t.options.drilldown.drillUpButton,N.defaultOptions,t.options.navigation&&t.options.navigation.breadcrumbs,e);this.chart=t,this.options=i||{}}updateProperties(t){this.setList(t),this.setLevel(),this.isDirty=!0}setList(t){this.list=t}setLevel(){this.level=this.list.length&&this.list.length-1}getLevel(){return this.level}getButtonText(t){let e=this.chart,i=this.options,s=e.options.lang,r=R(i.format,i.showFullPath?"{level.name}":"← {level.name}"),o=s&&R(s.drillUpText,s.mainBreadcrumb),l=i.formatter&&i.formatter(t)||b(r,{level:t.levelOptions},e)||"";return(L(l)&&!l.length||"← "===l)&&x(o)&&(l=i.showFullPath?o:"← "+o),l}redraw(){this.isDirty&&this.render(),this.group&&this.group.align(),this.isDirty=!1}render(){let t=this.chart,e=this.options;!this.group&&e&&(this.group=t.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:e.zIndex}).add()),e.showFullPath?this.renderFullPathButtons():this.renderSingleButton(),this.alignBreadcrumbsGroup()}renderFullPathButtons(){this.destroySingleButton(),this.resetElementListState(),this.updateListElements(),this.destroyListElements()}renderSingleButton(){let t=this.chart,e=this.list,i=this.options.buttonSpacing;this.destroyListElements();let s=this.group?this.group.getBBox().width:i,r=e[e.length-2];!t.drillUpButton&&this.level>0?t.drillUpButton=this.renderButton(r,s,i):t.drillUpButton&&(this.level>0?this.updateSingleButton():this.destroySingleButton())}alignBreadcrumbsGroup(t){if(this.group){let e=this.options,i=e.buttonTheme,s=e.position,r="chart"===e.relativeTo||"spacingBox"===e.relativeTo?void 0:"plotBox",o=this.group.getBBox(),l=2*(i.padding||0)+e.buttonSpacing;s.width=o.width+l,s.height=o.height+l;let a=w(s);t&&(a.x+=t),this.options.rtl&&(a.x+=s.width),a.y=R(a.y,this.yOffset,0),this.group.align(a,!0,r)}}renderButton(t,e,i){let s=this,r=this.chart,o=s.options,l=w(o.buttonTheme),a=r.renderer.button(s.getButtonText(t),e,i,function(e){let i;let r=o.events&&o.events.click;r&&(i=r.call(s,e,t)),!1!==i&&(o.showFullPath?e.newLevel=t.level:e.newLevel=s.level-1,T(s,"up",e))},l).addClass("highcharts-breadcrumbs-button").add(s.group);return r.styledMode||a.attr(o.style),a}renderSeparator(t,e){let i=this.chart,s=this.options.separator,r=i.renderer.label(s.text,t,e,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);return i.styledMode||r.css(s.style),r}update(t){w(!0,this.options,t),this.destroy(),this.isDirty=!0}updateSingleButton(){let t=this.chart,e=this.list[this.level-1];t.drillUpButton&&t.drillUpButton.attr({text:this.getButtonText(e)})}destroy(){this.destroySingleButton(),this.destroyListElements(!0),this.group&&this.group.destroy(),this.group=void 0}destroyListElements(t){let e=this.elementList;A(e,(i,s)=>{(t||!e[s].updated)&&((i=e[s]).button&&i.button.destroy(),i.separator&&i.separator.destroy(),delete i.button,delete i.separator,delete e[s])}),t&&(this.elementList={})}destroySingleButton(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)}resetElementListState(){A(this.elementList,t=>{t.updated=!1})}updateListElements(){let t=this.elementList,e=this.options.buttonSpacing,i=this.list,s=this.options.rtl,r=s?-1:1,o=function(t,e){return r*t.getBBox().width+r*e},l=function(t,e,i){t.translate(e-t.getBBox().width,i)},a=this.group?o(this.group,e):e,n,h;for(let d=0,p=i.length;d<p;++d){let u,c;let g=d===p-1;t[(h=i[d]).level]?(u=(n=t[h.level]).button,n.separator||g?n.separator&&g&&(n.separator.destroy(),delete n.separator):(a+=r*e,n.separator=this.renderSeparator(a,e),s&&l(n.separator,a,e),a+=o(n.separator,e)),t[h.level].updated=!0):(u=this.renderButton(h,a,e),s&&l(u,a,e),a+=o(u,e),g||(c=this.renderSeparator(a,e),s&&l(c,a,e),a+=o(c,e)),t[h.level]={button:u,separator:c,updated:!0}),u&&u.setState(g?2:0)}}}N.defaultOptions=v.options;var D=p(620),E=/*#__PURE__*/p.n(D),k=p(512),H=/*#__PURE__*/p.n(k),U=p(28),W=/*#__PURE__*/p.n(U);let{column:{prototype:z}}=H().seriesTypes,{addEvent:G,defined:V}=g();!function(t){function e(t){let e=this.series,i=e.chart.renderer;this.moveToTopOnHover&&this.graphic&&(e.stateMarkerGraphic||(e.stateMarkerGraphic=new(W())(i,"use").css({pointerEvents:"none"}).add(this.graphic.parentGroup)),t?.state==="hover"?(this.graphic.attr({id:this.id}),e.stateMarkerGraphic.attr({href:`${i.url}#${this.id}`,visibility:"visible"})):e.stateMarkerGraphic.attr({href:""}))}t.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&this.value!==1/0&&this.value!==-1/0&&(void 0===this.value||!isNaN(this.value))}},t.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(t){let e={};return V(t.color)&&(!t.state||"normal"===t.state)&&(e[this.colorProp||"fill"]=t.color),e},pointAttribs:z.pointAttribs},t.compose=function(t){return G(t.prototype.pointClass,"afterSetState",e),t}}(l||(l={}));let F=l,q=class{constructor(t,e,i,s){this.height=t,this.width=e,this.plot=s,this.direction=i,this.startDirection=i,this.total=0,this.nW=0,this.lW=0,this.nH=0,this.lH=0,this.elArr=[],this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(t,e){return Math.max(t/e,e/t)}}}addElement(t){this.lP.total=this.elArr[this.elArr.length-1],this.total=this.total+t,0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH)),this.elArr.push(t)}reset(){this.nW=0,this.lW=0,this.elArr=[],this.total=0}},j=class{constructor(){this.childrenTotal=0,this.visible=!1}init(t,e,i,s,r,o,l){return this.id=t,this.i=e,this.children=i,this.height=s,this.level=r,this.series=o,this.parent=l,this}},Y={draw:function(t,e){let{animatableAttribs:i,onComplete:s,css:r,renderer:o}=e,l=t.series&&t.series.chart.hasRendered?void 0:t.series&&t.series.options.animation,a=t.graphic;if(e.attribs={...e.attribs,class:t.getClassName()},t.shouldDraw())a||(a="text"===e.shapeType?o.text():"image"===e.shapeType?o.image(e.imageUrl||"").attr(e.shapeArgs||{}):o[e.shapeType](e.shapeArgs||{}),t.graphic=a,a.add(e.group)),r&&a.css(r),a.attr(e.attribs).animate(i,!e.isNew&&l,s);else if(a){let e=()=>{t.graphic=a=a&&a.destroy(),"function"==typeof s&&s()};Object.keys(i).length?a.animate(i,void 0,()=>e()):e()}}},{pie:{prototype:{pointClass:X}},scatter:{prototype:{pointClass:$}}}=H().seriesTypes,{extend:K,isNumber:Z,pick:_}=g();class J extends ${constructor(){super(...arguments),this.shapeType="rect"}draw(t){Y.draw(this,t)}getClassName(){let t=this.series,e=t.options,i=super.getClassName();return this.node.level<=t.nodeMap[t.rootNode].level&&this.node.children.length?i+=" highcharts-above-level":this.node.isLeaf||_(e.interactByLeaf,!e.allowTraversingTree)?this.node.isLeaf||(i+=" highcharts-internal-node"):i+=" highcharts-internal-node-interactive",i}isValid(){return!!(this.id||Z(this.value))}setState(t){super.setState.apply(this,arguments),this.graphic&&this.graphic.attr({zIndex:"hover"===t?1:0})}shouldDraw(){return Z(this.plotY)&&null!==this.y}}K(J.prototype,{setVisible:X.prototype.setVisible});let{isString:Q}=g(),tt={allowTraversingTree:!1,animationLimit:250,borderRadius:0,showInLegend:!1,marker:void 0,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){let t=this&&this.point?this.point:{};return Q(t.name)?t.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:H().seriesTypes.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}},legendSymbol:"rectangle",traverseToLeaf:!1};(a||(a={})).recursive=function t(e,i,s){let r=i.call(s||this,e);!1!==r&&t(r,i,s)};let te=a,{extend:ti,isArray:ts,isNumber:tr,isObject:to,merge:tl,pick:ta,relativeLength:tn}=g(),th={getColor:function(t,e){let i,s,r,o,l,a;let n=e.index,h=e.mapOptionsToLevel,d=e.parentColor,p=e.parentColorIndex,u=e.series,c=e.colors,g=e.siblings,v=u.points,f=u.chart.options.chart;return t&&(i=v[t.i],s=h[t.level]||{},i&&s.colorByPoint&&(o=i.index%(c?c.length:f.colorCount),r=c&&c[o]),u.chart.styledMode||(l=ta(i&&i.options.color,s&&s.color,r,d&&(t=>{let e=s&&s.colorVariation;return e&&"brightness"===e.key&&n&&g?E().parse(t).brighten(e.to*(n/g)).get():t})(d),u.color)),a=ta(i&&i.options.colorIndex,s&&s.colorIndex,o,p,e.colorIndex)),{color:l,colorIndex:a}},getLevelOptions:function(t){let e,i,s,r,o,l;let a={};if(to(t))for(r=tr(t.from)?t.from:1,l=t.levels,i={},e=to(t.defaults)?t.defaults:{},ts(l)&&(i=l.reduce((t,i)=>{let s,o,l;return to(i)&&tr(i.level)&&(o=ta((l=tl({},i)).levelIsConstant,e.levelIsConstant),delete l.levelIsConstant,delete l.level,to(t[s=i.level+(o?0:r-1)])?tl(!0,t[s],l):t[s]=l),t},{})),o=tr(t.to)?t.to:1,s=0;s<=o;s++)a[s]=tl({},e,to(i[s])?i[s]:{});return a},getNodeWidth:function(t,e){let{chart:i,options:s}=t,{nodeDistance:r=0,nodeWidth:o=0}=s,{plotSizeX:l=1}=i;if("auto"===o){if("string"==typeof r&&/%$/.test(r))return l/(e+parseFloat(r)/100*(e-1));let t=Number(r);return(l+t)/(e||1)-t}return tn(o,l)},setTreeValues:function t(e,i){let s=i.before,r=i.idRoot,o=i.mapIdToNode[r],l=!1!==i.levelIsConstant,a=i.points[e.i],n=a&&a.options||{},h=[],d=0;e.levelDynamic=e.level-(l?0:o.level),e.name=ta(a&&a.name,""),e.visible=r===e.id||!0===i.visible,"function"==typeof s&&(e=s(e,i)),e.children.forEach((s,r)=>{let o=ti({},i);ti(o,{index:r,siblings:e.children.length,visible:e.visible}),s=t(s,o),h.push(s),s.visible&&(d+=s.val)});let p=ta(n.value,d);return e.visible=p>=0&&(d>0||e.visible),e.children=h,e.childrenTotal=d,e.isLeaf=e.visible&&!d,e.val=p,e},updateRootId:function(t){let e,i;return to(t)&&(i=to(t.options)?t.options:{},e=ta(t.rootNode,i.rootId,""),to(t.userOptions)&&(t.userOptions.rootId=e),t.rootNode=e),e}},{parse:td}=E(),{composed:tp,noop:tu}=g(),{column:tc,scatter:tg}=H().seriesTypes,{getColor:tv,getLevelOptions:tf,updateRootId:tb}=th,{addEvent:tm,correctFloat:ty,crisp:tx,defined:tP,error:tT,extend:tL,fireEvent:tw,isArray:tA,isObject:tR,isString:tS,merge:tO,pick:tB,pushUnique:tC,stableSort:tM}=g(),tI=!1;function tN(){let t;let e=this.xAxis,i=this.yAxis;e&&i&&(this.is("treemap")?(t={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,minPadding:0,max:100,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]},tL(i.options,t),tL(e.options,t),tI=!0):tI&&(i.setOptions(i.userOptions),e.setOptions(e.userOptions),tI=!1))}class tD extends tg{static compose(t){tC(tp,"TreemapSeries")&&tm(t,"afterBindAxes",tN)}algorithmCalcPoints(t,e,i,s){let r=i.plot,o=i.elArr.length-1,l,a,n,h,d=i.lW,p=i.lH,u,c=0;for(let t of(e?(d=i.nW,p=i.nH):u=i.elArr[o],i.elArr))(e||c<o)&&(0===i.direction?(l=r.x,a=r.y,h=t/(n=d)):(l=r.x,a=r.y,n=t/(h=p)),s.push({x:l,y:a,width:n,height:ty(h)}),0===i.direction?r.y=r.y+h:r.x=r.x+n),c+=1;i.reset(),0===i.direction?i.width=i.width-d:i.height=i.height-p,r.y=r.parent.y+(r.parent.height-i.height),r.x=r.parent.x+(r.parent.width-i.width),t&&(i.direction=1-i.direction),e||i.addElement(u)}algorithmFill(t,e,i){let s=[],r,o=e.direction,l=e.x,a=e.y,n=e.width,h=e.height,d,p,u,c;for(let g of i)r=e.width*e.height*(g.val/e.val),d=l,p=a,0===o?(n-=u=r/(c=h),l+=u):(h-=c=r/(u=n),a+=c),s.push({x:d,y:p,width:u,height:c}),t&&(o=1-o);return s}algorithmLowAspectRatio(t,e,i){let s=[],r={x:e.x,y:e.y,parent:e},o=e.direction,l=i.length-1,a=new q(e.height,e.width,o,r),n,h=0;for(let o of i)n=e.width*e.height*(o.val/e.val),a.addElement(n),a.lP.nR>a.lP.lR&&this.algorithmCalcPoints(t,!1,a,s,r),h===l&&this.algorithmCalcPoints(t,!0,a,s,r),++h;return s}alignDataLabel(t,e,i){let s=i.style;s&&!tP(s.textOverflow)&&e.text&&e.getBBox().width>(e.text.textWidth||0)&&e.css({textOverflow:"ellipsis",width:s.width+="px"}),tc.prototype.alignDataLabel.apply(this,arguments),t.dataLabel&&t.dataLabel.attr({zIndex:(t.node.zIndex||0)+1})}calculateChildrenAreas(t,e){let i=this.options,s=this.mapOptionsToLevel[t.level+1],r=tB(this[s&&s.layoutAlgorithm]&&s.layoutAlgorithm,i.layoutAlgorithm),o=i.alternateStartingDirection,l=t.children.filter(t=>!t.ignore),a=[];s&&s.layoutStartingDirection&&(e.direction="vertical"===s.layoutStartingDirection?0:1),a=this[r](e,l);let n=-1;for(let t of l){let i=a[++n];t.values=tO(i,{val:t.childrenTotal,direction:o?1-e.direction:e.direction}),t.pointValues=tO(i,{x:i.x/this.axisRatio,y:100-i.y-i.height,width:i.width/this.axisRatio}),t.children.length&&this.calculateChildrenAreas(t,t.values)}}createList(t){let e=this.chart,i=e.breadcrumbs,s=[];if(i){let i=0;s.push({level:i,levelOptions:e.series[0]});let r=t.target.nodeMap[t.newRootId],o=[];for(;r.parent||""===r.parent;)o.push(r),r=t.target.nodeMap[r.parent];for(let t of o.reverse())s.push({level:++i,levelOptions:t});s.length<=1&&(s.length=0)}return s}drawDataLabels(){let t,e;let i=this.mapOptionsToLevel;for(let s of this.points.filter(function(t){return t.node.visible})){if(e=i[s.node.level],t={style:{}},s.node.isLeaf||(t.enabled=!1),e&&e.dataLabels&&(t=tO(t,e.dataLabels),this.hasDataLabels=()=>!0),s.shapeArgs){let e={width:`${s.shapeArgs.width||0}px`,lineClamp:Math.floor((s.shapeArgs.height||0)/16)};tL(t.style,e),s.dataLabel?.css(e)}s.dlOptions=tO(t,s.options.dataLabels)}super.drawDataLabels()}drawPoints(t=this.points){let e=this.chart,i=e.renderer,s=e.styledMode,r=this.options,o=s?{}:r.shadow,l=r.borderRadius,a=e.pointCount<r.animationLimit,n=r.allowTraversingTree;for(let e of t){let t=e.node.levelDynamic,h={},d={},p={},u="level-group-"+e.node.level,c=!!e.graphic,g=a&&c,v=e.shapeArgs;e.shouldDraw()&&(e.isInside=!0,l&&(d.r=l),tO(!0,g?h:d,c?v:{},s?{}:this.pointAttribs(e,e.selected?"select":void 0)),this.colorAttribs&&s&&tL(p,this.colorAttribs(e)),this[u]||(this[u]=i.g(u).attr({zIndex:1e3-(t||0)}).add(this.group),this[u].survive=!0)),e.draw({animatableAttribs:h,attribs:d,css:p,group:this[u],imageUrl:e.imageUrl,renderer:i,shadow:o,shapeArgs:v,shapeType:e.shapeType}),n&&e.graphic&&(e.drillId=r.interactByLeaf?this.drillToByLeaf(e):this.drillToByGroup(e))}}drillToByGroup(t){let e=!1;return t.node.isLeaf||t.node.level-this.nodeMap[this.rootNode].level!=1||(e=t.id),e}drillToByLeaf(t){let{traverseToLeaf:e}=t.series.options,i=!1,s;if(t.node.parent!==this.rootNode&&t.node.isLeaf){if(e)i=t.id;else for(s=t.node;!i;)void 0!==s.parent&&(s=this.nodeMap[s.parent]),s.parent===this.rootNode&&(i=s.id)}return i}drillToNode(t,e){tT(32,!1,void 0,{"treemap.drillToNode":"use treemap.setRootNode"}),this.setRootNode(t,e)}drillUp(){let t=this.nodeMap[this.rootNode];t&&tS(t.parent)&&this.setRootNode(t.parent,!0,{trigger:"traverseUpButton"})}getExtremes(){let{dataMin:t,dataMax:e}=super.getExtremes(this.colorValueData);return this.valueMin=t,this.valueMax=e,super.getExtremes()}getListOfParents(t,e){let i=tA(t)?t:[],s=tA(e)?e:[],r=i.reduce(function(t,e,i){let s=tB(e.parent,"");return void 0===t[s]&&(t[s]=[]),t[s].push(i),t},{"":[]});for(let t of Object.keys(r)){let e=r[t];if(""!==t&&-1===s.indexOf(t)){for(let t of e)r[""].push(t);delete r[t]}}return r}getTree(){let t=this.data.map(function(t){return t.id}),e=this.getListOfParents(this.data,t);return this.nodeMap={},this.nodeList=[],this.buildTree("",-1,0,e)}buildTree(t,e,i,s,r){let o=[],l=this.points[e],a=0,n;for(let e of s[t]||[])a=Math.max((n=this.buildTree(this.points[e].id,e,i+1,s,t)).height+1,a),o.push(n);let h=new this.NodeClass().init(t,e,o,a,i,this,r);for(let t of o)t.parentNode=h;return this.nodeMap[h.id]=h,this.nodeList.push(h),l&&(l.node=h,h.point=l),h}hasData(){return!!this.dataTable.rowCount}init(t,e){let i=this,s=tO(e.drillUpButton,e.breadcrumbs),r=tm(i,"setOptions",t=>{let e=t.userOptions;tP(e.allowDrillToNode)&&!tP(e.allowTraversingTree)&&(e.allowTraversingTree=e.allowDrillToNode,delete e.allowDrillToNode),tP(e.drillUpButton)&&!tP(e.traverseUpButton)&&(e.traverseUpButton=e.drillUpButton,delete e.drillUpButton)});super.init(t,e),delete i.opacity,i.eventsToUnbind.push(r),i.options.allowTraversingTree&&(i.eventsToUnbind.push(tm(i,"click",i.onClickDrillToNode)),i.eventsToUnbind.push(tm(i,"setRootNode",function(t){let e=i.chart;e.breadcrumbs&&e.breadcrumbs.updateProperties(i.createList(t))})),i.eventsToUnbind.push(tm(i,"update",function(t,e){let i=this.chart.breadcrumbs;i&&t.options.breadcrumbs&&i.update(t.options.breadcrumbs)})),i.eventsToUnbind.push(tm(i,"destroy",function(t){let e=this.chart;e.breadcrumbs&&!t.keepEventsForUpdate&&(e.breadcrumbs.destroy(),e.breadcrumbs=void 0)}))),t.breadcrumbs||(t.breadcrumbs=new N(t,s)),i.eventsToUnbind.push(tm(t.breadcrumbs,"up",function(t){let e=this.level-t.newLevel;for(let t=0;t<e;t++)i.drillUp()}))}onClickDrillToNode(t){let e=t.point,i=e&&e.drillId;tS(i)&&(e.setState(""),this.setRootNode(i,!0,{trigger:"click"}))}pointAttribs(t,e){let i;let s=tR(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},r=t&&s[t.node.level]||{},o=this.options,l=e&&o.states&&o.states[e]||{},a=t&&t.getClassName()||"",n={stroke:t&&t.borderColor||r.borderColor||l.borderColor||o.borderColor,"stroke-width":tB(t&&t.borderWidth,r.borderWidth,l.borderWidth,o.borderWidth),dashstyle:t&&t.borderDashStyle||r.borderDashStyle||l.borderDashStyle||o.borderDashStyle,fill:t&&t.color||this.color};return -1!==a.indexOf("highcharts-above-level")?(n.fill="none",n["stroke-width"]=0):-1!==a.indexOf("highcharts-internal-node-interactive")?(i=tB(l.opacity,o.opacity),n.fill=td(n.fill).setOpacity(i).get(),n.cursor="pointer"):-1!==a.indexOf("highcharts-internal-node")?n.fill="none":e&&(n.fill=td(n.fill).brighten(l.brightness).get()),n}setColorRecursive(t,e,i,s,r){let o=this&&this.chart,l=o&&o.options&&o.options.colors;if(t){let o=tv(t,{colors:l,index:s,mapOptionsToLevel:this.mapOptionsToLevel,parentColor:e,parentColorIndex:i,series:this,siblings:r}),a=this.points[t.i];a&&(a.color=o.color,a.colorIndex=o.colorIndex);let n=-1;for(let e of t.children||[])this.setColorRecursive(e,o.color,o.colorIndex,++n,t.children.length)}}setPointValues(){let t=this,{points:e,xAxis:i,yAxis:s}=t,r=t.chart.styledMode,o=e=>r?0:t.pointAttribs(e)["stroke-width"]||0;for(let t of e){let{pointValues:e,visible:r}=t.node;if(e&&r){let{height:r,width:l,x:a,y:n}=e,h=o(t),d=tx(i.toPixels(a,!0),h,!0),p=tx(i.toPixels(a+l,!0),h,!0),u=tx(s.toPixels(n,!0),h,!0),c=tx(s.toPixels(n+r,!0),h,!0),g={x:Math.min(d,p),y:Math.min(u,c),width:Math.abs(p-d),height:Math.abs(c-u)};t.plotX=g.x+g.width/2,t.plotY=g.y+g.height/2,t.shapeArgs=g}else delete t.plotX,delete t.plotY}}setRootNode(t,e,i){tw(this,"setRootNode",tL({newRootId:t,previousRootId:this.rootNode,redraw:tB(e,!0),series:this},i),function(t){let e=t.series;e.idPreviousRoot=t.previousRootId,e.rootNode=t.newRootId,e.isDirty=!0,t.redraw&&e.chart.redraw()})}setState(t){this.options.inactiveOtherPoints=!0,super.setState(t,!1),this.options.inactiveOtherPoints=!1}setTreeValues(t){let e=this.options,i=this.rootNode,s=this.nodeMap[i],r="boolean"!=typeof e.levelIsConstant||e.levelIsConstant,o=[],l=this.points[t.i],a=0;for(let e of t.children)e=this.setTreeValues(e),o.push(e),e.ignore||(a+=e.val);tM(o,(t,e)=>(t.sortIndex||0)-(e.sortIndex||0));let n=tB(l&&l.options.value,a);return l&&(l.value=n),tL(t,{children:o,childrenTotal:a,ignore:!(tB(l&&l.visible,!0)&&n>0),isLeaf:t.visible&&!a,levelDynamic:t.level-(r?0:s.level),name:tB(l&&l.name,""),sortIndex:tB(l&&l.sortIndex,-n),val:n}),t}sliceAndDice(t,e){return this.algorithmFill(!0,t,e)}squarified(t,e){return this.algorithmLowAspectRatio(!0,t,e)}strip(t,e){return this.algorithmLowAspectRatio(!1,t,e)}stripes(t,e){return this.algorithmFill(!1,t,e)}translate(){let t=this,e=t.options,i=tb(t),s,r,o,l;super.translate();let a=t.tree=t.getTree();s=t.nodeMap[i],""===i||s||(t.setRootNode("",!1),i=t.rootNode,s=t.nodeMap[i]),t.mapOptionsToLevel=tf({from:s.level+1,levels:e.levels,to:a.height,defaults:{levelIsConstant:t.options.levelIsConstant,colorByPoint:e.colorByPoint}}),te.recursive(t.nodeMap[t.rootNode],e=>{let i=e.parent,s=!1;return e.visible=!0,(i||""===i)&&(s=t.nodeMap[i]),s}),te.recursive(t.nodeMap[t.rootNode].children,t=>{let e=!1;for(let i of t)i.visible=!0,i.children.length&&(e=(e||[]).concat(i.children));return e}),t.setTreeValues(a),t.axisRatio=t.xAxis.len/t.yAxis.len,t.nodeMap[""].pointValues=r={x:0,y:0,width:100,height:100},t.nodeMap[""].values=o=tO(r,{width:r.width*t.axisRatio,direction:"vertical"===e.layoutStartingDirection?0:1,val:a.val}),t.calculateChildrenAreas(a,o),t.colorAxis||e.colorByPoint||t.setColorRecursive(t.tree),e.allowTraversingTree&&(l=s.pointValues,t.xAxis.setExtremes(l.x,l.x+l.width,!1),t.yAxis.setExtremes(l.y,l.y+l.height,!1),t.xAxis.setScale(),t.yAxis.setScale()),t.setPointValues()}}tD.defaultOptions=tO(tg.defaultOptions,tt),tL(tD.prototype,{buildKDTree:tu,colorAttribs:F.seriesMembers.colorAttribs,colorKey:"colorValue",directTouch:!0,getExtremesFromAll:!0,getSymbol:tu,optionalAxis:"colorAxis",parallelArrays:["x","y","value","colorValue"],pointArrayMap:["value","colorValue"],pointClass:J,NodeClass:j,trackerGroups:["group","dataLabelsGroup"],utils:te}),F.compose(tD),H().registerSeriesType("treemap",tD);var tE=p(820),tk=/*#__PURE__*/p.n(tE);let{deg2rad:tH}=g(),{fireEvent:tU,isNumber:tW,pick:tz,relativeLength:tG}=g();!function(t){t.getCenter=function(){let t=this.options,e=this.chart,i=2*(t.slicedOffset||0),s=e.plotWidth-2*i,r=e.plotHeight-2*i,o=t.center,l=Math.min(s,r),a=t.thickness,n,h=t.size,d=t.innerSize||0,p,u;"string"==typeof h&&(h=parseFloat(h)),"string"==typeof d&&(d=parseFloat(d));let c=[tz(o?.[0],"50%"),tz(o?.[1],"50%"),tz(h&&h<0?void 0:t.size,"100%"),tz(d&&d<0?void 0:t.innerSize||0,"0%")];for(!e.angular||this instanceof tk()||(c[3]=0),p=0;p<4;++p)u=c[p],n=p<2||2===p&&/%$/.test(u),c[p]=tG(u,[s,r,l,c[2]][p])+(n?i:0);return c[3]>c[2]&&(c[3]=c[2]),tW(a)&&2*a<c[2]&&a>0&&(c[3]=c[2]-2*a),tU(this,"afterGetCenter",{positions:c}),c},t.getStartAndEndRadians=function(t,e){let i=tW(t)?t:0,s=tW(e)&&e>i&&e-i<360?e:i+360;return{start:tH*(i+-90),end:tH*(s+-90)}}}(n||(n={}));let tV=n,{series:{prototype:{pointClass:tF}},seriesTypes:{treemap:{prototype:{pointClass:tq}}}}=H(),{correctFloat:tj,extend:tY,pInt:tX}=g();class t$ extends tq{getDataLabelPath(t){let e=this.series.chart.renderer,i=this.shapeExisting,s=i.r+tX(t.options?.distance||0),r=i.start,o=i.end,l=r+(o-r)/2,a=l<0&&l>-Math.PI||l>Math.PI,n;return r===-Math.PI/2&&tj(o)===tj(1.5*Math.PI)&&(r=-Math.PI+Math.PI/360,o=-Math.PI/360,a=!0),o-r>Math.PI&&(a=!1,n=!0,o-r>2*Math.PI-.01&&(r+=.01,o-=.01)),this.dataLabelPath&&(this.dataLabelPath=this.dataLabelPath.destroy()),this.dataLabelPath=e.arc({open:!0,longArc:n?1:0}).attr({start:a?r:o,end:a?o:r,clockwise:+a,x:i.x,y:i.y,r:(s+i.innerR)/2}).add(e.defs),this.dataLabelPath}isValid(){return!0}}tY(t$.prototype,{getClassName:tF.prototype.getClassName,haloPath:tF.prototype.haloPath,setState:tF.prototype.setState});let{seriesTypes:{treemap:tK}}=H(),{isNumber:tZ,isObject:t_,merge:tJ}=g();function tQ(t,e){let i=[];if(tZ(t)&&tZ(e)&&t<=e)for(let s=t;s<=e;s++)i.push(s);return i}let t0={calculateLevelSizes:function(t,e){let i=t_(e)?e:{},s,r=0,o,l,a,n;if(t_(t)){for(let e of(s=tJ({},t),l=tQ(tZ(i.from)?i.from:0,tZ(i.to)?i.to:0),a=Object.keys(s).filter(t=>-1===l.indexOf(+t)),o=n=tZ(i.diffRadius)?i.diffRadius:0,l)){let t=s[e],i=t.levelSize.unit,l=t.levelSize.value;"weight"===i?r+=l:"percentage"===i?(t.levelSize={unit:"pixels",value:l/100*o},n-=t.levelSize.value):"pixels"===i&&(n-=l)}for(let t of l){let e=s[t];if("weight"===e.levelSize.unit){let i=e.levelSize.value;s[t].levelSize={unit:"pixels",value:i/r*n}}}for(let t of a)s[t].levelSize={value:0,unit:"pixels"}}return s},getLevelFromAndTo:function({level:t,height:e}){return{from:t>0?t:1,to:t+e}},range:tQ,recursive:tK.prototype.utils.recursive},{deg2rad:t1}=g(),{addEvent:t2,merge:t6,uniqueKey:t5,defined:t9,extend:t3}=g();function t8(t,e){e=t6(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},e);let i=this.renderer.url,s=this.text||this,r=s.textPath,{attributes:o,enabled:l}=e;if(t=t||r&&r.path,r&&r.undo(),t&&l){let e=t2(s,"afterModifyTree",e=>{if(t&&l){let r=t.attr("id");r||t.attr("id",r=t5());let l={x:0,y:0};t9(o.dx)&&(l.dx=o.dx,delete o.dx),t9(o.dy)&&(l.dy=o.dy,delete o.dy),s.attr(l),this.attr({transform:""}),this.box&&(this.box=this.box.destroy());let a=e.nodes.slice(0);e.nodes.length=0,e.nodes[0]={tagName:"textPath",attributes:t3(o,{"text-anchor":o.textAnchor,href:`${i}#${r}`}),children:a}}});s.textPath={path:t,undo:e}}else s.attr({dx:0,dy:0}),delete s.textPath;return this.added&&(s.textCache="",this.renderer.buildText(s)),this}function t4(t){let e=t.bBox,i=this.element?.querySelector("textPath");if(i){let t=[],{b:s,h:r}=this.renderer.fontMetrics(this.element),o=r-s,l=RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)',"g"),a=i.innerHTML.replace(l,"").split(/<tspan class="highcharts-br"[^>]*>/),n=a.length,h=(t,e)=>{let{x:r,y:l}=e,a=(i.getRotationOfChar(t)-90)*t1,n=Math.cos(a),h=Math.sin(a);return[[r-o*n,l-o*h],[r+s*n,l+s*h]]};for(let e=0,s=0;s<n;s++){let r=a[s].length;for(let o=0;o<r;o+=5)try{let r=e+o+s,[l,a]=h(r,i.getStartPositionOfChar(r));0===o?(t.push(a),t.push(l)):(0===s&&t.unshift(a),s===n-1&&t.push(l))}catch(t){break}e+=r-1;try{let r=e+s,o=i.getEndPositionOfChar(r),[l,a]=h(r,o);t.unshift(a),t.unshift(l)}catch(t){break}}t.length&&t.push(t[0].slice()),e.polygon=t}return e}function t7(t){let e=t.labelOptions,i=t.point,s=e[i.formatPrefix+"TextPath"]||e.textPath;s&&!e.useHTML&&(this.setTextPath(i.getDataLabelPath?.(this)||i.graphic,s),i.dataLabelPath&&!s.enabled&&(i.dataLabelPath=i.dataLabelPath.destroy()))}let{getCenter:et,getStartAndEndRadians:ee}=tV,{noop:ei}=g(),{column:es,treemap:er}=H().seriesTypes,{getColor:eo,getLevelOptions:el,setTreeValues:ea,updateRootId:en}=th,{defined:eh,error:ed,extend:ep,fireEvent:eu,isNumber:ec,isObject:eg,isString:ev,merge:ef,splat:eb}=g();({compose:function(t){t2(t,"afterGetBBox",t4),t2(t,"beforeAddingDataLabel",t7);let e=t.prototype;e.setTextPath||(e.setTextPath=t8)}}).compose(W());let em=180/Math.PI,ey=function(t,e,i,s){return{x:t+Math.cos(i)*s,y:e+Math.sin(i)*s}};function ex(t,e){let i=e.mapIdToNode,s=t.parent,r=s?i[s]:void 0,o=e.series,l=o.chart,a=o.points[t.i],n=eo(t,{colors:o.options.colors||l&&l.options.colors,colorIndex:o.colorIndex,index:e.index,mapOptionsToLevel:e.mapOptionsToLevel,parentColor:r&&r.color,parentColorIndex:r&&r.colorIndex,series:e.series,siblings:e.siblings});return t.color=n.color,t.colorIndex=n.colorIndex,a&&(a.color=t.color,a.colorIndex=t.colorIndex,t.sliced=t.id!==e.idRoot&&a.sliced),t}class eP extends er{alignDataLabel(t,e,i){if(!i.textPath||!i.textPath.enabled)return super.alignDataLabel.apply(this,arguments)}animate(t){let e;let i=this.chart,s=[i.plotWidth/2,i.plotHeight/2],r=i.plotLeft,o=i.plotTop,l=this.group;t?(e={translateX:s[0]+r,translateY:s[1]+o,scaleX:.001,scaleY:.001,rotation:10,opacity:.01},l.attr(e)):(e={translateX:r,translateY:o,scaleX:1,scaleY:1,rotation:0,opacity:1},l.animate(e,this.options.animation))}drawPoints(){let t=this,e=t.mapOptionsToLevel,i=t.shapeRoot,s=t.group,r=t.hasRendered,o=t.rootNode,l=t.idPreviousRoot,a=t.nodeMap,n=a[l],h=n&&n.shapeArgs,d=t.points,p=t.startAndEndRadians,u=t.chart,c=u&&u.options&&u.options.chart||{},g="boolean"!=typeof c.animation||c.animation,v=t.center,f={x:v[0],y:v[1]},b=v[3]/2,m=t.chart.renderer,y=!!(g&&r&&o!==l&&t.dataLabelsGroup),x,P=!1,T=!1;for(let n of(y&&(t.dataLabelsGroup.attr({opacity:0}),x=function(){P=!0,t.dataLabelsGroup&&t.dataLabelsGroup.animate({opacity:1,visibility:"inherit"})}),d)){let d,c;let v=n.node,y=e[v.level],P=n.shapeExisting||{},L=v.shapeArgs||{},w=!!(v.visible&&v.shapeArgs);L.borderRadius=t.options.borderRadius,d=r&&g?function(t,e){let i=e.point,s=e.radians,r=e.innerR,o=e.idRoot,l=e.idPreviousRoot,a=e.shapeExisting,n=e.shapeRoot,h=e.shapePreviousRoot,d=e.visible,p={},u={end:t.end,start:t.start,innerR:t.innerR,r:t.r,x:t.x,y:t.y};return d?!i.graphic&&h&&((p=o===i.id?{start:s.start,end:s.end}:h.end<=t.start?{start:s.end,end:s.end}:{start:s.start,end:s.start}).innerR=p.r=r):i.graphic&&(l===i.id?u={innerR:r,r:r}:n&&(u=n.end<=a.start?{innerR:r,r:r,start:s.end,end:s.end}:{innerR:r,r:r,start:s.start,end:s.start})),{from:p,to:u}}(L,{center:f,point:n,radians:p,innerR:b,idRoot:o,idPreviousRoot:l,shapeExisting:P,shapeRoot:i,shapePreviousRoot:h,visible:w}):{to:L,from:{}},ep(n,{shapeExisting:L,tooltipPos:[L.plotX,L.plotY],drillId:function(t,e,i){let s;return t.node.isLeaf||(s=e===t.id?i[e].parent:t.id),s}(n,o,a),name:""+(n.name||n.id||n.index),plotX:L.plotX,plotY:L.plotY,value:v.val,isInside:w,isNull:!w}),n.dlOptions=function(t){let e=t.point,i=eg(t.shapeArgs)?t.shapeArgs:{},s=eg(t.optionsPoint)?t.optionsPoint.dataLabels:{},r=ef({style:{}},eb(eg(t.level)?t.level.dataLabels:{})[0],s),{innerArcLength:o=0,outerArcLength:l=0}=e,a,n,h=r.rotationMode;return ec(r.rotation)||(("auto"===h||"circular"===h)&&(r.useHTML&&"circular"===h&&(h="auto"),o<1&&l>i.radius?(a=0,e.dataLabelPath&&"circular"===h&&(r.textPath={enabled:!0})):o>1&&l>1.5*i.radius?"circular"===h?r.textPath={enabled:!0,attributes:{dy:5}}:h="parallel":(e.dataLabel?.textPath&&"circular"===h&&(r.textPath={enabled:!1}),h="perpendicular")),"auto"!==h&&"circular"!==h&&(e.dataLabel&&e.dataLabel.textPath&&(r.textPath={enabled:!1}),a=i.end-(i.end-i.start)/2),"parallel"===h?r.style.width=Math.min(2.5*i.radius,(l+o)/2):!eh(r.style.width)&&i.radius&&(r.style.width=1===e.node.level?2*i.radius:i.radius),"perpendicular"===h&&(l<16?r.style.width=1:r.style.lineClamp=Math.floor(o/16)||1),r.style.width=Math.max(r.style.width-2*(r.padding||0),1),n=a*em%180,"parallel"===h&&(n-=90),n>90?n-=180:n<-90&&(n+=180),r.rotation=n),r.textPath&&(0===e.shapeExisting.innerR&&r.textPath.enabled?(r.rotation=0,r.textPath.enabled=!1,r.style.width=Math.max(2*e.shapeExisting.r-2*(r.padding||0),1)):e.dlOptions&&e.dlOptions.textPath&&!e.dlOptions.textPath.enabled&&"circular"===h&&(r.textPath.enabled=!0),r.textPath.enabled&&(r.rotation=0,r.style.width=Math.max((e.outerArcLength+e.innerArcLength)/2-2*(r.padding||0),1),r.style.whiteSpace="nowrap")),r}({point:n,level:y,optionsPoint:n.options,shapeArgs:L}),!T&&w&&(T=!0,c=x),n.draw({animatableAttribs:d.to,attribs:ep(d.from,!u.styledMode&&t.pointAttribs(n,n.selected&&"select")),onComplete:c,group:s,renderer:m,shapeType:"arc",shapeArgs:L})}y&&T?(t.hasRendered=!1,t.options.dataLabels.defer=!0,es.prototype.drawDataLabels.call(t),t.hasRendered=!0,P&&x()):es.prototype.drawDataLabels.call(t),t.idPreviousRoot=o}layoutAlgorithm(t,e,i){let s=t.start,r=t.end-s,o=t.val,l=t.x,a=t.y,n=i&&eg(i.levelSize)&&ec(i.levelSize.value)?i.levelSize.value:0,h=t.r,d=h+n,p=i&&ec(i.slicedOffset)?i.slicedOffset:0;return(e||[]).reduce((t,e)=>{let i=1/o*e.val*r,u=ey(l,a,s+i/2,p),c={x:e.sliced?u.x:l,y:e.sliced?u.y:a,innerR:h,r:d,radius:n,start:s,end:s+i};return t.push(c),s=c.end,t},[])}setRootNode(t,e,i){if(1===this.nodeMap[t].level&&1===this.nodeList.filter(t=>1===t.level).length){if(""===this.idPreviousRoot)return;t=""}super.setRootNode(t,e,i)}setShapeArgs(t,e,i){let s=i[t.level+1],r=t.children.filter(function(t){return t.visible}),o=[];o=this.layoutAlgorithm(e,r,s);let l=-1;for(let t of r){let e=o[++l],s=e.start+(e.end-e.start)/2,r=e.innerR+(e.r-e.innerR)/2,a=e.end-e.start,n=0===e.innerR&&a>6.28?{x:e.x,y:e.y}:ey(e.x,e.y,s,r),h=t.val?t.childrenTotal>t.val?t.childrenTotal:t.val:t.childrenTotal;this.points[t.i]&&(this.points[t.i].innerArcLength=a*e.innerR,this.points[t.i].outerArcLength=a*e.r),t.shapeArgs=ef(e,{plotX:n.x,plotY:n.y}),t.values=ef(e,{val:h}),t.children.length&&this.setShapeArgs(t,t.values,i)}}translate(){let t=this.options,e=this.center=this.getCenter(),i=this.startAndEndRadians=ee(t.startAngle,t.endAngle),s=e[3]/2,r=e[2]/2,o=en(this),l=this.nodeMap,a,n=l&&l[o],h={};this.shapeRoot=n&&n.shapeArgs,this.generatePoints(),eu(this,"afterTranslate");let d=this.tree=this.getTree(),p=ev((n=(l=this.nodeMap)[o]).parent)?n.parent:"",u=l[p],{from:c,to:g}=t0.getLevelFromAndTo(n);a=el({from:c,levels:this.options.levels,to:g,defaults:{colorByPoint:t.colorByPoint,dataLabels:t.dataLabels,levelIsConstant:t.levelIsConstant,levelSize:t.levelSize,slicedOffset:t.slicedOffset}}),a=t0.calculateLevelSizes(a,{diffRadius:r-s,from:c,to:g}),ea(d,{before:ex,idRoot:o,levelIsConstant:t.levelIsConstant,mapOptionsToLevel:a,mapIdToNode:l,points:this.points,series:this});let v=l[""].shapeArgs={end:i.end,r:s,start:i.start,val:n.val,x:e[0],y:e[1]};for(let t of(this.setShapeArgs(u,v,a),this.mapOptionsToLevel=a,this.points))h[t.id]&&ed(31,!1,this.chart),h[t.id]=!0}}eP.defaultOptions=ef(er.defaultOptions,{center:["50%","50%"],clip:!1,colorByPoint:!1,opacity:1,dataLabels:{allowOverlap:!0,defer:!0,rotationMode:"circular",style:{textOverflow:"ellipsis"}},rootId:void 0,levelIsConstant:!0,levelSize:{value:1,unit:"weight"},slicedOffset:10}),ep(eP.prototype,{axisTypes:[],drawDataLabels:ei,getCenter:et,isCartesian:!1,onPointSupported:!0,pointAttribs:es.prototype.pointAttribs,pointClass:t$,NodeClass:class extends j{},utils:t0}),H().registerSeriesType("sunburst",eP);let eT=g();eT.Breadcrumbs=eT.Breadcrumbs||N,eT.Breadcrumbs.compose(eT.Chart,eT.defaultOptions);let eL=g();return u.default})());