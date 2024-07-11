'use strict';

/**
 * Implement method Sort
 *
 *
 */
//add comment for push 

const defaultCompare = function (a, b) {
  const aNum = String(a);
  const bNum = String(b);

  if (aNum < bNum) {
    return -1;
  }

  if (aNum > bNum) {
    return 1;
  }

  if (aNum === bNum) {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const item = this[i];

          this[i] = this[j];

          this[j] = item;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
