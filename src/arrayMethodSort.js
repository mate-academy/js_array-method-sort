'use strict';

function compareAsString(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) < String(b)) {
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
        const curent = this[i];

        if (compare(previous, curent) > 0) {
          this[i - 1] = curent;
          this[i] = previous;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
