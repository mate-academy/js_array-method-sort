'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Se não houver callback --> lógica do Unicode
    const compare =
      compareFunction ||
      ((a, b) => {
        const s1 = String(a);
        const s2 = String(b);

        if (s1 < s2) {
          return -1;
        }

        if (s1 > s2) {
          return 1;
        }

        return 0;
      });

    // Bubble Sort
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const resultado = compare(this[j], this[j + 1]);

        if (resultado > 0) {
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
