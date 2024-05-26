const url = "https://jacobalpowers.github.io/Summer2024/projects/part5/games.json";

const getGames = async () => {
    try {
        const json = (await fetch(url)).json();
        return json;
    } catch(error) {
        console.log(error);
    }
}

//Display details of game to detailed page
const displayGame = async (game) => {
    const img = document.querySelector("#pt1 img");
    const title = document.getElementById("game-name");
    const subTexts = document.getElementById("sub-texts");
    const subContent = document.getElementById("sub-content");

    //Display image
    img.src = `../images/${game.image}`;
    //Display title
    title.innerHTML = game.title;

    //Rankings Ratings and Player Count
    const rankRatingPlayer = document.createElement("div");
    rankRatingPlayer.classList.add("text-items");
    rankRatingPlayer.id = "rank-rating-players";

    const rank = document.createElement("p");
    rank.innerHTML = `Rank: ${game.rank}`;
    rankRatingPlayer.append(rank);

    const rating = document.createElement("p");
    rating.innerHTML = `Avg Rating: ${game.avgRating}`;
    rankRatingPlayer.append(rating);

    const numPlayers = document.createElement("p");
    numPlayers.innerHTML = `Number of Players = ${game.numPlayers}`;
    rankRatingPlayer.append(numPlayers);

    subTexts.append(rankRatingPlayer);

    //Playtime Age and Website
    const playtimeAgeWebsite = document.createElement("div");
    playtimeAgeWebsite.classList.add("text-items");
    playtimeAgeWebsite.id = "playtime-age-website";

    const playtime = document.createElement("p");
    playtime.innerHTML = `Avg Playtime: ${game.playtime}`;
    playtimeAgeWebsite.append(playtime);

    const age = document.createElement("p");
    age.innerHTML = `${game.avgRating}+`;
    playtimeAgeWebsite.append(age);

    const website = document.createElement("p");
    website.innerHTML = "Game Website";
    website.href = game.website;
    playtimeAgeWebsite.append(website);

    subTexts.append(playtimeAgeWebsite);

    //Display misc information
    const designer = document.createElement("p");
    designer.innerHTML = `Designer(s): ${game.designer}`;
    subContent.append(designer);

    const artist = document.createElement("p");
    artist.innerHTML = `Artist(s): ${game.artists}`;
    subContent.append(artist);
}





window.onload = async () => {
    const json = await getGames();
    displayGame(json[0]);
}