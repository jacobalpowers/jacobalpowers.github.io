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
    
    json.forEach(async (e) => {
        console.log(e);
    });
}

window.onload = () => {
    
}