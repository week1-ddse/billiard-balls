import addBall from '../src/addBall.js';
const test = QUnit.test;

test('appends ball to cue', assert => {
    //arrange
    const ballName = '1-solid';
    const ballParent = document.createElement('div');
    const expected = '<img class="ball solid" src="../assets/1-solid.png" alt="image of 1-solid">';

    //act
    addBall(ballParent, ballName);

    //assert
    const parentInnerHTML = ballParent.innerHTML;
    assert.equal(parentInnerHTML, expected);
});