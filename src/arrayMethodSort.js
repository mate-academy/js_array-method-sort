'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = (a, b) => `${a}` > `${b}`) {
    let swapper;

    do {
      swapper = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i], this[i + 1]) > 0) {
          const currValue = this[i];

          this[i] = this[i + 1];
          this[i + 1] = currValue;
          swapper = true;
        }
      }
    } while (swapper);

    return this;
  };
}

module.exports = applyCustomSort;
