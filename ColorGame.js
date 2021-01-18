var numSquares = 6 // By default
var colors = generateRandomColors(numSquares);

// Accessing the colors of all squares.
var squares = document.querySelectorAll(".square");

// Right Color to be chosen
var pickedColor = pickColor();

// Taking the color code of the right color. 
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

// To display the message whether the answer is correct or not.
var messageDisplay = document.querySelector("#message");

// To change the color of h1 after getting the correct answer
var h1 = document.querySelector("h1");

// Selecting a button to add its behaviour as a reset buttton
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
    reset();
});

// Now adding the difficulty i.e easy and hard mode of a game
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    // Add Mode button Listners
    setUpModeButtons();

    // Add Square Listeners
    setUpSquareListners();

    reset();
}

function setUpSquareListners(){
    // Main Code for all things happening after getting the right color or wrong color.
    for(var i = 0; i < squares.length; i++){
        // Add click listeners to squares.
        squares[i].addEventListener("click", function(){
            //Grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            //Compare Color to picked color
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
                modeButtons.disabled = true;
                
            }else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setUpModeButtons(){
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            // figure out how many squares to show
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            reset();
            
            // pick new colors

            // pick a new picked color
            // update page to reflect changes
        });
    }
}

function reset(){
    // Generate all new colors
    colors = generateRandomColors(numSquares);

    // Pick a new Random Color from an array
    pickedColor = pickColor();

    // Change colorDisplay to picked color
    colorDisplay = pickedColor; 
    
    // Change colors of square
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else{
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";

    modeButtons.disabled = false;    
}


// To change colors after getting the right one.
function changeColors(color){
    // loop through all squares
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

// Function to Pick Random Color from an array.
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Function to generate an array of random colors: Easy-- array[3] and Hard-- array[6].
function generateRandomColors(num){
    //make an array
    var arr = [];

    // To generate colors in an array
    for(var i=0; i<num; i++){
        // get random color and push in to array.
        arr.push(randomColor());
    }

    // Return that array
    return arr;
}

// function to generate random colors
function randomColor(){
    // Pick a red from 0-255
    var r = Math.floor(Math.random() * 256);

    // Pick a green from 0-255
    var g = Math.floor(Math.random() * 256);

    // Pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);

    // Return the RGB color code in a form of string as follows: 
    return "rgb(" + r + ", " + g + ", " + b + ")";
}