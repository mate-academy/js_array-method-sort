'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const copmareFunc = typeof compareFunction === 'function'
      ? compareFunction
      : (a, b) => {
        return String(a) > String(b);
      };

    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (copmareFunc(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
