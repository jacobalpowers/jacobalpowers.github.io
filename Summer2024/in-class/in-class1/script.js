const addRemoveClass = () => {
    let text = document.getElementById("padded-text");
    if (text.classList.contains("formatted")) {
        text.classList.remove("formatted");
    } else {
        text.classList.add("formatted");
    }
}

const removeImage = () => {
    let img = document.getElementById("lorem-image");
    img.style.display = "none";
}





window.onload = () => {
    document.getElementById("add-class").onclick = addRemoveClass;
    document.getElementById("lorem-image").onclick = removeImage;
}