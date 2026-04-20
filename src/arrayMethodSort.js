'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let cb = compareFunction;

    if (typeof cb !== 'function') {
      cb = (a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (cb(this[i], this[j]) > 0) {
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
