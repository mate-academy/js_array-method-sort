'use strict';

function applyCustomSort() {
  const compareAsStrings = (a, b) => String(a) > String(b);

  [].__proto__.sort2 = function(callback = compareAsStrings) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const previous = this[i];
        const current = this[j];

        if (callback(previous, current) > 0) {
          this[i] = current;
          this[j] = previous;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
