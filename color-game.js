var squares = document.querySelectorAll(".square");
var colors = [
                "rgb(255, 0, 0)",
                "rgb(23, 244, 23)",
                "rgb(222, 255, 0)",
                "rgb(0, 2, 253)",
                "rgb(200, 34, 223)",
                "rgb(0, 234, 223)"
            ];
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}
