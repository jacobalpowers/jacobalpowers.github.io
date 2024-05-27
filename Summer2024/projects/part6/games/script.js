const url = "https://jacobalpowers.github.io/Summer2024/projects/part5/games.json";

const getGames = async () => {
    try {
        const json = (await fetch(url)).json();
        return json;
    } catch(error) {
        console.log(error);
    }
}

//add new form item from form
const addFormItem = (e) => {
    e.preventDefault();
    const form = document.getElementById("new-item");
    const list = document.getElementById("item-list");

    list.append(createGameItem("placeholder.png", form["game-name"].value, form["release-date"].value, form["game-rank"].value, form.price.value));
}

const displayGames = async () => {
    const json = await getGames();
    const list = document.getElementById("item-list");
    
    //display all items in json
    json.forEach(async (e) => {
        list.append(createGameItem(e.image, e.title, e["release-date"], e.rank, e.price));
    });
}

//return game item element
const createGameItem = (img, title, releaseDate, ranking, price) => {
    const div = document.createElement("div");
    div.classList.add("game-item");

    const image = document.createElement("img");
    image.src = `../images/${img}`;
    div.append(image);

    const text = document.createElement("div");
    text.id = "text-section";

    const gameTitle = document.createElement("p");
    gameTitle.innerHTML = `${title}`;
    text.append(gameTitle);

    const gameRelease = document.createElement("p");
    gameRelease.innerHTML = `${releaseDate}`;
    text.append(gameRelease);

    const gameRanking = document.createElement("p");
    gameRanking.innerHTML = `Rank: ${ranking}`;
    text.append(gameRanking);

    const gamePrice = document.createElement("p");
    gamePrice.innerHTML = `$${price}`;
    text.append(gamePrice);
    
    div.append(text);
    
    return div;
}

displayGames();

window.onload = () => {
    document.getElementById("add-item").onclick = () => {
        document.getElementById("id01").style.display = "block";
    }
    document.getElementById("new-item").onsubmit = addFormItem;
}