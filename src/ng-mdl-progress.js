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