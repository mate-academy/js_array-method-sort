'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    function compareStr(a, b) {
      const strA = String(a);
      const strB = String(b);

      if (strA > strB) {
        return 1;
      }

      if (strA < strB) {
        return -1;
      }

      return 0;
    }

    const callback = compareFunction || compareStr;

    let cnt;

    do {
      cnt = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          cnt++;
        }
      }
    } while (cnt > 0);

    return this;
  };
}

module.exports = applyCustomSort;
