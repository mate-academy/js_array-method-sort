'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare;

    if (compareFunction) {
      compare = compareFunction;
    } else {
      compare = defaultCompare;
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let index = 0; index < this.length - 1 - i; index++) {
        if (compare(this[index], this[index + 1]) > 0) {
          const elem = this[index];

          this[index] = this[index + 1];
          this[index + 1] = elem;
        }
      }
    }

    return this;
  };
}

const defaultCompare = function (a, b) {
  const value1 = String(a);
  const value2 = String(b);

  if (value1 > value2) {
    return 1;
  } else if (value1 < value2) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
