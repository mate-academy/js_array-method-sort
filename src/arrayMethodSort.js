'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let i = this.length - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (this[j - 1].toString() > this[j].toString()) {
          const temp = this[j - 1];

          this[j - 1] = this[j];
          this[j] = temp;
        }
      }
    }

    if (compareFunction) {
      for (let i = this.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
          if (this[j - 1] > this[j]) {
            const temp = this[j - 1];

            this[j - 1] = this[j];
            this[j] = temp;
          }

          if (typeof this[j - 1] === 'string'
            && this[j - 1].localeCompare(this[j])
            > this[j].localeCompare(this[j - 1])) {
            const temp = this[j - 1];

            this[j - 1] = this[j];
            this[j] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
