'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = checkString) {
    let check = true;

    while (true) {
      for (let item = 0; item < this.length - 1; item++) {
        const current = this[item];
        const next = this[item + 1];

        if (compareFunction(current, next) > 0) {
          this[item] = next;
          this[item + 1] = current;
          check = false;
        }
      }

      if (check) {
        break;
      }

      check = true;
    }

    return this;
  };
}

function checkString(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = applyCustomSort;
