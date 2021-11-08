function reverse(str) {
  function helper(reverseStr, ctr) {
    if (ctr === str.length) return reverseStr;

    ctr++;

    reverseStr = reverseStr.concat(str[str.length - ctr]);

    return helper(reverseStr, ctr);
  }

  return helper("", 0);
}

console.log(reverse("awesome"));
