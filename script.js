let userInput = 0;


const Button = document.querySelector("#btn");
Button.addEventListener("click", () => {
    let userInput = prompt('How many squares per side? Please between 1 and 100');
    createGrid(0);
    createGrid(userInput);
});


function createGrid(squaresPerSide){ 
    const container = document.getElementById("main-container")
    container.innerHTML = ''; 

    for (let i = 0 ; i < squaresPerSide * squaresPerSide ; i++) {

        const square = document.createElement("div");
        square.classList.add('square');
        square.style.width = `calc(100% / ${squaresPerSide})`;

        square.addEventListener('mouseenter', () => {
        square.classList.add('hovered');
        });
        container.appendChild(square);

    }    



} 
createGrid(userInput);


