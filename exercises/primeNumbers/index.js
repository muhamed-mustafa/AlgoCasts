// A prime number is a whole number greater than 1 with only two factors – themselves and 1.

function generatePrimes(numberOfPrimes) {
  let primeNumbers = [];
  let currentNumber = 2;
  while (primeNumbers.length < numberOfPrimes) {
    if (isPrime(currentNumber)) {
      primeNumbers.push(currentNumber);
    }
    currentNumber++;
  }

  return primeNumbers;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(generatePrimes(5));
console.log(generatePrimes(12));
console.log(generatePrimes(15));

