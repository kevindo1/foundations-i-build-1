import { random } from './random.js';

// import functions and grab DOM elements
const submitButton = document.getElementById('generate');
const randomParagraph = document.getElementById('random-num');

// initialize global state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

submitButton.addEventListener('click', ()=> {
    const result = random(0, 100);
    randomParagraph.textContent = result;
});
