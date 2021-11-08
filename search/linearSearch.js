function linearSearch(arr, searchTerm) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) return i;
  }

  return -1;
}
