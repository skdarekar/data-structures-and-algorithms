// fibonacci series
function printFibonacci(num){
        let sum = 0;
        for(let i = 0; i <= num; i++){
                sum += i;
                console.log("i:", i, sum);
        }
}

let num = 5;
printFibonacci(num);
