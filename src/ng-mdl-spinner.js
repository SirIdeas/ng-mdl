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