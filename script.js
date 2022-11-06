const colors = document.querySelectorAll(".color");
const shoes = document.querySelectorAll(".shoe");
const gradients = document.querySelectorAll(".gradient");
const sizes = document.querySelectorAll(".size");

//default color
var prevColor = "blue";

//if we change color before animation complete it does'nt look good let block click untill animation completion
var animated = true;

//add event listner on all color
colors.forEach((color) => {
  color.addEventListener("click", changeColor);
});

//change color function
function changeColor() {
  //if animating do nothing
  if (!animated) {
    return;
  }
  //get color attr from clicked color
  var color = this.getAttribute("color");
  //select corresponding shoe gradeint and prevGradeint of that color
  var shoe = document.querySelector(`.shoe[color="${color}"]`);
  var gradient = document.querySelector(`.gradient[color="${color}"]`);
  var prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
  // set body attr primary same as color
  //to change primary-clr variable
  document.body.setAttribute("primary", color);
  //remove active from currently active color
  colors.forEach((color) => {
    color.classList.remove("active");
  });
  //then add active to clicked one
  this.classList.add("active");
  //same thing remove show class from currently shoen shoe img
  shoes.forEach((shoe) => {
    shoe.classList.remove("show");
  });
  //then add which has same color as clicked color
  shoe.classList.add("show");
  //smae with the background gradients
  gradients.forEach((gradient) => {
    //we use behind class to set gradient behind the main selected gradient
    gradient.classList.remove("behind");
    // and display to to display the selected graditn
    gradient.classList.remove("display");
  });

  //then make currenty slected grad behind and new selected display to show it
  prevGradient.classList.add("behind");
  gradient.classList.add("display");
  //make animated false then if its block click
  animated = false;
  //set current color as prev color for next click
  prevColor = color;
  // after some time make it true automatically
  setTimeout(() => {
    animated = true;
  }, 800);
}

//event listner on all size to change size
sizes.forEach((size) => {
  size.addEventListener("click", changeSize);
});

function changeSize() {
  //remove active from all size then add to clicked one
  sizes.forEach((size) => {
    size.classList.remove("active");
  });
  this.classList.add("active");
}
