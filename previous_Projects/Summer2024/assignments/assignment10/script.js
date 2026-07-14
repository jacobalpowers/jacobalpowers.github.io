const imageList = [];
imageList["images\\birthday.jpg"] = "<h3>Birthday</h3>It's your birthday!";
imageList["images\\clown.jpg"] = "<h3>Clown</h3>Look a clown!";
imageList["images\\rain.jpg"] = "<h3>Rain</h3>Better pull out an umbrella!";
imageList["images\\read.jpg"] = "<h3>Read</h3>What a nice book.";
imageList["images\\shovel.jpg"] = "<h3>Shovel</h3>Gardening time!";
imageList["images\\work.jpg"] = "<h3>Work</h3>Time to finish up work.";

//Populating images on website with onclicks
const populateImages = () => {
    const docList = document.getElementById("image-list");
    console.log(docList);
    
    for (let i in imageList) {
        console.log(i);
        let currImg = document.createElement("img");
        currImg.setAttribute("src", i);

        //On image click display text associated with image
        currImg.onclick = () => {
            document.getElementById("output").innerHTML = imageList[i];
        }
        docList.append(currImg);
    }
};

window.onload = () => {
    populateImages();
}