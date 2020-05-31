'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = function(a, b) {
    return a.toString() > b.toString();
  }) {
    let compare;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          compare = this[i];
          this[i] = this[j];
          this[j] = compare;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
