'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      const sa = String(a);
      const sb = String(b);

      return sa > sb ? 1 : sa < sb ? -1 : 0;
    },
  ) {
    const cmp =
      compareFunction ||
      ((a, b) => {
        const sa = String(a);
        const sb = String(b);

        return sa > sb ? 1 : sa < sb ? -1 : 0;
      });

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        let cmpRes = cmp(this[i], this[i + 1]);

        if (Number.isNaN(cmpRes)) {
          cmpRes = 0;
        }

        if (cmpRes > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
