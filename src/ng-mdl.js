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
})