//let x = document.getElementsByTagName('h1')[0];


let hours = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = null;

const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const milliSecondsSpan = document.getElementById("milliSeconds");

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");


function updateDisplay() {
  hoursSpan.textContent = String(hours).padStart(2, '0');
  minutesSpan.textContent = String(minutes).padStart(2, '0');
  secondsSpan.textContent = String(seconds).padStart(2, '0');
  milliSecondsSpan.textContent = String(milliSeconds).padStart(3, '0');
}

function startTimer() {
  if (interval) return; // Prevent multiple intervals
  interval = setInterval(() => {
    milliSeconds += 1;
    if (milliSeconds >= 1000) {
      milliSeconds = 0;
      seconds += 1;
    }
	
	if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
	
    if (minutes >= 60) {
      minutes = 0;
      hours += 1;
    }
    updateDisplay();
  }, 1); // Update every millisecond
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliSeconds = 0;
  updateDisplay();
}

//start.style.backgroundColor = "red";

updateDisplay(); // Initialize display
//startTimer();

//start.addEventListener('click', ()=>start.style.backgroundColor = "red");

start.addEventListener('click', ()=>startTimer());
pause.addEventListener('click', ()=>stopTimer());
reset.addEventListener('click', ()=>resetTimer());



