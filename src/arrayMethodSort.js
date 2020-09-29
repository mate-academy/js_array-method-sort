'use strict';

function sortFunction(a, b) {
  const first = String(a);
  const second = String(b);

  if (first > second) {
    return 1;
  } else if (second === first) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const prev = this[i - 1];
          const current = this[i];

          this[i] = prev;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
