'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let isSorted = true;

    while (isSorted) {
      isSorted = false;

      for (let i = 1; i < this.length; i++) {
        const prevElem = this[i - 1];
        const currentElem = this[i];

        const isPrevElemBigger = compareFunction(prevElem, currentElem);
        const prevElemPosition = getElemPosition(isPrevElemBigger);

        if (prevElemPosition === 1) {
          this[i - 1] = currentElem;
          this[i] = prevElem;
          isSorted = true;
        }
      }
    }

    return this;
  };
}

function getElemPosition(diff) {
  switch (true) {
    case diff > 0:
      return 1;

    case diff === 0:
      return 0;

    case diff < 0:
      return -1;

    default:
      throw new Error();
  }
}

function compareStrings(a, b) {
  return Number(String(a) > String(b));
}

module.exports = applyCustomSort;
