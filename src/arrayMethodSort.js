'use strict';

const defaultSort = function(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let count;

    do {
      count = 0;

      for (let j = 0; j < this.length - 1; j++) {
        const prev = this[j];
        const secondIndex = this[j + 1];

        if (compareFunction('' + prev, '' + secondIndex) > 0) {
          this[j + 1] = prev;
          this[j] = secondIndex;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
