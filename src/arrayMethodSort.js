'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    const comparator = compareFunction !== undefined
      ? compareFunction
      : defaultCompare;
    let isSorted;

    do {
      isSorted = true;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (comparator(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          isSorted = false;
        }
      }
    } while (isSorted === false);

    return this;
  };
}

function defaultCompare(a, b) {
  switch (true) {
    case (`${a}` > `${b}`): return 1;
    case (`${a}` < `${b}`): return -1;
    case (`${a}` === `${b}`): return 0;
    default: throw new Error('Error: defaultCompre');
  }
};
module.exports = applyCustomSort;
