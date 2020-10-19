'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction) {
      let counter;

      do {
        counter = 0;

        for (let i = 1; i < this.length; i++) {
          const previousValue = this[i - 1];
          const currentValue = this[i];

          if (compareFunction(previousValue, currentValue) > 0) {
            this[i - 1] = currentValue;
            this[i] = previousValue;
            counter++;
          }
        }
      } while (counter > 0);

      return this;
    } else {
      let counter;

      do {
        counter = 0;

        for (let i = 1; i < this.length; i++) {
          const previousValue = this[i - 1];
          const currentValue = this[i];

          if (previousValue.toString() > currentValue.toString()) {
            this[i - 1] = currentValue;
            this[i] = previousValue;
            counter++;
          }
        }
      } while (counter > 0);

      return this;
    }
  };
}

module.exports = applyCustomSort;
