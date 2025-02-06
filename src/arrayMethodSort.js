'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const comparator =
      compareFunction ||
      function (a, b) {
        const strA = String(a);
        const strB = String(b);

        if (strA < strB) {
          return -1;
        }

        if (strA > strB) {
          return 1;
        }

        return 0;
      };

    // Реалізація Bubble Sort
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        // Викликаємо функцію порівняння
        if (comparator(this[j], this[j + 1]) > 0) {
          // Міняємо місцями елементи, якщо потрібно
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this; // Повертаємо відсортований масив
  };
}

module.exports = applyCustomSort;
