/* eslint-disable no-console */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      let min = this[i];
      let mIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        const b = this[j];

        if (compareFunction) {
          if (compareFunction(min, b) > 0) {
            min = b;
            mIndex = j;
          }
        } else {
          if (String(min) > String(b)) {
            min = b;
            mIndex = j;
          }
        }
      }

      [this[i], this[mIndex]] = [this[mIndex], this[i]];
    }

    return this;
  };
}

module.exports = applyCustomSort;
