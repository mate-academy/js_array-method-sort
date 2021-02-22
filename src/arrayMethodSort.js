'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = Stringcompare) {
    let isSorted = false;

    do {
      isSorted = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          isSorted = true;
          this[i] = previous;
          this[i - 1] = current;
        }
      }
    } while (isSorted);

    return this;
  };
}

function Stringcompare(a, b) {
  if (String(a) > String(b)) {
    return 1;
  } else {
    if (String(a) === String(b)) {
      return 0;
    } else {
      return -1;
    }
  }
}

module.exports = applyCustomSort;
