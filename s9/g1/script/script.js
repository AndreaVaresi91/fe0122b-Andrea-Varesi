let reg = document.querySelector("#regioni");
fetch("regioni.json")
    .then(data => {
        return data.json();
    })
    .then(regioni => {
        // console.log(regioni);

        regioni.forEach(e => {
            let regions = e;

            let options = document.createElement("option");


            reg.append(options);
            //console.log(options)

            for (var prop in regions) {
                var campi = document.createElement("option")
                campi.innerText = regions[prop];
                options.append(campi);
            }
        });

    });

class Province {

    constructor(prov_it, prov_nome, prov_reg, prov_url) {
        this.prov_it = prov_it
        this.prov_nome = prov_nome
        this.prov_reg = prov_reg
        this.prov_url = prov_url

    }
}


reg.addEventListener("click", function () {
    let valore = reg.value
    //console.log(valore);
    let prov = document.querySelector("#province");

    fetch("province.json")
        .then(data => {
            return data.json();
        })
        .then(province => {
            console.table(province);

            for (var i = 0; i < province.length; i++) {
                if (province[i].prov_reg == valore) {
                    var campi = document.createElement("option")
                    campi.innerText = province[i].prov_nome;
                    prov.append(campi)
                }
            }


        });
});

