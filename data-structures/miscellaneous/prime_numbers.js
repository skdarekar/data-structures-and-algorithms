// Find prime number upto given number
function isPrime(number){
        // console.log(number);
        let i = 2, prime = true;
        while(i <= Math.ceil(number/2)){
                if(number % i === 0){
                        prime = false;
                        break;
                }
                i++;
        }
        if(prime)
                console.log(number + " is prime number");
        else
                console.log(number + " is not prime number");
}

let num = 13;
isPrime(num);
