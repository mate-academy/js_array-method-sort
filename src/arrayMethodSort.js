'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (typeof compareFunction === 'function') {
      return Array.prototype.sort.call(this, compareFunction);
    } else {
      return Array.prototype.sort.call(this);
    }
  };
}

module.exports = applyCustomSort;
