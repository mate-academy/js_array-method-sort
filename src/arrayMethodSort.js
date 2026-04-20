'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function defaultFunc(a, b) {
    const aString = a.toString();
    const bString = b.toString();

    if (aString > bString) {
      return 1;
    }

    if (aString === bString) {
      return 0;
    }

    return -1;
  }

  [].__proto__.sort2 = function (compareFunction = defaultFunc) {
    let hasChanges = false;

    do {
      hasChanges = false;

      for (let i = 1; i < this.length; i++) {
        const pref = this[i - 1];
        const current = this[i];

        if (compareFunction(pref, current) > 0) {
          this[i] = pref;
          this[i - 1] = current;
          hasChanges = true;
        }
      }
    } while (hasChanges);

    return this;
  };
}
module.exports = applyCustomSort;
