'use strict';

/**
 * Implement method Sort
 */
function defaultComparator(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA < stringB) {
    return -1;
  }

  if (stringA > stringB) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length < 2) {
      return this;
    }

    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultComparator;

    const length = this.length;

    let sorted = true;

    do {
      sorted = true;

      for (let i = 0; i < length - 1; i++) {
        let res = compare(this[i], this[i + 1]);

        res = Number(res);

        if (!Number.isFinite(res)) {
          res = 0;
        }

        if (res > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          sorted = false;
        }
      }
    } while (!sorted);

    return this;
  };
}

module.exports = applyCustomSort;
