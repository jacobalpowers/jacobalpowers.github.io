let red = 255;
let arrowDown = true;

const changeRed = () => {
    let box = document.getElementById("color-slider");
    let input = document.getElementById("slider");

    box.style.backgroundColor = "rgb("+input.value+", 0, 0)";
}
const changePictureSize = (e) => {
    let img = document.getElementById("picture");
    console.log(e.target.innerHTML);
}
const toggleExercise1 = () => {
    let sliderItem = document.getElementById("color-slider");
    let chooserItem = document.getElementById("chooser");

    sliderItem.style.display = "flex";
    chooserItem.style.display = "none";
}
const toggleExercise2 = () => {
    let sliderItem = document.getElementById("color-slider");
    let chooserItem = document.getElementById("chooser");

    sliderItem.style.display = "none";
    chooserItem.style.display = "flex";
}
const toggleArrow = () => {
    let arrow = document.getElementById("arrow");
    let navbar = document.getElementById("nav-bar");

    if (arrowDown) {
        navbar.style.display = "none";
        arrow.innerHTML = "\&\#9650\;";
    }
    if (!arrowDown) {
        navbar.style.display = "flex";
        arrow.innerHTML = "\&\#9660\;";
    }
    arrowDown = !arrowDown;
}



window.onload = () => {
    document.getElementById("slider").oninput = changeRed;
    document.getElementById("exercise1").onclick = toggleExercise1;
    document.getElementById("exercise2").onclick = toggleExercise2;
    document.getElementById("arrow").onclick = toggleArrow;
    const buttons = document.getElementsByClassName("button");
    for (i in buttons) {
        i.onclick = changePictureSize;
    }
}