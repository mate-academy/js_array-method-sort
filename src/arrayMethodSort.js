'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return (String(a) > String(b))
      ? 1
      : -1;
  }) {
    if (this.length < 2) {
      return this;
    }

    for (let i1 = 0; i1 < this.length - 1; i1++) {
      for (let i2 = i1 + 1; i2 < this.length; i2++) {
        const a = this[i1];
        const b = this[i2];

        if (compareFunction(a, b) > 0) {
          this[i1] = b;
          this[i2] = a;
        };
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
