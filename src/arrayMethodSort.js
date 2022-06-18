'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prevChar = this[i - 1];
        const currChar = this[i];

        if (callback(prevChar, currChar) > 0) {
          counter++;

          this[i - 1] = currChar;
          this[i] = prevChar;
        }
      }
    } while (counter > 0);

    return this;
  };

  const compareFunction = (char1, char2) => {
    const symbol1 = String(char1);
    const symbol2 = String(char2);

    if (symbol1 > symbol2) {
      return 1;
    } else if (symbol1 === symbol2) {
      return 0;
    }

    return -1;
  };
}

module.exports = applyCustomSort;
