'use strict';

function defaultCompare(a, b) {
  const first = String(a);
  const second = String(b);

  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
}

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = defaultCompare;

    if (typeof compareFunction === 'function') {
      compare = compareFunction;
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
