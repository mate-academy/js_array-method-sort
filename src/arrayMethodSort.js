'use strict';

/**
 * Implement method Sort
 */
const standart = function compareFunction(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) < String(b)) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = standart) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const sorted = compareFunction(this[i], this[j]);

        if (sorted > 0) {
          const save = this[i];

          this[i] = this[j];
          this[j] = save;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
