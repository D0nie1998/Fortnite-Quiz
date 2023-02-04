const mostRecentScore = localStorage.getItem('mostRecentScore')
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const username = document.getElementById('username');
const maxHighScore = 5;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

