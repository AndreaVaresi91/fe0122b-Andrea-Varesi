

var param = new URLSearchParams(location.search)
var id = param.get("id")

fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {

        var campi = data
        console.log(campi)

        var utente = campi.find(u => u.id == id)
        console.log(utente)

       /* document.querySelector("#nome1").value = utente.name
        document.querySelector("#cognome1").value = utente.lastname
        document.querySelector("#email1").value = utente.email */
        

        document.querySelector("#bottoneMod").addEventListener("click", function(ae){
            ae.preventDefault()

            let newNome = document.querySelector("#nome1").value
            let newCognome = document.querySelector("#cognome1").value
            let newEmail = document.querySelector("#email1").value
           

            
            fetch('https://sofin.wp-admin.it/public/api/v1/user/' + id, {
                method: 'PUT', // or 'PUT' POST GET DELETE
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name : newNome,
                    lastname : newCognome,
                    email : newEmail,
                
                   
                }),
             }
             )
             .then(response => response.json())
             .then(data => {
                 console.log(data)
             alert('Utente aggiornato')
            // setTimeout(function(){
               //  window.location ="tabella1.html";
           //  }, 2000)
             }) 

        })

});