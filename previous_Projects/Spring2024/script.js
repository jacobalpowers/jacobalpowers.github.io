class Assignment {
    constructor(title, link, image, description, secondAddress = "") {
        this.title = title;
        this.link = link;
        this.image = image;
        this.description = description;
        this.secondAddress = secondAddress;
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
        if (this.html != "") {
            const assignmentSecondAddress = document.createElement("p");
            assignmentSecondAddress.innerHTML = this.secondAddress;
            assignmentDiv.appendChild(assignmentSecondAddress);
        }
        return assignmentDiv;
    }
}
class Project {
    constructor(title, link, image, description) {
        this.title = title;
        this.link = link;
        this.image = image;
        this.description = description;
    }

    get formatted() {
        const projectDiv = document.createElement("div");
        projectDiv.setAttribute("onclick", "location.href=\"" + this.link + "\"");
        projectDiv.classList.add("project-item");

        const projectTitle = document.createElement("h3");
        projectTitle.innerText = this.title;

        const projectImage = document.createElement("img");
        projectImage.setAttribute("src", "images/" + this.image);

        const projectDescription = document.createElement("p");
        projectDescription.innerHTML = this.description;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectDescription);

        return projectDiv;
    }
}




window.onload = () => {
    let assignments = [];
    let assignmentList = document.getElementById("assignments");
    let projects = [];
    let projectList = document.getElementById("projects");

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
        "This assignment was designed to teach students about flexboxes and the complex dynamic displays that can be created with them."));
    assignments.push(new Assignment(
        "Assignment 4 - Main Page CSS", 
        "#", 
        "assignment4.png", 
        "This assignment was to redesign the page you see currently. This was in an attempt to allow users to have a \"landing page\" to view all assignments from."));
    /*assignments.push(new Assignment(
        "Assignment 5 - Recreate CSS Page", 
        "assignments/assignment5/index.html", 
        "assignment5.png", 
        "This assignmnet was to recreate the U of SC research home page. This was done to ensure that students were comfortable with designing CSS based on only seeing a page."));*/
    assignments.push(new Assignment(
        "Assignment 6 - Main Page Projects Section", 
        "#", 
        "assignment4.png", 
        "This assignmnet was to reformat the main page to include the semester long project updates on the main menu."));
    assignments.push(new Assignment(
        "Assignment 7 - JavaScript, Buttons, Functions, and more", 
        "assignments/assignment7/index.html", 
        "assignment7.png", 
        "This assignmnet was our introduction to JavaScript in context of HTML. This was a simple assignment to give a fundimental understanding on how to implement scripts into our webpages."));
    assignments.push(new Assignment(
        "Assignment 8 - If Statements", 
        "assignments/assignment8/index.html", 
        "assignment8.png", 
        "This assignmnet was to introduce If Statements and how to implement them with JS."));
    assignments.push(new Assignment(
        "Assignment 9 - Loops", 
        "assignments/assignment9/index.html", 
        "assignment9.png", 
        "This assignmnet was to take concepts found in the previous assignment and build upon them farther with for loops and Intervals."));
    assignments.push(new Assignment(
        "Assignment 10 - Arrays", 
        "assignments/assignment10/index.html", 
        "assignment10.png", 
        "This assignment is designed to show the use of arrays and interval functions"));
    assignments.push(new Assignment(
        "Assignment 11 - Classes", 
        "assignments/assignment11/index.html", 
        "assignment11.png", 
        "This assignment was designed to introduce students to the concept of classes within JS, and the implementation available to us with their use."));
    assignments.push(new Assignment(
        "Assignment 12 - Parsing JSON", 
        "assignments/assignment12/index.html", 
        "assignment12.png", 
        "This assignment functions as a way to introduce students to interacting with JSON documents as well as to help students learn to interact with elements outside of their local environment."));
    assignments.push(new Assignment(
        "Assignment 13 - Node Hello World", 
        "", 
        "assignment13.png", 
        "This assignment is an introduction to using Node.JS and Render to communicate with an outside server",
        "<a href=\"https://github.com/jacobalpowers/node-helloworld/blob/main/app.js\">Github</a><br><a href=\"https://helloworld-demo-o7sx.onrender.com\">Render Live</a>"));
    assignments.push(new Assignment(
        "Assignment 14 - Reading Server Side JSON", 
        "", 
        "assignment14.png", 
        "This assignment introduces reading JSON from a server and getting it to display on a client's system.",
        "<a href=\"https://github.com/jacobalpowers/csce242-assignment14\">Github</a><br><a href=\"https://csce242-assignment14-yx60.onrender.com\">Render Live</a>"));
    assignments.push(new Assignment(
        "Assignment 15 - Server Get and Post", 
        "", 
        "assignment15.png", 
        "This assignment introduces sending files and data to a server for the files to be stored locally and then displayed on the website.",
        "<a href=\"https://github.com/jacobalpowers/csce242-assignment15\">Github</a><br><a href=\"https://csce242-assignment15.onrender.com\">Render Live</a>"));
    assignments.push(new Assignment(
        "Assignment 17 - Server Edit and Delete", 
        "", 
        "assignment17.png", 
        "This assignment continues the previous assignment and pushes developers to learn to edit and delete items in a database.",
        "<a href=\"https://github.com/jacobalpowers/csce242-assignment17\">Github</a><br><a href=\"https://csce242-assignment17-kaab.onrender.com\">Render Live</a>"));
    assignments.push(new Assignment(
        "Assignment 18 - Server CRUD with MongoDB", 
        "", 
        "assignment17.png", 
        "This assignment continues the previous assignment and integrates databases onto MongoDB rather than locally.",
        "<a href=\"https://github.com/jacobalpowers/csce242-assignment17\">Github</a><br><a href=\"https://csce242-assignment18-iqe2.onrender.com\">Render Live</a>"));


    projects.push(new Project(
        "Project 1 - Topic Selection", 
        "projects/part1/Semester Project Pt 1 - Topic Selection.pdf", 
        "project1.png", 
        "This is the initial write-up for my semester project topic."));
    projects.push(new Project(
        "Project 2 - Topic Selection", 
        "projects/part2/index.html", 
        "project2.png", 
        "This is the basic wireframe of the \"Shop 4 Cards\" project."));
    /*projects.push(new Project(
        "Project 3 - HTML and CSS", 
        "projects/part3/home.html", 
        "project3.png", 
        "This is the HTML and CSS foundations for the \"Shop 4 Cards\" project."));*/
    projects.push(new Project(
        "Project 7 - Backend Implementation", 
        "https://jacobalpowers-github-io.onrender.com", 
        "project7.png", 
        "This is the final result for the \"Shop 4 Cards\" project."));




    for (let i in assignments) {
        assignmentList.append(assignments[i].formatted);
    }
    for (let i in projects) {
        projectList.append(projects[i].formatted);
    }
}