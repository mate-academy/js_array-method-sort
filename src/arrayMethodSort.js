'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  if (!Array.prototype.sort2) {
    [].__proto__.sort2 = function (compareFunction) {
      if (compareFunction) {
        return Array.prototype.sort.call(this, compareFunction);
      } else {
        return Array.prototype.sort.call(this);
      }
    };
  }
}

module.exports = applyCustomSort;
