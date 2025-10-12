'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
            if (a === undefined) return 1;
            if (b === undefined) return -1;

            const A = String(a);
            const B = String(b);

            if (A < B) return -1;
            if (A > B) return 1;
            return 0;
        };

    let swapped;
    for (let i = 0; i < this.length - 1; i++) {
      swapped = false;
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped) break;
    }

    return this;
  };
}

module.exports = applyCustomSort;



