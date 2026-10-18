'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length < 1) {
      return this;
    }

    let loopLength = this.length - 1;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < loopLength; j++) {
        const buffer = this[j];
        let result;

        if (compareFunction !== undefined) {
          result = compareFunction(this[j], this[j + 1]);
        } else {
          const first = String(this[j]);
          const second = String(this[j + 1]);

          result = first < second ? -1 : first > second ? 1 : 0;
        }

        if (result > 0) {
          this[j] = this[j + 1];
          this[j + 1] = buffer;
        }
      }

      loopLength--;
    }

    return this;
  };
}

module.exports = applyCustomSort;
