'use strict';

/**
 * Implement method Sort
 */
function defaultFunction(previous, current) {
  const prevString = previous.toString();
  const currString = current.toString();

  if (prevString > currString) {
    return 1;
  }

  if (prevString < currString) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i] = previous;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
