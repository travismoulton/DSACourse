function countUniqueValues(arr) {
  let uniqueValueCount = 0;

  if (arr.length === 0) return uniqueValueCount;

  let currentUniqueVal = arr[0];
  uniqueValueCount++;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== currentUniqueVal) {
      uniqueValueCount++;
      currentUniqueVal = arr[i];
    }
  }

  return uniqueValueCount;
}

function countWithPointers(arr) {
  if (arr.length === 0) return 0;

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }

  return left + 1;
}

console.log(countWithPointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
