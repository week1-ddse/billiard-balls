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

test('add a dance class to stripes if user clicks stripe-button', assert => {
    //arrange
    const danceValue = 'stripe-button';
    const mockParent = document.createElement('img');
    mockParent.classList.add('ball', 'stripe');
    mockParent.src = "../assets/1-solid.png";
    mockParent.alt = "image of 1-solid";
    const expected = '<img class="ball stripe dance" src="../assets/1-solid.png" alt="image of 1-solid">';
    //act
    makeDance(danceValue);
    //assert
    assert.equal(expected, actual);
});

function makeDance(danceButtonValue) {
    
    const side = document.querySelectorAll();

}