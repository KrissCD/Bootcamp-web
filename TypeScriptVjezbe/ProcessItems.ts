//Items su elementi koji mogu biti brojevi
//Obrada svakog elementa
//Funckija treba vratiti novi niz iste duljine, pri cemu se svaki element tranformira:
//Ako je element broj,vratiti njegov kvadrat
//Ako je element string,vratiti isti tekst ali sva slova velika

function processItems(items: (number | string)[]): (number | string)[] {
    return items.map(item => {
        if (typeof item === 'number') {
            return item * item;
        } else if (typeof item === 'string') {
            return item.toUpperCase();
        } else {
            throw new Error('Invalid item type');
        }
    });
}

let ulaz = [3,"neki",10,"ulaz"];
console.log(processItems(ulaz));