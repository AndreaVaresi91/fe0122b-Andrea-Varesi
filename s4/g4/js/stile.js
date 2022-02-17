
var presentazione = "Fare un altro round, quando pensi di non farcela, è una cosa che puo cambiarti tutta la vita";
var estrai = presentazione.slice(0 ,14);
console.log(estrai);

var alto = presentazione.toUpperCase();
console.log(alto);

var presentazione2 = "CIAO BELLI";
var piccolo = presentazione2.toLowerCase();
console.log(piccolo);

var alunni =[
    "Andrea",
    "Lorenzo",
    "Giulio",
    "Grazia",
    ];

console.log(alunni[3]);  

var alunniPlus = alunni.splice(2,2, "Roberto", "Mirko"); 
console.log(alunni);

var calcolo = alunni.length;
console.log(alunni)

console.log(alunni.pop());
console.log(alunni);

console.log(alunni.push("Grazia"));
console.log(alunni);

console.log(alunni.shift());
console.log(alunni);

console.log(alunni.unshift("Giulio"));
console.log(alunni);

var numeri = [
   2,
   4,
   6,
   8
];

function somma (){
    numeri
};
