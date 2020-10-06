const num = document.getElementById("number");
const btn1 = document.getElementById("increment");
const btn2 = document.getElementById("decrement");
const btn3 = document.getElementById("reset");
const btn4 = document.getElementById("Red");
const btn5 = document.getElementById("Green");
const btn6 = document.getElementById("Blue");
const btn7 = document.getElementById("result");
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
 btn7.addEventListener('click', () => {
   num.innerHTML= "result" ;
   });

  function func() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (op) {
      case 'plus':
        result = a + b;
        break;
      case 'minus':
        result = a - b;
        break;
      case 'times':
        result = a * b;
        break;
      case 'divide':
        if (num2) {
          result = a / b;
        } else {
          result = 'mm';
        }
        break;
    }
    document.getElementById("resultat").innerHTML = result;
  }
