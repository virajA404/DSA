const isPrimeFactorLargerThanFive = (num) => {
    for(let i = 1; i <= 5; i++){
        let rem = num % i;
        let ans = num / i;
        if(rem > 0){
            return "hello" + false;
        }else{
            for(let j = i+1; j <= 5; j++){
                let newAns = ans / j;
                let rem2 = ans % j;
                if(rem == 0){
                    if( newAns > 5){
                        return "hi " + false;
                    }else{
                        return true;
                    }
                }
            }
        }
    }
}

console.log(isPrimeFactorLargerThanFive(10));