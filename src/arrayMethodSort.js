'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let countChanges = 0;

    do {
      countChanges = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          countChanges++;
        }
      }
    } while (countChanges > 0);

    return this;
  };
}

function defaultCompare(element1, element2) {
  const str1 = element1.toString();
  const str2 = element2.toString();

  if (str1 > str2) {
    return 1;
  } else if (str1 < str2) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
