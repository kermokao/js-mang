let player_score = 0;
let computer_score = 0;

function play(sinuvalik) {
    
    let valikud = ["kivi", "paber", "kaarid"];

    let computer_valikud = valikud[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").textContent = sinuvalik;
    document.getElementById("arvuti-choice").textContent = computer_valikud;
    
    if (computer_valikud == "kivi" && sinuvalik == "kivi") {
        document.getElementById("result-text").innerHTML = "Viik!"  
    } 

    else if (computer_valikud == "paber" && sinuvalik == "kaarid" ||
                computer_valikud == "kivi" && sinuvalik == "paber" ||
                computer_valikud == "kaarid" && sinuvalik == "kivi") {
                    document.getElementById("result-text").innerHTML = "Sinu võit!"
                }

    else if (computer_valikud == "paber" && sinuvalik == "kivi" ||
    computer_valikud == "kivi" && sinuvalik == "kaarid" ||
    computer_valikud == "kaarid" && sinuvalik == "paber") {
        document.getElementById("result-text").innerHTML = "Kaotus!"
    }

}

