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
        "Basic CSS fundamentals."));
    assignments.push(new Assignment(
        "Assignment 3 - Layout with Flex", 
        "assignments/assignment3/index.html", 
        "assignment3.png", 
        "Basic Flexboxing with mobile reframing."));
    assignments.push(new Assignment(
        "Assignment 4 - Main Page CSS", 
        "#", 
        "assignment4.png", 
        "Formatting this main assignment page."));
    assignments.push(new Assignment(
        "Assignment 5 - Recreate CSS Page", 
        "assignments/assignment5/index.html", 
        "assignment5.png", 
        "Recreating a website using just HTML and CSS from scratch."));
    assignments.push(new Assignment(
        "Assignment 7 - Introduction to JavaScript", 
        "assignments/assignment7/index.html", 
        "assignment7.png", 
        "Foundational understanding and demonstration of Javascript"));
    assignments.push(new Assignment(
        "Assignment 8 - Conditionals", 
        "assignments/assignment8/index.html", 
        "assignment8.png", 
        "Learning conditionals and if statements with JavaScript"));
    assignments.push(new Assignment(
        "Assignment 9 - Loops", 
        "assignments/assignment9/index.html", 
        "assignment9.png", 
        "Learning loops and onclick functions with JavaScript"));


    projects.push(new Project(
        "Project 1 - Topic Selection",
        "projects/part1/Semester Project Pt 1 - Topic Selection Summer 2024.pdf",
        "placeholder.gif",
        "This is the Topic Selection PDF for Summer 2024."
    ));
    projects.push(new Project(
        "Project 2 - Wireframes",
        "projects/part2/index.html",
        "project2.png",
        "Designing the initial wireframe of the final project."
    ));
    projects.push(new Project(
        "Project 3 - HTML & CSS",
        "projects/part3/index.html",
        "project2.png",
        "Designing the initial wireframe of the final project."
    ));




    for (let i in assignments) {
        assignmentList.append(assignments[i].formatted);
    }
    for (let i in projects) {
        projectList.append(projects[i].formatted);
    }
}