'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    a.toString() > b.toString()) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const elem = this[i];

        if (compareFunction(this[i], this[j]) > 0) {
          this[i] = this[j];
          this[j] = elem;
        }
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;
