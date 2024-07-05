function createDivWithClass(className) {
    const createdDiv = document.createElement('div');
    createdDiv.classList.add(className);

    return createdDiv;
}

function createImageWithSource(source) {
    const newImg = new Image();
    newImg.src = source;

    return newImg;
}
export  {
    createDivWithClass,
    createImageWithSource
}