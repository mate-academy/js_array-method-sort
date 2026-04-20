'use strict';

function applyCustomSort() {
  /* eslint-disable no-extend-native */
  if (!Object.prototype.hasOwnProperty.call(Array.prototype, 'sort2')) {
    Object.defineProperty(Array.prototype, 'sort2', {
      value: function (compareFunction) {
        const arr = this;
        const n = arr.length;

        const defaultCompare = (a, b) => {
          const A = String(a);
          const B = String(b);

          if (A < B) {
            return -1;
          }

          if (A > B) {
            return 1;
          }

          return 0;
        };

        const compare =
          typeof compareFunction === 'function'
            ? compareFunction
            : defaultCompare;

        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - 1 - i; j++) {
            const aPresent = j in arr;
            const bPresent = j + 1 in arr;

            // Оба дырки → ничего не делаем
            if (!aPresent && !bPresent) {
              continue;
            }

            if (!compareFunction) {
              if (!aPresent && bPresent) {
                // Сдвигаем элемент влево, дырку оставляем справа
                arr[j] = arr[j + 1];
                delete arr[j + 1];
                continue;
              }

              if (aPresent && !bPresent) {
                // Присутствующий элемент всегда идёт до дырки
                continue;
              }
            }

            // Получаем значения для сравнения
            const a = aPresent ? arr[j] : undefined;
            const b = bPresent ? arr[j + 1] : undefined;

            let res;

            if (!aPresent) {
              // Левая дырка → всегда меняем местами
              res = 1;
            } else if (!bPresent) {
              // Правая дырка → всегда оставляем как есть
              res = -1;
            } else {
              const r = Number(compare(a, b));

              res = Number.isNaN(r) ? 0 : r;
            }

            // Меняем местами, если нужно
            if (res > 0) {
              if (aPresent && bPresent) {
                const temp = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
              } else if (!aPresent && bPresent) {
                arr[j] = arr[j + 1];
                delete arr[j + 1];
              }
            }
          }
        }

        return this; // возвращаем исходный массив
      },
      writable: true,
      configurable: true,
      enumerable: false, // чтобы не светилось в for...in
    });
  }
  /* eslint-enable no-extend-native */
}

module.exports = applyCustomSort;
