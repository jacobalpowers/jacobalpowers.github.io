document.querySelectorAll(".items section").forEach((section) => {
    section.onclick = () => {
        const dialog = document.getElementById("dialog");
        dialog.style.display = "block";

        //display image
        const imgSrc = section.querySelector("img").src;
        dialog.querySelector("img").src = imgSrc;

        const dialogDetails = document.getElementById("dialog-details");

        //display title
        const title = document.createElement("h3");
        title.innerHTML = section.querySelector("h3").innerHTML;
        dialogDetails.append(title);

        //display description
        const p = document.createElement("p");
        p.innerHTML = section.querySelector("p").innerHTML;
        dialogDetails.append(p);
    }
});

document.querySelector(".w3-button").onclick = () => {
    document.getElementById('dialog').style.display='none'
    document.getElementById("dialog-details").innerHTML = "";
}