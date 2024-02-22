'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function swap(array, index1, index2) {
    const temp = array[index1];

    array[index1] = array[index2];
    array[index2] = temp;
  }

  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      let swapped = false;

      for (let j = 0; j < this.length - i - 1; j++) {
        const a = this[j].toString();
        const b = this[j + 1].toString();

        if (compareFunction) {
          if (compareFunction(a, b) > 0) {
            swap(this, j, j + 1);
            swapped = true;
          }
        } else {
          if (a > b) {
            swap(this, j, j + 1);
            swapped = true;
          }
        }
      }

      if (!swapped) {
        break;
      };
    }

    return this;
  };
}

module.exports = applyCustomSort;
