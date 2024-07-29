function acronymGenerator(name) {
  // Split the name into words by spaces
  const words = name.trim().split(" ");
  let acronym = "";

  words.forEach((word) => {
    // Check if the word is "von"
    if (word.toLowerCase() === "von") {
      acronym += "v";
    } else {
      // Split the word by hyphens
      const parts = word.split("-");
      // Get the first character of each part and capitalize it
      parts.forEach((part) => {
        acronym += part[0].toUpperCase();
      });
    }
  });

  return acronym;
}

// Testing the function
console.log(acronymGenerator("Thomas Meyer")); // TM
console.log(acronymGenerator("martin schmidt")); // MS
console.log(acronymGenerator("Jan-Erich Schmidt")); // JES
console.log(acronymGenerator("Jan Erich Mueller")); // JEM
console.log(acronymGenerator("Paul Meyer-Schmidt")); // PMS
console.log(acronymGenerator("Paul von Lahnstein")); // PvL
console.log(acronymGenerator("Martin von Lahnstein-Meyer")); // MvLM
