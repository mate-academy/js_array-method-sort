'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const len = this.length;
    if (len <= 1) return this;
``
    const defaultCompare = (a, b) => {
      if (a === undefined && b === undefined) return 0;
      if (a === undefined) return 1;
      if (b === undefined) return -1;
      const sa = String(a);
      const sb = String(b);
      if (sa < sb) return -1;
      if (sa > sb) return 1;
      return 0;
    };

    const cmp = typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    const entries = [];
    for (let i = 0; i < len; i++) {
      if (i in this) {
        entries.push({ value: this[i], index: i });
      }
    }

    function mergeSort(arr) {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      const merged = [];
      let i = 0, j = 0;
      while (i < left.length && j < right.length) {
        const res = cmp(left[i].value, right[j].value);
        if (res < 0 || (res === 0 && left[i].index < right[j].index)) {
          merged.push(left[i++]);
        } else {
          merged.push(right[j++]);
        }
      }
      return merged.concat(left.slice(i)).concat(right.slice(j));
    }

    const sortedEntries = mergeSort(entries);

    let entryIdx = 0;
    for (let i = 0; i < len; i++) {
      if (entryIdx < sortedEntries.length) {
        this[i] = sortedEntries[entryIdx++].value;
      } else {
        delete this[i];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;