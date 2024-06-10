'use strict';

/**
 * Implement method Sort
 */
const initialCompareFunction = (a, b) => {
  if (String(a) < String(b)) {
    return -1;
  }

  return 1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = initialCompareFunction) {
    let isSwapped = false;

    do {
      isSwapped = false;

      for (let idx = 0; idx < this.length; idx++) {
        const result = compareFunction(this[idx], this[idx + 1]);

        if (result > 0) {
          [this[idx], this[idx + 1]] = [this[idx + 1], this[idx]];

          isSwapped = true;
        }
      }
    } while (isSwapped);

    return this;
  };
}

module.exports = applyCustomSort;
