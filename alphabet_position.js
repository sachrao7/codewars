function alphabetPosition(text) {
    // Create an object to store alphabet letters and their positions

  const alphabetObject = {};

  // Fill the object with alphabet letters and their positions
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i); // Lowercase letters a-z
    alphabetObject[letter] = i + 1;
  }

  // Display the resulting object
  console.log(alphabetObject);
  
  result = ""
  
  for (let i =0; i<text.length; i++) {
    console.log(text[i])
    if (alphabetObject[text[i].toLowerCase()]) {
      result += alphabetObject[text[i].toLowerCase()] + " "
    }
  }

  return result.substring(0,result.length-1)
  
}
