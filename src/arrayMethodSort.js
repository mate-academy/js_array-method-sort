'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let cmp;

    if (typeof compareFunction === 'function') {
      cmp = compareFunction;
    } else {
      cmp = (a, b) => {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const resultado = cmp(this[i], this[j]);

        if (resultado > 0) {
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
