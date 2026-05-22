function isPrimeNumber(num){
    let isPrime = true;
    if(num <= 1){
        isPrime = false;
    } else {
        for(let i = 2; i * i <= num; i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

function sumPrimes(num){
    let sum = 0;
    if(num <= 1){
        return 0;
    }
    for(let i = 0; i <= num; i++){
        if(isPrimeNumber(i) && i <= num){
            sum += i;
        }
    }
    return sum;
}