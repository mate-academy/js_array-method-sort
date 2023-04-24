'use strict';

const defaultCompare = (a, b) => {
  const aString = String(a);
  const bString = String(b);

  if (aString > bString) {
    return 1;
  }

  if (aString < bString) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let swap = true;

    while (swap) {
      swap = false;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          this[i] = a;
          this[i - 1] = b;
          swap = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
