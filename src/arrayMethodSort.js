'use strict';

function toStringSort(firstElment, seondElement) {
  const firstStrElement = String(firstElment);
  const secondStrElement = String(seondElement);

  if (firstStrElement > secondStrElement) {
    return 1;
  } else if (firstStrElement < secondStrElement) {
    return -1;
  } else {
    return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = toStringSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          this[i - 1] = second;
          this[i] = first;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
