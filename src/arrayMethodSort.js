/* eslint-disable prettier/prettier */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // eslint-disable-next-line no-param-reassign
    compareFunction =
      typeof compareFunction === 'function'
        ? compareFunction
        : // eslint-disable-next-line max-len
        (a, b) => {
          const aStr = String(a);
          const bStr = String(b);

          // Сортування за регістром: великі літери йдуть перед малими
          if (aStr < bStr)
          // eslint-disable-next-line curly
            return -1;

          if (aStr > bStr)
          // eslint-disable-next-line curly
            return 1;

          return 0;
        };

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    // Повертаємо оригінальний масив
    return this;
  };
}

module.exports = applyCustomSort;
