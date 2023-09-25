const exercise_1_click = () => {
    const exercise1 = document.getElementById("exercise_1");
    const exercise2 = document.getElementById("exercise_2");
    exercise1.style.borderBottomColor = "salmon";
    exercise2.style.borderBottomColor = "white";
    document.getElementById("whos_the_oldest").style.display("inline");
    document.getElementById("thermometer").style.display("none");
}
const exercise_2_click = () => {
    const exercise1 = document.getElementById("exercise_1");
    const exercise2 = document.getElementById("exercise_2");
    exercise1.style.borderBottomColor = "white";
    exercise2.style.borderBottomColor = "salmon";
    document.getElementById("whos_the_oldest").style.display("none");
    document.getElementById("thermometer").style.display("inline");
}


window.onload = () => {
    document.getElementById("exercise_1").onclick = exercise_1_click;
    document.getElementById("exercise_2").onclick = exercise_2_click;
}