'use strict';

const compareString = (itemA, itemB) => String(itemA) > String(itemB);

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
