var tab = document.querySelector("#capitano");
fetch("Abbigliamento.json")
    .then(function (response) { return response.json(); })
    .then(function (capo) {
    capo.forEach(function (e) {
        var cappottino = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        console.log(cappottino);
        var riga = document.createElement("tr");
        tab.append(riga);
        for (var prop in e) {
            var cella = document.createElement("td");
            console.log(cella);
            cella.innerText = e[prop];
            riga.append(cella);
        }
    });
});
var arr = ["Id", "Codprod", "Collezzione", "Capo", "Modello", "Quantita", "Colore", "Prezzo", "Prezzo.Iva", "Disponibile", "Saldo"];
arr.forEach(function (x) {
    var testa = document.createElement("th");
    testa.innerText = x;
    console.log(testa);
    tab.append(testa);
});
var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Vestiti.prototype.getSaldoCapo = function () {
        return this.prezzoivaesclusa * this.saldo / 100;
    };
    Vestiti.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Vestiti;
}());
var abitoFunerale = new Vestiti(6, 9069, "triste", "abito", 69, 10, "stagionale", 100, 112, "negozio", 10);
var abitoMatrimonio = new Vestiti(6, 6969, "elegante", "abito", 69, 10, "stagionale", 100, 112, "negozio", 20);
var abitoLaurea = new Vestiti(6, 6990, "elegante-giovane", "abito", 69, 10, "stagionale", 100, 112, "negozio", 30);
console.log(abitoFunerale.getSaldoCapo());
console.log(abitoMatrimonio.getSaldoCapo());
console.log(abitoLaurea.getSaldoCapo());
console.log(abitoFunerale.getAcquistoCapo());
console.log(abitoMatrimonio.getAcquistoCapo());
console.log(abitoLaurea.getAcquistoCapo());
