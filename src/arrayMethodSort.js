'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const originalSort = Array.prototype.sort;

  [].__proto__.sort2 = function (compareFunction) {
    return originalSort.call(this, compareFunction);
  };
}

module.exports = applyCustomSort;
