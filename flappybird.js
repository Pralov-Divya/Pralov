//board
let board;
let boardwidth = 360;
let boardheight = 640;
let context;

window.onload = function () {
    board = document.getElementByID("board");
    board.height = boardHeight;
    board.width = boardwidth;
    context = board.getContext("2d"); //used for drawing on the board
} 