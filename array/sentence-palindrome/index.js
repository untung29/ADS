/**
 * Write a program to check if a sentence is a palindrome or not. You can ignore white spaces and other characters to consider sentences as palindrome.
 */

function isSentencePalindrome(sentence) {
  let newSentence = sentence.replaceAll(" ", "");
  newSentence = newSentence.replaceAll(/[.,@'!:]/g, "");
  newSentence = newSentence.toLowerCase();
  console.log(newSentence);

  // Compare left and right until left === right
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i] !== newSentence[newSentence.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// // To check sentence is palindrome or not
// function sentencePalindrome(str) {
//   let l = 0;
//   let h = str.length - 1;

//   // Lowercase string
//   str = str.toLowerCase();

//   // Compares character until they are equal
//   while (l <= h) {
//     let getAtl = str[l];
//     let getAth = str[h];

//     // If there is another symbol in left
//     // of sentence
//     if (!(getAtl >= "a" && getAtl <= "z")) l++;
//     // If there is another symbol in right
//     // of sentence
//     else if (!(getAth >= "a" && getAth <= "z")) h--; //     // If characters are equal
//     else if (getAtl == getAth) {
//       l++;
//       h--;
//     }

//     // If characters are not equal then
//     // sentence is not palindrome
//     else return false;
//   }

//   // Returns true if sentence is palindrome
//   return true;
// }

console.log(isSentencePalindrome("A man, a plan, a canal: Panama."));
