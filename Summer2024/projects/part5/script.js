const url = "https://jacobalpowers.github.io/Summer2024/projects/part5/games.json";

const getGames = async () => {
    try {
        const json = (await fetch(url)).json();
        return json;
    } catch(error) {
        console.log(error);
    }
}

const displayGames = async () => {
    const json = await getGames();
    const ratings = document.getElementById("high-ratings");
    
    json.forEach(async (e) => {
        const div = document.createElement("div");
        div.classList.add("game-item");

        const img = document.createElement("img");
        img.src = `images/${e.image}`;
        div.append(img);

        const title = document.createElement("p");
        title.innerHTML = `${e.title}`;
        div.append(title);

        const ranking = document.createElement("p");
        ranking.innerHTML = `${e.rank}`;
        div.append(ranking);

        const price = document.createElement("p");
        price.innerHTML = `${e.price}`;
        div.append(price);

        ratings.append(div);
    });
}

displayGames();

window.onload = () => {
    
}