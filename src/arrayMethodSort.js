'use strict';

/**
 * Implement method Sort
 */
const charsCompare = (charA, charB) => {
  if (('' + charA) > ('' + charB)) {
    return 1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = charsCompare) {
    let counter = 0;

    while (true) {
      for (let i = 0; i < this.length - 1; i++) {
        const compareResult = compareFunction(this[i], this[i + 1]);

        if (compareResult > 0) {
          const currentEl = this[i];

          this[i] = this[i + 1];
          this[i + 1] = currentEl;
        } else {
          counter++;
        }
      }

      if (counter === this.length - 1) {
        return this;
      }

      counter = 0;
    }
  };
}

module.exports = applyCustomSort;
