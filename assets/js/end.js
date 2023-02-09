const highScores = JSON.parse(localStorage.getItem("highScore")) || [];
const mostRecentScore = localStorage.getItem('mostRecentScore')
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const username = document.getElementById('username');
const maxHighScore = 5;



/* if score has no name */
finalScore.innerText = mostRecentScore;


/* saving the score */

function saveHighScore(event) {
    event.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(maxHighScore);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
}

    
