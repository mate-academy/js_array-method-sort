'use strict';

const compareLikeString = function(val1, val2) {
  const stringVal1 = String(val1);
  const stringVal2 = String(val2);

  if (stringVal1 > stringVal2) {
    return 1;
  } else if (stringVal1 === stringVal2) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareLikeString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;

          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
