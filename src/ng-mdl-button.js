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