'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // Dodajemy metodę sort2 do prototypu Array
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction
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

    for (let i = 0; i < this.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped) break; // optymalizacja: jeśli brak zamiany, kończymy
    }
    return this;
  };

  // Delegacja standardowej metody sort do sort2
  Array.prototype.sort = function(compareFunction) {
    return this.sort2(compareFunction);
  };
}

module.exports = applyCustomSort;





