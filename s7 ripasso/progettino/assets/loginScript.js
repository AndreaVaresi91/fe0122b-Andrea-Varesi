//PER DOMATTINA//
// DA FARE LOGIN CHE RIMANDA IN UNA
// PAGINA CON TABELLA CON TUTTI UTENTI REGISRATI
// UNA COLONNA DELLA TABELLA DOVRA CONTENERE UN TASTO ELIMINA PER OGNI UTENTE
// AL CLICK L UTENTE VIENE ELIMINATO DAGLI UTENTI REGISTRATI //SPLICE//


let button = document.getElementById("accedi");
button.addEventListener("click", function () {

    var email1 = document.querySelector("#email1").value;
    var password1 = document.querySelector("#passw1").value;
    let dataBase = localStorage.getItem("Utenti") == null ? [] : JSON.parse(localStorage.getItem("Utenti"));

    var checkUser = dataBase.find(o => o.email == email1 && o.password == password1);

    if (checkUser == undefined) {
        alert("Dati inseriti non validi");

    } else {
        alert("Benvenuto");

        setTimeout(function () {
            window.location ="tab.html"
        }, 1000);

    }

});

