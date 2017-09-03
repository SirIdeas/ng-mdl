'use strict';

var VIEWS = [
  'mode-standard',
  'mode-seamed',
  'mode-waterfall',
  'mode-scroll',
  'tabs',
  'header-tabs',
  'buttons',
  'table',
  'menus',
  'toggles',
  'textfields',
  'loadings',
  'tooltips',
];

angular.module('ng-mdl-samples', [
  'ng-mdl'
])

.run(function ($rootScope) { 'ngInject';
  $rootScope.VIEWS = VIEWS;
  $rootScope.show = function (viewName) {
    $rootScope.currentView = viewName;
  };
  $rootScope.currentView = VIEWS[0];
  $rootScope.show = function (viewName) {
    $rootScope.currentView = viewName;
  };

});