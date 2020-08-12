'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const callback = compareFunction
    || ((a, b) => {
      const A = String(a);
      const B = String(b);

      if (A > B) {
        return 1;
      } else if (A < B) {
        return -1;
      } else if (A === B) {
        return 0;
      }
    });

    let n;

    do {
      n = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          n++;
        }
      }
    } while (n > 0);

    return this;
  };
}

module.exports = applyCustomSort;
