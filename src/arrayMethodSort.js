'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // Default comparison function for strings
    let callback;
    if (typeof compareFunction === 'undefined') {
      callback = (a, b) => String(a).localeCompare(String(b));
    } else {
      callback = compareFunction;
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i; j < this.length - 1; j++) {
        let a = this[j];
        let b = this[j + 1];
        if (callback(a, b) > 0) {
          const temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    };
  };
}

module.exports = applyCustomSort;
