'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let swap = true;

    while (swap) {
      swap = false;

      for (let i = 0; i < this.length - 1; i++) {
        if ((arguments[0] === undefined
          && `${this[i]}` > `${this[i + 1]}`)
          || (arguments[0] !== undefined
            && compareFunction(this[i], this[i + 1]) > 0)) {
          const cache = this[i + 1];

          this[i + 1] = this[i];
          this[i] = cache;
          swap = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
