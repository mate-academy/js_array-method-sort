'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // Dodajemy własną metodę sort2 do prototypu tablic
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction || ((a, b) => {
      if (a === undefined) return 1;
      if (b === undefined) return -1;
      const A = String(a);
      const B = String(b);
      if (A < B) return -1;
      if (A > B) return 1;
      return 0;
    });

    const arr = this;
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped) break; // optymalizacja dla prawie posortowanych tablic
    }
    return arr;
  };
}

module.exports = applyCustomSort;






