'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const stringCompaison = (x, y) => {
      const strX = String(x);
      const strY = String(y);

      if (strX > strY) {
        return 1;
      } else if (strX === strY) {
        return 0;
      } else {
        return -1;
      }
    };

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction && typeof this[0] === 'number') {
          if (curr < prev) {
            count++;
            this[i - 1] = curr;
            this[i] = prev;
          }
        } else if (compareFunction && typeof this[0] === 'string') {
          if (curr.localeCompare(prev) === -1) {
            count++;
            this[i - 1] = curr;
            this[i] = prev;
          }
        } else {
          if (stringCompaison(prev, curr) > 0) {
            count++;
            this[i - 1] = curr;
            this[i] = prev;
          }
        }
      }
    } while (count !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
