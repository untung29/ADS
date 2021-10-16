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
    // let reversedString = [];
    // for (let i = str.length - 1; i >= 0; i--) {
    //   reversedString.push(str[i]);
    // }
    // return reversedString.join("");
    // 3. more simple code
    // return str.split("").reverse().join("");
    // 4. split code
    return [...str].reverse().join("");
  }
}

console.log(reverse("untung"));

// Should be
// gnutnU
