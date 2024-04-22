var currentText = 0;
var interval = 2000;
var banner = ["Look at these gorgeous images",
                "Coming soon to a wall near you!",
                "Call now for a special offer", 
                "These images are so crisp and well designed",
                "Look forward to a lot of this in the future"];
var images = ["images/garden.jpg",
                "images/golden.jpg",
                "images/mountain-lake.jpg",
                "images/small-house.jpg",
                "images/snow.jpg"];

const advertisement_text = () => {
    const text = document.getElementById("ads");
    text.innerText = banner[currentText];

    currentText += 1;
    if (currentText > banner.length - 1) {
        currentText = 0;
    }
    return;
}

const images_and_attributions = () => {
    const picsSection = document.getElementById("pictures");
    for (let i = 0; i < images.length; i++) {
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = images[i];
        const description = document.createElement("div");
        if (i == 0) {
            description.innerHTML = '<p> <a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7">Image by vecstock</a> on Freepik</p>';
        }
        if (i == 1) {
            description.innerHTML = '<p> <a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
        }
        if (i == 2) {
            description.innerHTML = '<p> <a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
        }
        if (i == 3) {
            description.innerHTML = '<p> <a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
        }
        if (i == 4) {
            description.innerHTML = '<p> <a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
        }
        picsSection.appendChild(image);
        picsSection.appendChild(description);
    }
}




window.onload = () => {
    setInterval(advertisement_text, interval);
    images_and_attributions();
}