THIS IS A PROJECT FROM THE WEB DEVELOPMENT FOUNDATIONS COURSE FROM "THE ODIN PROJECT".

IT IS SUPPOSED TO TRAIN ME ON HTML, CSS AND JS FOR THE FIRST TIME ALL TOGEHTER FROM SCRATCH.


- create the parent div in the html file
- use this and loops in js to create the square divs:

const roundP = document.createElement("p");
roundP.textContent = `You chose ${humanChoice} | Computer chose ${computerChoice} — ${roundMessage}`

- give the divs a class like "square" in js
- in css create three sets of style: "flex-container", "square" and "square.hovered"
  
  .flex-container {
  display: flex;
  gap: 10px;
  width: 100%;
  }

.square {
  flex: 1;
  aspect-ratio: 1 / 1;
  min-width: 0;
  }

  .square.hovered {
  background-color: navy;
  }

- give the squares also other properties like color, margin and border
- create 
- in js, set up an event listener on .square for  'mouseenter'
- the event listener calls the function to add a class to that square like "hovered". now the hovered sqaure has class="square hovered".


Step 2:

- create a button "btn" on top of the screen in html
- create a variable and assign its value to "#btn" in js
- add a click event listener to "btn"
- the function of the event listener is a prompt "prompt"
- the prompt asks the user "How many squares per side? Please between 1 and 100"

// Opens a popup box asking for the user's name
let userName = prompt("Please enter your name:");

// Check what the user entered
if (userName) {
  console.log("Hello, " + userName + "!");
} else {
  console.log("The user cancelled or entered nothing.");
}

- instead of userName, use "userInput"
- 
