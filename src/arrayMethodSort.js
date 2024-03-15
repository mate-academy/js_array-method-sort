'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    return this.sort((a, b) => compareFunction(a, b));
  };
}

module.exports = applyCustomSort;
