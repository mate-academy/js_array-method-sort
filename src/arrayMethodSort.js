'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 1; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (this[i].toString() < this[j].toString()) {
            const minEl = this[i];

            this[i] = this[j];
            this[j] = minEl;
          }
        }
      }

      return this;
    }

    if (typeof compareFunction === 'function') {
      for (let i = 1; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) < 0) {
            const minEl = this[i];

            this[i] = this[j];
            this[j] = minEl;
          }

          if (compareFunction(this[j], this[i]) > 0) {
            const minEl = this[j];

            this[j] = this[i];
            this[i] = minEl;
          }
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
