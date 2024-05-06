var position = 0;
var maxPosition = 350;
var speed = 10;
var interval = 10;
var bouncing = false;
var down = true;

const exercise_1_click = () => {
    const exercise1 = document.getElementById("exercise_1");
    const exercise2 = document.getElementById("exercise_2");
    exercise1.style.borderBottomColor = "salmon";
    exercise2.style.borderBottomColor = "transparent";
    document.getElementById("ball").style.display = "flex";
    document.getElementById("yoga").style.display = "none";
}
const exercise_2_click = () => {
    const exercise1 = document.getElementById("exercise_1");
    const exercise2 = document.getElementById("exercise_2");
    exercise1.style.borderBottomColor = "transparent";
    exercise2.style.borderBottomColor = "salmon";
    document.getElementById("ball").style.display = "none";
    document.getElementById("yoga").style.display = "flex";
}

const toggle_bouncing = () => {
    var start = document.getElementById("start");
    if (!bouncing) {
        bouncing = setInterval(bounce_ball, interval);
        start.textContent = "stop";
    } else {
        clearInterval(bouncing);
        bouncing = false;
        start.textContent = "start";
    }
}

const bounce_ball = () => {
    const ball = document.getElementById("ball_img");
    
    if (down) {
        position += speed;
        if (position >= maxPosition) {
            down = false;
        }
    }
    if (!down) {
        position -= speed;
        if (position <= 0) {
            down = true;
        }
    }
    
    ball.style.setProperty("--position", position + "%");
}

const yoga_input = (input) => {
    var text = document.getElementById("yoga_text");
    const newPosition = document.createElement("h4");
    if (input == "yoga1") {
        newPosition.textContent = "Side Stretch";
    }
    if (input == "yoga2") {
        newPosition.textContent = "Downward Dog";
    }
    if (input == "yoga3") {
        newPosition.textContent = "Upward Flamingo";
    }
    if (input == "yoga4") {
        newPosition.textContent = "Reach Over Leg";
    }
    if (input == "yoga5") {
        newPosition.textContent = "Twist";
    }
    if (input == "yoga6") {
        newPosition.textContent = "Lunge";
    }
    if (input == "yoga7") {
        newPosition.textContent = "Heel Stretch";
    }
    if (input == "yoga8") {
        newPosition.textContent = "Wall Lean";
    }
    text.append(newPosition);
}



const toggle_nav = () => {
    document.getElementById("exercises").classList.toggle("hidden");
}


window.onload = () => {
    var images = document.querySelectorAll(".yoga_img");

    document.getElementById("exercise_1").onclick = exercise_1_click;
    document.getElementById("exercise_2").onclick = exercise_2_click;
    document.getElementById("hamburger_menu").onclick = toggle_nav;
    document.getElementById("start").onclick = toggle_bouncing;
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function(){yoga_input(this.id)};
    }
}

