'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const useA = String(a);
  const useB = String(b);

  if (useA > useB) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let madeChanges;

    do {
      madeChanges = false;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          this[i - 1] = b;
          this[i] = a;
          madeChanges = true;
        };
      }
    } while (madeChanges);

    return this;
  };
};
module.exports = applyCustomSort;
