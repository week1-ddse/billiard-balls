import addBall from '../src/addBall.js';
const test = QUnit.test;

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

