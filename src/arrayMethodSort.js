'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let changesCounter;

    do {
      changesCounter = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) >= 1) {
          const previousElement = this[i - 1];

          this[i - 1] = this[i];
          this[i] = previousElement;
          changesCounter++;
        }
      }
    } while (changesCounter > 0);

    return this;
  };

  function compareAsStrings(a, b) {
    return (String(a) > String(b)) ? 1 : -1;
  }
}

module.exports = applyCustomSort;
