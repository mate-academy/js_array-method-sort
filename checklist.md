1. Implement only `Array.prototype.sort2`. Do NOT override `Array.prototype.sort`.
2. Keep the given scaffold: define `sort2` via `[].__proto__.sort2 = function(compareFunction) { ... }` inside `applyCustomSort` in `src/arrayMethodSort.js`.
3. `sort2` must sort the array in place and return the original array (same reference, not a copy).
4. When `compareFunction` is not provided, compare elements as strings (their default string representation, by character codes). Example: `[3, 12, 2, 11].sort2()` must return `[11, 12, 2, 3]`.
5. When `compareFunction` is provided, use its return value to order elements: negative → first before second, positive → first after second.
6. Do NOT call the built-in `Array.prototype.sort` in your implementation. Write your own sorting algorithm (bubble sort, insertion sort, etc.).
