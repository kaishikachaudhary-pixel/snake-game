
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;

let currentScore = document.querySelector("#current-score");
let bestScore = document.querySelector("#best-score");
let msgContainer = document.querySelector("#msg-container");

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let restartBtn = document.getElementById("restart");
let playAgain = document.getElementById("start-again");

let gridSize = 20;
