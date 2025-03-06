'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) > String(b) ? 1 : -1
  ) {
    let element;

    for (let x = 0; x < this.length - 1; x++) {
      for (let y = x + 1; y < this.length; y++) {
        if (compareFunction(this[x], this[y]) > 0) {
          element = this[y];
          this[y] = this[x];
          this[x] = element;
        }
      }
    }
    /* 
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    } */
    return this;
  };
}

module.exports = applyCustomSort;
