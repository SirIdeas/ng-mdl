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