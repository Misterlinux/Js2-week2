function setAlarm() {

  const cronometro = document.getElementById("timeRemaining")
  let setAlarm = document.getElementById("alarmSet")
  let hora = setAlarm.valueAsNumber
  console.log(hora)
  console.log(hora < 10)

  if (hora < 10) {

      cronometro.innerText = "Time Remaining: 00:" + hora

  } else {
      cronometro.innerText = "Time Remaining: 00:0 " + hora

  }

  let counter = hora;

  function countdown(counter) {
      if (counter > 0) {
          
          setTimeout(function() { counter--; countdown(counter) }, 1000);
          cronometro.innerText = "Time Remaining: 00:" + (counter < 10 ? "0" + counter : counter)
      } else {
          cronometro.innerText = "Time Remaining: 00:" + (counter < 10 ? "0" + counter : counter)
          playAlarm()

      }
  }
  countdown(counter);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
      setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
      pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  let cambioColor = document.querySelector(".centre");
  cambioColor.style.backgroundColor = `#ffa500`;

}

window.onload = setup;

/*
function setAlarm(){
  let timeAlarm = document.getElementById("alarmSet").valueAsNumber;
  chargecounter(timeAlarm)
}

function chargecounter(time){
  let counter = document.getElementById("timeRemaining")
  counter.innerText = (time > 60 ? `Time remaining 01:${time-60}` : `time remaining 00: ${time} ` )

  if(time > 0){
    setTimeout(() => chargecounter(--time) , 1000)
  }
  else{
    let bodycolor = document.querySelector("body")
    bodycolor.style.backgroundColor = "red"
    playAlarm()
  }
}

// DO NOT EDIT BELOW HERE

let audio = new Audio("alarmsound.mp3")

function setup(){
  document.getElementById("set").addEventListener("click", () => {
    setAlarm()
  })
  document.getElementById("stop").addEventListener("click", () => {
    paused()
  })
}

function paused(){
  let whito = document.querySelector("body")
  whito.style.backgroundColor = "white"
  audio.pause()
}

function playAlarm(){
  audio.play()
}

window.onload = setup;

*/