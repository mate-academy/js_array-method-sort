'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let lengthOfArray = this.length;

    // default sort:

    if (compareFunction === undefined) {
      const type = typeof this[0];

      while (lengthOfArray > 1) {
        for (let i = 0; i < lengthOfArray - 1; i++) {
          const a = this[i] + '';
          const b = this[i + 1] + '';

          if (a > b) {
            this[i] = b;
            this[i + 1] = a;
          }
        }
        lengthOfArray--;
      }

      // type input is number:

      if (type === 'number') {
        for (let i = 0; i < this.length; i++) {
          this[i] = parseInt(this[i]);
        }
      }

      return this;
    } else { // run callback:
      while (lengthOfArray > 0) {
        for (let i = 0; i < lengthOfArray - 1; i++) {
          const a = this[i];
          const b = this[i + 1];

          if (compareFunction(a, b) > 0) {
            this[i] = b;
            this[i + 1] = a;
          }
        }
        lengthOfArray--;
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
