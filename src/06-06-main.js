// 1. Random a number in range of [0, n]
// n = 10
// 0, 1, 5, 10
// Mark.random() --> [0, 1)

function randomNumber(n) {
  if (n <= 0) return -1;

  const random = Math.random() * n;
  return Math.round(random);
}



console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(-1));
console.log(randomNumber(100));

//2. Random a number in range of [a, b]


