'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        let result;

        if (compareFunction) {
          result = compareFunction(this[i], this[j]);
        } else if (String(this[i]) > String(this[j])) {
          result = 1;
        } else if (String(this[i]) < String(this[j])) {
          result = -1;
        } else {
          result = 0;
        }

        if (result > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
