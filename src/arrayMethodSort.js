'use strict';

/**
 * Custom Implementation
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const obj = Object(this);
    const len = obj.length >>> 0;
    const length = len < 0 ? 0 : len;

    const items = [];
    const undefineds = [];

    for (let i = 0; i < length; i++) {
      if (i in obj) {
        const val = obj[i];

        if (val === undefined) {
          undefineds.push(val);
        } else {
          items.push(val);
        }
      }
    }

    const defaultCompare = (a, b) => {
      const stringA = String(a);
      const stringB = String(b);

      if (stringA < stringB) {
        return -1;
      }

      if (stringA > stringB) {
        return 1;
      }

      return 0;
    };

    const comparator =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items.length - 1 - i; j++) {
        if (comparator(items[j], items[j + 1]) > 0) {
          const temp = items[j];

          items[j] = items[j + 1];
          items[j + 1] = temp;
        }
      }
    }

    let writeIndex = 0;

    for (let i = 0; i < items.length; i++) {
      obj[writeIndex++] = items[i];
    }

    for (let i = 0; i < undefineds.length; i++) {
      obj[writeIndex++] = undefineds[i];
    }

    for (let i = writeIndex; i < length; i++) {
      delete obj[i];
    }

    return obj;
  };
}

module.exports = applyCustomSort;
