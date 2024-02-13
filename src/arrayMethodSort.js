'use strict';

function compareFn(a, b) {
  if (a.toString() > b.toString()) {
    return 1;
  }

  if (a.toString() < b.toString()) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFn) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const resultCompare = compareFunction(this[i], this[j]);

        if (resultCompare > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
