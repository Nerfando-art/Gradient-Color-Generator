const css = document.querySelector("h3");
const button = document.getElementById("random")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const body = document.getElementById("gradient")

function changeColor() {
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value
	 + ", " 
	 + color2.value 
	 + ")"

	 css.textContent = body.style.background + ";";
}

function randomizeColors() {
	const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
	const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
	color1.value = randomColor1;
	color2.value = randomColor2;
	changeColor();
}

color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)

button.addEventListener("click", randomizeColors)

