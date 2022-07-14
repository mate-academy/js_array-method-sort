'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count = 0;
    let compareFunctionForUse;

    const defaultFunction = (previous, current) => {
      if (previous.toString() > current.toString()) {
        return 1;
      }

      if (previous.toString() < current.toString()) {
        return -1;
      }

      return 0;
    };

    arguments.length < 1
      ? compareFunctionForUse = defaultFunction
      : compareFunctionForUse = compareFunction;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunctionForUse(previous, current) > 0) {
          this[i] = previous;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
