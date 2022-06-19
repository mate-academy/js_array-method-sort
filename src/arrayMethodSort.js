'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compare = (value1, value2) => {
    const strValue1 = value1.toString();
    const strValue2 = value2.toString();

    if (strValue1 === strValue2) {
      return 0;
    }

    return (strValue1 < strValue2) ? -1 : 1;
  };

  [].__proto__.sort2 = function(compareFunction = compare) {
    let changes;

    do {
      changes = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          changes = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (changes);

    return this;
  };
}

module.exports = applyCustomSort;
