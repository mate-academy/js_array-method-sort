'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const comparator =
      compareFunction ||
      ((a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
      });

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
