document.getElementById("submit-count").onclick = () => {
    let starBox = document.getElementById("stars");
    let numStars = document.getElementById("star-count").value;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        starBox.append(star);
    }
}





window.onload = () => {

}