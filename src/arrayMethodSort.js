'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (this.length === 0) {
      return this;
    }

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        if ((compareFunction && compareFunction(this[i], this[i + 1]) > 0)
        || (!compareFunction && (this[i] + '' > this[i + 1] + ''))) {
          const a = this[i];

          this[i] = this[i + 1];
          this[i + 1] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
