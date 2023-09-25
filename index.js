var screenValue = '';
var screen = document.querySelector("h2");
var buttons = document.querySelectorAll(".btn");
var toggleCalc = document.getElementById('toggle');
var hideButtons = document.querySelectorAll(".btn-hide");

for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        
        if (buttonText === 'DEL') {
            screenValue = screenValue.slice(0, -1);
            screen.innerText = screenValue;
        }
        else if (buttonText === 'CE') {
            screenValue = '';
            screen.innerText = screenValue;
        }
        else if (buttonText === 'Math.sqrt(') {
          screenValue = 'Math.sqrt('+screen.innerText+')';
          screen.innerText = 'sqrt('+screen.innerText+')';
        }
        else if (buttonText === 'Math.pow(') {
          screenValue = 'Math.pow('+screen.innerText+',2)';
          screen.innerHTML = '<sup>2</sup>'+screen.innerText;
        }
        else if (buttonText === 'π') {
          screenValue = '3.14';
          screen.innerText = 'π';
        }
        else if (buttonText === 'log') {
          screenValue = 'Math.log10('+screen.innerText+')';
          screen.innerText = 'log('+screen.innerText+')';
        }
        else if (buttonText === 'sin') {
          screenValue = 'Math.sin('+degree(screen.innerText)+')';
          screen.innerText = 'sin('+screen.innerText+')';
        }
        else if (buttonText === 'cos') {
          screenValue = 'Math.cos('+degree(screen.innerText)+')';
          screen.innerText = 'cos('+screen.innerText+')';
        }
        else if (buttonText === 'tan') {
          screenValue = 'Math.tan('+degree(screen.innerText)+')';
          screen.innerText = 'tan('+screen.innerText+')';
        }
        else if (buttonText === '!') {
          screenValue = factorial(screen.innerText);
          screen.innerText = screen.innerText+'!';
        }
        else if (buttonText === '=') {
            screenValue = Function("return "+screenValue)();
            screen.innerText = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    });
}

var numberOfButtons = document.querySelectorAll('.btn');

numberOfButtons.forEach(button => {
  button.addEventListener('click', () => {
    buttonAnimation(button);
  });
});

function buttonAnimation(currentButton) {
  var activeButton = currentButton;
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300);
}

var toggle = document.querySelector(".dark");
var body = document.querySelector("body");

toggle.addEventListener("click", ()=>{
    body.classList.toggle('dark');
    numberOfButtons.forEach(button => {
      button.classList.toggle('darkbtn');
    });
    document.querySelector("h2").classList.toggle('darkscreen');
    document.querySelector(".footer").classList.toggle('dark');
});

toggleCalc.addEventListener('click',()=>{
  hideButtons.forEach(btn=>{
    btn.classList.toggle('hidden');
  });
  document.getElementById('plus').style="grid-row: 3/5";
});

function factorial(n) {
  let fact=1;
  for(let i=1; i<=n; i++) {
    fact *= i;
  }
  return fact;
}

function degree(radians)
{
  return radians * (Math.PI/180);
}