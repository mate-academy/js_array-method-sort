'use strict';

function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const current = String(a);
    const next = String(b);

    if (current > next) {
      return 1;
    }

    if (current < next) {
      return -1;
    }

    if (current === next) {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isSorted;

    do {
      isSorted = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const next = this[i];

        if (compareFunction(previous, next) > 0) {
          isSorted = true;
          this[i - 1] = next;
          this[i] = previous;
        }

        if (compareFunction(previous, next) < 0) {
          this[i - 1] = previous;
          this[i] = next;
        }
      }
    } while (isSorted === true);

    return this;
  };
}

module.exports = applyCustomSort;
