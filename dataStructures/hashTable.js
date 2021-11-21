function badHash(key, arrLength) {
  let total = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total += (total + value) % arrLength;
  }

  return total;
}

function hash(key, arrayLen) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total += (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const hash = this._hash(key);
    console.log(hash);

    if (Array.isArray(this.keyMap[hash])) {
      this.keyMap[hash].push([key, value]);
    } else {
      this.keyMap[hash] = [[key, value]];
    }
  }

  // This get function as written doesn't work with the given set function
  // The set function would need to check if the key already exist and prevent duplicates
  myGet(key) {
    const hash = this._hash(key);
    if (!this.keyMap[hash]) return undefined;

    if (this.keyMap[hash].length === 1 && this.keyMap[hash][0][0] === key)
      return this.keyMap[hash][0][1];

    const tableIndex = this.keyMap[hash];

    const keyValPair = tableIndex.filter((arr) => arr[0] === key);

    return keyValPair.length ? keyValPair[0][1] : undefined;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  getKeys() {
    const keys = [];

    this.keyMap.forEach((index) => {
      index && index.forEach((keyValPair) => keys.push(keyValPair[0]));
    });

    return keys;
  }

  getKeysWithMap() {
    return this.keyMap
      .map((index) => index.map((keyValPair) => keyValPair[0])[0])
      .filter((arr) => arr.length);
  }

  getValues() {
    const values = [];

    this.keyMap.forEach((index) => {
      index && index.forEach((keyValPair) => values.push(keyValPair[1]));
    });

    return values;
  }

  getValuesWithMap() {
    return this.keyMap
      .map((index) => index.map((keyValPair) => keyValPair[0])[1])
      .filter((arr) => arr.length);
  }

  getUniqueValues() {
    const allValues = [];

    this.keyMap.forEach((index) => {
      index && index.forEach((keyValPair) => allValues.push(keyValPair[1]));
    });

    const uniqueValues = Array.from(new Set(allValues));

    return uniqueValues;
  }
}

const table = new HashTable();
table.set("key", "value");
table.set("fire", "smoke");
table.set("travis", "kelley");
table.set("french", "fries");

table.set("anotherKey", "anotherVale");
console.log(table.getKeysWithMap());
