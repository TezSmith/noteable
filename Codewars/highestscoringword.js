let abc = "abcdefghijklmnopqrstuvwxyz"
let test = "man i need a taxi up to ubud"
let test2 = "what time are we climbing up the volcano"
let test3 = "take me to semynak"

let guide = {}
let nums = []

function high(x){
  // First I create a dictionary
  createGuide(abc)
  
  // I split the string into an array
  x = x.split(" ")

  // For each word in the array, I split that word into chracters. Then I find the value of that character in the dictionary. After that, I push all the values of that word into an array. Then I push the array of values into a bigger array that holds the value for each word.

  for (let i = 0; i < x.length; i++) {
    let word = x[i].split("")
    let amt = []
    word.map((w) => amt.push(guide[w]))
    nums.push(amt)
  }

 // I find the sum of each word
  let sums = nums.map(n => n.reduce((n1,n2) => n1 + n2))

// I find the largest number of all the words
  let ans = Math.max(...sums)

// I find the index of the largest number
  let idx = sums.indexOf(ans)

// Finally, I use that index to find the corresponding word in the original word array
  return x[idx]
  
}

function createGuide(str) {
  str = str.split('')
  for (let i = 0; i <= str.length -1; i++) {
      guide[str[i]] = i+1
  }
}

high(test3)

/*

Better Solution

let highest = 0, current = 0, winner = '';
  
  let xArr = x
  .toLowerCase()
  .split(` `)
  .map(x => x.split(``));
  
  let alphabet = '_abcdefghijklmnopqrstuvwxyz'
  .split(``)
  .reduce((key,letter, i) => {
    key[letter] = i;
    return key;
  },{});

  console.log(xArr,alphabet);
  
  for(let i = 0; i < xArr.length; i++){
    let word = xArr[i];
    for(let j = 0; j < word.length; j++){
      let letter = word[j];
      if(letter in alphabet){
        current += alphabet[letter];
        //console.log(current,xArr[i]);
      }
    }
    if(current > highest){
          highest = current;
          winner = word;
    }
    current = 0;
  }
  
  return winner.toString().replace(/,/gi,``);


 */