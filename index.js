// Helper function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Usage example
  const randomNumber = getRandomNumber(1, 100);
  console.log("Random number:", randomNumber);
  
  console.log("Is", randomNumber, "even?", isEven(randomNumber));
  console.log("Is", randomNumber, "odd?", isOdd(randomNumber));
  
  const factorialNumber = getRandomNumber(1, 10);
  console.log("Factorial of", factorialNumber, "is:", factorial(factorialNumber));