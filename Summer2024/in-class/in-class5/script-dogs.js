class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //Expand / Contract Arrow
        const arrow = document.createElement("a");
        arrow.href = "#";
        arrow.classList.add("arrow");
        arrow.innerHTML="&#x2964;"
        h3.append(arrow);


        //Set up columns
        const column = document.createElement("div");
        column.classList.add("columns");
        section.append(column);

        //Set up sections
        const imgSection = document.createElement("section");
        column.append(imgSection);

        const dataSection = document.createElement("section");
        column.append(dataSection);

        //Image Section
        const img = document.createElement("img");
        img.setAttribute("src", this.pic);
        imgSection.append(img);

        //Data Section
        dataSection.classList.add("hidden", "more");
        dataSection.append(this.paragraph("Breed", this.breed));
        dataSection.append(this.paragraph("Color", this.color));
        dataSection.append(this.paragraph("Age", this.age));
        dataSection.append(this.paragraph("Size", this.size));
        
        arrow.onclick = () => {
            if (dataSection.classList.contains("hidden")) {
                arrow.innerHTML = "&#x2962;"
            } else {
                arrow.innerHTML = "&#x2964;"
            }
            dataSection.classList.toggle("hidden");
        };

        return section;
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }

}

const dogs = [];
dogs.push(new Dog("Charlie", "Yorkie", "Black", 5, "small", "images/yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "med", "images/golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pitt Bull", "White", 3, "large", "images/pitt-bull.jpg"));


dogs.forEach((dog)=> {
    document.getElementById("dog-list").append(dog.item);
});