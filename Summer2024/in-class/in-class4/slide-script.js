const slide = (nextImage) => {
    const currImage = document.querySelector("#preview :not(.hidden)");
    //Hide current image
    currImage.classList.add("hidden");
    //Show next image
    nextImage.classList.remove("hidden");
}

//Slide Forward
document.getElementById("forward-arrow").onclick = () => {
    const currImage = document.querySelector("#preview :not(.hidden)");
    let nextImg = currImage.nextElementSibling;

    if (nextImg == null) {
        nextImg = document.querySelector("#preview :first-child");
    }
    slide(nextImg);
}

//Slide Backward
document.getElementById("backward-arrow").onclick = () => {
    const currImage = document.querySelector("#preview :not(.hidden)");
    let nextImg = currImage.previousElementSibling;

    if (nextImg == null) {
        nextImg = document.querySelector("#preview :last-child");
    }
    slide(nextImg);
}

//Slide to a clicked thumb
document.querySelectorAll("#thumbs img").forEach((thumb, index) => {
    thumb.onclick = () => {
        const nextImage = document.querySelector(`#preview :nth-child(${index + 1})`)
        slide(nextImage);
    };
});