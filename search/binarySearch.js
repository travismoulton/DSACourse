function binarySearch(arr, searchTerm) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);

    if (arr[middle] === searchTerm) return middle;

    if (arr[middle] > searchTerm) right = middle - 1;
    if (arr[middle] < searchTerm) left = middle + 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
