class Toy {
    constructor(title, img, price, age, rating) {
        this.title = title;
        this.img = img;
        this.price = price;
        this.age = age;
        this.rating = rating;
    }

    get details() {
        const toySection = document.createElement("section");
        toySection.classList.add("toy-item");

        const toyTitle = document.createElement("p");
        toyTitle.setAttribute("class", "bold");
        toyTitle.innerText = this.title;

        const toyImg = document.createElement("img");
        toyImg.setAttribute("src", "images/" + this.img);

        const priceTitle = document.createElement("p");
        priceTitle.setAttribute("class", "bold");
        priceTitle.innerText = "Price: ";

        const toyPrice = document.createElement("p");
        toyPrice.setAttribute("class", "value");
        toyPrice.innerText = this.price;

        const ageTitle = document.createElement("p");
        ageTitle.setAttribute("class", "bold");
        ageTitle.innerText = "Age Range: ";

        const toyAge = document.createElement("p");
        toyAge.setAttribute("class", "value");
        toyAge.innerText = this.age;

        const ratingTitle = document.createElement("p");
        ratingTitle.setAttribute("class", "bold");
        ratingTitle.innerText = "Rating: ";

        const toyRating = document.createElement("p");
        toyRating.setAttribute("class", "value");
        toyRating.innerText = this.rating;

        toySection.appendChild(toyTitle);
        toySection.appendChild(toyImg);
        toySection.appendChild(priceTitle);
        toySection.appendChild(toyPrice);
        toySection.appendChild(ageTitle);
        toySection.appendChild(toyAge);
        toySection.appendChild(ratingTitle);
        toySection.appendChild(toyRating);

        return toySection;
    }

    get getToyItem() {
        return this;
    }
}

window.onload = () => {
    let toys = [];
    let toyList = document.getElementById("toy-list");

    toys.push(new Toy("Buzz Lightyear", "buzzlightyear.jpg", "$28", "3-7", "4 Stars"));
    toys.push(new Toy("Blocks", "blocks.jpg", "$5", "1-3", "5 Stars"));
    toys.push(new Toy("Lego", "legos.jpg", "$50", "5-11", "3.8 Stars"));
    toys.push(new Toy("Teddy Bear", "teddybear.jpg", "$10", "1-10", "5 Stars"));
    toys.push(new Toy("Gundam", "gundam.jpg", "$75", "12+", "2.8 Stars"));

    for (let i in toys) {
        toyList.append(toys[i].details);
    }

}