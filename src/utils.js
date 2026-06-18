/**
 * Get predominant array type based on some samples
 *
 * @param arr
 * @param sampleSize
 * @return {string}
 */
function getPredominantType(
  arr,
  sampleSize = Math.max(3, Math.floor(arr.length * 0.01)),
) {
  const sample = arr.slice(0, sampleSize);
  const typeCount = { number: 0, string: 0, other: 0 };

  for (const el of sample) {
    if (typeof el === 'number') {
      typeCount.number++;
    } else if (typeof el === 'string') {
      typeCount.string++;
    } else {
      typeCount.other++;
    }
  }

  let maxType = 'other';
  let maxCount = 0;

  for (const key in typeCount) {
    if (typeCount[key] > maxCount) {
      maxType = key;
      maxCount = typeCount[key];
    }
  }

  return maxType;
}

/**
 * Compute dynamic threshold based on size and predominant array type
 *
 * @param arr
 * @return {number}
 */
function computeDynamicThreshold(arr) {
  const type = getPredominantType(arr);
  const n = arr.length;

  // benchmark based values
  let base;

  switch (type) {
    case 'number':
      base = 0.0001; // for numbers the curve is more gradual
      break;
    case 'string':
      base = 0.0002; // for string the curve is even more gradual
      break;
    default:
      base = 0.00015; // for mixed / other types left average value
  }

  // build curve threshold = a*n^2 + b*n + c, got constants based on tests
  const a = base;
  const b = 0.3;
  const c = -2;
  const min = 5;

  return Math.max(min, Math.floor(a * n * n + b * n + c));
}

/**
 * Comparator for numbers, strings, sparse, mixed
 */
function compareStrings(a, b) {
  let i = 0;
  const len = Math.min(a.length, b.length);

  while (i < len) {
    const diff = a.charCodeAt(i) - b.charCodeAt(i);

    if (diff !== 0) {
      return diff;
    }
    i++;
  }

  return a.length - b.length;
}

function fastComparator(a, b) {
  // handle sparse array
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

  // handle numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  // handle strings
  if (typeof a === 'string' && typeof b === 'string') {
    return compareStrings(a, b);
  }

  // any other types -> cast to string
  return compareStrings(`${a}`, `${b}`);
}

module.exports = {
  computeDynamicThreshold: computeDynamicThreshold,
  fastComparator,
};
