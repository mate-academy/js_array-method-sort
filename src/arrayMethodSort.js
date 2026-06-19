'use strict';

/**
 * Implement method Sort
 */

function compareSymbol(a, b) {
  if (a.toString() > b.toString()) {
    return 1;
  } else if (a.toString() < b.toString()) {
    return -1;
  } else {
    return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareSymbol) {
    // write code here

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const symbol = this[j];

          this[j] = this[j + 1];
          this[j + 1] = symbol;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
