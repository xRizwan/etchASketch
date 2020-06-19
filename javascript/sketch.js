// the container in which the grid will be created in
let container = document.querySelector('#container');

// function to create the grid
function createGrid(num){
    for (let i = 0; i < (num * num); i++){
        const box = document.createElement("div");
        box.className = 'item';
        box.style.flexBasis = `${((1 / num) * 100)}%`;
        container.appendChild(box);
    }
}

// function to change the background color of the gridboxes on movemove
function changeColor(givenColor){
    container.childNodes.forEach((child) => {
    child.addEventListener("mousemove", (e) => {
        e.target.style.backgroundColor = givenColor.toString();
        })
    })
}

// function to remove the grid
function removeGrid(){
    totalChilds = container.childNodes.length;
    for (i = totalChilds - 1; i >= 0; i--){
        container.childNodes[i].remove();
    }
}

// resize function to resize the grid
function resize(){
    const num = prompt("Enter a Valid Number(Between 1 and 120):");
    if (isNaN(num)){
        return resize();
    }
    else{
        if (num < 1 || num > 120){
            return resize();
        }
        else {
            removeGrid();
            createGrid(num);
            changeColor("black");
        }
    }
}

// function to make random colors 
function randomColors(){
    let character = "123456789ABCDEF";
    let hash = "#";
    for (let i = 0; i < 6; i++){
    hash += character[Math.floor(Math.random() * character.length)];
    }
    console.log(hash);
    changeColor(hash);
}

// getting the reset, resize and randomizer buttons
let resetbtn = document.querySelector("#reset");
let resizebtn = document.querySelector("#change");
let randomizerbtn = document.querySelector("#randomizer")

// giving the buttons eventlisteners
resizebtn.addEventListener("click", resize);
randomizerbtn.addEventListener("click", randomColors);
resetbtn.addEventListener("click", () => {
    removeGrid();
    createGrid(16);
    changeColor("black");
});

// default
window.onload = createGrid(16);
changeColor("black");
