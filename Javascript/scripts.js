var tekst = prompt("Unesi neki tekst"); 
var duljinaRijeci = tekst.length; 
var rezultat = 140 - duljinaRijeci; 

if (duljinaRijeci > 0 ) {
    alert("You have written " + duljinaRijeci + " characters, you have " + rezultat + " characters remaining");
} else {
    alert("You have not written anything, please try again.");
}