'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const lista = this;

    function compare(a, b) {
      if (typeof compareFunction === 'function') {
        return compareFunction(a, b);
      }

      const stringA = String(a);
      const stringB = String(b);

      if (stringA > stringB) {
        return 1;
      }

      if (stringA < stringB) {
        return -1;
      }

      return 0;
    }

    for (let i = 0; i < lista.length - 1; i++) {
      for (let j = 0; j < lista.length - 1 - i; j++) {
        if (compare(lista[j], lista[j + 1]) > 0) {
          const temp = lista[j];

          lista[j] = lista[j + 1];
          lista[j + 1] = temp;
        }
      }
    }

    return lista;
  };
}

module.exports = applyCustomSort;
