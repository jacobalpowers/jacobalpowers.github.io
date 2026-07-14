//toggling nav-bar 
document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

let funds = 0;
let goal = 10000;
document.getElementById("btn-funds").onclick = () => {
    let fundsInput = document.getElementById("txt-funds").value;

    if (isNaN(fundsInput)) {
        errorFunds.innerHTML = "* Not a Number";
        return;
    } else if(funds < 0) {
        errorFunds.innerHTML("* Number needs to be >= 0");
        return;
    }


    funds = (fundsInput/goal) * 100 + "%";
    document.querySelector(":root").style.setProperty("--funds", funds);
}

//loops
document.getElementById("btn-loops").onclick = () => {
    const result = document.getElementById("loops-result");

    for(let i=0; i < 10; i++){
        const p = document.createElement("p");
        p.innerHTML = i+1;
        result.append(p);
    }
}

//loops with input
document.getElementById("btn-input-loops").onclick = () => {
    let result = document.getElementById("loops-input-result");
    let start = document.getElementById("start-loop").value;
    let end = document.getElementById("end-loop").value;
    console.log(start + " " + end);

    for (let i = start; i < end; i++) {
        console.log(i);
        const p = document.createElement("li");
        p.innerText = i;
        result.append(p);
    }
}