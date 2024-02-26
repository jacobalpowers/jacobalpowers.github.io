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
        projectDescription.innerText = this.description;

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
        "assignments10.png", 
        "This assignment is designed to show the use of arrays and interval functions"));
    /*assignments.push(new Assignment(
        "Assignment 10 - Classes", 
        "assignments/assignment10/index.html", 
        "assignment10.png", 
        "This assignment was designed to introduce students to the concept of classes within JS, and the implementation available to us with their use."));*/


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




    for (let i in assignments) {
        assignmentList.append(assignments[i].formatted);
    }
    for (let i in projects) {
        projectList.append(projects[i].formatted);
    }
}