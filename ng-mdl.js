(function () {
'use strict';

angular.module('ng-mdl')

.constant('Constant_', {
})
.constant('CssClasses_', {
})
.directive('mdl', function () { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
    },
  };
});

})();
(function () {
'use strict';

function MaterialButtonService (MaterialRippleService) { 'ngInject';

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
    BUTTON:           'mdl-button',
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
  };

  /**
   * Handle blur of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialButton.prototype.blurHandler_ = function(event) {
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
  MaterialButton.prototype.disable = function() {
    this.element_.disabled = true;
  };

  /**
   * Enable button.
   *
   * @public
   */
  MaterialButton.prototype.enable = function() {
    this.element_.disabled = false;
  };

  /**
   * Initialize element.
   */
  MaterialButton.prototype.init = function($scope) {
    this.element_.classList.add(this.CssClasses_.BUTTON);
    MaterialRippleService.watchIgnoreProperty($scope, this.element_, this, function (ripple) {
      ripple.rippleElement_.addEventListener('mouseup', boundBlueHandler);
    }.bind(this));
    var boundBlueHandler = this.blurHandler_.bind(this);
    this.element_.addEventListener('mouseup', boundBlueHandler);
    this.element_.addEventListener('mouseleave', boundBlueHandler);
  };

  return {
    create: function ($scope, element) {
      return new MaterialButton($scope, element);
    },
  };

}

angular.module('ng-mdl')
.service('MaterialButtonService', MaterialButtonService)
.directive('mdlButton', function (MaterialButtonService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialButtonService.create($scope, $element[0]);
    },
  };
});

})();
(function () {
'use strict';

function MaterialCheckboxService (Mdl, MaterialRippleService) { 'ngInject';

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
    CHECKBOX:         'mdl-checkbox',
    INPUT:            'mdl-checkbox__input',
    BOX_OUTLINE:      'mdl-checkbox__box-outline',
    FOCUS_HELPER:     'mdl-checkbox__focus-helper',
    TICK_OUTLINE:     'mdl-checkbox__tick-outline',
    RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
    IS_FOCUSED:       'is-focused',
    IS_DISABLED:      'is-disabled',
    IS_CHECKED:       'is-checked',
    IS_UPGRADED:      'is-upgraded'
  };

  /**
   * Handle change of state.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialCheckbox.prototype.onChange_ = function(event) {
    this.updateClasses_();
  };

  /**
   * Handle focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialCheckbox.prototype.onFocus_ = function(event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle lost focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialCheckbox.prototype.onBlur_ = function(event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle mouseup.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialCheckbox.prototype.onMouseUp_ = function(event) {
    this.blur_();
  };

  /**
   * Handle class updates.
   *
   * @private
   */
  MaterialCheckbox.prototype.updateClasses_ = function() {
    this.checkDisabled();
    this.checkToggleState();
  };

  /**
   * Add blur.
   *
   * @private
   */
  MaterialCheckbox.prototype.blur_ = function() {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function() {
      this.inputElement_.blur();
    }.bind(this), /** @type {number} */ (this.Constant_.TINY_TIMEOUT));
  };

  // Public methods.

  /**
   * Check the inputs toggle state and update display.
   *
   * @public
   */
  MaterialCheckbox.prototype.checkToggleState = function() {
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
  MaterialCheckbox.prototype.checkDisabled = function() {
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
  MaterialCheckbox.prototype.disable = function() {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };

  /**
   * Enable checkbox.
   *
   * @public
   */
  MaterialCheckbox.prototype.enable = function() {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };

  /**
   * Check checkbox.
   *
   * @public
   */
  MaterialCheckbox.prototype.check = function() {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };

  /**
   * Uncheck checkbox.
   *
   * @public
   */
  MaterialCheckbox.prototype.uncheck = function() {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };

  /**
   * Initialize element.
   */
  MaterialCheckbox.prototype.init = function($scope) {
    this.inputElement_ = this.element_.querySelector('.' +this.CssClasses_.INPUT);

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
    create: function ($scope, element) {
      return new MaterialCheckbox($scope, element);
    },
  };

}

angular.module('ng-mdl')

.service('MaterialCheckboxService', MaterialCheckboxService)
.directive('mdlCheckbox', function (MaterialCheckboxService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialCheckboxService.create($scope, $element[0]);
    },
  };
});

})();
(function () {
'use strict';

function MaterialIconToggleService (Mdl, MaterialRippleService) { 'ngInject';

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
    ICON_TOGGLE:      'mdl-icon-toggle',
    INPUT:            'mdl-icon-toggle__input',
    RIPPLE_CONTAINER: 'mdl-icon-toggle__ripple-container',
    IS_FOCUSED:       'is-focused',
    IS_DISABLED:      'is-disabled',
    IS_CHECKED:       'is-checked',
    IS_UPGRADED:      'is-upgraded',
  };

  /**
   * Handle change of state.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialIconToggle.prototype.onChange_ = function(event) {
    this.updateClasses_();
  };

  /**
   * Handle focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialIconToggle.prototype.onFocus_ = function(event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle lost focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialIconToggle.prototype.onBlur_ = function(event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle mouseup.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialIconToggle.prototype.onMouseUp_ = function(event) {
    this.blur_();
  };

  /**
   * Handle class updates.
   *
   * @private
   */
  MaterialIconToggle.prototype.updateClasses_ = function() {
    this.checkDisabled();
    this.checkToggleState();
  };

  /**
   * Add blur.
   *
   * @private
   */
  MaterialIconToggle.prototype.blur_ = function() {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function() {
      this.inputElement_.blur();
    }.bind(this), /** @type {number} */ (this.Constant_.TINY_TIMEOUT));
  };

  // Public methods.

  /**
   * Check the inputs toggle state and update display.
   *
   * @public
   */
  MaterialIconToggle.prototype.checkToggleState = function() {
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
  MaterialIconToggle.prototype.checkDisabled = function() {
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
  MaterialIconToggle.prototype.disable = function() {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };

  /**
   * Enable icon toggle.
   *
   * @public
   */
  MaterialIconToggle.prototype.enable = function() {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };

  /**
   * Check icon toggle.
   *
   * @public
   */
  MaterialIconToggle.prototype.check = function() {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };

  /**
   * Uncheck icon toggle.
   *
   * @public
   */
  MaterialIconToggle.prototype.uncheck = function() {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };

  /**
   * Initialize element.
   */
  MaterialIconToggle.prototype.init = function($scope) {

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
    create: function ($scope, element) {
      return new MaterialIconToggle($scope, element);
    },
  };
}

angular.module('ng-mdl')

.service('MaterialIconToggleService', MaterialIconToggleService)
.directive('mdlIconToggle', function (MaterialIconToggleService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialIconToggleService.create($scope, $element[0]);
    },
  };
});

})();
(function () {
'use strict';

function MdlLayoutCtrl($scope, Mdl, MdlLayoutConstant_, MdlLayoutCssClasses_, MdlLayoutKeyCodes_, MdlLayoutMode_, MdlLayoutOnSizeScreen_, $q) { 'ngInject';

  var layoutDefered = $q.defer();
  this.Constant_    = MdlLayoutConstant_;
  this.CssClasses_  = MdlLayoutCssClasses_;
  this.Keycodes_    = MdlLayoutKeyCodes_;
  this.Mode_        = MdlLayoutMode_;

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
    var headerVisible = this.element_
      && (!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER));
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
    layoutDefered.promise
    .then(function () {
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
    layoutDefered.promise
    .then(function () {
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
      Mdl.ifClass(this.container_, $scope.mode === this.Mode_.SCROLL, this.CssClasses_.HAS_SCROLLING_HEADER)
    }
  }.bind(this);

  var setHeader = function () {
    this.header_ && this.header_.classList.add(this.CssClasses_.HEADER);
  }.bind(this);

  var setDrawer = function () {
    layoutDefered.promise
    .then(function () {
      Mdl.ifClass(this.element_, this.drawer_, this.CssClasses_.HAS_DRAWER)
      if (this.drawer_) {
        this.drawer_.classList.add(this.CssClasses_.DRAWER)
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
      layoutDefered.promise
      .then(function () {
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
        for(var i in this.tabsCtrl_.panels) {
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
    obfuscator_: setObfuscator,
  };
  
  this.set_ = function (name, $element) {
    this[name] = $element;
    initElementCallbacks[name]($element);
  }.bind(this);

  this.setMode_ = function (mode) {
    $scope.mode = mode || this.Mode_.STANDARD;
    if (!this.header_) return;
    Mdl.ifClass(this.header_, mode    === this.Mode_.SEAMED, this.CssClasses_.HEADER_SEAMED);
    Mdl.ifClass(this.header_, mode    === this.Mode_.WATERFALL, this.CssClasses_.HEADER_WATERFALL);
    Mdl.ifClass(this.header_, mode    === this.Mode_.SCROLL, this.CssClasses_.HEADER_SCROLL);
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

function builderMdlLayoutElementDirective(elementName, link) {
  return function () { 'ngInject';
    return {
      restrict: 'A',
      require: '^mdlLayout',
      link: function ($scope, $element, $attrs, mdlLayoutCtrl) {
        mdlLayoutCtrl.set_(elementName, $element[0]);
        link && link.apply(this, arguments);
      }
    };
  };
}

angular.module('ng-mdl')

.constant('MdlLayoutConstant_', {
  MAX_WIDTH: '(max-width: 1024px)',
  MENU_ICON: '&#xE5D2;',
})

.constant('MdlLayoutKeyCodes_', {
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32
})

.constant('MdlLayoutMode_', {
  STANDARD: 'standard',
  SEAMED: 'seamed',
  WATERFALL: 'waterfall',
  SCROLL: 'scroll'
})

.constant('MdlLayoutOnSizeScreen_', {
  LARGE: 'large',
  SMALL: 'small',
})

.constant('MdlLayoutCssClasses_', {
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
})

.directive('mdlLayout', function () { 'ngInject';
  return {
    restrict: 'A',
    scope: {
      mode: '@',
      onSizeScreen: '@',
    },
    controller: MdlLayoutCtrl,
    link: function linkMdlLayout($scope, $element, $attrs, mdlLayoutCtrl) {
      mdlLayoutCtrl.init_($element[0]);
    },
  };
})
.directive('mdlLayoutHeader',       builderMdlLayoutElementDirective('header_'))
.directive('mdlLayoutDrawer',       builderMdlLayoutElementDirective('drawer_'))
.directive('mdlLayoutContent',      builderMdlLayoutElementDirective('content_'))
.directive('mdlLayoutDrawerButton', builderMdlLayoutElementDirective('drawerButton_'))
.directive('mdlLayoutDrawerToggle', function () { 'ngInject';
  return {
    restrict: 'A',
    require: '^mdlLayout',
    link: function ($scope, $element, $attrs, mdlLayoutCtrl) {
      $element.on('click', function () {
        mdlLayoutCtrl.toggleDrawer();
      });
    }
  };
});

})();
(function () {
'use strict';

function MaterialMenuService (MaterialRippleService) { 'ngInject';

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
    CONTAINER:        'mdl-menu__container',
    OUTLINE:          'mdl-menu__outline',
    MENU:             'mdl-menu',
    ITEM:             'mdl-menu__item',
    RIPPLE_CONTAINER: 'mdl-menu__item-ripple-container',
    // Statuses
    IS_UPGRADED:  'is-upgraded',
    IS_VISIBLE:   'is-visible',
    IS_ANIMATING: 'is-animating',
    // Alignment options
    BOTTOM_LEFT:  'mdl-menu--bottom-left',  // This is the default.
    BOTTOM_RIGHT: 'mdl-menu--bottom-right',
    TOP_LEFT:     'mdl-menu--top-left',
    TOP_RIGHT:    'mdl-menu--top-right',
    UNALIGNED:    'mdl-menu--unaligned'
  };

  /**
   * Initialize element.
   */
  MaterialMenu.prototype.init = function() {
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
  MaterialMenu.prototype.handleForClick_ = function(evt) {
    if (this.element_ && evt.forElement_) {
      var rect = evt.forElement_.getBoundingClientRect();
      var forRect = evt.forElement_.parentElement.getBoundingClientRect();

      if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
        // Do not position the menu automatically. Requires the developer to
        // manually specify position.
      } else if (this.element_.classList.contains(
          this.CssClasses_.BOTTOM_RIGHT)) {
        // Position below the "for" element, aligned to its right.
        this.container_.style.right = (forRect.right - rect.right) + 'px';
        this.container_.style.top =
            evt.forElement_.offsetTop + evt.forElement_.offsetHeight + 'px';
      } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
        // Position above the "for" element, aligned to its left.
        this.container_.style.left = evt.forElement_.offsetLeft + 'px';
        this.container_.style.bottom = (forRect.bottom - rect.top) + 'px';
      } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
        // Position above the "for" element, aligned to its right.
        this.container_.style.right = (forRect.right - rect.right) + 'px';
        this.container_.style.bottom = (forRect.bottom - rect.top) + 'px';
      } else {
        // Default: position below the "for" element, aligned to its left.
        this.container_.style.left = evt.forElement_.offsetLeft + 'px';
        this.container_.style.top =
            evt.forElement_.offsetTop + evt.forElement_.offsetHeight + 'px';
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
  MaterialMenu.prototype.handleForKeyboardEvent_ = function(evt) {
    if (this.element_ && this.container_ && evt.forElement_) {
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM +
        ':not([disabled])');

      if (items && items.length > 0 &&
          this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
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
  MaterialMenu.prototype.handleItemKeyboardEvent_ = function(evt) {
    if (this.element_ && this.container_) {
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM +
        ':not([disabled])');

      if (items && items.length > 0 &&
          this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
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
        } else if (evt.keyCode === this.Keycodes_.SPACE ||
              evt.keyCode === this.Keycodes_.ENTER) {
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
  MaterialMenu.prototype.handleItemClick_ = function(evt) {
    if (evt.target.hasAttribute('disabled')) {
      evt.stopPropagation();
    } else {
      // Wait some time before closing menu, so the user can see the ripple.
      this.closing_ = true;
      window.setTimeout(function(evt) {
        this.hide();
        this.closing_ = false;
      }.bind(this), /** @type {number} */ (this.Constant_.CLOSE_TIMEOUT));
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
  MaterialMenu.prototype.applyClip_ = function(height, width) {
    if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
      // Do not clip.
      this.element_.style.clip = '';
    } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
      // Clip to the top right corner of the menu.
      this.element_.style.clip =
          'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
      // Clip to the bottom left corner of the menu.
      this.element_.style.clip =
          'rect(' + height + 'px 0 ' + height + 'px 0)';
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
      // Clip to the bottom right corner of the menu.
      this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' +
          height + 'px ' + width + 'px)';
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
  MaterialMenu.prototype.removeAnimationEndListener_ = function(evt) {
    evt.target.classList.remove(MaterialMenu.prototype.CssClasses_.IS_ANIMATING);
  };

  /**
   * Adds an event listener to clean up after the animation ends.
   *
   * @private
   */
  MaterialMenu.prototype.addAnimationEndListener_ = function() {
    this.element_.addEventListener('transitionend', this.removeAnimationEndListener_);
    this.element_.addEventListener('webkitTransitionEnd', this.removeAnimationEndListener_);
  };

  /**
   * Displays the menu.
   *
   * @public
   */
  MaterialMenu.prototype.show = function(evt) {
    if (this.element_ && this.container_ && this.outline_) {
      // Measure the inner element.
      var height = this.element_.getBoundingClientRect().height;
      var width = this.element_.getBoundingClientRect().width;

      // Apply the inner element's size to the container and outline.
      this.container_.style.width = width + 'px';
      this.container_.style.height = height + 'px';
      this.outline_.style.width = width + 'px';
      this.outline_.style.height = height + 'px';

      var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS *
          this.Constant_.TRANSITION_DURATION_FRACTION;

      // Calculate transition delays for individual menu items, so that they fade
      // in one at a time.
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
      for (var i = 0; i < items.length; i++) {
        var itemDelay = null;
        if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ||
            this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
          itemDelay = ((height - items[i].offsetTop - items[i].offsetHeight) /
              height * transitionDuration) + 's';
        } else {
          itemDelay = (items[i].offsetTop / height * transitionDuration) + 's';
        }
        items[i].style.transitionDelay = itemDelay;
      }

      // Apply the initial clip to the text before we start animating.
      this.applyClip_(height, width);

      // Wait for the next frame, turn on animation, and apply the final clip.
      // Also make it visible. This triggers the transitions.
      window.requestAnimationFrame(function() {
        this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
        this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
        this.container_.classList.add(this.CssClasses_.IS_VISIBLE);
      }.bind(this));

      // Clean up after the animation is complete.
      this.addAnimationEndListener_();

      // Add a click listener to the document, to close the menu.
      var callback = function(e) {
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
  MaterialMenu.prototype.hide = function() {
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
  MaterialMenu.prototype.toggle = function(evt) {
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
    create: function (element) {
      return new MaterialMenu(element);
    },
    find: function (name) {
      var instance, instanceName;
      for(var i=0;i<instances.length;i++){
        instance = instances[i];
        instanceName = instance.element_.getAttribute('mdl-menu')||'';
        if (instanceName === name) return instance;
      }
    }
  };

}

function MaterialMenuCtrl ($scope, MaterialMenuService) { 'ngInject';
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

angular.module('ng-mdl')

.service('MaterialMenuService', MaterialMenuService)

.directive('mdlMenu', function () { 'ngInject';
  return {
    restrict: 'A',
    controller: MaterialMenuCtrl,
    link: function ($scope, $element, $attrs, ctrl) {
      ctrl.init_($element[0])
    },
  };
})

.directive('mdlMenuToggle', function (MaterialMenuService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      $element.on('click', function ($event) {
        $event.forElement_ = $element[0];
        var name = $element[0].getAttribute('mdl-menu-toggle')||'';
        var instance = MaterialMenuService.find(name);
        if (instance) {
          instance.handleForClick_.apply(instance, arguments);
        }
      });
      $element.on('keydown', function ($event) {
        $event.forElement_ = $element[0];
        var name = $element[0].getAttribute('mdl-menu-toggle')||'';
        var instance = MaterialMenuService.find(name);
        if (instance) {
          instance.handleForKeyboardEvent_.apply(instance, arguments);
        }
      });
    },
  };
})

.directive('mdlMenuItem', function () { 'ngInject';
  return {
    restrict: 'A',
    require: '^mdlMenu',
    link: function ($scope, $element, $attrs, mdlMenuCtrl) {
      mdlMenuCtrl.addItem($element[0])
    },
  };
});

})();
(function () {
'use strict';

function MaterialProgressService () { 'ngInject';

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
  MaterialProgress.prototype.Constant_ = {
  };

  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
  MaterialProgress.prototype.CssClasses_ = {
    PROGRESS:            'mdl-progress',
    INDETERMINATE_CLASS: 'mdl-progress__indeterminate',
    IS_UPGRADED:         'is-upgraded'
  };

  /**
   * Set the current progress of the progressbar.
   *
   * @param {number} p Percentage of the progress (0-100)
   * @public
   */
  MaterialProgress.prototype.setProgress = function(p) {
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
  MaterialProgress.prototype.setBuffer = function(p) {
    this.bufferbar_.style.width = p + '%';
    this.auxbar_.style.width = (100 - p) + '%';
  };

  /**
   * Initialize element.
   */
  MaterialProgress.prototype.init = function($scope, $attrs) {

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
    create: function ($scope, element, $attrs) {
      return new MaterialProgress($scope, element, $attrs);
    },
  };

}

angular.module('ng-mdl')
.service('MaterialProgressService', MaterialProgressService)
.directive('mdlProgress', function (MaterialProgressService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialProgressService.create($scope, $element[0], $attrs);
    },
  };
});

})();
(function () {
'use strict';

function MaterialRadioService (Mdl, MaterialRippleService) { 'ngInject';
  
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
    IS_FOCUSED:           'is-focused',
    IS_DISABLED:          'is-disabled',
    IS_CHECKED:           'is-checked',
    IS_UPGRADED:          'is-upgraded',
    RADIO:                'mdl-radio',
    RADIO_BTN:            'mdl-radio__button',
    RADIO_OUTER_CIRCLE:   'mdl-radio__outer-circle',
    RADIO_INNER_CIRCLE:   'mdl-radio__inner-circle',
    RIPPLE_CONTAINER:     'mdl-radio__ripple-container',
  };

  /**
   * Handle change of state.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialRadio.prototype.onChange_ = function(event) {
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
  MaterialRadio.prototype.onFocus_ = function(event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle lost focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialRadio.prototype.onBlur_ = function(event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle mouseup.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialRadio.prototype.onMouseup_ = function(event) {
    this.blur_();
  };

  /**
   * Update classes.
   *
   * @private
   */
  MaterialRadio.prototype.updateClasses_ = function() {
    this.checkDisabled();
    this.checkToggleState();
  };

  /**
   * Add blur.
   *
   * @private
   */
  MaterialRadio.prototype.blur_ = function() {

    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function() {
      this.btnElement_.blur();
    }.bind(this), /** @type {number} */ (this.Constant_.TINY_TIMEOUT));
  };

  // Public methods.

  /**
   * Check the components disabled state.
   *
   * @public
   */
  MaterialRadio.prototype.checkDisabled = function() {
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
  MaterialRadio.prototype.checkToggleState = function() {
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
  MaterialRadio.prototype.disable = function() {
    this.btnElement_.disabled = true;
    this.updateClasses_();
  };

  /**
   * Enable radio.
   *
   * @public
   */
  MaterialRadio.prototype.enable = function() {
    this.btnElement_.disabled = false;
    this.updateClasses_();
  };

  /**
   * Check radio.
   *
   * @public
   */
  MaterialRadio.prototype.check = function() {
    this.btnElement_.checked = true;
    this.onChange_(null);
  };

  /**
   * Uncheck radio.
   *
   * @public
   */
  MaterialRadio.prototype.uncheck = function() {
    this.btnElement_.checked = false;
    this.onChange_(null);
  };

  /**
   * Initialize element.
   */
  MaterialRadio.prototype.init = function($scope) {
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
    create: function ($scope, element) {
      return new MaterialRadio($scope, element);
    },
  };

}

angular.module('ng-mdl')

.service('MaterialRadioService', MaterialRadioService)

.directive('mdlRadio', function (MaterialRadioService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialRadioService.create($scope, $element[0]);
    },
  };
});

})();
(function () {
'use strict';

function MaterialRippleService(Mdl) { 'ngInject';

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
    INITIAL_SCALE:   'scale(0.0001, 0.0001)',
    INITIAL_SIZE:    '1px',
    INITIAL_OPACITY: '0.4',
    FINAL_OPACITY:   '0',
    FINAL_SCALE:     ''
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
    RIPPLE:       'mdl-ripple',
    IS_ANIMATING: 'is-animating',
    IS_VISIBLE:   'is-visible'
  };

  /**
   * Handle mouse / finger down on element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialRipple.prototype.downHandler_ = function(event) {
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
      var rect = this.element_.getBoundingClientRect();
      this.boundHeight = rect.height;
      this.boundWidth = rect.width;
      this.rippleSize_ = Math.sqrt(rect.width * rect.width +
          rect.height * rect.height) * 2 + 2;
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
  MaterialRipple.prototype.upHandler_ = function(event) {
    // Don't fire for the artificial "mouseup" generated by a double-click.
    if (event && event.detail !== 2) {
      // Allow a repaint to occur before removing this class, so the animation
      // shows for tap events, which seem to trigger a mouseup too soon after
      // mousedown.
      window.setTimeout(function() {
        this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
      }.bind(this), 0);
    }
  };

  /**
   * Initialize element.
   */
  MaterialRipple.prototype.init = function(ctx) {
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
    this.getFrameCount = function() {
      return this.frameCount_;
    };

    /**
     * Setter for frameCount_.
     * @param {number} fC the frame count.
     */
    this.setFrameCount = function(fC) {
      this.frameCount_ = fC;
    };

    /**
     * Getter for rippleElement_.
     * @return {Element} the ripple element.
     */
    this.getRippleElement = function() {
      return this.rippleElement_;
    };

    /**
     * Sets the ripple X and Y coordinates.
     * @param  {number} newX the new X coordinate
     * @param  {number} newY the new Y coordinate
     */
    this.setRippleXY = function(newX, newY) {
      this.x_ = newX;
      this.y_ = newY;
    };

    /**
     * Sets the ripple styles.
     * @param  {boolean} start whether or not this is the start frame.
     */
    this.setRippleStyles = function(start) {
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
          offset = 'translate(' + this.boundWidth / 2 + 'px, ' +
            this.boundHeight / 2 + 'px)';
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
    this.animFrameHandler = function() {
      if (this.frameCount_-- > 0) {
        window.requestAnimationFrame(this.animFrameHandler.bind(this));
      } else {
        this.setRippleStyles(false);
      }
    };

  };

  var MaterialRippleService;

  return MaterialRippleService = {
    addRippleEffect: function (element, ctx) {
      return new MaterialRipple(element, ctx);
    },
    removeRippleEffect: function (element, ctx) {
      for(var i in parent.childNodes) {
        var sw = parent.childNodes[i].classList
            && parent.childNodes[i].classList.contains(ctx.CssClasses_.RIPPLE_CONTAINER);
        if (!sw) continue;
        parent.removeChild(parent.childNodes[i]);
      }
    },
    watchIgnoreProperty: function ($scope, element, ctx, created) {
      var ignoreRippleEffectAttribute = element.getAttribute('ignore-ripple-effect');
      $scope.$watch(ignoreRippleEffectAttribute, function () {
        var ignoreRippleEffectAttribute = element.getAttribute('ignore-ripple-effect');
        var ignoreRippleEffect = ignoreRippleEffectAttribute==='' || $scope.$eval(ignoreRippleEffectAttribute);
        if (!ignoreRippleEffect) {
          var ripple = MaterialRippleService.addRippleEffect(element, ctx);
          created && created(ripple);
        } else {
          MaterialRippleService.removeRippleEffect(element, ctx);
        }
      });
    },
  };
}

angular.module('ng-mdl')

.service('MaterialRippleService', MaterialRippleService);

})();
(function () {
'use strict';

function MaterialSpinnerService () { 'ngInject';

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
    SPINNER:                    'mdl-spinner',
    MDL_SPINNER_LAYER:          'mdl-spinner__layer',
    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
    MDL_SPINNER_CIRCLE:         'mdl-spinner__circle',
    MDL_SPINNER_GAP_PATCH:      'mdl-spinner__gap-patch',
    MDL_SPINNER_LEFT:           'mdl-spinner__left',
    MDL_SPINNER_RIGHT:          'mdl-spinner__right',
    IS_UPGRADED:                'is-upgraded',
  };

  /**
   * Auxiliary method to create a spinner layer.
   *
   * @param {number} index Index of the layer to be created.
   * @public
   */
  MaterialSpinner.prototype.createLayer = function(index) {
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
  MaterialSpinner.prototype.stop = function() {
    this.element_.classList.remove('is-active');
  };

  /**
   * Starts the spinner animation.
   * Public method for users who need to manually start the spinner for any reason
   * (instead of just adding the 'is-active' class to their markup).
   *
   * @public
   */
  MaterialSpinner.prototype.start = function() {
    this.element_.classList.add('is-active');
  };

  /**
   * Initialize element.
   */
  MaterialSpinner.prototype.init = function() {
    for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
      this.createLayer(i);
    }
    this.element_.classList.add(this.CssClasses_.SPINNER);
    this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
  };

  return {
    create: function (element) {
      return new MaterialSpinner(element);
    },
  };

}

angular.module('ng-mdl')
.service('MaterialSpinnerService', MaterialSpinnerService)
.directive('mdlSpinner', function (MaterialSpinnerService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialSpinnerService.create($element[0]);
    },
  };
});

})();
(function () {
'use strict';

function MaterialSwitchService (Mdl, MaterialRippleService) { 'ngInject';

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
    SWITCH:           'mdl-switch',
    INPUT:            'mdl-switch__input',
    TRACK:            'mdl-switch__track',
    THUMB:            'mdl-switch__thumb',
    FOCUS_HELPER:     'mdl-switch__focus-helper',
    RIPPLE_CONTAINER: 'mdl-switch__ripple-container',
    IS_FOCUSED:       'is-focused',
    IS_DISABLED:      'is-disabled',
    IS_CHECKED:       'is-checked',
    IS_UPGRADED:      'is-upgraded'
  };

  /**
   * Handle change of state.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialSwitch.prototype.onChange_ = function(event) {
    this.updateClasses_();
  };

  /**
   * Handle focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialSwitch.prototype.onFocus_ = function(event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle lost focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialSwitch.prototype.onBlur_ = function(event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle mouseup.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialSwitch.prototype.onMouseUp_ = function(event) {
    this.blur_();
  };

  /**
   * Handle class updates.
   *
   * @private
   */
  MaterialSwitch.prototype.updateClasses_ = function() {
    this.checkDisabled();
    this.checkToggleState();
  };

  /**
   * Add blur.
   *
   * @private
   */
  MaterialSwitch.prototype.blur_ = function() {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function() {
      this.inputElement_.blur();
    }.bind(this), /** @type {number} */ (this.Constant_.TINY_TIMEOUT));
  };

  // Public methods.

  /**
   * Check the components disabled state.
   *
   * @public
   */
  MaterialSwitch.prototype.checkDisabled = function() {
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
  MaterialSwitch.prototype.checkToggleState = function() {
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
  MaterialSwitch.prototype.disable = function() {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };

  /**
   * Enable switch.
   *
   * @public
   */
  MaterialSwitch.prototype.enable = function() {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };

  /**
   * Activate switch.
   *
   * @public
   */
  MaterialSwitch.prototype.on = function() {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };

  /**
   * Deactivate switch.
   *
   * @public
   */
  MaterialSwitch.prototype.off = function() {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };

  /**
   * Initialize element.
   */
  MaterialSwitch.prototype.init = function($scope) {
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
    create: function ($scope, element) {
      return new MaterialSwitch($scope, element);
    },
  };

}

angular.module('ng-mdl')

.service('MaterialSwitchService', MaterialSwitchService)
.directive('mdlSwitch', function (MaterialSwitchService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialSwitchService.create($scope, $element[0]);
    },
  };
});

})();
(function () {
'use strict';


function MaterialSelectableTable (Mdl, MaterialCheckboxService) { 'ngInject';

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
    DATA_TABLE:     'mdl-data-table',
    SELECTABLE:     'mdl-data-table--selectable',
    SELECT_ELEMENT: 'mdl-data-table__select',
    IS_SELECTED:    'is-selected',
    IS_UPGRADED:    'is-upgraded'
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
  MaterialSelectableTable.prototype.selectRow_ = function(checkbox, rows, multiple) {
    return function() {
      var el;
      rows.map(function (row) {
        Mdl.ifClass(row, checkbox.checked, this.CssClasses_.IS_SELECTED)
        if (!multiple) return;
        el = row.querySelector('td').querySelector('.mdl-checkbox');
        el.MaterialCheckbox[checkbox.checked?'check':'uncheck']();
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
  MaterialSelectableTable.prototype.createCheckbox_ = function($scope, row, rows) {
    var label = document.createElement('label');
    var labelClasses = [
      'mdl-checkbox',
      this.CssClasses_.SELECT_ELEMENT
    ];
    label.className = labelClasses.join(' ');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mdl-checkbox__input');
    
    var localRows = row?[row]:rows;
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
  MaterialSelectableTable.prototype.init = function($scope, rows) {
    var firstHeader = this.element_.querySelector('th');
    var th = document.createElement('th');
    var headerCheckbox = this.createCheckbox_($scope, null, rows);
    th.appendChild(headerCheckbox);
    firstHeader.parentElement.insertBefore(th, firstHeader);
    this.element_.classList.add(this.CssClasses_.SELECTABLE)
    this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
  };

  return {
    create: function ($scope, element, rows) {
      return new MaterialSelectableTable($scope, element, rows);
    }
  };

}

function MdlTableSelectableCtrl ($scope, Mdl, MaterialSelectableTable) { 'ngInject';

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

angular.module('ng-mdl')

.service('MaterialSelectableTable', MaterialSelectableTable)
.directive('mdlTableSelectable', function () { 'ngInject';
  return {
    restrict: 'A',
    controller: MdlTableSelectableCtrl,
    link: function ($scope, $element, $attrs, mdlTableSelectableCtrl) {
      mdlTableSelectableCtrl.init_($element[0]);
    },
  };
})
.directive('mdlTableSelectableItem', function () { 'ngInject';
  return {
    restrict: 'A',
    require: '^mdlTableSelectable',
    link: function ($scope, $element, $attrs, mdlTableSelectableCtrl) {
      mdlTableSelectableCtrl.addRow($element[0]);
    },
  };
});

})();
(function () {
'use strict';

function MaterialTabsService(Mdl, MaterialRippleService) { 'ngInject';

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
    RESIZE_TIMEOUT:       100,
    TAB_SCROLL_PIXELS:    100,
    CHEVRON_LEFT:         'chevron_left',
    CHEVRON_RIGHT:        'chevron_right',
    TAB_NAME_ATTR_NAME:   'mdl-tab',
    PANEL_NAME_ATTR_NAME: 'mdl-tab-panel',
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
      TAB_BAR_CLASS:    'mdl-tabs__tab-bar',
      TAB_CLASS:        'mdl-tabs__tab',
      TABS_CLASS:       'mdl-tabs',
      PANEL_CLASS:      'mdl-tabs__panel',
      RIPPLE_CONTAINER: 'mdl-tabs__ripple-container', 
    },
    LAYOUT: {
      TAB_BAR_CLASS:    'mdl-layout__tab-bar',
      TAB_CLASS:        'mdl-layout__tab',
      TABS_CLASS:       'mdl-layout__tab-bar-container',
      PANEL_CLASS:      'mdl-layout__tab-panel',
      RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container', 

      ICON_CLASS:                  'material-icons',
      LAYOUT_TAB_BAR_BUTTON:       'mdl-layout__tab-bar-button',
      LAYOUT_TAB_BAR_LEFT_BUTTON:  'mdl-layout__tab-bar-left-button',
      LAYOUT_TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',
    },
    GLOBAL: {
      ACTIVE_CLASS:   'is-active',
      UPGRADED_CLASS: 'is-upgraded',
    },
  }

  MaterialTabs.prototype.getPanelByName = function (panelName, panels) {
    for(var i in panels) {
      if (panelName === panels[i].getAttribute(this.Constant_.PANEL_NAME_ATTR_NAME)) {
        return panels[i];
      }
    }
  };

  MaterialTabs.prototype.addTab = function ($scope, tab, panels) {
    tab.classList.add(this.CssClasses_.TAB_CLASS);
    MaterialRippleService.watchIgnoreProperty($scope, tab, this);
    $scope.$on('$material.tabs.tab.selected', function ($event, o) {
      Mdl.ifClass(tab, tab===o.tab, this.CssClasses_.ACTIVE_CLASS)
    }.bind(this));
    tab.addEventListener('click', function (e) {
      var panelName = tab.getAttribute(this.Constant_.TAB_NAME_ATTR_NAME);
      var panel = this.getPanelByName(panelName, panels);
      $scope.$emit('$material.tabs.tab.selected', {
        tab: tab,
        panel: panel,
      });
      panel && e.preventDefault();
    }.bind(this));
    this.tabBar_.appendChild(tab);
  };

  MaterialTabs.prototype.addPanel = function ($scope, panel) {
    panel.classList.add(this.CssClasses_.PANEL_CLASS);
    $scope.$on('$material.tabs.tab.selected', function ($event, o) {
      Mdl.ifClass(panel, panel===o.panel, this.CssClasses_.ACTIVE_CLASS);
    }.bind(this));
    if (this.layoutCtrl_ && this.layoutCtrl_.content_) {
      this.layoutCtrl_.content_.appendChild(panel);
    }
  };

  /**
   * Initialize element.
   */
  MaterialTabs.prototype.init = function() {
    var classesCtx    = this.inLayout? MaterialTabs.CssClasses_.LAYOUT : MaterialTabs.CssClasses_.NORMAL;
    this.CssClasses_  = angular.extend({}, MaterialTabs.CssClasses_.GLOBAL, classesCtx); 
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
    create: function (element, inLayout) {
      return new MaterialTabs(element, inLayout);
    }
  };
}

function MaterialTabsCtrl ($scope, MaterialTabsService) { 'ngInject';

  var tabs   = [];
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

angular.module('ng-mdl')

.service('MaterialTabsService', MaterialTabsService)

.directive('mdlTabs', function () { 'ngInject';
  return {
    restrict: 'A',
    scope: {
      mdlLayoutTabs: '=',
    },
    controller: MaterialTabsCtrl,
    link: function ($scope, $element, $attrs, ctrl) {
      ctrl.init_($element[0]);
    }
  };
})

.directive('mdlTab', function () { 'ngInject';
  return {
    restrict: 'A',
    require: '^mdlTabs',
    link: function ($scope, $element, $attrs, mdlTabsCtrl) {
      mdlTabsCtrl.addTab($element[0]);
    }
  };
})

.directive('mdlTabPanel', function () { 'ngInject';
  return {
    restrict: 'A',
    require: '^mdlTabs',
    link: function ($scope, $element, $attrs, mdlTabsCtrl) {
      mdlTabsCtrl.addPanel($element[0]);
    }
  }
})

.directive('mdlLayoutTabs', function () { 'ngInject';
  return {
    restrict: 'A',
    require: {
      tabs: '^mdlTabs',
      layout: '^mdlLayout',
    },
    link: function ($scope, $element, $attrs, ctrls) {
      ctrls.layout.setTabs(ctrls.tabs, $element[0]);
    }
  };
});

})();
(function () {
'use strict';

function MaterialTextfieldService (Mdl) { 'ngInject';

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
    TEXTFIELD:       'mdl-textfield',
    LABEL:           'mdl-textfield__label',
    INPUT:           'mdl-textfield__input',
    IS_DIRTY:        'is-dirty',
    IS_FOCUSED:      'is-focused',
    IS_DISABLED:     'is-disabled',
    IS_INVALID:      'is-invalid',
    IS_UPGRADED:     'is-upgraded',
    HAS_PLACEHOLDER: 'has-placeholder'
  };

  /**
   * Handle input being entered.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialTextfield.prototype.onKeyDown_ = function(event) {
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
  MaterialTextfield.prototype.onFocus_ = function(event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle lost focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialTextfield.prototype.onBlur_ = function(event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle reset event from out side.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialTextfield.prototype.onReset_ = function(event) {
    this.updateClasses_();
  };

  /**
   * Handle class updates.
   *
   * @private
   */
  MaterialTextfield.prototype.updateClasses_ = function() {
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
  MaterialTextfield.prototype.checkDisabled = function() {
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
  MaterialTextfield.prototype.checkFocus = function() {
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
  MaterialTextfield.prototype.checkValidity = function() {
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
  MaterialTextfield.prototype.checkDirty = function() {
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
  MaterialTextfield.prototype.disable = function() {
    this.input_.disabled = true;
    this.updateClasses_();
  };

  /**
   * Enable text field.
   *
   * @public
   */
  MaterialTextfield.prototype.enable = function() {
    this.input_.disabled = false;
    this.updateClasses_();
  };

  /**
   * Update text field value.
   *
   * @param {string} value The value to which to set the control (optional).
   * @public
   */
  MaterialTextfield.prototype.change = function(value) {

    this.input_.value = value || '';
    this.updateClasses_();
  };

  /**
   * Initialize element.
   */
  MaterialTextfield.prototype.init = function() {

    this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
    this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);

    if (this.input_.hasAttribute(
          /** @type {string} */ (this.Constant_.MAX_ROWS_ATTRIBUTE))) {
      this.maxRows = parseInt(this.input_.getAttribute(
          /** @type {string} */ (this.Constant_.MAX_ROWS_ATTRIBUTE)), 10);
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
    create: function (element) {
      return new MaterialTextfield(element);
    },
  };

}

angular.module('ng-mdl')

.service('MaterialTextfieldService', MaterialTextfieldService)
.directive('mdlTextfield', function (MaterialTextfieldService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialTextfieldService.create($element[0]);
    },
  };
});

})();
(function () {
'use strict';

function MaterialTooltipService (Mdl) { 'ngInject';

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
    TOOLTIP:   'mdl-tooltip',
    BOTTOM:    'mdl-tooltip--bottom',
    LEFT:      'mdl-tooltip--left',
    RIGHT:     'mdl-tooltip--right',
    TOP:       'mdl-tooltip--top',
    IS_ACTIVE: 'is-active',
  };

  /**
   * Handle mouseenter for tooltip.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialTooltip.prototype.handleMouseEnter_ = function(event) {
    var props = event.target.getBoundingClientRect();
    var left = props.left + (props.width / 2);
    var top = props.top + (props.height / 2);
    var marginLeft = -1 * (this.element_.offsetWidth / 2);
    var marginTop = -1 * (this.element_.offsetHeight / 2);

    if (this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT)) {
      left = (props.width / 2);
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
  MaterialTooltip.prototype.hideTooltip_ = function() {
    this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);
  };

  /**
   * Initialize element.
   */
  MaterialTooltip.prototype.init = function($scope) {

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
    create: function ($scope, element) {
      return new MaterialTooltip($scope, element);
    },
    find: function (name) {
      var instance, instanceName;
      for(var i=0;i<instances.length;i++){
        instance = instances[i];
        instanceName = instance.element_.getAttribute('mdl-tooltip')||'';
        if (instanceName === name) return instance;
      }
    },
    createTrigger: function (element) {

      // It's left here because it prevents accidental text selection on Android
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }

      function handlerBuilder(methodName) {
        return function () {
          var name = element.getAttribute('mdl-tooltip-target')||'';
          var instance = MaterialTooltipService.find(name);
          if (instance && instance[methodName]) {
            instance[methodName].apply(instance, arguments);
          }
        };
      }

      element.addEventListener('mouseenter', handlerBuilder('handleMouseEnter_'), false);
      element.addEventListener('touchend',   handlerBuilder('handleMouseEnter_'), false);
      element.addEventListener('mouseleave', handlerBuilder('hideTooltip_'), false);
      window.addEventListener('scroll',      handlerBuilder('hideTooltip_'), false);
      window.addEventListener('touchstart',  handlerBuilder('hideTooltip_'), false);

    },
  };

}

angular.module('ng-mdl')

.service('MaterialTooltipService', MaterialTooltipService)

.directive('mdlTooltip', function (MaterialTooltipService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialTooltipService.create($scope, $element[0]);
    },
  };
})

.directive('mdlTooltipTarget', function (MaterialTooltipService) { 'ngInject';
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      MaterialTooltipService.createTrigger($element[0]);
    },
  };
});

})();
'use strict';

angular.module('ng-mdl', [])

.service('Mdl', function () { 'ngInject';
  return {
    ifClass: function (element, condition, cls) {
      element && element.classList[condition?'add':'remove'](cls);
    },
    addAndRemoveClasses: function (element, classToAdd, classesToRemove) {
      classesToRemove = [].concat(classesToRemove);
      if (classToAdd) {
        var idx = classesToRemove.indexOf(classToAdd);
        if (idx!=-1) classesToRemove.splice(idx, 1);
        element.classList.add(classToAdd);
      }
      classesToRemove.map(element.classList.remove.bind(element.classList));
    },
  };
})