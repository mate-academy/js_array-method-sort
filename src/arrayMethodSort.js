'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currValue = this[i];

        if (compareFunction(this[i], i, this) > 0) {
          this[i - 1] = currValue;
          this[i] = prevValue;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareStrings(a, b) {
  const str1 = String(a).localeCompare();
  const str2 = String(b).localeCompare();

  if (str1 > str2) {
    return 1;
  } else if (str1 < str2) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
