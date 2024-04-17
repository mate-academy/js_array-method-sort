'use strict';

/**
 * Implement method Sort
 */
function alterFuction(a, b) {
  const aA = String(a);
  const bB = String(b);

  if (aA < bB) {
    return -1;
  } else if (aA > bB) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = alterFuction) {
    let box;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) < 0) {
        } else {
          box = this[i];

          this[i] = this[j];
          this[j] = box;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
