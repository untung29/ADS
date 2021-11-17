// [99, 44, 6,2,1,5,63,87,283,4,0]
// [44,9]

// Algorithm
// 1. Have a track on the left and right
// 2. If the right is greater than the left, then swap;
// 3. Left === Right

function bubbleSort(array) {
  let left = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    let swapped = true;
    if (swapped) {
      counter++;
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          left = array[j + 1];
          array[j + 1] = array[j];
          array[j] = left;
          swapped = true;
        } else {
          swapped = false;
        }
      }
    }
  }

  return array;
}

bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
