function validAnagram(str1, str2) {
  const frequencyCtr = {};

  for (let char of str1) {
    frequencyCtr[char] = frequencyCtr[char] ? frequencyCtr[char] + 1 : 1;
  }

  for (let char of str2) {
    if (!frequencyCtr[char]) {
      return false;
    } else {
      frequencyCtr[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("qwerty", "ytrewq"));
console.log(validAnagram("qwerty", "ytrewqx"));
