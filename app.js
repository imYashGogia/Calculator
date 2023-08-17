let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        alert("Invalid expression");
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
    adjustInputFontSize();
  });
});

function adjustInputFontSize() {
  if (input.value.length >= 10) {
    input.style.whiteSpace = "normal";
    input.style.overflow = "visible";
  } else {
    input.style.whiteSpace = "nowrap";
    input.style.overflow = "hidden";
  }
}

adjustInputFontSize();

// Listen for window resize and adjust font size accordingly
// window.addEventListener("resize", adjustInputFontSize);
