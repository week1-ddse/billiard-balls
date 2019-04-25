const test = QUnit.test;

test('appends ball to cue', assert => {
    //arrange
    const ballName = '1';
    const ballLine = document.createElement('div');
    const expected = '<span class="ball one"></span>';

    //act
    addBall(ballName, ballLine);

    //assert
    const parentInnerHTML = ballLine.innerHTML;
    assert.equal(parentInnerHTML, expected);
});

