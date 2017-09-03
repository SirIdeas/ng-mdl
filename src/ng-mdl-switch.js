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