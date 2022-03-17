abstract class Lavoratore {
    nome: string;
    cognome: string;
    professione: string;
    codredd: string;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(nome: string, cognome: string, professione: string, codredd: string, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {

        this.nome = nome;
        this.cognome = cognome;
        this.professione = professione;
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }

    abstract getUtileTasse(): number

    abstract getTasseInps(): number

    abstract getTasseIrpef(): number

    abstract getRedditoAnnuoNetto(): number

}

class WebAgency extends Lavoratore {
    constructor(nome: string, cognome: string, professione: string, codredd: string, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(nome, cognome, professione, codredd, redditoannuolordo, tasseinps, tasseirpef);
    }

    getUtileTasse(): any {
        if (this.codredd == "dipendente") {
            return this.redditoannuolordo * 5 / 100
        } else if (this.codredd == "freelancer") {
            return this.redditoannuolordo * 10 / 100
        } else if (this.codredd == "dirigente") {
            return this.redditoannuolordo * 50 / 100
        }
    }

    getTasseInps(): number {
        return this.redditoannuolordo * this.tasseinps / 100;
    }

    getTasseIrpef(): number {
        return this.redditoannuolordo * this.tasseirpef / 100;
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    }

}

let andreino = new WebAgency("Andrea", "Visconte", "junior front end", "dipendente", 35000, 7, 3);
console.log(andreino);
console.log(andreino.getUtileTasse());
console.log(andreino.getTasseInps());
console.log(andreino.getTasseIrpef());
console.log(andreino.getRedditoAnnuoNetto());


let lorenzino = new WebAgency("Lorenzo", "Jova", "senior", "freelancer", 50000, 7, 5);
console.log(lorenzino);
console.log(lorenzino.getUtileTasse());
console.log(lorenzino.getTasseInps());
console.log(lorenzino.getTasseIrpef());
console.log(lorenzino.getRedditoAnnuoNetto());


let capitanMike = new WebAgency("Michele", "Tedesco", "Full-stack", "dirigente", 80000, 15, 10);
console.log(capitanMike);
console.log(capitanMike.getUtileTasse());
console.log(capitanMike.getTasseInps());
console.log(capitanMike.getTasseIrpef());
console.log(capitanMike.getRedditoAnnuoNetto());


class AziendinaDiPaese extends WebAgency {
    constructor(nome: string, cognome: string, professione: string, codredd: string, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(nome, cognome, professione, codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
}

let giuliano = new AziendinaDiPaese("Giulio", "Antoni", "Full-stack", "dirigente", 100000, 15, 10);
console.log(giuliano);
console.log(giuliano.getUtileTasse());
console.log(giuliano.getTasseInps());
console.log(giuliano.getTasseIrpef());
console.log(giuliano.getRedditoAnnuoNetto());

//mandare a schermo//

//manda a schermo tutto bisogna selezionare solo i dati degli utenti

let persone: any = [];
persone.push(andreino, lorenzino, capitanMike, giuliano);
console.log(persone);

persone.forEach(function(elemento: any) {
    


for (let prop in elemento) {
    
    let bacheca: any = document.querySelector("#container");

    let creaUtenti: any = document.createElement("p");
    creaUtenti.innerText = elemento[prop];

    bacheca.append(creaUtenti);


}
});
var pippo;

