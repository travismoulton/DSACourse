function flatten(arr) {
  const newArr = [];

  function helper(arr) {
    console.log(arr);
    if (!arr.length) return newArr;

    if (!Array.isArray(arr[0])) {
      newArr.push(arr[0]);
    } else {
      newArr.push(parseArrEl(arr[0]));
    }

    return helper(arr.slice(1));
  }

  function parseArrEl(element) {
    if (Array.isArray(element[0])) return parseArrEl(element[0]);

    return element[0];
  }

  return helper(arr);
}

flatten([1, [2, [3, 4], [[5]]]]);

// [[2, [3, 4], [5]]]

// if what I have is an array inside an array, return that array
// if what I have is an array with a non array element at index 0, return that element
