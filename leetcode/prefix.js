function longestCommonPrefix(strs) {
  const prefix = [];
  const currentChar = [];
  let i = 0;

  const shortestStr = strs.reduce((a, b) =>
    a.length <= b.length ? a.length : b.length
  );

  while (i < shortestStr) {
    strs.forEach((str) => {
      currentChar.push(str[i]);
    });

    const chars = Array.from(new Set(currentChar));
    currentChar.length = 0;

    if (chars.length === 1) {
      prefix.push(chars[0]);
    } else {
      return prefix.join("");
    }

    i++;
  }

  return prefix.join("");
}

const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));

// Find the shortest str length <- Maybe?
// Start a loop at the begining of each str
// If they share the same letter, add it to the result and move the next character
// Repeat until finished.
