/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. */


let arr = [false,1,0,1,2,0,1,3,"a"]

let moveZeros = (arr) => {

  let reworked = []
  
  arr.forEach((num, i) => {
    if (num === 0) {
      let x = arr.indexOf(num)
      let zero = arr.splice(x,1)
      reworked = arr
      reworked.push(...zero)
    } 
  })
  
  return reworked

}


moveZeros(arr)

//Optimized 

// let moveZeros = (arr) => {
//   return arr.filter(x => x !== 0).concat(arr.filter(x =>  x === 0));
// }