'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = noCallBack) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };

  function noCallBack(firstValue, secondValue) {
    if (`${firstValue}` > `${secondValue}`) {
      return 1;
    }

    if (`${firstValue}` < `${secondValue}`) {
      return -1;
    } else {
      return 0;
    }
  }
}

module.exports = applyCustomSort;
