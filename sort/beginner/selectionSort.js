const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) minimumIndex = j;
    }

    if (minimumIndex !== i) swap(arr, i, minimumIndex);
  }
}

const arr = [10, 9, 1, 7, 6, 5, 4, 1, 2, 3];

selectionSort(arr);

console.log(arr);
