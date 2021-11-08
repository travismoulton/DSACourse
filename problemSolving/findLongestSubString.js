function findLongestSubstring(str) {
  if (str.length < 2) return str.length;

  let longestSubStr = 1;

  let left = 0;
  let right = 0;
  const letters = {};
  letters[str[left]] = 1;

  while (right < str.length - 1) {
    if (letters[str[right]] > 1) {
      letters[str[left]]--;
      left++;
    } else {
      right++;
      letters[str[right]] ? letters[str[right]]++ : (letters[str[right]] = 1);
    }

    if (letters[str[right]] === 1)
      longestSubStr = Math.max(right - left + 1, longestSubStr);
  }

  return longestSubStr;
}

findLongestSubstring("thisisawesome");

// If there are no repeat letters, move right forward, and store the letter inside the object
// else move left forward
// consecutve letters can be measured in the difference between right and left

// if (letters[str[right]]) {
//   letters[str[right]]++;
// } else {
//   letters[str[right]] = 1;
// }
