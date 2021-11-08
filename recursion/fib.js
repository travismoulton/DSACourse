// My solution
function fib(num) {
  function helper(prevNum, currentNum, ctr) {
    if (ctr === num) return currentNum;

    currentNum = currentNum + prevNum;

    ctr++;

    return helper(currentNum - prevNum, currentNum, ctr);
  }

  return helper(1, 1, 2);
}

console.log(fib(5));

// optimal
function optimalFib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// start with ctr at 3, and the num is 2

// fib(5)

// return fib(4) + fib(3)
// return (fib(3) + fib(2)) + (fib(2) + fib(1))
// return ((fib(2) + fib(1) )+ 1) + (1 + 1)
// return (((1 +1) + 1) + 2)
