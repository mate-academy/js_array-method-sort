'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction || toSort;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[i], this[j]) > 0) {
          const tmp = this[i];
          this[i] = this[j];
          this[j] = tmp;
        }
      }
    }

    return this;
  };
}

function toSort(a, b) {
  if (String(a) > String(b)) {
    return 1;
  } else if (String(b) > String(a)) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
