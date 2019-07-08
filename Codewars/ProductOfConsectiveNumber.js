/*

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

  F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

  F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

  [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

 */


function productFib(prod){
  let a = 0;
  let b = 1;
  for (let i = 0; i < prod; i++) {
    if (a * b > prod) return [a, b, false];
    if (a * b === prod) return [a, b, true];
    [a, b] = [b, a + b];
  }
}

productFib(10)


