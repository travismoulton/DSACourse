function averagePair(arr, targetAverage) {
  if (arr.length < 2) return false;

  let i = 0;
  let j = 1;

  const desiredSum = targetAverage * 2;
  const possibleMatches = {};

  while (j < arr.length) {
    if (arr[i] + arr[j] === desiredSum) return true;
    possibleMatches[desiredSum - arr[i]] = true;
    possibleMatches[desiredSum - arr[j]] = true;

    if (possibleMatches[arr[j]] || possibleMatches[arr[i]]) return true;

    j++;
  }

  return false;
}

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

// function averagePair(arr, targetAverage) {
//   if (arr.length < 2) return false;

//   let i = 0;
//   let j = 0;
// }
