var goal = 10000;
var running = false;
var walk = true;
var position = 0;

const toggleRun = () => {
    if (!running) {
        running = setInterval(runningMan, 500);
    } else {
        clearInterval(running);
        running = false;
    }
}

const runningMan = () => {
    const man = document.getElementById("man-img");
    //man.src = man.src == "img/walkingman.png" ? "img/runningman.png" : "img/walkingman.png";
    if (walk) {
        man.src = "img/runningman.png";
        walk = false;
    } else {
        man.src = "img/walkingman.png";
        walk = true;
    }
    position += 2.5;
    man.style.setProperty("--position", position + "%");
    if (position > 70) {
        man.src = "img/walkingman.png";
        clearInterval(running);
        running = false;
    }
}

window.onload = () => {
    document.getElementById("man-img").onclick = toggleRun;
}

