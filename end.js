const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innertext = mostRecentScore;
username.addEventListener("keyup",() => {
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();
};