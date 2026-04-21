'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      let value = this[i];
      let index = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction) {
          if (compareFunction(this[j], this[index]) < 0) {
            value = this[j];
            index = j;
          }
        } else {
          if (String(this[j]) < String(this[index])) {
            value = this[j];
            index = j;
          }
        }
      }

      if (index !== i) {
        this[index] = this[i];
        this[i] = value;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
