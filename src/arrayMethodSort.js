'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare = !compareFunction ? compareDefault : compareFunction;

    for (let i = 0; i < this.length; i++) {
      let index = i;
      let min = this[i];

      for (let j = i; j < this.length; j++) {
        if (compare(min, this[j]) > 0) {
          index = j;
          min = this[j];
        }
      }

      this[index] = this[i];
      this[i] = min;
    }

    return this;
  };
}

function compareDefault(a, b) {
  const aString = String(a);
  const bString = String(b);

  if (aString > bString) {
    return 1;
  }

  if (aString < bString) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
