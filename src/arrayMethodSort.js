'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(prev, current) {
  const prevStr = prev.toString();
  const currentStr = current.toString();

  if (prevStr > currentStr) {
    return 1;
  } else if (prevStr === currentStr) {
    return 0;
  } else {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let x = 1; x < this.length; x++) {
        const prev = this[x - 1];
        const current = this[x];

        if (compareFunction(prev, current) > 0) {
          const temp = current;

          this[x] = prev;
          this[x - 1] = temp;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
