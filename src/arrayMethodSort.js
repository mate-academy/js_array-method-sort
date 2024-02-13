'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => {
      if (`${a}` > `${b}`) {
        return 1;
      };

      return -1;
    }
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (compareFunction(this[i], this[n]) > 0) {
          const ELEM = this[i];

          this[i] = this[n];
          this[n] = ELEM;
        };
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;
