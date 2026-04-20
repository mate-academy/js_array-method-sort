'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFn) {
    // зберігаємо функцію у змінну compare.
    const compare = compareFn || defaultCompare;

    // in case compareFn is not provided
    function defaultCompare(a, b) {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr > bStr) {
        return 1;
      }

      if (aStr < bStr) {
        return -1;
      }

      return 0;
    }

    // We need maximum of n - 1 passes to sort everything.
    // After each iteration, the greatest value (in case ascending order)
    // of the array becomes the last index value
    // of the array, so we do j < this.length - 1 - i

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        // а тут відбувається сам виклик переданої функції
        if (compare(this[j], this[j + 1]) > 0) {
          // desctructuring
          // The this array is modified directly inside the loop,
          // so all subsequent comparisons operate on its updated state.
          [this[j], this[j + 1]] = [this[j + 1], this[j]];

          // const temp = this[j];

          // this[j] = this[j + 1];
          // this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
