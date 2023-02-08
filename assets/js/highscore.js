const highScores = JSON.parse(localStorage.getItem('highScores')) || undefined;
const highScoresList = document.getElementById('highScoresList');

/* high scores */

function mapScores() {
    if (!highScores) {
        highScoresList.innerHTML = 'There are no scores!';
    } else {
        highScoresList.innerHTML = highScores.map(score => {
            return `<li class="high-score">${score.name} - ${score.score}</li>`;
        })
        .join("");
    }
}

mapScores();