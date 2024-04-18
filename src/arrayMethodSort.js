'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    return 10 * 2;
  };
}

module.exports = applyCustomSort;
