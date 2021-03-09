'use strict';

const string = (x, y) => {
  const first = x.toString();
  const second = y.toString();

  if (first > second) {
    return 1;
  } else if (first === second) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = string) {
    let count = 1;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i],) > 0) {
          const a = this[i];

          this[i] = this[i - 1];
          this[i - 1] = a;
          count++;
        }
      }
    } while (count !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
