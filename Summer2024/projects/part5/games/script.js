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
    const list = document.getElementById("item-list");
    
    json.forEach(async (e) => {
        const div = document.createElement("div");
        div.classList.add("game-item");

        const img = document.createElement("img");
        img.src = `../images/${e.image}`;
        div.append(img);

        const text = document.createElement("div");
        text.id = "text-section";

        const title = document.createElement("p");
        title.innerHTML = `${e.title}`;
        text.append(title);

        const release = document.createElement("p");
        release.innerHTML = `${e["release-date"]}`;
        text.append(release);

        const ranking = document.createElement("p");
        ranking.innerHTML = `Rank: ${e.rank}`;
        text.append(ranking);

        const price = document.createElement("p");
        price.innerHTML = `$${e.price}`;
        text.append(price);

        div.append(text);
        list.append(div);
    });
}

displayGames();

window.onload = () => {

}