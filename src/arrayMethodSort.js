'use strict';

const compareAsString = (a, b) =>
  (String(a) > String(b)) - (String(a) < String(b));

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstElem = this[i - 1];
        const secondElem = this[i];

        if (compareFunction(firstElem, secondElem) > 0) {
          count++;
          this[i - 1] = secondElem;
          this[i] = firstElem;
        }
      }
    } while (count > 0);

    return this;
  };
}
module.exports = applyCustomSort;
