console.log("document")

const names = document.getElementById("change")
console.log(names)



const text = document.getElementById("txt")

const button1 = document.getElementById("btn1")
console.log(button1)

button1.addEventListener (
    "click", function(){
        names.innerHTML="Joshua"
        text.innerHTML = "Click"
    }
)
const button2 = document.getElementById("btn2")
console.log(button2)

button2.addEventListener (
    "dblclick", function(){
        names.style.color ="red"
        text.innerHTML = "Double Click"
    }
)

const Input = document.getElementById("inp") 

Input.addEventListener(
    "input", function(){
        names.innerHTML = Input.value 
        text.innerHTML = "Mouse is typing..."
    }
)

Input.addEventListener(
    "change", function(){
        names.innerHTML = "" + Input.value
        text.innerHTML = "Mouse Entered"
    }
)

Input.addEventListener(
    "focus", function(){
        Input.style.backgroundColor = "aliceblue"
        text.innerHTML = "Focus"
    }
)

Input.addEventListener(
    "blur", function(){
        Input.style.backgroundColor = "white"
        text.innerHTML = "Waiting for Interaction..."
    }
)

const Img = document.getElementById("img") 

Img.addEventListener(
    "mouseover", function(){
        Img.style.transform = "scale(1.1)"
        text.innerHTML = "Mouse Over"
    }
)

Img.addEventListener(
    "mouseleave", function(){
        Img.style.transform = "scale(1)"
        text.innerHTML = "Mouse Leave"
        
    }
)
const water = document.getElementById("tubig")
water.addEventListener(
    "mouseover" ,function(){
        text.innerHTML = "Waiting for Interaction..."
    }
)



