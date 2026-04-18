'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (
      typeof compareFunction !== 'function' &&
      compareFunction !== undefined
    ) {
      throw new TypeError('Compare must be a function');
    }

    const defaultCompare = (a, b) => {
      const A = String(a);
      const B = String(b);

      if (A < B) {
        return -1;
      }

      if (A > B) {
        return 1;
      }

      return 0;
    };

    const comparator =
      compareFunction === undefined ? defaultCompare : compareFunction;

    const len = this.length >>> 0;
    const items = [];

    for (let i = 0; i < len; i++) {
      if (i in this) {
        items.push({ val: this[i], idx: i });
      }
    }

    for (let i = 0; i < items.length - 1; i++) {
      for (let j = 0; j < items.length - 1 - i; j++) {
        const r = comparator(items[j].val, items[j + 1].val);
        const shouldSwap = r === 0 ? items[j].idx > items[j + 1].idx : r > 0;

        if (shouldSwap) {
          const tmp = items[j];

          items[j] = items[j + 1];
          items[j + 1] = tmp;
        }
      }
    }

    let k = 0;

    for (; k < items.length; k++) {
      this[k] = items[k].val;
    }

    for (let i = k; i < len; i++) {
      if (i in this) {
        delete this[i];
      }
    }

    return this;
  };

  [].__proto__.sort = [].__proto__.sort2;
}

module.exports = applyCustomSort;
