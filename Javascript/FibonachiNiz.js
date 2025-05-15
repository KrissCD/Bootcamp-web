var broj = prompt("Unesi broj: ");

var a = 0
var b = 1
var niz = []


for (var i = 0; i < broj; i++) {
    niz.push(a);
    var sljedeci = a + b;
    a = b;
    b = sljedeci;
}
console.log(niz.join());
