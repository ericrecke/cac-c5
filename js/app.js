import Button from './button.js';

let myDiv = document.querySelector('#myApp');

let myButton = new Button('Click me!');

myDiv.innerHTML = myButton.render();