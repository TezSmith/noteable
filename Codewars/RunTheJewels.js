/*

A code challenge problem: Say we have two gem collections: jewels & stones. Every jewel is a stone, but not every stone is a jewel. Write a function that compares the two gem collections and returns only the jewels.

 */

// My Solution

 function runTheJewels() {
  let col1 = { "jewels" : 'aA'}
  let col2 = { "stones" : 'aAABb'}

  let jewels = col1["jewels"].split("")
  let stones = col2["stones"].split("")
  let combo = []

  let i = 0
  while (i < stones.length) {
    for (let j = 0; j < jewels.length; j++ ) {
      if (stones[i] === jewels[j]) {
        combo.push(stones[i])
      }
    }
    i++
  }

 // I interpreted this problem to mean only return once instance of the gems as they appear. So I only returned the combo
 
 // However if I wanted to change it to have ALL the jewels, I would concat the original jewels string to the combo.
 jewels = jewels.concat(combo).join("")

 return jewels 

} 

// Another solution with simplified space complexity

function runTheJewels() {
  let col1 = { "jewels": 'aA' }
  let col2 = { "stones": 'aAABb' }

  let jewels = col1["jewels"]
  let stones = col2["stones"]

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      // Returns all the jewels for both collection in one statement
      jewels = jewels.concat(stones[i])
    }
  }
  return jewels

}

runTheJewels()