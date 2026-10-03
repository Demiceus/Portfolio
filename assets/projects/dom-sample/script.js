console.log(document);

const title =  document.getElementById("title");
console.log(title); 
title.innerHTML = "Welcome JavaScript DOM!";

const message = document.getElementById("message");
console.log(message);
message.innerHTML = "HEllO World!";

const Hello = document.getElementsByClassName("hello");
console.log(Hello);

const paragraph = document.getElementsByClassName("info");
console.log(paragraph);

const firstInfo = document.querySelector(".info");
console.log(firstInfo);

const allInfo = document.querySelectorAll(".info");
console.log(allInfo);

const image = document.getElementById("image");
console.log(image);

const changeTitle = document.getElementById("changetitle");
console.log(changeTitle);

const changeColor = document.getElementById("changecolor")

const changeImage = document.getElementById("changeimage")

changeTitle.addEventListener(
    "click",
    function(){
        title.innerHTML = "You Click the button!";
    }
)

changeColor.addEventListener(
    "click",
    function(){
        title.style.color = "cyan";
        title.style.backgroundColor = "Yellow";
    }
)

changeImage.addEventListener(
    "click",
    function(){
        image.src = "images/sanji.jpg"; 
    }
)

const button = document.getElementById("myButton")
const Output = document.getElementById("output")
const doublebutton = document.getElementById("doubleButton")
const Image = document.getElementById("myImage")
const input = document.getElementById("nameInput")

button.addEventListener(
    "click",
    function () {
        Output.innerHTML = "The button was clicked!";
    }
)

doublebutton.addEventListener (
    "dblclick",
    function () {
        Output.innerHTML = "The button was double clicked!";
    }
)

Image.addEventListener (
    "mouseover",
    function () {
        Output.innerHTML = "Your mouse is over the image";
    }
)

Image.addEventListener (
    "mouseout",
    function () {
        Output.innerHTML = "Your mouse left the image";
    }
)

input.addEventListener (
    "change",
    function () {
        Output.innerHTML =
        "Hello, " + input.value +  "!";
    }
)

input.addEventListener (
    "input",
    function () {
        Output.innerHTML =
        "Typing: " + input.value;
    }
)

input.addEventListener (
    "focus",
    function () {
        input.style.backgroundColor = "lightyellow";

        Output.innerHTML = "Input is active";
    }
)

input.addEventListener (
    "blur",
    function () {
        input.style.backgroundColor = " white";

        Output.innerHTML = "Input is no longer active.";
    }
)

