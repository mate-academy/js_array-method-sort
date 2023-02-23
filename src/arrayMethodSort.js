'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callback = compareFunction;
    let countArrayItterations;

    if (arguments.length === 0) {
      callback = (prev, curr) => {
        if (String(prev) > String(curr)) {
          return 1;
        } else if (String(prev) === String(curr)) {
          return 0;
        }

        return -1;
      };
    }

    do {
      countArrayItterations = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElement = this[i - 1];
        const currElement = this[i];

        const comparingResult = callback(prevElement, currElement);

        if (comparingResult > 0) {
          this[i] = prevElement;
          this[i - 1] = currElement;
          countArrayItterations++;
        }
      }
    } while (countArrayItterations > 0);

    return this;
  };
}

module.exports = applyCustomSort;
