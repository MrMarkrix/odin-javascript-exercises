const fibonacci = function(num) {
    const stringNum = parseInt(num);

    if (stringNum < 0){
        return "OOPS";
    } if (stringNum === 0){
        return 0;
    } if (stringNum === 1){
        return 1
    } if (stringNum === 2){
        return 1
    } return fibonacci(stringNum - 1) + fibonacci (stringNum - 2);

};

// Do not edit below this line
module.exports = fibonacci;


console.log(fibonacci(-1))
console.log(fibonacci(1))
console.log(fibonacci(0))
console.log(fibonacci("1"))

