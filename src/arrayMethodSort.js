'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      const first = String(a);
      const second = String(b);

      if (first > second) {
        return 1;
      }

      if (first < second) {
        return -1;
      }

      return 0;
    },
  ) {
    const FINAL = this;
    const FIN_LEN = FINAL.length - 1;

    for (let i = 0; i < FIN_LEN; i++) {
      for (let j = 0; j < FIN_LEN - i; j++) {
        if (compareFunction(FINAL[j], FINAL[j + 1]) > 0) {
          const temp = FINAL[j];

          FINAL[j] = FINAL[j + 1];
          FINAL[j + 1] = temp;
        }
      }
    }

    return FINAL;
  };
}

module.exports = applyCustomSort;
