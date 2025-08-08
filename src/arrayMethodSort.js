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

    for (const item of this) {
      if (item === undefined) {
        undefinedCount++;
      } else {
        definedItems.push(item);
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

    const totalLength = definedItems.length + undefinedCount;

    for (let i = definedItems.length; i < totalLength; i++) {
      this[i] = undefined;
    }

    return this;
  };
}

module.exports = applyCustomSort;
