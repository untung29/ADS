function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good.";
  } else {
    // 1. Using pure string
    // let reversedString = "";
    // for (let i = str.length - 1; i = 0; i--) {
    //   reversedString += str[i];
    // }
    // return reversedString;
    // 2. Using array
    // Push them backwards of the string and convert back to the string
    // let reversedString = [];
    // for (let i = str.length - 1; i >= 0; i--) {
    //   reversedString.push(str[i]);
    // }
    // return reversedString.join("");
    // 3. more simple code
    // Convert the string to an array and reverse it and join back as an array
    // return str.split("").reverse().join("");
    // 4. split code (using an array and reverse it and join back as a string)
    return [...str].reverse().join("");
  }
}

console.log(reverse("untung"));

// Should be
// gnutnU
