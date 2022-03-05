function squareSum(numbers){
    return numbers.map(square).reduce(sum);
  }
  
  function square(number) {
    return number * number;
  }
  
  function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }