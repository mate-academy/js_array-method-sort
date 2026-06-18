'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFn) {
    const array = this;

    // Função de comparação padrão (lexicográfica como string)
    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr < bStr) {
        return -1;
      }

      if (aStr > bStr) {
        return 1;
      }

      return 0;
    };

    const compare =
      typeof compareFn === 'function' ? compareFn : defaultCompare;

    // Bubble sort simples (poderia ser qualquer algoritmo de ordenação)
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (compare(array[j], array[j + 1]) > 0) {
          // Troca
          const temp = array[j];

          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
