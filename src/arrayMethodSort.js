'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    const isNumber = typeof this[0] === 'number';

    if (compareFunction === undefined) {
      this.forEach((element, index) => {
        this[index] = element.toString();
      });
    }

    for (let i = 0; i < this.length - 1; i++) {
      let changes = false;
      for (let j = 1; j < this.length - i; j++) {
        const prev = this[j - 1];
        const cur = this[j];
        let localChanges = false;

        if (compareFunction === undefined) {
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
          this[j - 1] = cur;
          this[j] = prev;
        }
      }

      if (!changes) {
        break;
      }
    }

    if (isNumber) {
      this.forEach((element, index) => {
        this[index] = +element;
      });
    }

    return this;
  };
}

module.exports = applyCustomSort;
