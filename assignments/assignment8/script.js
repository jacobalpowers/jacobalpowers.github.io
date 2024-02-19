var goal = 10000;

const exercise_1_click = () => {
    const exercise1 = document.getElementById("exercise_1");
    const exercise2 = document.getElementById("exercise_2");
    exercise1.style.borderBottomColor = "salmon";
    exercise2.style.borderBottomColor = "transparent";
    document.getElementById("enter_command").style.display = "flex";
    document.getElementById("yoga").style.display = "none";
}
const exercise_2_click = () => {
    const exercise1 = document.getElementById("exercise_1");
    const exercise2 = document.getElementById("exercise_2");
    exercise1.style.borderBottomColor = "transparent";
    exercise2.style.borderBottomColor = "salmon";
    document.getElementById("enter_command").style.display = "none";
    document.getElementById("yoga").style.display = "flex";
}
const toggle_nav = () => {
    document.getElementById("exercises").classList.toggle("hidden");
}
const changeCommand = () => {
    const command = document.getElementById("command").value;
    const action = document.getElementById("action");

    if (is_blank(command)) {
        action.src="images/original.jpg"
    }
    const currentAction = command.charAt(command.length - 1);
    if (is_not_valid(currentAction)) {
        return false;
    }
    if (currentAction == 'b') {
        action.src="images/read.jpg";
    }
    if (currentAction == 'c') {
        action.src="images/clown.jpg";
    }
    if (currentAction == 'p') {
        action.src="images/birthday.jpg";
    }
    if (currentAction == 'r') {
        action.src="images/rain.jpg";
    }
    if (currentAction == 's') {
        action.src="images/shovel.jpg";
    }
    if (currentAction == 'w') {
        action.src="images/work.jpg";
    }

    return true;
}
const is_blank = (data) => {
    if (data.trim() == "") {
        return true;
    }
    return false;
}
const is_not_valid = (data) => {
    if (data == 'b' ||
        data == 'c' ||
        data == 'p' ||
        data == 'r' ||
        data == 's' ||
        data == 'w') {
        return false;
    }
    return true;
}
const yoga = () => {
    const slider = document.getElementById("slide").value;
    const yoga = document.getElementById("yoga_img");

    if (slider == 1) {
        yoga.src="images/yoga1.jpg"
    }
    if (slider == 2) {
        yoga.src="images/yoga2.jpg"
    }
    if (slider == 3) {
        yoga.src="images/yoga3.jpg"
    }
    if (slider == 4) {
        yoga.src="images/yoga4.jpg"
    }
    if (slider == 5) {
        yoga.src="images/yoga5.jpg"
    }
    if (slider == 6) {
        yoga.src="images/yoga6.jpg"
    }
    if (slider == 7) {
        yoga.src="images/yoga7.jpg"
    }
    if (slider == 8) {
        yoga.src="images/yoga8.jpg"
    }

    return true;
}


window.onload = () => {
    document.getElementById("exercise_1").onclick = exercise_1_click;
    document.getElementById("exercise_2").onclick = exercise_2_click;
    document.getElementById("command").oninput = changeCommand;
    document.getElementById("hamburger_menu").onclick = toggle_nav;
    document.getElementById("slide").oninput = yoga;
}