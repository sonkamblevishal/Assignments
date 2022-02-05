var count = 0;
var btn = document.getElementById("btn");

var disp = document.getElementById("display");

btn.onclick = function () {
  count++;
  disp.innerHTML = count;
};
var button = document.getElementById("button");
var count = 0;
var decrementAmount = 1;

function reduceVariable() {
  count -= 1;
}
button.onclick = function reduceVariable() {
  count--;
  disp.innerHTML = count;
};
