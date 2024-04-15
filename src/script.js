const nav = document.querySelector(".nav");
console.log(nav);

const navMenu = () => {
    let outer_div = document.createElement("div");
    for(let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.classList.add("nav-category-container");
        outer_div.appendChild(div);
        if(i < 2) {
            let line = document.createElement("div");
            line.classList.add("line");
            outer_div.appendChild(line)

        }
    }
    
    return outer_div;
}
nav.appendChild(navMenu());


