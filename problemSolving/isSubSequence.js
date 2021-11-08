function isSubsequence(str1, str2) {
  let ptr1 = 0;
  let ptr2 = 0;

  const lowerCaseStr1 = str1.toLowerCase();
  const lowerCaseStr2 = str2.toLowerCase();

  while (ptr2 < str2.length) {
    if (lowerCaseStr1[ptr1] === lowerCaseStr2[ptr2]) {
      ptr1++;
      ptr2++;
    } else {
      ptr2++;
    }

    if (ptr1 === str1.length - 1) return true;
  }

  return false;
}

console.log(isSubsequence("abc", "abracadarba"));

// Put a pointer at the begining of the first word
// put a pointer at the begining of the second word

// Move ptr2 across the second word until finding the matching letter
// When you hit the letter in the second word, move ptr1 forward

// if ptr1 hits the end of the str, return true else return false
