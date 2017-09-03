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