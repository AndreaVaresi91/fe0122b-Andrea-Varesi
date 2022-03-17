let tab:any = document.querySelector("#capitano")
fetch("Abbigliamento.json")
.then(response => response.json())
.then(capo => {
        capo.forEach((e: Vestiti) => {
            let cappottino = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo)
            console.log(cappottino)

           
            let riga = document.createElement("tr")
            tab.append(riga)
            
            
            
            for(let prop in e){
                
                let cella: any = document.createElement("td")
                console.log(cella);
                cella.innerText = e[prop];
                riga.append(cella)
                
                
            }
            
            
        });
    });
    
    let arr:string [] = ["Id","Codprod","Collezzione","Capo", "Modello","Quantita","Colore", "Prezzo", "Prezzo.Iva", "Disponibile", "Saldo"];
    arr.forEach(x =>{
         let testa = document.createElement("th")
         testa.innerText = x;
         console.log(testa);
         tab.append(testa);
    })

    






class Vestiti {
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo

    }

    getSaldoCapo(): number {
        return this.prezzoivaesclusa * this.saldo / 100;
    }

    getAcquistoCapo(): number {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }

}

let abitoFunerale = new Vestiti(6, 9069, "triste", "abito", 69, 10, "stagionale", 100, 112, "negozio", 10)
let abitoMatrimonio = new Vestiti(6, 6969, "elegante", "abito", 69, 10, "stagionale", 100, 112, "negozio", 20)
let abitoLaurea = new Vestiti(6, 6990, "elegante-giovane", "abito", 69, 10, "stagionale", 100, 112, "negozio", 30)


console.log(abitoFunerale.getSaldoCapo());
console.log(abitoMatrimonio.getSaldoCapo());
console.log(abitoLaurea.getSaldoCapo());

console.log(abitoFunerale.getAcquistoCapo());
console.log(abitoMatrimonio.getAcquistoCapo());
console.log(abitoLaurea.getAcquistoCapo());