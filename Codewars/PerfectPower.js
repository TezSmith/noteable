/* 

A perfect power is a classification of positive integers:

In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

Your task is to check whether a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

*/

var isPP = function(n){
  // I could create a for loop that loops through an array of integers from 1 - 9, I could then test to see how many of those pairs equal the number that was given.

  let arr = []
  for (let a = 0; a < n; a++) {
    arr.push(a)
  }
  // Issue, what if there are numbers larger than 9?


  let i = 0 

  possible = []
  
  while (i < arr.length) {
     for (let j = arr.length; j > 0; j-- ) {
        if( Math.pow(arr[i], arr[j]) === n ){
          possible.push(arr[i], arr[j])
        }
     }
     i++
   
  }

  console.log(possible)
  if (possible.length !== 0 ) {
    return possible
  } else {
    return null
  }

}

isPP(100)