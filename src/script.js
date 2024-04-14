const nav = document.querySelector(".nav");
console.log(nav);

const navMenu = () => {
    const projects = document.createElement('div');
    projects.classList.add("projects");
    const heading = document.createElement("h1");
    heading.innerText = "My Projects";
    projects.appendChild(heading);
    return projects;
}
nav.appendChild(navMenu());


