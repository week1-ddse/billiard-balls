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
    const images = document.querySelectorAll(classToSelect);

    console.log(images);
    // for(let i = 0; i < images.length; i++) {
    //     const image = images[i];
    //     image.classList.add('dance');
    //     console.log(image)
    // }
    
}

export default makeDance;