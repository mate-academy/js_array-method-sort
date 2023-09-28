'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return (a.toString() >= b.toString()) ? 1 : -1;
  }) {
    if (!this) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j + 1], this[j]] = [this[j], this[j + 1]];
        }
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;
