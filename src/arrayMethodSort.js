'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let temp = '';

    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let g = i + 1; g < this.length; g++) {
          if (`${this[i]}` > `${this[g]}`) {
            temp = this[i];
            this[i] = this[g];
            this[g] = temp;
          }
        }
      }
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let g = i + 1; g < this.length; g++) {
        const index = i;
        const arr = [];

        if (compareFunction(this[g], this[i], index, arr) < 0) {
          temp = this[i];
          this[i] = this[g];
          this[g] = temp;
        }
      }
    }
    return this;
  };
}

module.exports = applyCustomSort;
