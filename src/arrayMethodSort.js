'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => (
  String(a) > String(b)
);

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    if (this.length < 2) {
      return this;
    }

    let isChanged;

    do {
      isChanged = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temp;

          isChanged = true;
        }
      }
    } while (isChanged);

    return this;
  };
}

module.exports = applyCustomSort;
