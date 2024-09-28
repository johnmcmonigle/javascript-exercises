const convertToCelsius = function(temp) {
  let cel = (temp - 32) * (5/9);
  cel = Math.round(cel * 10) / 10
  return cel;
};

const convertToFahrenheit = function(temp) {
  let far = (temp * 9/5) + 32;
  far = Math.round(far * 10) / 10
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
