'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let swap = true;

    do {
      swap = false;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          swap = true;
        }
      }
    } while (swap);

    return this;
  };
}

const compareStrings = (a, b) => {
  const strA = '' + a;
  const strB = '' + b;

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
