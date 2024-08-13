'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let k = 0; k < this.length; k++) {
        const comparedEl = this[i];
        const currentEl = this[k];

        if (compareFunction === undefined) {
          if (this[i].toString() < this[k].toString()) {
            this[i] = currentEl;
            this[k] = comparedEl;
          }

          continue;
        }

        if (compareFunction(this[i], this[k]) < 0) {
          this[i] = currentEl;
          this[k] = comparedEl;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
