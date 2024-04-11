let door = document.getElementById("door")
document.getElementById("vault").addEventListener("click", function () {
    const levers = document.querySelectorAll(".lever");
    for (let lever of levers) {
        if (!lever.classList.contains("clicked")) {
            lever.classList.add("clicked");
              setTimeout(function() {
                lever.classList.remove("clicked");
                door.style.transform = "rotate3d(0, 1, 0, -130deg)";
                setTimeout(function() {
                //   lever.classList.remove("lever");
                //   door.style.transform = "rotate3d(0, 1, 0, -130deg)";
                }, 500);
              }, 1500);
        }
    }
});

