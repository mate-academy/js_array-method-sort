'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const arr = this; // "this" wskazuje na tablicę

    // Jeśli nie podano compareFunction, używamy domyślnego
    const compare = compareFunction || function(a, b) {
      // domyślnie sortujemy elementy jako stringi
      a = String(a);
      b = String(b);
      return a < b ? -1 : a > b ? 1 : 0;
    };

    // Proste sortowanie bąbelkowe
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          // zamiana miejscami
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return this; // sort() zwraca tablicę

  };
}

module.exports = applyCustomSort;
