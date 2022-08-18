'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let wasChanges;

    do {
      wasChanges = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          wasChanges = true;
        }
      }
    } while (wasChanges);

    return this;
  };

  function defaultCompare(a, b) {
    return a.toString() > b.toString();
  }
}

module.exports = applyCustomSort;
