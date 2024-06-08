'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defoultSortFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      let current = this[i];

      for (let j = i + 1; j < this.length; j++) {
        const next = this[j];

        if (compareFunction(current, next) > 0) {
          current = next;
        }
      }

      const temp = this[i];

      this[this.indexOf(current)] = temp;
      this[i] = current;
    }

    return this;
  };
}

function defoultSortFunction(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA < stringB) {
    return -1;
  }

  if (stringA > stringB) {
    return 1;
  }

  return 0;
}

module.exports = applyCustomSort;
