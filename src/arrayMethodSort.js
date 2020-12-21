'use strict';

function compare(elementA, elementB) {
  const a = String(elementA);
  const b = String(elementB);

  if (a < b) {
    return -1;
  };

  if (a > b) {
    return 1;
  };

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentValue = this[i];
        const nextValue = this[i + 1];

        if (compareFunction(currentValue, nextValue) > 0) {
          this[i] = nextValue;
          this[i + 1] = currentValue;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
