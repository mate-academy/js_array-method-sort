'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1)
  ) {
    for (let i = 0; i < this.length - 1; i++) {
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
