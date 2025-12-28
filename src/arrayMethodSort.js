'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let _compareFunction = compareFunction;

    if (typeof compareFunction !== 'function') {
      _compareFunction = (a, b) => {
        const strA = String(a);
        const strB = String(b);

        if (strA < strB) {
          return -1;
        }

        if (strA > strB) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      let swapped = false;

      for (let j = 0; j < this.length - 1 - i; j++) {
        if (_compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;

          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
