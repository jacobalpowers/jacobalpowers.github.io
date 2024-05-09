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
        "assignment1.png", 
        "This assignment was designed to get us comfortable with basic HTML and rudamentary website development."));
    assignments.push(new Assignment(
        "Assignment 3 - Layout with Flex", 
        "assignments/assignment3/index.html", 
        "assignment1.png", 
        "Basic Flexboxing with mobile reframing."));




    for (let i in assignments) {
        assignmentList.append(assignments[i].formatted);
    }
    for (let i in projects) {
        projectList.append(projects[i].formatted);
    }
}