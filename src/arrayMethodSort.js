'use strict';

/**
 * Implement method Sort
 */
const defaultCompairFunction = (a, b) => {
  const aStr = a.toString();
  const bStr = b.toString();

  if (aStr < bStr) {
    return -1;
  }

  if (aStr > bStr) {
    return 1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompairFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;
