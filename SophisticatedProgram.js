/* 
   FILENAME: SophisticatedProgram.js
   DESCRIPTION: This program demonstrates a complex and elaborate algorithm for finding prime numbers using the Sieve of Eratosthenes method.
*/

function sieveOfEratosthenes(limit) {
  // Step 1: Set up an array with all numbers from 2 to the given limit
  let primes = Array.from({ length: limit - 1 }, (_, i) => i + 2);

  // Step 2: Perform the sieve operation to find primes
  for (let i = 0; i < Math.sqrt(limit); i++) {
    if (primes[i]) {
      let currentNum = primes[i];
      for (let j = Math.pow(currentNum, 2) - 2; j < limit - 1; j += currentNum) {
        primes[j] = null;
      }
    }
  }

  // Step 3: Filter out null values and return the resulting prime numbers
  return primes.filter((num) => num);
}

// Generate prime numbers using the sieve algorithm for numbers up to 1000
const primeNumbers = sieveOfEratosthenes(1000);

// Display the resulting prime numbers
console.log("Prime Numbers up to 1000: ", primeNumbers);

// Example usage: Check if a number is prime
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Check if a specific number is prime
const numToCheck = 67;
console.log(`Is ${numToCheck} Prime?`, isPrime(numToCheck));

// Calculate the sum of the prime numbers up to 1000
const sumOfPrimes = primeNumbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Prime Numbers up to 1000: ", sumOfPrimes);

// Calculate the average of the prime numbers up to 1000
const averageOfPrimes = sumOfPrimes / primeNumbers.length;
console.log("Average of Prime Numbers up to 1000: ", averageOfPrimes);

// Generate and display prime numbers up to a user-defined limit
const userLimit = 100;
const userPrimes = sieveOfEratosthenes(userLimit);
console.log(`Prime Numbers up to ${userLimit}: `, userPrimes);

// Example usage: Generate prime numbers between two user-defined limits
const lowerLimit = 200;
const upperLimit = 300;
const rangePrimes = sieveOfEratosthenes(upperLimit).filter(
  (num) => num >= lowerLimit
);
console.log(
  `Prime Numbers between ${lowerLimit} and ${upperLimit}: `,
  rangePrimes
);

// ... More complex code can be added here as needed ...

// End of program
