const door = document.getElementById("door")
const inpt = document.getElementById("pass")
const flashlight = document.getElementById('flashlight');
const sw = document.getElementById('switch');
const hiddenText = document.getElementById('secret')
const letters = document.querySelectorAll('.letter')
console.log(Array.from(letters))
flashlight.style.display = "none"
let dark = false;

let handleDoor = () => {
  let res = Array.from(letters).map(letter => {
    return letter.value.toLowerCase()
  }).join("")
  console.log(res)
  if ( res == "pandora") {
    const levers = document.querySelector(".levers");

    if (!levers.classList.contains("clicked")) {
      levers.classList.add("clicked");
      setTimeout(function () {
        levers.classList.remove("clicked");
        door.style.transform = "rotate3d(0, 1, 0, -130deg)";
        sw.addEventListener("click", zhasni);
      }, 1500);
    }

  }
}

let zhasni = async () => {
  if (!dark) {
    flashlight.style.display = "inline-block"
    hiddenText.style.display = "inline-block"
    dark = true;
  } else {
    flashlight.style.display = "none"
    hiddenText.style.display = "none"
    dark = false;
  }

}


document.getElementById("lever").addEventListener("click", handleDoor);
document.getElementById("lever2").addEventListener("click", handleDoor);

document.addEventListener('mousemove', function (event) {
  moveFlashlight(event.pageX, event.pageY);
  toggleTextVisibility(event.pageX, event.pageY);
});

function moveFlashlight(x, y) {
  if (dark) {
    let radius = 80; // Radius of the flashlight circle
    flashlight.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent ${radius}px, rgba(0, 0, 0, 0.8) ${radius * 2}px)`;
  }
}

function toggleTextVisibility(x, y) {
  if (dark) {
    const flashlightCenterX = x;
    const flashlightCenterY = y;
    const textRect = hiddenText.getBoundingClientRect();
    const textCenterX = textRect.left + textRect.width / 2;
    const textCenterY = textRect.top + textRect.height / 2;
    const distance = Math.sqrt(Math.pow(flashlightCenterX - textCenterX, 2) + Math.pow(flashlightCenterY - textCenterY, 2));
    const flashlightRadius = 200;
    if (distance <= flashlightRadius) {
      hiddenText.style.color = '#888888';
      hiddenText.style.cursor = 'pointer';
    } else {
      hiddenText.style.color = 'transparent';
    }
  }
}