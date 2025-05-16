// typescript kod
// deklarira varijablu firstname tipa string i dodijeli joj svoje ime
// deklarira varijablu yearofbirth tipa number i dodijeli joj godinu svog rodenja
// izracuna trenutnu dob u varijabli currentage tako da od 2025 oduzme yearofbirth
// ispici u konzolu ime: <firstName>, Dob: <currentAge>

let firstName: string = "Ivan";
let yearOfBirth: number = 2000;
let currentAge: number = 2025 - yearOfBirth;
console.log(`Ime: ${firstName}, Dob: ${currentAge}`);
