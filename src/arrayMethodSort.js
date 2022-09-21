'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count = 1;

    while (count > 0) {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const currentValue = this[i];
        const prevValue = this[i - 1];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          count++;
        }
      }
    }

    return this;
  };
}

const compareString = (a, b) => {
  const strA = `${a}`;
  const strB = `${b}`;

  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
