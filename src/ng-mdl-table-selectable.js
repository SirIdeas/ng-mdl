(function () {
'use strict';


function MaterialSelectableTable (Mdl, MaterialCheckboxService) { 'ngInject';

  /**
   * Class constructor for Data Table Card MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {Element} element The element that will be upgraded.
   */
  function MaterialSelectableTable($scope, element, rows) {
    this.element_ = element;

    // Initialize instance.
    this.init($scope, rows);
  };

  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
  MaterialSelectableTable.prototype.Constant_ = {
    // None at the moment.
  };

  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
  MaterialSelectableTable.prototype.CssClasses_ = {
    DATA_TABLE:     'mdl-data-table',
    SELECTABLE:     'mdl-data-table--selectable',
    SELECT_ELEMENT: 'mdl-data-table__select',
    IS_SELECTED:    'is-selected',
    IS_UPGRADED:    'is-upgraded'
  };

  /**
   * Generates and returns a function that toggles the selection state of a
   * single row (or multiple rows).
   *
   * @param {Element} checkbox Checkbox that toggles the selection state.
   * @param {Element} row Row to toggle when checkbox changes.
   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
   * @private
   */
  MaterialSelectableTable.prototype.selectRow_ = function(checkbox, rows, multiple) {
    return function() {
      var el;
      rows.map(function (row) {
        Mdl.ifClass(row, checkbox.checked, this.CssClasses_.IS_SELECTED)
        if (!multiple) return;
        el = row.querySelector('td').querySelector('.mdl-checkbox');
        el.MaterialCheckbox[checkbox.checked?'check':'uncheck']();
      }.bind(this));
    }.bind(this);
  };

  /**
   * Creates a checkbox for a single or or multiple rows and hooks up the
   * event handling.
   *
   * @param {Element} row Row to toggle when checkbox changes.
   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
   * @private
   */
  MaterialSelectableTable.prototype.createCheckbox_ = function($scope, row, rows) {
    var label = document.createElement('label');
    var labelClasses = [
      'mdl-checkbox',
      this.CssClasses_.SELECT_ELEMENT
    ];
    label.className = labelClasses.join(' ');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mdl-checkbox__input');
    
    var localRows = row?[row]:rows;
    if (row) {
      checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);
    }
    checkbox.addEventListener('change', this.selectRow_(checkbox, localRows, !row));
    label.appendChild(checkbox);
    label.MaterialCheckbox = MaterialCheckboxService.create($scope, label);
    return label;
  };

  MaterialSelectableTable.prototype.addRow = function ($scope, row) {
    var firstCell = row.querySelector('td');
    if (firstCell) {
      var td = document.createElement('td');
      if (row.parentNode.nodeName.toUpperCase() === 'TBODY') {
        var rowCheckbox = this.createCheckbox_($scope, row);
        td.appendChild(rowCheckbox);
      }
      row.insertBefore(td, firstCell);
    }
  };

  /**
   * Initialize element.
   */
  MaterialSelectableTable.prototype.init = function($scope, rows) {
    var firstHeader = this.element_.querySelector('th');
    var th = document.createElement('th');
    var headerCheckbox = this.createCheckbox_($scope, null, rows);
    th.appendChild(headerCheckbox);
    firstHeader.parentElement.insertBefore(th, firstHeader);
    this.element_.classList.add(this.CssClasses_.SELECTABLE)
    this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
  };

  return {
    create: function ($scope, element, rows) {
      return new MaterialSelectableTable($scope, element, rows);
    }
  };

}

function MdlTableSelectableCtrl ($scope, Mdl, MaterialSelectableTable) { 'ngInject';

  var rows = [];

  this.addRow = function (row) {
    if (this.instance_) {
      this.instance_.addRow($scope, row);
    }
    rows.push(row);
  }.bind(this);

  this.init_ = function (element) {
    // Create instance of tabs
    this.instance_ = MaterialSelectableTable.create($scope, element, rows);
    rows.map(function (row) {
      this.instance_.addRow($scope, row);
    }.bind(this));
  }.bind(this);

}

angular.module('ng-mdl')

.service('MaterialSelectableTable', MaterialSelectableTable)
.directive('mdlTableSelectable', function () { 'ngInject';
  return {
    restrict: 'A',
    controller: MdlTableSelectableCtrl,
    link: function ($scope, $element, $attrs, mdlTableSelectableCtrl) {
      mdlTableSelectableCtrl.init_($element[0]);
    },
  };
})
.directive('mdlTableSelectableItem', function () { 'ngInject';
  return {
    restrict: 'A',
    require: '^mdlTableSelectable',
    link: function ($scope, $element, $attrs, mdlTableSelectableCtrl) {
      mdlTableSelectableCtrl.addRow($element[0]);
    },
  };
});

})();