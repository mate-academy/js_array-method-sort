'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const regex = /^[A-Z]/;

  [].__proto__.sort2 = function sort2(compareFunction) {
    let comparisonFunction = compareFunction;

    if (typeof comparisonFunction !== 'function') {
      comparisonFunction = (a, b) => {
        const valueA = String(a);
        const valueB = String(b);

        const isUpperA = regex.test(valueA);
        const isUpperB = regex.test(valueB);

        if (isUpperA && !isUpperB) {
          return -1;
        }

        if (!isUpperA && isUpperB) {
          return 1;
        }

        const result = valueA.localeCompare(valueB, 'en-US', {
          sensitivity: 'variant',
        });

        return result;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (comparisonFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
