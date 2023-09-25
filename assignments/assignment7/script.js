var complete = 0;

const exercise_1_click = () => {
    const exercise1 = document.getElementById("exercise_1");
    const exercise2 = document.getElementById("exercise_2");
    exercise1.style.borderBottomColor = "salmon";
    exercise2.style.borderBottomColor = "transparent";
    document.getElementById("whos_the_oldest").style.display = "table";
    document.getElementById("thermometer").style.display = "none";
}
const exercise_2_click = () => {
    const exercise1 = document.getElementById("exercise_1");
    const exercise2 = document.getElementById("exercise_2");
    exercise1.style.borderBottomColor = "transparent";
    exercise2.style.borderBottomColor = "salmon";
    document.getElementById("whos_the_oldest").style.display = "none";
    document.getElementById("thermometer").style.display = "block";
}
const toggle_nav = () => {
    document.getElementById("exercises").classList.toggle("hidden");
}
const validate_info = () => {
    const name1 = document.getElementById("name_1").value;
    const name2 = document.getElementById("name_2").value;
    const name3 = document.getElementById("name_3").value;
    const age1 = document.getElementById("age_1").value;
    const age2 = document.getElementById("age_2").value;
    const age3 = document.getElementById("age_3").value;

    if (is_blank(name1) || 
        is_blank(name2) || 
        is_blank(name3) ||
        is_blank(age1) ||
        is_blank(age2) ||
        is_blank(age3)
        ) {
            console.debug("Element is blank");
            return false;
        }
    if (is_not_number(age1) ||
        is_not_number(age2) ||
        is_not_number(age3)) {
            console.debug("Age is not number");
            return false;
        }
    return true;
}
const is_blank = (data) => {
    if (data.trim() == "") {
        return true;
    }
    return false;
}
const is_not_number = (data) => {
    if (isNaN(data)) {
        return true;
    }
    return false;
}


const compare_age = () => {
    const name1 = document.getElementById("name_1").value;
    const name2 = document.getElementById("name_2").value;
    const name3 = document.getElementById("name_3").value;
    const age1 = document.getElementById("age_1").value;
    const age2 = document.getElementById("age_2").value;
    const age3 = document.getElementById("age_3").value;

    if (!validate_info()) {
        document.getElementById("o_y_output").innerHTML = "Oldest to youngest: Invalid Information";
        return false;
    }

    if (age1 > age2 && age1 > age3) {
        if (age2 > age3) {
            document.getElementById("o_y_output").innerHTML = "Oldest to youngest: " + name1 + ", " + name2 + ", " + name3;
        } else {
            document.getElementById("o_y_output").innerHTML = "Oldest to youngest: " + name1 + ", " + name3 + ", " + name2;
        }
    } else if (age2 > age1 && age2 > age3) {
        if (age1 > age3) {
            document.getElementById("o_y_output").innerHTML = "Oldest to youngest: " + name2 + ", " + name1 + ", " + name3;
        } else {
            document.getElementById("o_y_output").innerHTML = "Oldest to youngest: " + name2 + ", " + name3 + ", " + name1;
        }
    } else {
        if (age1 > age2) {
            document.getElementById("o_y_output").innerHTML = "Oldest to youngest: " + name3 + ", " + name1 + ", " + name2;
        } else {
            document.getElementById("o_y_output").innerHTML = "Oldest to youngest: " + name3 + ", " + name2 + ", " + name1;
        }
    }
}


window.onload = () => {
    document.getElementById("exercise_1").onclick = exercise_1_click;
    document.getElementById("exercise_2").onclick = exercise_2_click;
    document.getElementById("hamburger_menu").onclick = toggle_nav;
    document.getElementById("compare_ages").onclick = compare_age;
}