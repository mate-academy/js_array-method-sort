'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSortedAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;

          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };

  function defaultSortedAsStrings(element1, element2) {
    const string1 = element1.toString();
    const string2 = element2.toString();

    if (string1 > string2) {
      return 1;
    } else if (string1 < string2) {
      return -1;
    } else {
      return 0;
    }
  }
}

module.exports = applyCustomSort;
