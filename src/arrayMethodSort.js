'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) > String(b)
  ) {
    let swapped;

    do {
      swapped = false;

      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j + 1];

          this[j + 1] = this[j];
          this[j] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
