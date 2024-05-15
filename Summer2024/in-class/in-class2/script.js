//toggling nav-bar 
document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

//moving the ball
let ballLeft = 0;
let ballTop = 0;
const moveBall = (direction) => {
    const root = document.querySelector(":root");
    if (direction == "up") {
        ballTop -= 10;
        root.style.setProperty("--ball-top", ballTop + "px");
    } else if (direction == "down") {
        ballTop += 10;
        root.style.setProperty("--ball-top", ballTop + "px");
    } else if (direction == "left") {
        ballLeft -= 10;
        root.style.setProperty("--ball-left", ballLeft + "px");
    } else if (direction == "right") {
        ballLeft += 10;
        root.style.setProperty("--ball-left", ballLeft + "px");
    }
}

document.getElementById("top-arrow").onclick = () => {
    moveBall("up");
}
document.getElementById("bottom-arrow").onclick = () => {
    moveBall("down");
}
document.getElementById("left-arrow").onclick = () => {
    moveBall("left");
}
document.getElementById("right-arrow").onclick = () => {
    moveBall("right");
}

//Changing color of text
document.getElementById("txt-color").onkeyup = () => {
    let msg = document.getElementById("color-message");
    let input = document.getElementById("txt-color").value;
    msg.innerText = input;
    if (CSS.supports("color", input)) {
        console.log(input);
        msg.style.color = input;
    }
}