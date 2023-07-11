const reverseString = function(stringText) {
    const splitString = stringText.split("");
    //Creates a array from the string
    const reversArray = splitString.reverse();
    //Reverses the array
    const arrayJoin = reversArray.join("");

    return arrayJoin;
};

// Do not edit below this line
module.exports = reverseString;
