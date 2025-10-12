'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
            const A = String(a);
            const B = String(b);
            if (A < B) return -1;
            if (A > B) return 1;
            return 0;
          };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

