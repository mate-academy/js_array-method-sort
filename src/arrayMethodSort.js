'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (typeof compareFunction === 'function') {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            const temp = this[j];

            this[j] = this[i];
            this[i] = temp;
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[i].toString() > this[j].toString()) {
          const temp = this[j];

          this[j] = this[i];
          this[i] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
