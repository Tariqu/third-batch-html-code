var myBtn = document.getElementById('myBtn');
var myHeading = document.getElementById('main-heading');

myBtn.addEventListener('click', () => {
  myHeading.innerText = 'Hello world';
  for (let i = 0; i < 10; i++) {
    myHeading.innerText += ' Hello world';
  }
});
