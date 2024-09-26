'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if ((compareFunction === undefined && `${this[i]}` > `${this[j]}`)
         || (compareFunction && compareFunction(this[i], this[j]) > 0)) {
          const key = this[i];

          this[i] = this[j];
          this[j] = key;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
