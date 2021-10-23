const firstRecurringCharacter = newArray => {
  // Time Complexity: O(n^2)
  // Space Complexity: O(1)
  // Approach: Compare the index
  // First Brute Force Approach
  //   let currentNumber = 0;
  //   let index = 0;
  //   for (let i = 0; i < newArray.length; i++) {
  //     currentNumber = newArray[i];
  //     for (let j = i + 1; j < newArray.length; j++) {
  //       if (currentNumber === newArray[j]) {
  // Index = 0 means that the index is not occupied yet
  //         if (index !== 0) {
  // Check if j less than index, means that it recurs first, then store it as a new index
  //           if (j < index) {
  //             index = j;
  //           }
  //         } else {
  // If not occupied then we want to directly store it
  //           index = j;
  //         }
  //       }
  //     }
  //   }
  //   if (index === 0) {
  //     return undefined;
  //   } else {
  //     return newArray[index];
  //   }
  // Second Approach using Hash Map
  // Approach: We want to store an object, the key would be the number, and the value would be the index, something like this:
  // {2: [0,3], 1: [1,2], 3[4]}
  // After we store something like that, we want to just compare the value with the number of array elements greater than one
  // Because greater than one indicates that it recurring
  // Then compare it with their second elements, if the second elements is less than the previous one, then it recurs first.
  // Time Complexity: O(n) worst case
  // Space Complexity: O(n) because using object
  //   let obj = {};
  //   for (let i = 0; i < newArray.length; i++) {
  //     // {2: [0,3], 1: [1,2], 3[4]}
  //     if (!obj[newArray[i]]) {
  //       obj[newArray[i]] = [];
  //     }
  //     obj[newArray[i]].push(i);
  //   }
  //   // Look up to the first recurring element
  //   let index = 0;
  //   for (const key in obj) {
  //     if (obj[key].length > 1) {
  //       if (index === 0) {
  //         index = obj[key][1];
  //       } else {
  //         if (obj[key][1] < index) {
  //           index = obj[key][1];
  //         }
  //       }
  //     }
  //   }
  //   if (index === 0) {
  //     return undefined;
  //   }
  //   return newArray[index];

  // 3. Third Approach (One-pass hash table)
  // It keeps going until it does not find any undefined
  // Time complexity: O(n) 
  // Space Complexity:  O(n)
  let map = {};
  for (let i = 0; i < newArray.length; i++) {
    // If it is not undefined, that means the element recurs before then this will indicate the first character to be recurring
    if (map[newArray[i]] !== undefined) {
      return newArray[i];
    } else {
      // If undefined means that the element is not stored before (then store the index to the specific value)
      map[newArray[i]] = i;
    }
  }

  return undefined;
};

// It should return 3
const newArray = [3, 1, 5, 2, 3];

console.log(firstRecurringCharacter(newArray));
