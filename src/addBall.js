function addBall(ballParentElement, ballName) {
    const image = document.createElement('img');
    image.classList.add('ball', ballName);
    image.src = '../assets/' + ballName + '.png';
    image.alt = 'image of ' + ballName;
    ballParentElement.appendChild(image);
}

export default addBall;