const btn1 = document.getElementById("increment");
const btn2 = document.getElementById("decrement");
const btn3 = document.getElementById("reset");
const num = document.getElementById("number");
const btn4 = document.getElementById("Red");
const btn5 = document.getElementById("Green");
const btn6 = document.getElementById("Blue");
btn1.addEventListener("click", () => {
  num.innerHTML++;
});
btn2.addEventListener("click", () => {
  num.innerHTML--;
});
btn3.addEventListener("click", () => {
  num.innerHTML= "1";
});
btn4.addEventListener("click", () => {
  num.style="color:red;" ;
});
btn5.addEventListener('click', () => {
  num.style="color:green;" ;
});
btn6.addEventListener('click', () => {
  num.style="color:blue;" ;
});
