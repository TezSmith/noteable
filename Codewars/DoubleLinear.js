/* 

Double Linear - A Codewars Challenge

Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

dbl_linear(10) should return 22

*/


function dbl_linear(n) {

  let u = [1], x = 0, y = 0

    for (let i = 0; i < n; i++) {
        let nextX = 2 * u[x] + 1
        let nextY = 3 * u[y] + 1
        if (nextX <= nextY) {
            u.push(nextX)
            x++
            if(nextX == nextY) {
               y++
              }
        } else {
            u.push(nextY)
            y++
        }
    }
    return u[n]


}

dbl_linear(10)
