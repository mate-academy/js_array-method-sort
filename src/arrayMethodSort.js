'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    const copy = [...this];
    const isNumber = typeof this[0] === 'number';

    if (compareFunction === undefined) {
      for (let i = 0; i < copy.length; ++i) {
        copy[i] += '';
      }
    }

    for (let i = 0; i < copy.length - 1; i++) {
      let changes = false;

      for (let j = 1; j < copy.length - i; j++) {
        const prev = copy[j - 1];
        const cur = copy[j];
        let localChanges = false;

        if (compareFunction === undefined) {
          // const compare = prev.localeCompare(cur);
          const compare = prev > cur;

          if (compare > 0) {
            changes = true;
            localChanges = true;
          }
        } else if (compareFunction(prev, cur) > 0) {
          changes = true;
          localChanges = true;
        }

        if (localChanges) {
          copy[j - 1] = cur;
          copy[j] = prev;
        }
      }

      if (!changes) {
        break;
      }
    }

    for (let index = 0; index < this.length; index++) {
      if (isNumber) {
        this[index] = +copy[index];
        continue;
      }
      this[index] = copy[index];
    }

    return this;
  };
}

module.exports = applyCustomSort;
