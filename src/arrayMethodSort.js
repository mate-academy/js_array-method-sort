'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    return Array.prototype.sort.call(this, compareFunction);
    // write code here
  };
}

module.exports = applyCustomSort;
