'use strict';

/**
 * Implement method Sort
 */
const sortAsFunction = (a, b) => {
  const first = String(a);
  const second = String(b);

  let result;

  switch (true) {
    case first > second:
      result = 1;
      break;

    case first === second:
      result = 0;
      break;

    default:
      result = -1;
      break;
  }

  return result;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortAsFunction) {
    let result;

    do {
      result = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          result++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (result > 0);

    return this;
  };
}

module.exports = applyCustomSort;
