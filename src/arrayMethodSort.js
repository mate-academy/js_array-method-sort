'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compareCallback =
      compareFunction ??
      ((a, b) => {
        const aStr = `${a}`;
        const bStr = `${b}`;

        if (aStr > bStr) {
          return 1;
        }

        if (aStr < bStr) {
          return -1;
        }

        return 0;
      });

    const sorted = this.slice(1).reduce(
      (sortedArr, curr) => {
        const currSortIdx =
          sortedArr.findLastIndex((num) => compareCallback(curr, num) > 0) + 1;

        return [
          ...sortedArr.slice(0, currSortIdx),
          curr,
          ...sortedArr.slice(currSortIdx),
        ];
      },
      [this[0]],
    );

    // mutate original array (this)
    sorted.forEach((sortItem, idx) => {
      this[idx] = sortItem;
    });

    return this;
  };
}

module.exports = applyCustomSort;
