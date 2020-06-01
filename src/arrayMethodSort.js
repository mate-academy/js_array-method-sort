'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length - 1;) {
        const tempoItem = this[i];

        if (this[i].toString() > this[i + 1].toString()) {
          this[i] = this[i + 1];
          this[i + 1] = tempoItem;

          if (i !== 0) {
            i--;
          }
        } else {
          i++;
        }
      }

      return this;
    }

    for (let i = 0; i < this.length - 1;) {
      const tempoItem = this[i];

      if (compareFunction(this[i], this[i + 1]) > 0) {
        this[i] = this[i + 1];
        this[i + 1] = tempoItem;

        if (i !== 0) {
          i--;
        }
      } else {
        i++;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
