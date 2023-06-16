'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          const elem1 = this[i].toString();
          const elem2 = this[j].toString();

          if (typeof this[i] === 'number') {
            if (elem1 > elem2) {
              this[j] = +elem1;
              this[i] = +elem2;
              continue;
            }
          }

          if (elem1 > elem2) {
            this[j] = elem1;
            this[i] = elem2;
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const elem1 = this[i];
        const elem2 = this[j];

        const result = compareFunction(elem1, elem2);

        if (result > 0) {
          this[j] = elem1;
          this[i] = elem2;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
