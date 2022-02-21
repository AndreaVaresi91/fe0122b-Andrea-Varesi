//richiama data//
let dataAttuale = new Date();
console.log(dataAttuale);

//mostra in pagina html//
document.getElementById("uno").innerHTML=(dataAttuale);

//mostra elementi singoli della data//
console.log(dataAttuale.getDate());
console.log(dataAttuale.getMonth());

//formattazione in formato europeo//

const event = new Date(Date.UTC(2022, 1, 21, 15, 19, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(event.toLocaleDateString('it-IT', options));

//formattata in html//

document.getElementById("due").innerHTML=(event.toLocaleDateString('it-IT', options));