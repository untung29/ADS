const palindromeQuestionMark = S => {
  const arrayOfString = S.split("");

  // ? ? -> pass the palindrome, just assign any random letter
  // ? a -> pass the palindrome, just assign the ? with any random letter
  // a b -> not pass the palindrome

  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i] === "?" && arrayOfString[arrayOfString.length - 1 - i] === "?") {
      arrayOfString[i] = "a";
      arrayOfString[arrayOfString.length - 1 - i] = "a";
    } else if (arrayOfString[i] === "?" || arrayOfString[arrayOfString.length - 1 - i] === "?") {
      if (arrayOfString[i] === "?") {
        arrayOfString[i] = arrayOfString[arrayOfString.length - 1 - i];
      } else {
        arrayOfString[arrayOfString.length - 1 - i] = arrayOfString[i];
      }
    }
  }

  return arrayOfString.reverse().join("") === arrayOfString.join("") ? arrayOfString.join("") : "NO";
};
