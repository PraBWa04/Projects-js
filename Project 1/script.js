let num = 20; // number
let firstName = "Ivan"; //string
const isProgrammer = true; //boolean

/* What can I do:
let $ = "test";
let $num = 40;
let num$ = 100;
let _ = 400;
let _num = 1000;
let num_ = 4;
let myNum = 3; camelCase */

/* Restricted (заборонено)
let let 42num = '11'
let my-num = '12'
let const */

// firstName = "John";
// isProgrammer = false; // error because of const
// alert(firstName);

// console.log("Name:", mainName);
// console.log("Age:", num);
// console.log("Work status:", isProgrammer);

// console.log(num + 10);
// console.log(num - 10);
// console.log(num * 10);
// console.log(num / 10);
// console.log(num % 10);

// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// console.log(num, num2);
// let num3 = (num + 10 * 2) / 5 - 1;
// console.log(num3);

// const fullName = firstName + " Matyshchak";
// console.log(fullName);

const resultElement = document.getElementById("result");
const input1Element = document.getElementById("input1");
const input2Element = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";

// console.log(input1.value);
// console.log(input2.value);

// console.log(resultElement.textContent);
// resultElement.textContent = (113 - 13) / num;

// console.log(typeof sum);

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumberWithAction(val1, val2, actionSymbol) {
  const num1 = Number(val1.value);
  const num2 = Number(val2.value);
  if (actionSymbol == "+") {
    num1 + num2;
  }
  if (actionSymbol == "-") {
    num1 - num2;
  }
}

submitBtn.onclick = function () {
  const result = computeNumberWithAction(input1, input2, action);
  printResult(result);
  //   if (action == "+") {
  //     const sum = Number(input1.value) + Number(input2.value);
  //     printResult(sum);
  //   } else if (action == "-") {
  //     const sum = Number(input1.value) - Number(input2.value);
  //     printResult(sum);
  //   }
  //
};
