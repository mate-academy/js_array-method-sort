'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  Array.prototype.sort2 = function (compareFunction) {
    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
            const left = String(a);
            const right = String(b);

            if (left > right) {
              return 1;
            }

            if (left < right) {
              return -1;
            }

            return 0;
          };

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const a = this[j];
        const b = this[j + 1];

        // Вызываем колбэк сравнения
        // Если результат > 0, значит 'a' должно идти после 'b'
        if (compare(a, b) > 0) {
          // Меняем элементы местами (деструктуризация)
          this[j] = b;
          this[j + 1] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
