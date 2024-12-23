const date = document.querySelector('#chooseDate');
const button = document.querySelector('#btn');
const result = document.querySelector('#spanResult');

function ageCalculate() {
 

  if (!date.value) {
    alert('please enter date of birth');
    return;
  }
  

  const currentDate = new Date();
  const dateOfBirth = new Date(date.value);
  // Calculate the difference in time (milliseconds)
  const years = currentDate.getFullYear() - dateOfBirth.getFullYear();

  const months = currentDate.getMonth() - dateOfBirth.getMonth();

  const days = currentDate.getDate() - dateOfBirth.getDate();

  if (months < 0) {
    months += 12;
    years--;
  }


  if (days < 0) {
    months--;
  

  const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() -1, 0)
days += previousMonth.getDate();
}


  
  result.innerHTML = `Your age is ${years} years, ${months} months and ${days} days`;
}

button.addEventListener('click', ageCalculate);
