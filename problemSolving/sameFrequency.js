function sameFrequency(num1, num2) {
  // Turn each number into a string
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const freqCounter = {};

  for (let i = 0; i < str1.length; i++) {
    const digit = str1[i];
    freqCounter[digit] ? freqCounter[digit]++ : (freqCounter[digit] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const digit = str2[i];
    if (freqCounter[digit]) {
      freqCounter[digit]--;
    } else {
      return false;
    }
  }

  return true;
}
