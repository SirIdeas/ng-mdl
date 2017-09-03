/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	angular.module('ng-mdl', []).service('Mdl', function () {
	  'ngInject';
	
	  return {
	    ifClass: function ifClass(element, condition, cls) {
	      element && element.classList[condition ? 'add' : 'remove'](cls);
	    },
	    addAndRemoveClasses: function addAndRemoveClasses(element, classToAdd, classesToRemove) {
	      classesToRemove = [].concat(classesToRemove);
	      if (classToAdd) {
	        var idx = classesToRemove.indexOf(classToAdd);
	        if (idx != -1) classesToRemove.splice(idx, 1);
	        element.classList.add(classToAdd);
	      }
	      classesToRemove.map(element.classList.remove.bind(element.classList));
	    }
	  };
	});
	
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialButtonService.$inject = ["MaterialRippleService"];
	  function MaterialButtonService(MaterialRippleService) {
	    'ngInject';
	
	    /**
	     * Class constructor for Button MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	
	    function MaterialButton($scope, element) {
	      this.element_ = element;
	
	      // Initialize instance.
	      this.init($scope);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialButton.prototype.Constant_ = {
	      // None for now.
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialButton.prototype.CssClasses_ = {
	      BUTTON: 'mdl-button',
	      RIPPLE_CONTAINER: 'mdl-button__ripple-container'
	    };
	
	    /**
	     * Handle blur of element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialButton.prototype.blurHandler_ = function (event) {
	      if (event) {
	        this.element_.blur();
	      }
	    };
	
	    // Public methods.
	
	    /**
	     * Disable button.
	     *
	     * @public
	     */
	    MaterialButton.prototype.disable = function () {
	      this.element_.disabled = true;
	    };
	
	    /**
	     * Enable button.
	     *
	     * @public
	     */
	    MaterialButton.prototype.enable = function () {
	      this.element_.disabled = false;
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialButton.prototype.init = function ($scope) {
	      this.element_.classList.add(this.CssClasses_.BUTTON);
	      MaterialRippleService.watchIgnoreProperty($scope, this.element_, this, function (ripple) {
	        ripple.rippleElement_.addEventListener('mouseup', boundBlueHandler);
	      }.bind(this));
	      var boundBlueHandler = this.blurHandler_.bind(this);
	      this.element_.addEventListener('mouseup', boundBlueHandler);
	      this.element_.addEventListener('mouseleave', boundBlueHandler);
	    };
	
	    return {
	      create: function create($scope, element) {
	        return new MaterialButton($scope, element);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialButtonService', MaterialButtonService).directive('mdlButton', ["MaterialButtonService", function (MaterialButtonService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialButtonService.create($scope, $element[0]);
	      }
	    };
	  }]);
	})();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialCheckboxService.$inject = ["Mdl", "MaterialRippleService"];
	  function MaterialCheckboxService(Mdl, MaterialRippleService) {
	    'ngInject';
	
	    /**
	     * Class constructor for Checkbox MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	
	    function MaterialCheckbox($scope, element) {
	      this.element_ = element;
	
	      // Initialize instance.
	      this.init($scope);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialCheckbox.prototype.Constant_ = {
	      TINY_TIMEOUT: 0.001
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialCheckbox.prototype.CssClasses_ = {
	      CHECKBOX: 'mdl-checkbox',
	      INPUT: 'mdl-checkbox__input',
	      BOX_OUTLINE: 'mdl-checkbox__box-outline',
	      FOCUS_HELPER: 'mdl-checkbox__focus-helper',
	      TICK_OUTLINE: 'mdl-checkbox__tick-outline',
	      RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
	      IS_FOCUSED: 'is-focused',
	      IS_DISABLED: 'is-disabled',
	      IS_CHECKED: 'is-checked',
	      IS_UPGRADED: 'is-upgraded'
	    };
	
	    /**
	     * Handle change of state.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialCheckbox.prototype.onChange_ = function (event) {
	      this.updateClasses_();
	    };
	
	    /**
	     * Handle focus of element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialCheckbox.prototype.onFocus_ = function (event) {
	      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle lost focus of element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialCheckbox.prototype.onBlur_ = function (event) {
	      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle mouseup.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialCheckbox.prototype.onMouseUp_ = function (event) {
	      this.blur_();
	    };
	
	    /**
	     * Handle class updates.
	     *
	     * @private
	     */
	    MaterialCheckbox.prototype.updateClasses_ = function () {
	      this.checkDisabled();
	      this.checkToggleState();
	    };
	
	    /**
	     * Add blur.
	     *
	     * @private
	     */
	    MaterialCheckbox.prototype.blur_ = function () {
	      // TODO: figure out why there's a focus event being fired after our blur,
	      // so that we can avoid this hack.
	      window.setTimeout(function () {
	        this.inputElement_.blur();
	      }.bind(this), /** @type {number} */this.Constant_.TINY_TIMEOUT);
	    };
	
	    // Public methods.
	
	    /**
	     * Check the inputs toggle state and update display.
	     *
	     * @public
	     */
	    MaterialCheckbox.prototype.checkToggleState = function () {
	      if (this.inputElement_.checked) {
	        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
	      }
	    };
	
	    /**
	     * Check the inputs disabled state and update display.
	     *
	     * @public
	     */
	    MaterialCheckbox.prototype.checkDisabled = function () {
	      if (this.inputElement_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	      }
	    };
	
	    /**
	     * Disable checkbox.
	     *
	     * @public
	     */
	    MaterialCheckbox.prototype.disable = function () {
	      this.inputElement_.disabled = true;
	      this.updateClasses_();
	    };
	
	    /**
	     * Enable checkbox.
	     *
	     * @public
	     */
	    MaterialCheckbox.prototype.enable = function () {
	      this.inputElement_.disabled = false;
	      this.updateClasses_();
	    };
	
	    /**
	     * Check checkbox.
	     *
	     * @public
	     */
	    MaterialCheckbox.prototype.check = function () {
	      this.inputElement_.checked = true;
	      this.updateClasses_();
	    };
	
	    /**
	     * Uncheck checkbox.
	     *
	     * @public
	     */
	    MaterialCheckbox.prototype.uncheck = function () {
	      this.inputElement_.checked = false;
	      this.updateClasses_();
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialCheckbox.prototype.init = function ($scope) {
	      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
	
	      var boxOutline = document.createElement('span');
	      boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);
	
	      var tickContainer = document.createElement('span');
	      tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);
	
	      var tickOutline = document.createElement('span');
	      tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);
	
	      boxOutline.appendChild(tickOutline);
	
	      this.element_.appendChild(tickContainer);
	      this.element_.appendChild(boxOutline);
	
	      this.boundInputOnChange = this.onChange_.bind(this);
	      this.boundInputOnFocus = this.onFocus_.bind(this);
	      this.boundInputOnBlur = this.onBlur_.bind(this);
	      this.boundElementMouseUp = this.onMouseUp_.bind(this);
	      this.inputElement_.addEventListener('change', this.boundInputOnChange);
	      this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
	      this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
	      this.element_.addEventListener('mouseup', this.boundElementMouseUp);
	
	      this.updateClasses_();
	      this.element_.classList.add(this.CssClasses_.CHECKBOX);
	      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	
	      MaterialRippleService.watchIgnoreProperty($scope, this.element_, this, function (ripple) {
	        ripple.recentering = true;
	        ripple.rippleContainer_.addEventListener('mouseup', this.onMouseUp_.bind(this));
	      }.bind(this));
	    };
	
	    return {
	      create: function create($scope, element) {
	        return new MaterialCheckbox($scope, element);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialCheckboxService', MaterialCheckboxService).directive('mdlCheckbox', ["MaterialCheckboxService", function (MaterialCheckboxService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialCheckboxService.create($scope, $element[0]);
	      }
	    };
	  }]);
	})();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialIconToggleService.$inject = ["Mdl", "MaterialRippleService"];
	  function MaterialIconToggleService(Mdl, MaterialRippleService) {
	    'ngInject';
	
	    /**
	     * Class constructor for icon toggle MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	
	    function MaterialIconToggle($scope, element) {
	      this.element_ = element;
	
	      // Initialize instance.
	      this.init($scope);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialIconToggle.prototype.Constant_ = {
	      TINY_TIMEOUT: 0.001
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialIconToggle.prototype.CssClasses_ = {
	      ICON_TOGGLE: 'mdl-icon-toggle',
	      INPUT: 'mdl-icon-toggle__input',
	      RIPPLE_CONTAINER: 'mdl-icon-toggle__ripple-container',
	      IS_FOCUSED: 'is-focused',
	      IS_DISABLED: 'is-disabled',
	      IS_CHECKED: 'is-checked',
	      IS_UPGRADED: 'is-upgraded'
	    };
	
	    /**
	     * Handle change of state.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialIconToggle.prototype.onChange_ = function (event) {
	      this.updateClasses_();
	    };
	
	    /**
	     * Handle focus of element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialIconToggle.prototype.onFocus_ = function (event) {
	      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle lost focus of element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialIconToggle.prototype.onBlur_ = function (event) {
	      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle mouseup.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialIconToggle.prototype.onMouseUp_ = function (event) {
	      this.blur_();
	    };
	
	    /**
	     * Handle class updates.
	     *
	     * @private
	     */
	    MaterialIconToggle.prototype.updateClasses_ = function () {
	      this.checkDisabled();
	      this.checkToggleState();
	    };
	
	    /**
	     * Add blur.
	     *
	     * @private
	     */
	    MaterialIconToggle.prototype.blur_ = function () {
	      // TODO: figure out why there's a focus event being fired after our blur,
	      // so that we can avoid this hack.
	      window.setTimeout(function () {
	        this.inputElement_.blur();
	      }.bind(this), /** @type {number} */this.Constant_.TINY_TIMEOUT);
	    };
	
	    // Public methods.
	
	    /**
	     * Check the inputs toggle state and update display.
	     *
	     * @public
	     */
	    MaterialIconToggle.prototype.checkToggleState = function () {
	      if (this.inputElement_.checked) {
	        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
	      }
	    };
	
	    /**
	     * Check the inputs disabled state and update display.
	     *
	     * @public
	     */
	    MaterialIconToggle.prototype.checkDisabled = function () {
	      if (this.inputElement_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	      }
	    };
	
	    /**
	     * Disable icon toggle.
	     *
	     * @public
	     */
	    MaterialIconToggle.prototype.disable = function () {
	      this.inputElement_.disabled = true;
	      this.updateClasses_();
	    };
	
	    /**
	     * Enable icon toggle.
	     *
	     * @public
	     */
	    MaterialIconToggle.prototype.enable = function () {
	      this.inputElement_.disabled = false;
	      this.updateClasses_();
	    };
	
	    /**
	     * Check icon toggle.
	     *
	     * @public
	     */
	    MaterialIconToggle.prototype.check = function () {
	      this.inputElement_.checked = true;
	      this.updateClasses_();
	    };
	
	    /**
	     * Uncheck icon toggle.
	     *
	     * @public
	     */
	    MaterialIconToggle.prototype.uncheck = function () {
	      this.inputElement_.checked = false;
	      this.updateClasses_();
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialIconToggle.prototype.init = function ($scope) {
	
	      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
	
	      this.boundInputOnChange = this.onChange_.bind(this);
	      this.boundInputOnFocus = this.onFocus_.bind(this);
	      this.boundInputOnBlur = this.onBlur_.bind(this);
	      this.boundElementOnMouseUp = this.onMouseUp_.bind(this);
	      this.inputElement_.addEventListener('change', this.boundInputOnChange);
	      this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
	      this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
	      this.element_.addEventListener('mouseup', this.boundElementOnMouseUp);
	
	      this.updateClasses_();
	      this.element_.classList.add(this.CssClasses_.ICON_TOGGLE);
	      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	
	      this.boundRippleMouseUp = this.onMouseUp_.bind(this);
	      MaterialRippleService.watchIgnoreProperty($scope, this.element_, this, function (ripple) {
	        ripple.recentering = true;
	        ripple.rippleContainer_.addEventListener('mouseup', this.boundRippleMouseUp);
	      }.bind(this));
	    };
	
	    return {
	      create: function create($scope, element) {
	        return new MaterialIconToggle($scope, element);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialIconToggleService', MaterialIconToggleService).directive('mdlIconToggle', ["MaterialIconToggleService", function (MaterialIconToggleService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialIconToggleService.create($scope, $element[0]);
	      }
	    };
	  }]);
	})();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MdlLayoutCtrl.$inject = ["$scope", "Mdl", "MdlLayoutConstant_", "MdlLayoutCssClasses_", "MdlLayoutKeyCodes_", "MdlLayoutMode_", "MdlLayoutOnSizeScreen_", "$q"];
	  function MdlLayoutCtrl($scope, Mdl, MdlLayoutConstant_, MdlLayoutCssClasses_, MdlLayoutKeyCodes_, MdlLayoutMode_, MdlLayoutOnSizeScreen_, $q) {
	    'ngInject';
	
	    var layoutDefered = $q.defer();
	    this.Constant_ = MdlLayoutConstant_;
	    this.CssClasses_ = MdlLayoutCssClasses_;
	    this.Keycodes_ = MdlLayoutKeyCodes_;
	    this.Mode_ = MdlLayoutMode_;
	
	    this.headerTransitionEndHandler_ = function () {
	      this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);
	    }.bind(this);
	
	    this.headerClickHandler_ = function () {
	      if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
	        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
	        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
	      }
	    }.bind(this);
	
	    this.contentScrollHandler_ = function () {
	      if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
	        return;
	      }
	      var headerVisible = this.element_ && (!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER));
	      if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
	        this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
	        this.header_.classList.add(this.CssClasses_.IS_COMPACT);
	        headerVisible && this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
	      } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
	        this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
	        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
	        headerVisible && this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
	      }
	    }.bind(this);
	
	    this.drawerToggleHandler_ = function (evt) {
	      if (evt && evt.type === 'keydown') {
	        if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
	          // prevent scrolling in drawer nav
	          evt.preventDefault();
	        } else {
	          // prevent other keys
	          return;
	        }
	      }
	      this.toggleDrawer();
	    }.bind(this);
	
	    this.keyboardEventHandler_ = function (evt) {
	      // Only react when the drawer is open.
	      if (evt.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
	        this.toggleDrawer();
	      }
	    }.bind(this);
	
	    this.toggleDrawer = function () {
	      if (this.drawer_) {
	        this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
	        this.obfuscator_ && this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
	        // Set accessibility properties.
	        var isOpen = drawerIsOpen();
	        this.drawer_.setAttribute('aria-hidden', (!isOpen).toString());
	        this.drawerButton_ && this.drawerButton_.setAttribute('aria-expanded', isOpen.toString());
	      }
	    }.bind(this);
	
	    this.screenSizeHandler_ = function () {
	      layoutDefered.promise.then(function () {
	        Mdl.ifClass(this.element_, this.screenSizeMediaQuery_.matches, this.CssClasses_.IS_SMALL_SCREEN);
	        if (this.screenSizeMediaQuery_.matches) return;
	        // Collapse drawer (if any) when moving to a large screen size.
	        if (this.drawer_) {
	          this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
	          this.obfuscator_ && this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
	        }
	      }.bind(this));
	    }.bind(this);
	
	    this.setTabs = function (tabsCtrl, tabBar) {
	      this.tabsCtrl_ = tabsCtrl;
	      this.tabBar_ = tabBar;
	      layoutDefered.promise.then(function () {
	        Mdl.ifClass(this.element_, this.tabBar_, this.CssClasses_.HAS_TABS);
	        if (!this.tabBar_) return;
	        this.header_.appendChild(this.tabBar_);
	        this.tabsCtrl_.initLayout_(this);
	      }.bind(this));
	    }.bind(this);
	
	    var drawerIsOpen = function () {
	      return !!(this.drawer_ && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN));
	    }.bind(this);
	
	    var setElement = function () {
	      if (this.element_) {
	        this.element_.classList.add(this.CssClasses_.LAYOUT);
	        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	        layoutDefered.resolve(this.element_);
	      }
	    }.bind(this);
	
	    var setContainer = function () {
	      if (this.container_) {
	        this.container_.classList.add(this.CssClasses_.CONTAINER);
	        Mdl.ifClass(this.container_, $scope.mode === this.Mode_.SCROLL, this.CssClasses_.HAS_SCROLLING_HEADER);
	      }
	    }.bind(this);
	
	    var setHeader = function () {
	      this.header_ && this.header_.classList.add(this.CssClasses_.HEADER);
	    }.bind(this);
	
	    var setDrawer = function () {
	      layoutDefered.promise.then(function () {
	        Mdl.ifClass(this.element_, this.drawer_, this.CssClasses_.HAS_DRAWER);
	        if (this.drawer_) {
	          this.drawer_.classList.add(this.CssClasses_.DRAWER);
	          this.drawer_.addEventListener('keydown', this.keyboardEventHandler_);
	          this.drawer_.setAttribute('aria-hidden', (!drawerIsOpen()).toString());
	          var obfuscator = document.createElement('div');
	          obfuscator.addEventListener('click', this.drawerToggleHandler_);
	          this.set_('obfuscator_', obfuscator);
	          this.element_.appendChild(obfuscator);
	        } else {
	          if (this.obfuscator_) {
	            this.element_.removeChild(this.obfuscator_);
	            delete this.obfuscator_;
	          }
	          this.drawer_.removeEventListener('keydown', this.keyboardEventHandler_);
	        }
	      }.bind(this));
	    }.bind(this);
	
	    var setDrawerButton = function () {
	      if (this.drawerButton_) {
	        layoutDefered.promise.then(function () {
	          this.drawerButton_.classList.add(this.CssClasses_.DRAWER_BTN);
	          Mdl.ifClass(this.drawerButton_, $scope.onSizeScreen === MdlLayoutOnSizeScreen_.LARGE, this.CssClasses_.ON_LARGE_SCREEN);
	          Mdl.ifClass(this.drawerButton_, $scope.onSizeScreen === MdlLayoutOnSizeScreen_.SMALL, this.CssClasses_.ON_SMALL_SCREEN);
	          this.drawerButton_.setAttribute('aria-expanded', drawerIsOpen().toString());
	          this.drawerButton_.setAttribute('role', 'button');
	          this.drawerButton_.setAttribute('tabindex', '0');
	          this.drawerButton_.addEventListener('click', this.drawerToggleHandler_);
	          this.drawerButton_.addEventListener('keydown', this.drawerToggleHandler_);
	        }.bind(this));
	      }
	    }.bind(this);
	
	    var setContent = function () {
	      if (this.content_) {
	        this.content_.classList.add(this.CssClasses_.CONTENT);
	        if ($scope.mode === this.Mode_.WATERFALL) {
	          this.content_.addEventListener('scroll', this.contentScrollHandler_);
	          this.contentScrollHandler_();
	        } else {
	          this.content_.removeEventListener('scroll', this.contentScrollHandler_);
	        }
	        if (this.tabsCtrl_) {
	          for (var i in this.tabsCtrl_.panels) {
	            this.content_.appendChild(this.tabsCtrl_.panels[i]);
	          }
	        }
	      }
	    }.bind(this);
	
	    var setObfuscator = function () {
	      if (this.obfuscator_) {
	        this.obfuscator_.classList.add(this.CssClasses_.OBFUSCATOR);
	        Mdl.ifClass(this.obfuscator_, drawerIsOpen(), this.CssClasses_.IS_DRAWER_OPEN);
	      }
	    }.bind(this);
	
	    var initElementCallbacks = {
	      container_: setContainer,
	      element_: setElement,
	      header_: setHeader,
	      drawer_: setDrawer,
	      drawerButton_: setDrawerButton,
	      content_: setContent,
	      obfuscator_: setObfuscator
	    };
	
	    this.set_ = function (name, $element) {
	      this[name] = $element;
	      initElementCallbacks[name]($element);
	    }.bind(this);
	
	    this.setMode_ = function (mode) {
	      $scope.mode = mode || this.Mode_.STANDARD;
	      if (!this.header_) return;
	      Mdl.ifClass(this.header_, mode === this.Mode_.SEAMED, this.CssClasses_.HEADER_SEAMED);
	      Mdl.ifClass(this.header_, mode === this.Mode_.WATERFALL, this.CssClasses_.HEADER_WATERFALL);
	      Mdl.ifClass(this.header_, mode === this.Mode_.SCROLL, this.CssClasses_.HEADER_SCROLL);
	      Mdl.ifClass(this.container_, mode === this.Mode_.SCROLL, this.CssClasses_.HAS_SCROLLING_HEADER);
	      if (mode === this.Mode_.STANDARD) {
	        this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
	        this.tabBar_ && this.tabBar_.parentElement.classList.add(this.CssClasses_.CASTING_SHADOW);
	      } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {
	        this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
	        this.tabBar_ && this.tabBar_.parentElement.classList.remove(this.CssClasses_.CASTING_SHADOW);
	      }
	      if (mode === this.Mode_.WATERFALL) {
	        this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_);
	        this.header_.addEventListener('click', this.headerClickHandler_);
	        if (this.content_) {
	          this.content_.addEventListener('scroll', this.contentScrollHandler_);
	          this.contentScrollHandler_();
	        }
	      } else {
	        this.header_.removeEventListener('transitionend', this.headerTransitionEndHandler_);
	        this.header_.removeEventListener('click', this.headerClickHandler_);
	        if (this.content_) {
	          this.content_.removeEventListener('scroll', this.contentScrollHandler_);
	        }
	      }
	    }.bind(this);
	
	    this.setOnSizeScreen_ = function (onSizeScreen) {
	      $scope.onSizeScreen = onSizeScreen;
	      Mdl.ifClass(this.drawerButton_, onSizeScreen === MdlLayoutOnSizeScreen_.LARGE, this.CssClasses_.ON_LARGE_SCREEN);
	      Mdl.ifClass(this.drawerButton_, onSizeScreen === MdlLayoutOnSizeScreen_.SMALL, this.CssClasses_.ON_SMALL_SCREEN);
	    }.bind(this);
	
	    this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);
	    this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_);
	    this.screenSizeHandler_();
	
	    this.init_ = function (element) {
	      var container = document.createElement('div');
	      var focusedElement = element.querySelector(':focus');
	      element.parentElement.insertBefore(container, element);
	      element.parentElement.removeChild(element);
	      container.appendChild(element);
	      if (focusedElement) {
	        focusedElement.focus();
	      }
	      window.addEventListener('pageshow', function (e) {
	        if (!e.persisted) return;
	        // when page is loaded from back/forward cache
	        // trigger repaint to let layout scroll in safari
	        this.element_.style.overflowY = 'hidden';
	        requestAnimationFrame(function () {
	          this.element_.style.overflowY = '';
	        }.bind(this));
	      }.bind(this), false);
	      this.set_('element_', element);
	      this.set_('container_', container);
	    }.bind(this);
	
	    $scope.$watch('mode', this.setMode_);
	    $scope.$watch('onSizeScreen', this.setOnSizeScreen_);
	  }
	
	  function builderMdlLayoutElementDirective(elementName, _link) {
	    return function () {
	      'ngInject';
	
	      return {
	        restrict: 'A',
	        require: '^mdlLayout',
	        link: function link($scope, $element, $attrs, mdlLayoutCtrl) {
	          mdlLayoutCtrl.set_(elementName, $element[0]);
	          _link && _link.apply(this, arguments);
	        }
	      };
	    };
	  }
	
	  angular.module('ng-mdl').constant('MdlLayoutConstant_', {
	    MAX_WIDTH: '(max-width: 1024px)',
	    MENU_ICON: '&#xE5D2;'
	  }).constant('MdlLayoutKeyCodes_', {
	    ENTER: 13,
	    ESCAPE: 27,
	    SPACE: 32
	  }).constant('MdlLayoutMode_', {
	    STANDARD: 'standard',
	    SEAMED: 'seamed',
	    WATERFALL: 'waterfall',
	    SCROLL: 'scroll'
	  }).constant('MdlLayoutOnSizeScreen_', {
	    LARGE: 'large',
	    SMALL: 'small'
	  }).constant('MdlLayoutCssClasses_', {
	    LAYOUT: 'mdl-layout',
	    CONTAINER: 'mdl-layout__container',
	    HEADER: 'mdl-layout__header',
	    DRAWER: 'mdl-layout__drawer',
	    CONTENT: 'mdl-layout__content',
	    DRAWER_BTN: 'mdl-layout__drawer-button',
	    ICON: 'material-icons',
	    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
	    RIPPLE: 'mdl-ripple',
	    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
	    HEADER_SEAMED: 'mdl-layout__header--seamed',
	    HEADER_WATERFALL: 'mdl-layout__header--waterfall',
	    HEADER_SCROLL: 'mdl-layout__header--scroll',
	    FIXED_HEADER: 'mdl-layout--fixed-header',
	    OBFUSCATOR: 'mdl-layout__obfuscator',
	    HAS_DRAWER: 'has-drawer',
	    HAS_TABS: 'has-tabs',
	    HAS_SCROLLING_HEADER: 'has-scrolling-header',
	    CASTING_SHADOW: 'is-casting-shadow',
	    IS_COMPACT: 'is-compact',
	    IS_SMALL_SCREEN: 'is-small-screen',
	    IS_DRAWER_OPEN: 'is-visible',
	    IS_ACTIVE: 'is-active',
	    IS_UPGRADED: 'is-upgraded',
	    IS_ANIMATING: 'is-animating',
	    ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',
	    ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'
	  }).directive('mdlLayout', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      scope: {
	        mode: '@',
	        onSizeScreen: '@'
	      },
	      controller: MdlLayoutCtrl,
	      link: function linkMdlLayout($scope, $element, $attrs, mdlLayoutCtrl) {
	        mdlLayoutCtrl.init_($element[0]);
	      }
	    };
	  }).directive('mdlLayoutHeader', builderMdlLayoutElementDirective('header_')).directive('mdlLayoutDrawer', builderMdlLayoutElementDirective('drawer_')).directive('mdlLayoutContent', builderMdlLayoutElementDirective('content_')).directive('mdlLayoutDrawerButton', builderMdlLayoutElementDirective('drawerButton_')).directive('mdlLayoutDrawerToggle', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      require: '^mdlLayout',
	      link: function link($scope, $element, $attrs, mdlLayoutCtrl) {
	        $element.on('click', function () {
	          mdlLayoutCtrl.toggleDrawer();
	        });
	      }
	    };
	  });
	})();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialMenuService.$inject = ["MaterialRippleService"];
	  MaterialMenuCtrl.$inject = ["$scope", "MaterialMenuService"];
	  function MaterialMenuService(MaterialRippleService) {
	    'ngInject';
	
	    var instances = [];
	
	    /**
	     * Class constructor for dropdown MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	    function MaterialMenu(element) {
	      this.element_ = element;
	      instances.push(this);
	
	      // Initialize instance.
	      this.init();
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialMenu.prototype.Constant_ = {
	      // Total duration of the menu animation.
	      TRANSITION_DURATION_SECONDS: 0.3,
	      // The fraction of the total duration we want to use for menu item animations.
	      TRANSITION_DURATION_FRACTION: 0.8,
	      // How long the menu stays open after choosing an option (so the user can see
	      // the ripple).
	      CLOSE_TIMEOUT: 150
	    };
	
	    /**
	     * Keycodes, for code readability.
	     *
	     * @enum {number}
	     * @private
	     */
	    MaterialMenu.prototype.Keycodes_ = {
	      ENTER: 13,
	      ESCAPE: 27,
	      SPACE: 32,
	      UP_ARROW: 38,
	      DOWN_ARROW: 40
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialMenu.prototype.CssClasses_ = {
	      CONTAINER: 'mdl-menu__container',
	      OUTLINE: 'mdl-menu__outline',
	      MENU: 'mdl-menu',
	      ITEM: 'mdl-menu__item',
	      RIPPLE_CONTAINER: 'mdl-menu__item-ripple-container',
	      // Statuses
	      IS_UPGRADED: 'is-upgraded',
	      IS_VISIBLE: 'is-visible',
	      IS_ANIMATING: 'is-animating',
	      // Alignment options
	      BOTTOM_LEFT: 'mdl-menu--bottom-left', // This is the default.
	      BOTTOM_RIGHT: 'mdl-menu--bottom-right',
	      TOP_LEFT: 'mdl-menu--top-left',
	      TOP_RIGHT: 'mdl-menu--top-right',
	      UNALIGNED: 'mdl-menu--unaligned'
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialMenu.prototype.init = function () {
	      // Create container for the menu.
	      var container = document.createElement('div');
	      container.classList.add(this.CssClasses_.CONTAINER);
	      this.element_.classList.add(this.CssClasses_.MENU);
	      this.element_.parentElement.insertBefore(container, this.element_);
	      this.element_.parentElement.removeChild(this.element_);
	      container.appendChild(this.element_);
	      this.container_ = container;
	
	      // Create outline for the menu (shadow and background).
	      var outline = document.createElement('div');
	      outline.classList.add(this.CssClasses_.OUTLINE);
	      this.outline_ = outline;
	      container.insertBefore(outline, this.element_);
	
	      // Copy alignment classes to the container, so the outline can use them.
	      if (this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)) {
	        this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);
	      }
	      if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
	        this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);
	      }
	      if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
	        this.outline_.classList.add(this.CssClasses_.TOP_LEFT);
	      }
	      if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
	        this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);
	      }
	      if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
	        this.outline_.classList.add(this.CssClasses_.UNALIGNED);
	      }
	
	      container.classList.add(this.CssClasses_.IS_UPGRADED);
	    };
	
	    /**
	     * Handles a click on the "for" element, by positioning the menu and then
	     * toggling it.
	     *
	     * @param {Event} evt The event that fired.
	     * @private
	     */
	    MaterialMenu.prototype.handleForClick_ = function (evt) {
	      if (this.element_ && evt.forElement_) {
	        var rect = evt.forElement_.getBoundingClientRect();
	        var forRect = evt.forElement_.parentElement.getBoundingClientRect();
	
	        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
	          // Do not position the menu automatically. Requires the developer to
	          // manually specify position.
	        } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
	          // Position below the "for" element, aligned to its right.
	          this.container_.style.right = forRect.right - rect.right + 'px';
	          this.container_.style.top = evt.forElement_.offsetTop + evt.forElement_.offsetHeight + 'px';
	        } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
	          // Position above the "for" element, aligned to its left.
	          this.container_.style.left = evt.forElement_.offsetLeft + 'px';
	          this.container_.style.bottom = forRect.bottom - rect.top + 'px';
	        } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
	          // Position above the "for" element, aligned to its right.
	          this.container_.style.right = forRect.right - rect.right + 'px';
	          this.container_.style.bottom = forRect.bottom - rect.top + 'px';
	        } else {
	          // Default: position below the "for" element, aligned to its left.
	          this.container_.style.left = evt.forElement_.offsetLeft + 'px';
	          this.container_.style.top = evt.forElement_.offsetTop + evt.forElement_.offsetHeight + 'px';
	        }
	      }
	
	      this.toggle(evt);
	    };
	
	    /**
	     * Handles a keyboard event on the "for" element.
	     *
	     * @param {Event} evt The event that fired.
	     * @private
	     */
	    MaterialMenu.prototype.handleForKeyboardEvent_ = function (evt) {
	      if (this.element_ && this.container_ && evt.forElement_) {
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
	
	        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
	          if (evt.keyCode === this.Keycodes_.UP_ARROW) {
	            evt.preventDefault();
	            items[items.length - 1].focus();
	          } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
	            evt.preventDefault();
	            items[0].focus();
	          }
	        }
	      }
	    };
	
	    /**
	     * Handles a keyboard event on an item.
	     *
	     * @param {Event} evt The event that fired.
	     * @private
	     */
	    MaterialMenu.prototype.handleItemKeyboardEvent_ = function (evt) {
	      if (this.element_ && this.container_) {
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
	
	        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
	          var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);
	
	          if (evt.keyCode === this.Keycodes_.UP_ARROW) {
	            evt.preventDefault();
	            if (currentIndex > 0) {
	              items[currentIndex - 1].focus();
	            } else {
	              items[items.length - 1].focus();
	            }
	          } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
	            evt.preventDefault();
	            if (items.length > currentIndex + 1) {
	              items[currentIndex + 1].focus();
	            } else {
	              items[0].focus();
	            }
	          } else if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
	            evt.preventDefault();
	            // Send mousedown and mouseup to trigger ripple.
	            var e = new MouseEvent('mousedown');
	            evt.target.dispatchEvent(e);
	            e = new MouseEvent('mouseup');
	            evt.target.dispatchEvent(e);
	            // Send click.
	            evt.target.click();
	          } else if (evt.keyCode === this.Keycodes_.ESCAPE) {
	            evt.preventDefault();
	            this.hide();
	          }
	        }
	      }
	    };
	
	    /**
	     * Handles a click event on an item.
	     *
	     * @param {Event} evt The event that fired.
	     * @private
	     */
	    MaterialMenu.prototype.handleItemClick_ = function (evt) {
	      if (evt.target.hasAttribute('disabled')) {
	        evt.stopPropagation();
	      } else {
	        // Wait some time before closing menu, so the user can see the ripple.
	        this.closing_ = true;
	        window.setTimeout(function (evt) {
	          this.hide();
	          this.closing_ = false;
	        }.bind(this), /** @type {number} */this.Constant_.CLOSE_TIMEOUT);
	      }
	    };
	
	    /**
	     * Calculates the initial clip (for opening the menu) or final clip (for closing
	     * it), and applies it. This allows us to animate from or to the correct point,
	     * that is, the point it's aligned to in the "for" element.
	     *
	     * @param {number} height Height of the clip rectangle
	     * @param {number} width Width of the clip rectangle
	     * @private
	     */
	    MaterialMenu.prototype.applyClip_ = function (height, width) {
	      if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
	        // Do not clip.
	        this.element_.style.clip = '';
	      } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
	        // Clip to the top right corner of the menu.
	        this.element_.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
	      } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
	        // Clip to the bottom left corner of the menu.
	        this.element_.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
	      } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
	        // Clip to the bottom right corner of the menu.
	        this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
	      } else {
	        // Default: do not clip (same as clipping to the top left corner).
	        this.element_.style.clip = '';
	      }
	    };
	
	    /**
	     * Cleanup function to remove animation listeners.
	     *
	     * @param {Event} evt
	     * @private
	     */
	    MaterialMenu.prototype.removeAnimationEndListener_ = function (evt) {
	      evt.target.classList.remove(MaterialMenu.prototype.CssClasses_.IS_ANIMATING);
	    };
	
	    /**
	     * Adds an event listener to clean up after the animation ends.
	     *
	     * @private
	     */
	    MaterialMenu.prototype.addAnimationEndListener_ = function () {
	      this.element_.addEventListener('transitionend', this.removeAnimationEndListener_);
	      this.element_.addEventListener('webkitTransitionEnd', this.removeAnimationEndListener_);
	    };
	
	    /**
	     * Displays the menu.
	     *
	     * @public
	     */
	    MaterialMenu.prototype.show = function (evt) {
	      if (this.element_ && this.container_ && this.outline_) {
	        // Measure the inner element.
	        var height = this.element_.getBoundingClientRect().height;
	        var width = this.element_.getBoundingClientRect().width;
	
	        // Apply the inner element's size to the container and outline.
	        this.container_.style.width = width + 'px';
	        this.container_.style.height = height + 'px';
	        this.outline_.style.width = width + 'px';
	        this.outline_.style.height = height + 'px';
	
	        var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION;
	
	        // Calculate transition delays for individual menu items, so that they fade
	        // in one at a time.
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
	        for (var i = 0; i < items.length; i++) {
	          var itemDelay = null;
	          if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
	            itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
	          } else {
	            itemDelay = items[i].offsetTop / height * transitionDuration + 's';
	          }
	          items[i].style.transitionDelay = itemDelay;
	        }
	
	        // Apply the initial clip to the text before we start animating.
	        this.applyClip_(height, width);
	
	        // Wait for the next frame, turn on animation, and apply the final clip.
	        // Also make it visible. This triggers the transitions.
	        window.requestAnimationFrame(function () {
	          this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
	          this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
	          this.container_.classList.add(this.CssClasses_.IS_VISIBLE);
	        }.bind(this));
	
	        // Clean up after the animation is complete.
	        this.addAnimationEndListener_();
	
	        // Add a click listener to the document, to close the menu.
	        var callback = function (e) {
	          // Check to see if the document is processing the same event that
	          // displayed the menu in the first place. If so, do nothing.
	          // Also check to see if the menu is in the process of closing itself, and
	          // do nothing in that case.
	          // Also check if the clicked element is a menu item
	          // if so, do nothing.
	          if (e !== evt && !this.closing_ && e.target.parentNode !== this.element_) {
	            document.removeEventListener('click', callback);
	            this.hide();
	          }
	        }.bind(this);
	        document.addEventListener('click', callback);
	      }
	    };
	
	    /**
	     * Hides the menu.
	     *
	     * @public
	     */
	    MaterialMenu.prototype.hide = function () {
	      if (this.element_ && this.container_ && this.outline_) {
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
	
	        // Remove all transition delays; menu items fade out concurrently.
	        for (var i = 0; i < items.length; i++) {
	          items[i].style.removeProperty('transition-delay');
	        }
	
	        // Measure the inner element.
	        var rect = this.element_.getBoundingClientRect();
	        var height = rect.height;
	        var width = rect.width;
	
	        // Turn on animation, and apply the final clip. Also make invisible.
	        // This triggers the transitions.
	        this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
	        this.applyClip_(height, width);
	        this.container_.classList.remove(this.CssClasses_.IS_VISIBLE);
	
	        // Clean up after the animation is complete.
	        this.addAnimationEndListener_();
	      }
	    };
	
	    /**
	     * Displays or hides the menu, depending on current state.
	     *
	     * @public
	     */
	    MaterialMenu.prototype.toggle = function (evt) {
	      if (this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
	        this.hide();
	      } else {
	        this.show(evt);
	      }
	    };
	
	    MaterialMenu.prototype.addItem = function ($scope, item) {
	      item.classList.add(this.CssClasses_.ITEM);
	      // Add a listener to each menu item.
	      item.addEventListener('click', this.handleItemClick_.bind(this));
	      // Add a tab index to each menu item.
	      item.tabIndex = '-1';
	      // Add a keyboard listener to each menu item.
	      item.addEventListener('keydown', this.handleItemKeyboardEvent_.bind(this));
	      // Add ripple effect
	      MaterialRippleService.addRippleEffect(item, this);
	    };
	
	    return {
	      instances: instances,
	      create: function create(element) {
	        return new MaterialMenu(element);
	      },
	      find: function find(name) {
	        var instance, instanceName;
	        for (var i = 0; i < instances.length; i++) {
	          instance = instances[i];
	          instanceName = instance.element_.getAttribute('mdl-menu') || '';
	          if (instanceName === name) return instance;
	        }
	      }
	    };
	  }
	
	  function MaterialMenuCtrl($scope, MaterialMenuService) {
	    'ngInject';
	
	    this.items_ = [];
	
	    this.init_ = function (menuElement) {
	      this.instance_ = MaterialMenuService.create(menuElement);
	      this.items_.map(function (item) {
	        this.instance_.addItem($scope, item);
	      }.bind(this));
	    }.bind(this);
	
	    this.addItem = function (item) {
	      if (this.instance_) {
	        this.addItem($scope, item);
	      }
	      this.items_.push(item);
	    }.bind(this);
	  }
	
	  angular.module('ng-mdl').service('MaterialMenuService', MaterialMenuService).directive('mdlMenu', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      controller: MaterialMenuCtrl,
	      link: function link($scope, $element, $attrs, ctrl) {
	        ctrl.init_($element[0]);
	      }
	    };
	  }).directive('mdlMenuToggle', ["MaterialMenuService", function (MaterialMenuService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        $element.on('click', function ($event) {
	          $event.forElement_ = $element[0];
	          var name = $element[0].getAttribute('mdl-menu-toggle') || '';
	          var instance = MaterialMenuService.find(name);
	          if (instance) {
	            instance.handleForClick_.apply(instance, arguments);
	          }
	        });
	        $element.on('keydown', function ($event) {
	          $event.forElement_ = $element[0];
	          var name = $element[0].getAttribute('mdl-menu-toggle') || '';
	          var instance = MaterialMenuService.find(name);
	          if (instance) {
	            instance.handleForKeyboardEvent_.apply(instance, arguments);
	          }
	        });
	      }
	    };
	  }]).directive('mdlMenuItem', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      require: '^mdlMenu',
	      link: function link($scope, $element, $attrs, mdlMenuCtrl) {
	        mdlMenuCtrl.addItem($element[0]);
	      }
	    };
	  });
	})();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  function MaterialProgressService() {
	    'ngInject';
	
	    /**
	     * Class constructor for Progress MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	
	    function MaterialProgress($scope, element, $attrs) {
	      this.element_ = element;
	
	      // Initialize instance.
	      this.init($scope, $attrs);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialProgress.prototype.Constant_ = {};
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialProgress.prototype.CssClasses_ = {
	      PROGRESS: 'mdl-progress',
	      INDETERMINATE_CLASS: 'mdl-progress__indeterminate',
	      IS_UPGRADED: 'is-upgraded'
	    };
	
	    /**
	     * Set the current progress of the progressbar.
	     *
	     * @param {number} p Percentage of the progress (0-100)
	     * @public
	     */
	    MaterialProgress.prototype.setProgress = function (p) {
	      if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {
	        return;
	      }
	
	      this.progressbar_.style.width = p + '%';
	    };
	
	    /**
	     * Set the current progress of the buffer.
	     *
	     * @param {number} p Percentage of the buffer (0-100)
	     * @public
	     */
	    MaterialProgress.prototype.setBuffer = function (p) {
	      this.bufferbar_.style.width = p + '%';
	      this.auxbar_.style.width = 100 - p + '%';
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialProgress.prototype.init = function ($scope, $attrs) {
	
	      var el = document.createElement('div');
	      el.className = 'progressbar bar bar1';
	      this.element_.appendChild(el);
	      this.progressbar_ = el;
	
	      el = document.createElement('div');
	      el.className = 'bufferbar bar bar2';
	      this.element_.appendChild(el);
	      this.bufferbar_ = el;
	
	      el = document.createElement('div');
	      el.className = 'auxbar bar bar3';
	      this.element_.appendChild(el);
	      this.auxbar_ = el;
	
	      this.progressbar_.style.width = '0%';
	      this.bufferbar_.style.width = '100%';
	      this.auxbar_.style.width = '0%';
	
	      this.element_.classList.add(this.CssClasses_.PROGRESS);
	      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	
	      $attrs.progress && $scope.$watch($attrs.progress, this.setProgress.bind(this));
	      $attrs.buffer && $scope.$watch($attrs.buffer, this.setBuffer.bind(this));
	    };
	
	    return {
	      create: function create($scope, element, $attrs) {
	        return new MaterialProgress($scope, element, $attrs);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialProgressService', MaterialProgressService).directive('mdlProgress', ["MaterialProgressService", function (MaterialProgressService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialProgressService.create($scope, $element[0], $attrs);
	      }
	    };
	  }]);
	})();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialRadioService.$inject = ["Mdl", "MaterialRippleService"];
	  function MaterialRadioService(Mdl, MaterialRippleService) {
	    'ngInject';
	
	    var instances = [];
	
	    /**
	     * Class constructor for Radio MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	    function MaterialRadio($scope, element) {
	      this.element_ = element;
	
	      instances.push(this);
	
	      // Initialize instance.
	      this.init($scope);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialRadio.prototype.Constant_ = {
	      TINY_TIMEOUT: 0.001
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialRadio.prototype.CssClasses_ = {
	      IS_FOCUSED: 'is-focused',
	      IS_DISABLED: 'is-disabled',
	      IS_CHECKED: 'is-checked',
	      IS_UPGRADED: 'is-upgraded',
	      RADIO: 'mdl-radio',
	      RADIO_BTN: 'mdl-radio__button',
	      RADIO_OUTER_CIRCLE: 'mdl-radio__outer-circle',
	      RADIO_INNER_CIRCLE: 'mdl-radio__inner-circle',
	      RIPPLE_CONTAINER: 'mdl-radio__ripple-container'
	    };
	
	    /**
	     * Handle change of state.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialRadio.prototype.onChange_ = function (event) {
	      // Since other radio buttons don't get change events, we need to look for
	      // them to update their classes.
	      for (var i = 0; i < instances.length; i++) {
	        // Different name == different group, so no point updating those.
	        if (instances[i].btnElement_.getAttribute('mdl-radio') === this.btnElement_.getAttribute('mdl-radio')) {
	          instances[i].updateClasses_();
	        }
	      }
	    };
	
	    /**
	     * Handle focus.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialRadio.prototype.onFocus_ = function (event) {
	      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle lost focus.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialRadio.prototype.onBlur_ = function (event) {
	      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle mouseup.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialRadio.prototype.onMouseup_ = function (event) {
	      this.blur_();
	    };
	
	    /**
	     * Update classes.
	     *
	     * @private
	     */
	    MaterialRadio.prototype.updateClasses_ = function () {
	      this.checkDisabled();
	      this.checkToggleState();
	    };
	
	    /**
	     * Add blur.
	     *
	     * @private
	     */
	    MaterialRadio.prototype.blur_ = function () {
	
	      // TODO: figure out why there's a focus event being fired after our blur,
	      // so that we can avoid this hack.
	      window.setTimeout(function () {
	        this.btnElement_.blur();
	      }.bind(this), /** @type {number} */this.Constant_.TINY_TIMEOUT);
	    };
	
	    // Public methods.
	
	    /**
	     * Check the components disabled state.
	     *
	     * @public
	     */
	    MaterialRadio.prototype.checkDisabled = function () {
	      if (this.btnElement_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	      }
	    };
	
	    /**
	     * Check the components toggled state.
	     *
	     * @public
	     */
	    MaterialRadio.prototype.checkToggleState = function () {
	      if (this.btnElement_.checked) {
	        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
	      }
	    };
	
	    /**
	     * Disable radio.
	     *
	     * @public
	     */
	    MaterialRadio.prototype.disable = function () {
	      this.btnElement_.disabled = true;
	      this.updateClasses_();
	    };
	
	    /**
	     * Enable radio.
	     *
	     * @public
	     */
	    MaterialRadio.prototype.enable = function () {
	      this.btnElement_.disabled = false;
	      this.updateClasses_();
	    };
	
	    /**
	     * Check radio.
	     *
	     * @public
	     */
	    MaterialRadio.prototype.check = function () {
	      this.btnElement_.checked = true;
	      this.onChange_(null);
	    };
	
	    /**
	     * Uncheck radio.
	     *
	     * @public
	     */
	    MaterialRadio.prototype.uncheck = function () {
	      this.btnElement_.checked = false;
	      this.onChange_(null);
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialRadio.prototype.init = function ($scope) {
	      this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);
	
	      this.boundChangeHandler_ = this.onChange_.bind(this);
	      this.boundFocusHandler_ = this.onChange_.bind(this);
	      this.boundBlurHandler_ = this.onBlur_.bind(this);
	      this.boundMouseUpHandler_ = this.onMouseup_.bind(this);
	
	      var outerCircle = document.createElement('span');
	      outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
	
	      var innerCircle = document.createElement('span');
	      innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);
	
	      this.element_.appendChild(outerCircle);
	      this.element_.appendChild(innerCircle);
	
	      this.btnElement_.addEventListener('change', this.boundChangeHandler_);
	      this.btnElement_.addEventListener('focus', this.boundFocusHandler_);
	      this.btnElement_.addEventListener('blur', this.boundBlurHandler_);
	      this.element_.addEventListener('mouseup', this.boundMouseUpHandler_);
	
	      this.updateClasses_();
	      this.element_.classList.add(this.CssClasses_.RADIO);
	      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	
	      MaterialRippleService.watchIgnoreProperty($scope, this.element_, this, function (ripple) {
	        ripple.recentering = true;
	        ripple.rippleContainer_.addEventListener('mouseup', this.boundMouseUpHandler_);
	      }.bind(this));
	    };
	
	    return {
	      instances: instances,
	      create: function create($scope, element) {
	        return new MaterialRadio($scope, element);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialRadioService', MaterialRadioService).directive('mdlRadio', ["MaterialRadioService", function (MaterialRadioService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialRadioService.create($scope, $element[0]);
	      }
	    };
	  }]);
	})();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialRippleService.$inject = ["Mdl"];
	  function MaterialRippleService(Mdl) {
	    'ngInject';
	
	    /**
	     * Class constructor for Ripple MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	
	    function MaterialRipple(element, ctx) {
	      this.element_ = element;
	
	      // Initialize instance.
	      this.init(ctx);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialRipple.prototype.Constant_ = {
	      INITIAL_SCALE: 'scale(0.0001, 0.0001)',
	      INITIAL_SIZE: '1px',
	      INITIAL_OPACITY: '0.4',
	      FINAL_OPACITY: '0',
	      FINAL_SCALE: ''
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialRipple.prototype.CssClasses_ = {
	      RIPPLE: 'mdl-ripple',
	      IS_ANIMATING: 'is-animating',
	      IS_VISIBLE: 'is-visible'
	    };
	
	    /**
	     * Handle mouse / finger down on element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialRipple.prototype.downHandler_ = function (event) {
	      if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
	        var rect = this.element_.getBoundingClientRect();
	        this.boundHeight = rect.height;
	        this.boundWidth = rect.width;
	        this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
	        this.rippleElement_.style.width = this.rippleSize_ + 'px';
	        this.rippleElement_.style.height = this.rippleSize_ + 'px';
	      }
	
	      this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);
	
	      if (event.type === 'mousedown' && this.ignoringMouseDown_) {
	        this.ignoringMouseDown_ = false;
	      } else {
	        if (event.type === 'touchstart') {
	          this.ignoringMouseDown_ = true;
	        }
	        var frameCount = this.getFrameCount();
	        if (frameCount > 0) {
	          return;
	        }
	        this.setFrameCount(1);
	        var bound = event.currentTarget.getBoundingClientRect();
	        var x;
	        var y;
	        // Check if we are handling a keyboard click.
	        if (event.clientX === 0 && event.clientY === 0) {
	          x = Math.round(bound.width / 2);
	          y = Math.round(bound.height / 2);
	        } else {
	          var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
	          var clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
	          x = Math.round(clientX - bound.left);
	          y = Math.round(clientY - bound.top);
	        }
	        this.setRippleXY(x, y);
	        this.setRippleStyles(true);
	        window.requestAnimationFrame(this.animFrameHandler.bind(this));
	      }
	    };
	
	    /**
	     * Handle mouse / finger up on element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialRipple.prototype.upHandler_ = function (event) {
	      // Don't fire for the artificial "mouseup" generated by a double-click.
	      if (event && event.detail !== 2) {
	        // Allow a repaint to occur before removing this class, so the animation
	        // shows for tap events, which seem to trigger a mouseup too soon after
	        // mousedown.
	        window.setTimeout(function () {
	          this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
	        }.bind(this), 0);
	      }
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialRipple.prototype.init = function (ctx) {
	      this.rippleContainer_ = document.createElement('span');
	      this.rippleContainer_.classList.add(ctx.CssClasses_.RIPPLE_CONTAINER);
	      this.rippleElement_ = document.createElement('span');
	      this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
	      this.rippleContainer_.appendChild(this.rippleElement_);
	      this.element_.appendChild(this.rippleContainer_);
	
	      this.frameCount_ = 0;
	      this.rippleSize_ = 0;
	      this.x_ = 0;
	      this.y_ = 0;
	
	      // Touch start produces a compat mouse down event, which would cause a
	      // second ripples. To avoid that, we use this property to ignore the first
	      // mouse down after a touch start.
	      this.ignoringMouseDown_ = false;
	
	      this.boundDownHandler = this.downHandler_.bind(this);
	      this.element_.addEventListener('mousedown', this.boundDownHandler);
	      this.element_.addEventListener('touchstart', this.boundDownHandler);
	
	      this.boundUpHandler = this.upHandler_.bind(this);
	      this.element_.addEventListener('mouseup', this.boundUpHandler);
	      this.element_.addEventListener('mouseleave', this.boundUpHandler);
	      this.element_.addEventListener('touchend', this.boundUpHandler);
	      this.element_.addEventListener('blur', this.boundUpHandler);
	
	      /**
	       * Getter for frameCount_.
	       * @return {number} the frame count.
	       */
	      this.getFrameCount = function () {
	        return this.frameCount_;
	      };
	
	      /**
	       * Setter for frameCount_.
	       * @param {number} fC the frame count.
	       */
	      this.setFrameCount = function (fC) {
	        this.frameCount_ = fC;
	      };
	
	      /**
	       * Getter for rippleElement_.
	       * @return {Element} the ripple element.
	       */
	      this.getRippleElement = function () {
	        return this.rippleElement_;
	      };
	
	      /**
	       * Sets the ripple X and Y coordinates.
	       * @param  {number} newX the new X coordinate
	       * @param  {number} newY the new Y coordinate
	       */
	      this.setRippleXY = function (newX, newY) {
	        this.x_ = newX;
	        this.y_ = newY;
	      };
	
	      /**
	       * Sets the ripple styles.
	       * @param  {boolean} start whether or not this is the start frame.
	       */
	      this.setRippleStyles = function (start) {
	        var transformString;
	        var scale;
	        var size;
	        var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
	
	        if (start) {
	          scale = this.Constant_.INITIAL_SCALE;
	          size = this.Constant_.INITIAL_SIZE;
	        } else {
	          scale = this.Constant_.FINAL_SCALE;
	          size = this.rippleSize_ + 'px';
	          if (this.recentering) {
	            offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
	          }
	        }
	
	        transformString = 'translate(-50%, -50%) ' + offset + scale;
	
	        this.rippleElement_.style.webkitTransform = transformString;
	        this.rippleElement_.style.msTransform = transformString;
	        this.rippleElement_.style.transform = transformString;
	
	        Mdl.ifClass(this.rippleElement_, !start, this.CssClasses_.IS_ANIMATING);
	      };
	
	      /**
	       * Handles an animation frame.
	       */
	      this.animFrameHandler = function () {
	        if (this.frameCount_-- > 0) {
	          window.requestAnimationFrame(this.animFrameHandler.bind(this));
	        } else {
	          this.setRippleStyles(false);
	        }
	      };
	    };
	
	    var MaterialRippleService;
	
	    return MaterialRippleService = {
	      addRippleEffect: function addRippleEffect(element, ctx) {
	        return new MaterialRipple(element, ctx);
	      },
	      removeRippleEffect: function removeRippleEffect(element, ctx) {
	        for (var i in parent.childNodes) {
	          var sw = parent.childNodes[i].classList && parent.childNodes[i].classList.contains(ctx.CssClasses_.RIPPLE_CONTAINER);
	          if (!sw) continue;
	          parent.removeChild(parent.childNodes[i]);
	        }
	      },
	      watchIgnoreProperty: function watchIgnoreProperty($scope, element, ctx, created) {
	        var ignoreRippleEffectAttribute = element.getAttribute('ignore-ripple-effect');
	        $scope.$watch(ignoreRippleEffectAttribute, function () {
	          var ignoreRippleEffectAttribute = element.getAttribute('ignore-ripple-effect');
	          var ignoreRippleEffect = ignoreRippleEffectAttribute === '' || $scope.$eval(ignoreRippleEffectAttribute);
	          if (!ignoreRippleEffect) {
	            var ripple = MaterialRippleService.addRippleEffect(element, ctx);
	            created && created(ripple);
	          } else {
	            MaterialRippleService.removeRippleEffect(element, ctx);
	          }
	        });
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialRippleService', MaterialRippleService);
	})();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  function MaterialSpinnerService() {
	    'ngInject';
	
	    /**
	     * Class constructor for Spinner MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @param {HTMLElement} element The element that will be upgraded.
	     * @constructor
	     */
	
	    function MaterialSpinner(element) {
	      this.element_ = element;
	
	      // Initialize instance.
	      this.init();
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialSpinner.prototype.Constant_ = {
	      MDL_SPINNER_LAYER_COUNT: 4
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialSpinner.prototype.CssClasses_ = {
	      SPINNER: 'mdl-spinner',
	      MDL_SPINNER_LAYER: 'mdl-spinner__layer',
	      MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
	      MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',
	      MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',
	      MDL_SPINNER_LEFT: 'mdl-spinner__left',
	      MDL_SPINNER_RIGHT: 'mdl-spinner__right',
	      IS_UPGRADED: 'is-upgraded'
	    };
	
	    /**
	     * Auxiliary method to create a spinner layer.
	     *
	     * @param {number} index Index of the layer to be created.
	     * @public
	     */
	    MaterialSpinner.prototype.createLayer = function (index) {
	      var layer = document.createElement('div');
	      layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
	      layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);
	
	      var leftClipper = document.createElement('div');
	      leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
	      leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
	
	      var gapPatch = document.createElement('div');
	      gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
	
	      var rightClipper = document.createElement('div');
	      rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
	      rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
	
	      var circleOwners = [leftClipper, gapPatch, rightClipper];
	
	      for (var i = 0; i < circleOwners.length; i++) {
	        var circle = document.createElement('div');
	        circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
	        circleOwners[i].appendChild(circle);
	      }
	
	      layer.appendChild(leftClipper);
	      layer.appendChild(gapPatch);
	      layer.appendChild(rightClipper);
	
	      this.element_.appendChild(layer);
	    };
	
	    /**
	     * Stops the spinner animation.
	     * Public method for users who need to stop the spinner for any reason.
	     *
	     * @public
	     */
	    MaterialSpinner.prototype.stop = function () {
	      this.element_.classList.remove('is-active');
	    };
	
	    /**
	     * Starts the spinner animation.
	     * Public method for users who need to manually start the spinner for any reason
	     * (instead of just adding the 'is-active' class to their markup).
	     *
	     * @public
	     */
	    MaterialSpinner.prototype.start = function () {
	      this.element_.classList.add('is-active');
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialSpinner.prototype.init = function () {
	      for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
	        this.createLayer(i);
	      }
	      this.element_.classList.add(this.CssClasses_.SPINNER);
	      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	    };
	
	    return {
	      create: function create(element) {
	        return new MaterialSpinner(element);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialSpinnerService', MaterialSpinnerService).directive('mdlSpinner', ["MaterialSpinnerService", function (MaterialSpinnerService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialSpinnerService.create($element[0]);
	      }
	    };
	  }]);
	})();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialSwitchService.$inject = ["Mdl", "MaterialRippleService"];
	  function MaterialSwitchService(Mdl, MaterialRippleService) {
	    'ngInject';
	
	    /**
	     * Class constructor for Checkbox MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	
	    function MaterialSwitch($scope, element) {
	      this.element_ = element;
	
	      // Initialize instance.
	      this.init($scope);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialSwitch.prototype.Constant_ = {
	      TINY_TIMEOUT: 0.001
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialSwitch.prototype.CssClasses_ = {
	      SWITCH: 'mdl-switch',
	      INPUT: 'mdl-switch__input',
	      TRACK: 'mdl-switch__track',
	      THUMB: 'mdl-switch__thumb',
	      FOCUS_HELPER: 'mdl-switch__focus-helper',
	      RIPPLE_CONTAINER: 'mdl-switch__ripple-container',
	      IS_FOCUSED: 'is-focused',
	      IS_DISABLED: 'is-disabled',
	      IS_CHECKED: 'is-checked',
	      IS_UPGRADED: 'is-upgraded'
	    };
	
	    /**
	     * Handle change of state.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialSwitch.prototype.onChange_ = function (event) {
	      this.updateClasses_();
	    };
	
	    /**
	     * Handle focus of element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialSwitch.prototype.onFocus_ = function (event) {
	      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle lost focus of element.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialSwitch.prototype.onBlur_ = function (event) {
	      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle mouseup.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialSwitch.prototype.onMouseUp_ = function (event) {
	      this.blur_();
	    };
	
	    /**
	     * Handle class updates.
	     *
	     * @private
	     */
	    MaterialSwitch.prototype.updateClasses_ = function () {
	      this.checkDisabled();
	      this.checkToggleState();
	    };
	
	    /**
	     * Add blur.
	     *
	     * @private
	     */
	    MaterialSwitch.prototype.blur_ = function () {
	      // TODO: figure out why there's a focus event being fired after our blur,
	      // so that we can avoid this hack.
	      window.setTimeout(function () {
	        this.inputElement_.blur();
	      }.bind(this), /** @type {number} */this.Constant_.TINY_TIMEOUT);
	    };
	
	    // Public methods.
	
	    /**
	     * Check the components disabled state.
	     *
	     * @public
	     */
	    MaterialSwitch.prototype.checkDisabled = function () {
	      if (this.inputElement_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	      }
	    };
	
	    /**
	     * Check the components toggled state.
	     *
	     * @public
	     */
	    MaterialSwitch.prototype.checkToggleState = function () {
	      if (this.inputElement_.checked) {
	        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
	      }
	    };
	
	    /**
	     * Disable switch.
	     *
	     * @public
	     */
	    MaterialSwitch.prototype.disable = function () {
	      this.inputElement_.disabled = true;
	      this.updateClasses_();
	    };
	
	    /**
	     * Enable switch.
	     *
	     * @public
	     */
	    MaterialSwitch.prototype.enable = function () {
	      this.inputElement_.disabled = false;
	      this.updateClasses_();
	    };
	
	    /**
	     * Activate switch.
	     *
	     * @public
	     */
	    MaterialSwitch.prototype.on = function () {
	      this.inputElement_.checked = true;
	      this.updateClasses_();
	    };
	
	    /**
	     * Deactivate switch.
	     *
	     * @public
	     */
	    MaterialSwitch.prototype.off = function () {
	      this.inputElement_.checked = false;
	      this.updateClasses_();
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialSwitch.prototype.init = function ($scope) {
	      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
	
	      var track = document.createElement('div');
	      track.classList.add(this.CssClasses_.TRACK);
	
	      var thumb = document.createElement('div');
	      thumb.classList.add(this.CssClasses_.THUMB);
	
	      var focusHelper = document.createElement('span');
	      focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);
	
	      thumb.appendChild(focusHelper);
	
	      this.element_.appendChild(track);
	      this.element_.appendChild(thumb);
	
	      this.boundMouseUpHandler = this.onMouseUp_.bind(this);
	      this.boundChangeHandler = this.onChange_.bind(this);
	      this.boundFocusHandler = this.onFocus_.bind(this);
	      this.boundBlurHandler = this.onBlur_.bind(this);
	
	      this.inputElement_.addEventListener('change', this.boundChangeHandler);
	      this.inputElement_.addEventListener('focus', this.boundFocusHandler);
	      this.inputElement_.addEventListener('blur', this.boundBlurHandler);
	      this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
	
	      this.updateClasses_();
	      this.element_.classList.add(this.CssClasses_.SWITCH);
	      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	
	      MaterialRippleService.watchIgnoreProperty($scope, this.element_, this, function (ripple) {
	        ripple.recentering = true;
	        ripple.rippleContainer_.addEventListener('mouseup', this.boundMouseUpHandler);
	      }.bind(this));
	    };
	
	    return {
	      create: function create($scope, element) {
	        return new MaterialSwitch($scope, element);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialSwitchService', MaterialSwitchService).directive('mdlSwitch', ["MaterialSwitchService", function (MaterialSwitchService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialSwitchService.create($scope, $element[0]);
	      }
	    };
	  }]);
	})();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialSelectableTable.$inject = ["Mdl", "MaterialCheckboxService"];
	  MdlTableSelectableCtrl.$inject = ["$scope", "Mdl", "MaterialSelectableTable"];
	  function MaterialSelectableTable(Mdl, MaterialCheckboxService) {
	    'ngInject';
	
	    /**
	     * Class constructor for Data Table Card MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {Element} element The element that will be upgraded.
	     */
	
	    function MaterialSelectableTable($scope, element, rows) {
	      this.element_ = element;
	
	      // Initialize instance.
	      this.init($scope, rows);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialSelectableTable.prototype.Constant_ = {
	      // None at the moment.
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialSelectableTable.prototype.CssClasses_ = {
	      DATA_TABLE: 'mdl-data-table',
	      SELECTABLE: 'mdl-data-table--selectable',
	      SELECT_ELEMENT: 'mdl-data-table__select',
	      IS_SELECTED: 'is-selected',
	      IS_UPGRADED: 'is-upgraded'
	    };
	
	    /**
	     * Generates and returns a function that toggles the selection state of a
	     * single row (or multiple rows).
	     *
	     * @param {Element} checkbox Checkbox that toggles the selection state.
	     * @param {Element} row Row to toggle when checkbox changes.
	     * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
	     * @private
	     */
	    MaterialSelectableTable.prototype.selectRow_ = function (checkbox, rows, multiple) {
	      return function () {
	        var el;
	        rows.map(function (row) {
	          Mdl.ifClass(row, checkbox.checked, this.CssClasses_.IS_SELECTED);
	          if (!multiple) return;
	          el = row.querySelector('td').querySelector('.mdl-checkbox');
	          el.MaterialCheckbox[checkbox.checked ? 'check' : 'uncheck']();
	        }.bind(this));
	      }.bind(this);
	    };
	
	    /**
	     * Creates a checkbox for a single or or multiple rows and hooks up the
	     * event handling.
	     *
	     * @param {Element} row Row to toggle when checkbox changes.
	     * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
	     * @private
	     */
	    MaterialSelectableTable.prototype.createCheckbox_ = function ($scope, row, rows) {
	      var label = document.createElement('label');
	      var labelClasses = ['mdl-checkbox', this.CssClasses_.SELECT_ELEMENT];
	      label.className = labelClasses.join(' ');
	      var checkbox = document.createElement('input');
	      checkbox.type = 'checkbox';
	      checkbox.classList.add('mdl-checkbox__input');
	
	      var localRows = row ? [row] : rows;
	      if (row) {
	        checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);
	      }
	      checkbox.addEventListener('change', this.selectRow_(checkbox, localRows, !row));
	      label.appendChild(checkbox);
	      label.MaterialCheckbox = MaterialCheckboxService.create($scope, label);
	      return label;
	    };
	
	    MaterialSelectableTable.prototype.addRow = function ($scope, row) {
	      var firstCell = row.querySelector('td');
	      if (firstCell) {
	        var td = document.createElement('td');
	        if (row.parentNode.nodeName.toUpperCase() === 'TBODY') {
	          var rowCheckbox = this.createCheckbox_($scope, row);
	          td.appendChild(rowCheckbox);
	        }
	        row.insertBefore(td, firstCell);
	      }
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialSelectableTable.prototype.init = function ($scope, rows) {
	      var firstHeader = this.element_.querySelector('th');
	      var th = document.createElement('th');
	      var headerCheckbox = this.createCheckbox_($scope, null, rows);
	      th.appendChild(headerCheckbox);
	      firstHeader.parentElement.insertBefore(th, firstHeader);
	      this.element_.classList.add(this.CssClasses_.SELECTABLE);
	      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	    };
	
	    return {
	      create: function create($scope, element, rows) {
	        return new MaterialSelectableTable($scope, element, rows);
	      }
	    };
	  }
	
	  function MdlTableSelectableCtrl($scope, Mdl, MaterialSelectableTable) {
	    'ngInject';
	
	    var rows = [];
	
	    this.addRow = function (row) {
	      if (this.instance_) {
	        this.instance_.addRow($scope, row);
	      }
	      rows.push(row);
	    }.bind(this);
	
	    this.init_ = function (element) {
	      // Create instance of tabs
	      this.instance_ = MaterialSelectableTable.create($scope, element, rows);
	      rows.map(function (row) {
	        this.instance_.addRow($scope, row);
	      }.bind(this));
	    }.bind(this);
	  }
	
	  angular.module('ng-mdl').service('MaterialSelectableTable', MaterialSelectableTable).directive('mdlTableSelectable', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      controller: MdlTableSelectableCtrl,
	      link: function link($scope, $element, $attrs, mdlTableSelectableCtrl) {
	        mdlTableSelectableCtrl.init_($element[0]);
	      }
	    };
	  }).directive('mdlTableSelectableItem', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      require: '^mdlTableSelectable',
	      link: function link($scope, $element, $attrs, mdlTableSelectableCtrl) {
	        mdlTableSelectableCtrl.addRow($element[0]);
	      }
	    };
	  });
	})();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialTabsService.$inject = ["Mdl", "MaterialRippleService"];
	  MaterialTabsCtrl.$inject = ["$scope", "MaterialTabsService"];
	  function MaterialTabsService(Mdl, MaterialRippleService) {
	    'ngInject';
	
	    /**
	     * Class constructor for Tabs MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {Element} element The element that will be upgraded.
	     */
	
	    function MaterialTabs(element, inLayout) {
	      // Stores the HTML element.
	      this.element_ = element;
	      this.inLayout = inLayout;
	
	      // Initialize instance.
	      this.init();
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialTabs.prototype.Constant_ = {
	      RESIZE_TIMEOUT: 100,
	      TAB_SCROLL_PIXELS: 100,
	      CHEVRON_LEFT: 'chevron_left',
	      CHEVRON_RIGHT: 'chevron_right',
	      TAB_NAME_ATTR_NAME: 'mdl-tab',
	      PANEL_NAME_ATTR_NAME: 'mdl-tab-panel'
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialTabs.prototype.CssClasses_ = {};
	
	    MaterialTabs.CssClasses_ = {
	      NORMAL: {
	        TAB_BAR_CLASS: 'mdl-tabs__tab-bar',
	        TAB_CLASS: 'mdl-tabs__tab',
	        TABS_CLASS: 'mdl-tabs',
	        PANEL_CLASS: 'mdl-tabs__panel',
	        RIPPLE_CONTAINER: 'mdl-tabs__ripple-container'
	      },
	      LAYOUT: {
	        TAB_BAR_CLASS: 'mdl-layout__tab-bar',
	        TAB_CLASS: 'mdl-layout__tab',
	        TABS_CLASS: 'mdl-layout__tab-bar-container',
	        PANEL_CLASS: 'mdl-layout__tab-panel',
	        RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
	
	        ICON_CLASS: 'material-icons',
	        LAYOUT_TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',
	        LAYOUT_TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',
	        LAYOUT_TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button'
	      },
	      GLOBAL: {
	        ACTIVE_CLASS: 'is-active',
	        UPGRADED_CLASS: 'is-upgraded'
	      }
	    };
	
	    MaterialTabs.prototype.getPanelByName = function (panelName, panels) {
	      for (var i in panels) {
	        if (panelName === panels[i].getAttribute(this.Constant_.PANEL_NAME_ATTR_NAME)) {
	          return panels[i];
	        }
	      }
	    };
	
	    MaterialTabs.prototype.addTab = function ($scope, tab, panels) {
	      tab.classList.add(this.CssClasses_.TAB_CLASS);
	      MaterialRippleService.watchIgnoreProperty($scope, tab, this);
	      $scope.$on('$material.tabs.tab.selected', function ($event, o) {
	        Mdl.ifClass(tab, tab === o.tab, this.CssClasses_.ACTIVE_CLASS);
	      }.bind(this));
	      tab.addEventListener('click', function (e) {
	        var panelName = tab.getAttribute(this.Constant_.TAB_NAME_ATTR_NAME);
	        var panel = this.getPanelByName(panelName, panels);
	        $scope.$emit('$material.tabs.tab.selected', {
	          tab: tab,
	          panel: panel
	        });
	        panel && e.preventDefault();
	      }.bind(this));
	      this.tabBar_.appendChild(tab);
	    };
	
	    MaterialTabs.prototype.addPanel = function ($scope, panel) {
	      panel.classList.add(this.CssClasses_.PANEL_CLASS);
	      $scope.$on('$material.tabs.tab.selected', function ($event, o) {
	        Mdl.ifClass(panel, panel === o.panel, this.CssClasses_.ACTIVE_CLASS);
	      }.bind(this));
	      if (this.layoutCtrl_ && this.layoutCtrl_.content_) {
	        this.layoutCtrl_.content_.appendChild(panel);
	      }
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialTabs.prototype.init = function () {
	      var classesCtx = this.inLayout ? MaterialTabs.CssClasses_.LAYOUT : MaterialTabs.CssClasses_.NORMAL;
	      this.CssClasses_ = angular.extend({}, MaterialTabs.CssClasses_.GLOBAL, classesCtx);
	      this.tabBar_ = document.createElement('div');
	      this.tabBar_.classList.add(this.CssClasses_.TAB_BAR_CLASS);
	      this.element_.insertBefore(this.tabBar_, this.element_.childNodes[0]);
	      this.element_.classList.add(this.CssClasses_.TABS_CLASS);
	      this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);
	      // this.initTabs_();
	    };
	
	    MaterialTabs.prototype.initLayout = function (layoutCtrl, panels) {
	      this.layoutCtrl_ = layoutCtrl;
	      var leftButton = document.createElement('div');
	      leftButton.classList.add(this.CssClasses_.LAYOUT_TAB_BAR_BUTTON);
	      leftButton.classList.add(this.CssClasses_.LAYOUT_TAB_BAR_LEFT_BUTTON);
	      var leftButtonIcon = document.createElement('i');
	      leftButtonIcon.classList.add(this.CssClasses_.ICON_CLASS);
	      leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;
	      leftButton.appendChild(leftButtonIcon);
	      leftButton.addEventListener('click', function () {
	        this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;
	      }.bind(this));
	      var rightButton = document.createElement('div');
	      rightButton.classList.add(this.CssClasses_.LAYOUT_TAB_BAR_BUTTON);
	      rightButton.classList.add(this.CssClasses_.LAYOUT_TAB_BAR_RIGHT_BUTTON);
	      var rightButtonIcon = document.createElement('i');
	      rightButtonIcon.classList.add(this.CssClasses_.ICON_CLASS);
	      rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;
	      rightButton.appendChild(rightButtonIcon);
	      rightButton.addEventListener('click', function () {
	        this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;
	      }.bind(this));
	      this.element_.insertBefore(leftButton, this.element_.childNodes[0]);
	      this.element_.appendChild(rightButton);
	      // Add and remove tab buttons depending on scroll position and total
	      // window size.
	      var tabUpdateHandler = function () {
	        var showLeft = this.tabBar_.scrollLeft > 0;
	        var showRight = this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth;
	        Mdl.ifClass(leftButton, showLeft, this.CssClasses_.ACTIVE_CLASS);
	        Mdl.ifClass(rightButton, showRight, this.CssClasses_.ACTIVE_CLASS);
	      }.bind(this);
	      this.tabBar_.addEventListener('scroll', tabUpdateHandler);
	      tabUpdateHandler();
	      window.tabUpdateHandler = tabUpdateHandler;
	      // Update tabs when the window resizes.
	      var windowResizeHandler = function () {
	        // Use timeouts to make sure it doesn't happen too often.
	        this.resizeTimeoutId_ && clearTimeout(this.resizeTimeoutId_);
	        this.resizeTimeoutId_ = setTimeout(function () {
	          tabUpdateHandler();
	          this.resizeTimeoutId_ = null;
	        }.bind(this), this.Constant_.RESIZE_TIMEOUT);
	      }.bind(this);
	      window.addEventListener('resize', windowResizeHandler);
	      if (this.layoutCtrl_.content_) {
	        panels.map(function (panel) {
	          this.layoutCtrl_.content_.appendChild(panel);
	        }.bind(this));
	      }
	    };
	
	    return {
	      create: function create(element, inLayout) {
	        return new MaterialTabs(element, inLayout);
	      }
	    };
	  }
	
	  function MaterialTabsCtrl($scope, MaterialTabsService) {
	    'ngInject';
	
	    var tabs = [];
	    var panels = [];
	
	    // Add tab if exists instance of tabs
	    this.addTab = function (tab) {
	      if (this.instance_) {
	        this.instance_.addTab($scope, tab, panels);
	      }
	      tabs.push(tab);
	    }.bind(this);
	
	    // Add panel if exists instance of tabs
	    this.addPanel = function (panel) {
	      if (this.instance_) {
	        this.instance_.addPanel($scope, panel);
	      }
	      panels.push(panel);
	    }.bind(this);
	
	    this.init_ = function (tabsElement) {
	      // Create instance of tabs
	      this.instance_ = MaterialTabsService.create(tabsElement, !!$scope.mdlLayoutTabs);
	      // Add tabs
	      tabs.map(function (tab) {
	        this.instance_.addTab($scope, tab, panels);
	      }.bind(this));
	      // Add panels
	      panels.map(function (panel) {
	        this.instance_.addPanel($scope, panel);
	      }.bind(this));
	    }.bind(this);
	
	    this.initLayout_ = function (layoutCtrl) {
	      this.instance_.initLayout(layoutCtrl, panels);
	    }.bind(this);
	  }
	
	  angular.module('ng-mdl').service('MaterialTabsService', MaterialTabsService).directive('mdlTabs', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      scope: {
	        mdlLayoutTabs: '='
	      },
	      controller: MaterialTabsCtrl,
	      link: function link($scope, $element, $attrs, ctrl) {
	        ctrl.init_($element[0]);
	      }
	    };
	  }).directive('mdlTab', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      require: '^mdlTabs',
	      link: function link($scope, $element, $attrs, mdlTabsCtrl) {
	        mdlTabsCtrl.addTab($element[0]);
	      }
	    };
	  }).directive('mdlTabPanel', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      require: '^mdlTabs',
	      link: function link($scope, $element, $attrs, mdlTabsCtrl) {
	        mdlTabsCtrl.addPanel($element[0]);
	      }
	    };
	  }).directive('mdlLayoutTabs', function () {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      require: {
	        tabs: '^mdlTabs',
	        layout: '^mdlLayout'
	      },
	      link: function link($scope, $element, $attrs, ctrls) {
	        ctrls.layout.setTabs(ctrls.tabs, $element[0]);
	      }
	    };
	  });
	})();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialTextfieldService.$inject = ["Mdl"];
	  function MaterialTextfieldService(Mdl) {
	    'ngInject';
	
	    /**
	     * Class constructor for Textfield MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	
	    function MaterialTextfield(element) {
	      this.element_ = element;
	      this.maxRows = this.Constant_.NO_MAX_ROWS;
	      // Initialize instance.
	      this.init();
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialTextfield.prototype.Constant_ = {
	      NO_MAX_ROWS: -1,
	      MAX_ROWS_ATTRIBUTE: 'maxrows'
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialTextfield.prototype.CssClasses_ = {
	      TEXTFIELD: 'mdl-textfield',
	      LABEL: 'mdl-textfield__label',
	      INPUT: 'mdl-textfield__input',
	      IS_DIRTY: 'is-dirty',
	      IS_FOCUSED: 'is-focused',
	      IS_DISABLED: 'is-disabled',
	      IS_INVALID: 'is-invalid',
	      IS_UPGRADED: 'is-upgraded',
	      HAS_PLACEHOLDER: 'has-placeholder'
	    };
	
	    /**
	     * Handle input being entered.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialTextfield.prototype.onKeyDown_ = function (event) {
	      var currentRowCount = event.target.value.split('\n').length;
	      if (event.keyCode === 13) {
	        if (currentRowCount >= this.maxRows) {
	          event.preventDefault();
	        }
	      }
	    };
	
	    /**
	     * Handle focus.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialTextfield.prototype.onFocus_ = function (event) {
	      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle lost focus.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialTextfield.prototype.onBlur_ = function (event) {
	      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	    };
	
	    /**
	     * Handle reset event from out side.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialTextfield.prototype.onReset_ = function (event) {
	      this.updateClasses_();
	    };
	
	    /**
	     * Handle class updates.
	     *
	     * @private
	     */
	    MaterialTextfield.prototype.updateClasses_ = function () {
	      this.checkDisabled();
	      this.checkValidity();
	      this.checkDirty();
	      this.checkFocus();
	    };
	
	    // Public methods.
	
	    /**
	     * Check the disabled state and update field accordingly.
	     *
	     * @public
	     */
	    MaterialTextfield.prototype.checkDisabled = function () {
	      if (this.input_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	      }
	    };
	
	    /**
	     * Check the focus state and update field accordingly.
	     *
	     * @public
	     */
	    MaterialTextfield.prototype.checkFocus = function () {
	      if (Boolean(this.element_.querySelector(':focus'))) {
	        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	      }
	    };
	
	    /**
	     * Check the validity state and update field accordingly.
	     *
	     * @public
	     */
	    MaterialTextfield.prototype.checkValidity = function () {
	      if (this.input_.validity) {
	        if (this.input_.validity.valid) {
	          this.element_.classList.remove(this.CssClasses_.IS_INVALID);
	        } else {
	          this.element_.classList.add(this.CssClasses_.IS_INVALID);
	        }
	      }
	    };
	
	    /**
	     * Check the dirty state and update field accordingly.
	     *
	     * @public
	     */
	    MaterialTextfield.prototype.checkDirty = function () {
	      if (this.input_.value && this.input_.value.length > 0) {
	        this.element_.classList.add(this.CssClasses_.IS_DIRTY);
	      } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
	      }
	    };
	
	    /**
	     * Disable text field.
	     *
	     * @public
	     */
	    MaterialTextfield.prototype.disable = function () {
	      this.input_.disabled = true;
	      this.updateClasses_();
	    };
	
	    /**
	     * Enable text field.
	     *
	     * @public
	     */
	    MaterialTextfield.prototype.enable = function () {
	      this.input_.disabled = false;
	      this.updateClasses_();
	    };
	
	    /**
	     * Update text field value.
	     *
	     * @param {string} value The value to which to set the control (optional).
	     * @public
	     */
	    MaterialTextfield.prototype.change = function (value) {
	
	      this.input_.value = value || '';
	      this.updateClasses_();
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialTextfield.prototype.init = function () {
	
	      this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
	      this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
	
	      if (this.input_.hasAttribute(
	      /** @type {string} */this.Constant_.MAX_ROWS_ATTRIBUTE)) {
	        this.maxRows = parseInt(this.input_.getAttribute(
	        /** @type {string} */this.Constant_.MAX_ROWS_ATTRIBUTE), 10);
	        if (isNaN(this.maxRows)) {
	          this.maxRows = this.Constant_.NO_MAX_ROWS;
	        }
	      }
	
	      if (this.input_.hasAttribute('placeholder')) {
	        this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);
	      }
	
	      this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
	      this.boundFocusHandler = this.onFocus_.bind(this);
	      this.boundBlurHandler = this.onBlur_.bind(this);
	      this.boundResetHandler = this.onReset_.bind(this);
	      this.input_.addEventListener('input', this.boundUpdateClassesHandler);
	      this.input_.addEventListener('focus', this.boundFocusHandler);
	      this.input_.addEventListener('blur', this.boundBlurHandler);
	      this.input_.addEventListener('reset', this.boundResetHandler);
	
	      if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
	        // TODO: This should handle pasting multi line text.
	        // Currently doesn't.
	        this.boundKeyDownHandler = this.onKeyDown_.bind(this);
	        this.input_.addEventListener('keydown', this.boundKeyDownHandler);
	      }
	      var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
	      this.updateClasses_();
	      this.element_.classList.add(this.CssClasses_.TEXTFIELD);
	      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	      if (invalid) {
	        this.element_.classList.add(this.CssClasses_.IS_INVALID);
	      }
	      if (this.input_.hasAttribute('autofocus')) {
	        this.element_.focus();
	        this.checkFocus();
	      }
	    };
	
	    return {
	      create: function create(element) {
	        return new MaterialTextfield(element);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialTextfieldService', MaterialTextfieldService).directive('mdlTextfield', ["MaterialTextfieldService", function (MaterialTextfieldService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialTextfieldService.create($element[0]);
	      }
	    };
	  }]);
	})();

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  'use strict';
	
	  MaterialTooltipService.$inject = ["Mdl"];
	  function MaterialTooltipService(Mdl) {
	    'ngInject';
	
	    var instances = [];
	
	    /**
	     * Class constructor for Tooltip MDL component.
	     * Implements MDL component design pattern defined at:
	     * https://github.com/jasonmayes/mdl-component-design-pattern
	     *
	     * @constructor
	     * @param {HTMLElement} element The element that will be upgraded.
	     */
	    function MaterialTooltip($scope, element) {
	      this.element_ = element;
	
	      instances.push(this);
	
	      // Initialize instance.
	      this.init($scope);
	    };
	
	    /**
	     * Store constants in one place so they can be updated easily.
	     *
	     * @enum {string | number}
	     * @private
	     */
	    MaterialTooltip.prototype.Constant_ = {
	      // None for now.
	    };
	
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    MaterialTooltip.prototype.CssClasses_ = {
	      TOOLTIP: 'mdl-tooltip',
	      BOTTOM: 'mdl-tooltip--bottom',
	      LEFT: 'mdl-tooltip--left',
	      RIGHT: 'mdl-tooltip--right',
	      TOP: 'mdl-tooltip--top',
	      IS_ACTIVE: 'is-active'
	    };
	
	    /**
	     * Handle mouseenter for tooltip.
	     *
	     * @param {Event} event The event that fired.
	     * @private
	     */
	    MaterialTooltip.prototype.handleMouseEnter_ = function (event) {
	      var props = event.target.getBoundingClientRect();
	      var left = props.left + props.width / 2;
	      var top = props.top + props.height / 2;
	      var marginLeft = -1 * (this.element_.offsetWidth / 2);
	      var marginTop = -1 * (this.element_.offsetHeight / 2);
	
	      if (this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT)) {
	        left = props.width / 2;
	        if (top + marginTop < 0) {
	          this.element_.style.top = '0';
	          this.element_.style.marginTop = '0';
	        } else {
	          this.element_.style.top = top + 'px';
	          this.element_.style.marginTop = marginTop + 'px';
	        }
	      } else {
	        if (left + marginLeft < 0) {
	          this.element_.style.left = '0';
	          this.element_.style.marginLeft = '0';
	        } else {
	          this.element_.style.left = left + 'px';
	          this.element_.style.marginLeft = marginLeft + 'px';
	        }
	      }
	
	      if (this.element_.classList.contains(this.CssClasses_.TOP)) {
	        this.element_.style.top = props.top - this.element_.offsetHeight - 10 + 'px';
	      } else if (this.element_.classList.contains(this.CssClasses_.RIGHT)) {
	        this.element_.style.left = props.left + props.width + 10 + 'px';
	      } else if (this.element_.classList.contains(this.CssClasses_.LEFT)) {
	        this.element_.style.left = props.left - this.element_.offsetWidth - 10 + 'px';
	      } else {
	        this.element_.style.top = props.top + props.height + 10 + 'px';
	      }
	
	      this.element_.classList.add(this.CssClasses_.IS_ACTIVE);
	    };
	
	    /**
	     * Hide tooltip on mouseleave or scroll
	     *
	     * @private
	     */
	    MaterialTooltip.prototype.hideTooltip_ = function () {
	      this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);
	    };
	
	    /**
	     * Initialize element.
	     */
	    MaterialTooltip.prototype.init = function ($scope) {
	
	      // var forElId = this.element_.getAttribute('mdl-tooltip');
	
	      // if (forElId) {
	      //   this.forElement_ = document.getElementById(forElId);
	      // }
	
	      // if (this.forElement_) {
	      //   // It's left here because it prevents accidental text selection on Android
	      //   if (!this.forElement_.hasAttribute('tabindex')) {
	      //     this.forElement_.setAttribute('tabindex', '0');
	      //   }
	
	      //   this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
	      //   this.boundMouseLeaveAndScrollHandler = this.hideTooltip_.bind(this);
	      //   this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler, false);
	      //   this.forElement_.addEventListener('touchend', this.boundMouseEnterHandler, false);
	      //   this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveAndScrollHandler, false);
	      //   window.addEventListener('scroll', this.boundMouseLeaveAndScrollHandler, true);
	      //   window.addEventListener('touchstart', this.boundMouseLeaveAndScrollHandler);
	      // }
	
	      this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
	      this.boundMouseLeaveAndScrollHandler = this.hideTooltip_.bind(this);
	      this.element_.classList.add(this.CssClasses_.TOOLTIP);
	    };
	
	    var MaterialTooltipService;
	    return MaterialTooltipService = {
	      instances: instances,
	      create: function create($scope, element) {
	        return new MaterialTooltip($scope, element);
	      },
	      find: function find(name) {
	        var instance, instanceName;
	        for (var i = 0; i < instances.length; i++) {
	          instance = instances[i];
	          instanceName = instance.element_.getAttribute('mdl-tooltip') || '';
	          if (instanceName === name) return instance;
	        }
	      },
	      createTrigger: function createTrigger(element) {
	
	        // It's left here because it prevents accidental text selection on Android
	        if (!element.hasAttribute('tabindex')) {
	          element.setAttribute('tabindex', '0');
	        }
	
	        function handlerBuilder(methodName) {
	          return function () {
	            var name = element.getAttribute('mdl-tooltip-target') || '';
	            var instance = MaterialTooltipService.find(name);
	            if (instance && instance[methodName]) {
	              instance[methodName].apply(instance, arguments);
	            }
	          };
	        }
	
	        element.addEventListener('mouseenter', handlerBuilder('handleMouseEnter_'), false);
	        element.addEventListener('touchend', handlerBuilder('handleMouseEnter_'), false);
	        element.addEventListener('mouseleave', handlerBuilder('hideTooltip_'), false);
	        window.addEventListener('scroll', handlerBuilder('hideTooltip_'), false);
	        window.addEventListener('touchstart', handlerBuilder('hideTooltip_'), false);
	      }
	    };
	  }
	
	  angular.module('ng-mdl').service('MaterialTooltipService', MaterialTooltipService).directive('mdlTooltip', ["MaterialTooltipService", function (MaterialTooltipService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialTooltipService.create($scope, $element[0]);
	      }
	    };
	  }]).directive('mdlTooltipTarget', ["MaterialTooltipService", function (MaterialTooltipService) {
	    'ngInject';
	
	    return {
	      restrict: 'A',
	      link: function link($scope, $element, $attrs) {
	        MaterialTooltipService.createTrigger($element[0]);
	      }
	    };
	  }]);
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGQwM2Y5NzAzNjBkZDdlOGM1NzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9uZy1tZGwtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uZy1tZGwtY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nLW1kbC1pY29uLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWRsLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWRsLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nLW1kbC1wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWRsLXJhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9uZy1tZGwtcmlwcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9uZy1tZGwtc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWRsLXN3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctbWRsLXRhYmxlLXNlbGVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nLW1kbC10YWJzLmpzIiwid2VicGFjazovLy8uL3NyYy9uZy1tZGwtdGV4dGZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9uZy1tZGwtdG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwic2VydmljZSIsImlmQ2xhc3MiLCJlbGVtZW50IiwiY29uZGl0aW9uIiwiY2xzIiwiY2xhc3NMaXN0IiwiYWRkQW5kUmVtb3ZlQ2xhc3NlcyIsImNsYXNzVG9BZGQiLCJjbGFzc2VzVG9SZW1vdmUiLCJjb25jYXQiLCJpZHgiLCJpbmRleE9mIiwic3BsaWNlIiwiYWRkIiwibWFwIiwicmVtb3ZlIiwiYmluZCIsInJlcXVpcmUiLCJNYXRlcmlhbEJ1dHRvblNlcnZpY2UiLCJNYXRlcmlhbFJpcHBsZVNlcnZpY2UiLCJNYXRlcmlhbEJ1dHRvbiIsIiRzY29wZSIsImVsZW1lbnRfIiwiaW5pdCIsInByb3RvdHlwZSIsIkNvbnN0YW50XyIsIkNzc0NsYXNzZXNfIiwiQlVUVE9OIiwiUklQUExFX0NPTlRBSU5FUiIsImJsdXJIYW5kbGVyXyIsImV2ZW50IiwiYmx1ciIsImRpc2FibGUiLCJkaXNhYmxlZCIsImVuYWJsZSIsIndhdGNoSWdub3JlUHJvcGVydHkiLCJyaXBwbGUiLCJyaXBwbGVFbGVtZW50XyIsImFkZEV2ZW50TGlzdGVuZXIiLCJib3VuZEJsdWVIYW5kbGVyIiwiY3JlYXRlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJsaW5rIiwiJGVsZW1lbnQiLCIkYXR0cnMiLCJNYXRlcmlhbENoZWNrYm94U2VydmljZSIsIk1kbCIsIk1hdGVyaWFsQ2hlY2tib3giLCJUSU5ZX1RJTUVPVVQiLCJDSEVDS0JPWCIsIklOUFVUIiwiQk9YX09VVExJTkUiLCJGT0NVU19IRUxQRVIiLCJUSUNLX09VVExJTkUiLCJJU19GT0NVU0VEIiwiSVNfRElTQUJMRUQiLCJJU19DSEVDS0VEIiwiSVNfVVBHUkFERUQiLCJvbkNoYW5nZV8iLCJ1cGRhdGVDbGFzc2VzXyIsIm9uRm9jdXNfIiwib25CbHVyXyIsIm9uTW91c2VVcF8iLCJibHVyXyIsImNoZWNrRGlzYWJsZWQiLCJjaGVja1RvZ2dsZVN0YXRlIiwid2luZG93Iiwic2V0VGltZW91dCIsImlucHV0RWxlbWVudF8iLCJjaGVja2VkIiwiY2hlY2siLCJ1bmNoZWNrIiwicXVlcnlTZWxlY3RvciIsImJveE91dGxpbmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0aWNrQ29udGFpbmVyIiwidGlja091dGxpbmUiLCJhcHBlbmRDaGlsZCIsImJvdW5kSW5wdXRPbkNoYW5nZSIsImJvdW5kSW5wdXRPbkZvY3VzIiwiYm91bmRJbnB1dE9uQmx1ciIsImJvdW5kRWxlbWVudE1vdXNlVXAiLCJyZWNlbnRlcmluZyIsInJpcHBsZUNvbnRhaW5lcl8iLCJNYXRlcmlhbEljb25Ub2dnbGVTZXJ2aWNlIiwiTWF0ZXJpYWxJY29uVG9nZ2xlIiwiSUNPTl9UT0dHTEUiLCJib3VuZEVsZW1lbnRPbk1vdXNlVXAiLCJib3VuZFJpcHBsZU1vdXNlVXAiLCJNZGxMYXlvdXRDdHJsIiwiTWRsTGF5b3V0Q29uc3RhbnRfIiwiTWRsTGF5b3V0Q3NzQ2xhc3Nlc18iLCJNZGxMYXlvdXRLZXlDb2Rlc18iLCJNZGxMYXlvdXRNb2RlXyIsIk1kbExheW91dE9uU2l6ZVNjcmVlbl8iLCIkcSIsImxheW91dERlZmVyZWQiLCJkZWZlciIsIktleWNvZGVzXyIsIk1vZGVfIiwiaGVhZGVyVHJhbnNpdGlvbkVuZEhhbmRsZXJfIiwiaGVhZGVyXyIsIklTX0FOSU1BVElORyIsImhlYWRlckNsaWNrSGFuZGxlcl8iLCJjb250YWlucyIsIklTX0NPTVBBQ1QiLCJjb250ZW50U2Nyb2xsSGFuZGxlcl8iLCJoZWFkZXJWaXNpYmxlIiwiSVNfU01BTExfU0NSRUVOIiwiRklYRURfSEVBREVSIiwiY29udGVudF8iLCJzY3JvbGxUb3AiLCJDQVNUSU5HX1NIQURPVyIsImRyYXdlclRvZ2dsZUhhbmRsZXJfIiwiZXZ0IiwidHlwZSIsImtleUNvZGUiLCJTUEFDRSIsIkVOVEVSIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVEcmF3ZXIiLCJrZXlib2FyZEV2ZW50SGFuZGxlcl8iLCJFU0NBUEUiLCJkcmF3ZXJfIiwiSVNfRFJBV0VSX09QRU4iLCJ0b2dnbGUiLCJvYmZ1c2NhdG9yXyIsImlzT3BlbiIsImRyYXdlcklzT3BlbiIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwiZHJhd2VyQnV0dG9uXyIsInNjcmVlblNpemVIYW5kbGVyXyIsInByb21pc2UiLCJ0aGVuIiwic2NyZWVuU2l6ZU1lZGlhUXVlcnlfIiwibWF0Y2hlcyIsInNldFRhYnMiLCJ0YWJzQ3RybCIsInRhYkJhciIsInRhYnNDdHJsXyIsInRhYkJhcl8iLCJIQVNfVEFCUyIsImluaXRMYXlvdXRfIiwic2V0RWxlbWVudCIsIkxBWU9VVCIsInJlc29sdmUiLCJzZXRDb250YWluZXIiLCJjb250YWluZXJfIiwiQ09OVEFJTkVSIiwibW9kZSIsIlNDUk9MTCIsIkhBU19TQ1JPTExJTkdfSEVBREVSIiwic2V0SGVhZGVyIiwiSEVBREVSIiwic2V0RHJhd2VyIiwiSEFTX0RSQVdFUiIsIkRSQVdFUiIsIm9iZnVzY2F0b3IiLCJzZXRfIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0RHJhd2VyQnV0dG9uIiwiRFJBV0VSX0JUTiIsIm9uU2l6ZVNjcmVlbiIsIkxBUkdFIiwiT05fTEFSR0VfU0NSRUVOIiwiU01BTEwiLCJPTl9TTUFMTF9TQ1JFRU4iLCJzZXRDb250ZW50IiwiQ09OVEVOVCIsIldBVEVSRkFMTCIsImkiLCJwYW5lbHMiLCJzZXRPYmZ1c2NhdG9yIiwiT0JGVVNDQVRPUiIsImluaXRFbGVtZW50Q2FsbGJhY2tzIiwibmFtZSIsInNldE1vZGVfIiwiU1RBTkRBUkQiLCJTRUFNRUQiLCJIRUFERVJfU0VBTUVEIiwiSEVBREVSX1dBVEVSRkFMTCIsIkhFQURFUl9TQ1JPTEwiLCJwYXJlbnRFbGVtZW50Iiwic2V0T25TaXplU2NyZWVuXyIsIm1hdGNoTWVkaWEiLCJNQVhfV0lEVEgiLCJhZGRMaXN0ZW5lciIsImluaXRfIiwiY29udGFpbmVyIiwiZm9jdXNlZEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmb2N1cyIsImUiLCJwZXJzaXN0ZWQiLCJzdHlsZSIsIm92ZXJmbG93WSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIiR3YXRjaCIsImJ1aWxkZXJNZGxMYXlvdXRFbGVtZW50RGlyZWN0aXZlIiwiZWxlbWVudE5hbWUiLCJtZGxMYXlvdXRDdHJsIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjb25zdGFudCIsIk1FTlVfSUNPTiIsIklDT04iLCJKU19SSVBQTEVfRUZGRUNUIiwiUklQUExFIiwiUklQUExFX0lHTk9SRV9FVkVOVFMiLCJJU19BQ1RJVkUiLCJzY29wZSIsImNvbnRyb2xsZXIiLCJsaW5rTWRsTGF5b3V0Iiwib24iLCJNYXRlcmlhbE1lbnVTZXJ2aWNlIiwiaW5zdGFuY2VzIiwiTWF0ZXJpYWxNZW51IiwicHVzaCIsIlRSQU5TSVRJT05fRFVSQVRJT05fU0VDT05EUyIsIlRSQU5TSVRJT05fRFVSQVRJT05fRlJBQ1RJT04iLCJDTE9TRV9USU1FT1VUIiwiVVBfQVJST1ciLCJET1dOX0FSUk9XIiwiT1VUTElORSIsIk1FTlUiLCJJVEVNIiwiSVNfVklTSUJMRSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJVTkFMSUdORUQiLCJvdXRsaW5lIiwib3V0bGluZV8iLCJoYW5kbGVGb3JDbGlja18iLCJmb3JFbGVtZW50XyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmb3JSZWN0IiwicmlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsImJvdHRvbSIsImhhbmRsZUZvcktleWJvYXJkRXZlbnRfIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaGFuZGxlSXRlbUtleWJvYXJkRXZlbnRfIiwiY3VycmVudEluZGV4IiwiQXJyYXkiLCJzbGljZSIsImNhbGwiLCJ0YXJnZXQiLCJNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNsaWNrIiwiaGlkZSIsImhhbmRsZUl0ZW1DbGlja18iLCJoYXNBdHRyaWJ1dGUiLCJzdG9wUHJvcGFnYXRpb24iLCJjbG9zaW5nXyIsImFwcGx5Q2xpcF8iLCJoZWlnaHQiLCJ3aWR0aCIsImNsaXAiLCJyZW1vdmVBbmltYXRpb25FbmRMaXN0ZW5lcl8iLCJhZGRBbmltYXRpb25FbmRMaXN0ZW5lcl8iLCJzaG93IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaXRlbURlbGF5IiwidHJhbnNpdGlvbkRlbGF5IiwiY2FsbGJhY2siLCJwYXJlbnROb2RlIiwicmVtb3ZlUHJvcGVydHkiLCJhZGRJdGVtIiwiaXRlbSIsInRhYkluZGV4IiwiYWRkUmlwcGxlRWZmZWN0IiwiZmluZCIsImluc3RhbmNlIiwiaW5zdGFuY2VOYW1lIiwiZ2V0QXR0cmlidXRlIiwiTWF0ZXJpYWxNZW51Q3RybCIsIml0ZW1zXyIsIm1lbnVFbGVtZW50IiwiaW5zdGFuY2VfIiwiY3RybCIsIiRldmVudCIsIm1kbE1lbnVDdHJsIiwiTWF0ZXJpYWxQcm9ncmVzc1NlcnZpY2UiLCJNYXRlcmlhbFByb2dyZXNzIiwiUFJPR1JFU1MiLCJJTkRFVEVSTUlOQVRFX0NMQVNTIiwic2V0UHJvZ3Jlc3MiLCJwIiwicHJvZ3Jlc3NiYXJfIiwic2V0QnVmZmVyIiwiYnVmZmVyYmFyXyIsImF1eGJhcl8iLCJlbCIsImNsYXNzTmFtZSIsInByb2dyZXNzIiwiYnVmZmVyIiwiTWF0ZXJpYWxSYWRpb1NlcnZpY2UiLCJNYXRlcmlhbFJhZGlvIiwiUkFESU8iLCJSQURJT19CVE4iLCJSQURJT19PVVRFUl9DSVJDTEUiLCJSQURJT19JTk5FUl9DSVJDTEUiLCJidG5FbGVtZW50XyIsIm9uTW91c2V1cF8iLCJib3VuZENoYW5nZUhhbmRsZXJfIiwiYm91bmRGb2N1c0hhbmRsZXJfIiwiYm91bmRCbHVySGFuZGxlcl8iLCJib3VuZE1vdXNlVXBIYW5kbGVyXyIsIm91dGVyQ2lyY2xlIiwiaW5uZXJDaXJjbGUiLCJNYXRlcmlhbFJpcHBsZSIsImN0eCIsIklOSVRJQUxfU0NBTEUiLCJJTklUSUFMX1NJWkUiLCJJTklUSUFMX09QQUNJVFkiLCJGSU5BTF9PUEFDSVRZIiwiRklOQUxfU0NBTEUiLCJkb3duSGFuZGxlcl8iLCJib3VuZEhlaWdodCIsImJvdW5kV2lkdGgiLCJyaXBwbGVTaXplXyIsIk1hdGgiLCJzcXJ0IiwiaWdub3JpbmdNb3VzZURvd25fIiwiZnJhbWVDb3VudCIsImdldEZyYW1lQ291bnQiLCJzZXRGcmFtZUNvdW50IiwiYm91bmQiLCJjdXJyZW50VGFyZ2V0IiwieCIsInkiLCJjbGllbnRYIiwiY2xpZW50WSIsInJvdW5kIiwidW5kZWZpbmVkIiwidG91Y2hlcyIsInNldFJpcHBsZVhZIiwic2V0UmlwcGxlU3R5bGVzIiwiYW5pbUZyYW1lSGFuZGxlciIsInVwSGFuZGxlcl8iLCJkZXRhaWwiLCJmcmFtZUNvdW50XyIsInhfIiwieV8iLCJib3VuZERvd25IYW5kbGVyIiwiYm91bmRVcEhhbmRsZXIiLCJmQyIsImdldFJpcHBsZUVsZW1lbnQiLCJuZXdYIiwibmV3WSIsInN0YXJ0IiwidHJhbnNmb3JtU3RyaW5nIiwic2NhbGUiLCJzaXplIiwib2Zmc2V0Iiwid2Via2l0VHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJyZW1vdmVSaXBwbGVFZmZlY3QiLCJwYXJlbnQiLCJjaGlsZE5vZGVzIiwic3ciLCJjcmVhdGVkIiwiaWdub3JlUmlwcGxlRWZmZWN0QXR0cmlidXRlIiwiaWdub3JlUmlwcGxlRWZmZWN0IiwiJGV2YWwiLCJNYXRlcmlhbFNwaW5uZXJTZXJ2aWNlIiwiTWF0ZXJpYWxTcGlubmVyIiwiTURMX1NQSU5ORVJfTEFZRVJfQ09VTlQiLCJTUElOTkVSIiwiTURMX1NQSU5ORVJfTEFZRVIiLCJNRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUiIsIk1ETF9TUElOTkVSX0NJUkNMRSIsIk1ETF9TUElOTkVSX0dBUF9QQVRDSCIsIk1ETF9TUElOTkVSX0xFRlQiLCJNRExfU1BJTk5FUl9SSUdIVCIsImNyZWF0ZUxheWVyIiwiaW5kZXgiLCJsYXllciIsImxlZnRDbGlwcGVyIiwiZ2FwUGF0Y2giLCJyaWdodENsaXBwZXIiLCJjaXJjbGVPd25lcnMiLCJjaXJjbGUiLCJzdG9wIiwiTWF0ZXJpYWxTd2l0Y2hTZXJ2aWNlIiwiTWF0ZXJpYWxTd2l0Y2giLCJTV0lUQ0giLCJUUkFDSyIsIlRIVU1CIiwib2ZmIiwidHJhY2siLCJ0aHVtYiIsImZvY3VzSGVscGVyIiwiYm91bmRNb3VzZVVwSGFuZGxlciIsImJvdW5kQ2hhbmdlSGFuZGxlciIsImJvdW5kRm9jdXNIYW5kbGVyIiwiYm91bmRCbHVySGFuZGxlciIsIk1hdGVyaWFsU2VsZWN0YWJsZVRhYmxlIiwicm93cyIsIkRBVEFfVEFCTEUiLCJTRUxFQ1RBQkxFIiwiU0VMRUNUX0VMRU1FTlQiLCJJU19TRUxFQ1RFRCIsInNlbGVjdFJvd18iLCJjaGVja2JveCIsIm11bHRpcGxlIiwicm93IiwiY3JlYXRlQ2hlY2tib3hfIiwibGFiZWwiLCJsYWJlbENsYXNzZXMiLCJqb2luIiwibG9jYWxSb3dzIiwiYWRkUm93IiwiZmlyc3RDZWxsIiwidGQiLCJub2RlTmFtZSIsInRvVXBwZXJDYXNlIiwicm93Q2hlY2tib3giLCJmaXJzdEhlYWRlciIsInRoIiwiaGVhZGVyQ2hlY2tib3giLCJNZGxUYWJsZVNlbGVjdGFibGVDdHJsIiwibWRsVGFibGVTZWxlY3RhYmxlQ3RybCIsIk1hdGVyaWFsVGFic1NlcnZpY2UiLCJNYXRlcmlhbFRhYnMiLCJpbkxheW91dCIsIlJFU0laRV9USU1FT1VUIiwiVEFCX1NDUk9MTF9QSVhFTFMiLCJDSEVWUk9OX0xFRlQiLCJDSEVWUk9OX1JJR0hUIiwiVEFCX05BTUVfQVRUUl9OQU1FIiwiUEFORUxfTkFNRV9BVFRSX05BTUUiLCJOT1JNQUwiLCJUQUJfQkFSX0NMQVNTIiwiVEFCX0NMQVNTIiwiVEFCU19DTEFTUyIsIlBBTkVMX0NMQVNTIiwiSUNPTl9DTEFTUyIsIkxBWU9VVF9UQUJfQkFSX0JVVFRPTiIsIkxBWU9VVF9UQUJfQkFSX0xFRlRfQlVUVE9OIiwiTEFZT1VUX1RBQl9CQVJfUklHSFRfQlVUVE9OIiwiR0xPQkFMIiwiQUNUSVZFX0NMQVNTIiwiVVBHUkFERURfQ0xBU1MiLCJnZXRQYW5lbEJ5TmFtZSIsInBhbmVsTmFtZSIsImFkZFRhYiIsInRhYiIsIiRvbiIsIm8iLCJwYW5lbCIsIiRlbWl0IiwiYWRkUGFuZWwiLCJsYXlvdXRDdHJsXyIsImNsYXNzZXNDdHgiLCJleHRlbmQiLCJpbml0TGF5b3V0IiwibGF5b3V0Q3RybCIsImxlZnRCdXR0b24iLCJsZWZ0QnV0dG9uSWNvbiIsInRleHRDb250ZW50Iiwic2Nyb2xsTGVmdCIsInJpZ2h0QnV0dG9uIiwicmlnaHRCdXR0b25JY29uIiwidGFiVXBkYXRlSGFuZGxlciIsInNob3dMZWZ0Iiwic2hvd1JpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJyZXNpemVUaW1lb3V0SWRfIiwiY2xlYXJUaW1lb3V0IiwiTWF0ZXJpYWxUYWJzQ3RybCIsInRhYnMiLCJ0YWJzRWxlbWVudCIsIm1kbExheW91dFRhYnMiLCJtZGxUYWJzQ3RybCIsImxheW91dCIsImN0cmxzIiwiTWF0ZXJpYWxUZXh0ZmllbGRTZXJ2aWNlIiwiTWF0ZXJpYWxUZXh0ZmllbGQiLCJtYXhSb3dzIiwiTk9fTUFYX1JPV1MiLCJNQVhfUk9XU19BVFRSSUJVVEUiLCJURVhURklFTEQiLCJMQUJFTCIsIklTX0RJUlRZIiwiSVNfSU5WQUxJRCIsIkhBU19QTEFDRUhPTERFUiIsIm9uS2V5RG93bl8iLCJjdXJyZW50Um93Q291bnQiLCJ2YWx1ZSIsInNwbGl0Iiwib25SZXNldF8iLCJjaGVja1ZhbGlkaXR5IiwiY2hlY2tEaXJ0eSIsImNoZWNrRm9jdXMiLCJpbnB1dF8iLCJCb29sZWFuIiwidmFsaWRpdHkiLCJ2YWxpZCIsImNoYW5nZSIsImxhYmVsXyIsInBhcnNlSW50IiwiaXNOYU4iLCJib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyIiwiYm91bmRSZXNldEhhbmRsZXIiLCJib3VuZEtleURvd25IYW5kbGVyIiwiaW52YWxpZCIsIk1hdGVyaWFsVG9vbHRpcFNlcnZpY2UiLCJNYXRlcmlhbFRvb2x0aXAiLCJUT09MVElQIiwiQk9UVE9NIiwiTEVGVCIsIlJJR0hUIiwiVE9QIiwiaGFuZGxlTW91c2VFbnRlcl8iLCJwcm9wcyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJoaWRlVG9vbHRpcF8iLCJib3VuZE1vdXNlRW50ZXJIYW5kbGVyIiwiYm91bmRNb3VzZUxlYXZlQW5kU2Nyb2xsSGFuZGxlciIsImNyZWF0ZVRyaWdnZXIiLCJoYW5kbGVyQnVpbGRlciIsIm1ldGhvZE5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7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dVEsYUFBYSxhQUFhO1dBQ3JDdlEsUUFBUWlJLGFBQWEsWUFBWTs7O1NBR25DLFNBQVN3WixlQUFlQyxZQUFZO1dBQ2xDLE9BQU8sWUFBWTthQUNqQixJQUFJelcsT0FBT2pMLFFBQVE4UixhQUFhLHlCQUF1QjthQUN2RCxJQUFJRixXQUFXOE8sdUJBQXVCL08sS0FBSzFHO2FBQzNDLElBQUkyRyxZQUFZQSxTQUFTOFAsYUFBYTtlQUNwQzlQLFNBQVM4UCxZQUFZL1UsTUFBTWlGLFVBQVVoRjs7Ozs7U0FLM0M1TSxRQUFRb0MsaUJBQWlCLGNBQWNxZixlQUFlLHNCQUFzQjtTQUM1RXpoQixRQUFRb0MsaUJBQWlCLFlBQWNxZixlQUFlLHNCQUFzQjtTQUM1RXpoQixRQUFRb0MsaUJBQWlCLGNBQWNxZixlQUFlLGlCQUFpQjtTQUN2RXhkLE9BQU83QixpQkFBaUIsVUFBZXFmLGVBQWUsaUJBQWlCO1NBQ3ZFeGQsT0FBTzdCLGlCQUFpQixjQUFlcWYsZUFBZSxpQkFBaUI7Ozs7O0dBTzdFN2hCLFFBQVFDLE9BQU8sVUFFZEMsUUFBUSwwQkFBMEI0Z0Isd0JBRWxDbmUsVUFBVSx5Q0FBYyxVQUFVbWUsd0JBQXdCO0tBQUU7O0tBQzNELE9BQU87T0FDTGxlLFVBQVU7T0FDVkMsTUFBTSxjQUFVdEIsUUFBUXVCLFVBQVVDLFFBQVE7U0FDeEMrZCx1QkFBdUJwZSxPQUFPbkIsUUFBUXVCLFNBQVM7OztPQUtwREgsVUFBVSwrQ0FBb0IsVUFBVW1lLHdCQUF3QjtLQUFFOztLQUNqRSxPQUFPO09BQ0xsZSxVQUFVO09BQ1ZDLE1BQU0sY0FBVXRCLFFBQVF1QixVQUFVQyxRQUFRO1NBQ3hDK2QsdUJBQXVCYyxjQUFjOWUsU0FBUyIsImZpbGUiOiJuZy1tZGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZDAzZjk3MDM2MGRkN2U4YzU3MCIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ25nLW1kbCcsIFtdKVxuXG4uc2VydmljZSgnTWRsJywgZnVuY3Rpb24gKCkgeyAnbmdJbmplY3QnO1xuICByZXR1cm4ge1xuICAgIGlmQ2xhc3M6IGZ1bmN0aW9uIChlbGVtZW50LCBjb25kaXRpb24sIGNscykge1xuICAgICAgZWxlbWVudCAmJiBlbGVtZW50LmNsYXNzTGlzdFtjb25kaXRpb24/J2FkZCc6J3JlbW92ZSddKGNscyk7XG4gICAgfSxcbiAgICBhZGRBbmRSZW1vdmVDbGFzc2VzOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NUb0FkZCwgY2xhc3Nlc1RvUmVtb3ZlKSB7XG4gICAgICBjbGFzc2VzVG9SZW1vdmUgPSBbXS5jb25jYXQoY2xhc3Nlc1RvUmVtb3ZlKTtcbiAgICAgIGlmIChjbGFzc1RvQWRkKSB7XG4gICAgICAgIHZhciBpZHggPSBjbGFzc2VzVG9SZW1vdmUuaW5kZXhPZihjbGFzc1RvQWRkKTtcbiAgICAgICAgaWYgKGlkeCE9LTEpIGNsYXNzZXNUb1JlbW92ZS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgICAgfVxuICAgICAgY2xhc3Nlc1RvUmVtb3ZlLm1hcChlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUuYmluZChlbGVtZW50LmNsYXNzTGlzdCkpO1xuICAgIH0sXG4gIH07XG59KTtcblxucmVxdWlyZSgnLi9uZy1tZGwtYnV0dG9uJyk7XG5yZXF1aXJlKCcuL25nLW1kbC1jaGVja2JveCcpO1xucmVxdWlyZSgnLi9uZy1tZGwtaWNvbi10b2dnbGUnKTtcbnJlcXVpcmUoJy4vbmctbWRsLWxheW91dCcpO1xucmVxdWlyZSgnLi9uZy1tZGwtbWVudScpO1xucmVxdWlyZSgnLi9uZy1tZGwtcHJvZ3Jlc3MnKTtcbnJlcXVpcmUoJy4vbmctbWRsLXJhZGlvJyk7XG5yZXF1aXJlKCcuL25nLW1kbC1yaXBwbGUnKTtcbnJlcXVpcmUoJy4vbmctbWRsLXNwaW5uZXInKTtcbnJlcXVpcmUoJy4vbmctbWRsLXN3aXRjaCcpO1xucmVxdWlyZSgnLi9uZy1tZGwtdGFibGUtc2VsZWN0YWJsZScpO1xucmVxdWlyZSgnLi9uZy1tZGwtdGFicycpO1xucmVxdWlyZSgnLi9uZy1tZGwtdGV4dGZpZWxkJyk7XG5yZXF1aXJlKCcuL25nLW1kbC10b29sdGlwJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTWF0ZXJpYWxCdXR0b25TZXJ2aWNlIChNYXRlcmlhbFJpcHBsZVNlcnZpY2UpIHsgJ25nSW5qZWN0JztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIEJ1dHRvbiBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG4gIGZ1bmN0aW9uIE1hdGVyaWFsQnV0dG9uKCRzY29wZSwgZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoJHNjb3BlKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgLy8gTm9uZSBmb3Igbm93LlxuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIEJVVFRPTjogICAgICAgICAgICdtZGwtYnV0dG9uJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWJ1dHRvbl9fcmlwcGxlLWNvbnRhaW5lcicsXG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBibHVyIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUHVibGljIG1ldGhvZHMuXG5cbiAgLyoqXG4gICAqIERpc2FibGUgYnV0dG9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmFibGUgYnV0dG9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuICBNYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJVVFRPTik7XG4gICAgTWF0ZXJpYWxSaXBwbGVTZXJ2aWNlLndhdGNoSWdub3JlUHJvcGVydHkoJHNjb3BlLCB0aGlzLmVsZW1lbnRfLCB0aGlzLCBmdW5jdGlvbiAocmlwcGxlKSB7XG4gICAgICByaXBwbGUucmlwcGxlRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGJvdW5kQmx1ZUhhbmRsZXIpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdmFyIGJvdW5kQmx1ZUhhbmRsZXIgPSB0aGlzLmJsdXJIYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGJvdW5kQmx1ZUhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGJvdW5kQmx1ZUhhbmRsZXIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoJHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IE1hdGVyaWFsQnV0dG9uKCRzY29wZSwgZWxlbWVudCk7XG4gICAgfSxcbiAgfTtcblxufVxuXG5hbmd1bGFyLm1vZHVsZSgnbmctbWRsJylcbi5zZXJ2aWNlKCdNYXRlcmlhbEJ1dHRvblNlcnZpY2UnLCBNYXRlcmlhbEJ1dHRvblNlcnZpY2UpXG4uZGlyZWN0aXZlKCdtZGxCdXR0b24nLCBmdW5jdGlvbiAoTWF0ZXJpYWxCdXR0b25TZXJ2aWNlKSB7ICduZ0luamVjdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICBNYXRlcmlhbEJ1dHRvblNlcnZpY2UuY3JlYXRlKCRzY29wZSwgJGVsZW1lbnRbMF0pO1xuICAgIH0sXG4gIH07XG59KTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctbWRsLWJ1dHRvbi5qcyIsIihmdW5jdGlvbiAoKSB7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE1hdGVyaWFsQ2hlY2tib3hTZXJ2aWNlIChNZGwsIE1hdGVyaWFsUmlwcGxlU2VydmljZSkgeyAnbmdJbmplY3QnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgQ2hlY2tib3ggTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gTWF0ZXJpYWxDaGVja2JveCgkc2NvcGUsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcblxuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCRzY29wZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgVElOWV9USU1FT1VUOiAwLjAwMVxuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgQ0hFQ0tCT1g6ICAgICAgICAgJ21kbC1jaGVja2JveCcsXG4gICAgSU5QVVQ6ICAgICAgICAgICAgJ21kbC1jaGVja2JveF9faW5wdXQnLFxuICAgIEJPWF9PVVRMSU5FOiAgICAgICdtZGwtY2hlY2tib3hfX2JveC1vdXRsaW5lJyxcbiAgICBGT0NVU19IRUxQRVI6ICAgICAnbWRsLWNoZWNrYm94X19mb2N1cy1oZWxwZXInLFxuICAgIFRJQ0tfT1VUTElORTogICAgICdtZGwtY2hlY2tib3hfX3RpY2stb3V0bGluZScsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1jaGVja2JveF9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgSVNfRk9DVVNFRDogICAgICAgJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAgICAgICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogICAgICAgJ2lzLWNoZWNrZWQnLFxuICAgIElTX1VQR1JBREVEOiAgICAgICdpcy11cGdyYWRlZCdcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZSBvZiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVG9nZ2xlU3RhdGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGJsdXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgd2h5IHRoZXJlJ3MgYSBmb2N1cyBldmVudCBiZWluZyBmaXJlZCBhZnRlciBvdXIgYmx1cixcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGhhY2suXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudF8uYmx1cigpO1xuICAgIH0uYmluZCh0aGlzKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovICh0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpKTtcbiAgfTtcblxuICAvLyBQdWJsaWMgbWV0aG9kcy5cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyB0b2dnbGUgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgaW5wdXRzIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzYWJsZSBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmFibGUgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgfTtcblxuICAvKipcbiAgICogVW5jaGVjayBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuICBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG5cbiAgICB2YXIgYm94T3V0bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBib3hPdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CT1hfT1VUTElORSk7XG5cbiAgICB2YXIgdGlja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aWNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5GT0NVU19IRUxQRVIpO1xuXG4gICAgdmFyIHRpY2tPdXRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpY2tPdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5USUNLX09VVExJTkUpO1xuXG4gICAgYm94T3V0bGluZS5hcHBlbmRDaGlsZCh0aWNrT3V0bGluZSk7XG5cbiAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRpY2tDb250YWluZXIpO1xuICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoYm94T3V0bGluZSk7XG5cbiAgICB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib3VuZElucHV0T25Gb2N1cyA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kSW5wdXRPbkJsdXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kRWxlbWVudE1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZElucHV0T25CbHVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kRWxlbWVudE1vdXNlVXApO1xuXG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNIRUNLQk9YKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG5cbiAgICBNYXRlcmlhbFJpcHBsZVNlcnZpY2Uud2F0Y2hJZ25vcmVQcm9wZXJ0eSgkc2NvcGUsIHRoaXMuZWxlbWVudF8sIHRoaXMsIGZ1bmN0aW9uIChyaXBwbGUpIHtcbiAgICAgIHJpcHBsZS5yZWNlbnRlcmluZyA9IHRydWU7XG4gICAgICByaXBwbGUucmlwcGxlQ29udGFpbmVyXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCRzY29wZSwgZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbENoZWNrYm94KCRzY29wZSwgZWxlbWVudCk7XG4gICAgfSxcbiAgfTtcblxufVxuXG5hbmd1bGFyLm1vZHVsZSgnbmctbWRsJylcblxuLnNlcnZpY2UoJ01hdGVyaWFsQ2hlY2tib3hTZXJ2aWNlJywgTWF0ZXJpYWxDaGVja2JveFNlcnZpY2UpXG4uZGlyZWN0aXZlKCdtZGxDaGVja2JveCcsIGZ1bmN0aW9uIChNYXRlcmlhbENoZWNrYm94U2VydmljZSkgeyAnbmdJbmplY3QnO1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgTWF0ZXJpYWxDaGVja2JveFNlcnZpY2UuY3JlYXRlKCRzY29wZSwgJGVsZW1lbnRbMF0pO1xuICAgIH0sXG4gIH07XG59KTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctbWRsLWNoZWNrYm94LmpzIiwiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTWF0ZXJpYWxJY29uVG9nZ2xlU2VydmljZSAoTWRsLCBNYXRlcmlhbFJpcHBsZVNlcnZpY2UpIHsgJ25nSW5qZWN0JztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIGljb24gdG9nZ2xlIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG4gIGZ1bmN0aW9uIE1hdGVyaWFsSWNvblRvZ2dsZSgkc2NvcGUsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcblxuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCRzY29wZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBUSU5ZX1RJTUVPVVQ6IDAuMDAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElDT05fVE9HR0xFOiAgICAgICdtZGwtaWNvbi10b2dnbGUnLFxuICAgIElOUFVUOiAgICAgICAgICAgICdtZGwtaWNvbi10b2dnbGVfX2lucHV0JyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWljb24tdG9nZ2xlX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBJU19GT0NVU0VEOiAgICAgICAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICAgICAgJ2lzLWRpc2FibGVkJyxcbiAgICBJU19DSEVDS0VEOiAgICAgICAnaXMtY2hlY2tlZCcsXG4gICAgSVNfVVBHUkFERUQ6ICAgICAgJ2lzLXVwZ3JhZGVkJyxcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZSBvZiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uTW91c2VVcF8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuYmx1cl8oKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgd2h5IHRoZXJlJ3MgYSBmb2N1cyBldmVudCBiZWluZyBmaXJlZCBhZnRlciBvdXIgYmx1cixcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGhhY2suXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudF8uYmx1cigpO1xuICAgIH0uYmluZCh0aGlzKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovICh0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpKTtcbiAgfTtcblxuICAvLyBQdWJsaWMgbWV0aG9kcy5cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyB0b2dnbGUgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgZGlzYWJsZWQgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc2FibGUgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmFibGUgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuY2hlY2sgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuICBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcblxuICAgIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm91bmRJbnB1dE9uQmx1ciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm91bmRFbGVtZW50T25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRJbnB1dE9uQmx1cik7XG4gICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRPbk1vdXNlVXApO1xuXG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT05fVE9HR0xFKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgXG4gICAgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICBNYXRlcmlhbFJpcHBsZVNlcnZpY2Uud2F0Y2hJZ25vcmVQcm9wZXJ0eSgkc2NvcGUsIHRoaXMuZWxlbWVudF8sIHRoaXMsIGZ1bmN0aW9uIChyaXBwbGUpIHtcbiAgICAgIHJpcHBsZS5yZWNlbnRlcmluZyA9IHRydWU7XG4gICAgICByaXBwbGUucmlwcGxlQ29udGFpbmVyXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXApO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCRzY29wZSwgZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbEljb25Ub2dnbGUoJHNjb3BlLCBlbGVtZW50KTtcbiAgICB9LFxuICB9O1xufVxuXG5hbmd1bGFyLm1vZHVsZSgnbmctbWRsJylcblxuLnNlcnZpY2UoJ01hdGVyaWFsSWNvblRvZ2dsZVNlcnZpY2UnLCBNYXRlcmlhbEljb25Ub2dnbGVTZXJ2aWNlKVxuLmRpcmVjdGl2ZSgnbWRsSWNvblRvZ2dsZScsIGZ1bmN0aW9uIChNYXRlcmlhbEljb25Ub2dnbGVTZXJ2aWNlKSB7ICduZ0luamVjdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICBNYXRlcmlhbEljb25Ub2dnbGVTZXJ2aWNlLmNyZWF0ZSgkc2NvcGUsICRlbGVtZW50WzBdKTtcbiAgICB9LFxuICB9O1xufSk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25nLW1kbC1pY29uLXRvZ2dsZS5qcyIsIihmdW5jdGlvbiAoKSB7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE1kbExheW91dEN0cmwoJHNjb3BlLCBNZGwsIE1kbExheW91dENvbnN0YW50XywgTWRsTGF5b3V0Q3NzQ2xhc3Nlc18sIE1kbExheW91dEtleUNvZGVzXywgTWRsTGF5b3V0TW9kZV8sIE1kbExheW91dE9uU2l6ZVNjcmVlbl8sICRxKSB7ICduZ0luamVjdCc7XG5cbiAgdmFyIGxheW91dERlZmVyZWQgPSAkcS5kZWZlcigpO1xuICB0aGlzLkNvbnN0YW50XyAgICA9IE1kbExheW91dENvbnN0YW50XztcbiAgdGhpcy5Dc3NDbGFzc2VzXyAgPSBNZGxMYXlvdXRDc3NDbGFzc2VzXztcbiAgdGhpcy5LZXljb2Rlc18gICAgPSBNZGxMYXlvdXRLZXlDb2Rlc187XG4gIHRoaXMuTW9kZV8gICAgICAgID0gTWRsTGF5b3V0TW9kZV87XG5cbiAgdGhpcy5oZWFkZXJUcmFuc2l0aW9uRW5kSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgdGhpcy5oZWFkZXJDbGlja0hhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCk7XG4gICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgfVxuICB9LmJpbmQodGhpcyk7XG5cbiAgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBoZWFkZXJWaXNpYmxlID0gdGhpcy5lbGVtZW50X1xuICAgICAgJiYgKCF0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1NNQUxMX1NDUkVFTikgfHwgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5GSVhFRF9IRUFERVIpKTtcbiAgICBpZiAodGhpcy5jb250ZW50Xy5zY3JvbGxUb3AgPiAwICYmICF0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKTtcbiAgICAgIGhlYWRlclZpc2libGUgJiYgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50Xy5zY3JvbGxUb3AgPD0gMCAmJiB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKTtcbiAgICAgIGhlYWRlclZpc2libGUgJiYgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuZHJhd2VyVG9nZ2xlSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlNQQUNFIHx8IGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FTlRFUikge1xuICAgICAgICAvLyBwcmV2ZW50IHNjcm9sbGluZyBpbiBkcmF3ZXIgbmF2XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcHJldmVudCBvdGhlciBrZXlzXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b2dnbGVEcmF3ZXIoKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMua2V5Ym9hcmRFdmVudEhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIC8vIE9ubHkgcmVhY3Qgd2hlbiB0aGUgZHJhd2VyIGlzIG9wZW4uXG4gICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FU0NBUEUgJiYgdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKSkge1xuICAgICAgdGhpcy50b2dnbGVEcmF3ZXIoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICB0aGlzLnRvZ2dsZURyYXdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kcmF3ZXJfKSB7XG4gICAgICB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICAgIHRoaXMub2JmdXNjYXRvcl8gJiYgdGhpcy5vYmZ1c2NhdG9yXy5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pO1xuICAgICAgLy8gU2V0IGFjY2Vzc2liaWxpdHkgcHJvcGVydGllcy5cbiAgICAgIHZhciBpc09wZW4gPSBkcmF3ZXJJc09wZW4oKTtcbiAgICAgIHRoaXMuZHJhd2VyXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgKCFpc09wZW4pLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy5kcmF3ZXJCdXR0b25fICYmIHRoaXMuZHJhd2VyQnV0dG9uXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4udG9TdHJpbmcoKSk7XG4gICAgfVxuICB9LmJpbmQodGhpcyk7XG5cbiAgdGhpcy5zY3JlZW5TaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgbGF5b3V0RGVmZXJlZC5wcm9taXNlXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgTWRsLmlmQ2xhc3ModGhpcy5lbGVtZW50XywgdGhpcy5zY3JlZW5TaXplTWVkaWFRdWVyeV8ubWF0Y2hlcywgdGhpcy5Dc3NDbGFzc2VzXy5JU19TTUFMTF9TQ1JFRU4pO1xuICAgICAgaWYgKHRoaXMuc2NyZWVuU2l6ZU1lZGlhUXVlcnlfLm1hdGNoZXMpIHJldHVybjtcbiAgICAgIC8vIENvbGxhcHNlIGRyYXdlciAoaWYgYW55KSB3aGVuIG1vdmluZyB0byBhIGxhcmdlIHNjcmVlbiBzaXplLlxuICAgICAgaWYgKHRoaXMuZHJhd2VyXykge1xuICAgICAgICB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICAgICAgdGhpcy5vYmZ1c2NhdG9yXyAmJiB0aGlzLm9iZnVzY2F0b3JfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuc2V0VGFicyA9IGZ1bmN0aW9uICh0YWJzQ3RybCwgdGFiQmFyKSB7XG4gICAgdGhpcy50YWJzQ3RybF8gPSB0YWJzQ3RybDtcbiAgICB0aGlzLnRhYkJhcl8gPSB0YWJCYXI7XG4gICAgbGF5b3V0RGVmZXJlZC5wcm9taXNlXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgTWRsLmlmQ2xhc3ModGhpcy5lbGVtZW50XywgdGhpcy50YWJCYXJfLCB0aGlzLkNzc0NsYXNzZXNfLkhBU19UQUJTKTtcbiAgICAgIGlmICghdGhpcy50YWJCYXJfKSByZXR1cm47XG4gICAgICB0aGlzLmhlYWRlcl8uYXBwZW5kQ2hpbGQodGhpcy50YWJCYXJfKTtcbiAgICAgIHRoaXMudGFic0N0cmxfLmluaXRMYXlvdXRfKHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcblxuICB2YXIgZHJhd2VySXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhISh0aGlzLmRyYXdlcl8gJiYgdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKSk7XG4gIH0uYmluZCh0aGlzKTtcbiAgXG4gIHZhciBzZXRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5MQVlPVVQpO1xuICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgICAgbGF5b3V0RGVmZXJlZC5yZXNvbHZlKHRoaXMuZWxlbWVudF8pO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHZhciBzZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyXykge1xuICAgICAgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DT05UQUlORVIpO1xuICAgICAgTWRsLmlmQ2xhc3ModGhpcy5jb250YWluZXJfLCAkc2NvcGUubW9kZSA9PT0gdGhpcy5Nb2RlXy5TQ1JPTEwsIHRoaXMuQ3NzQ2xhc3Nlc18uSEFTX1NDUk9MTElOR19IRUFERVIpXG4gICAgfVxuICB9LmJpbmQodGhpcyk7XG5cbiAgdmFyIHNldEhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmhlYWRlcl8gJiYgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IRUFERVIpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgdmFyIHNldERyYXdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBsYXlvdXREZWZlcmVkLnByb21pc2VcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBNZGwuaWZDbGFzcyh0aGlzLmVsZW1lbnRfLCB0aGlzLmRyYXdlcl8sIHRoaXMuQ3NzQ2xhc3Nlc18uSEFTX0RSQVdFUilcbiAgICAgIGlmICh0aGlzLmRyYXdlcl8pIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVIpXG4gICAgICAgIHRoaXMuZHJhd2VyXy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlib2FyZEV2ZW50SGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmRyYXdlcl8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICghZHJhd2VySXNPcGVuKCkpLnRvU3RyaW5nKCkpO1xuICAgICAgICB2YXIgb2JmdXNjYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvYmZ1c2NhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuc2V0Xygnb2JmdXNjYXRvcl8nLCBvYmZ1c2NhdG9yKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChvYmZ1c2NhdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9iZnVzY2F0b3JfKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVDaGlsZCh0aGlzLm9iZnVzY2F0b3JfKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5vYmZ1c2NhdG9yXztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdlcl8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5Ym9hcmRFdmVudEhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgdmFyIHNldERyYXdlckJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kcmF3ZXJCdXR0b25fKSB7XG4gICAgICBsYXlvdXREZWZlcmVkLnByb21pc2VcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJCdXR0b25fLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVJfQlROKTtcbiAgICAgICAgTWRsLmlmQ2xhc3ModGhpcy5kcmF3ZXJCdXR0b25fLCAkc2NvcGUub25TaXplU2NyZWVuID09PSBNZGxMYXlvdXRPblNpemVTY3JlZW5fLkxBUkdFLCB0aGlzLkNzc0NsYXNzZXNfLk9OX0xBUkdFX1NDUkVFTik7XG4gICAgICAgIE1kbC5pZkNsYXNzKHRoaXMuZHJhd2VyQnV0dG9uXywgJHNjb3BlLm9uU2l6ZVNjcmVlbiA9PT0gTWRsTGF5b3V0T25TaXplU2NyZWVuXy5TTUFMTCwgdGhpcy5Dc3NDbGFzc2VzXy5PTl9TTUFMTF9TQ1JFRU4pO1xuICAgICAgICB0aGlzLmRyYXdlckJ1dHRvbl8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZHJhd2VySXNPcGVuKCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuZHJhd2VyQnV0dG9uXy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuZHJhd2VyQnV0dG9uXy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgdGhpcy5kcmF3ZXJCdXR0b25fLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuZHJhd2VyQnV0dG9uXy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXyk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuICBcbiAgdmFyIHNldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY29udGVudF8pIHtcbiAgICAgIHRoaXMuY29udGVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNPTlRFTlQpO1xuICAgICAgaWYgKCRzY29wZS5tb2RlID09PSB0aGlzLk1vZGVfLldBVEVSRkFMTCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbEhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcl8oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcl8pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudGFic0N0cmxfKSB7XG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnRhYnNDdHJsXy5wYW5lbHMpIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRfLmFwcGVuZENoaWxkKHRoaXMudGFic0N0cmxfLnBhbmVsc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICB2YXIgc2V0T2JmdXNjYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5vYmZ1c2NhdG9yXykge1xuICAgICAgdGhpcy5vYmZ1c2NhdG9yXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uT0JGVVNDQVRPUik7XG4gICAgICBNZGwuaWZDbGFzcyh0aGlzLm9iZnVzY2F0b3JfLCBkcmF3ZXJJc09wZW4oKSwgdGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG4gICAgfVxuICB9LmJpbmQodGhpcyk7XG5cbiAgdmFyIGluaXRFbGVtZW50Q2FsbGJhY2tzID0ge1xuICAgIGNvbnRhaW5lcl86IHNldENvbnRhaW5lcixcbiAgICAgIGVsZW1lbnRfOiBzZXRFbGVtZW50LFxuICAgICAgaGVhZGVyXzogc2V0SGVhZGVyLFxuICAgIGRyYXdlcl86IHNldERyYXdlcixcbiAgICBkcmF3ZXJCdXR0b25fOiBzZXREcmF3ZXJCdXR0b24sXG4gICAgY29udGVudF86IHNldENvbnRlbnQsXG4gICAgb2JmdXNjYXRvcl86IHNldE9iZnVzY2F0b3IsXG4gIH07XG4gIFxuICB0aGlzLnNldF8gPSBmdW5jdGlvbiAobmFtZSwgJGVsZW1lbnQpIHtcbiAgICB0aGlzW25hbWVdID0gJGVsZW1lbnQ7XG4gICAgaW5pdEVsZW1lbnRDYWxsYmFja3NbbmFtZV0oJGVsZW1lbnQpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgdGhpcy5zZXRNb2RlXyA9IGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgJHNjb3BlLm1vZGUgPSBtb2RlIHx8IHRoaXMuTW9kZV8uU1RBTkRBUkQ7XG4gICAgaWYgKCF0aGlzLmhlYWRlcl8pIHJldHVybjtcbiAgICBNZGwuaWZDbGFzcyh0aGlzLmhlYWRlcl8sIG1vZGUgICAgPT09IHRoaXMuTW9kZV8uU0VBTUVELCB0aGlzLkNzc0NsYXNzZXNfLkhFQURFUl9TRUFNRUQpO1xuICAgIE1kbC5pZkNsYXNzKHRoaXMuaGVhZGVyXywgbW9kZSAgICA9PT0gdGhpcy5Nb2RlXy5XQVRFUkZBTEwsIHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSX1dBVEVSRkFMTCk7XG4gICAgTWRsLmlmQ2xhc3ModGhpcy5oZWFkZXJfLCBtb2RlICAgID09PSB0aGlzLk1vZGVfLlNDUk9MTCwgdGhpcy5Dc3NDbGFzc2VzXy5IRUFERVJfU0NST0xMKTtcbiAgICBNZGwuaWZDbGFzcyh0aGlzLmNvbnRhaW5lcl8sIG1vZGUgPT09IHRoaXMuTW9kZV8uU0NST0xMLCB0aGlzLkNzc0NsYXNzZXNfLkhBU19TQ1JPTExJTkdfSEVBREVSKTtcbiAgICBpZiAobW9kZSA9PT0gdGhpcy5Nb2RlXy5TVEFOREFSRCkge1xuICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICB0aGlzLnRhYkJhcl8gJiYgdGhpcy50YWJCYXJfLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IHRoaXMuTW9kZV8uU0VBTUVEIHx8IG1vZGUgPT09IHRoaXMuTW9kZV8uU0NST0xMKSB7XG4gICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgIHRoaXMudGFiQmFyXyAmJiB0aGlzLnRhYkJhcl8ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gdGhpcy5Nb2RlXy5XQVRFUkZBTEwpIHtcbiAgICAgIHRoaXMuaGVhZGVyXy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oZWFkZXJUcmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICAgICAgdGhpcy5oZWFkZXJfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oZWFkZXJDbGlja0hhbmRsZXJfKTtcbiAgICAgIGlmICh0aGlzLmNvbnRlbnRfKSB7XG4gICAgICAgIHRoaXMuY29udGVudF8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGxIYW5kbGVyXygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlYWRlcl8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGVhZGVyVHJhbnNpdGlvbkVuZEhhbmRsZXJfKTtcbiAgICAgIHRoaXMuaGVhZGVyXy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGVhZGVyQ2xpY2tIYW5kbGVyXyk7XG4gICAgICBpZiAodGhpcy5jb250ZW50Xykge1xuICAgICAgICB0aGlzLmNvbnRlbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbEhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICB0aGlzLnNldE9uU2l6ZVNjcmVlbl8gPSBmdW5jdGlvbiAob25TaXplU2NyZWVuKSB7XG4gICAgJHNjb3BlLm9uU2l6ZVNjcmVlbiA9IG9uU2l6ZVNjcmVlbjtcbiAgICBNZGwuaWZDbGFzcyh0aGlzLmRyYXdlckJ1dHRvbl8sIG9uU2l6ZVNjcmVlbiA9PT0gTWRsTGF5b3V0T25TaXplU2NyZWVuXy5MQVJHRSwgdGhpcy5Dc3NDbGFzc2VzXy5PTl9MQVJHRV9TQ1JFRU4pO1xuICAgIE1kbC5pZkNsYXNzKHRoaXMuZHJhd2VyQnV0dG9uXywgb25TaXplU2NyZWVuID09PSBNZGxMYXlvdXRPblNpemVTY3JlZW5fLlNNQUxMLCB0aGlzLkNzc0NsYXNzZXNfLk9OX1NNQUxMX1NDUkVFTik7XG4gIH0uYmluZCh0aGlzKTtcblxuICB0aGlzLnNjcmVlblNpemVNZWRpYVF1ZXJ5XyA9IHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMuQ29uc3RhbnRfLk1BWF9XSURUSCk7XG4gIHRoaXMuc2NyZWVuU2l6ZU1lZGlhUXVlcnlfLmFkZExpc3RlbmVyKHRoaXMuc2NyZWVuU2l6ZUhhbmRsZXJfKTtcbiAgdGhpcy5zY3JlZW5TaXplSGFuZGxlcl8oKTtcblxuICB0aGlzLmluaXRfID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGZvY3VzZWRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMnKTtcbiAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZWxlbWVudCk7XG4gICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBpZiAoZm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgIGZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUucGVyc2lzdGVkKSByZXR1cm47XG4gICAgICAvLyB3aGVuIHBhZ2UgaXMgbG9hZGVkIGZyb20gYmFjay9mb3J3YXJkIGNhY2hlXG4gICAgICAvLyB0cmlnZ2VyIHJlcGFpbnQgdG8gbGV0IGxheW91dCBzY3JvbGwgaW4gc2FmYXJpXG4gICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5vdmVyZmxvd1kgPSAnJztcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5zZXRfKCdlbGVtZW50XycsIGVsZW1lbnQpO1xuICAgIHRoaXMuc2V0XygnY29udGFpbmVyXycsIGNvbnRhaW5lcik7XG4gIH0uYmluZCh0aGlzKTtcblxuICAkc2NvcGUuJHdhdGNoKCdtb2RlJywgdGhpcy5zZXRNb2RlXyk7XG4gICRzY29wZS4kd2F0Y2goJ29uU2l6ZVNjcmVlbicsIHRoaXMuc2V0T25TaXplU2NyZWVuXyk7XG5cbn1cblxuZnVuY3Rpb24gYnVpbGRlck1kbExheW91dEVsZW1lbnREaXJlY3RpdmUoZWxlbWVudE5hbWUsIGxpbmspIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgJ25nSW5qZWN0JztcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHJlcXVpcmU6ICdebWRsTGF5b3V0JyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsIG1kbExheW91dEN0cmwpIHtcbiAgICAgICAgbWRsTGF5b3V0Q3RybC5zZXRfKGVsZW1lbnROYW1lLCAkZWxlbWVudFswXSk7XG4gICAgICAgIGxpbmsgJiYgbGluay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbmFuZ3VsYXIubW9kdWxlKCduZy1tZGwnKVxuXG4uY29uc3RhbnQoJ01kbExheW91dENvbnN0YW50XycsIHtcbiAgTUFYX1dJRFRIOiAnKG1heC13aWR0aDogMTAyNHB4KScsXG4gIE1FTlVfSUNPTjogJyYjeEU1RDI7Jyxcbn0pXG5cbi5jb25zdGFudCgnTWRsTGF5b3V0S2V5Q29kZXNfJywge1xuICBFTlRFUjogMTMsXG4gIEVTQ0FQRTogMjcsXG4gIFNQQUNFOiAzMlxufSlcblxuLmNvbnN0YW50KCdNZGxMYXlvdXRNb2RlXycsIHtcbiAgU1RBTkRBUkQ6ICdzdGFuZGFyZCcsXG4gIFNFQU1FRDogJ3NlYW1lZCcsXG4gIFdBVEVSRkFMTDogJ3dhdGVyZmFsbCcsXG4gIFNDUk9MTDogJ3Njcm9sbCdcbn0pXG5cbi5jb25zdGFudCgnTWRsTGF5b3V0T25TaXplU2NyZWVuXycsIHtcbiAgTEFSR0U6ICdsYXJnZScsXG4gIFNNQUxMOiAnc21hbGwnLFxufSlcblxuLmNvbnN0YW50KCdNZGxMYXlvdXRDc3NDbGFzc2VzXycsIHtcbiAgTEFZT1VUOiAnbWRsLWxheW91dCcsXG4gIENPTlRBSU5FUjogJ21kbC1sYXlvdXRfX2NvbnRhaW5lcicsXG4gIEhFQURFUjogJ21kbC1sYXlvdXRfX2hlYWRlcicsXG4gIERSQVdFUjogJ21kbC1sYXlvdXRfX2RyYXdlcicsXG4gIENPTlRFTlQ6ICdtZGwtbGF5b3V0X19jb250ZW50JyxcbiAgRFJBV0VSX0JUTjogJ21kbC1sYXlvdXRfX2RyYXdlci1idXR0b24nLFxuICBJQ09OOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICBKU19SSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWxheW91dF9fdGFiLXJpcHBsZS1jb250YWluZXInLFxuICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gIEhFQURFUl9TRUFNRUQ6ICdtZGwtbGF5b3V0X19oZWFkZXItLXNlYW1lZCcsXG4gIEhFQURFUl9XQVRFUkZBTEw6ICdtZGwtbGF5b3V0X19oZWFkZXItLXdhdGVyZmFsbCcsXG4gIEhFQURFUl9TQ1JPTEw6ICdtZGwtbGF5b3V0X19oZWFkZXItLXNjcm9sbCcsXG4gIEZJWEVEX0hFQURFUjogJ21kbC1sYXlvdXQtLWZpeGVkLWhlYWRlcicsXG4gIE9CRlVTQ0FUT1I6ICdtZGwtbGF5b3V0X19vYmZ1c2NhdG9yJyxcbiAgSEFTX0RSQVdFUjogJ2hhcy1kcmF3ZXInLFxuICBIQVNfVEFCUzogJ2hhcy10YWJzJyxcbiAgSEFTX1NDUk9MTElOR19IRUFERVI6ICdoYXMtc2Nyb2xsaW5nLWhlYWRlcicsXG4gIENBU1RJTkdfU0hBRE9XOiAnaXMtY2FzdGluZy1zaGFkb3cnLFxuICBJU19DT01QQUNUOiAnaXMtY29tcGFjdCcsXG4gIElTX1NNQUxMX1NDUkVFTjogJ2lzLXNtYWxsLXNjcmVlbicsXG4gIElTX0RSQVdFUl9PUEVOOiAnaXMtdmlzaWJsZScsXG4gIElTX0FDVElWRTogJ2lzLWFjdGl2ZScsXG4gIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICBPTl9MQVJHRV9TQ1JFRU46ICdtZGwtbGF5b3V0LS1sYXJnZS1zY3JlZW4tb25seScsXG4gIE9OX1NNQUxMX1NDUkVFTjogJ21kbC1sYXlvdXQtLXNtYWxsLXNjcmVlbi1vbmx5J1xufSlcblxuLmRpcmVjdGl2ZSgnbWRsTGF5b3V0JywgZnVuY3Rpb24gKCkgeyAnbmdJbmplY3QnO1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHtcbiAgICAgIG1vZGU6ICdAJyxcbiAgICAgIG9uU2l6ZVNjcmVlbjogJ0AnLFxuICAgIH0sXG4gICAgY29udHJvbGxlcjogTWRsTGF5b3V0Q3RybCxcbiAgICBsaW5rOiBmdW5jdGlvbiBsaW5rTWRsTGF5b3V0KCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgbWRsTGF5b3V0Q3RybCkge1xuICAgICAgbWRsTGF5b3V0Q3RybC5pbml0XygkZWxlbWVudFswXSk7XG4gICAgfSxcbiAgfTtcbn0pXG4uZGlyZWN0aXZlKCdtZGxMYXlvdXRIZWFkZXInLCAgICAgICBidWlsZGVyTWRsTGF5b3V0RWxlbWVudERpcmVjdGl2ZSgnaGVhZGVyXycpKVxuLmRpcmVjdGl2ZSgnbWRsTGF5b3V0RHJhd2VyJywgICAgICAgYnVpbGRlck1kbExheW91dEVsZW1lbnREaXJlY3RpdmUoJ2RyYXdlcl8nKSlcbi5kaXJlY3RpdmUoJ21kbExheW91dENvbnRlbnQnLCAgICAgIGJ1aWxkZXJNZGxMYXlvdXRFbGVtZW50RGlyZWN0aXZlKCdjb250ZW50XycpKVxuLmRpcmVjdGl2ZSgnbWRsTGF5b3V0RHJhd2VyQnV0dG9uJywgYnVpbGRlck1kbExheW91dEVsZW1lbnREaXJlY3RpdmUoJ2RyYXdlckJ1dHRvbl8nKSlcbi5kaXJlY3RpdmUoJ21kbExheW91dERyYXdlclRvZ2dsZScsIGZ1bmN0aW9uICgpIHsgJ25nSW5qZWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6ICdebWRsTGF5b3V0JyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCBtZGxMYXlvdXRDdHJsKSB7XG4gICAgICAkZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1kbExheW91dEN0cmwudG9nZ2xlRHJhd2VyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctbWRsLWxheW91dC5qcyIsIihmdW5jdGlvbiAoKSB7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE1hdGVyaWFsTWVudVNlcnZpY2UgKE1hdGVyaWFsUmlwcGxlU2VydmljZSkgeyAnbmdJbmplY3QnO1xuXG4gIHZhciBpbnN0YW5jZXMgPSBbXTtcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIGRyb3Bkb3duIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG4gIGZ1bmN0aW9uIE1hdGVyaWFsTWVudShlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XG5cbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgLy8gVG90YWwgZHVyYXRpb24gb2YgdGhlIG1lbnUgYW5pbWF0aW9uLlxuICAgIFRSQU5TSVRJT05fRFVSQVRJT05fU0VDT05EUzogMC4zLFxuICAgIC8vIFRoZSBmcmFjdGlvbiBvZiB0aGUgdG90YWwgZHVyYXRpb24gd2Ugd2FudCB0byB1c2UgZm9yIG1lbnUgaXRlbSBhbmltYXRpb25zLlxuICAgIFRSQU5TSVRJT05fRFVSQVRJT05fRlJBQ1RJT046IDAuOCxcbiAgICAvLyBIb3cgbG9uZyB0aGUgbWVudSBzdGF5cyBvcGVuIGFmdGVyIGNob29zaW5nIGFuIG9wdGlvbiAoc28gdGhlIHVzZXIgY2FuIHNlZVxuICAgIC8vIHRoZSByaXBwbGUpLlxuICAgIENMT1NFX1RJTUVPVVQ6IDE1MFxuICB9O1xuXG4gIC8qKlxuICAgKiBLZXljb2RlcywgZm9yIGNvZGUgcmVhZGFiaWxpdHkuXG4gICAqXG4gICAqIEBlbnVtIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbE1lbnUucHJvdG90eXBlLktleWNvZGVzXyA9IHtcbiAgICBFTlRFUjogMTMsXG4gICAgRVNDQVBFOiAyNyxcbiAgICBTUEFDRTogMzIsXG4gICAgVVBfQVJST1c6IDM4LFxuICAgIERPV05fQVJST1c6IDQwXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbE1lbnUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIENPTlRBSU5FUjogICAgICAgICdtZGwtbWVudV9fY29udGFpbmVyJyxcbiAgICBPVVRMSU5FOiAgICAgICAgICAnbWRsLW1lbnVfX291dGxpbmUnLFxuICAgIE1FTlU6ICAgICAgICAgICAgICdtZGwtbWVudScsXG4gICAgSVRFTTogICAgICAgICAgICAgJ21kbC1tZW51X19pdGVtJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLW1lbnVfX2l0ZW0tcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgLy8gU3RhdHVzZXNcbiAgICBJU19VUEdSQURFRDogICdpcy11cGdyYWRlZCcsXG4gICAgSVNfVklTSUJMRTogICAnaXMtdmlzaWJsZScsXG4gICAgSVNfQU5JTUFUSU5HOiAnaXMtYW5pbWF0aW5nJyxcbiAgICAvLyBBbGlnbm1lbnQgb3B0aW9uc1xuICAgIEJPVFRPTV9MRUZUOiAgJ21kbC1tZW51LS1ib3R0b20tbGVmdCcsICAvLyBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICAgIEJPVFRPTV9SSUdIVDogJ21kbC1tZW51LS1ib3R0b20tcmlnaHQnLFxuICAgIFRPUF9MRUZUOiAgICAgJ21kbC1tZW51LS10b3AtbGVmdCcsXG4gICAgVE9QX1JJR0hUOiAgICAnbWRsLW1lbnUtLXRvcC1yaWdodCcsXG4gICAgVU5BTElHTkVEOiAgICAnbWRsLW1lbnUtLXVuYWxpZ25lZCdcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbiAgTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgdGhlIG1lbnUuXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ09OVEFJTkVSKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRU5VKTtcbiAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgdGhpcy5lbGVtZW50Xyk7XG4gICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICB0aGlzLmNvbnRhaW5lcl8gPSBjb250YWluZXI7XG5cbiAgICAvLyBDcmVhdGUgb3V0bGluZSBmb3IgdGhlIG1lbnUgKHNoYWRvdyBhbmQgYmFja2dyb3VuZCkuXG4gICAgdmFyIG91dGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PVVRMSU5FKTtcbiAgICB0aGlzLm91dGxpbmVfID0gb3V0bGluZTtcbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG91dGxpbmUsIHRoaXMuZWxlbWVudF8pO1xuXG4gICAgLy8gQ29weSBhbGlnbm1lbnQgY2xhc3NlcyB0byB0aGUgY29udGFpbmVyLCBzbyB0aGUgb3V0bGluZSBjYW4gdXNlIHRoZW0uXG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX0xFRlQpKSB7XG4gICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fTEVGVCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSkge1xuICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpKSB7XG4gICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY2xpY2sgb24gdGhlIFwiZm9yXCIgZWxlbWVudCwgYnkgcG9zaXRpb25pbmcgdGhlIG1lbnUgYW5kIHRoZW5cbiAgICogdG9nZ2xpbmcgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlRm9yQ2xpY2tfID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgZXZ0LmZvckVsZW1lbnRfKSB7XG4gICAgICB2YXIgcmVjdCA9IGV2dC5mb3JFbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBmb3JSZWN0ID0gZXZ0LmZvckVsZW1lbnRfLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlVOQUxJR05FRCkpIHtcbiAgICAgICAgLy8gRG8gbm90IHBvc2l0aW9uIHRoZSBtZW51IGF1dG9tYXRpY2FsbHkuIFJlcXVpcmVzIHRoZSBkZXZlbG9wZXIgdG9cbiAgICAgICAgLy8gbWFudWFsbHkgc3BlY2lmeSBwb3NpdGlvbi5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAgICAgdGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fUklHSFQpKSB7XG4gICAgICAgIC8vIFBvc2l0aW9uIGJlbG93IHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIHJpZ2h0LlxuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUucmlnaHQgPSAoZm9yUmVjdC5yaWdodCAtIHJlY3QucmlnaHQpICsgJ3B4JztcbiAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnRvcCA9XG4gICAgICAgICAgICBldnQuZm9yRWxlbWVudF8ub2Zmc2V0VG9wICsgZXZ0LmZvckVsZW1lbnRfLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpKSB7XG4gICAgICAgIC8vIFBvc2l0aW9uIGFib3ZlIHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIGxlZnQuXG4gICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5sZWZ0ID0gZXZ0LmZvckVsZW1lbnRfLm9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUuYm90dG9tID0gKGZvclJlY3QuYm90dG9tIC0gcmVjdC50b3ApICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpKSB7XG4gICAgICAgIC8vIFBvc2l0aW9uIGFib3ZlIHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIHJpZ2h0LlxuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUucmlnaHQgPSAoZm9yUmVjdC5yaWdodCAtIHJlY3QucmlnaHQpICsgJ3B4JztcbiAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmJvdHRvbSA9IChmb3JSZWN0LmJvdHRvbSAtIHJlY3QudG9wKSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZWZhdWx0OiBwb3NpdGlvbiBiZWxvdyB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyBsZWZ0LlxuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUubGVmdCA9IGV2dC5mb3JFbGVtZW50Xy5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnRvcCA9XG4gICAgICAgICAgICBldnQuZm9yRWxlbWVudF8ub2Zmc2V0VG9wICsgZXZ0LmZvckVsZW1lbnRfLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGUoZXZ0KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBhIGtleWJvYXJkIGV2ZW50IG9uIHRoZSBcImZvclwiIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlRm9yS2V5Ym9hcmRFdmVudF8gPSBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8gJiYgZXZ0LmZvckVsZW1lbnRfKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNICtcbiAgICAgICAgJzpub3QoW2Rpc2FibGVkXSknKTtcblxuICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSkpIHtcbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5VUF9BUlJPVykge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkRPV05fQVJST1cpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpdGVtc1swXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEga2V5Ym9hcmQgZXZlbnQgb24gYW4gaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oYW5kbGVJdGVtS2V5Ym9hcmRFdmVudF8gPSBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8pIHtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0gK1xuICAgICAgICAnOm5vdChbZGlzYWJsZWRdKScpO1xuXG4gICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKSkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlbXMpLmluZGV4T2YoZXZ0LnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5VUF9BUlJPVykge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgICBpdGVtc1tjdXJyZW50SW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uRE9XTl9BUlJPVykge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiBjdXJyZW50SW5kZXggKyAxKSB7XG4gICAgICAgICAgICBpdGVtc1tjdXJyZW50SW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtc1swXS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uU1BBQ0UgfHxcbiAgICAgICAgICAgICAgZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkVOVEVSKSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgLy8gU2VuZCBtb3VzZWRvd24gYW5kIG1vdXNldXAgdG8gdHJpZ2dlciByaXBwbGUuXG4gICAgICAgICAgdmFyIGUgPSBuZXcgTW91c2VFdmVudCgnbW91c2Vkb3duJyk7XG4gICAgICAgICAgZXZ0LnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgIGUgPSBuZXcgTW91c2VFdmVudCgnbW91c2V1cCcpO1xuICAgICAgICAgIGV2dC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAvLyBTZW5kIGNsaWNrLlxuICAgICAgICAgIGV2dC50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uRVNDQVBFKSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBjbGljayBldmVudCBvbiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUl0ZW1DbGlja18gPSBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2FpdCBzb21lIHRpbWUgYmVmb3JlIGNsb3NpbmcgbWVudSwgc28gdGhlIHVzZXIgY2FuIHNlZSB0aGUgcmlwcGxlLlxuICAgICAgdGhpcy5jbG9zaW5nXyA9IHRydWU7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbihldnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIHRoaXMuY2xvc2luZ18gPSBmYWxzZTtcbiAgICAgIH0uYmluZCh0aGlzKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovICh0aGlzLkNvbnN0YW50Xy5DTE9TRV9USU1FT1VUKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBpbml0aWFsIGNsaXAgKGZvciBvcGVuaW5nIHRoZSBtZW51KSBvciBmaW5hbCBjbGlwIChmb3IgY2xvc2luZ1xuICAgKiBpdCksIGFuZCBhcHBsaWVzIGl0LiBUaGlzIGFsbG93cyB1cyB0byBhbmltYXRlIGZyb20gb3IgdG8gdGhlIGNvcnJlY3QgcG9pbnQsXG4gICAqIHRoYXQgaXMsIHRoZSBwb2ludCBpdCdzIGFsaWduZWQgdG8gaW4gdGhlIFwiZm9yXCIgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgdGhlIGNsaXAgcmVjdGFuZ2xlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB0aGUgY2xpcCByZWN0YW5nbGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsTWVudS5wcm90b3R5cGUuYXBwbHlDbGlwXyA9IGZ1bmN0aW9uKGhlaWdodCwgd2lkdGgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAvLyBEbyBub3QgY2xpcC5cbiAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fUklHSFQpKSB7XG4gICAgICAvLyBDbGlwIHRvIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID1cbiAgICAgICAgICAncmVjdCgwICcgKyB3aWR0aCArICdweCAnICsgJzAgJyArIHdpZHRoICsgJ3B4KSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSkge1xuICAgICAgLy8gQ2xpcCB0byB0aGUgYm90dG9tIGxlZnQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID1cbiAgICAgICAgICAncmVjdCgnICsgaGVpZ2h0ICsgJ3B4IDAgJyArIGhlaWdodCArICdweCAwKSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgIC8vIENsaXAgdG8gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIgb2YgdGhlIG1lbnUuXG4gICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgnICsgaGVpZ2h0ICsgJ3B4ICcgKyB3aWR0aCArICdweCAnICtcbiAgICAgICAgICBoZWlnaHQgKyAncHggJyArIHdpZHRoICsgJ3B4KSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQ6IGRvIG5vdCBjbGlwIChzYW1lIGFzIGNsaXBwaW5nIHRvIHRoZSB0b3AgbGVmdCBjb3JuZXIpLlxuICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJyc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBhbmltYXRpb24gbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsTWVudS5wcm90b3R5cGUucmVtb3ZlQW5pbWF0aW9uRW5kTGlzdGVuZXJfID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKE1hdGVyaWFsTWVudS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBjbGVhbiB1cCBhZnRlciB0aGUgYW5pbWF0aW9uIGVuZHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbE1lbnUucHJvdG90eXBlLmFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMucmVtb3ZlQW5pbWF0aW9uRW5kTGlzdGVuZXJfKTtcbiAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0aGlzLnJlbW92ZUFuaW1hdGlvbkVuZExpc3RlbmVyXyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBtZW51LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbE1lbnUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8gJiYgdGhpcy5vdXRsaW5lXykge1xuICAgICAgLy8gTWVhc3VyZSB0aGUgaW5uZXIgZWxlbWVudC5cbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cbiAgICAgIC8vIEFwcGx5IHRoZSBpbm5lciBlbGVtZW50J3Mgc2l6ZSB0byB0aGUgY29udGFpbmVyIGFuZCBvdXRsaW5lLlxuICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICB0aGlzLm91dGxpbmVfLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgdGhpcy5vdXRsaW5lXy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5Db25zdGFudF8uVFJBTlNJVElPTl9EVVJBVElPTl9TRUNPTkRTICpcbiAgICAgICAgICB0aGlzLkNvbnN0YW50Xy5UUkFOU0lUSU9OX0RVUkFUSU9OX0ZSQUNUSU9OO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdHJhbnNpdGlvbiBkZWxheXMgZm9yIGluZGl2aWR1YWwgbWVudSBpdGVtcywgc28gdGhhdCB0aGV5IGZhZGVcbiAgICAgIC8vIGluIG9uZSBhdCBhIHRpbWUuXG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW1EZWxheSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSB8fFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpKSB7XG4gICAgICAgICAgaXRlbURlbGF5ID0gKChoZWlnaHQgLSBpdGVtc1tpXS5vZmZzZXRUb3AgLSBpdGVtc1tpXS5vZmZzZXRIZWlnaHQpIC9cbiAgICAgICAgICAgICAgaGVpZ2h0ICogdHJhbnNpdGlvbkR1cmF0aW9uKSArICdzJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtRGVsYXkgPSAoaXRlbXNbaV0ub2Zmc2V0VG9wIC8gaGVpZ2h0ICogdHJhbnNpdGlvbkR1cmF0aW9uKSArICdzJztcbiAgICAgICAgfVxuICAgICAgICBpdGVtc1tpXS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBpdGVtRGVsYXk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IHRoZSBpbml0aWFsIGNsaXAgdG8gdGhlIHRleHQgYmVmb3JlIHdlIHN0YXJ0IGFuaW1hdGluZy5cbiAgICAgIHRoaXMuYXBwbHlDbGlwXyhoZWlnaHQsIHdpZHRoKTtcblxuICAgICAgLy8gV2FpdCBmb3IgdGhlIG5leHQgZnJhbWUsIHR1cm4gb24gYW5pbWF0aW9uLCBhbmQgYXBwbHkgdGhlIGZpbmFsIGNsaXAuXG4gICAgICAvLyBBbHNvIG1ha2UgaXQgdmlzaWJsZS4gVGhpcyB0cmlnZ2VycyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgwICcgKyB3aWR0aCArICdweCAnICsgaGVpZ2h0ICsgJ3B4IDApJztcbiAgICAgICAgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGUuXG4gICAgICB0aGlzLmFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXygpO1xuXG4gICAgICAvLyBBZGQgYSBjbGljayBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnQsIHRvIGNsb3NlIHRoZSBtZW51LlxuICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGRvY3VtZW50IGlzIHByb2Nlc3NpbmcgdGhlIHNhbWUgZXZlbnQgdGhhdFxuICAgICAgICAvLyBkaXNwbGF5ZWQgdGhlIG1lbnUgaW4gdGhlIGZpcnN0IHBsYWNlLiBJZiBzbywgZG8gbm90aGluZy5cbiAgICAgICAgLy8gQWxzbyBjaGVjayB0byBzZWUgaWYgdGhlIG1lbnUgaXMgaW4gdGhlIHByb2Nlc3Mgb2YgY2xvc2luZyBpdHNlbGYsIGFuZFxuICAgICAgICAvLyBkbyBub3RoaW5nIGluIHRoYXQgY2FzZS5cbiAgICAgICAgLy8gQWxzbyBjaGVjayBpZiB0aGUgY2xpY2tlZCBlbGVtZW50IGlzIGEgbWVudSBpdGVtXG4gICAgICAgIC8vIGlmIHNvLCBkbyBub3RoaW5nLlxuICAgICAgICBpZiAoZSAhPT0gZXZ0ICYmICF0aGlzLmNsb3NpbmdfICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgIT09IHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgbWVudS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMub3V0bGluZV8pIHtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuXG4gICAgICAvLyBSZW1vdmUgYWxsIHRyYW5zaXRpb24gZGVsYXlzOyBtZW51IGl0ZW1zIGZhZGUgb3V0IGNvbmN1cnJlbnRseS5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbXNbaV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZGVsYXknKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWVhc3VyZSB0aGUgaW5uZXIgZWxlbWVudC5cbiAgICAgIHZhciByZWN0ID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG5cbiAgICAgIC8vIFR1cm4gb24gYW5pbWF0aW9uLCBhbmQgYXBwbHkgdGhlIGZpbmFsIGNsaXAuIEFsc28gbWFrZSBpbnZpc2libGUuXG4gICAgICAvLyBUaGlzIHRyaWdnZXJzIHRoZSB0cmFuc2l0aW9ucy5cbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICB0aGlzLmFwcGx5Q2xpcF8oaGVpZ2h0LCB3aWR0aCk7XG4gICAgICB0aGlzLmNvbnRhaW5lcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpO1xuXG4gICAgICAvLyBDbGVhbiB1cCBhZnRlciB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAgdGhpcy5hZGRBbmltYXRpb25FbmRMaXN0ZW5lcl8oKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIG9yIGhpZGVzIHRoZSBtZW51LCBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxNZW51LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KGV2dCk7XG4gICAgfVxuICB9O1xuXG4gIE1hdGVyaWFsTWVudS5wcm90b3R5cGUuYWRkSXRlbSA9IGZ1bmN0aW9uICgkc2NvcGUsIGl0ZW0pIHtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JVEVNKTtcbiAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBlYWNoIG1lbnUgaXRlbS5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVJdGVtQ2xpY2tfLmJpbmQodGhpcykpO1xuICAgIC8vIEFkZCBhIHRhYiBpbmRleCB0byBlYWNoIG1lbnUgaXRlbS5cbiAgICBpdGVtLnRhYkluZGV4ID0gJy0xJztcbiAgICAvLyBBZGQgYSBrZXlib2FyZCBsaXN0ZW5lciB0byBlYWNoIG1lbnUgaXRlbS5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUl0ZW1LZXlib2FyZEV2ZW50Xy5iaW5kKHRoaXMpKTtcbiAgICAvLyBBZGQgcmlwcGxlIGVmZmVjdFxuICAgIE1hdGVyaWFsUmlwcGxlU2VydmljZS5hZGRSaXBwbGVFZmZlY3QoaXRlbSwgdGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZXM6IGluc3RhbmNlcyxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IE1hdGVyaWFsTWVudShlbGVtZW50KTtcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgaW5zdGFuY2UsIGluc3RhbmNlTmFtZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8aW5zdGFuY2VzLmxlbmd0aDtpKyspe1xuICAgICAgICBpbnN0YW5jZSA9IGluc3RhbmNlc1tpXTtcbiAgICAgICAgaW5zdGFuY2VOYW1lID0gaW5zdGFuY2UuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdtZGwtbWVudScpfHwnJztcbiAgICAgICAgaWYgKGluc3RhbmNlTmFtZSA9PT0gbmFtZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxufVxuXG5mdW5jdGlvbiBNYXRlcmlhbE1lbnVDdHJsICgkc2NvcGUsIE1hdGVyaWFsTWVudVNlcnZpY2UpIHsgJ25nSW5qZWN0JztcbiAgdGhpcy5pdGVtc18gPSBbXTtcblxuICB0aGlzLmluaXRfID0gZnVuY3Rpb24gKG1lbnVFbGVtZW50KSB7XG4gICAgdGhpcy5pbnN0YW5jZV8gPSBNYXRlcmlhbE1lbnVTZXJ2aWNlLmNyZWF0ZShtZW51RWxlbWVudCk7XG4gICAgdGhpcy5pdGVtc18ubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB0aGlzLmluc3RhbmNlXy5hZGRJdGVtKCRzY29wZSwgaXRlbSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuYWRkSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2VfKSB7XG4gICAgICB0aGlzLmFkZEl0ZW0oJHNjb3BlLCBpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtc18ucHVzaChpdGVtKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG59XG5cbmFuZ3VsYXIubW9kdWxlKCduZy1tZGwnKVxuXG4uc2VydmljZSgnTWF0ZXJpYWxNZW51U2VydmljZScsIE1hdGVyaWFsTWVudVNlcnZpY2UpXG5cbi5kaXJlY3RpdmUoJ21kbE1lbnUnLCBmdW5jdGlvbiAoKSB7ICduZ0luamVjdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBjb250cm9sbGVyOiBNYXRlcmlhbE1lbnVDdHJsLFxuICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsIGN0cmwpIHtcbiAgICAgIGN0cmwuaW5pdF8oJGVsZW1lbnRbMF0pXG4gICAgfSxcbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ21kbE1lbnVUb2dnbGUnLCBmdW5jdGlvbiAoTWF0ZXJpYWxNZW51U2VydmljZSkgeyAnbmdJbmplY3QnO1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgJGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuZm9yRWxlbWVudF8gPSAkZWxlbWVudFswXTtcbiAgICAgICAgdmFyIG5hbWUgPSAkZWxlbWVudFswXS5nZXRBdHRyaWJ1dGUoJ21kbC1tZW51LXRvZ2dsZScpfHwnJztcbiAgICAgICAgdmFyIGluc3RhbmNlID0gTWF0ZXJpYWxNZW51U2VydmljZS5maW5kKG5hbWUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oYW5kbGVGb3JDbGlja18uYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgJGVsZW1lbnQub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5mb3JFbGVtZW50XyA9ICRlbGVtZW50WzBdO1xuICAgICAgICB2YXIgbmFtZSA9ICRlbGVtZW50WzBdLmdldEF0dHJpYnV0ZSgnbWRsLW1lbnUtdG9nZ2xlJyl8fCcnO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBNYXRlcmlhbE1lbnVTZXJ2aWNlLmZpbmQobmFtZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhhbmRsZUZvcktleWJvYXJkRXZlbnRfLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnbWRsTWVudUl0ZW0nLCBmdW5jdGlvbiAoKSB7ICduZ0luamVjdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnXm1kbE1lbnUnLFxuICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsIG1kbE1lbnVDdHJsKSB7XG4gICAgICBtZGxNZW51Q3RybC5hZGRJdGVtKCRlbGVtZW50WzBdKVxuICAgIH0sXG4gIH07XG59KTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctbWRsLW1lbnUuanMiLCIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBNYXRlcmlhbFByb2dyZXNzU2VydmljZSAoKSB7ICduZ0luamVjdCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBQcm9ncmVzcyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xuICBmdW5jdGlvbiBNYXRlcmlhbFByb2dyZXNzKCRzY29wZSwgZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG5cbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgkc2NvcGUsICRhdHRycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBQUk9HUkVTUzogICAgICAgICAgICAnbWRsLXByb2dyZXNzJyxcbiAgICBJTkRFVEVSTUlOQVRFX0NMQVNTOiAnbWRsLXByb2dyZXNzX19pbmRldGVybWluYXRlJyxcbiAgICBJU19VUEdSQURFRDogICAgICAgICAnaXMtdXBncmFkZWQnXG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgcHJvZ3Jlc3NiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwIFBlcmNlbnRhZ2Ugb2YgdGhlIHByb2dyZXNzICgwLTEwMClcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbihwKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSU5ERVRFUk1JTkFURV9DTEFTUykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb2dyZXNzYmFyXy5zdHlsZS53aWR0aCA9IHAgKyAnJSc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgYnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcCBQZXJjZW50YWdlIG9mIHRoZSBidWZmZXIgKDAtMTAwKVxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5zZXRCdWZmZXIgPSBmdW5jdGlvbihwKSB7XG4gICAgdGhpcy5idWZmZXJiYXJfLnN0eWxlLndpZHRoID0gcCArICclJztcbiAgICB0aGlzLmF1eGJhcl8uc3R5bGUud2lkdGggPSAoMTAwIC0gcCkgKyAnJSc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG4gIE1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigkc2NvcGUsICRhdHRycykge1xuXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NOYW1lID0gJ3Byb2dyZXNzYmFyIGJhciBiYXIxJztcbiAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGVsKTtcbiAgICB0aGlzLnByb2dyZXNzYmFyXyA9IGVsO1xuXG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5jbGFzc05hbWUgPSAnYnVmZmVyYmFyIGJhciBiYXIyJztcbiAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGVsKTtcbiAgICB0aGlzLmJ1ZmZlcmJhcl8gPSBlbDtcblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NOYW1lID0gJ2F1eGJhciBiYXIgYmFyMyc7XG4gICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChlbCk7XG4gICAgdGhpcy5hdXhiYXJfID0gZWw7XG5cbiAgICB0aGlzLnByb2dyZXNzYmFyXy5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgdGhpcy5idWZmZXJiYXJfLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHRoaXMuYXV4YmFyXy5zdHlsZS53aWR0aCA9ICcwJSc7XG5cbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5QUk9HUkVTUyk7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuXG4gICAgJGF0dHJzLnByb2dyZXNzICYmICRzY29wZS4kd2F0Y2goJGF0dHJzLnByb2dyZXNzLCB0aGlzLnNldFByb2dyZXNzLmJpbmQodGhpcykpO1xuICAgICRhdHRycy5idWZmZXIgJiYgJHNjb3BlLiR3YXRjaCgkYXR0cnMuYnVmZmVyLCB0aGlzLnNldEJ1ZmZlci5iaW5kKHRoaXMpKTtcblxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoJHNjb3BlLCBlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgIHJldHVybiBuZXcgTWF0ZXJpYWxQcm9ncmVzcygkc2NvcGUsIGVsZW1lbnQsICRhdHRycyk7XG4gICAgfSxcbiAgfTtcblxufVxuXG5hbmd1bGFyLm1vZHVsZSgnbmctbWRsJylcbi5zZXJ2aWNlKCdNYXRlcmlhbFByb2dyZXNzU2VydmljZScsIE1hdGVyaWFsUHJvZ3Jlc3NTZXJ2aWNlKVxuLmRpcmVjdGl2ZSgnbWRsUHJvZ3Jlc3MnLCBmdW5jdGlvbiAoTWF0ZXJpYWxQcm9ncmVzc1NlcnZpY2UpIHsgJ25nSW5qZWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgIE1hdGVyaWFsUHJvZ3Jlc3NTZXJ2aWNlLmNyZWF0ZSgkc2NvcGUsICRlbGVtZW50WzBdLCAkYXR0cnMpO1xuICAgIH0sXG4gIH07XG59KTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctbWRsLXByb2dyZXNzLmpzIiwiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTWF0ZXJpYWxSYWRpb1NlcnZpY2UgKE1kbCwgTWF0ZXJpYWxSaXBwbGVTZXJ2aWNlKSB7ICduZ0luamVjdCc7XG4gIFxuICB2YXIgaW5zdGFuY2VzID0gW107XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBSYWRpbyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xuICBmdW5jdGlvbiBNYXRlcmlhbFJhZGlvKCRzY29wZSwgZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuXG4gICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XG5cbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgkc2NvcGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIFRJTllfVElNRU9VVDogMC4wMDFcbiAgfTtcblxuICAvKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElTX0ZPQ1VTRUQ6ICAgICAgICAgICAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICAgICAgICAgICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogICAgICAgICAgICdpcy1jaGVja2VkJyxcbiAgICBJU19VUEdSQURFRDogICAgICAgICAgJ2lzLXVwZ3JhZGVkJyxcbiAgICBSQURJTzogICAgICAgICAgICAgICAgJ21kbC1yYWRpbycsXG4gICAgUkFESU9fQlROOiAgICAgICAgICAgICdtZGwtcmFkaW9fX2J1dHRvbicsXG4gICAgUkFESU9fT1VURVJfQ0lSQ0xFOiAgICdtZGwtcmFkaW9fX291dGVyLWNpcmNsZScsXG4gICAgUkFESU9fSU5ORVJfQ0lSQ0xFOiAgICdtZGwtcmFkaW9fX2lubmVyLWNpcmNsZScsXG4gICAgUklQUExFX0NPTlRBSU5FUjogICAgICdtZGwtcmFkaW9fX3JpcHBsZS1jb250YWluZXInLFxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gU2luY2Ugb3RoZXIgcmFkaW8gYnV0dG9ucyBkb24ndCBnZXQgY2hhbmdlIGV2ZW50cywgd2UgbmVlZCB0byBsb29rIGZvclxuICAgIC8vIHRoZW0gdG8gdXBkYXRlIHRoZWlyIGNsYXNzZXMuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIERpZmZlcmVudCBuYW1lID09IGRpZmZlcmVudCBncm91cCwgc28gbm8gcG9pbnQgdXBkYXRpbmcgdGhvc2UuXG4gICAgICBpZiAoaW5zdGFuY2VzW2ldLmJ0bkVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnbWRsLXJhZGlvJykgPT09IHRoaXMuYnRuRWxlbWVudF8uZ2V0QXR0cmlidXRlKCdtZGwtcmFkaW8nKSkge1xuICAgICAgICBpbnN0YW5jZXNbaV0udXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5vbk1vdXNldXBfID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjbGFzc2VzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVG9nZ2xlU3RhdGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGJsdXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYnRuRWxlbWVudF8uYmx1cigpO1xuICAgIH0uYmluZCh0aGlzKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovICh0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpKTtcbiAgfTtcblxuICAvLyBQdWJsaWMgbWV0aG9kcy5cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgZGlzYWJsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5idG5FbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50cyB0b2dnbGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYnRuRWxlbWVudF8uY2hlY2tlZCkge1xuICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzYWJsZSByYWRpby5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgfTtcblxuICAvKipcbiAgICogRW5hYmxlIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayByYWRpby5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMub25DaGFuZ2VfKG51bGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmNoZWNrIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS51bmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5idG5FbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5vbkNoYW5nZV8obnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG4gIE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fQlROKTtcblxuICAgIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyXyA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcl8gPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm91bmRCbHVySGFuZGxlcl8gPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXJfID0gdGhpcy5vbk1vdXNldXBfLmJpbmQodGhpcyk7XG5cbiAgICB2YXIgb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPX09VVEVSX0NJUkNMRSk7XG5cbiAgICB2YXIgaW5uZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0lOTkVSX0NJUkNMRSk7XG5cbiAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKG91dGVyQ2lyY2xlKTtcbiAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcblxuICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXJfKTtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcl8pO1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcl8pO1xuXG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG5cbiAgICBNYXRlcmlhbFJpcHBsZVNlcnZpY2Uud2F0Y2hJZ25vcmVQcm9wZXJ0eSgkc2NvcGUsIHRoaXMuZWxlbWVudF8sIHRoaXMsIGZ1bmN0aW9uIChyaXBwbGUpIHtcbiAgICAgIHJpcHBsZS5yZWNlbnRlcmluZyA9IHRydWU7XG4gICAgICByaXBwbGUucmlwcGxlQ29udGFpbmVyXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyXyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2VzOiBpbnN0YW5jZXMsXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoJHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IE1hdGVyaWFsUmFkaW8oJHNjb3BlLCBlbGVtZW50KTtcbiAgICB9LFxuICB9O1xuXG59XG5cbmFuZ3VsYXIubW9kdWxlKCduZy1tZGwnKVxuXG4uc2VydmljZSgnTWF0ZXJpYWxSYWRpb1NlcnZpY2UnLCBNYXRlcmlhbFJhZGlvU2VydmljZSlcblxuLmRpcmVjdGl2ZSgnbWRsUmFkaW8nLCBmdW5jdGlvbiAoTWF0ZXJpYWxSYWRpb1NlcnZpY2UpIHsgJ25nSW5qZWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgIE1hdGVyaWFsUmFkaW9TZXJ2aWNlLmNyZWF0ZSgkc2NvcGUsICRlbGVtZW50WzBdKTtcbiAgICB9LFxuICB9O1xufSk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25nLW1kbC1yYWRpby5qcyIsIihmdW5jdGlvbiAoKSB7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE1hdGVyaWFsUmlwcGxlU2VydmljZShNZGwpIHsgJ25nSW5qZWN0JztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFJpcHBsZSBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xuICBmdW5jdGlvbiBNYXRlcmlhbFJpcHBsZShlbGVtZW50LCBjdHgpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcblxuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KGN0eCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIElOSVRJQUxfU0NBTEU6ICAgJ3NjYWxlKDAuMDAwMSwgMC4wMDAxKScsXG4gICAgSU5JVElBTF9TSVpFOiAgICAnMXB4JyxcbiAgICBJTklUSUFMX09QQUNJVFk6ICcwLjQnLFxuICAgIEZJTkFMX09QQUNJVFk6ICAgJzAnLFxuICAgIEZJTkFMX1NDQUxFOiAgICAgJydcbiAgfTtcblxuICAvKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBSSVBQTEU6ICAgICAgICdtZGwtcmlwcGxlJyxcbiAgICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICAgIElTX1ZJU0lCTEU6ICAgJ2lzLXZpc2libGUnXG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBtb3VzZSAvIGZpbmdlciBkb3duIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLmRvd25IYW5kbGVyXyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndpZHRoICYmICF0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLmhlaWdodCkge1xuICAgICAgdmFyIHJlY3QgPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5ib3VuZEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgdGhpcy5ib3VuZFdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgIHRoaXMucmlwcGxlU2l6ZV8gPSBNYXRoLnNxcnQocmVjdC53aWR0aCAqIHJlY3Qud2lkdGggK1xuICAgICAgICAgIHJlY3QuaGVpZ2h0ICogcmVjdC5oZWlnaHQpICogMiArIDI7XG4gICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndpZHRoID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLmhlaWdodCA9IHRoaXMucmlwcGxlU2l6ZV8gKyAncHgnO1xuICAgIH1cblxuICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMuaWdub3JpbmdNb3VzZURvd25fKSB7XG4gICAgICB0aGlzLmlnbm9yaW5nTW91c2VEb3duXyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHRoaXMuaWdub3JpbmdNb3VzZURvd25fID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBmcmFtZUNvdW50ID0gdGhpcy5nZXRGcmFtZUNvdW50KCk7XG4gICAgICBpZiAoZnJhbWVDb3VudCA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRGcmFtZUNvdW50KDEpO1xuICAgICAgdmFyIGJvdW5kID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciB4O1xuICAgICAgdmFyIHk7XG4gICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgaGFuZGxpbmcgYSBrZXlib2FyZCBjbGljay5cbiAgICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgICAgeCA9IE1hdGgucm91bmQoYm91bmQud2lkdGggLyAyKTtcbiAgICAgICAgeSA9IE1hdGgucm91bmQoYm91bmQuaGVpZ2h0IC8gMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFggIT09IHVuZGVmaW5lZCA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHZhciBjbGllbnRZID0gZXZlbnQuY2xpZW50WSAhPT0gdW5kZWZpbmVkID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgeCA9IE1hdGgucm91bmQoY2xpZW50WCAtIGJvdW5kLmxlZnQpO1xuICAgICAgICB5ID0gTWF0aC5yb3VuZChjbGllbnRZIC0gYm91bmQudG9wKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0UmlwcGxlWFkoeCwgeSk7XG4gICAgICB0aGlzLnNldFJpcHBsZVN0eWxlcyh0cnVlKTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltRnJhbWVIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIG1vdXNlIC8gZmluZ2VyIHVwIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLnVwSGFuZGxlcl8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIERvbid0IGZpcmUgZm9yIHRoZSBhcnRpZmljaWFsIFwibW91c2V1cFwiIGdlbmVyYXRlZCBieSBhIGRvdWJsZS1jbGljay5cbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGV0YWlsICE9PSAyKSB7XG4gICAgICAvLyBBbGxvdyBhIHJlcGFpbnQgdG8gb2NjdXIgYmVmb3JlIHJlbW92aW5nIHRoaXMgY2xhc3MsIHNvIHRoZSBhbmltYXRpb25cbiAgICAgIC8vIHNob3dzIGZvciB0YXAgZXZlbnRzLCB3aGljaCBzZWVtIHRvIHRyaWdnZXIgYSBtb3VzZXVwIHRvbyBzb29uIGFmdGVyXG4gICAgICAvLyBtb3VzZWRvd24uXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbiAgTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjdHgpIHtcbiAgICB0aGlzLnJpcHBsZUNvbnRhaW5lcl8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy5yaXBwbGVDb250YWluZXJfLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgIHRoaXMucmlwcGxlRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICB0aGlzLnJpcHBsZUNvbnRhaW5lcl8uYXBwZW5kQ2hpbGQodGhpcy5yaXBwbGVFbGVtZW50Xyk7XG4gICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUNvbnRhaW5lcl8pO1xuXG4gICAgdGhpcy5mcmFtZUNvdW50XyA9IDA7XG4gICAgdGhpcy5yaXBwbGVTaXplXyA9IDA7XG4gICAgdGhpcy54XyA9IDA7XG4gICAgdGhpcy55XyA9IDA7XG5cbiAgICAvLyBUb3VjaCBzdGFydCBwcm9kdWNlcyBhIGNvbXBhdCBtb3VzZSBkb3duIGV2ZW50LCB3aGljaCB3b3VsZCBjYXVzZSBhXG4gICAgLy8gc2Vjb25kIHJpcHBsZXMuIFRvIGF2b2lkIHRoYXQsIHdlIHVzZSB0aGlzIHByb3BlcnR5IHRvIGlnbm9yZSB0aGUgZmlyc3RcbiAgICAvLyBtb3VzZSBkb3duIGFmdGVyIGEgdG91Y2ggc3RhcnQuXG4gICAgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8gPSBmYWxzZTtcblxuICAgIHRoaXMuYm91bmREb3duSGFuZGxlciA9IHRoaXMuZG93bkhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYm91bmREb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLmJvdW5kVXBIYW5kbGVyID0gdGhpcy51cEhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuXG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciBmcmFtZUNvdW50Xy5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBmcmFtZSBjb3VudC5cbiAgICAgKi9cbiAgICB0aGlzLmdldEZyYW1lQ291bnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZyYW1lQ291bnRfO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIGZyYW1lQ291bnRfLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmQyB0aGUgZnJhbWUgY291bnQuXG4gICAgICovXG4gICAgdGhpcy5zZXRGcmFtZUNvdW50ID0gZnVuY3Rpb24oZkMpIHtcbiAgICAgIHRoaXMuZnJhbWVDb3VudF8gPSBmQztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciByaXBwbGVFbGVtZW50Xy5cbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSB0aGUgcmlwcGxlIGVsZW1lbnQuXG4gICAgICovXG4gICAgdGhpcy5nZXRSaXBwbGVFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5yaXBwbGVFbGVtZW50XztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcmlwcGxlIFggYW5kIFkgY29vcmRpbmF0ZXMuXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBuZXdYIHRoZSBuZXcgWCBjb29yZGluYXRlXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBuZXdZIHRoZSBuZXcgWSBjb29yZGluYXRlXG4gICAgICovXG4gICAgdGhpcy5zZXRSaXBwbGVYWSA9IGZ1bmN0aW9uKG5ld1gsIG5ld1kpIHtcbiAgICAgIHRoaXMueF8gPSBuZXdYO1xuICAgICAgdGhpcy55XyA9IG5ld1k7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHJpcHBsZSBzdHlsZXMuXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gc3RhcnQgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgc3RhcnQgZnJhbWUuXG4gICAgICovXG4gICAgdGhpcy5zZXRSaXBwbGVTdHlsZXMgPSBmdW5jdGlvbihzdGFydCkge1xuICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZztcbiAgICAgIHZhciBzY2FsZTtcbiAgICAgIHZhciBzaXplO1xuICAgICAgdmFyIG9mZnNldCA9ICd0cmFuc2xhdGUoJyArIHRoaXMueF8gKyAncHgsICcgKyB0aGlzLnlfICsgJ3B4KSc7XG5cbiAgICAgIGlmIChzdGFydCkge1xuICAgICAgICBzY2FsZSA9IHRoaXMuQ29uc3RhbnRfLklOSVRJQUxfU0NBTEU7XG4gICAgICAgIHNpemUgPSB0aGlzLkNvbnN0YW50Xy5JTklUSUFMX1NJWkU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2FsZSA9IHRoaXMuQ29uc3RhbnRfLkZJTkFMX1NDQUxFO1xuICAgICAgICBzaXplID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgICAgIGlmICh0aGlzLnJlY2VudGVyaW5nKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5ib3VuZFdpZHRoIC8gMiArICdweCwgJyArXG4gICAgICAgICAgICB0aGlzLmJvdW5kSGVpZ2h0IC8gMiArICdweCknO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgJyArIG9mZnNldCArIHNjYWxlO1xuXG4gICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcblxuICAgICAgTWRsLmlmQ2xhc3ModGhpcy5yaXBwbGVFbGVtZW50XywgIXN0YXJ0LCB0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYW4gYW5pbWF0aW9uIGZyYW1lLlxuICAgICAqL1xuICAgIHRoaXMuYW5pbUZyYW1lSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudF8tLSA+IDApIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFJpcHBsZVN0eWxlcyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICB9O1xuXG4gIHZhciBNYXRlcmlhbFJpcHBsZVNlcnZpY2U7XG5cbiAgcmV0dXJuIE1hdGVyaWFsUmlwcGxlU2VydmljZSA9IHtcbiAgICBhZGRSaXBwbGVFZmZlY3Q6IGZ1bmN0aW9uIChlbGVtZW50LCBjdHgpIHtcbiAgICAgIHJldHVybiBuZXcgTWF0ZXJpYWxSaXBwbGUoZWxlbWVudCwgY3R4KTtcbiAgICB9LFxuICAgIHJlbW92ZVJpcHBsZUVmZmVjdDogZnVuY3Rpb24gKGVsZW1lbnQsIGN0eCkge1xuICAgICAgZm9yKHZhciBpIGluIHBhcmVudC5jaGlsZE5vZGVzKSB7XG4gICAgICAgIHZhciBzdyA9IHBhcmVudC5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdFxuICAgICAgICAgICAgJiYgcGFyZW50LmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKGN0eC5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgaWYgKCFzdykgY29udGludWU7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuY2hpbGROb2Rlc1tpXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaElnbm9yZVByb3BlcnR5OiBmdW5jdGlvbiAoJHNjb3BlLCBlbGVtZW50LCBjdHgsIGNyZWF0ZWQpIHtcbiAgICAgIHZhciBpZ25vcmVSaXBwbGVFZmZlY3RBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWdub3JlLXJpcHBsZS1lZmZlY3QnKTtcbiAgICAgICRzY29wZS4kd2F0Y2goaWdub3JlUmlwcGxlRWZmZWN0QXR0cmlidXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZ25vcmVSaXBwbGVFZmZlY3RBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWdub3JlLXJpcHBsZS1lZmZlY3QnKTtcbiAgICAgICAgdmFyIGlnbm9yZVJpcHBsZUVmZmVjdCA9IGlnbm9yZVJpcHBsZUVmZmVjdEF0dHJpYnV0ZT09PScnIHx8ICRzY29wZS4kZXZhbChpZ25vcmVSaXBwbGVFZmZlY3RBdHRyaWJ1dGUpO1xuICAgICAgICBpZiAoIWlnbm9yZVJpcHBsZUVmZmVjdCkge1xuICAgICAgICAgIHZhciByaXBwbGUgPSBNYXRlcmlhbFJpcHBsZVNlcnZpY2UuYWRkUmlwcGxlRWZmZWN0KGVsZW1lbnQsIGN0eCk7XG4gICAgICAgICAgY3JlYXRlZCAmJiBjcmVhdGVkKHJpcHBsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTWF0ZXJpYWxSaXBwbGVTZXJ2aWNlLnJlbW92ZVJpcHBsZUVmZmVjdChlbGVtZW50LCBjdHgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuXG5hbmd1bGFyLm1vZHVsZSgnbmctbWRsJylcblxuLnNlcnZpY2UoJ01hdGVyaWFsUmlwcGxlU2VydmljZScsIE1hdGVyaWFsUmlwcGxlU2VydmljZSk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25nLW1kbC1yaXBwbGUuanMiLCIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBNYXRlcmlhbFNwaW5uZXJTZXJ2aWNlICgpIHsgJ25nSW5qZWN0JztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFNwaW5uZXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gTWF0ZXJpYWxTcGlubmVyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcblxuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBNRExfU1BJTk5FUl9MQVlFUl9DT1VOVDogNFxuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBTUElOTkVSOiAgICAgICAgICAgICAgICAgICAgJ21kbC1zcGlubmVyJyxcbiAgICBNRExfU1BJTk5FUl9MQVlFUjogICAgICAgICAgJ21kbC1zcGlubmVyX19sYXllcicsXG4gICAgTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVI6ICdtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXInLFxuICAgIE1ETF9TUElOTkVSX0NJUkNMRTogICAgICAgICAnbWRsLXNwaW5uZXJfX2NpcmNsZScsXG4gICAgTURMX1NQSU5ORVJfR0FQX1BBVENIOiAgICAgICdtZGwtc3Bpbm5lcl9fZ2FwLXBhdGNoJyxcbiAgICBNRExfU1BJTk5FUl9MRUZUOiAgICAgICAgICAgJ21kbC1zcGlubmVyX19sZWZ0JyxcbiAgICBNRExfU1BJTk5FUl9SSUdIVDogICAgICAgICAgJ21kbC1zcGlubmVyX19yaWdodCcsXG4gICAgSVNfVVBHUkFERUQ6ICAgICAgICAgICAgICAgICdpcy11cGdyYWRlZCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIEF1eGlsaWFyeSBtZXRob2QgdG8gY3JlYXRlIGEgc3Bpbm5lciBsYXllci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IG9mIHRoZSBsYXllciB0byBiZSBjcmVhdGVkLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLmNyZWF0ZUxheWVyID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB2YXIgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfTEFZRVIpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9MQVlFUiArICctJyArIGluZGV4KTtcblxuICAgIHZhciBsZWZ0Q2xpcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUik7XG4gICAgbGVmdENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0xFRlQpO1xuXG4gICAgdmFyIGdhcFBhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FwUGF0Y2guY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0dBUF9QQVRDSCk7XG5cbiAgICB2YXIgcmlnaHRDbGlwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUik7XG4gICAgcmlnaHRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9SSUdIVCk7XG5cbiAgICB2YXIgY2lyY2xlT3duZXJzID0gW2xlZnRDbGlwcGVyLCBnYXBQYXRjaCwgcmlnaHRDbGlwcGVyXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlT3duZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0NJUkNMRSk7XG4gICAgICBjaXJjbGVPd25lcnNbaV0uYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICB9XG5cbiAgICBsYXllci5hcHBlbmRDaGlsZChsZWZ0Q2xpcHBlcik7XG4gICAgbGF5ZXIuYXBwZW5kQ2hpbGQoZ2FwUGF0Y2gpO1xuICAgIGxheWVyLmFwcGVuZENoaWxkKHJpZ2h0Q2xpcHBlcik7XG5cbiAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGxheWVyKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcHMgdGhlIHNwaW5uZXIgYW5pbWF0aW9uLlxuICAgKiBQdWJsaWMgbWV0aG9kIGZvciB1c2VycyB3aG8gbmVlZCB0byBzdG9wIHRoZSBzcGlubmVyIGZvciBhbnkgcmVhc29uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIHNwaW5uZXIgYW5pbWF0aW9uLlxuICAgKiBQdWJsaWMgbWV0aG9kIGZvciB1c2VycyB3aG8gbmVlZCB0byBtYW51YWxseSBzdGFydCB0aGUgc3Bpbm5lciBmb3IgYW55IHJlYXNvblxuICAgKiAoaW5zdGVhZCBvZiBqdXN0IGFkZGluZyB0aGUgJ2lzLWFjdGl2ZScgY2xhc3MgdG8gdGhlaXIgbWFya3VwKS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG4gIE1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMuQ29uc3RhbnRfLk1ETF9TUElOTkVSX0xBWUVSX0NPVU5UOyBpKyspIHtcbiAgICAgIHRoaXMuY3JlYXRlTGF5ZXIoaSk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlNQSU5ORVIpO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBuZXcgTWF0ZXJpYWxTcGlubmVyKGVsZW1lbnQpO1xuICAgIH0sXG4gIH07XG5cbn1cblxuYW5ndWxhci5tb2R1bGUoJ25nLW1kbCcpXG4uc2VydmljZSgnTWF0ZXJpYWxTcGlubmVyU2VydmljZScsIE1hdGVyaWFsU3Bpbm5lclNlcnZpY2UpXG4uZGlyZWN0aXZlKCdtZGxTcGlubmVyJywgZnVuY3Rpb24gKE1hdGVyaWFsU3Bpbm5lclNlcnZpY2UpIHsgJ25nSW5qZWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgIE1hdGVyaWFsU3Bpbm5lclNlcnZpY2UuY3JlYXRlKCRlbGVtZW50WzBdKTtcbiAgICB9LFxuICB9O1xufSk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25nLW1kbC1zcGlubmVyLmpzIiwiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTWF0ZXJpYWxTd2l0Y2hTZXJ2aWNlIChNZGwsIE1hdGVyaWFsUmlwcGxlU2VydmljZSkgeyAnbmdJbmplY3QnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgQ2hlY2tib3ggTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gTWF0ZXJpYWxTd2l0Y2goJHNjb3BlLCBlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG5cbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgkc2NvcGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBUSU5ZX1RJTUVPVVQ6IDAuMDAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgU1dJVENIOiAgICAgICAgICAgJ21kbC1zd2l0Y2gnLFxuICAgIElOUFVUOiAgICAgICAgICAgICdtZGwtc3dpdGNoX19pbnB1dCcsXG4gICAgVFJBQ0s6ICAgICAgICAgICAgJ21kbC1zd2l0Y2hfX3RyYWNrJyxcbiAgICBUSFVNQjogICAgICAgICAgICAnbWRsLXN3aXRjaF9fdGh1bWInLFxuICAgIEZPQ1VTX0hFTFBFUjogICAgICdtZGwtc3dpdGNoX19mb2N1cy1oZWxwZXInLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtc3dpdGNoX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBJU19GT0NVU0VEOiAgICAgICAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICAgICAgJ2lzLWRpc2FibGVkJyxcbiAgICBJU19DSEVDS0VEOiAgICAgICAnaXMtY2hlY2tlZCcsXG4gICAgSVNfVVBHUkFERUQ6ICAgICAgJ2lzLXVwZ3JhZGVkJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmJsdXJfID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCAvKiogQHR5cGUge251bWJlcn0gKi8gKHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCkpO1xuICB9O1xuXG4gIC8vIFB1YmxpYyBtZXRob2RzLlxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50cyBkaXNhYmxlZCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIHRvZ2dsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgfTtcblxuICAvKipcbiAgICogRW5hYmxlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgfTtcblxuICAvKipcbiAgICogQWN0aXZhdGUgc3dpdGNoLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuICBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcblxuICAgIHZhciB0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYWNrLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UUkFDSyk7XG5cbiAgICB2YXIgdGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aHVtYi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEhVTUIpO1xuXG4gICAgdmFyIGZvY3VzSGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGZvY3VzSGVscGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5GT0NVU19IRUxQRVIpO1xuXG4gICAgdGh1bWIuYXBwZW5kQ2hpbGQoZm9jdXNIZWxwZXIpO1xuXG4gICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0cmFjayk7XG4gICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aHVtYik7XG5cbiAgICB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib3VuZEZvY3VzSGFuZGxlciA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kQmx1ckhhbmRsZXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG5cbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uU1dJVENIKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG5cbiAgICBNYXRlcmlhbFJpcHBsZVNlcnZpY2Uud2F0Y2hJZ25vcmVQcm9wZXJ0eSgkc2NvcGUsIHRoaXMuZWxlbWVudF8sIHRoaXMsIGZ1bmN0aW9uIChyaXBwbGUpIHtcbiAgICAgIHJpcHBsZS5yZWNlbnRlcmluZyA9IHRydWU7XG4gICAgICByaXBwbGUucmlwcGxlQ29udGFpbmVyXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoJHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IE1hdGVyaWFsU3dpdGNoKCRzY29wZSwgZWxlbWVudCk7XG4gICAgfSxcbiAgfTtcblxufVxuXG5hbmd1bGFyLm1vZHVsZSgnbmctbWRsJylcblxuLnNlcnZpY2UoJ01hdGVyaWFsU3dpdGNoU2VydmljZScsIE1hdGVyaWFsU3dpdGNoU2VydmljZSlcbi5kaXJlY3RpdmUoJ21kbFN3aXRjaCcsIGZ1bmN0aW9uIChNYXRlcmlhbFN3aXRjaFNlcnZpY2UpIHsgJ25nSW5qZWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgIE1hdGVyaWFsU3dpdGNoU2VydmljZS5jcmVhdGUoJHNjb3BlLCAkZWxlbWVudFswXSk7XG4gICAgfSxcbiAgfTtcbn0pO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy1tZGwtc3dpdGNoLmpzIiwiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBNYXRlcmlhbFNlbGVjdGFibGVUYWJsZSAoTWRsLCBNYXRlcmlhbENoZWNrYm94U2VydmljZSkgeyAnbmdJbmplY3QnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgRGF0YSBUYWJsZSBDYXJkIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gTWF0ZXJpYWxTZWxlY3RhYmxlVGFibGUoJHNjb3BlLCBlbGVtZW50LCByb3dzKSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG5cbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgkc2NvcGUsIHJvd3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxTZWxlY3RhYmxlVGFibGUucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICAvLyBOb25lIGF0IHRoZSBtb21lbnQuXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFNlbGVjdGFibGVUYWJsZS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgREFUQV9UQUJMRTogICAgICdtZGwtZGF0YS10YWJsZScsXG4gICAgU0VMRUNUQUJMRTogICAgICdtZGwtZGF0YS10YWJsZS0tc2VsZWN0YWJsZScsXG4gICAgU0VMRUNUX0VMRU1FTlQ6ICdtZGwtZGF0YS10YWJsZV9fc2VsZWN0JyxcbiAgICBJU19TRUxFQ1RFRDogICAgJ2lzLXNlbGVjdGVkJyxcbiAgICBJU19VUEdSQURFRDogICAgJ2lzLXVwZ3JhZGVkJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiBhXG4gICAqIHNpbmdsZSByb3cgKG9yIG11bHRpcGxlIHJvd3MpLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNoZWNrYm94IENoZWNrYm94IHRoYXQgdG9nZ2xlcyB0aGUgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHJvdyBSb3cgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxOb2RlTGlzdCk9fSBvcHRfcm93cyBSb3dzIHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFNlbGVjdGFibGVUYWJsZS5wcm90b3R5cGUuc2VsZWN0Um93XyA9IGZ1bmN0aW9uKGNoZWNrYm94LCByb3dzLCBtdWx0aXBsZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbDtcbiAgICAgIHJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgTWRsLmlmQ2xhc3Mocm93LCBjaGVja2JveC5jaGVja2VkLCB0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKVxuICAgICAgICBpZiAoIW11bHRpcGxlKSByZXR1cm47XG4gICAgICAgIGVsID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ3RkJykucXVlcnlTZWxlY3RvcignLm1kbC1jaGVja2JveCcpO1xuICAgICAgICBlbC5NYXRlcmlhbENoZWNrYm94W2NoZWNrYm94LmNoZWNrZWQ/J2NoZWNrJzondW5jaGVjayddKCk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNoZWNrYm94IGZvciBhIHNpbmdsZSBvciBvciBtdWx0aXBsZSByb3dzIGFuZCBob29rcyB1cCB0aGVcbiAgICogZXZlbnQgaGFuZGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcm93IFJvdyB0byB0b2dnbGUgd2hlbiBjaGVja2JveCBjaGFuZ2VzLlxuICAgKiBAcGFyYW0geyhBcnJheTxPYmplY3Q+fE5vZGVMaXN0KT19IG9wdF9yb3dzIFJvd3MgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsU2VsZWN0YWJsZVRhYmxlLnByb3RvdHlwZS5jcmVhdGVDaGVja2JveF8gPSBmdW5jdGlvbigkc2NvcGUsIHJvdywgcm93cykge1xuICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdmFyIGxhYmVsQ2xhc3NlcyA9IFtcbiAgICAgICdtZGwtY2hlY2tib3gnLFxuICAgICAgdGhpcy5Dc3NDbGFzc2VzXy5TRUxFQ1RfRUxFTUVOVFxuICAgIF07XG4gICAgbGFiZWwuY2xhc3NOYW1lID0gbGFiZWxDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ21kbC1jaGVja2JveF9faW5wdXQnKTtcbiAgICBcbiAgICB2YXIgbG9jYWxSb3dzID0gcm93P1tyb3ddOnJvd3M7XG4gICAgaWYgKHJvdykge1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHJvdy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19TRUxFQ1RFRCk7XG4gICAgfVxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2VsZWN0Um93XyhjaGVja2JveCwgbG9jYWxSb3dzLCAhcm93KSk7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGxhYmVsLk1hdGVyaWFsQ2hlY2tib3ggPSBNYXRlcmlhbENoZWNrYm94U2VydmljZS5jcmVhdGUoJHNjb3BlLCBsYWJlbCk7XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9O1xuXG4gIE1hdGVyaWFsU2VsZWN0YWJsZVRhYmxlLnByb3RvdHlwZS5hZGRSb3cgPSBmdW5jdGlvbiAoJHNjb3BlLCByb3cpIHtcbiAgICB2YXIgZmlyc3RDZWxsID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ3RkJyk7XG4gICAgaWYgKGZpcnN0Q2VsbCkge1xuICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIGlmIChyb3cucGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnVEJPRFknKSB7XG4gICAgICAgIHZhciByb3dDaGVja2JveCA9IHRoaXMuY3JlYXRlQ2hlY2tib3hfKCRzY29wZSwgcm93KTtcbiAgICAgICAgdGQuYXBwZW5kQ2hpbGQocm93Q2hlY2tib3gpO1xuICAgICAgfVxuICAgICAgcm93Lmluc2VydEJlZm9yZSh0ZCwgZmlyc3RDZWxsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG4gIE1hdGVyaWFsU2VsZWN0YWJsZVRhYmxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oJHNjb3BlLCByb3dzKSB7XG4gICAgdmFyIGZpcnN0SGVhZGVyID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCd0aCcpO1xuICAgIHZhciB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgdmFyIGhlYWRlckNoZWNrYm94ID0gdGhpcy5jcmVhdGVDaGVja2JveF8oJHNjb3BlLCBudWxsLCByb3dzKTtcbiAgICB0aC5hcHBlbmRDaGlsZChoZWFkZXJDaGVja2JveCk7XG4gICAgZmlyc3RIZWFkZXIucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGgsIGZpcnN0SGVhZGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5TRUxFQ1RBQkxFKVxuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCRzY29wZSwgZWxlbWVudCwgcm93cykge1xuICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbFNlbGVjdGFibGVUYWJsZSgkc2NvcGUsIGVsZW1lbnQsIHJvd3MpO1xuICAgIH1cbiAgfTtcblxufVxuXG5mdW5jdGlvbiBNZGxUYWJsZVNlbGVjdGFibGVDdHJsICgkc2NvcGUsIE1kbCwgTWF0ZXJpYWxTZWxlY3RhYmxlVGFibGUpIHsgJ25nSW5qZWN0JztcblxuICB2YXIgcm93cyA9IFtdO1xuXG4gIHRoaXMuYWRkUm93ID0gZnVuY3Rpb24gKHJvdykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlXykge1xuICAgICAgdGhpcy5pbnN0YW5jZV8uYWRkUm93KCRzY29wZSwgcm93KTtcbiAgICB9XG4gICAgcm93cy5wdXNoKHJvdyk7XG4gIH0uYmluZCh0aGlzKTtcblxuICB0aGlzLmluaXRfID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBDcmVhdGUgaW5zdGFuY2Ugb2YgdGFic1xuICAgIHRoaXMuaW5zdGFuY2VfID0gTWF0ZXJpYWxTZWxlY3RhYmxlVGFibGUuY3JlYXRlKCRzY29wZSwgZWxlbWVudCwgcm93cyk7XG4gICAgcm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgdGhpcy5pbnN0YW5jZV8uYWRkUm93KCRzY29wZSwgcm93KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG5cbn1cblxuYW5ndWxhci5tb2R1bGUoJ25nLW1kbCcpXG5cbi5zZXJ2aWNlKCdNYXRlcmlhbFNlbGVjdGFibGVUYWJsZScsIE1hdGVyaWFsU2VsZWN0YWJsZVRhYmxlKVxuLmRpcmVjdGl2ZSgnbWRsVGFibGVTZWxlY3RhYmxlJywgZnVuY3Rpb24gKCkgeyAnbmdJbmplY3QnO1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgY29udHJvbGxlcjogTWRsVGFibGVTZWxlY3RhYmxlQ3RybCxcbiAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCBtZGxUYWJsZVNlbGVjdGFibGVDdHJsKSB7XG4gICAgICBtZGxUYWJsZVNlbGVjdGFibGVDdHJsLmluaXRfKCRlbGVtZW50WzBdKTtcbiAgICB9LFxuICB9O1xufSlcbi5kaXJlY3RpdmUoJ21kbFRhYmxlU2VsZWN0YWJsZUl0ZW0nLCBmdW5jdGlvbiAoKSB7ICduZ0luamVjdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnXm1kbFRhYmxlU2VsZWN0YWJsZScsXG4gICAgbGluazogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgbWRsVGFibGVTZWxlY3RhYmxlQ3RybCkge1xuICAgICAgbWRsVGFibGVTZWxlY3RhYmxlQ3RybC5hZGRSb3coJGVsZW1lbnRbMF0pO1xuICAgIH0sXG4gIH07XG59KTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctbWRsLXRhYmxlLXNlbGVjdGFibGUuanMiLCIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBNYXRlcmlhbFRhYnNTZXJ2aWNlKE1kbCwgTWF0ZXJpYWxSaXBwbGVTZXJ2aWNlKSB7ICduZ0luamVjdCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBUYWJzIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gTWF0ZXJpYWxUYWJzKGVsZW1lbnQsIGluTGF5b3V0KSB7XG4gICAgLy8gU3RvcmVzIHRoZSBIVE1MIGVsZW1lbnQuXG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgdGhpcy5pbkxheW91dCA9IGluTGF5b3V0O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsVGFicy5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIFJFU0laRV9USU1FT1VUOiAgICAgICAxMDAsXG4gICAgVEFCX1NDUk9MTF9QSVhFTFM6ICAgIDEwMCxcbiAgICBDSEVWUk9OX0xFRlQ6ICAgICAgICAgJ2NoZXZyb25fbGVmdCcsXG4gICAgQ0hFVlJPTl9SSUdIVDogICAgICAgICdjaGV2cm9uX3JpZ2h0JyxcbiAgICBUQUJfTkFNRV9BVFRSX05BTUU6ICAgJ21kbC10YWInLFxuICAgIFBBTkVMX05BTUVfQVRUUl9OQU1FOiAnbWRsLXRhYi1wYW5lbCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFRhYnMucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge307XG5cbiAgTWF0ZXJpYWxUYWJzLkNzc0NsYXNzZXNfID0ge1xuICAgIE5PUk1BTDoge1xuICAgICAgVEFCX0JBUl9DTEFTUzogICAgJ21kbC10YWJzX190YWItYmFyJyxcbiAgICAgIFRBQl9DTEFTUzogICAgICAgICdtZGwtdGFic19fdGFiJyxcbiAgICAgIFRBQlNfQ0xBU1M6ICAgICAgICdtZGwtdGFicycsXG4gICAgICBQQU5FTF9DTEFTUzogICAgICAnbWRsLXRhYnNfX3BhbmVsJyxcbiAgICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtdGFic19fcmlwcGxlLWNvbnRhaW5lcicsIFxuICAgIH0sXG4gICAgTEFZT1VUOiB7XG4gICAgICBUQUJfQkFSX0NMQVNTOiAgICAnbWRsLWxheW91dF9fdGFiLWJhcicsXG4gICAgICBUQUJfQ0xBU1M6ICAgICAgICAnbWRsLWxheW91dF9fdGFiJyxcbiAgICAgIFRBQlNfQ0xBU1M6ICAgICAgICdtZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lcicsXG4gICAgICBQQU5FTF9DTEFTUzogICAgICAnbWRsLWxheW91dF9fdGFiLXBhbmVsJyxcbiAgICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtbGF5b3V0X190YWItcmlwcGxlLWNvbnRhaW5lcicsIFxuXG4gICAgICBJQ09OX0NMQVNTOiAgICAgICAgICAgICAgICAgICdtYXRlcmlhbC1pY29ucycsXG4gICAgICBMQVlPVVRfVEFCX0JBUl9CVVRUT046ICAgICAgICdtZGwtbGF5b3V0X190YWItYmFyLWJ1dHRvbicsXG4gICAgICBMQVlPVVRfVEFCX0JBUl9MRUZUX0JVVFRPTjogICdtZGwtbGF5b3V0X190YWItYmFyLWxlZnQtYnV0dG9uJyxcbiAgICAgIExBWU9VVF9UQUJfQkFSX1JJR0hUX0JVVFRPTjogJ21kbC1sYXlvdXRfX3RhYi1iYXItcmlnaHQtYnV0dG9uJyxcbiAgICB9LFxuICAgIEdMT0JBTDoge1xuICAgICAgQUNUSVZFX0NMQVNTOiAgICdpcy1hY3RpdmUnLFxuICAgICAgVVBHUkFERURfQ0xBU1M6ICdpcy11cGdyYWRlZCcsXG4gICAgfSxcbiAgfVxuXG4gIE1hdGVyaWFsVGFicy5wcm90b3R5cGUuZ2V0UGFuZWxCeU5hbWUgPSBmdW5jdGlvbiAocGFuZWxOYW1lLCBwYW5lbHMpIHtcbiAgICBmb3IodmFyIGkgaW4gcGFuZWxzKSB7XG4gICAgICBpZiAocGFuZWxOYW1lID09PSBwYW5lbHNbaV0uZ2V0QXR0cmlidXRlKHRoaXMuQ29uc3RhbnRfLlBBTkVMX05BTUVfQVRUUl9OQU1FKSkge1xuICAgICAgICByZXR1cm4gcGFuZWxzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBNYXRlcmlhbFRhYnMucHJvdG90eXBlLmFkZFRhYiA9IGZ1bmN0aW9uICgkc2NvcGUsIHRhYiwgcGFuZWxzKSB7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQ0xBU1MpO1xuICAgIE1hdGVyaWFsUmlwcGxlU2VydmljZS53YXRjaElnbm9yZVByb3BlcnR5KCRzY29wZSwgdGFiLCB0aGlzKTtcbiAgICAkc2NvcGUuJG9uKCckbWF0ZXJpYWwudGFicy50YWIuc2VsZWN0ZWQnLCBmdW5jdGlvbiAoJGV2ZW50LCBvKSB7XG4gICAgICBNZGwuaWZDbGFzcyh0YWIsIHRhYj09PW8udGFiLCB0aGlzLkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUylcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgcGFuZWxOYW1lID0gdGFiLmdldEF0dHJpYnV0ZSh0aGlzLkNvbnN0YW50Xy5UQUJfTkFNRV9BVFRSX05BTUUpO1xuICAgICAgdmFyIHBhbmVsID0gdGhpcy5nZXRQYW5lbEJ5TmFtZShwYW5lbE5hbWUsIHBhbmVscyk7XG4gICAgICAkc2NvcGUuJGVtaXQoJyRtYXRlcmlhbC50YWJzLnRhYi5zZWxlY3RlZCcsIHtcbiAgICAgICAgdGFiOiB0YWIsXG4gICAgICAgIHBhbmVsOiBwYW5lbCxcbiAgICAgIH0pO1xuICAgICAgcGFuZWwgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy50YWJCYXJfLmFwcGVuZENoaWxkKHRhYik7XG4gIH07XG5cbiAgTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5hZGRQYW5lbCA9IGZ1bmN0aW9uICgkc2NvcGUsIHBhbmVsKSB7XG4gICAgcGFuZWwuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlBBTkVMX0NMQVNTKTtcbiAgICAkc2NvcGUuJG9uKCckbWF0ZXJpYWwudGFicy50YWIuc2VsZWN0ZWQnLCBmdW5jdGlvbiAoJGV2ZW50LCBvKSB7XG4gICAgICBNZGwuaWZDbGFzcyhwYW5lbCwgcGFuZWw9PT1vLnBhbmVsLCB0aGlzLkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy5sYXlvdXRDdHJsXyAmJiB0aGlzLmxheW91dEN0cmxfLmNvbnRlbnRfKSB7XG4gICAgICB0aGlzLmxheW91dEN0cmxfLmNvbnRlbnRfLmFwcGVuZENoaWxkKHBhbmVsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG4gIE1hdGVyaWFsVGFicy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjbGFzc2VzQ3R4ICAgID0gdGhpcy5pbkxheW91dD8gTWF0ZXJpYWxUYWJzLkNzc0NsYXNzZXNfLkxBWU9VVCA6IE1hdGVyaWFsVGFicy5Dc3NDbGFzc2VzXy5OT1JNQUw7XG4gICAgdGhpcy5Dc3NDbGFzc2VzXyAgPSBhbmd1bGFyLmV4dGVuZCh7fSwgTWF0ZXJpYWxUYWJzLkNzc0NsYXNzZXNfLkdMT0JBTCwgY2xhc3Nlc0N0eCk7IFxuICAgIHRoaXMudGFiQmFyXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMudGFiQmFyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUl9DTEFTUyk7XG4gICAgdGhpcy5lbGVtZW50Xy5pbnNlcnRCZWZvcmUodGhpcy50YWJCYXJfLCB0aGlzLmVsZW1lbnRfLmNoaWxkTm9kZXNbMF0pO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQlNfQ0xBU1MpO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlVQR1JBREVEX0NMQVNTKTtcbiAgICAvLyB0aGlzLmluaXRUYWJzXygpO1xuICB9O1xuXG4gIE1hdGVyaWFsVGFicy5wcm90b3R5cGUuaW5pdExheW91dCA9IGZ1bmN0aW9uIChsYXlvdXRDdHJsLCBwYW5lbHMpIHtcbiAgICB0aGlzLmxheW91dEN0cmxfID0gbGF5b3V0Q3RybDtcbiAgICB2YXIgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkxBWU9VVF9UQUJfQkFSX0JVVFRPTik7XG4gICAgbGVmdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTEFZT1VUX1RBQl9CQVJfTEVGVF9CVVRUT04pO1xuICAgIHZhciBsZWZ0QnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBsZWZ0QnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSUNPTl9DTEFTUyk7XG4gICAgbGVmdEJ1dHRvbkljb24udGV4dENvbnRlbnQgPSB0aGlzLkNvbnN0YW50Xy5DSEVWUk9OX0xFRlQ7XG4gICAgbGVmdEJ1dHRvbi5hcHBlbmRDaGlsZChsZWZ0QnV0dG9uSWNvbik7XG4gICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0IC09IHRoaXMuQ29uc3RhbnRfLlRBQl9TQ1JPTExfUElYRUxTO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdmFyIHJpZ2h0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkxBWU9VVF9UQUJfQkFSX0JVVFRPTik7XG4gICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkxBWU9VVF9UQUJfQkFSX1JJR0hUX0JVVFRPTik7XG4gICAgdmFyIHJpZ2h0QnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICByaWdodEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT05fQ0xBU1MpO1xuICAgIHJpZ2h0QnV0dG9uSWNvbi50ZXh0Q29udGVudCA9IHRoaXMuQ29uc3RhbnRfLkNIRVZST05fUklHSFQ7XG4gICAgcmlnaHRCdXR0b24uYXBwZW5kQ2hpbGQocmlnaHRCdXR0b25JY29uKTtcbiAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0ICs9IHRoaXMuQ29uc3RhbnRfLlRBQl9TQ1JPTExfUElYRUxTO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5lbGVtZW50Xy5pbnNlcnRCZWZvcmUobGVmdEJ1dHRvbiwgdGhpcy5lbGVtZW50Xy5jaGlsZE5vZGVzWzBdKTtcbiAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uKTtcbiAgICAvLyBBZGQgYW5kIHJlbW92ZSB0YWIgYnV0dG9ucyBkZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uIGFuZCB0b3RhbFxuICAgIC8vIHdpbmRvdyBzaXplLlxuICAgIHZhciB0YWJVcGRhdGVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNob3dMZWZ0ID0gdGhpcy50YWJCYXJfLnNjcm9sbExlZnQgPiAwO1xuICAgICAgdmFyIHNob3dSaWdodCA9IHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0IDwgdGhpcy50YWJCYXJfLnNjcm9sbFdpZHRoIC0gdGhpcy50YWJCYXJfLm9mZnNldFdpZHRoO1xuICAgICAgTWRsLmlmQ2xhc3MobGVmdEJ1dHRvbiwgc2hvd0xlZnQsIHRoaXMuQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICAgIE1kbC5pZkNsYXNzKHJpZ2h0QnV0dG9uLCBzaG93UmlnaHQsIHRoaXMuQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICB9LmJpbmQodGhpcyk7XG4gICAgdGhpcy50YWJCYXJfLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRhYlVwZGF0ZUhhbmRsZXIpO1xuICAgIHRhYlVwZGF0ZUhhbmRsZXIoKTtcbiAgICB3aW5kb3cudGFiVXBkYXRlSGFuZGxlciA9IHRhYlVwZGF0ZUhhbmRsZXI7XG4gICAgLy8gVXBkYXRlIHRhYnMgd2hlbiB0aGUgd2luZG93IHJlc2l6ZXMuXG4gICAgdmFyIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBVc2UgdGltZW91dHMgdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgaGFwcGVuIHRvbyBvZnRlbi5cbiAgICAgIHRoaXMucmVzaXplVGltZW91dElkXyAmJiBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0SWRfKTtcbiAgICAgIHRoaXMucmVzaXplVGltZW91dElkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0YWJVcGRhdGVIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMucmVzaXplVGltZW91dElkXyA9IG51bGw7XG4gICAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlJFU0laRV9USU1FT1VUKTtcbiAgICB9LmJpbmQodGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHdpbmRvd1Jlc2l6ZUhhbmRsZXIpO1xuICAgIGlmICh0aGlzLmxheW91dEN0cmxfLmNvbnRlbnRfKSB7XG4gICAgICBwYW5lbHMubWFwKGZ1bmN0aW9uIChwYW5lbCkge1xuICAgICAgICB0aGlzLmxheW91dEN0cmxfLmNvbnRlbnRfLmFwcGVuZENoaWxkKHBhbmVsKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoZWxlbWVudCwgaW5MYXlvdXQpIHtcbiAgICAgIHJldHVybiBuZXcgTWF0ZXJpYWxUYWJzKGVsZW1lbnQsIGluTGF5b3V0KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1hdGVyaWFsVGFic0N0cmwgKCRzY29wZSwgTWF0ZXJpYWxUYWJzU2VydmljZSkgeyAnbmdJbmplY3QnO1xuXG4gIHZhciB0YWJzICAgPSBbXTtcbiAgdmFyIHBhbmVscyA9IFtdO1xuXG4gIC8vIEFkZCB0YWIgaWYgZXhpc3RzIGluc3RhbmNlIG9mIHRhYnNcbiAgdGhpcy5hZGRUYWIgPSBmdW5jdGlvbiAodGFiKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2VfKSB7XG4gICAgICB0aGlzLmluc3RhbmNlXy5hZGRUYWIoJHNjb3BlLCB0YWIsIHBhbmVscyk7XG4gICAgfVxuICAgIHRhYnMucHVzaCh0YWIpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgLy8gQWRkIHBhbmVsIGlmIGV4aXN0cyBpbnN0YW5jZSBvZiB0YWJzXG4gIHRoaXMuYWRkUGFuZWwgPSBmdW5jdGlvbiAocGFuZWwpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZV8pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VfLmFkZFBhbmVsKCRzY29wZSwgcGFuZWwpO1xuICAgIH1cbiAgICBwYW5lbHMucHVzaChwYW5lbCk7XG4gIH0uYmluZCh0aGlzKTtcblxuICB0aGlzLmluaXRfID0gZnVuY3Rpb24gKHRhYnNFbGVtZW50KSB7XG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIG9mIHRhYnNcbiAgICB0aGlzLmluc3RhbmNlXyA9IE1hdGVyaWFsVGFic1NlcnZpY2UuY3JlYXRlKHRhYnNFbGVtZW50LCAhISRzY29wZS5tZGxMYXlvdXRUYWJzKTtcbiAgICAvLyBBZGQgdGFic1xuICAgIHRhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VfLmFkZFRhYigkc2NvcGUsIHRhYiwgcGFuZWxzKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIC8vIEFkZCBwYW5lbHNcbiAgICBwYW5lbHMubWFwKGZ1bmN0aW9uIChwYW5lbCkge1xuICAgICAgdGhpcy5pbnN0YW5jZV8uYWRkUGFuZWwoJHNjb3BlLCBwYW5lbCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuaW5pdExheW91dF8gPSBmdW5jdGlvbiAobGF5b3V0Q3RybCkge1xuICAgIHRoaXMuaW5zdGFuY2VfLmluaXRMYXlvdXQobGF5b3V0Q3RybCwgcGFuZWxzKTtcbiAgfS5iaW5kKHRoaXMpO1xuICBcbn1cblxuYW5ndWxhci5tb2R1bGUoJ25nLW1kbCcpXG5cbi5zZXJ2aWNlKCdNYXRlcmlhbFRhYnNTZXJ2aWNlJywgTWF0ZXJpYWxUYWJzU2VydmljZSlcblxuLmRpcmVjdGl2ZSgnbWRsVGFicycsIGZ1bmN0aW9uICgpIHsgJ25nSW5qZWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7XG4gICAgICBtZGxMYXlvdXRUYWJzOiAnPScsXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBNYXRlcmlhbFRhYnNDdHJsLFxuICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsIGN0cmwpIHtcbiAgICAgIGN0cmwuaW5pdF8oJGVsZW1lbnRbMF0pO1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ21kbFRhYicsIGZ1bmN0aW9uICgpIHsgJ25nSW5qZWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6ICdebWRsVGFicycsXG4gICAgbGluazogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgbWRsVGFic0N0cmwpIHtcbiAgICAgIG1kbFRhYnNDdHJsLmFkZFRhYigkZWxlbWVudFswXSk7XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnbWRsVGFiUGFuZWwnLCBmdW5jdGlvbiAoKSB7ICduZ0luamVjdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnXm1kbFRhYnMnLFxuICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsIG1kbFRhYnNDdHJsKSB7XG4gICAgICBtZGxUYWJzQ3RybC5hZGRQYW5lbCgkZWxlbWVudFswXSk7XG4gICAgfVxuICB9XG59KVxuXG4uZGlyZWN0aXZlKCdtZGxMYXlvdXRUYWJzJywgZnVuY3Rpb24gKCkgeyAnbmdJbmplY3QnO1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZToge1xuICAgICAgdGFiczogJ15tZGxUYWJzJyxcbiAgICAgIGxheW91dDogJ15tZGxMYXlvdXQnLFxuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgY3RybHMpIHtcbiAgICAgIGN0cmxzLmxheW91dC5zZXRUYWJzKGN0cmxzLnRhYnMsICRlbGVtZW50WzBdKTtcbiAgICB9XG4gIH07XG59KTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctbWRsLXRhYnMuanMiLCIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBNYXRlcmlhbFRleHRmaWVsZFNlcnZpY2UgKE1kbCkgeyAnbmdJbmplY3QnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgVGV4dGZpZWxkIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG4gIGZ1bmN0aW9uIE1hdGVyaWFsVGV4dGZpZWxkKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICB0aGlzLm1heFJvd3MgPSB0aGlzLkNvbnN0YW50Xy5OT19NQVhfUk9XUztcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBOT19NQVhfUk9XUzogLTEsXG4gICAgTUFYX1JPV1NfQVRUUklCVVRFOiAnbWF4cm93cydcbiAgfTtcblxuICAvKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBURVhURklFTEQ6ICAgICAgICdtZGwtdGV4dGZpZWxkJyxcbiAgICBMQUJFTDogICAgICAgICAgICdtZGwtdGV4dGZpZWxkX19sYWJlbCcsXG4gICAgSU5QVVQ6ICAgICAgICAgICAnbWRsLXRleHRmaWVsZF9faW5wdXQnLFxuICAgIElTX0RJUlRZOiAgICAgICAgJ2lzLWRpcnR5JyxcbiAgICBJU19GT0NVU0VEOiAgICAgICdpcy1mb2N1c2VkJyxcbiAgICBJU19ESVNBQkxFRDogICAgICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfSU5WQUxJRDogICAgICAnaXMtaW52YWxpZCcsXG4gICAgSVNfVVBHUkFERUQ6ICAgICAnaXMtdXBncmFkZWQnLFxuICAgIEhBU19QTEFDRUhPTERFUjogJ2hhcy1wbGFjZWhvbGRlcidcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGlucHV0IGJlaW5nIGVudGVyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uS2V5RG93bl8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBjdXJyZW50Um93Q291bnQgPSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoJ1xcbicpLmxlbmd0aDtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGlmIChjdXJyZW50Um93Q291bnQgPj0gdGhpcy5tYXhSb3dzKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgcmVzZXQgZXZlbnQgZnJvbSBvdXQgc2lkZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25SZXNldF8gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVmFsaWRpdHkoKTtcbiAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgICB0aGlzLmNoZWNrRm9jdXMoKTtcbiAgfTtcblxuICAvLyBQdWJsaWMgbWV0aG9kcy5cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRfLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBmb2N1cyBzdGF0ZSBhbmQgdXBkYXRlIGZpZWxkIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tGb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChCb29sZWFuKHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignOmZvY3VzJykpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgdmFsaWRpdHkgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbnB1dF8udmFsaWRpdHkpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0Xy52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0lOVkFMSUQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGRpcnR5IHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0RpcnR5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRfLnZhbHVlICYmIHRoaXMuaW5wdXRfLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJUlRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElSVFkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzYWJsZSB0ZXh0IGZpZWxkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5wdXRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0ZXh0IGZpZWxkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbnB1dF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0ZXh0IGZpZWxkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHdoaWNoIHRvIHNldCB0aGUgY29udHJvbCAob3B0aW9uYWwpLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24odmFsdWUpIHtcblxuICAgIHRoaXMuaW5wdXRfLnZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuICBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5sYWJlbF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5MQUJFTCk7XG4gICAgdGhpcy5pbnB1dF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG5cbiAgICBpZiAodGhpcy5pbnB1dF8uaGFzQXR0cmlidXRlKFxuICAgICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodGhpcy5Db25zdGFudF8uTUFYX1JPV1NfQVRUUklCVVRFKSkpIHtcbiAgICAgIHRoaXMubWF4Um93cyA9IHBhcnNlSW50KHRoaXMuaW5wdXRfLmdldEF0dHJpYnV0ZShcbiAgICAgICAgICAvKiogQHR5cGUge3N0cmluZ30gKi8gKHRoaXMuQ29uc3RhbnRfLk1BWF9ST1dTX0FUVFJJQlVURSkpLCAxMCk7XG4gICAgICBpZiAoaXNOYU4odGhpcy5tYXhSb3dzKSkge1xuICAgICAgICB0aGlzLm1heFJvd3MgPSB0aGlzLkNvbnN0YW50Xy5OT19NQVhfUk9XUztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnB1dF8uaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IQVNfUExBQ0VIT0xERVIpO1xuICAgIH1cblxuICAgIHRoaXMuYm91bmRVcGRhdGVDbGFzc2VzSGFuZGxlciA9IHRoaXMudXBkYXRlQ2xhc3Nlc18uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm91bmRCbHVySGFuZGxlciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm91bmRSZXNldEhhbmRsZXIgPSB0aGlzLm9uUmVzZXRfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmJvdW5kVXBkYXRlQ2xhc3Nlc0hhbmRsZXIpO1xuICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmJvdW5kUmVzZXRIYW5kbGVyKTtcblxuICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTKSB7XG4gICAgICAvLyBUT0RPOiBUaGlzIHNob3VsZCBoYW5kbGUgcGFzdGluZyBtdWx0aSBsaW5lIHRleHQuXG4gICAgICAvLyBDdXJyZW50bHkgZG9lc24ndC5cbiAgICAgIHRoaXMuYm91bmRLZXlEb3duSGFuZGxlciA9IHRoaXMub25LZXlEb3duXy5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlEb3duSGFuZGxlcik7XG4gICAgfVxuICAgIHZhciBpbnZhbGlkID0gdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEVYVEZJRUxEKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0lOVkFMSUQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dF8uaGFzQXR0cmlidXRlKCdhdXRvZm9jdXMnKSkge1xuICAgICAgdGhpcy5lbGVtZW50Xy5mb2N1cygpO1xuICAgICAgdGhpcy5jaGVja0ZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbFRleHRmaWVsZChlbGVtZW50KTtcbiAgICB9LFxuICB9O1xuXG59XG5cbmFuZ3VsYXIubW9kdWxlKCduZy1tZGwnKVxuXG4uc2VydmljZSgnTWF0ZXJpYWxUZXh0ZmllbGRTZXJ2aWNlJywgTWF0ZXJpYWxUZXh0ZmllbGRTZXJ2aWNlKVxuLmRpcmVjdGl2ZSgnbWRsVGV4dGZpZWxkJywgZnVuY3Rpb24gKE1hdGVyaWFsVGV4dGZpZWxkU2VydmljZSkgeyAnbmdJbmplY3QnO1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgTWF0ZXJpYWxUZXh0ZmllbGRTZXJ2aWNlLmNyZWF0ZSgkZWxlbWVudFswXSk7XG4gICAgfSxcbiAgfTtcbn0pO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy1tZGwtdGV4dGZpZWxkLmpzIiwiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTWF0ZXJpYWxUb29sdGlwU2VydmljZSAoTWRsKSB7ICduZ0luamVjdCc7XG5cbiAgdmFyIGluc3RhbmNlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgVG9vbHRpcCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xuICBmdW5jdGlvbiBNYXRlcmlhbFRvb2x0aXAoJHNjb3BlLCBlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG5cbiAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcblxuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCRzY29wZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICAvLyBOb25lIGZvciBub3cuXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIFRPT0xUSVA6ICAgJ21kbC10b29sdGlwJyxcbiAgICBCT1RUT006ICAgICdtZGwtdG9vbHRpcC0tYm90dG9tJyxcbiAgICBMRUZUOiAgICAgICdtZGwtdG9vbHRpcC0tbGVmdCcsXG4gICAgUklHSFQ6ICAgICAnbWRsLXRvb2x0aXAtLXJpZ2h0JyxcbiAgICBUT1A6ICAgICAgICdtZGwtdG9vbHRpcC0tdG9wJyxcbiAgICBJU19BQ1RJVkU6ICdpcy1hY3RpdmUnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2VlbnRlciBmb3IgdG9vbHRpcC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBNYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLmhhbmRsZU1vdXNlRW50ZXJfID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcHJvcHMgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGxlZnQgPSBwcm9wcy5sZWZ0ICsgKHByb3BzLndpZHRoIC8gMik7XG4gICAgdmFyIHRvcCA9IHByb3BzLnRvcCArIChwcm9wcy5oZWlnaHQgLyAyKTtcbiAgICB2YXIgbWFyZ2luTGVmdCA9IC0xICogKHRoaXMuZWxlbWVudF8ub2Zmc2V0V2lkdGggLyAyKTtcbiAgICB2YXIgbWFyZ2luVG9wID0gLTEgKiAodGhpcy5lbGVtZW50Xy5vZmZzZXRIZWlnaHQgLyAyKTtcblxuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkxFRlQpIHx8IHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklHSFQpKSB7XG4gICAgICBsZWZ0ID0gKHByb3BzLndpZHRoIC8gMik7XG4gICAgICBpZiAodG9wICsgbWFyZ2luVG9wIDwgMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubWFyZ2luVG9wID0gbWFyZ2luVG9wICsgJ3B4JztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxlZnQgKyBtYXJnaW5MZWZ0IDwgMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubWFyZ2luTGVmdCA9ICcwJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1ApKSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9IHByb3BzLnRvcCAtIHRoaXMuZWxlbWVudF8ub2Zmc2V0SGVpZ2h0IC0gMTAgKyAncHgnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSUdIVCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9IHByb3BzLmxlZnQgKyBwcm9wcy53aWR0aCArIDEwICsgJ3B4JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uTEVGVCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9IHByb3BzLmxlZnQgLSB0aGlzLmVsZW1lbnRfLm9mZnNldFdpZHRoIC0gMTAgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9IHByb3BzLnRvcCArIHByb3BzLmhlaWdodCArIDEwICsgJ3B4JztcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlIHRvb2x0aXAgb24gbW91c2VsZWF2ZSBvciBzY3JvbGxcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIE1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuaGlkZVRvb2x0aXBfID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbiAgTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgICAvLyB2YXIgZm9yRWxJZCA9IHRoaXMuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdtZGwtdG9vbHRpcCcpO1xuXG4gICAgLy8gaWYgKGZvckVsSWQpIHtcbiAgICAvLyAgIHRoaXMuZm9yRWxlbWVudF8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JFbElkKTtcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAodGhpcy5mb3JFbGVtZW50Xykge1xuICAgIC8vICAgLy8gSXQncyBsZWZ0IGhlcmUgYmVjYXVzZSBpdCBwcmV2ZW50cyBhY2NpZGVudGFsIHRleHQgc2VsZWN0aW9uIG9uIEFuZHJvaWRcbiAgICAvLyAgIGlmICghdGhpcy5mb3JFbGVtZW50Xy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAvLyAgICAgdGhpcy5mb3JFbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAvLyAgIH1cblxuICAgIC8vICAgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyID0gdGhpcy5oYW5kbGVNb3VzZUVudGVyXy5iaW5kKHRoaXMpO1xuICAgIC8vICAgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyID0gdGhpcy5oaWRlVG9vbHRpcF8uYmluZCh0aGlzKTtcbiAgICAvLyAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgIC8vICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgIC8vICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyLCBmYWxzZSk7XG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyLCB0cnVlKTtcbiAgICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyKTtcbiAgICAvLyB9XG5cbiAgICB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIgPSB0aGlzLmhhbmRsZU1vdXNlRW50ZXJfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyID0gdGhpcy5oaWRlVG9vbHRpcF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UT09MVElQKTtcblxuICB9O1xuXG4gIHZhciBNYXRlcmlhbFRvb2x0aXBTZXJ2aWNlO1xuICByZXR1cm4gTWF0ZXJpYWxUb29sdGlwU2VydmljZSA9IHtcbiAgICBpbnN0YW5jZXM6IGluc3RhbmNlcyxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgkc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBuZXcgTWF0ZXJpYWxUb29sdGlwKCRzY29wZSwgZWxlbWVudCk7XG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGluc3RhbmNlLCBpbnN0YW5jZU5hbWU7XG4gICAgICBmb3IodmFyIGk9MDtpPGluc3RhbmNlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaW5zdGFuY2UgPSBpbnN0YW5jZXNbaV07XG4gICAgICAgIGluc3RhbmNlTmFtZSA9IGluc3RhbmNlLmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnbWRsLXRvb2x0aXAnKXx8Jyc7XG4gICAgICAgIGlmIChpbnN0YW5jZU5hbWUgPT09IG5hbWUpIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZVRyaWdnZXI6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cbiAgICAgIC8vIEl0J3MgbGVmdCBoZXJlIGJlY2F1c2UgaXQgcHJldmVudHMgYWNjaWRlbnRhbCB0ZXh0IHNlbGVjdGlvbiBvbiBBbmRyb2lkXG4gICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZXJCdWlsZGVyKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtZGwtdG9vbHRpcC10YXJnZXQnKXx8Jyc7XG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gTWF0ZXJpYWxUb29sdGlwU2VydmljZS5maW5kKG5hbWUpO1xuICAgICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgaW5zdGFuY2VbbWV0aG9kTmFtZV0uYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVyQnVpbGRlcignaGFuZGxlTW91c2VFbnRlcl8nKSwgZmFsc2UpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICAgaGFuZGxlckJ1aWxkZXIoJ2hhbmRsZU1vdXNlRW50ZXJfJyksIGZhbHNlKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZXJCdWlsZGVyKCdoaWRlVG9vbHRpcF8nKSwgZmFsc2UpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICAgICAgaGFuZGxlckJ1aWxkZXIoJ2hpZGVUb29sdGlwXycpLCBmYWxzZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICBoYW5kbGVyQnVpbGRlcignaGlkZVRvb2x0aXBfJyksIGZhbHNlKTtcblxuICAgIH0sXG4gIH07XG5cbn1cblxuYW5ndWxhci5tb2R1bGUoJ25nLW1kbCcpXG5cbi5zZXJ2aWNlKCdNYXRlcmlhbFRvb2x0aXBTZXJ2aWNlJywgTWF0ZXJpYWxUb29sdGlwU2VydmljZSlcblxuLmRpcmVjdGl2ZSgnbWRsVG9vbHRpcCcsIGZ1bmN0aW9uIChNYXRlcmlhbFRvb2x0aXBTZXJ2aWNlKSB7ICduZ0luamVjdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICBNYXRlcmlhbFRvb2x0aXBTZXJ2aWNlLmNyZWF0ZSgkc2NvcGUsICRlbGVtZW50WzBdKTtcbiAgICB9LFxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnbWRsVG9vbHRpcFRhcmdldCcsIGZ1bmN0aW9uIChNYXRlcmlhbFRvb2x0aXBTZXJ2aWNlKSB7ICduZ0luamVjdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICBNYXRlcmlhbFRvb2x0aXBTZXJ2aWNlLmNyZWF0ZVRyaWdnZXIoJGVsZW1lbnRbMF0pO1xuICAgIH0sXG4gIH07XG59KTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctbWRsLXRvb2x0aXAuanMiXSwic291cmNlUm9vdCI6IiJ9