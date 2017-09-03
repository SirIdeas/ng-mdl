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