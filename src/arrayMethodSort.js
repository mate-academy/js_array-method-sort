'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let iteration = 0;
    let temp;
    let compare = compareFunction;

    if (arguments.length === 0) {
      compare = (first, second) => first.toString() > second.toString();
    }

    do {
      iteration = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compare(this[i], this[i + 1]) > 0) {
          temp = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temp;
          iteration++;
        }
      }
    } while (iteration > 0);

    return this;
  };
}

module.exports = applyCustomSort;
