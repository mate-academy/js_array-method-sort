'use strict';

/**
 * Implement method Sort
 */
const defaultFunction = (a, b) => {
  const aString = a.toString();
  const bString = b.toString();

  if (aString > bString) {
    return 1;
  } else if (aString < bString) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const buffer = this[i - 1];

          this[i - 1] = this[i];
          this[i] = buffer;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
