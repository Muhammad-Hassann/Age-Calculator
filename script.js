let todayInput = document.getElementById("today");
let birthdayInput = document.getElementById("birthday");
let yearDisplay = document.getElementById("year");
let monthDisplay = document.getElementById("month");
let dayDisplay = document.getElementById("day");
let calculateButton = document.getElementById("calculate_button");

let today = new Date();
let d = today.getDate();
let m = today.getMonth() + 1;
let y = today.getFullYear();

d = d < 10 ? "0" + d : d;
m = m < 10 ? "0" + m : m;

let dateString = `${m}/${d}/${y}`;
todayInput.value = dateString;

calculateButton.addEventListener("click", function () {
  let birthday = new Date(birthdayInput.value);
  if(birthday > today){
    alert("Please enter a valid date. Your birthday cannot be in the future.")
    return;
  }

  let ageInMS = today.getTime() - birthday.getTime();

  let years = Math.floor(ageInMS / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor(
    (ageInMS % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let days = Math.floor(
    (ageInMS % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  days = days < 10 ? "0" + days : days;
  months = months < 10 ? "0" + months : months;
  years = years < 10 ? "0" + years : years;

  yearDisplay.innerHTML = years;
  monthDisplay.innerHTML = months;
  dayDisplay.innerHTML = days;
});
