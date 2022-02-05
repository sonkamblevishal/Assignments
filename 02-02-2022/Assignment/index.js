let button = document.getElementById("time");
let btn = document.getElementById("start_btn");
btn.addEventListener("click", display);

const minutes = 05;
let time = minutes * 60;
counter_id = setInterval(display, 1000);

function display() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  button.innerHTML = `${minutes}:${seconds}`;
  time--;
}

document.getElementById("stop_btn").addEventListener("click", function () {
  clearInterval(counter_id);
});
