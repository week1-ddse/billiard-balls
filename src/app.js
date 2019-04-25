import addBall from './addBall.js';

const ballButtons = document.querySelectorAll('.ball-button');

for(let i = 0; i < ballButtons.length; i++) {
    const ballButton = ballButtons[i];
    ballButton.addEventListener('click', () => {
        console.log(ballButton.value);
    });
}