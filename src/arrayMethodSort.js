'use strict';

const defaultCompare = (a, b) => {
  const firstString = a.toString();
  const secondString = b.toString();

  return firstString > secondString ? 1 : firstString < secondString ? -1 : 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let i = 0;

    while (i < this.length) {
      let j = 0;

      while (j < this.length - i - 1) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
        j++;
      }
      i++;
    }

    return this;
  };
};

module.exports = applyCustomSort;
