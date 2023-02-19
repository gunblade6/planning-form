//1.dragNdrop(event)

function dragNdrop(event) {
  var filename = URL.createObjectURL(event.target.files[0]); //will store file name with src
  var preview = document.getElementById("preview"); //the div where we will show image
  var previewImg = document.createElement("img"); //creating new image tag
  previewImg.setAttribute("src", filename); //setting attribute src of newly created "img" element to "filename"
  preview.innerHTML = "";
  preview.appendChild(previewImg); //finally append "img" element to parent element "preview"
}

//2. drag

function drag() {
  //while dragging it will fire this function that will add the following class
  document.getElementById("uploadFile").parentNode.className =
    "draging dragBox";
}

//3. finally the drop()
function drop() {
  document.getElementById("uploadFile").parentNode.className = "dragBox";
}

// delete selected file on clickink delete
const deleteButton = document.getElementById(`delete`);
const preview = document.getElementById(`preview`);

deleteButton.addEventListener(`click`, () => {
  preview.style.display = "none";
});

// switch active class on slider links

// DEPEND ON CURRENT SLIDER VARIABLE IN CHANGING ELEMENTS
let currentSlider = 0;

let sliderButtons = document.querySelectorAll(`.slider_button`);
let setActive = document.querySelector(
  `.slider_button[data-index="${currentSlider}"]`
);
const next = document.querySelector(`.forward`);
const back = document.querySelector(`.back`);

sliderButtons.forEach((b) => {
  b.addEventListener(`click`, () => {
    currentSlider = b.getAttribute(`data-index`);
    setActiveElement();
  });
});

// set active class on the element with the right index
function setActiveElement() {
  sliderButtons.forEach((b) => b.classList.remove(`active`));
  setActive = document.querySelector(
    `.slider_button[data-index="${currentSlider}"]`
  );
  setActive.classList.add(`active`);
}

next.addEventListener(`click`, () => {
  if (currentSlider !== sliderButtons.length - 1) {
    currentSlider++;
  } else {
    currentSlider = 0;
  }
  setActiveElement();
});
back.addEventListener(`click`, () => {
  if (currentSlider === 0) {
    currentSlider = sliderButtons.length - 1;
  } else {
    currentSlider--;
  }
  setActiveElement();
});

// show actions on clicking more actions
const moreActions = document.getElementById(`actions`);
const actions = document.querySelector(`.add_topic .more_actions div`);

moreActions.addEventListener(`click`, () => {
  actions.classList.toggle(`show`);
  moreActions.classList.toggle(`show`);
});

// removes actions when user clicks away

window.addEventListener(`click`, (e) => {
  if (!e.target.classList.contains(`show`)) {
    actions.classList.remove(`show`);
    moreActions.classList.remove(`show`);
  }
});

window.onclick = (e) => console.log(e.target);
