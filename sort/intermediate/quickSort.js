const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

function pivotHelper(arr, start, end) {
  let pivotCtr = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      pivotCtr++;
      swap(arr, i, pivotCtr);
    }
  }

  swap(arr, start, pivotCtr);

  return pivotCtr;
}

const arr = [4, 8, 7, 9, 1, 34, 66, 2, 9, 4, 1];

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  let pivotIndex = pivotHelper(arr, start, end);

  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

quickSort(arr);

console.log(arr);
