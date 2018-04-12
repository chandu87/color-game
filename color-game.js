var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(numSquares);
var pickedColor = pickColorFunction();
var colorDisplay = document.querySelector("#pickedColor");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyLevel");
var hardBtn = document.querySelector("#hardLevel");
colorDisplay.textContent = pickedColor;

resetBtn.addEventListener('click',function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColorFunction();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        //loop through all the colors
        squares[i].style.backgroundColor = colors[i];
    }    
    message.textContent = "TRY NOW!!";
    h1.style.backgroundColor = "teal";
});

easyBtn.addEventListener('click',function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColorFunction();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        //loop through all the colors
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }    
    message.textContent = "TRY NOW!!";
    h1.style.backgroundColor = "teal";
});
hardBtn.addEventListener('click',function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColorFunction();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        //loop through all the colors
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }    
    message.textContent = "TRY NOW!!";
    h1.style.backgroundColor = "teal";

});

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