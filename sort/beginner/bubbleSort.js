const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
}

const arr = [3, 7, 5, 3, 6, 98, 11, 20, 0, 33];

bubbleSort(arr);

console.log(arr);
