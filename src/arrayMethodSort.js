'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => (
  String(a) > String(b)
);

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isChanged;

    do {
      isChanged = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          isChanged = true;
        }
      }
    } while (isChanged);

    return this;
  };
}

module.exports = applyCustomSort;
