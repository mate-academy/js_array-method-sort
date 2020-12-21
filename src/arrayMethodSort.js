'use strict';

const compareString = (a, b) =>
  String(a) > String(b) ? 1
    : String(b) > String(a) ? -1
      : 0;

function applyCustomSort() {
  [].__proto__.sort2 = function(callbacks = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callbacks(prev, current) > 0) {
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
