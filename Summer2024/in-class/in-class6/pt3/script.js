const url = "https://www.thecocktaildb.com/api/json/v1/1/"

const getSearch = async (search) => {
    try {
        const returnValue = (await (fetch(url + `search.php?s=${search}`))).json();
        return returnValue;
      } catch (error) {
        console.log(error);
      }
};

const searchName = async () => {
    const search = document.getElementById("search").value;
    console.log(search);
    const cocktailList = document.getElementById("cocktails");
    cocktailList.innerHTML = "";
    const drinks = (await getSearch(search)).drinks;
    
    console.log(drinks);
    drinks.forEach = (drink) => {
        const section = document.createElement("section");
        cocktailList.append(section);

        const drinkName = document.createElement("h3");
        drinkName.innerHTML = drink.strDrink;
        section.append(drinkName);
    }
};

window.onload = () => {
    document.getElementById("search").oninput = () => {
        searchName();
    };
}