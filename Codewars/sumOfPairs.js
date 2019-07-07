/*

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

 */

l1 = [1, 4, 8, 7, 3, 15]
l2 = [1, -2, 3, 0, -6, 1]
l3 = [20, -13, 40]
l4 = [1, 2, 3, 4, 1, 0]
l5 = [10, 5, 2, 3, 7, 5]
l6 = [4, -2, 3, 3, 4]
l7 = [0, 2, 0]
l8 = [5, 9, 13, -3]


//The Solution:

const sum_pairs=function(ints, s){
  let seen = {}
  for (let i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
    console.log("this is seen: ", seen)
  }
}

sum_pairs([10,5,2,3,7,5], 10) // [3,7]

// My attempt: couldn't solve last test case. 
// const sum_pairs = (ints, s) => {
//   let i = 0
//   pairs = []
  
//   while (i < ints.length) {
//     for (let j =1; j < ints.length; j++) {
//       if (ints[i] + ints[j] === s && pairs.includes(ints[i]) === false) {
//         pairs.push(ints[i], ints[j])
//       } 
//     }
//     i++
//   }

//   if (pairs.length === 0) return undefined

//   return pairs
// }

// sum_pairs(l1,8)
// sum_pairs(l2, -6)
// sum_pairs(l6, 8)
// sum_pairs([10,5,2,3,7,5], 10) // [3,7]

 


