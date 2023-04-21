'use strict';

const compareAsSrting = (a, b) =>
  (String(a) > String(b)) - (String(a) < String(b));

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsSrting) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
