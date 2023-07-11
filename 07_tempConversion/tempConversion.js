const convertToCelsius = function(F) {

  const convertedC = (F-32)*5/9;
  if (convertedC === 0){
  return 0
  } else {
    return parseFloat(convertedC.toFixed(1))
  }
};

const convertToFahrenheit = function(C) {

  const convertedH = (C*(9/5))+32;
  if (convertedH === 0){
    return 0
  } else{
  return parseFloat(convertedH.toFixed(1))
  }
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
