class Composer {
    constructor(name, img, birth_place, age, birth_date, death_date, famous_work, description) {
        this.name = name;
        this.img = img;
        this.birth_place = birth_place;
        this.age = age;
        this.birth_date = birth_date;
        this.death_date = death_date;
        this.famous_work = famous_work;
        this.description = description
    }

    get details () {
        const composerItem = document.createElement("section");
        composerItem.classList.add("composer");

        //add basic items to composer
        const name = document.createElement("h3");
        name.innerHTML = this.name;
        composerItem.append(name);

        const img = document.createElement("img");
        img.src = "images/" + this.img;
        composerItem.append(img);

        composerItem.onclick = () => {
            document.getElementById("id01").style.display = "block";
            const content = document.getElementById("main-modal-content");
            content.innerHTML = "";
            content.append(this.expandedSection());
        }

        return composerItem;
    }

    expandedSection () {
        const moreInfo = document.createElement("section");

        //seperating expanded into two flex items
        const left = document.createElement("div");
        left.classList.add("flexItem");
        moreInfo.append(left);
        const right = document.createElement("div");
        right.classList.add("flexItem");
        moreInfo.append(right);

        //populating left section
        const title = document.createElement("h3");
        title.innerHTML = this.name;
        left.append(title);

        left.append(this.populateData("Birth Place", this.birth_place));
        left.append(this.populateData("Birth Date", this.birth_date));
        left.append(this.populateData("Death Date", this.death_date));
        left.append(this.populateData("Age", this.age));
        left.append(this.populateData("Famous Works", this.famous_work));
        left.append(this.populateData("Description", this.description));

        //populating right section
        const img = document.createElement("img");
        img.src = "images/" + this.img;
        right.append(img);
        return moreInfo;
    }

    populateData (sectionTitle, data) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${sectionTitle}: </strong>${data}`;
        return p;
    }
}




const composers = [];
composers.push(new Composer("Wolfgang Amadeus Mozart", "mozart.jpg", "Salzburg", "35", "27 January 1756","5 December 1791", "Symphony No. 40", "Wolfgang Amadeus Mozart was a prolific and influential composer of the Classical period. Despite his short life, his rapid pace of composition resulted in more than 800 works of virtually every Western classical genre of his time. Many of these compositions are acknowledged as pinnacles of the symphonic, concertante, chamber, operatic, and choral repertoire."));
composers.push(new Composer("Ludwig van Beethoven", "beethoven.jpg", "Bonn", "56", "17 December 1770", "26 March 1827", "Fur Elise", "Ludwig van Beethoven was a German composer and pianist. He is one of the most revered figures in the history of Western music; his works rank among the most performed of the classical music repertoire and span the transition from the Classical period to the Romantic era in classical music."));
composers.push(new Composer("Johann Sebastian Bach", "bach.jpg", "Eisenach", "65", "31 March 1685", "28 July 1750", "Air on the G String", "Johann Sebastian Bach was a German composer and musician of the late Baroque period."));
composers.push(new Composer("Frederic Chopin", "chopin.jpeg", "Zelazowa Wola", "39", "31 March 1810", "17 October 1849", "Nocturnes, Op. 9", "Frédéric François Chopin was a Polish composer and virtuoso pianist of the Romantic period, who wrote primarily for solo piano. He has maintained worldwide renown as a leading musician of his era, one whose \"poetic genius was based on a professional technique that was without equal in his generation\"."));
composers.push(new Composer("Pyotr Ilyich Tchaikovsky", "tchaikovsky.jpg", "Votkinsk", "53", "7 May 1840", "6 November 1893", "Swan Lake", "Pyotr Ilyich Tchaikovsky was a Russian composer of the Romantic period. He was the first Russian composer whose music would make a lasting impression internationally."));
composers.push(new Composer("John Williams", "williams.jpg", "New York City", "92", "February 8, 1932", "Alive", "Jurassic Park", "John Towner Williams is an American composer and conductor. In a career that has spanned seven decades, he has composed some of the most popular, recognizable and critically acclaimed film scores in cinema history. He has a very distinct sound that mixes romanticism, impressionism and atonal music with complex orchestration."));


//Really unsure as to why this wasn't working outside of the onload. This was the only solution I found.
window.onload = () => {
    composers.forEach((item) => {
        document.getElementById("composer-items").append(item.details);
    });
}
