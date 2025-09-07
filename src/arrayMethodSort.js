'use strict';

/**
 * Implement method Sort
 */
// const rooms = [
//   { name: 'kitchen', square: 25 },
//   { name: 'living room', square: 18 },
//   { name: 'balcony', square: 7 },
//   { name: 'restRoom', square: 30 },
// ];

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError('Eror');
    }

    const cmp =
      compareFunction ??
      ((a, b) => {
        const A = String(a);
        const B = String(b);

        if (A < B) {
          return -1;
        }

        if (A > B) {
          return 1;
        }

        return 0;
      });
    const basket = [];
    let k = 0;

    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        basket[k] = arr[i];
        k++;
      }
    }

    for (let i = 0; i < basket.length; i++) {
      for (let j = 0; j < basket.length - i - 1; j++) {
        if (cmp(basket[j], basket[j + 1]) > 0) {
          const temp = basket[j];

          basket[j] = basket[j + 1];
          basket[j + 1] = temp;
        }
      }
    }

    // Записываем отсортированные значения обратно в массив
    for (let i = 0; i < basket.length; i++) {
      arr[i] = basket[i];
    }

    // Остальные индексы делаем "дырами" (как у нативного sort)
    for (let i = basket.length; i < arr.length; i++) {
      delete arr[i];
    }

    return arr;
  };
}

module.exports = applyCustomSort;
