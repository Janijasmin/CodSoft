
const input = document.querySelector("input");
  
function appendValue(value) {
  input.value += value;
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}

function calculatePercentage() {
  input.value = parseFloat(input.value) / 100;
}

function clearDisplay() {
  input.value = "";
}

function removeLastChar() {
  input.value = input.value.slice(0, -1);
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "." ||
    key === "%" ||
    key === "Enter"
  ) {
    event.preventDefault();
    if (key === "Enter") {
      calculate();
    } else if (key === "%") {
      calculatePercentage();
    } else {
      appendValue(key);
    }
  } else if (key === "Backspace") {
    event.preventDefault();
    removeLastChar();
  }
});
