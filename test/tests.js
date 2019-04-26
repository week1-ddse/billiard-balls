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
    const danceValue = 'stripe';
    const mockImage = document.createElement('img');
    mockImage.classList.add('ball', 'stripe');
    mockImage.src = "../assets/1-solid.png";
    mockImage.alt = "image of 1-solid";
    const expected = '<img class="ball stripe dance" src="../assets/1-solid.png" alt="image of 1-solid">';
    //act
    makeDance(danceValue);
    //assert
    const parentInnerHTML = mockImage.outerHTML;
    
    assert.equal(parentInnerHTML, expected);
});

function makeDance(danceButtonValue) {
    let classToSelect = '';
    if(danceButtonValue === 'stripe') {
        classToSelect = '.stripe';
    } else if(danceButtonValue === 'solid') {
        classToSelect = '.solid';
    } else if(danceButtonValue === 'eight-ball') {
        classToSelect = '.eight-ball';
    } else {
        classToSelect = '.eight-ball stripe solid';
    }
    console.log(classToSelect)
    // const images = document.querySelectorAll(classToSelect);

    // console.log(images.outerHTML);
    // for(let i = 0; i < images.length; i++) {
    //     const image = images[i];
    //     image.classList.add('dance');
    //     console.log(image)
    // }
    
}