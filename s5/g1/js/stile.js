//richiama data//
let dataAttuale = new Date();
console.log(dataAttuale);

//mostra in pagina html//
document.getElementById("uno").innerHTML=(dataAttuale);

//mostra elementi singoli della data//
console.log(dataAttuale.getDate());
console.log(dataAttuale.getMonth());
document.getElementById("paragrafo").innerHTML = (dataAttuale.getFullYear()) + " " + (dataAttuale.getDate()) + " " + (dataAttuale.getMonth()+1);

//formattazione in formato europeo//

const event = new Date(Date.UTC(2022, 1, 21, 15, 19, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(event.toLocaleDateString('it-IT', options));

//formattata in html//

document.getElementById("due").innerHTML=(event.toLocaleDateString('it-IT', options));

// orologio //

setInterval(Orologio,1000);
  function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
  }
  function Orologio()
  {
    var d = new Date();
    var date = d.getDate();
    var ora = addZero(d.getHours());
    var min = addZero(d.getMinutes());
    var sec = addZero(d.getSeconds());
    document.getElementById("orologio").innerHTML=ora+":"+min+":"+sec;}

    //fine//