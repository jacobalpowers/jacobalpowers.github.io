var goal = 10000;
var running = false;
var walk = true;
var position = 0;
var currFill = 0;
var filling = false;
var maxFill = 0;

const toggleRun = () => {
    if (!running) {
        running = setInterval(runningMan, 200);
    } else {
        clearInterval(running);
        running = false;
    }
}

const runningMan = () => {
    const man = document.getElementById("man-img");
    if (position >= 70) {
        man.src = "img/walkingman.png";
        clearInterval(running);
        running = false;
        return;
    }
    if (walk) {
        man.src = "img/runningman.png";
        walk = false;
    } else {
        man.src = "img/walkingman.png";
        walk = true;
    }
    position += 2.5;
    man.style.setProperty("--position", position + "%");
    
}

const is_not_number = (data) => {
    if (isNaN(data.trim())) {
        return true;
    }
    return false;
}

const fillThermo = () => {
    const bar = document.getElementById("gradient_bar");
    currFill += 1;
    bar.style.setProperty("--complete", currFill + "%");
    if (currFill >= maxFill) {
        clearInterval(filling);
        filling = false;
    }
}

const displayThermo = () => {
    const bar = document.getElementById("gradient_bar");
    const funds = document.getElementById("funds_raised").value;
    currFill = 0;
    maxFill = 0;
    if (is_not_number(funds)) {
        console.debug("Funds not number");
        return false;
    }

    maxFill = (funds/goal) * 100;
    if (maxFill > 100) {
        maxFill = 100;
    }
    filling = setInterval(fillThermo, 10);
}

window.onload = () => {
    document.getElementById("man-img").onclick = toggleRun;
    document.getElementById("display_funds").onclick = displayThermo;
}

