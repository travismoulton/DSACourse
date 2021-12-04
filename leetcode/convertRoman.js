function romanToInt(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  const checkValues = ["I", "X", "C"];

  const romans = s.split("");

  let total = 0;

  for (let i = 0; i < romans.length; i++) {
    if (checkValues.includes(romans[i])) {
      const currentRoman = romans[i];
      const nextRoman = romans[i + 1];

      if (values[currentRoman + nextRoman]) {
        total += values[currentRoman + nextRoman];
        i++;
      } else {
        total += values[romans[i]];
      }
    } else {
      total += values[romans[i]];
    }
  }

  return total;
}

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MCMXCIV"));

// Set up a total value
// Split the roman numeral into an array of individual characters
// For each character in the array, check if it is an I, an X, or a C
// If it is, check it with the next value in the array
// If that 2 characther string is inside values, use the corresponding value
// If it is not, add the total of each individual character
