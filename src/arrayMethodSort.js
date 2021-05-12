'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let comparator = compareFunction;

    if (comparator === undefined) {
      comparator = (a, b) => a.toString() > b.toString();
    }

    let tmpValue, isExchange;

    do {
      isExchange = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (comparator(this[i], this[i + 1]) > 0) {
          tmpValue = this[i];
          this[i] = this[i + 1];
          this[i + 1] = tmpValue;
          isExchange = true;
        }
      }
    } while (isExchange);

    return this;
  };
}

module.exports = applyCustomSort;
