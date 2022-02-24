document.querySelector('#add').addEventListener('click', function () {



    let valore = document.querySelector('#testo').value

    if (!valore)
        return


    let li = document.createElement("li")

    li.innerText = valore


    document.querySelector("#lista").prepend(li)


    document.querySelector("#testo").value = ""


    li.addEventListener("click", function () {
        li.remove()

        elimina(valore)
    })

    salva(valore)
})



function salva(testo) {

    let elementiSalvati = localStorage.getItem('lista')

    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

    db.push(testo)

    localStorage.setItem('lista', JSON.stringify(db))
}


function creaHTML() {
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

    db.forEach(function (elemento) {



        let li = document.createElement("li")


        li.innerText = elemento;


        document.querySelector("#lista").prepend(li)


        li.addEventListener("click", function () {
            li.remove()
            elimina(elemento)
        })


    })
}

creaHTML()



function elimina(testo) {

    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

    var indice = db.indexOf(testo)

    db.splice(indice, 1)

    localStorage.setItem('lista', JSON.stringify(db))
}
