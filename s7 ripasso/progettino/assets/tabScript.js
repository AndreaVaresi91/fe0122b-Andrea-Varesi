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

    let contenitore = document.querySelector('#tab')

    celle1.innerText = user
    celle2.innerText = email
    celle3.innerText = pass

    contenitore.append(riga)
    riga.append(celle1, celle2, celle3)

});





















