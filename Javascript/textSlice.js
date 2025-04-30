var tekst = prompt("Unesi neki tekst");
var duljinaRijeci = tekst.length;
if (duljinaRijeci < 60) {
    alert(tekst);
} 
else  {
    alert(tekst.slice(0,61))
}

