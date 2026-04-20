'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const current = this[i];

          this[i] = this[j];
          this[j] = current;
        }
      }
    }

    return this;
  };
}

function defaultSort(a, b) {
  if (String(a) > String(b)) {
    return 1;
  } else if (String(a) < String(b)) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
