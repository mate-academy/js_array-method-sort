'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareValues) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let x = i + 1; x < this.length; x++) {
        if (compareFunction(this[i], this[x]) > 0) {
          [this[i], this[x]] = [this[x], this[i]];
        }
      }
    }

    return this;
  };
}

const compareValues = function(a, b) {
  return String(a) > String(b);
};

module.exports = applyCustomSort;
