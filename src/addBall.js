function addBall(ballParentElement, ballName) {
    const image = document.createElement('img');
    image.classList.add('ball');
    // Adds class depending on solid or stripe in value
    if(ballName.includes('solid')) {
        image.classList.add('solid');
    } else if(ballName.includes('stripe')) {
        image.classList.add('stripe');
    } else {
        image.classList.add('eight-ball');
    }
    image.src = './assets/' + ballName + '.png';
    image.alt = 'image of ' + ballName;
    ballParentElement.appendChild(image);
}

export default addBall;