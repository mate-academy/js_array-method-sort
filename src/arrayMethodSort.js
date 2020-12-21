'use strict';

/**
 * Implement method Sort
 */
const charsCompare = (a, b) => {
  if ((String(a)) > (String(b))) {
    return 1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = charsCompare) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const compareResult = compareFunction(this[i], this[i + 1]);

        if (compareResult > 0) {
          const currentEl = this[i];

          this[i] = this[i + 1];
          this[i + 1] = currentEl;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
};

module.exports = applyCustomSort;
