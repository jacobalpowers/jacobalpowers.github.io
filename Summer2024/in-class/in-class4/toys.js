const toys = ["drum", "ball", "rope", "balloon", "tire"];
const toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 2.3;
toyPrices["bike"] = 5.6;

const showToys = () => {
    const display = document.getElementById("toy-display");
    
    /*for (let i in toys) {
        let p = document.createElement("p");
        p.innerHTML = toys[i];
        display.append(p);
    }*/

    toys.forEach((toy)=>{
        let p = document.createElement("p");
        p.innerHTML = toy;
        display.append(p);
    });

}

showToys();


//Showing Toy Table 
/*const showToyTable = () => {
    console.log(toyPrices);
}*/

//Automatically executing an anonymous function
(() => {
    const toyTable = document.getElementById("toy-table");

    for (let toy in toyPrices) {
        const row = document.createElement("tr");

        //Toy Column
        const col1 = document.createElement("td");
        col1.innerHTML = toy;
        row.append(col1);

        //Price Column
        const col2 = document.createElement("td");
        col2.innerHTML = "$" + toyPrices[toy];
        row.append(col2);

        //add click to row
        row.onclick = () => {
            document.getElementById("details").innerHTML = `${toy} costs: $${toyPrices[toy]}`;
        };

        document.getElementById("toy-table").append(row);
    }
})();