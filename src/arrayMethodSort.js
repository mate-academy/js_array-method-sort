'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let cmp;

    if (typeof compareFunction === 'function') {
      cmp = compareFunction;
    } else {
      cmp = function (a, b) {
        const sa = String(a);
        const sb = String(b);

        if (sa < sb) {
          return -1;
        }

        if (sa > sb) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 1; i < this.length; i++) {
      let j = i;

      while (j > 0 && cmp(this[j], this[j - 1]) < 0) {
        const temp = this[j];

        this[j] = this[j - 1];
        this[j - 1] = temp;
        j--;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
