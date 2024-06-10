'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const initialCompareFunction = (a, b) => {
      if (String(a) < String(b)) {
        return -1;
      }

      return 1;
    };

    const compare = compareFunction ?? initialCompareFunction;

    let isSwapped = false;

    do {
      isSwapped = false;

      for (let idx = 0; idx < this.length; idx++) {
        const result = compare(this[idx], this[idx + 1]);

        if (result > 0) {
          const temp = this[idx];

          this[idx] = this[idx + 1];

          this[idx + 1] = temp;

          isSwapped = true;
        }
      }
    } while (isSwapped);

    return this;
  };
}

module.exports = applyCustomSort;
