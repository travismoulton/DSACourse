function minSubArrayLen(arr, int) {
  if (arr[0] > int) return 1;

  let shortestArrayLength = Infinity;
  let subArrayLength = 1;
  let tempSum = arr[0];
  let left = 0;
  let right = 0;

  while (right < arr.length && left < arr.length) {
    if (int > tempSum) {
      right++;
      subArrayLength++;
      tempSum += arr[right];
    } else {
      shortestArrayLength = Math.min(shortestArrayLength, subArrayLength);
      tempSum -= arr[left];
      left++;
      subArrayLength--;
    }
  }

  return shortestArrayLength === Infinity ? 0 : shortestArrayLength;
}

minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);

// Loop through the array adding numbers together until they are greater than int
// store that in temp sum
// move the left side of the window forward, change tempsum
// if tempsum is less than int, move the right side forward
// continue sliding forward until tempSum is greater than int
// slide the left side forward until tempSum is smaller than int
// track subArray length by leftside - right side
