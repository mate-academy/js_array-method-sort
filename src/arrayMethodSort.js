'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareDefault(a, b) {
    const aString = String(a);
    const bString = String(b);
    const areInSameCase =
      (isUpperCase(aString) && isUpperCase(bString)) ||
      (!isUpperCase(aString) && !isUpperCase(bString));

    if (areInSameCase) {
      return aString.localeCompare(b);
    }

    if (isUpperCase(a)) {
      return -1;
    } else {
      return 1;
    }
  }

  function isUpperCase(item) {
    return item.toLowerCase() !== item;
  }

  [].__proto__.sort2 = function (compareFunction = compareDefault) {
    let itemToBePlacedAtTheEnd = this[0];
    let currentEnd = this.length;
    let currentSearchIndex = 0;
    let itemIndex = 0;

    for (let repeatCount = 1; repeatCount < this.length; repeatCount++) {
      while (currentSearchIndex < currentEnd) {
        if (
          compareFunction(this[currentSearchIndex], itemToBePlacedAtTheEnd) > 0
        ) {
          itemToBePlacedAtTheEnd = this[currentSearchIndex];
          itemIndex = currentSearchIndex;
        }
        currentSearchIndex++;
      }
      this[itemIndex] = this[currentEnd - 1];
      this[currentEnd - 1] = itemToBePlacedAtTheEnd;
      currentEnd--;
      currentSearchIndex = 0;
      itemToBePlacedAtTheEnd = this[0];
      itemIndex = 0;
    }

    return this;
  };
}

module.exports = applyCustomSort;
