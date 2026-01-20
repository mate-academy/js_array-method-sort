'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      let min = i;

      for (let j = i + 1; j < this.length; j++) {
        let cmp;

        if (typeof compareFunction === 'function') {
          cmp = compareFunction(this[j], this[min]);
        } else {
          cmp = String(this[j]).localeCompare(String(this[min]));
        }

        if (cmp < 0) {
          min = j;
        }
      }

      if (min !== i) {
        const temp = this[i];

        this[i] = this[min];
        this[min] = temp;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
