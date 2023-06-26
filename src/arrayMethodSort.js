'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let sortFunction = compareFunction;

    if (!sortFunction) {
      sortFunction = function(firstValue, secondValue) {
        if (String(firstValue) > String(secondValue)) {
          return 1;
        } else if (String(firstValue) < String(secondValue)) {
          return -1;
        }

        return 0;
      };
    }

    for (
      let index = 0;
      index < this.length;
      index++
    ) {
      for (
        let biggerIndex = index + 1;
        biggerIndex < this.length;
        biggerIndex++
      ) {
        if (sortFunction(this[index], this[biggerIndex]) > 0) {
          [this[index], this[biggerIndex]] = [this[biggerIndex], this[index]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
