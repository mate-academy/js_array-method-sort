'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let temp;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          temp = this[i];
          this[i] = this[j];
          this[j] = temp;
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
  } else {
    return 0;
  }
}

module.exports = applyCustomSort;
