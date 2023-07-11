const palindromes = function (string) {
    const noSpace = string.replace(/[^\w\s]/g, "").replace(/\s/g, "").toLowerCase();
    const reversed = noSpace.split("").reverse().join("");

    if (noSpace === reversed){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
