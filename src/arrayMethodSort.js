'use strict';

/**
 * Implement method Sort
 */
'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (typeof compareFunction !== 'function') {
      compareFunction = function(a, b) {
        const aStr = String(a);
        const bStr = String(b);
        if (aStr < bStr) return -1;
        if (aStr > bStr) return 1;
        return 0;
      };
    }

    const elementsInfo = [];
    for (let i = 0; i < this.length; i++) {
      const hasOwn = Object.hasOwn(this, i);
      elementsInfo.push({
        value: hasOwn ? this[i] : undefined,
        isHole: !hasOwn
      });
    }

    // Bubble sort implementation based on compareFunction
    for (let i = 0; i < elementsInfo.length; i++) {
      for (let j = 0; j < elementsInfo.length - i - 1; j++) {
        const a = elementsInfo[j].value;
        const b = elementsInfo[j + 1].value;
        if (compareFunction(a, b) > 0) {
          // Swap elements
          const temp = elementsInfo[j];
          elementsInfo[j] = elementsInfo[j + 1];
          elementsInfo[j + 1] = temp;
        }
      }
    }

    // Delete all existing elements
    for (let i = 0; i < this.length; i++) {
      delete this[i];
    }

    // Insert sorted elements, preserving holes
    for (let i = 0; i < elementsInfo.length; i++) {
      const info = elementsInfo[i];
      if (!info.isHole) {
        this[i] = info.value;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
