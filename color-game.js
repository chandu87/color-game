var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(numSquares);
var pickedColor = pickColorFunction();
var colorDisplay = document.querySelector("#pickedColor");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;
var modeBtns = document.querySelectorAll(".difMode");

resetBtn.addEventListener('click',function(){
    reset();
});

for(var i = 0; i < modeBtns.length; i++){
    modeBtns[i].addEventListener('click',function(){
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");
        numSquares = this.textContent === "Easy" ? 3 : 6;
        reset();
    });
}

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

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColorFunction(){
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}
function generateRandomColors(num){
    //define an empty array
    colorArray = [];
    // fill it with number of colors
    for( var i = 0; i < num; i++){
        colorArray[i] = randomColor();
    }

    return colorArray;

}
function randomColor(){
    //red
    var r = Math.floor(Math.random() * 256);
    //blue
    var g = Math.floor(Math.random() * 256);
    //green
    var b = Math.floor(Math.random() * 256);

    return "rgb("+r+", "+g+", "+b+")";
}