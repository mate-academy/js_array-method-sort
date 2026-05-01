'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callback = compareFunction;

    if (!callback) {
      callback = (a, b) => {
        const s1 = String(a);
        const s2 = String(b);

        if (s1 < s2) {
          return -1;
        }

        if (s1 > s2) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let n = i + 1; n < this.length; n++) {
        const result = callback(this[i], this[n]);

        if (result > 0) {
          const temp = this[i];

          this[i] = this[n];
          this[n] = temp;
        }
      }
    }

    return this;
  };
}

applyCustomSort();
module.exports = applyCustomSort;
