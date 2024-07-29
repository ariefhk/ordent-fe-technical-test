function combineThreeGroupOfStrings(str1, str2, str3) {
  let result = "";

  // Loop through the strings
  for (let i = 0; i < str1.length; i++) {
    // Concatenate the characters from each string and each index
    result += str1[i] + str2[i] + str3[i];
  }
  return result;
}

// Testing the function
const combined = combineThreeGroupOfStrings("aa", "bb", "cc");
console.log(combined); // Output: "abcabc"
