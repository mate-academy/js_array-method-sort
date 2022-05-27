'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        const comparison = (arguments.length === 0)
          ? (`${first}` > `${second}`)
          : compareFunction(this[i - 1], this[i]) > 0;

        if (comparison) {
          this[i] = first;
          this[i - 1] = second;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
