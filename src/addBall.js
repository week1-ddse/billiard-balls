function addBall(ballParentElement, ballName) {
    const span = document.createElement('span');
    span.classList.add('ball', ballName);
    ballParentElement.appendChild(span);
}

export default addBall;