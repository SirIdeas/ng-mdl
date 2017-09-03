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