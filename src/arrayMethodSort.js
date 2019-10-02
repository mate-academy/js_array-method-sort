'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction) {
      for (let i = 0; i < this.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[min], this[j]) > 0) {
            min = j;
          }
        }
        if (compareFunction(this[i], this[min]) > 0) {
          const buff = this[min];
          this[min] = this[i];
          this[i] = buff;
        }
      }
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < this.length; j++) {
          if (String(this[j]) < String(this[min])) {
            min = j;
          }
        }
        const buff = this[min];
        this[min] = this[i];
        this[i] = buff;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
