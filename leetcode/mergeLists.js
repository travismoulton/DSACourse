function mergeLists(list1, list2) {
  let i = 0;
  let j = 0;

  const newList = [];

  while (i < list1.length && j < list2.length) {
    // console.log(i, j);
    console.log(list1[i], list2[j]);
    if (list1[i] < list2[j]) {
      newList.push(list1[i]);
      i++;
    } else {
      newList.push(list2[j]);
      j++;
    }
  }

  if (i < list1.length) {
    newList.push(...list1.splice(i));
  } else if (j < list2.length) {
    newList.push(...list2.splice(j));
  }

  return newList;
}

console.log(mergeLists([2, 2, 4], [1, 4, 5]));
