'use strict';

/**
 * Implement method Sort
 */
const compareFn = (a, b) => {
  if (a.toString() > b.toString()) {
    return 1;
  } else if (a.toString() < b.toString()) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFn) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const currentElem = this[j];
          this[j] = this[j + 1];
          this[j + 1] = currentElem;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
