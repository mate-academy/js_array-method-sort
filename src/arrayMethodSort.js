'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let k = 0; k < this.length - 1; k++) {
        const compare = compareFunction(this[k], this[k + 1]);

        if (compare > 0) {
          const next = this[k];

          this[k] = this[k + 1];
          this[k + 1] = next;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
