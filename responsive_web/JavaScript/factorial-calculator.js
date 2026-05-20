let num = 5;

function factorialCalculator(num) {
    let result = num;
    for(let i = num - 1; i > 1; i--){
      
        result = result * i;
    }
    return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);