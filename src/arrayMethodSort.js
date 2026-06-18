'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    /*
    checking to see if a custom comparison function was not provided. if this is
    the case, then the default behavior for sort() is to sort the elements of
    the array in ascending order by converting the elements into strings, and
    then comparing their sequence of UTF-16 code unit values to determine the
    sort order of the elements. for the sorting algorithm, we are using bubble
    sort, which is the simplest sorting algorithm to comprehend and implement,
    although it's runtime is O(n^2). nonetheless, for the purpose of this task,
    we are not concerned with the runtime of the sorting algorithm implemented
    */
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          // if current element > next element, swap them (ascending order)
          if (String(this[j]) > String(this[j + 1])) {
            const temp = this[j]; // store current element

            this[j] = this[j + 1]; // store next element in @ of current element
            this[j + 1] = temp; // store current element in @ of next element
          }
        }
      }
    }

    /*
    checking to see if a custom comparison function was provided. if this is the
    case, then this callback function will be used to determine the order of the
    elements in the array, where two array elements, a and b, are passed to the
    callback function and the return value of this function will be used to
    determine the sorting order of the two given elements. there are three cases
    to consider regarding the return value of the callback function, which
    affects the sorting order of a and b:

    1) compareFunction(a, b) > 0 --> sort a after b, e.g. [b, a]
    2) compareFunction(a, b) < 0 --> sort a before b, e.g. [a, b]
    3) compareFunction(a, b) === 0 --> keep original order of a and b

    however, consider the following observations for the second and third cases:

    2) if return value < 0, sort a before b, but we can see that a already comes
    before b in the array (a is this[j] and b is this[j + 1]), so there is
    nothing to be swapped, so we continue to the next loop iteration as we do
    not need to check for this case if we are not going to do anything

    3) if return value === 0, keep original order of a and b, which means that
    there is nothing to be swapped, so we continue to the next loop iteration,
    as we do not need to check for this case if we are not going to do anything
    */
    if (compareFunction !== undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          // if return value > 0, sort a after b
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const temp = this[j]; // store a

            this[j] = this[j + 1]; // store b in @ of a
            this[j + 1] = temp; // store a in @ of b
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
