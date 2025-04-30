function kruh() {
    var cijenaKruha = 1.5;
    var novac = prompt("Koliko imate novaca?");
    var brojKruhova = Math.floor(novac / cijenaKruha); 
    var ostatak = novac - (brojKruhova * cijenaKruha); 
    alert("Možete kupiti " + brojKruhova + " kruhova.");
    alert("Ostatak novca je " + ostatak.toFixed(2) + " kuna."); 

}

kruh();