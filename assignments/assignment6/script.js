const roll = () => {
    const mountain = document.getElementById("emoji");
    mountain.classList.add("roll");
}
const show = () => {
    const img = document.getElementById("blank-img");
    img.style.display = 'inline';
}
const hide = () => {
    const img = document.getElementById("blank-img");
    img.style.display = 'none';
}

const writeMessage = () => {
    const productName = document.getElementById("prod-name").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;
    const userName = document.getElementById("user-name").value;

    document.getElementById("comment-list").innerHTML +=
        "<div class= \"comment-item\">" +
        "<h2>"+productName+"</h2>" + 
        "<p>" + rating + " " + comment + "</p>" +
        "<p>by: " + userName + "</p>" +
        "</div>";
}

window.onload = () => {
    document.getElementById("show").onclick = show;
    document.getElementById("hide").onclick = hide;
    document.getElementById("dance").onclick = roll;
    document.getElementById("add-comment").onclick = writeMessage;
}