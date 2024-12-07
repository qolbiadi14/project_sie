/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2024 Sebastian Bochan
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import U from '../../Core/Utilities.js';
import AST from '../../Core/Renderer/HTML/AST.js';
import StockToolsUtilities from './StockToolsUtilities.js';
var addEvent = U.addEvent, createElement = U.createElement, css = U.css, defined = U.defined, fireEvent = U.fireEvent, getStyle = U.getStyle, isArray = U.isArray, merge = U.merge, pick = U.pick;
var shallowArraysEqual = StockToolsUtilities.shallowArraysEqual;
/* *
 *
 *  Classes
 *
 * */
/**
 * Toolbar Class
 *
 * @private
 * @class
 *
 * @param {object} options
 *        Options of toolbar
 *
 * @param {Highcharts.Dictionary<string>|undefined} langOptions
 *        Language options
 *
 * @param {Highcharts.Chart} chart
 *        Reference to chart
 */
var Toolbar = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function Toolbar(options, langOptions, chart) {
        this.width = 0;
        this.isDirty = false;
        this.chart = chart;
        this.options = options;
        this.lang = langOptions;
        // Set url for icons.
        this.iconsURL = this.getIconsURL();
        this.guiEnabled = options.enabled;
        this.visible = pick(options.visible, true);
        this.guiClassName = options.className;
        this.toolbarClassName = options.toolbarClassName;
        // General events collection which should be removed upon
        // destroy/update:
        this.eventsToUnbind = [];
        if (this.guiEnabled) {
            this.createContainer();
            this.createButtons();
            this.showHideNavigation();
        }
        fireEvent(this, 'afterInit');
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create and set up stockTools buttons with their events and submenus.
     * @private
     */
    Toolbar.prototype.createButtons = function () {
        var _this = this;
        var lang = this.lang, guiOptions = this.options, toolbar = this.toolbar, buttons = guiOptions.buttons, defs = guiOptions.definitions, allButtons = toolbar.childNodes;
        this.buttonList = buttons;
        // Create buttons
        buttons.forEach(function (btnName) {
            var button = _this.addButton(toolbar, defs, btnName, lang);
            _this.eventsToUnbind.push(addEvent(button.buttonWrapper, 'click', function () { return _this.eraseActiveButtons(allButtons, button.buttonWrapper); }));
            if (isArray(defs[btnName].items)) {
                // Create submenu buttons
                _this.addSubmenu(button, defs[btnName]);
            }
        });
    };
    /**
     * Create submenu (list of buttons) for the option. In example main button
     * is Line, in submenu will be buttons with types of lines.
     *
     * @private
     *
     * @param {Highcharts.Dictionary<Highcharts.HTMLDOMElement>} parentBtn
     *        Button which has submenu
     *
     * @param {Highcharts.StockToolsGuiDefinitionsButtonsOptions} button
     *        List of all buttons
     */
    Toolbar.prototype.addSubmenu = function (parentBtn, button) {
        var _this = this;
        var submenuArrow = parentBtn.submenuArrow, buttonWrapper = parentBtn.buttonWrapper, buttonWidth = getStyle(buttonWrapper, 'width'), wrapper = this.wrapper, menuWrapper = this.listWrapper, allButtons = this.toolbar.childNodes, 
        // Create submenu container
        submenuWrapper = this.submenu = createElement('ul', {
            className: 'highcharts-submenu-wrapper'
        }, void 0, buttonWrapper);
        // Create submenu buttons and select the first one
        this.addSubmenuItems(buttonWrapper, button);
        // Show / hide submenu
        this.eventsToUnbind.push(addEvent(submenuArrow, 'click', function (e) {
            e.stopPropagation();
            // Erase active class on all other buttons
            _this.eraseActiveButtons(allButtons, buttonWrapper);
            // Hide menu
            if (buttonWrapper.className
                .indexOf('highcharts-current') >= 0) {
                menuWrapper.style.width =
                    menuWrapper.startWidth + 'px';
                buttonWrapper.classList.remove('highcharts-current');
                submenuWrapper.style.display = 'none';
            }
            else {
                // Show menu
                // to calculate height of element
                submenuWrapper.style.display = 'block';
                var topMargin = submenuWrapper.offsetHeight -
                    buttonWrapper.offsetHeight - 3;
                // Calculate position of submenu in the box
                // if submenu is inside, reset top margin
                if (
                // Cut on the bottom
                !(submenuWrapper.offsetHeight +
                    buttonWrapper.offsetTop >
                    wrapper.offsetHeight &&
                    // Cut on the top
                    buttonWrapper.offsetTop > topMargin)) {
                    topMargin = 0;
                }
                // Apply calculated styles
                css(submenuWrapper, {
                    top: -topMargin + 'px',
                    left: buttonWidth + 3 + 'px'
                });
                buttonWrapper.className += ' highcharts-current';
                menuWrapper.startWidth = wrapper.offsetWidth;
                menuWrapper.style.width = menuWrapper.startWidth +
                    getStyle(menuWrapper, 'padding-left') +
                    submenuWrapper.offsetWidth + 3 + 'px';
            }
        }));
    };
    /**
     * Create buttons in submenu
     *
     * @private
     *
     * @param {Highcharts.HTMLDOMElement} buttonWrapper
     *        Button where submenu is placed
     *
     * @param {Highcharts.StockToolsGuiDefinitionsButtonsOptions} button
     *        List of all buttons options
     */
    Toolbar.prototype.addSubmenuItems = function (buttonWrapper, button) {
        var _this = this;
        var _self = this, submenuWrapper = this.submenu, lang = this.lang, menuWrapper = this.listWrapper, items = button.items;
        var submenuBtn;
        // Add items to submenu
        items.forEach(function (btnName) {
            // Add buttons to submenu
            submenuBtn = _this.addButton(submenuWrapper, button, btnName, lang);
            _this.eventsToUnbind.push(addEvent(submenuBtn.mainButton, 'click', function () {
                _self.switchSymbol(this, buttonWrapper, true);
                menuWrapper.style.width =
                    menuWrapper.startWidth + 'px';
                submenuWrapper.style.display = 'none';
            }));
        });
        // Select first submenu item
        var firstSubmenuItem = submenuWrapper.querySelectorAll('li > .highcharts-menu-item-btn')[0];
        // Replace current symbol, in main button, with submenu's button style
        this.switchSymbol(firstSubmenuItem, false);
    };
    /**
     * Erase active class on all other buttons.
     * @private
     */
    Toolbar.prototype.eraseActiveButtons = function (buttons, currentButton, submenuItems) {
        [].forEach.call(buttons, function (btn) {
            if (btn !== currentButton) {
                btn.classList.remove('highcharts-current');
                btn.classList.remove('highcharts-active');
                submenuItems =
                    btn.querySelectorAll('.highcharts-submenu-wrapper');
                // Hide submenu
                if (submenuItems.length > 0) {
                    submenuItems[0].style.display = 'none';
                }
            }
        });
    };
    /**
     * Create single button. Consist of HTML elements `li`, `button`, and (if
     * exists) submenu container.
     *
     * @private
     *
     * @param {Highcharts.HTMLDOMElement} target
     *        HTML reference, where button should be added
     *
     * @param {object} options
     *        All options, by btnName refer to particular button
     *
     * @param {string} btnName
     *        Button name of functionality mapped for specific class
     *
     * @param {Highcharts.Dictionary<string>} lang
     *        All titles, by btnName refer to particular button
     *
     * @return {object}
     *         References to all created HTML elements
     */
    Toolbar.prototype.addButton = function (target, options, btnName, lang) {
        if (lang === void 0) { lang = {}; }
        var btnOptions = options[btnName], items = btnOptions.items, classMapping = Toolbar.prototype.classMapping, userClassName = btnOptions.className || '';
        // Main button wrapper
        var buttonWrapper = createElement('li', {
            className: pick(classMapping[btnName], '') + ' ' + userClassName,
            title: lang[btnName] || btnName
        }, void 0, target);
        // Single button
        var elementType = (btnOptions.elementType || 'button');
        var mainButton = createElement(elementType, {
            className: 'highcharts-menu-item-btn'
        }, void 0, buttonWrapper);
        // Submenu
        if (items && items.length) {
            // Arrow is a hook to show / hide submenu
            var submenuArrow = createElement('button', {
                className: 'highcharts-submenu-item-arrow ' +
                    'highcharts-arrow-right'
            }, void 0, buttonWrapper);
            submenuArrow.style.backgroundImage = 'url(' +
                this.iconsURL + 'arrow-bottom.svg)';
            return {
                buttonWrapper: buttonWrapper,
                mainButton: mainButton,
                submenuArrow: submenuArrow
            };
        }
        mainButton.style.backgroundImage = 'url(' +
            this.iconsURL + btnOptions.symbol + ')';
        return {
            buttonWrapper: buttonWrapper,
            mainButton: mainButton
        };
    };
    /**
     * Create navigation's HTML elements: container and arrows.
     * @private
     */
    Toolbar.prototype.addNavigation = function () {
        var wrapper = this.wrapper;
        // Arrow wrapper
        this.arrowWrapper = createElement('div', {
            className: 'highcharts-arrow-wrapper'
        });
        this.arrowUp = createElement('div', {
            className: 'highcharts-arrow-up'
        }, void 0, this.arrowWrapper);
        this.arrowUp.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        this.arrowDown = createElement('div', {
            className: 'highcharts-arrow-down'
        }, void 0, this.arrowWrapper);
        this.arrowDown.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        wrapper.insertBefore(this.arrowWrapper, wrapper.childNodes[0]);
        // Attach scroll events
        this.scrollButtons();
    };
    /**
     * Add events to navigation (two arrows) which allows user to scroll
     * top/down GUI buttons, if container's height is not enough.
     * @private
     */
    Toolbar.prototype.scrollButtons = function () {
        var wrapper = this.wrapper, toolbar = this.toolbar, step = 0.1 * wrapper.offsetHeight; // 0.1 = 10%
        var targetY = 0;
        this.eventsToUnbind.push(addEvent(this.arrowUp, 'click', function () {
            if (targetY > 0) {
                targetY -= step;
                toolbar.style.marginTop = -targetY + 'px';
            }
        }));
        this.eventsToUnbind.push(addEvent(this.arrowDown, 'click', function () {
            if (wrapper.offsetHeight + targetY <=
                toolbar.offsetHeight + step) {
                targetY += step;
                toolbar.style.marginTop = -targetY + 'px';
            }
        }));
    };
    /*
     * Create the stockTools container and sets up event bindings.
     *
     */
    Toolbar.prototype.createContainer = function () {
        var _this = this;
        var chart = this.chart, guiOptions = this.options, container = chart.container, navigation = chart.options.navigation, bindingsClassName = navigation === null || navigation === void 0 ? void 0 : navigation.bindingsClassName, self = this;
        var listWrapper, toolbar;
        // Create main container
        var wrapper = this.wrapper = createElement('div', {
            className: 'highcharts-stocktools-wrapper ' +
                guiOptions.className + ' ' + bindingsClassName
        });
        container.appendChild(wrapper);
        this.showHideBtn = createElement('div', {
            className: 'highcharts-toggle-toolbar highcharts-arrow-left'
        }, void 0, wrapper);
        // Toggle menu
        this.eventsToUnbind.push(addEvent(this.showHideBtn, 'click', function () {
            _this.update({
                gui: {
                    visible: !self.visible
                }
            });
        }));
        // Mimic event behaviour of being outside chart.container
        [
            'mousedown',
            'mousemove',
            'click',
            'touchstart'
        ].forEach(function (eventType) {
            addEvent(wrapper, eventType, function (e) {
                return e.stopPropagation();
            });
        });
        addEvent(wrapper, 'mouseover', function (e) { var _a; return (_a = chart.pointer) === null || _a === void 0 ? void 0 : _a.onContainerMouseLeave(e); });
        // Toolbar
        this.toolbar = toolbar = createElement('ul', {
            className: 'highcharts-stocktools-toolbar ' +
                guiOptions.toolbarClassName
        });
        // Add container for list of buttons
        this.listWrapper = listWrapper = createElement('div', {
            className: 'highcharts-menu-wrapper'
        });
        wrapper.insertBefore(listWrapper, wrapper.childNodes[0]);
        listWrapper.insertBefore(toolbar, listWrapper.childNodes[0]);
        this.showHideToolbar();
        // Add navigation which allows user to scroll down / top GUI buttons
        this.addNavigation();
    };
    /**
     * Function called in redraw verifies if the navigation should be visible.
     * @private
     */
    Toolbar.prototype.showHideNavigation = function () {
        // Arrows
        // 50px space for arrows
        if (this.visible &&
            this.toolbar.offsetHeight > (this.wrapper.offsetHeight - 50)) {
            this.arrowWrapper.style.display = 'block';
        }
        else {
            // Reset margin if whole toolbar is visible
            this.toolbar.style.marginTop = '0px';
            // Hide arrows
            this.arrowWrapper.style.display = 'none';
        }
    };
    /**
     * Create button which shows or hides GUI toolbar.
     * @private
     */
    Toolbar.prototype.showHideToolbar = function () {
        var wrapper = this.wrapper, toolbar = this.listWrapper, submenu = this.submenu, 
        // Show hide toolbar
        showHideBtn = this.showHideBtn;
        var visible = this.visible;
        showHideBtn.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        if (!visible) {
            // Hide
            if (submenu) {
                submenu.style.display = 'none';
            }
            showHideBtn.style.left = '0px';
            visible = this.visible = false;
            toolbar.classList.add('highcharts-hide');
            showHideBtn.classList.add('highcharts-arrow-right');
            wrapper.style.height = showHideBtn.offsetHeight + 'px';
        }
        else {
            wrapper.style.height = '100%';
            toolbar.classList.remove('highcharts-hide');
            showHideBtn.classList.remove('highcharts-arrow-right');
            showHideBtn.style.top = getStyle(toolbar, 'padding-top') + 'px';
            showHideBtn.style.left = (wrapper.offsetWidth +
                getStyle(toolbar, 'padding-left')) + 'px';
        }
    };
    /*
     * In main GUI button, replace icon and class with submenu button's
     * class / symbol.
     *
     * @param {HTMLDOMElement} - submenu button
     * @param {Boolean} - true or false
     *
     */
    Toolbar.prototype.switchSymbol = function (button, redraw) {
        var buttonWrapper = button.parentNode, buttonWrapperClass = buttonWrapper.className, 
        // Main button in first level og GUI
        mainNavButton = buttonWrapper.parentNode.parentNode;
        // If the button is disabled, don't do anything
        if (buttonWrapperClass.indexOf('highcharts-disabled-btn') > -1) {
            return;
        }
        // Set class
        mainNavButton.className = '';
        if (buttonWrapperClass) {
            mainNavButton.classList.add(buttonWrapperClass.trim());
        }
        // Set icon
        mainNavButton
            .querySelectorAll('.highcharts-menu-item-btn')[0]
            .style.backgroundImage =
            button.style.backgroundImage;
        // Set active class
        if (redraw) {
            this.toggleButtonActiveClass(mainNavButton);
        }
    };
    /**
     * Set select state (active class) on button.
     * @private
     */
    Toolbar.prototype.toggleButtonActiveClass = function (button) {
        var classList = button.classList;
        if (classList.contains('highcharts-active')) {
            classList.remove('highcharts-active');
        }
        else {
            classList.add('highcharts-active');
        }
    };
    /**
     * Remove active class from all buttons except defined.
     * @private
     */
    Toolbar.prototype.unselectAllButtons = function (button) {
        var activeBtns = button.parentNode
            .querySelectorAll('.highcharts-active');
        [].forEach.call(activeBtns, function (activeBtn) {
            if (activeBtn !== button) {
                activeBtn.classList.remove('highcharts-active');
            }
        });
    };
    /**
     * Update GUI with given options.
     * @private
     */
    Toolbar.prototype.update = function (options, redraw) {
        this.isDirty = !!options.gui.definitions;
        merge(true, this.chart.options.stockTools, options);
        merge(true, this.options, options.gui);
        this.visible = pick(this.options.visible && this.options.enabled, true);
        // If Stock Tools are updated, then bindings should be updated too:
        if (this.chart.navigationBindings) {
            this.chart.navigationBindings.update();
        }
        this.chart.isDirtyBox = true;
        if (pick(redraw, true)) {
            this.chart.redraw();
        }
    };
    /**
     * Destroy all HTML GUI elements.
     * @private
     */
    Toolbar.prototype.destroy = function () {
        var stockToolsDiv = this.wrapper, parent = stockToolsDiv && stockToolsDiv.parentNode;
        this.eventsToUnbind.forEach(function (unbinder) { return unbinder(); });
        // Remove the empty element
        if (parent) {
            parent.removeChild(stockToolsDiv);
        }
    };
    /**
     * Redraws the toolbar based on the current state of the options.
     * @private
     */
    Toolbar.prototype.redraw = function () {
        if (this.options.enabled !== this.guiEnabled) {
            this.handleGuiEnabledChange();
        }
        else {
            if (!this.guiEnabled) {
                return;
            }
            this.updateClassNames();
            this.updateButtons();
            this.updateVisibility();
            this.showHideNavigation();
            this.showHideToolbar();
        }
    };
    /**
     * Hadles the change of the `enabled` option.
     * @private
     */
    Toolbar.prototype.handleGuiEnabledChange = function () {
        if (this.options.enabled === false) {
            this.destroy();
            this.visible = false;
        }
        if (this.options.enabled === true) {
            this.createContainer();
            this.createButtons();
        }
        this.guiEnabled = this.options.enabled;
    };
    /**
     * Updates the class names of the GUI and toolbar elements.
     * @private
     */
    Toolbar.prototype.updateClassNames = function () {
        if (this.options.className !== this.guiClassName) {
            if (this.guiClassName) {
                this.wrapper.classList.remove(this.guiClassName);
            }
            if (this.options.className) {
                this.wrapper.classList.add(this.options.className);
            }
            this.guiClassName = this.options.className;
        }
        if (this.options.toolbarClassName !== this.toolbarClassName) {
            if (this.toolbarClassName) {
                this.toolbar.classList.remove(this.toolbarClassName);
            }
            if (this.options.toolbarClassName) {
                this.toolbar.classList.add(this.options.toolbarClassName);
            }
            this.toolbarClassName = this.options.toolbarClassName;
        }
    };
    /**
     * Updates the buttons in the toolbar if the button options have changed.
     * @private
     */
    Toolbar.prototype.updateButtons = function () {
        if (!shallowArraysEqual(this.options.buttons, this.buttonList) ||
            this.isDirty) {
            this.toolbar.innerHTML = AST.emptyHTML;
            this.createButtons();
        }
    };
    /**
     * Updates visibility based on current options.
     * @private
     */
    Toolbar.prototype.updateVisibility = function () {
        if (defined(this.options.visible)) {
            this.visible = this.options.visible;
        }
    };
    /**
     * @private
     */
    Toolbar.prototype.getIconsURL = function () {
        return this.chart.options.navigation.iconsURL ||
            this.options.iconsURL ||
            'https://code.highcharts.com/@product.version@/gfx/stock-icons/';
    };
    return Toolbar;
}());
Toolbar.prototype.classMapping = {
    circle: 'highcharts-circle-annotation',
    ellipse: 'highcharts-ellipse-annotation',
    rectangle: 'highcharts-rectangle-annotation',
    label: 'highcharts-label-annotation',
    segment: 'highcharts-segment',
    arrowSegment: 'highcharts-arrow-segment',
    ray: 'highcharts-ray',
    arrowRay: 'highcharts-arrow-ray',
    line: 'highcharts-infinity-line',
    arrowInfinityLine: 'highcharts-arrow-infinity-line',
    verticalLine: 'highcharts-vertical-line',
    horizontalLine: 'highcharts-horizontal-line',
    crooked3: 'highcharts-crooked3',
    crooked5: 'highcharts-crooked5',
    elliott3: 'highcharts-elliott3',
    elliott5: 'highcharts-elliott5',
    pitchfork: 'highcharts-pitchfork',
    fibonacci: 'highcharts-fibonacci',
    fibonacciTimeZones: 'highcharts-fibonacci-time-zones',
    parallelChannel: 'highcharts-parallel-channel',
    measureX: 'highcharts-measure-x',
    measureY: 'highcharts-measure-y',
    measureXY: 'highcharts-measure-xy',
    timeCycles: 'highcharts-time-cycles',
    verticalCounter: 'highcharts-vertical-counter',
    verticalLabel: 'highcharts-vertical-label',
    verticalArrow: 'highcharts-vertical-arrow',
    currentPriceIndicator: 'highcharts-current-price-indicator',
    indicators: 'highcharts-indicators',
    flagCirclepin: 'highcharts-flag-circlepin',
    flagDiamondpin: 'highcharts-flag-diamondpin',
    flagSquarepin: 'highcharts-flag-squarepin',
    flagSimplepin: 'highcharts-flag-simplepin',
    zoomX: 'highcharts-zoom-x',
    zoomY: 'highcharts-zoom-y',
    zoomXY: 'highcharts-zoom-xy',
    typeLine: 'highcharts-series-type-line',
    typeOHLC: 'highcharts-series-type-ohlc',
    typeHLC: 'highcharts-series-type-hlc',
    typeCandlestick: 'highcharts-series-type-candlestick',
    typeHollowCandlestick: 'highcharts-series-type-hollowcandlestick',
    typeHeikinAshi: 'highcharts-series-type-heikinashi',
    fullScreen: 'highcharts-full-screen',
    toggleAnnotations: 'highcharts-toggle-annotations',
    saveChart: 'highcharts-save-chart',
    separator: 'highcharts-separator'
};
/* *
 *
 *  Default Export
 *
 * */
export default Toolbar;