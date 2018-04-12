var numSquares = 6;
var colors = [];
var pickedColor; 

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#pickedColor");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".difMode");

//init function to start the game
init();

function init(){
    //setting up mode buttons
    setupModeButtons();
    //setting up event listener
    setupEventListeners();
    reset();
}

//setting up event listeners for all squares
function setupEventListeners(){
    for(var i = 0; i < squares.length; i++){
        //loop through all the colors
        squares[i].style.backgroundColor = colors[i];
    
        //add event listeners for each square
        squares[i].addEventListener('click',function(){
            if(pickedColor == this.style.backgroundColor){
                message.textContent = "CORRECT";
                resetBtn.textContent = "PLAY AGAIN!!"
                changeColor(pickedColor);
                h1.style.backgroundColor = pickedColor;
            }
            else{
            this.style.backgroundColor = "black";
            message.textContent = "TRY AGAIN!";
            }
        });
    }
}

//setup all buttons and evenlisteners on them
function setupModeButtons(){
     for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener('click',function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            numSquares = this.textContent === "Easy" ? 3 : 6;
            reset();
        });   
    }
    resetBtn.addEventListener('click',function(){
        reset();
    });

}

//reset color array and pick new color for game
function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColorFunction();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        //loop through all the colors
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }    
    message.textContent = "TRY NOW!!";
    h1.style.backgroundColor = "teal";
}

//change color of all squares
function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
//pick color from our array for playing game
function pickColorFunction(){
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

//generate color array
function generateRandomColors(num){
    //define an empty array
    colorArray = [];
    // fill it with number of colors
    for( var i = 0; i < num; i++){
        colorArray[i] = randomColor();
    }

    return colorArray;

}

//generating random color
function randomColor(){
    //red
    var r = Math.floor(Math.random() * 256);
    //blue
    var g = Math.floor(Math.random() * 256);
    //green
    var b = Math.floor(Math.random() * 256);

    return "rgb("+r+", "+g+", "+b+")";
}