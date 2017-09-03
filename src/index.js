'use strict';

angular.module('ng-mdl', [])

.service('Mdl', function () { 'ngInject';
  return {
    ifClass: function (element, condition, cls) {
      element && element.classList[condition?'add':'remove'](cls);
    },
    addAndRemoveClasses: function (element, classToAdd, classesToRemove) {
      classesToRemove = [].concat(classesToRemove);
      if (classToAdd) {
        var idx = classesToRemove.indexOf(classToAdd);
        if (idx!=-1) classesToRemove.splice(idx, 1);
        element.classList.add(classToAdd);
      }
      classesToRemove.map(element.classList.remove.bind(element.classList));
    },
  };
});

require('./ng-mdl-button');
require('./ng-mdl-checkbox');
require('./ng-mdl-icon-toggle');
require('./ng-mdl-layout');
require('./ng-mdl-menu');
require('./ng-mdl-progress');
require('./ng-mdl-radio');
require('./ng-mdl-ripple');
require('./ng-mdl-spinner');
require('./ng-mdl-switch');
require('./ng-mdl-table-selectable');
require('./ng-mdl-tabs');
require('./ng-mdl-textfield');
require('./ng-mdl-tooltip');