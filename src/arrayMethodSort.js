'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {

  const compareAsStrings = (a, b) => {
    if (typeof a === 'string') {
      if (a > b) {
        return 1;
      } else if (a === b) {
        return 0;
      } else {
        return -1;
      }
    } else if (typeof a === 'number') {
      const StrinA = String(a);
      const StringB = String(b);

      if (StrinA > StringB) {
        return 1;
      } else if (a === b) {
        return 0;
      } else {
        return -1;
      }
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
