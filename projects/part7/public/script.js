
const convertJSON = async () => {
    const url = "https://jacobalpowers-github-io.onrender.com/api/cards";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }




    /*for (let i in cardJSON) {
        let i = cardJSON.find()
        const cardClass = new Card({
            _id: i._id,
            name: i.name,
            game: i.game,
            set: i.set,
            img: i.img,
            description: i.description,
        });
        const result = await cardClass.save();
        console.log(result);
    }*/
};
//convertJSON();

const showCards = async () => {
    let cards = convertJSON();
    console.log(cards);
}




window.onload = () => {
    let cardDisplays = document.getElementsByClassName("card_display");
    showCards();
}