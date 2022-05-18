'use strict';

const defaultCompareFunction = (a, b) => String(a) > String(b);

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    do {
      let swapped = false;
      let limitRight = this.length - 1;
      let limitLeft = 0;

      const checkSwap = (i) => {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;

          swapped = true;
        }
      };

      for (let i = limitLeft; i < limitRight; i++) {
        checkSwap(i);
      }

      limitRight--;

      for (let i = limitRight; i >= limitLeft; i--) {
        checkSwap(i);
      }

      limitLeft++;

      if (!swapped) {
        break;
      }
    } while (true);

    return this;
  };
}

module.exports = applyCustomSort;
