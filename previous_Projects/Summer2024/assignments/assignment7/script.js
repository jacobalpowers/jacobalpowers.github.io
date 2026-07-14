let count = 0;
const updateCount = () => {
    let docCount = document.getElementById("count-value");
    count+=1;
    docCount.innerText = count;
}
const randImageUpdate = () => {
    location.reload();
}
const moveImage = () => {
    let img = document.getElementById("to-move");
    let moveVal = document.getElementById("slider-move");
    img.style.translate = moveVal.value + "%";
}




window.onload = () => {
    document.getElementById("count-value").innerText = count;
    document.getElementById("count").onclick = updateCount;
    document.getElementById("rand-img").onclick = randImageUpdate;
    document.getElementById("slider-move").oninput = moveImage;
}