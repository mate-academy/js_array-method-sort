'use strict';

/** thiscompareFunction
 * Implement method Sort
 */
function applyCustomSort() {
  const defSort = (a, b) => {
    if (a.toString() > b.toString()) {
      return 1;
    }

    if (a.toString() < b.toString()) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = defSort) {
    let hasChanges = true;

    while (hasChanges) {
      hasChanges = false;

      for (let i = 1; i < this.length; i++) {
        const prevElem = this[i - 1];
        const currElem = this[i];

        if (compareFunction(prevElem, currElem) > 0) {
          this[i - 1] = currElem;
          this[i] = prevElem;
          hasChanges = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
