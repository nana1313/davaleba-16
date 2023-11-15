const numbers = [32, 33, 16, 40];


function checkeven(number) {
  return number.filter((number) => number % 2 == 0);
}


console.log(checkeven(numbers));