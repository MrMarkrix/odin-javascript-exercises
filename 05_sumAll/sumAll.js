const sumAll = function(x,y) {
    if (x<0 || y<0 || typeof x !== 'number' || typeof y !== 'number'){    

        return "ERROR";

    } else {
        const low = Math.min(x,y);
        const high = Math.max(x,y);
        let sum = 0;
        for (let i = low; i < high; i++){
            sum +=i;
        }
        return sum+high;
    }
};

// Do not edit below this line
module.exports = sumAll;