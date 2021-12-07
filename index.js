const colors = require('colors');

const [num1, num2]  = process.argv.slice(2);

function makeArr(a, b){
    let arr = [];
    while(a <= b){
        arr.push(a++);
    }
    //console.log(arr);
    return arr;
}

function isPrime(num) {
    if(num <= 1){
        return false;
    }else{
        for (let j = 2; j < num; j++){
            if(num % j === 0){
                return false;
            }
        }
    }
    return true;
}

function primeCheck(array){
    let simpleArr = [];

    for(let i = 0; i < array.length; i++){
        if(isPrime(array[i])){
            simpleArr.push(array[i]);
        }
    }
    return simpleArr;
}

function showPrimeNum(array){
    if(array.length === 0){
        console.log(colors.red('no prime numbers in the array'));
    }else{
        let color = [colors.green, colors.yellow, colors.red];
        for(let i = 0; i < array.length; i++){
            if(i % 3 === 0 ){
                console.log(color[0](array[i]));
            }else if(i % 3 === 1){
                console.log(color[1](array[i]));
            }else{
                console.log(color[2](array[i]));
            }
        }
    }

}

function showSimpleNumbers(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        console.log('Incorrect value');
    }else{
        showPrimeNum(
            primeCheck(
                makeArr(num1, num2)
            )
        );
    }
}

showSimpleNumbers(num1, num2);
