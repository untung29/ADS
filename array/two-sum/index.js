var twoSum = function (nums, target) {
  // 1. Brute Force Approach
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 1; j < nums.length; j++) {
  //       console.log(nums[i] + "||" + nums[j]);
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }

  // 2. Two-pass hash table approach
  //   let complimentary = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     let calculation = target - nums[i];
  //     complimentary[calculation] = i;
  //   }

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] in complimentary && complimentary[nums[i]] !== i) {
  //       return [i, complimentary[nums[i]]];
  //     }
  //   }

  // 3. One-pass hash table approach
  // The result index might not be in order.
  let complimentary = {};
  for (let i = 0; i < nums.length; i++) {
    let calculation = target - nums[i];
    if (nums[i] in complimentary) {
      return [i, complimentary[nums[i]]];
    } else {
      complimentary[calculation] = i;
    }
  }

  return [];
};
