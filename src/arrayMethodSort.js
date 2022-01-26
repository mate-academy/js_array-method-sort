'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let shift;

    do {
      shift = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temp = this[i];

          this[i] = this[i - 1];
          this[i - 1] = temp;
          shift++;
        }
      }
    } while (shift);

    return this;
  };
}

function compareAsStrings(prev, current) {
  if (String(prev) > String(current)) {
    return 1;
  }

  return 0;
}

module.exports = applyCustomSort;
