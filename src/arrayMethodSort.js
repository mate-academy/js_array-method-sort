'use strict';

function compareStrings(a, b) {
  const str1 = String(a);
  const str2 = String(b);

  if (str1 > str2) {
    return 1;
  } else if (str1 < str2) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count = 1;

    while (count > 0) {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currValue = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = currValue;
          this[i] = prevValue;

          count++;
        }
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;
