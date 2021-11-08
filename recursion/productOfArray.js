function productOfArray(nums) {
  let result = 1;

  function multiplier(nums, result) {
    if (!nums.length) return result;

    result = result * nums[0];

    return multiplier(nums.slice(1), result);
  }

  return multiplier(nums, result);
}

console.log(productOfArray([1, 2, 3, 4, 5, 6, 7]));

function optimalSolution(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * optimalSolution(arr.slice(1));
}

// multiply first 2 elements of the array, return that value times the next element

optimalSolution([1, 2, 3, 4]);

// 1 * fn([2,3,4])
// 2 * fn([3,4])
// 3 * fn([4])
// 4 * fn([0])

// 4 * 1
