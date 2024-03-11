'use strict';

const defaultCompare = (a, b) => String(a) > (String(b));

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[j], this[i]] = [this[i], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
