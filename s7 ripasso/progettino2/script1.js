

fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var campi = ["name", "lastname", "email", "role"]
        data.forEach(function (elemento) {
            var select = document.querySelector('#tab')

            let modifica = document.createElement('button')
            modifica.innerText = "Modifica"

            let cancella = document.createElement('button')
            cancella.innerText ="Cancella" 
            cancella.classList.add("canc")

            let riga = document.createElement('tr');


            select.append(riga)


            for (let prop in elemento) {
                if (campi.includes(prop)) {
                    let contenuto = typeof elemento[prop] == "object" ? elemento[prop].nicename : elemento[prop]
                    let cella = document.createElement('td')
                    cella.innerText = contenuto
                    riga.append(cella)
                    riga.append(modifica)
                    riga.append(cancella)
                }
            }
            let elimina = riga.querySelector(".canc")
            elimina.addEventListener("click", function(){
                riga.remove()
            })
        })


    }
    );









/* fetch(
   'https://sofin.wp-admin.it/public/api/v1/user', {
   method: 'POST', // or 'PUT'
   headers: {
       'Content-Type': 'application/json',
   },
   body: JSON.stringify({
       name : 'Nunzio',
       lastname : 'Buio',
       email : 'tesjhfsdukjy@test.com',
       role_id : 1,
       password : 'sfdafsdafsda'
   }),
}
)
.then(response => response.json())
.then(data => {
alert('Utente '+data.id+' Creato')
}) */







































/* var elementiSalvati = localStorage.getItem('utenti')
var dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);


//qui inserisci il controllo per verificare se l'email inserita dall'utente appartiene ad utente giÃ  registrato
//preferibilmente utilizza il metodo find()    

dataBase.forEach(function (elemento) {
    let tabella = document.getElementById('tab')

    let contenitore = document.createElement('tr')

    let row = document.createElement('td')
    let row1 = document.createElement('td')
    let row2 = document.createElement('td')
    let row3 = document.createElement('td')
    var btn = document.createElement('button')
    
    
    row.innerText = elemento.username
    row1.innerText = elemento.email
    row2.innerText = elemento.password

    
    tabella.append(contenitore);
    row3.append(btn)
    contenitore.append(row,row1,row2,row3)

    
    btn.innerHTML = 'Elimina'
    btn.classList.add('btn','btn-outline-primary','btn-primary', 'text-white', 'btn-sm')
    btn.setAttribute('data-email',elemento.email)
    contenitore.append(btn)
    btn.addEventListener('click',function(){
        var deleteMail = this.getAttribute('data-email')
        contenitore.remove()
        eliminaRiga(deleteMail)
    })
    

});

function eliminaRiga(email){
        var indice = dataBase.findIndex(u => u.email == email)  
        console.log(indice)      
        dataBase.splice(indice,1)        
        localStorage.setItem('utenti', JSON.stringify(dataBase))
}
 */
