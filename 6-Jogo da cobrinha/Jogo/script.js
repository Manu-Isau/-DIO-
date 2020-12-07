let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG( ) {
    context.fillStyle = "#5F04B4";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();