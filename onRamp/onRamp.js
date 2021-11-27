document.getElementById("test").style.fontWeight = "";

function balancedSum(arr) {
  const reducer = (prev, cur) => prev + cur;

  for (let i = 1; i < arr.length; i++) {
    const left = arr.slice(0, i);
    const right = arr.slice(i + 1);

    if (left.reduce(reducer, 0) === right.reduce(reducer, 0)) return i;
  }
}
