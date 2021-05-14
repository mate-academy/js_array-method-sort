'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let sortFunc = (curr, next) => (curr.toString() > next.toString());

    if (compareFunction) {
      sortFunc = compareFunction;
    }

    let switcher = true;

    do {
      switcher = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (sortFunc(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          switcher = true;
        }
      }
    } while (switcher);

    return this;
  };
}

module.exports = applyCustomSort;
