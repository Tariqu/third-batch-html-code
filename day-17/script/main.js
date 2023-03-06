// let turnOnBtn = document.getElementById('btnOn');
// let turnOffBtn = document.getElementById('btnOff');
// let bulb = document.getElementById('bulb');

// turnOffBtn.addEventListener('click', () => {
//   bulb.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
// });

// let turnOnFunction = () => {
//   bulb.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
// };

// turnOnBtn.addEventListener('click', turnOnFunction);

// condition could be True or false

// keywords let if else, for, const switch for undefined, null, true, false

// = assignment operator
// > grater than
// < less than
// == equal
// >= graterthan equal to
// <= lessthan equal to
// != not equal to
// ! not operator

let turnOnBtn = document.getElementById('btnOn');
let bulb = document.getElementById('bulb');
let isBulbOn = false;
turnOnBtn.addEventListener('click', () => {
  if (isBulbOn) {
    isBulbOn = false;
    turnOnBtn.innerText = 'Turn On';
    bulb.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    // we could add more statement according to our requirement
  } else {
    isBulbOn = true;
    turnOnBtn.innerText = 'Turn Off';
    bulb.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    // we could add more statement according to our requirement
  }
  console.log(isBulbOn);
});

// scoping
