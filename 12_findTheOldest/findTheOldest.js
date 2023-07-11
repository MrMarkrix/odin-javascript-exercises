const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    const oldestPerson = array.reduce((oldest, person) =>{
        const deathYear = person.yearOfDeath || currentYear;
        const age = deathYear - person.yearOfBirth;
        if (age > oldest.age){
            return {name: person.name, age};
        }
        return oldest;
    }, {name: "", age:0});
    return oldestPerson

};

// Do not edit below this line
module.exports = findTheOldest;
