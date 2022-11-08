var contenuto = document.getElementById('contenuto');
var users = [];
//creazione classe
class Users {
    constructor(_id, _nome, _cognome, _classe) {
        this.id = _id;
        this.nome = _nome;
        this.cognome = _cognome;
        this.classe = _classe;
    }
}

var u1 = new Users(1, 'Luca', 'Rossi', 'A');
var u2 = new Users(2, 'Luigi', 'Verdi', 'A');
var u3 = new Users(3, 'Mario', 'Bianchi', 'A');
var u4 = new Users(4, 'Piero', 'Neri', 'A');
var u5 = new Users(5, 'Paolo', 'Rossi', 'A');
var u6 = new Users(6, 'Sergio', 'Verdi', 'A');
var u7 = new Users(7, 'Gianno', 'Bianchi', 'A');
var u8 = new Users(8, 'Davide', 'Neri', 'A');
//creazione array
users.push(u1, u2, u3, u4, u5, u6, u7, u8);

users.forEach(Users => {
    let col1 = `<td>${Users.id}</td>`;
    let col2 = `<td>${Users.nome}</td>`;
    let col3 = `<td>${Users.cognome}</td>`;
    let col4 = `<td>${Users.classe}</td>`;
    contenuto.innerHTML += `<tr>${col1}${col2}${col3}${col4}</tr>`;
});







/*
const users = [
    {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
    {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
    {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
    {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
    {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
    {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
    {id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A'},
    {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
];
*/