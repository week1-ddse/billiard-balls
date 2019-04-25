const test = QUnit.test;

function addBall(ballParentElement, ballName) {
    const span = document.createElement('span');
    span.classList.add('ball', ballName);
    ballParentElement.appendChild(span);
}

test('appends ball to cue', assert => {
    //arrange
    const ballName = 'one';
    const ballParent = document.createElement('div');
    const expected = '<span class="ball one"></span>';

    //act
    addBall(ballParent, ballName);

    //assert
    const parentInnerHTML = ballParent.innerHTML;
    assert.equal(parentInnerHTML, expected);
});

