/**
 * Finds whether a number is a prime number and returns true or false.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
