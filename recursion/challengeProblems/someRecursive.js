function someRecursive(arr, callBack) {
  if (!arr.length) return false;

  if (callBack(arr[0])) return true;

  return someRecursive(arr.slice(1), callBack);
}
const isOdd = (num) => num % 2 !== 0;
