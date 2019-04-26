import addBall from './addBall.js';

const ballButtons = document.querySelectorAll('.ball-button');
const ballParent = document.getElementById('ball-parent');

for(let i = 0; i < ballButtons.length; i++) {
    const ballButton = ballButtons[i];
    ballButton.addEventListener('click', () => {
        addBall(ballParent, ballButton.value);
    });
}

const danceButtons = document.querySelectorAll('.dance-button'); 

for(let i = 0; i < danceButtons.length; i++) {
    const danceButton = danceButtons[i];
    danceButton.addEventListener('click', () => {
        
    });
}