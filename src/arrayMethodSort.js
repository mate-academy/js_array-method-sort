'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        const comparedEl = this[i];
        const currentEl = this[j];

        if (compareFunction === undefined) {
          if (this[i].toString() < this[j].toString()) {
            this[i] = currentEl;
            this[j] = comparedEl;
          }

          continue;
        }

        if (compareFunction(this[i], this[j]) < 0) {
          this[i] = currentEl;
          this[j] = comparedEl;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
