'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callbackFunction = compareFunction 
    let checked = false;

    if (arguments.length === 0) {
      callbackFunction = (a, b) => {
        if (a.toString() < b.toString()) {
          return -1;
        }

        if (a.toString() > b.toString()) {
          return 1;
        }

        return 0;
      }
    }

    // bubble sort
    do {
      checked = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (callbackFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temp;

          checked = true;
        }
      }
    } while (checked);

    return this;
  };
}

module.exports = applyCustomSort;
