var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(nome, cognome, professione, codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.nome = nome;
        this.cognome = cognome;
        this.professione = professione;
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return Lavoratore;
}());
var WebAgency = /** @class */ (function (_super) {
    __extends(WebAgency, _super);
    function WebAgency(nome, cognome, professione, codredd, redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, nome, cognome, professione, codredd, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    WebAgency.prototype.getUtileTasse = function () {
        if (this.codredd == "dipendente") {
            return this.redditoannuolordo * 5 / 100;
        }
        else if (this.codredd == "freelancer") {
            return this.redditoannuolordo * 10 / 100;
        }
        else if (this.codredd == "dirigente") {
            return this.redditoannuolordo * 50 / 100;
        }
    };
    WebAgency.prototype.getTasseInps = function () {
        return this.redditoannuolordo * this.tasseinps / 100;
    };
    WebAgency.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * this.tasseirpef / 100;
    };
    WebAgency.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    };
    return WebAgency;
}(Lavoratore));
var andreino = new WebAgency("Andrea", "Visconte", "junior front end", "dipendente", 35000, 7, 3);
console.log(andreino);
console.log(andreino.getUtileTasse());
console.log(andreino.getTasseInps());
console.log(andreino.getTasseIrpef());
console.log(andreino.getRedditoAnnuoNetto());
var lorenzino = new WebAgency("Lorenzo", "Jova", "senior", "freelancer", 50000, 7, 5);
console.log(lorenzino);
console.log(lorenzino.getUtileTasse());
console.log(lorenzino.getTasseInps());
console.log(lorenzino.getTasseIrpef());
console.log(lorenzino.getRedditoAnnuoNetto());
var capitanMike = new WebAgency("Michele", "Tedesco", "Full-stack", "dirigente", 80000, 15, 10);
console.log(capitanMike);
console.log(capitanMike.getUtileTasse());
console.log(capitanMike.getTasseInps());
console.log(capitanMike.getTasseIrpef());
console.log(capitanMike.getRedditoAnnuoNetto());
var AziendinaDiPaese = /** @class */ (function (_super) {
    __extends(AziendinaDiPaese, _super);
    function AziendinaDiPaese(nome, cognome, professione, codredd, redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, nome, cognome, professione, codredd, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    return AziendinaDiPaese;
}(WebAgency));
var giuliano = new AziendinaDiPaese("Giulio", "Antoni", "Full-stack", "dirigente", 100000, 15, 10);
console.log(giuliano);
console.log(giuliano.getUtileTasse());
console.log(giuliano.getTasseInps());
console.log(giuliano.getTasseIrpef());
console.log(giuliano.getRedditoAnnuoNetto());
//mandare a schermo//
//manda a schermo tutto bisogna selezionare solo i dati degli utenti
var persone = [];
persone.push(andreino, lorenzino, capitanMike, giuliano);
console.log(persone);
persone.forEach(function (elemento) {
    for (var prop in elemento) {
        var bacheca = document.querySelector("#container");
        var creaUtenti = document.createElement("p");
        creaUtenti.innerText = elemento[prop];
        bacheca.append(creaUtenti);
    }
});
