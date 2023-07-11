//...toRemove - represents argument that can take multiple elements
const removeFromArray = function(array, ...toRemove) {

    const arrayFilter = array.filter((element) =>{
        return !toRemove.includes(element);
    })

    return arrayFilter;
};

// Do not edit below this line
module.exports = removeFromArray;
