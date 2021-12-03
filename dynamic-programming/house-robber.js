/** You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only
 *  constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically
 *  contact the police if two adjacent houses were broken into on the same night.
 *  Given an integer array nums representing the amount of money of each house, 
 *  return the maximum amount of money you can rob tonight without alerting the police.
 * 
 * Input: nums = [1,2,3,1]
   Output: 4
   Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
   Total amount you can rob = 1 + 3 = 4.


    Input: nums = [2,7,9,3,1]
    Output: 12
    Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
    Total amount you can rob = 2 + 9 + 1 = 12.
 */

var rob = function (nums) {
  let maxMoney = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 2; j < nums.length; j = j + 2) {
  //     // Check if there is another adjacent
  //     //   if (j + 2 < nums.length) {
  //     //     if (nums[i] + nums[j] + nums[j + 2] > maxMoney) {
  //     //       maxMoney = nums[i] + nums[j] + nums[j + 2];
  //     //     }
  //     //   } else {
  //     //     if (nums[i] + nums[j] > maxMoney) {
  //     //       maxMoney = nums[i] + nums[j];
  //     //     }
  //     //   }
  //     // if (nums[i] + nums[j] > maxMoney) {
  //     //   maxMoney = nums[i] + nums[j];
  //     // }
  //     // if (j + 2 < nums.length) {
  //     //   for (let k = j + 2; k < nums.length; k++) {
  //     //     if (maxMoney) {
  //     //       maxMoney += nums[k];
  //     //     }
  //     //   }
  //     // }
  //   }
  // }
  // console.log(maxMoney);
  // return maxMoney;
};

rob([1, 2, 3, 1, 3, 3, 3, 3, 3]);
