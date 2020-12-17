'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let v;
    let count = 1;

    while (count !== 0) {
      count = 0;

      if (compareFunction === undefined) {
        for (let i = 0; i < this.length - 1; i++) {
          if (`${this[i]}` > `${this[i + 1]}`) {
            v = this[i];
            this[i] = this[i + 1];
            this[i + 1] = v;
            count++;
          }
        }
      } else {
        for (let i = 0; i < this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            v = this[i];
            this[i] = this[i + 1];
            this[i + 1] = v;
            count++;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
