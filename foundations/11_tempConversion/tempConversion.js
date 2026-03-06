const convertToCelsius = function(tf) {
  tc=Math.round(((tf-32)*5/9)*10)/10;
  return tc;
};

const convertToFahrenheit = function(tc) {
  tf = Math.round((tc*9/5 +32)*10)/10;
  return tf;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
