'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareValuesAsStrings = (first, second) => {
    let returnValue = 0;

    if (String(first) > String(second)) {
      returnValue = 1;
    }

    if (String(first) < String(second)) {
      returnValue = -1;
    }

    return returnValue;
  };

  [].__proto__.sort2 = function(callback = compareValuesAsStrings) {
    let changesCount;

    do {
      changesCount = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];

        if (callback(previous, this[i]) > 0) {
          this[i - 1] = this[i];
          this[i] = previous;
          changesCount++;
        }
      }
    } while (changesCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
