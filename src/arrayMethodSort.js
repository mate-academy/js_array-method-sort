'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callbackClone;

    if (typeof compareFunction === 'function') {
      callbackClone = compareFunction;
    } else {
      callbackClone = (a, b) => {
        const srtA = String(a);
        const strB = String(b);

        if (srtA < strB) {
          return -1;
        }

        if (srtA > strB) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let i2 = 0; i2 < this.length - 1 - i; i2++) {
        const container = this[i2];
        const resultCallback = callbackClone(this[i2], this[i2 + 1]);

        if (resultCallback > 0) {
          this[i2] = this[i2 + 1];
          this[i2 + 1] = container;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
