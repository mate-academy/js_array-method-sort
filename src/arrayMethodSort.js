'use strict';

function strCompare(a, b) {
  if (a.toString() < b.toString()) {
    return -1;
  } else if (a.toString() > b.toString()) {
    return 1;
  } else {
    return 0;
  };
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = strCompare) {
    if (this.length === 0) {
      return this;
    }

    const compareFunctionInt = compareFunction;
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const r = compareFunctionInt(this[i - 1], this[i]);

        if (r > 0) {
          const el = this[i - 1];

          this[i - 1] = this[i];
          this[i] = el;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
