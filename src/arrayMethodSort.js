'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this; // Зберігаємо посилання на масив

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        let comparisonResult;

        if (typeof compareFunction === 'function') {
          comparisonResult = compareFunction(arr[j], arr[j + 1]);

          if (comparisonResult > 0) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        } else {
          // Сортування за замовчуванням (Unicode code point)
          const str1 = String(arr[j]);
          const str2 = String(arr[j + 1]);

          if (str1 > str2) {
            // Обмінюємо елементи, якщо str1 лексикографічно більше за str2
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
    }

    return arr; // Повертаємо відсортований масив (this)
  };
}

module.exports = applyCustomSort;
