const rotateImage = () => {
    const emoji = document.getElementById("emoji");
    const slider = document.getElementById("spinner");
    emoji.style.rotate = slider.value + "deg";
}
const changeImage = () => {
    const cyan = document.getElementById("cyan");
    const green = document.getElementById("green");
    if (cyan.style.display == "block") {
        cyan.style.display = "none";
        green.style.display = "block";
    } else {
        cyan.style.display = "block";
        green.style.display = "none";
    }
}


const createStar = () => {
    document.getElementById("stars").innerHTML += "<h2>&#11088</h2>";
}

window.onload = () => {
    document.getElementById("change").onclick = changeImage;
    document.getElementById("slider").oninput = rotateImage;
    document.getElementById("stars").onclick = createStar;
}