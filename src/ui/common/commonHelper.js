function createDivWithClass(className) {
  const createdDiv = document.createElement("div");
  createdDiv.classList.add(className);

  return createdDiv;
}

function createImageWithSource(source, className) {
  const newImg = new Image();
  newImg.src = source;
  newImg.classList.add(className);

  return newImg;
}
export { createDivWithClass, createImageWithSource };
