const morseArr = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

function uniqueMorseRepresentations(words) {
  const transformations = words.map((word) => {
    const letters = word.split("");

    return letters.map((letter) => morseArr[letter]).join("");
  });

  return Array.from(new Set(transformations)).length;
}

console.log(
  uniqueMorseRepresentations(["rwjje", "aittjje", "auyyn", "lqtktn", "lmjwn"])
);
