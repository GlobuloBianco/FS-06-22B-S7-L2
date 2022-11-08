var persone = [];
//creazione classe
class Persone {
    constructor(_nome, _eta) {
        this.nome = _nome;
        this.eta = _eta;
    }
}

const Paolo = new Persone('Paolo', 87);
const Luca = new Persone('Luca', 51);
const Mario = new Persone('Mario', 51);
//creazione array
persone.push(Paolo, Luca, Mario);

calcolo(Paolo, Luca);
calcolo(Luca, Paolo);
calcolo(Mario, Luca);

function calcolo(x, y) {
    if(x.eta > y.eta) {
        console.log(`${x.nome} è più grande di ${y.nome}`);
    } else if(x.eta < y.eta) {
        console.log(`${x.nome} è più piccolo di ${y.nome}`);
    } else {
        console.log(`${x.nome} è della stessa età di ${y.nome}`);
    }
}