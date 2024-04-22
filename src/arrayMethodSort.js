'use strict';

function applyCustomSort() {
  function defaultCompare(a, b) {
    return a.toString() > b.toString();
  }

  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    const compare = compareFunction;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
