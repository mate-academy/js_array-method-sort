'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  /* eslint-disable no-extend-native */
  if (typeof Array.prototype.sort2 === 'function') {
    return;
  }

  Array.prototype.sort2 = function (compareFunction) {
    const cmp =
      compareFunction ||
      function (a, b) {
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

    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i - 1;

      while (j >= 0 && cmp(this[j], current) > 0) {
        this[j + 1] = this[j];
        j--;
      }
      this[j + 1] = current;
    }

    return this;
  };
  /* eslint-enable no-extend-native */
}
module.exports = applyCustomSort;
