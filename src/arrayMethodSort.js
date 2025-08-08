'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      ((a, b) => {
        if (String(a) > String(b)) {
          return 1;
        } else if (String(a) < String(b)) {
          return -1;
        }

        return 0;
      });

    const definedItems = [];
    let undefinedCount = 0;
    let emptySlotsCount = 0;

    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        if (this[i] === undefined) {
          undefinedCount++;
        } else {
          definedItems.push(this[i]);
        }
      } else {
        emptySlotsCount++;
      }
    }

    for (let i = 0; i < definedItems.length; i++) {
      for (let j = i + 1; j < definedItems.length; j++) {
        if (compare(definedItems[i], definedItems[j]) > 0) {
          [definedItems[i], definedItems[j]] = [
            definedItems[j],
            definedItems[i],
          ];
        }
      }
    }

    for (let i = 0; i < definedItems.length; i++) {
      this[i] = definedItems[i];
    }

    for (
      let i = definedItems.length;
      i < definedItems.length + undefinedCount;
      i++
    ) {
      this[i] = undefined;
    }

    for (
      let i = definedItems.length + undefinedCount;
      i < definedItems.length + undefinedCount + emptySlotsCount;
      i++
    ) {
      delete this[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
