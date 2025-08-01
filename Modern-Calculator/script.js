function appendCharacter(char) {
  let display = document.getElementById("display");
  if (display.value === "0" || display.value === "Error") {
    display.value = char;
  } else {
    display.value += char;
  }
}

function appendFunction(func) {
  let display = document.getElementById("display");
  if (display.value === "0" || display.value === "Error") {
    display.value = func;
  } else {
    display.value += func;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "0";
}

// Remove last character
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
}

function sin(deg) {
  return Math.sin(deg * Math.PI / 180);
}

function cos(deg) {
  return Math.cos(deg * Math.PI / 180);
}

function tan(deg) {
  return Math.tan(deg * Math.PI / 180);
}

function log(x) {
  return Math.log10(x);
}

function sqrt(x) {
  return Math.sqrt(x);
}

function pow(x, y) {
  return Math.pow(x, y);
}


function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
