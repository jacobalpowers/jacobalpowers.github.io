class Assignment {
    constructor(title, link, image, description) {
        this.title = title;
        this.link = link;
        this.image = image;
        this.description = description;
    }

    get formatted() {
        const assignmentDiv = document.createElement("div");
        assignmentDiv.setAttribute("onclick", "location.href=\"" + this.link + "\"");
        assignmentDiv.classList.add("assignment-item");

        const assignmentTitle = document.createElement("h3");
        assignmentTitle.innerText = this.title;

        const assignmentImage = document.createElement("img");
        assignmentImage.setAttribute("src", "images/" + this.image);

        const assignmentDescription = document.createElement("p");
        assignmentDescription.innerText = this.description;

        assignmentDiv.appendChild(assignmentTitle);
        assignmentDiv.appendChild(assignmentImage);
        assignmentDiv.appendChild(assignmentDescription);

        return assignmentDiv;
    }


}


window.onload = () => {
    let assignments = [];
    let assignmentList = document.getElementById("assignments");

    assignments.push(new Assignment(
        "Assignment 1 - Basic HTML", 
        "assignments/assignment1/index.html", 
        "assignment1.png", 
        "This assignment was designed to get us comfortable with basic HTML and rudamentary website development."));
    assignments.push(new Assignment(
        "Assignment 2 - Basic CSS", 
        "assignments/assignment2/index.html", 
        "assignment2.png", 
        "This assignment was designed to allow students to learn how to format HTML with CSS and how to make webpages look \"Pretty\"."));
    assignments.push(new Assignment(
        "Assignment 3 - Page Layout", 
        "assignments/assignment3/index.html", 
        "assignment3.png", 
        "This assignmnet was designed to teach students about flexboxes and the complex dynamic displays that can be created with them."));
    assignments.push(new Assignment(
        "Assignment 4 - Main Page CSS", 
        "assignments/assignment4/index.html", 
        "assignment4.png", 
        "This assignment was to redesign the page you see currently. This was in an attempt to allow users to have a \"landing page\" to view all assignments from."));
    assignments.push(new Assignment(
        "Assignment 5 - Recreate CSS Page", 
        "assignments/assignment5/index.html", 
        "assignment5.png", 
        "This assignmnet was to recreate the U of SC research home page. This was done to ensure that students were comfortable with designing CSS based on only seeing a page."));
    assignments.push(new Assignment(
        "Assignment 6 - JavaScript, Buttons, Functions, and more", 
        "assignments/assignment6/index.html", 
        "assignment6.png", 
        "This assignmnet was our introduction to JavaScript in context of HTML. This was a simple assignment to give a fundimental understanding on how to implement scripts into our webpages."));
    assignments.push(new Assignment(
        "Assignment 7 - Conditionals", 
        "assignments/assignment7/index.html", 
        "assignment7.png", 
        "This assignmnet was to farther our understanding of JS and to allow manipulation of conditional statements within the web page itself."));
    assignments.push(new Assignment(
        "Assignment 8 - Loops", 
        "assignments/assignment8/index.html", 
        "assignment8.png", 
        "This assignmnet was an expansion on the previous assignment, and was done to farther expand our understanding on how animations and JS can be used in a webpage."));
    assignments.push(new Assignment(
        "Assignment 9 - Arrays", 
        "assignments/assignment9/index.html", 
        "#", 
        "To Be Completed"));
    assignments.push(new Assignment(
        "Assignment 10 - Classes", 
        "assignments/assignment10/index.html", 
        "assignment10.png", 
        "This assignment was designed to introduce students to the concept of classes within JS, and the implementation available to us with their use."));




    for (let i in assignments) {
        assignmentList.append(assignments[i].formatted);
    }
}