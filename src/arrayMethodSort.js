'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compare) {
    const arr = this;

    // Se não houver função, compara como strings simples
    const cmp =
      compare ||
      function (a, b) {
        const sa = String(a);
        const sb = String(b);

        if (sa > sb) {
          return 1;
        }

        if (sa < sb) {
          return -1;
        }

        return 0;
      };

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (cmp(arr[j], arr[j + 1]) > 0) {
          const t = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = t;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
