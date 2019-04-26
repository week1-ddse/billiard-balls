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
        removeDance();
        let targetClass = determineClass(danceButton.value);
        addClass(targetClass);
    });
}

function determineClass(danceButtonValue){
    let classToSelect;

    if(danceButtonValue === 'all') {
        classToSelect = ('ball');
    } else if(danceButtonValue === 'stripe') {
        classToSelect = 'stripe';
    } else if(danceButtonValue === 'solid') {
        classToSelect = 'solid';
    } else if(danceButtonValue === 'eight-ball') {
        classToSelect = 'eight-ball';
    }
    return classToSelect;
}

function addClass(targetClass) {
    const targetBalls = document.getElementsByClassName(targetClass);

    for(let i = 0; i < targetBalls.length; i++) {
        let ball = targetBalls[i];
        ball.classList.add('dance');
    }
}

function removeDance() {
    const targetBalls = document.querySelectorAll('.dance');

    for(let x = 0; x < targetBalls.length; x++) {
        let ball = targetBalls[x];
        ball.classList.remove('dance');
    }

}