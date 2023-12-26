'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort(callback) {
  [].__proto__.sort2 = function(compareFunction) {
    for (let step = 0; step < this.length; step++) {
      for (let i = 0; i < this.length; i++) {
        const currValue = this[i];
        const nextValue = this[i + 1];

        if (nextValue) {
          if (compareFunction) {
            if (compareFunction(currValue, nextValue) > 0) {
              this[i] = nextValue;
              this[i + 1] = currValue;
            }
          } else if (typeof currValue === 'string' && nextValue < currValue) {
            this[i] = nextValue;
            this[i + 1] = currValue;
          } else if (nextValue.toString() < currValue.toString()) {
            this[i] = nextValue;
            this[i + 1] = currValue;
          }
        }
      }
    }

    return this;
  };
}

applyCustomSort();

module.exports = applyCustomSort;
