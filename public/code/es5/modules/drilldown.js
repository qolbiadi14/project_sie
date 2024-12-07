!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/drilldown
 * @requires highcharts
 *
 * Highcharts Drilldown module
 *
 * Author: Torstein Honsi
 * License: www.highcharts.com/license
 *
 */function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("highcharts"),require("highcharts").Templating,require("highcharts").Color):"function"==typeof define&&define.amd?define("highcharts/drilldown",[["highcharts/highcharts"],["highcharts/highcharts","Templating"],["highcharts/highcharts","Color"]],i):"object"==typeof exports?exports["highcharts/drilldown"]=i(require("highcharts"),require("highcharts").Templating,require("highcharts").Color):t.Highcharts=i(t.Highcharts,t.Highcharts.Templating,t.Highcharts.Color)}(this,function(t,i,e){return function(){"use strict";var o,r={620:function(t){t.exports=e},984:function(t){t.exports=i},944:function(i){i.exports=t}},n={};function s(t){var i=n[t];if(void 0!==i)return i.exports;var e=n[t]={exports:{}};return r[t](e,e.exports,s),e.exports}s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,{a:i}),i},s.d=function(t,i){for(var e in i)s.o(i,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)};var l={};s.d(l,{default:function(){return tx}});var a=s(944),d=/*#__PURE__*/s.n(a),p={lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}},h=s(984),u=/*#__PURE__*/s.n(h)().format,c=d().composed,m=d().addEvent,f=d().defined,v=d().extend,g=d().fireEvent,w=d().isString,b=d().merge,y=d().objectEach,x=d().pick,D=d().pushUnique;function S(){if(this.breadcrumbs){var t=this.resetZoomButton&&this.resetZoomButton.getBBox(),i=this.breadcrumbs.options;t&&"right"===i.position.align&&"plotBox"===i.relativeTo&&this.breadcrumbs.alignBreadcrumbsGroup(-t.width-i.buttonSpacing)}}function B(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function O(){var t=this.breadcrumbs;if(t&&!t.options.floating&&t.level){var i=t.options,e=i.buttonTheme,o=(e.height||0)+2*(e.padding||0)+i.buttonSpacing,r=i.position.verticalAlign;"bottom"===r?(this.marginBottom=(this.marginBottom||0)+o,t.yOffset=o):"middle"!==r?(this.plotTop+=o,t.yOffset=-o):t.yOffset=void 0}}function L(){this.breadcrumbs&&this.breadcrumbs.redraw()}function A(t){!0===t.resetSelection&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}var T=function(){function t(i,e){this.elementList={},this.isDirty=!0,this.level=0,this.list=[];var o=b(i.options.drilldown&&i.options.drilldown.drillUpButton,t.defaultOptions,i.options.navigation&&i.options.navigation.breadcrumbs,e);this.chart=i,this.options=o||{}}return t.compose=function(t,i){D(c,"Breadcrumbs")&&(m(t,"destroy",B),m(t,"afterShowResetZoom",S),m(t,"getMargins",O),m(t,"redraw",L),m(t,"selection",A),v(i.lang,p.lang))},t.prototype.updateProperties=function(t){this.setList(t),this.setLevel(),this.isDirty=!0},t.prototype.setList=function(t){this.list=t},t.prototype.setLevel=function(){this.level=this.list.length&&this.list.length-1},t.prototype.getLevel=function(){return this.level},t.prototype.getButtonText=function(t){var i=this.chart,e=this.options,o=i.options.lang,r=x(e.format,e.showFullPath?"{level.name}":"← {level.name}"),n=o&&x(o.drillUpText,o.mainBreadcrumb),s=e.formatter&&e.formatter(t)||u(r,{level:t.levelOptions},i)||"";return(w(s)&&!s.length||"← "===s)&&f(n)&&(s=e.showFullPath?n:"← "+n),s},t.prototype.redraw=function(){this.isDirty&&this.render(),this.group&&this.group.align(),this.isDirty=!1},t.prototype.render=function(){var t=this.chart,i=this.options;!this.group&&i&&(this.group=t.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:i.zIndex}).add()),i.showFullPath?this.renderFullPathButtons():this.renderSingleButton(),this.alignBreadcrumbsGroup()},t.prototype.renderFullPathButtons=function(){this.destroySingleButton(),this.resetElementListState(),this.updateListElements(),this.destroyListElements()},t.prototype.renderSingleButton=function(){var t=this.chart,i=this.list,e=this.options.buttonSpacing;this.destroyListElements();var o=this.group?this.group.getBBox().width:e,r=i[i.length-2];!t.drillUpButton&&this.level>0?t.drillUpButton=this.renderButton(r,o,e):t.drillUpButton&&(this.level>0?this.updateSingleButton():this.destroySingleButton())},t.prototype.alignBreadcrumbsGroup=function(t){if(this.group){var i=this.options,e=i.buttonTheme,o=i.position,r="chart"===i.relativeTo||"spacingBox"===i.relativeTo?void 0:"plotBox",n=this.group.getBBox(),s=2*(e.padding||0)+i.buttonSpacing;o.width=n.width+s,o.height=n.height+s;var l=b(o);t&&(l.x+=t),this.options.rtl&&(l.x+=o.width),l.y=x(l.y,this.yOffset,0),this.group.align(l,!0,r)}},t.prototype.renderButton=function(t,i,e){var o=this,r=this.chart,n=o.options,s=b(n.buttonTheme),l=r.renderer.button(o.getButtonText(t),i,e,function(i){var e,r=n.events&&n.events.click;r&&(e=r.call(o,i,t)),!1!==e&&(n.showFullPath?i.newLevel=t.level:i.newLevel=o.level-1,g(o,"up",i))},s).addClass("highcharts-breadcrumbs-button").add(o.group);return r.styledMode||l.attr(n.style),l},t.prototype.renderSeparator=function(t,i){var e=this.chart,o=this.options.separator,r=e.renderer.label(o.text,t,i,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);return e.styledMode||r.css(o.style),r},t.prototype.update=function(t){b(!0,this.options,t),this.destroy(),this.isDirty=!0},t.prototype.updateSingleButton=function(){var t=this.chart,i=this.list[this.level-1];t.drillUpButton&&t.drillUpButton.attr({text:this.getButtonText(i)})},t.prototype.destroy=function(){this.destroySingleButton(),this.destroyListElements(!0),this.group&&this.group.destroy(),this.group=void 0},t.prototype.destroyListElements=function(t){var i=this.elementList;y(i,function(e,o){(t||!i[o].updated)&&((e=i[o]).button&&e.button.destroy(),e.separator&&e.separator.destroy(),delete e.button,delete e.separator,delete i[o])}),t&&(this.elementList={})},t.prototype.destroySingleButton=function(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)},t.prototype.resetElementListState=function(){y(this.elementList,function(t){t.updated=!1})},t.prototype.updateListElements=function(){for(var t,i,e=this.elementList,o=this.options.buttonSpacing,r=this.list,n=this.options.rtl,s=n?-1:1,l=function(t,i){return s*t.getBBox().width+s*i},a=function(t,i,e){t.translate(i-t.getBBox().width,e)},d=this.group?l(this.group,o):o,p=0,h=r.length;p<h;++p){var u=p===h-1,c=void 0,m=void 0;e[(i=r[p]).level]?(c=(t=e[i.level]).button,t.separator||u?t.separator&&u&&(t.separator.destroy(),delete t.separator):(d+=s*o,t.separator=this.renderSeparator(d,o),n&&a(t.separator,d,o),d+=l(t.separator,o)),e[i.level].updated=!0):(c=this.renderButton(i,d,o),n&&a(c,d,o),d+=l(c,o),u||(m=this.renderSeparator(d,o),n&&a(m,d,o),d+=l(m,o)),e[i.level]={button:c,separator:m,updated:!0}),c&&c.setState(u?2:0)}},t.defaultOptions=p.options,t}(),E=s(620),C=/*#__PURE__*/s.n(E),P={activeAxisLabelStyle:{cursor:"pointer",color:"#0022ff",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",color:"#0022ff",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}},mapZooming:!0},M=d().animObject,I=d().addEvent,k=d().extend,V=d().fireEvent,Z=d().merge,G=d().pick,_=d().syncTimeout;function N(t,i,e,o){t[e?"addClass":"removeClass"]("highcharts-drilldown-point"),o||t.css({cursor:i})}function U(t){var i,e=this,o=e.chart,r=o.drilldownLevels,n=M((o.options.drilldown||{}).animation),s=this.xAxis,l=o.styledMode;t||((r||[]).forEach(function(t){e.options._ddSeriesId===t.lowerSeriesOptions._ddSeriesId&&(i=t.shapeArgs,!l&&i&&(i.fill=t.color))}),i.x+=G(s.oldPos,s.pos)-s.pos,e.points.forEach(function(t){var o=t.shapeArgs;l||(o.fill=t.color),t.graphic&&t.graphic.attr(i).animate(k(t.shapeArgs,{fill:t.color||e.color}),n)}),o.drilldown&&o.drilldown.fadeInGroup(this.dataLabelsGroup),delete this.animate)}function j(t){var i=this,e=M((i.chart.options.drilldown||{}).animation);(i.trackerGroups||[]).forEach(function(t){i[t]&&i[t].on("mouseover")});var o=i.group,r=o!==i.chart.columnGroup;r&&delete i.group,this.points.forEach(function(n){var s=n.graphic,l=t.shapeArgs;if(s&&l){var a=function(){s.destroy(),o&&r&&(o=o.destroy())};delete n.graphic,i.chart.styledMode||(l.fill=t.color),e.duration?s.animate(l,Z(e,{complete:a})):(s.attr(l),a())}})}function F(t){var i=this,e=i.drilldownLevel;t||(i.points.forEach(function(t){var i,e=t.dataLabel;t.graphic&&t.graphic.hide(),e&&(e.hidden="hidden"===e.attr("visibility"),e.hidden||(e.hide(),null===(i=e.connector)||void 0===i||i.hide()))}),_(function(){if(i.points){var t=[];i.data.forEach(function(i){t.push(i)}),i.nodes&&(t=t.concat(i.nodes)),t.forEach(function(t,i){var o,r=i===(e&&e.pointIndex)?"show":"fadeIn",n=t.dataLabel;t.graphic&&t.visible&&t.graphic[r]("show"===r||void 0),n&&!n.hidden&&(n.fadeIn(),null===(o=n.connector)||void 0===o||o.fadeIn())})}},Math.max(i.chart.options.drilldown.animation.duration-50,0)),delete this.animate)}function q(t){var i=this,e=i.chart,o=i.group;e&&o&&i.options&&e.options.drilldown&&e.options.drilldown.animation&&(t&&e.mapView?(o.attr({opacity:.01}),e.mapView.allowTransformAnimation=!1,i.options.inactiveOtherPoints=!0,i.options.enableMouseTracking=!1):(o.animate({opacity:1},e.options.drilldown.animation,function(){i.options&&(i.options.inactiveOtherPoints=!1,i.options.enableMouseTracking=G(i.userOptions&&i.userOptions.enableMouseTracking,!0))}),e.drilldown&&e.drilldown.fadeInGroup(this.dataLabelsGroup)))}function z(){var t=this.chart;t&&t.mapView&&(t.mapView.allowTransformAnimation=!1),this.options&&(this.options.inactiveOtherPoints=!0)}function H(t){var i=this.chart,e=this.group;i&&e&&(t?(e.attr({opacity:.01}),this.options&&(this.options.inactiveOtherPoints=!0)):(e.animate({opacity:1},(i.options.drilldown||{}).animation),i.drilldown&&i.drilldown.fadeInGroup(this.dataLabelsGroup)))}function R(){return this.drilldown&&!this.unbindDrilldownClick&&(this.unbindDrilldownClick=I(this,"click",J)),this}function W(){var t=this.series,i=t.chart.styledMode;this.drilldown&&t.halo&&"hover"===this.state?N(t.halo,"pointer",!0,i):t.halo&&N(t.halo,"auto",!1,i)}function J(t){var i=this.series;i.xAxis&&!1===(i.chart.options.drilldown||{}).allowPointDrilldown?i.xAxis.drilldownCategory(this.x,t):this.runDrilldown(void 0,void 0,t)}function K(t){var i=t.options||{};i.drilldown&&!this.unbindDrilldownClick?this.unbindDrilldownClick=I(this,"click",J):!i.drilldown&&void 0!==i.drilldown&&this.unbindDrilldownClick&&(this.unbindDrilldownClick=this.unbindDrilldownClick())}function Q(){for(var t=this.chart,i=t.options.drilldown.activeDataLabelStyle,e=t.renderer,o=t.styledMode,r=0,n=this.points;r<n.length;r++){var s=n[r],l=s.options.dataLabels,a=G(s.dlOptions,l&&l.style,{});s.drilldown&&s.dataLabel&&("contrast"!==i.color||o||(a.color=e.getContrast(s.color||this.color)),l&&l.color&&(a.color=l.color),s.dataLabel.addClass("highcharts-drilldown-data-label"),o||s.dataLabel.css(i).css(a))}}function X(){for(var t=this.chart.styledMode,i=0,e=this.points;i<e.length;i++){var o=e[i];o.drilldown&&o.graphic&&N(o.graphic,"pointer",!0,t)}}function Y(t){var i=this.chart,e=this.points,o=i.drilldownLevels[i.drilldownLevels.length-1],r=i.options.drilldown.animation;if(this.is("item")&&(r.duration=0),this.center){var n=o.shapeArgs,s=n.start,l=(n.end-s)/this.points.length,a=i.styledMode;if(!t){for(var d=void 0,p=void 0,h=0,u=e.length;h<u;++h)d=(p=e[h]).shapeArgs,a||(n.fill=o.color,d.fill=p.color),p.graphic&&p.graphic.attr(Z(n,{start:s+h*l,end:s+(h+1)*l}))[r?"animate":"attr"](d,r);i.drilldown&&i.drilldown.fadeInGroup(this.dataLabelsGroup),delete this.animate}}}function $(){this.runDrilldown()}function tt(t,i,e){var o,r=this.series,n=r.chart,s=n.options.drilldown||{},l=(s.series||[]).length;for(n.ddDupes||(n.ddDupes=[]),n.colorCounter=n.symbolCounter=0;l--&&!o;)s.series&&s.series[l].id===this.drilldown&&this.drilldown&&-1===n.ddDupes.indexOf(this.drilldown)&&(o=s.series[l],n.ddDupes.push(this.drilldown));V(n,"drilldown",{point:this,seriesOptions:o,category:i,originalEvent:e,points:void 0!==i&&r.xAxis.getDDPoints(i).slice(0)},function(i){var e=i.point.series&&i.point.series.chart,o=i.seriesOptions;e&&o&&(t?e.addSingleSeriesAsDrilldown(i.point,o):e.addSeriesAsDrilldown(i.point,o))})}var ti=function(t,i){var e=t.prototype.pointClass,o=e.prototype;if(!o.doDrilldown){var r=i.column,n=i.map,s=i.pie;if(I(e,"afterInit",R),I(e,"afterSetState",W),I(e,"update",K),o.doDrilldown=$,o.runDrilldown=tt,I(t,"afterDrawDataLabels",Q),I(t,"afterDrawTracker",X),r){var l=r.prototype;l.animateDrilldown=U,l.animateDrillupFrom=j,l.animateDrillupTo=F}if(n){var a=n.prototype;a.animateDrilldown=q,a.animateDrillupFrom=z,a.animateDrillupTo=H}if(s){var d=s.prototype;d.animateDrilldown=Y,d.animateDrillupFrom=j,d.animateDrillupTo=F}}},te=d().animObject,to=d().noop,tr=d().addEvent,tn=d().defined,ts=d().diffObjects,tl=d().extend,ta=d().fireEvent,td=d().merge,tp=d().objectEach,th=d().pick,tu=d().removeEvent,tc=d().syncTimeout,tm=1;function tf(t,i){this.getDDPoints(t).forEach(function(e){e&&e.series&&e.series.visible&&e.runDrilldown&&e.runDrilldown(!0,t,i)}),this.chart.applyDrilldown()}function tv(t){return this.ddPoints&&this.ddPoints[t]||[]}function tg(t){var i=[],e=t.drilldownLevels;return e&&e.length&&(i[0]||i.push({level:0,levelOptions:e[0].seriesOptions}),e.forEach(function(t){var e=i[i.length-1];t.levelNumber+1>e.level&&i.push({level:t.levelNumber+1,levelOptions:td({name:t.lowerSeries.name},t.pointOptions)})})),i}var tw=function(){function t(t){this.chart=t}return t.prototype.addSeriesAsDrilldown=function(t,i){var e=this.chart||this;if(ta(this,"addSeriesAsDrilldown",{seriesOptions:i}),e.mapView){if(t.series.isDrilling=!0,e.series.forEach(function(t){var i;t.options.inactiveOtherPoints=!0,null===(i=t.dataLabelsGroup)||void 0===i||i.destroy(),delete t.dataLabelsGroup}),e.options.drilldown&&!e.mapView.projection.hasGeoProjection&&P&&!tn(ts(e.options.drilldown,P).mapZooming)&&(e.options.drilldown.mapZooming=!1),e.options.drilldown&&e.options.drilldown.animation&&e.options.drilldown.mapZooming){e.mapView.allowTransformAnimation=!0;var o=te(e.options.drilldown.animation);if("boolean"!=typeof o){var r=o.complete,n=function(o){o&&o.applyDrilldown&&e.mapView&&(e.addSingleSeriesAsDrilldown(t,i),e.applyDrilldown(),e.mapView.allowTransformAnimation=!1)};o.complete=function(){r&&r.apply(this,arguments),n.apply(this,arguments)}}t.zoomTo(o)}else e.addSingleSeriesAsDrilldown(t,i),e.applyDrilldown()}else e.addSingleSeriesAsDrilldown(t,i),e.applyDrilldown()},t.prototype.addSingleSeriesAsDrilldown=function(t,i){var e=this.chart||this,o=t.series,r=o.xAxis,n=o.yAxis,s=e.styledMode?{colorIndex:th(t.colorIndex,o.colorIndex)}:{color:t.color||o.color},l=o.options._levelNumber||0,a=o.points.indexOf(t);e.drilldownLevels||(e.drilldownLevels=[]),i=tl(tl({_ddSeriesId:tm++},s),i);var d,p=[],h=[];(d=e.drilldownLevels[e.drilldownLevels.length-1])&&d.levelNumber!==l&&(d=void 0),o.chart.series.forEach(function(t){t.xAxis===r&&(t.options._ddSeriesId=t.options._ddSeriesId||tm++,t.options.colorIndex=t.colorIndex,t.options._levelNumber=t.options._levelNumber||l,d?(p=d.levelSeries,h=d.levelSeriesOptions):(p.push(t),t.purgedOptions=td({_ddSeriesId:t.options._ddSeriesId,_levelNumber:t.options._levelNumber,selected:t.options.selected},t.userOptions),h.push(t.purgedOptions)))});var u=tl({levelNumber:l,seriesOptions:o.options,seriesPurgedOptions:o.purgedOptions,levelSeriesOptions:h,levelSeries:p,shapeArgs:t.shapeArgs,bBox:t.graphic?t.graphic.getBBox():{},color:t.isNull?C().parse(s.color).setOpacity(0).get():s.color,lowerSeriesOptions:i,pointOptions:o.options.data[a],pointIndex:a,oldExtremes:{xMin:r&&r.userMin,xMax:r&&r.userMax,yMin:n&&n.userMin,yMax:n&&n.userMax},resetZoomButton:d&&d.levelNumber===l?void 0:e.resetZoomButton},s);e.drilldownLevels.push(u),r&&r.names&&(r.names.length=0);var c=u.lowerSeries=e.addSeries(i,!1);c.options._levelNumber=l+1,r&&(r.oldPos=r.pos,r.userMin=r.userMax=null,n.userMin=n.userMax=null),c.isDrilling=!0,o.type===c.type&&(c.animate=c.animateDrilldown||to,c.options.animation=!0)},t.prototype.applyDrilldown=function(){var t,i,e=this.chart||this,o=e.drilldownLevels;o&&o.length>0&&(i=o[o.length-1].levelNumber,e.hasCartesianSeries=o.some(function(t){return t.lowerSeries.isCartesian}),(e.drilldownLevels||[]).forEach(function(t){e.mapView&&e.options.drilldown&&e.options.drilldown.mapZooming&&(e.redraw(),t.lowerSeries.isDrilling=!1,e.mapView.fitToBounds(t.lowerSeries.bounds),t.lowerSeries.isDrilling=!0),t.levelNumber===i&&t.levelSeries.forEach(function(o){if(e.mapView){if(o.options&&o.options._levelNumber===i&&o.group){var r={};e.options.drilldown&&(r=e.options.drilldown.animation),o.group.animate({opacity:0},r,function(){var i;o.remove(!1),t.levelSeries.filter(function(t){return Object.keys(t).length}).length||(e.resetZoomButton&&(e.resetZoomButton.hide(),delete e.resetZoomButton),null===(i=e.pointer)||void 0===i||i.reset(),ta(e,"afterDrilldown"),e.mapView&&(e.series.forEach(function(t){t.isDirtyData=!0,t.isDrilling=!1}),e.mapView.fitToBounds(void 0,void 0),e.mapView.allowTransformAnimation=!0),ta(e,"afterApplyDrilldown"))})}}else o.options&&o.options._levelNumber===i&&o.remove(!1)})})),e.mapView||(e.resetZoomButton&&(e.resetZoomButton.hide(),delete e.resetZoomButton),null===(t=e.pointer)||void 0===t||t.reset(),ta(e,"afterDrilldown"),e.hasCartesianSeries||e.axes.forEach(function(t){t.destroy(!0),t.init(e,td(t.userOptions,t.options))}),e.redraw(),ta(e,"afterApplyDrilldown"))},t.prototype.drillUp=function(t){var i=this.chart||this;if(i.drilldownLevels&&0!==i.drilldownLevels.length){ta(i,"beforeDrillUp");var e,o,r,n=i.drilldownLevels,s=n[n.length-1].levelNumber,l=i.series,a=i.drilldownLevels.length,d=function(t,e){var r;if(l.forEach(function(i){i.options._ddSeriesId===t._ddSeriesId&&(r=i)}),(r=r||i.addSeries(t,!1)).type===e.type&&r.animateDrillupTo&&(r.animate=r.animateDrillupTo),t===o.seriesPurgedOptions)return r},p=function(t){t.remove(!1),i.series.forEach(function(t){t.colorAxis&&(t.isDirtyData=!0),t.options.inactiveOtherPoints=!1}),i.redraw()},h=n.length;for(i.symbolCounter=i.colorCounter=0;h--;)!function(){var u,c;if((o=n[h]).levelNumber===s){if(n.pop(),!(u=o.lowerSeries).chart){for(e=l.length;e--;)if(l[e].options.id===o.lowerSeriesOptions.id&&l[e].options._levelNumber===s+1){u=l[e];break}}u.dataTable.setColumn("x",[]),u.xAxis&&u.xAxis.names&&(0===a||h===a-1)&&(u.xAxis.names.length=0),o.levelSeriesOptions.forEach(function(t){var i=d(t,u);i&&(c=i)}),ta(i,"drillup",{seriesOptions:o.seriesPurgedOptions||o.seriesOptions}),c&&(c.type===u.type&&(c.drilldownLevel=o,c.options.animation=i.options.drilldown.animation,u.animateDrillupFrom&&u.chart&&u.animateDrillupFrom(o)),c.options._levelNumber=s);var m=u;if(i.mapView||m.remove(!1),c&&c.xAxis&&(r=o.oldExtremes,c.xAxis.setExtremes(r.xMin,r.xMax,!1),c.yAxis.setExtremes(r.yMin,r.yMax,!1)),o.resetZoomButton&&(i.resetZoomButton=o.resetZoomButton),i.mapView){var f=o.levelNumber===s&&t,v=i.options.drilldown&&i.options.drilldown.animation&&i.options.drilldown.mapZooming;f?u.remove(!1):(u.dataLabelsGroup&&(u.dataLabelsGroup.destroy(),delete u.dataLabelsGroup),i.mapView&&c&&(v&&(u.isDrilling=!0,c.isDrilling=!0,i.redraw(!1),i.mapView.fitToBounds(u.bounds,void 0,!0,!1)),i.mapView.allowTransformAnimation=!0,ta(i,"afterDrillUp",{seriesOptions:c?c.userOptions:void 0}),v?(i.mapView.setView(void 0,th(i.mapView.minZoom,1),!0,{complete:function(){Object.prototype.hasOwnProperty.call(this,"complete")&&p(u)}}),c._hasTracking=!1):(i.mapView.allowTransformAnimation=!1,u.group?u.group.animate({opacity:0},i.options.drilldown.animation,function(){p(u),i.mapView&&(i.mapView.allowTransformAnimation=!0)}):(p(u),i.mapView.allowTransformAnimation=!0)),c.isDrilling=!1))}else ta(i,"afterDrillUp")}}();i.mapView||i.redraw(),i.ddDupes&&(i.ddDupes.length=0),ta(i,"drillupall")}},t.prototype.fadeInGroup=function(t){var i=te(this.chart.options.drilldown.animation);t&&(t.hide(),tc(function(){t&&t.added&&t.fadeIn()},Math.max(i.duration-50,0)))},t.prototype.update=function(t,i){var e=this.chart;td(!0,e.options.drilldown,t),th(i,!0)&&e.redraw()},t}();!function(t){function i(t){for(var i=this.chart,e=this.getLevel()-t.newLevel,o=e>1,r=0;r<e;r++)r===e-1&&(o=!1),i.drillUp(o)}function e(){var t=this.options.drilldown,i=t&&t.breadcrumbs;this.breadcrumbs||(this.breadcrumbs=new T(this,i)),this.breadcrumbs.updateProperties(tg(this))}function o(){this.breadcrumbs&&this.breadcrumbs.updateProperties(tg(this))}function r(){this.drilldown=new tw(this)}function n(){this.resetZoomButton&&(this.resetZoomButton=this.resetZoomButton.destroy())}function s(){this.resetZoomButton&&this.showResetZoom()}function l(){(this.xAxis||[]).forEach(function(t){t.ddPoints={},t.series.forEach(function(i){for(var e=i.getColumn("x"),o=i.points,r=0,n=e.length,s=void 0;r<n;r++)if("number"!=typeof(s=i.options.data[r])&&(s=i.pointClass.prototype.optionsToObject.call({series:i},s)).drilldown){t.ddPoints[e[r]]||(t.ddPoints[e[r]]=[]);var l=r-(i.cropStart||0);t.ddPoints[e[r]].push(!o||!(l>=0)||!(l<o.length)||o[l])}}),tp(t.ticks,function(t){return t.drillable()})})}function a(t){var i=this.breadcrumbs,e=t.options.drilldown&&t.options.drilldown.breadcrumbs;i&&e&&i.update(e)}function d(t){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:th(this.newOpacity,1)},t||{duration:250})}function p(){var t=this.pos,i=this.label,e=this.axis,o="xAxis"===e.coll&&e.getDDPoints,r=o&&e.getDDPoints(t),n=e.chart.styledMode;o&&(i&&r&&r.length?(i.drillable=!0,i.basicStyles||n||(i.basicStyles=td(i.styles)),i.addClass("highcharts-drilldown-axis-label"),i.removeOnDrillableClick&&tu(i.element,"click"),i.removeOnDrillableClick=tr(i.element,"click",function(i){i.preventDefault(),e.drilldownCategory(t,i)}),!n&&e.chart.options.drilldown&&i.css(e.chart.options.drilldown.activeAxisLabelStyle||{})):i&&i.drillable&&i.removeOnDrillableClick&&(n||(i.styles={},i.element.removeAttribute("style"),i.css(i.basicStyles)),i.removeOnDrillableClick(),i.removeClass("highcharts-drilldown-axis-label")))}t.compose=function(t,h,u,c,m,f,v){ti(c,m);var g=h.prototype;if(!g.drillUp){var w=f.prototype.Element,b=tw.prototype,y=t.prototype,x=w.prototype,D=v.prototype;y.drilldownCategory=tf,y.getDDPoints=tv,T.compose(h,u),tr(T,"up",i),g.addSeriesAsDrilldown=b.addSeriesAsDrilldown,g.addSingleSeriesAsDrilldown=b.addSingleSeriesAsDrilldown,g.applyDrilldown=b.applyDrilldown,g.drillUp=b.drillUp,tr(h,"afterDrilldown",e),tr(h,"afterDrillUp",o),tr(h,"afterInit",r),tr(h,"drillup",n),tr(h,"drillupall",s),tr(h,"render",l),tr(h,"update",a),u.drilldown=P,x.fadeIn=d,D.drillable=p}}}(o||(o={}));var tb=o,ty=d();ty.Breadcrumbs=ty.Breadcrumbs||T,tb.compose(ty.Axis,ty.Chart,ty.defaultOptions,ty.Series,ty.seriesTypes,ty.SVGRenderer,ty.Tick);var tx=d();return l.default}()});