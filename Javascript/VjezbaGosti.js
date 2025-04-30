gosti = ["Marko", "Ana", "Petar", "Ivana", "Luka"]; 

var ime = prompt("Unesite ime gosta: ");
if (gosti.includes(ime)) {
    alert("Dobrodošli! " + ime);
} else {
    alert("Žao nam je, možda sljedeći put!");
}

alert(gosti[0] + " i " + gosti[gosti.length - 1]);
