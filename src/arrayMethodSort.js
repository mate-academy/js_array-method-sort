'use strict';

/**
 * Implement method Sort
 */
function arrayMethodSort() {
  [].__proto__.sort2 = function (customCompareFn) {
    let comparator =
      typeof customCompareFn === 'function'
        ? customCompareFn
        : (first, second) => (String(first) > String(second) ? 1 : -1);

    if (typeof comparator !== 'function') {
      comparator = (first, second) => {
        const firstLower = String(first).toLowerCase();
        const secondLower = String(second).toLowerCase();

        if (firstLower === secondLower) {
          return String(first).localeCompare(String(second));
        }

        return firstLower.localeCompare(secondLower);
      };
    }

    for (let pass = 0; pass < this.length; pass++) {
      for (let index = 0; index < this.length - 1; index++) {
        if (comparator(this[index], this[index + 1]) > 0) {
          [this[index], this[index + 1]] = [this[index + 1], this[index]];
        }
      }
    }

    return this;
  };
}

module.exports = arrayMethodSort;
