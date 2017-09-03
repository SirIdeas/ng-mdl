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