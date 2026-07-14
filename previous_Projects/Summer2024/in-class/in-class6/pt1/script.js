//https://portiaportia.github.io/json/shoes.json

//get the data from the json file
const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}

//shows list of shoes
const showShoes = async() => {
    const shoes = await getShoes();
    const shoesSection = document.getElementById("shoes-section");

    shoes.forEach((shoe) => {
        shoesSection.append(getShoe(shoe));
    });
}

const getShoe = (shoe) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = shoe.name;
    section.append(h3);

    //price
    const pPrice = document.createElement("p");
    pPrice.innerHTML = "$" + shoe.price;
    section.append(pPrice);

    //description
    const pDescription = document.createElement("p");
    pDescription.innerHTML = shoe.description;
    section.append(pDescription);

    //reviews
    const ul = document.createElement("ul");
    section.append(ul);
    shoe.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);
    });


    return section;
}

showShoes();