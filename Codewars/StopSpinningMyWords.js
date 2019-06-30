/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present. */

sen1 = "Hey fellow warriors"

function stopSpinning(str) {
  // I'll split a string of words into an array
  // Next I'll iterate through each word, check if it's length is 5 letters or more. 
  // If it is, I'll reverse the word and push it into a new array
  // Otherwise, I'll leave the word as it is 


  //Refactored solution
  strArr = str.split(" ")
  
  return strArr.map(s => s.length >= 5 ? s.split("").reverse().join("") : s ).join(" ")
  
}

stopSpinning(sen1)

 /* 
 
 strArr.forEach(s => {
    if (s.length >= 5) {  
      s = s.split("")
      newString.push(s.reverse().join(""))
    } else {
      newString.push(s)
    }
  })
  
  return newString.join(" ") */

