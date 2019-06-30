/* Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:

Ex:
({})
[[]()]
[{()}]

*/

let pairs = {
     "(":")",
     "[":"]",
     "{":"}"
   }

function groupCheck(str){
   // First I split the string into an array
   // Then I'll iterate through the array to check if each symbol has it's pair.
   // 1st parameter, each string array must be even, because pairs come in two.
   // I may create a hash table to compare & evaluate key value pairs 

   if (str.length % 2 !== 0) return false;

   let stack = []

   for (let i = 0; i < str.length; i++) {
     // if the match of the arr index is found return true
      let firstHalf = str[i]

      if (firstHalf in pairs) {
        stack.push(firstHalf)
      } else {
        let secondHalf = stack.pop()
        if (firstHalf !== pairs[secondHalf]) {
          return false
        }
      }

   }
  
  return true
}


groupCheck("[{]")