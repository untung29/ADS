// Algorithm:
// 1. A variable that keeps track of the lowest/highest number
// 2. Compare it each time and if greater than the variable, then set the variable to that new highest/lowest number
// 3. At the end, put the number at the first loop
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    let temp = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

console.log(selectionSort([4, 3, 2, 1]));
