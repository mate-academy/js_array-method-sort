'use strict';

/**
 * Implement method Sort
 */
function compareStrings(firstElement, secondElement) {
  const firstCharacter = firstElement.toString();
  const secondCharacter = secondElement.toString();

  if (firstCharacter > secondCharacter) {
    return 1;
  }

  if (firstCharacter < secondCharacter) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let isSorted;

    do {
      isSorted = true;

      for (let i = 0; i < this.length - 1; i++) {
        const firstElement = this[i];
        const secondElement = this[i + 1];

        if (compareFunction(firstElement, secondElement) > 0) {
          [this[i + 1], this[i]] = [firstElement, secondElement];
          isSorted = false;
        }
      }
    } while (!isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
