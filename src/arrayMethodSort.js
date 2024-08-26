'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let len = this.length;
    let swapped;
    const defaultCompareFunction = (a, b) => {
      return a.toString() > b.toString();
    };

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        if (
          compareFunction
            ? compareFunction(this[i], this[i + 1]) > 0
            : defaultCompareFunction(this[i], this[i + 1])
        ) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;

          swapped = true;
        }
      }

      len--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
