function isPalindrome(x) {
  if (x < 0) return false;

  const str = x.toString();
  const arr = str.split("");

  return arr.join("") === arr.reverse().join("");
}

console.log(isPalindrome(10));
