'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    // Функція має порівнювати елементи масива саме як рядки
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    // Перебираємо всі елементи масиву починаючи з першого
    for (let i = 0; i < this.length - 1; i++) {
      // Перебираємо всі елементи масиву починаючи з другого
      for (let j = i + 1; j < this.length; j++) {
        // Порівнюємо елементи масиву
        if (compareFunction(this[i], this[j]) > 0) {
          // Міняємо елементи масиву місцями.
          // Для цього строрюємо змінну temp, в яку записуємо значення this[i].
          // Далі присвоюємо this[i] значення this[j].
          // Тепер this[j] присвоюємо значення temp (this[i]).
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
