'use strict';

/**
 * Implement method Sort
 */

function compareDefault(a, b) {
  const el1 = '' + a;
  const el2 = '' + b;

  if (el1 > el2) {
    return 1;
  } else if (el1 < el2) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const moreEl = this[j];

          this[j] = this[j + 1];
          this[j + 1] = moreEl;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
