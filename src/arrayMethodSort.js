'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (this.length < 2) {
      return this;
    }

    if (compareFunction) {
      for (let j = 0; j < this.length; j++) {
        for (let i = 0; i < this.length - j - 1; i++) {
          if (compareFunction(String(this[i]), String(this[i + 1])) > 0) {
            const temp = this[i];

            this[i] = this[i + 1];
            this[i + 1] = temp;
          }
        }
      }
    } else {
      for (let j = 0; j < this.length; j++) {
        for (let i = 0; i < this.length - j - 1; i++) {
          if (String(this[i]) > String(this[i + 1])) {
            const temp = this[i];

            this[i] = this[i + 1];
            this[i + 1] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
