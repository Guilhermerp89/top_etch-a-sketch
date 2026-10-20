let userInput = 15;


function createGrid(squaresPerSide){ 
    const container = document.getElementById("main-container")

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


