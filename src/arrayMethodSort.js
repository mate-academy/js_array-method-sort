'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here

    if (compareFunction) {
      for (let x = 0; x < this.length - 1; x++) {
        for (let i = 0; i < this.length - 1; i++) {
          const a = this[i];
          const b = this[i + 1];

          if (compareFunction.bind(this)(a, b) > 0) {
            this[i] = b;
            this[i + 1] = a;
          };
        };
      };

      return this;
    };

    for (let x = 0; x < this.length - 1; x++) {
      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i].toString();
        const b = this[i + 1].toString();

        if (a > b) {
          this[i] = typeof this[i] === 'number' ? +b : b;
          this[i + 1] = typeof this[i + 1] === 'number' ? +a : a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
