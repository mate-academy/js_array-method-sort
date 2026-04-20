'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compareFun = null;

    if (typeof compareFunction === 'function') {
      compareFun = compareFunction;
    } else {
      compareFun = (a, b) => {
        if (a.toString() > b.toString()) {
          return 1;
        } else {
          return -1;
        }
      };
    }

    for (let i = 0; i < this.length; i++) {
      let isSwapped = false;

      for (let n = 0; n < this.length - 1; n++) {
        if (compareFun(this[n], this[n + 1]) > 0) {
          [this[n], this[n + 1]] = [this[n + 1], this[n]];
          isSwapped = true;
        }
      }

      if (!isSwapped) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
