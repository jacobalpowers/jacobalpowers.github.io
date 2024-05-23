const url = "https://portiaportia.github.io/json/ice-creams.json";

const getIceCream = async () => {
    try {
        return (await fetch(url)).json();
    } catch(error) {
        console.log(error);
    }
};

const showIceCream = async () => {
    const json = await getIceCream();
    const iceCreamList = document.getElementById("ice-cream-list");
    
    json.forEach(async (item) => {
        const iceCreamSection = document.createElement("div");
        iceCreamSection.classList.add("ice-cream-item");


        const img = document.createElement("img");
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${item.image}`;
        iceCreamSection.append(img);

        const name = document.createElement("p");
        name.innerHTML = item.name;
        iceCreamSection.append(name);

        iceCreamSection.onmouseover = () => {
            name.setAttribute("display", "block");
        };
        iceCreamList.append(iceCreamSection);
    });
}





window.onload = () => {
    showIceCream();
}