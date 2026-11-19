function colourChange(colour) {
    let checker = document.querySelector(".checker");
    let skill = document.querySelectorAll(".skill");
    if (colour == "GREEN") {
        body.style.backgroundColor = "#5beda2"
        header.style.backgroundColor = "#20e680"
        for (let loop = 0; loop < skill.length; loop++) {
            skill[loop].style.backgroundColor = "#20e680"
        }

        checker.innerHTML = `<button class = "button" onclick = "colourChange('BLACK')">BLACK</button>`
    }
    else{
        body.style.backgroundColor = "#1e1e1e"
        header.style.backgroundColor = "#404040"
        for (let loop = 0; loop < skill.length; loop++) {
            skill[loop].style.backgroundColor = "#404040"
        }
        checker.innerHTML = `<button class = "button" onclick = "colourChange('GREEN')">GREEN</button>`
        
    }
    
}

let skillTitle = 'Test Title';
let skills = document.querySelector(".skills");
let button = document.querySelector(".button");
let container = document.querySelector(".container");
let body = document.querySelector("body");
let header = document.querySelector("header");

skillList = [
    {"skillTitle":"Test Title", "skillDescription":"Test Description"},
    {"skillTitle":"Test Title 2", "skillDescription":"Test Description 2"},
    {"skillTitle":"Test Title 3", "skillDescription":"Test Description 3"},
    {"skillTitle":"Test Title 4", "skillDescription":"Test Description 4"},
    {"skillTitle":"Test Title 5", "skillDescription":"Test Description 5"},
    {"skillTitle":"Test Title 6", "skillDescription":"Test Description 6"},
    {"skillTitle":"Test Title 7", "skillDescription":"Test Description 7"},
    {"skillTitle":"Test Title 8", "skillDescription":"Test Description 8"},
    {"skillTitle":"Test Title 9", "skillDescription":"Test Description 9"},
    {"skillTitle":"Test Title 10", "skillDescription":"Test Description 10"},
    {"skillTitle":"Test Title 11", "skillDescription":"Test Description 11"},
];



skills.innerHTML = ``;
for (let loop = 0; loop < (skillList.length); loop++) {
    skills.innerHTML += `<div class = "skill" id = "${loop}"><h2 class = "skill-title">${skillList[loop]["skillTitle"]}</h2><p class = "skill-description">${skillList[loop]["skillDescription"]}</p><div class="symbol">+</div></div>`;
}

