var expression = "";
var screen = document.getElementById("screen");

function clearScr(){
    expression = "";
    screen.innerHTML = "";
}

function sendNum(char){
    expression += char;
    screen.innerHTML = expression;
}

function equalsTo(){
    expression = eval(expression);
    screen.innerHTML = expression;
}