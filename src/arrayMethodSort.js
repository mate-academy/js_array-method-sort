'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;

    const compareStr = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA > strB) {
        return 1;
      } else if (strA === strB) {
        return 0;
      } else {
        return -1;
      }
    };

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curent = this[i];

        if (compareFunction) {
          if (compareFunction(prev, curent) > 0) {
            count++;
            this[i - 1] = curent;
            this[i] = prev;
          }
        } else {
          if (compareStr(prev, curent) > 0) {
            count++;
            this[i - 1] = curent;
            this[i] = prev;
          }
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
