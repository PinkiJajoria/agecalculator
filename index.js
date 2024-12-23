const date = document.querySelector('#chooseDate');
const button = document.querySelector('#btn');
const result = document.querySelector('#spanResult');

function ageCalculate() {
  const currentDate = new Date();
  const dateOfBirth = new Date(date.value);
  
  // Calculate the difference in time (milliseconds)
  const ageInMilliseconds = currentDate - dateOfBirth;

  // Convert milliseconds to years (1 year = 365.25 days, including leap years)
  const millisecondsInOneYear = 365.25 * 24 * 60 * 60 * 1000; // milliseconds in one year
  const years = ageInMilliseconds / millisecondsInOneYear;

  // Output the result, rounded to two decimal places for better readability
  result.innerHTML = `Your age is ${years.toFixed(2)} years`;
}

button.addEventListener('click', ageCalculate);
