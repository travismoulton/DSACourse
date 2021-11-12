function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function myRadixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (let j = 0; j < maxDigits; j++) {
    const buckets = {};
    for (let i = 0; i < arr.length; i++) {
      digit = getDigit(arr[i], k);
      digitAsString = digit.toString();

      buckets[digitAsString]
        ? buckets[digitAsString].push(arr[i])
        : (buckets[digitAsString] = [arr[i]]);
    }

    arr.length = 0;

    for (let key in buckets) {
      arr.push(...buckets[key]);
    }
  }

  return arr;
}

function radixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (let i = 0; i < maxDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    arr.length = 0;
    buckets.forEach((bucket) => arr.push(...bucket));
  }

  return arr;
}

const nums = [234, 3464531243, 44, 134, 1, 2, 4, 346, 12345, 34562351324];

radixSort(nums);

console.log(nums);
