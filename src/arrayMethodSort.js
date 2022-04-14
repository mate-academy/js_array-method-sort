'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = comparingStrings) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          counter++;

          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (counter > 0);

    return this;
  };

  const comparingStrings = (a, b) => {
    const left = String(a);
    const right = String(b);

    if (left > right) {
      return 1;
    } else if (left === right) {
      return 0;
    } else {
      return -1;
    }
  };
}

module.exports = applyCustomSort;
