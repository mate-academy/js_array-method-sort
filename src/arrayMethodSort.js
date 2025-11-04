'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const arr = this;
    const temp = new Array(arr.length);

    const compareWrap = (a, b) => {
      const as = String(a);
      const bs = String(b);

      if (typeof compareFunction === 'function') {
        return compareFunction(a, b);
      } else {
        return as < bs ? -1 : as > bs ? 1 : 0;
      }
    }

    function mergeSort(left, right) {
      if (left >= right) {
        return;
      }

      const mid = Math.floor((left + right) / 2);
      mergeSort(left, mid);
      mergeSort(mid+1, right);
      merge(left, mid, right);
    }

    function merge(left, mid, right) {
        let i = left;
        let j = mid + 1;
        let k = left;

        while (i <= mid && j <= right) {
          if (compareWrap(arr[i], arr[j]) <= 0) {
          temp[k++] = arr[i++];
        } else {
          temp[k++] = arr[j++];
        }
        }

        while (i <= mid) {
          temp[k++] = arr[i++];
        }

        while (j <= right) {
          temp[k++] = arr[j++];
        }

        for (let t = left; t <= right; t++) {
          arr[t] = temp[t];
        }

      }

      mergeSort(0, arr.length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
