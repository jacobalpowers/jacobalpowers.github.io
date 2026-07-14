let stars = 0;
const makeStars = () => {
    let starBox = document.getElementById("stars");
    let numStars = parseInt(document.getElementById("star-count").value);
    console.log(numStars);
    if (!validateInput(parseInt(numStars))) {
        return;
    }

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.id = stars;
        let top = Math.random() * 99;
        let left = Math.random() * 99;
        star.style.top = top + "%";
        star.style.left = left + "%";
        star.onclick = function() {returnStar(star)};
        starBox.append(star);
        stars += 1;
    }
}

const validateInput = (e) => {
    let errMSG = document.getElementById("error-msg");
    if (isNaN(e)) {
        errMSG.innerHTML = "* Must be a number";
        return false;
    }
    if (e < 0) {
        errMSG.innerHTML = "* Must be a positive number";
        return false;
    }
    errMSG.innerHTML = "";
    return true;
}

function returnStar(star) {
    alert(star.id);
}



window.onload = () => {
    document.getElementById("submit-count").onclick = makeStars;
}