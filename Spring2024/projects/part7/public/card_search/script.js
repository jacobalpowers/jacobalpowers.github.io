const src  = "https://jacobalpowers-github-io.onrender.com/"


const getJSON = async () => {
    try {
        let response = await fetch(src + "api/cards");
        return await response.json();
    } catch(error) {
        console.log("error retrieving JSON");
        return "";
    }
};

const showCards = async () => {
    let cardJSON = await getJSON();
    const cardList = document.getElementById("card_list");
    if (cardJSON == "") {
        return;
    }


    cardJSON.forEach(card =>  {
        let cardItem = document.createElement("div");
        cardItem.classList.add("card_item");

        let cardImg = document.createElement("img");
        cardImg.src = "../images/" + card.img; 
        cardItem.append(cardImg);

        let titles = document.createElement("dim");
        titles.id = titles;

        let cardName = document.createElement("h3");
        cardName.innerText = card.name;

        let gameName = document.createElement("h4");
        gameName.innerText = card.game;

        let setName = document.createElement("h5");
        setName.innerText = card.set;

        titles.append(cardName);
        titles.append(gameName);
        titles.append(setName);
        cardItem.append(titles);
        cardList.append(cardItem);
    });
}

window.onload = () => {
    showCards();
}