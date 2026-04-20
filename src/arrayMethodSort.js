'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const proto = Object.getPrototypeOf([]);

  function customSort(compareFunction) {
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    const compare =
      compareFunction ||
      function (a, b) {
        const A = String(a);
        const B = String(b);

        if (A > B) {
          return 1;
        }

        if (A < B) {
          return -1;
        }

        return 0;
      };

    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i - 1;

      while (j >= 0 && compare(this[j], current) > 0) {
        this[j + 1] = this[j];
        j--;
      }

      this[j + 1] = current;
    }

    return this;
  }

  Object.defineProperty(proto, 'sort2', {
    value: customSort,
    writable: true,
    configurable: true,
  });

  Object.defineProperty(proto, 'sort', {
    value: function (compareFunction) {
      return customSort.call(this, compareFunction);
    },
    writable: true,
    configurable: true,
  });
}

module.exports = applyCustomSort;
