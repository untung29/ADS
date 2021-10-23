const mergeSortedArrays = (firstArray, secondArray) => {
  const mergedArray = [];
  let array1Item = firstArray[0];
  let array2Item = secondArray[0];

  let i = 1;
  let j = 1;

  // Check Input
  if (firstArray.length === 0) {
    return secondArray;
  }

  if (secondArray.length === 0) {
    return firstArray;
  }

  // Why undefined?
  // ** At some point the element would be undefined because it is out of range **
  // Undefined means that the array is already finished and we will add the rest to the mergedArray

  while (array1Item !== undefined || array2Item !== undefined) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = firstArray[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = secondArray[j];
      j++;
    }
  }

  return mergedArray;
};

mergeSortedArrays([0, 3, 4, 31], [0, 3, 5]);
