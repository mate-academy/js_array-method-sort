'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const biggerItem = this[i];

          this[i] = this[j];
          this[j] = biggerItem;
        }
      }
    }

    return this;
  };
};

function compareDefault(a, b) {
  return String(a) > String(b);
}

module.exports = applyCustomSort;
