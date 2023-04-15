const timerDisplay = document.querySelector('.time');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const workTimeInput = document.querySelector('#work-time');
const breakTimeInput = document.querySelector('#break-time');
const taskList = document.querySelector('#task-list');
const newTaskInput = document.querySelector('#new-task');
const addTaskBtn = document.querySelector('#add-task');

let seconds = workTimeInput.value * 60;
let timerInterval;
let isTimerRunning = false;
let isWorkTime = true;

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timerInterval = setInterval(() => {
      seconds--;
      if (seconds < 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        if (isWorkTime) {
          seconds = breakTimeInput.value * 60;
          isWorkTime = false;
        } else {
          seconds = workTimeInput.value * 60;
          isWorkTime = true;
        }
        startTimer();
        // alert('Congrats 🎉, on completing that session like a Pro! Enjoy the break session!');
        // console.log("Pomdoro session completed.");


        if ("Notification" in window) {
            Notification.requestPermission().then(function(permission) {
              if (permission === "granted") {
                var notification = new Notification("Programmer Netlink - Pomodoro Timer", {
                  body: "The pomodoro timer has completed a session, carrying on to the next session."
                });
              }
            });
          }
          
      } else {
        updateTimerDisplay();
      }
    }, 1000);
  }
}
      
function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  console.log("Pomodoro timer stopped. NOT AN ERROR, user input.");
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  isWorkTime = true;
  seconds = workTimeInput.value * 60;
  updateTimerDisplay();
  console.log("Reset timer. NOT USER ERROR, inputted.");
}

function updateTimerDisplay() {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function addNewTask() {
  const taskText = newTaskInput.value;
  if (taskText) {
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function() {
      setTimeout(function() {
        taskList.removeChild(taskItem);
        console.log("Removed task from todo list. Task name: ", taskItem)
      }, 500);
    });
    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(taskText));
    taskList.appendChild(taskItem);
    newTaskInput.value = '';
  }
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
addTaskBtn.addEventListener('click', addNewTask);

// Request permission for notifications
if (Notification.permission !== 'granted') {
//   Notification.requestPermission();
  console.log('Pomodoro timer update notifications allowed.');
}

if(Notification.permission !== "denied") {
    Notification.requestPermission()
    if (!localStorage.getItem('alertShown')) {
      alert('Please turn on your notifications on for this site to get updated when the sessions are over.');
      localStorage.setItem('alertShown', true);
      Notification.requestPermission();
    }
  }

  if(Notification.permission !== "default") {
    Notification.requestPermission()
    if (!localStorage.getItem('alertShown')) {
      alert('Please turn on your notifications on for this site to get updated when the sessions are over.');
      localStorage.setItem('alertShown', true);
      Notification.requestPermission();
    }
  }
  
  
