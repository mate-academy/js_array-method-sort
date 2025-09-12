'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    return [].__proto__.sort.call(this, compareFunction);
  };
}

module.exports = applyCustomSort;
