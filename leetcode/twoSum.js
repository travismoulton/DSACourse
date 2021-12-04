function mergeArrays(arr1, arr2) {
  const newArr = [];
  let i,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    newArr.push(...arr1.slice(i));
  } else if (j < arr2.length) {
    newArr.push(...arr2.slice(j));
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const arrMidPoint = Math.floor(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, arrMidPoint));
  const rightArr = mergeSort(arr.slice(arrMidPoint));

  return mergeArrays(leftArr, rightArr);
}

function twoSum(nums, target) {
  const possibleSolutions = {};

  let solution;

  nums.forEach((num, index) => {
    if (num in possibleSolutions)
      solution = [index, nums.indexOf(target - num)];

    possibleSolutions[target - num] = target - num;
  });

  return solution;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
