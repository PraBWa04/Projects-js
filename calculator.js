const resultElement = document.getElementById("result");
const input1Element = document.getElementById("input1");
const input2Element = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const divisionBtn = document.getElementById("division");
const multiplicationBtn = document.getElementById("multiplication");
let action = "+";

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

divisionBtn.onclick = function () {
  action = "/";
};

multiplicationBtn.onclick = function () {
  action = "*";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  if (result == 0) {
    resultElement.style.color = "black";
  }
  resultElement.textContent = result;
}

function computeNumberWithAction(val1, val2, actionSymbol) {
  const num1 = Number(val1.value);
  const num2 = Number(val2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  }
  if (actionSymbol == "-") {
    return num1 - num2;
  }
  if (actionSymbol == "/") {
    return num1 / num2;
  }
  if (actionSymbol == "*") {
    return num1 * num2;
  }
}

submitBtn.onclick = function () {
  const result = computeNumberWithAction(input1, input2, action);
  printResult(result);
};
