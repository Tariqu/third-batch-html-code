console.log('Hello world');

// is used for printing any value to the console

document.getElementById('sumBtn').addEventListener('dblclick', () => {
  var firstNum = document.getElementById('num1').value;
  var secondNum = document.getElementById('num2').value;
  document.getElementById('result').innerText =
    parseInt(firstNum) + parseInt(secondNum);
});

// let pTagText = document.getElementById('inputChange').innerText;

// console.log(pTagText);
// console.log(document.getElementById('inputChange'));

let myChangeFunction = () => {
  let num1 = document.getElementById('num1').value;
  console.log(num1);
  document.getElementById('inputChange').innerText = num1;
};

document.getElementById('num1').addEventListener('keyup', myChangeFunction);

// Arithmatic operation (+, *, /, -)

// function
// object
// properties
// condition
// APIs ()
