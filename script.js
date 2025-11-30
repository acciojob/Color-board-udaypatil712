const container = document.getElementById("container");
const BOXES = 800;

function randomColor() {
    const colors = ["#ff4757", "#ffa502", "#2ed573", "#1e90ff", "#3742fa", "#a29bfe", "#eccc68"];
    return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < BOXES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        const color = randomColor();
        square.style.backgroundColor = color;

        setTimeout(() => {
            square.style.backgroundColor = "#222"; // fade back smoothly
        }, 1000);
    });

    container.appendChild(square);
}
