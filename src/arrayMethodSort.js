'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        let shouldSwap;

        if (compareFunction) {
          // якщо є функція — використовуємо її
          shouldSwap = compareFunction(this[j], this[j + 1]) > 0;
        } else {
          // без колбеку — порівнюємо як рядки
          shouldSwap = String(this[j]) > String(this[j + 1]);
        }

        if (shouldSwap) {
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
