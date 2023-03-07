'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareAsStrings = (prev, curr) => {
      return String(prev) > String(curr);
    };

    const callback = compareFunction || compareAsStrings;
    let countSwapped;

    do {
      countSwapped = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElement = this[i - 1];
        const currElement = this[i];

        const comparingResult = callback(prevElement, currElement);

        if (comparingResult > 0) {
          this[i] = prevElement;
          this[i - 1] = currElement;
          countSwapped++;
        }
      }
    } while (countSwapped > 0);

    return this;
  };
}

module.exports = applyCustomSort;
