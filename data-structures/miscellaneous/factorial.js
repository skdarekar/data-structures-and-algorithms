// Find factorial of number using recursion
function factorial(num){
    if(num == 1) return 1;

    return num * factorial(num - 1);
}

let num = 7;
const result = factorial(num);
console.log(`Factorial of ${num} is:`, result);