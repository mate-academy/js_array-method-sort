'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Simple comparison function if none is provided
    if (typeof compareFunction !== 'function') {
      const newCompare = (a, b) => (String(a) > String(b) ? 1 : -1);

      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (newCompare(this[j], this[j + 1]) > 0) {
            // Swap elements if they're out of order
            [this[j], this[j + 1]] = [this[j + 1], this[j]];
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
