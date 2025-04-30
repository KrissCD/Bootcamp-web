function kruh() {
    var cijenaKruha = 1.5;
    var rezultat = prompt("Koliko imate novaca?") / cijenaKruha;
    var rezultat = Math.floor(rezultat);
    alert("Možete kupiti " + rezultat + " kruha.");
}

kruh();