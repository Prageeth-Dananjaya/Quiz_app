const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    console.log(`<li class="high-score"> ${score.name} - ${score.score}</li>`);
  })
  .join("");

console.log(
  highScores
    .map((score) => {
      console.log(
        `<li class="high-score"> ${score.name} - ${score.score}</li>`
      );
    })
    .join("")
);

// Do not render highscores to the page --> check
