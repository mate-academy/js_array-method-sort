'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let arrayWasChanged;

    do {
      arrayWasChanged = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          arrayWasChanged = true;
        }
      }
    } while (arrayWasChanged);

    return this;
  };
}

function defaultSort(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) < String(b)) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
