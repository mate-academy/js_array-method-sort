'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const comparator =
      compareFunction ||
      ((a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
          return String(a).localeCompare(String(b));
          // Числа сортуються як рядки
        }

        // Спочатку розміщуємо рядки з великої літери перед рядками з малої
        const isUpperA = /^[A-Z]/.test(a);
        const isUpperB = /^[A-Z]/.test(b);

        if (isUpperA !== isUpperB) {
          return isUpperA ? -1 : 1;
          // Рядки з великої літери йдуть раніше
        }

        return a.localeCompare(b);
        // Лексикографічне сортування всередині групи
      });

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
