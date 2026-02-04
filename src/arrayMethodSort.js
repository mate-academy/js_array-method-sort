'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const length = this.length;
    const array = this;

    let compare;

    if (typeof compareFunction === 'function') {
      compare = compareFunction;
    } else {
      compare = (a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr < bStr) {
          return -1;
        } else if (aStr > bStr) {
          return 1;
        } else {
          return 0;
        }
      };
    }

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const a = array[j];
        const b = array[j + 1];

        if (a === undefined && b !== undefined) {
          array[j] = b;
          array[j + 1] = a;
          continue;
        }

        if (a !== undefined && b === undefined) {
          continue;
        }

        if (a === undefined && b === undefined) {
          continue;
        }

        if (compare(a, b) > 0) {
          array[j] = b;
          array[j + 1] = a;
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
