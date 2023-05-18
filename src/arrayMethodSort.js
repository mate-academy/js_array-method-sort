'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = alphabeticSort) {
    if (this.length <= 1) {
      return this;
    }

    let counter = 0;

    while (counter < this.length) {
      let forward = 1;

      for (; forward < this.length; forward++) {
        const previous = forward - 1;

        if (compareFunction(this[forward], this[previous]) < 0) {
          const buffer = this[forward];

          this[forward] = this[previous];
          this[previous] = buffer;
        }
      }

      counter++;
    }

    return this;
  };

  function alphabeticSort(a, b) {
    const forwardChar = String(a);
    const previousChar = String(b);

    if (forwardChar > previousChar) {
      return 1;
    }

    if (previousChar > forwardChar) {
      return -1;
    }

    return 0;
  }
}

module.exports = applyCustomSort;
