'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    // write code here
    sortFunction(this, 0, this.length, compareFunction);

    return this;
  };
}

function sortFunction(array, begin, end, compareFunction) {
  // no need to sort array with less than 2 elements
  if (end - begin < 2) {
    return;
  }

  // choosing first element as dividing element
  let divideIndex = begin;

  // index of last unchecked element in array
  let j = end - 1;

  /*
    after loop:
    - biger elements are after dividing element
    - smaller elemets are before dividing element
  */
  for (let i = begin + 1; i <= j;) {
    if (compareFunction(array[i], array[divideIndex]) > 0) {
      // if element is bigger move element to the end
      swap(array, i, j);
      j--;
    } else {
      // if element is no bigger move dividing element up
      swap(array, i, divideIndex);
      divideIndex = i;
      i++;
    }
  }

  // sorting elements before and after dividing element
  sortFunction(array, begin, divideIndex, compareFunction);
  sortFunction(array, divideIndex + 1, end, compareFunction);
}

function swap(array, i, j) {
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
}

module.exports = applyCustomSort;
