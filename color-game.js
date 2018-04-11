var squares = document.querySelectorAll(".square");
var colors = [
                "rgb(255, 0, 0)",
                "rgb(23, 244, 23)",
                "rgb(222, 255, 0)",
                "rgb(0, 2, 253)",
                "rgb(200, 34, 223)",
                "rgb(0, 234, 223)"
            ];
var pickedColor = pickColorFunction();
document.querySelector("#pickedColor").textContent = pickedColor;
var message = document.getElementById("message");

for(var i = 0; i < squares.length; i++){
    //loop through all the colors
    squares[i].style.backgroundColor = colors[i];

    //add event listeners for each square
    squares[i].addEventListener('click',function(){
        if(pickedColor == this.style.backgroundColor){
            message.textContent = "correct";
            changeColor(pickedColor);
        }
        else{
        this.style.backgroundColor = "black";
        message.textContent = "Try again!";
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