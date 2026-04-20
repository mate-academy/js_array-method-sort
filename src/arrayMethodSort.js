'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arrayCopy = [...this];

    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr < bStr) {
        return -1;
      }

      if (aStr > bStr) {
        return 1;
      }

      return 0;
    };

    const comparator =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    for (let i = 0; i < arrayCopy.length - 1; i++) {
      for (let j = 0; j < arrayCopy.length - 1 - i; j++) {
        if (comparator(arrayCopy[j], arrayCopy[j + 1]) > 0) {
          const temp = arrayCopy[j];

          arrayCopy[j] = arrayCopy[j + 1];
          arrayCopy[j + 1] = temp;
        }
      }
    }

    for (let k = 0; k < this.length; k++) {
      this[k] = arrayCopy[k];
    }

    return this;
  };
}

module.exports = applyCustomSort;
