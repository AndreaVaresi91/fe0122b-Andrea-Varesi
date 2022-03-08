let bottone = document.querySelector(".bottone");


bottone.addEventListener("click", function (e) {
    e.preventDefault();
    let arr = document.querySelectorAll(".pippo");

    arr.forEach(elemento => {
        let valore = elemento.value
        
        var emailUno = document.getElementById("emailUno").value;
        var emailDue = document.getElementById("emailDue").value;
       

        if (valore == "") {
            elemento.style.border = "1px solid red";

        } else if (emailUno != emailDue) {
            alert("le Email non corrispondono")
        } else {
            elemento.style.border = "";
        }


    });
    function memorizzaDati(utenteSalvato) {
        var pippo1 = document.getElementById("username").value;
        var pippo2 = document.getElementById("emailUno").value;
        var pippo3 = document.getElementById("password").value;

        class User {
            constructor(username, email, password) {

                this.username = username
                this.email = email
                this.password = password
            }
        }

        var lista = new User(pippo1, pippo2, pippo3);
        
        
        let elementiSalvati = localStorage.getItem("lista")
        let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
        dataBase.push(lista);
        localStorage.setItem("lista", JSON.stringify(dataBase))

    }
    memorizzaDati();
});


