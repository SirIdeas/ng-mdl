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