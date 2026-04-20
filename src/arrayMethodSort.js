'use strict';

function defaultSort(a, b) {
  if (`${a}` > `${b}`) {
    return 1;
  }

  if (`${a}` === `${b}`) {
    return 0;
  }

  return -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temporary = this[i];

          this[i] = this[i - 1];
          this[i - 1] = temporary;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
