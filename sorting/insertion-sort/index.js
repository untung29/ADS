// Algorithm
// Have 2 nested loops

const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      // Move the element to the right of it
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = key;
  }
};

insertionSort([4, 3, 2, 1]);
