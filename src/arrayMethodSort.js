'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compare = compareAsStrings) {
    for (let i = 1; i < this.length; i++) {
      const unsortedElement = this[i];
      let sortedPos = i - 1;

      while (sortedPos >= 0 && compare(this[sortedPos], unsortedElement) > 0) {
        this[sortedPos + 1] = this[sortedPos];
        sortedPos--;
      }

      this[sortedPos + 1] = unsortedElement;
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
