'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compare = compareFunction;

    if (!compareFunction) {
      compare = (previous, next) => {
        const previousString = String(previous);
        const nextString = String(next);

        if (previousString > nextString) {
          return 1;
        } else if (previousString === nextString) {
          return 0;
        } else {
          return -1;
        }
      };
    }

    let changesInsideCycle = true;

    do {
      changesInsideCycle = false;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];

        if (compare(previousElement, this[i]) > 0) {
          this[i - 1] = this[i];
          this[i] = previousElement;
          changesInsideCycle = true;
        }
      }
    } while (changesInsideCycle);

    return this;
  };
}

module.exports = applyCustomSort;
