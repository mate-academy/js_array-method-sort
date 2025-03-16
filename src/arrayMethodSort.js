'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = compareFunction;

    if (typeof compare !== 'function') {
      compare = (a, b) => (String(a) > String(b) ? 1 : -1);
    }

    let swapped;
    let n = this.length;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {
        if (compare(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
