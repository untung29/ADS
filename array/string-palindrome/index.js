/** ALGORITHM
 * Assumption: The word is always lowercase
 * 1. Convert the string to be an array O(n)
 * 2. reverse() O(n)
 * 3. word === reverse, true = palindrome, false = is not the palindrome
 *
 */

function isPalindrome(word) {
  // 1. First Way
  if (word.length === 1) {
    return true;
  }
  //   const newWordArray = word.split("");
  //   const reversedWordArray = newWordArray.reverse();
  //   const reversedWord = reversedWordArray.join("");
  //   return word === reversedWord;

  // 2. Second way
  const reversedWord = [...word].reverse().join("");
  return word === reversedWord;
}

console.log(isPalindrome("tenet"));
