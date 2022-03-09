// TABELLA 

let elementiSalvati = localStorage.getItem("Utenti")
let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

dataBase.forEach(function (elemento) {

    let user = elemento.username
    let email = elemento.email
    let pass = elemento.password
    
    let riga = document.createElement("tr");

    let celle1 = document.createElement('td');
    let celle2 = document.createElement('td');
    let celle3 = document.createElement('td');
    let tasto = document.createElement("button")

    let contenitore = document.querySelector('#tab')

    celle1.innerText = user
    celle2.innerText = email
    celle3.innerText = pass
    tasto.innerText = "elimina"

    contenitore.append(riga)
    riga.append(celle1, celle2, celle3, tasto)

    tasto.addEventListener("click", function(){
        riga.remove(); //elimina riga
        elimina() // elimina un elemento dal local storage
        //window.localStorage.removeItem("Utenti");
    })

});

function elimina(elemento){
   /* let elementiSalvati = localStorage.getItem("Utenti")                              
        let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati) */

var canc = dataBase.indexOf(elemento)
dataBase.splice(canc, 1);

localStorage.setItem("Utenti", JSON.stringify(dataBase));

}























