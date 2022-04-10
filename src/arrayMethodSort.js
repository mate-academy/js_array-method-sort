'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const el = this[i];

          this[i] = this[i - 1];
          this[i - 1] = el;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function defaultSort(prev, next) {
  const prevStr = prev.toString();
  const nextStr = next.toString();

  if (prevStr > nextStr) {
    return 1;
  }

  if (nextStr > prevStr) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
