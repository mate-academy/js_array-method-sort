'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    a.toString() > b.toString() ? 1 : 0) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const index = this[i];

          this[i] = this[j];
          this[j] = index;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
