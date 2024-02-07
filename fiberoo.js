function fib() {
  let fibonacciNumbers = [0, 1];


  for (let i = 2; i < 50; i++) {
    let nextNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    fibonacciNumbers.push(nextNumber);
  }

  return fibonacciNumbers;
}

let fibonacciSequence = fib();
console.log(fib());
