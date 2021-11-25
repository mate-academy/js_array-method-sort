'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

const compareAsString = (string1, string2) => {
  const str1 = String(string1);
  const str2 = String(string2);

  return (str1 > str2) ? 1 : (str1 < str2) ? -1 : 0;
};

module.exports = applyCustomSort;
