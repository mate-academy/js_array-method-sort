'use strict';

/**
 * Implement method Sort
 */

const defaultFunc = (a, b) => {
  if (a.toString() > b.toString()) {
    return 1;
  } else if (a.toString() < b.toString()) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunc) {
    let ctr = 0;

    do {
      ctr = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          ctr++;
        }
      }
    } while (ctr > 0);

    return this;
  };
}

module.exports = applyCustomSort;
