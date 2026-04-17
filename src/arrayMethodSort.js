'use strict';

function defaultCompare(a, b) {
  const first = String(a);
  const second = String(b);

  if (first < second) {
    return -1;
  }

  if (first > second) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const isInvalidCompareFunction =
      compareFunction !== undefined && typeof compareFunction !== 'function';

    if (isInvalidCompareFunction) {
      throw new TypeError('compareFunction must be a function');
    }

    const compare = compareFunction ?? defaultCompare;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
