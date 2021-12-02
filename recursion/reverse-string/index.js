function reverseStringRecursive(start, end, list) {
  if (start >= end) {
    return list;
  }

  // Swap Them!!
  let temp = list[start];
  list[start] = list[end];
  list[end] = temp;

  return reverseStringRecursive(start + 1, end - 1, list);
}

let stringArray = ["h", "e", "l", "l", "o"];
console.log(reverseStringRecursive(0, stringArray.length - 1, stringArray));
