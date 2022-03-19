import Button from './button.js';
import Image from './image.js';
import List from './list.js';
import Sound from './sound.js';
// import Sound from './sound.js';

let myDiv = document.querySelector('#myApp');
let myDivImg = document.querySelector('#myImg');
let myDivList = document.querySelector('#myList');
let myDivSound = document.querySelector('#mySound');


let myButton = new Button('Click me!');
let myImage = new Image('/img/bg.jpeg','Background');
let myList = new List(['List Item 1','List Item 2','List Item 3']);
let mySound = new Sound('/sounds/music.mp3', 'audio/mpeg');

myDiv.innerHTML = myButton.render();
myDivImg.innerHTML = myImage.render();
myDivList.innerHTML = myList.render();
myDivSound.innerHTML = mySound.render();