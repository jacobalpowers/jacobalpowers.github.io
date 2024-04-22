const src  = "https://jacobalpowers-github-io.onrender.com/"


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getJSON = async () => {
    try {
        let response = await fetch(src + "api/cards");
        return await response.json();
    } catch(error) {
        console.log("error retrieving JSON");
        return "";
    }
};

const populatePage = () => {
    const recentPurchases = document.getElementById("recent_purchases");
    const recentSales = document.getElementById("recent_sales");
    createDisplay(recentPurchases, 5);
    createDisplay(recentSales, 5);
}

const createDisplay = async (dest, times) => {
    let cardJSON = await getJSON();
    const cardList = document.getElementById("card_list");
    if (cardJSON == "") {
        return;
    }
    for (var i = 0; i < times; i++) {
        const cardDisplay = document.createElement("div");
        cardDisplay.classList.add("card_display");

        var random = getRandomInt(cardJSON.length);
        const currentCard = cardJSON[random];

        const image = document.createElement("img");
        image.src = "images/" + currentCard.img;
        cardDisplay.append(image);

        const cardText = document.createElement("div");
        cardText.id = "card_text";

        const cardName = document.createElement("p");
        cardName.innerText = currentCard.name;
        cardText.append(cardName);

        const cardSet = document.createElement("p");
        cardSet.innerText = currentCard.set;
        cardText.append(cardSet);

        const cardPrice = document.createElement("p");
        cardPrice.innerText = "$" + (Math.floor((getRandomInt(150) + Math.random()) * 100) / 100).toFixed(2);
        cardText.append(cardPrice);
        cardDisplay.append(cardText);
        dest.append(cardDisplay);
    }
}


window.onload = () => {
    populatePage();
}