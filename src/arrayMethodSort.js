'use strict';

/**
 * Implement method Sort
 */
const sorterStr = (a, b) => {
  const firstElem = String(a);
  const secondElem = String(b);

  if (firstElem > secondElem) {
    return 1;
  }

  if (firstElem < secondElem) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sorterStr) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[j], this[i]] = [this[i], this[j]];
        };
      };
    }

    return this;
  };
}

module.exports = applyCustomSort;
