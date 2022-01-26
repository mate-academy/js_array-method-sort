'use strict';

const compareStrings = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  }

  if (strA < strB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i += 1) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const tempValue = this[i];

          this[i] = this[i - 1];
          this[i - 1] = tempValue;
          count += 1;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
