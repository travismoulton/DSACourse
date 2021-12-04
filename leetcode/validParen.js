function isValid(s) {
  const dict = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const reverseDict = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) stack.push(s[i]);
    else {
      if (stack.pop() !== reverseDict[s[i]]) return false;
    }
  }

  return !stack.length;
}

console.log(isValid("(]"));

// iterate through the array. If it is a valid key, put it in the stack
// If it is not a key, check if
