'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const callback = compareFunction || compareAsStrings;

    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i - 1;

      while (j >= 0 && callback(this[j], current) > 0) {
        this[j + 1] = this[j];
        j--;
      }

      this[j + 1] = current;
    }

    return this;
  };
}

function compareAsStrings(a, b) {
  const element1 = String(a);
  const element2 = String(b);

  if (element1 > element2) {
    return 1;
  }

  if (element1 < element2) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
