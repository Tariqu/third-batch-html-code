console.log('Hello world');
// is used for printing any value to the console

document.getElementById('sumBtn').addEventListener('click', () => {
  var firstNum = document.getElementById('num1').value;
  var secondNum = document.getElementById('num2').value;
  document.getElementById('result').innerText =
    parseInt(firstNum) * parseInt(secondNum);
});

// Arithmatic operation (+, *, /, -)
