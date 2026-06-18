/* eslint-disable prettier/prettier */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Перевіряємо, чи задана callback-функція для порівняння, якщо ні,
    // то стандартно порівнюємо параметри як рядки.

    let comparator = compareFunction;

    if (typeof compareFunction !== 'function') {
      comparator = (a, b) => {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      };
    }

    // Якщо compareFunction задана, то порівнюємо елементи методом бульбашки,
    // на кожній ітерації зовнішнього цикла "виштовхуючи" найбільший елемент на
    // останню позицію циклу.

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
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
