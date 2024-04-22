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

    get section() {
        const composerSection = document.createElement("section");
        composerSection.classList.add("composer-item");
        const composerName = document.createElement("h3");
        const composerImg = document.createElement("img")
        composerName.innerText = this.name;
        composerImg.src = "images/" + this.img;
        composerSection.append(composerName);
        composerSection.append(composerImg);
        composerSection.onclick = () => changeModal(this);

        return composerSection;
    }

    get details() {

        const expandedSection = document.createElement("section");
        expandedSection.id = "more-details";
        const text = document.createElement("div");
        text.id = "text";

        const site_name = document.createElement("h2");
        site_name.innerText = this.name;
        
        const site_birth_place = document.createElement("p");
        site_birth_place.innerHTML = "<b>Birth Place: </b>" + this.birth_place;

        const site_age = document.createElement("p");
        site_age.innerHTML = "<b>Age: </b>" + this.age;

        const site_birth_date = document.createElement("p");
        site_birth_date.innerHTML = "<b>Birth Date: </b>" + this.birth_date;

        const site_death_date = document.createElement("p");
        site_death_date.innerHTML = "<b>Death Date: </b>" + this.death_date;

        const site_famous_work = document.createElement("p");
        site_famous_work.innerHTML = "<b>Famous Work: </b>" + this.famous_work;

        const site_description = document.createElement("p");
        site_description.innerText = this.description;

        const credits = document.createElement("p");
        credits.innerHTML = "All information was found on these artist's respective <a href=\"wikipedia.com\">Wikipedia</a> pages.";

        text.append(site_name);
        text.append(site_birth_place);
        text.append(site_age);
        text.append(site_birth_date);
        text.append(site_death_date);
        text.append(site_famous_work);
        text.append(site_description);
        text.append(credits);
        expandedSection.append(text);

        const picture = document.createElement("div");
        picture.id = "picture";

        const site_image = document.createElement("img");
        site_image.src = "images/" + this.img;

        picture.append(site_image);
        expandedSection.append(picture);

        return expandedSection;
    }

    get getComposerItem() {
        return this;
    }
}

const changeModal = (composor)  => {
    const modal = document.getElementById("id01");
    const site_section = document.getElementById("more-details");
    site_section.replaceWith(composor.details);
    modal.style.display = "block";
    return;
}

window.onload = () => {
    let composers = [];
    let composerList = document.getElementById("composer-list");

    composers.push(new Composer("Wolfgang Amadeus Mozart", "mozart.jpg", "Salzburg", "35", "27 January 1756","5 December 1791", "Symphony No. 40", "Wolfgang Amadeus Mozart was a prolific and influential composer of the Classical period. Despite his short life, his rapid pace of composition resulted in more than 800 works of virtually every Western classical genre of his time. Many of these compositions are acknowledged as pinnacles of the symphonic, concertante, chamber, operatic, and choral repertoire."));
    composers.push(new Composer("Ludwig van Beethoven", "beethoven.jpg", "Bonn", "56", "17 December 1770", "26 March 1827", "Fur Elise", "Ludwig van Beethoven was a German composer and pianist. He is one of the most revered figures in the history of Western music; his works rank among the most performed of the classical music repertoire and span the transition from the Classical period to the Romantic era in classical music."));
    composers.push(new Composer("Johann Sebastian Bach", "bach.jpg", "Eisenach", "65", "31 March 1685", "28 July 1750", "Air on the G String", "Johann Sebastian Bach was a German composer and musician of the late Baroque period."));
    composers.push(new Composer("Frederic Chopin", "chopin.jpeg", "Zelazowa Wola", "39", "31 March 1810", "17 October 1849", "Nocturnes, Op. 9", "Frédéric François Chopin was a Polish composer and virtuoso pianist of the Romantic period, who wrote primarily for solo piano. He has maintained worldwide renown as a leading musician of his era, one whose \"poetic genius was based on a professional technique that was without equal in his generation\"."));
    composers.push(new Composer("Pyotr Ilyich Tchaikovsky", "tchaikovsky.jpg", "Votkinsk", "53", "7 May 1840", "6 November 1893", "Swan Lake", "Pyotr Ilyich Tchaikovsky was a Russian composer of the Romantic period. He was the first Russian composer whose music would make a lasting impression internationally."));
    composers.push(new Composer("John Williams", "williams.jpg", "New York City", "92", "February 8, 1932", "Alive", "Jurassic Park", "John Towner Williams is an American composer and conductor. In a career that has spanned seven decades, he has composed some of the most popular, recognizable and critically acclaimed film scores in cinema history. He has a very distinct sound that mixes romanticism, impressionism and atonal music with complex orchestration."));
    

    for (let i in composers) {
        composerList.append(composers[i].section);
    }
    const site_composers = document.getElementsByClassName("composer-item");
    site_composers.onclick = changeModal;
    
    

}