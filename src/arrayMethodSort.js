'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const StringA = a.toString();
    const StringB = b.toString();

    if (StringA > StringB) {
      return 1;
    } else if (StringA < StringB) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(callback = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (callback(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}
module.exports = applyCustomSort;
