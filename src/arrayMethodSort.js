'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = baseCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const previous = this[i - 1];

        if (callback(previous, current) > 0) {
          count++;
          this[i] = previous;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };

  const baseCompare = (a, b) => {
    const aString = String(a).toLowerCase();
    const bString = String(b).toLowerCase();

    if (aString > bString) {
      return 1;
    } else if (aString > bString) {
      return -1;
    } else {
      return 0;
    }
  };
}

module.exports = applyCustomSort;
