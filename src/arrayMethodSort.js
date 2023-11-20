'use strict';

/**
 * Implement method Sort
 */

const compareAsStrings = (a, b) => {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) === String(b)) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    // write code here

    let changeCount = this.length;
    let change = 0;
    let difArray = [...this];

    while (changeCount !== 0) {
      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          this[i] = difArray[i - 1];
          this[i - 1] = difArray[i];
          difArray = [...this];
          change++;
        }
      }
      changeCount = change;
      change = 0;
    }

    return this;
  };
}

applyCustomSort();

module.exports = applyCustomSort;
