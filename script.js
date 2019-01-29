var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    h3.textContent = body.style.background + ";"; //Change content of h3
}

color1.addEventListener("input", setGradient); //Keep code dry by not using anonymous function; instead, define function outside of event listener so that we can reference in BOTH the color1 and color2 event listeners. Remember, do NOT include () next to setGradient fn, b/c we do not want it to run immediately -- only want it to run IF input event is triggered.

color2.addEventListener("input", setGradient);
