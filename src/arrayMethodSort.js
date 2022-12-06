'use strict';

function defaultCompare(str1, str2) {
  const a = String(str1);
  const b = String(str2);

  switch (true) {
    case a > b:
      return 1;
    case a < b:
      return -1;
    default:
      return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
