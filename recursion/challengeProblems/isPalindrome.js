function isPalindrome(str) {
  function helper(reverseStr, ctr) {
    if (ctr === str.length) return reverseStr;

    ctr++;

    reverseStr = reverseStr.concat(str[str.length - ctr]);

    return helper(reverseStr, ctr);
  }

  const reverseStr = helper("", 0);

  return str === reverseStr;
}
