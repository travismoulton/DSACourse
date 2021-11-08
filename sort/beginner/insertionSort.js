const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];

    let j = i - 1;

    for (j; j >= 0; j--) {
      if (arr[j] > curVal) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = curVal;
  }
}

const arr = [2, 3, 7, 9, 1, 0];
insertionSort(arr);

console.log(arr);
