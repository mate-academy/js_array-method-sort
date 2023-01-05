'use strict';

function compareAsString(a, b) {
  const previous = String(a);
  const current = String(b);

  if (previous > current) {
    return 1;
  }

  if (previous < current) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compare = compareAsString) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compare(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
