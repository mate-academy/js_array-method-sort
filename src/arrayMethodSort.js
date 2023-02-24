'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const copmareFunc = typeof compareFunction === 'function'
      ? compareFunction
      : (a, b) => {
        const strA = String(a);
        const strB = String(b);

        if (strA === strB) {
          return 0;
        } else if (strA < strB) {
          return -1;
        } else {
          return 1;
        }
      };

    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (copmareFunc(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
