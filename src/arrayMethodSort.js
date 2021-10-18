'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction !== undefined) {
      let counter;

      do {
        counter = 0;

        for (let i = 1; i < this.length; i++) {
          const prev = this[i - 1];
          const current = this[i];

          if (compareFunction(prev, current) > 0) {
            counter++;
            this[i - 1] = current;
            this[i] = prev;
          }
        }
      } while (counter > 0);

      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (this[i].toString() < this[j].toString()) {
          const element = this[j];

          this[j] = this[i];
          this[i] = element;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
