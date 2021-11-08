function stringifyNumbers(obj, newObj = {}) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = [...obj[key]];

      for (let i = 0; i < newObj[key].length; i++) {
        if (typeof newObj[key][i] === "number") {
          newObj[key][i] = newObj[key][i].toString();
        }
        if (typeof obj[key][i] === "object")
          newObj[key][i] = stringifyNumbers(newObj[key][i]);
      }
    } else if (typeof obj[key] === "object") {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  anotherTest: [
    1,
    "string",
    {
      number: 2,
    },
  ],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
// stringifyNumbers(obj);
