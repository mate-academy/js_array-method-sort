'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const last = this[i];

          this[i] = this[j];
          this[j] = last;
        }
      }
    }

    return this;
  };
}

const compare = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA < strB) {
    return -1;
  }

  if (strA > strB) {
    return 1;
  }

  return 0;
};

module.exports = applyCustomSort;
