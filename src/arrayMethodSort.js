'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let wasReplace = false;

    do {
      wasReplace = false;

      for (let i = 0; i < this.length; i++) {
        const result = compareFunction
          ? compareFunction(this[i], this[i + 1])
          : String(this[i]) > String(this[i + 1]);

        if (result > 0 && i !== this.length - 1) {
          const next = this[i + 1];

          this[i + 1] = this[i];
          this[i] = next;
          wasReplace = true;
        }
      }
    } while (wasReplace);

    return this;
  };
}

module.exports = applyCustomSort;
