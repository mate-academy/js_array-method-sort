'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const callback = (a, b) => {
    const stringCurrent = a.toString();
    const stringNext = b.toString();

    if (stringCurrent > stringNext) {
      return 1;
    } else if (stringCurrent < stringNext) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = callback) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const prev = this[i - 1];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i] = prev;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
