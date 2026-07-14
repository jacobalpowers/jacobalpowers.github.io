class Child {
    constructor(first, last, picture, grade) {
        this.first = first;
        this.last = last;
        this.picture = picture;
        this.grade = grade
    }

    get tableRow () {
        const tr = document.createElement("tr");
        tr.append(this.tableColumn(this.first));
        tr.append(this.tableColumn(this.last));
        tr.append(this.tableColumn(this.grade));

        tr.onclick = () => {
            const detailsSection = document.getElementById("child-details");
            detailsSection.innerHTML = "";
            const img = document.createElement("img");
            img.src = this.picture;
            detailsSection.append(img);
        }
        return tr;
    }

    tableColumn(data) {
        const td = document.createElement("td");
        td.innerHTML = data;
        return td;
    }
}

const children = [];
children.push(new Child("Amy", "Smith", "images/amy.jpg", 2));
children.push(new Child("Bobby", "White", "images/bobby.png", 3));
children.push(new Child("Collin", "Carlson", "images/carl.png", 1));
children.push(new Child("Dave", "Marks", "images/dave.jpg", 4));
children.push(new Child("Erin", "Young", "images/erin.jpg", 1));

children.forEach((child) => {
    document.getElementById("children-table").append(child.tableRow);
});