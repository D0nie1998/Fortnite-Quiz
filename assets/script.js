const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const progressText = document.getElementById('progressText');
const question = document.getElementById("question");
const scoreText = document.getElementById('score');
const correctBonus = 10;
const maxQuestions = 10;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

