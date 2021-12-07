// 문제 링크 : https://www.acmicpc.net/problem/2747
const readline = require('readline');
const std = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
std
  .on('line', (line) => {
    console.log(Fibonacci(Number(line)));

    std.close();
  })
  .on('close', () => process.exit());

function Fibonacci(number) {
  if (number === 1 || number === 0) return number;

  return Fibonacci(number - 1) + Fibonacci(number - 2);
}

// console.log(Fibonacci(2));
