'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultComparator = (a, b) => {
      const A = String(a);
      const B = String(b);

      if (A < B) {
        return -1;
      }

      if (A > B) {
        return 1;
      }

      return 0;
    };

    let cmp;

    if (typeof compareFunction === 'function') {
      cmp = compareFunction;
    } else {
      cmp = defaultComparator;
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (cmp(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
