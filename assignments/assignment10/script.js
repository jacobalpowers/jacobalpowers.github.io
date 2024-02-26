var currentText = 0;
var interval = 2000;
var banner = [];
var images = {};

const advertisement_text = () => {
    const text = document.getElementById("ads");
    text.innerText = banner[currentText];

    currentText += 1;
    if (currentText > banner.length - 1) {
        currentText = 0;
    }
    return;
}




window.onload = () => {

    banner.push("Look at these gorgeous images");
    banner.push("Coming soon to a wall near you!");
    banner.push("Call now for a special offer");
    banner.push("These images are so crisp and well designed");
    banner.push("Look forward to a lot of this in the future");

    //images.push("images/garden.jpg")

    setInterval(advertisement_text, interval);
}