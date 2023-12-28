'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort(callback) {
  [].__proto__.sort2 = function(compareFunction) {
    for (let step = 0; step < this.length; step++) {
      for (let i = 0; i < this.length - step - 1; i++) {
        const currValue = this[i];
        const nextValue = this[i + 1];

        if (nextValue) {
          if (compareFunction) {
            if (compareFunction(currValue, nextValue) > 0) {
              [this[i], this[i + 1]] = [nextValue, currValue];
            }
          } else if (nextValue.toString() < currValue.toString()) {
            [this[i], this[i + 1]] = [nextValue, currValue];
          }
        }
      }
    }

    return this;
  };
}

applyCustomSort();

module.exports = applyCustomSort;
