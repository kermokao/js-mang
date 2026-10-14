let player_score = 0;
let computer_score = 0;

function play(sinuvalik) {
    let valikud = ["kivi", "paber", "kaarid"];
    let computer_valikud = valikud[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").textContent =
        "Sinu valik: " + sinuvalik;

    document.getElementById("computer-choice").textContent =
        "Arvuti valik: " + computer_valikud;

    if (sinuvalik === computer_valikud) {
        document.getElementById("result-text").textContent = "Viik!";
    }

    else if (
        (sinuvalik === "kaarid" && computer_valikud === "paber") ||
        (sinuvalik === "paber" && computer_valikud === "kivi") ||
        (sinuvalik === "kivi" && computer_valikud === "kaarid")
    ) {
        document.getElementById("result-text").textContent = "Sinu võit!";
        player_score++;
    }

    else {
        document.getElementById("result-text").textContent = "Kaotus!";
        computer_score++;
    }

    document.getElementById("player-score").textContent = player_score;
    document.getElementById("computer-score").textContent = computer_score;
}

function restartGame() {
    player_score = 0;
    computer_score = 0;

    document.getElementById("player-score").textContent = player_score;
    document.getElementById("computer-score").textContent = computer_score;

    document.getElementById("player-choice").textContent = "Sinu valik:";
    document.getElementById("computer-choice").textContent = "Arvuti valik:";
    document.getElementById("result-text").textContent = "Alusta uut mängu!";
}
