'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let switchElements = false;

    for (let i = 1; i < this.length; i++) {
      switch (arguments.length) {
        case 0:
          if ('' + this[i - 1] > '' + this[i]) {
            switchElements = true;
          }
          break;

        default:
          if ((compareFunction(this[i - 1], this[i])) > 0) {
            switchElements = true;
          }
      }

      if (switchElements) {
        [this[i - 1], this[i]] = [this[i], this[i - 1]];

        if (i > 1) {
          i -= 2;
        }
      }

      switchElements = false;
    }

    return this;
  };
}

module.exports = applyCustomSort;
