let scores, roundScores, activePlayer;
let gamePlaying = true;
scores = [0, 0];
roundScores = 0;
activePlayer = 0;


// document.querySelector("#current-" + activePlayer).textContent = dice;
document.querySelector(".dice").style.display = "none";

document.querySelector(".btn--roll").addEventListener("click", () => {
    if(gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";
        if(dice === 1) {
            roundScores = 0;
            document.querySelector("#current--" + activePlayer).textContent = roundScores;
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.querySelector(".player--0").classList.toggle("player--active");
            document.querySelector(".player--1").classList.toggle("player--active");
            document.querySelector(".dice").style.display = "none";
        }
        else {
            if(roundScores === 0) {
                roundScores = dice;
            }
            else {
                roundScores += dice;
            }
            document.querySelector("#current--" + activePlayer).textContent = roundScores;
        }
    }
    
    
    
});

document.querySelector(".btn--hold").addEventListener("click", () => {
    scores[activePlayer] += roundScores;
    document.querySelector(".dice").style.display = "none";
    roundScores = 0;
    document.querySelector("#score--" + activePlayer).textContent = scores[activePlayer];
    document.querySelector("#current--" + activePlayer).textContent = roundScores;
    if(scores[activePlayer] >= 10) {
        document.querySelector("#name--" + activePlayer).textContent = "WINNER";
        
        document.querySelector(".player--" + activePlayer).classList.remove("player--active");
        document.querySelector(".player--" + activePlayer).classList.add("player--winner");
        document.querySelector("#name--" + activePlayer).classList.add("name--winner");
        gamePlaying = false;
        
    }
    else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
    }
    
});

document.querySelector(".btn--new").addEventListener("click", () => {
    gamePlaying = true;
    document.querySelector(".dice").style.display = "none";
    scores = [0, 0];
    activePlayer = 0;
    roundScores = 0;
    document.querySelector("#score--0").textContent = 0;
    document.querySelector("#score--1").textContent = 0;
    document.querySelector("#current--0").textContent = 0;
    document.querySelector("#current--1").textContent = 0;
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector("#name--0").textContent = "Player 1";
    document.querySelector("#name--1").textContent = "Player 2";
    document.querySelector(".player--" + 0).classList.remove("player--winner");
    document.querySelector("#name--" + 0).classList.remove("winner");
    document.querySelector(".player--" + 1).classList.remove("player--winner");
    document.querySelector("#name--" + 1).classList.remove("winner");
});

