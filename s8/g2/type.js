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
var SonAccount = /** @class */ (function () {
    function SonAccount(nome, cognome, cassa) {
        this.cassa = 0;
        this.nome = nome;
        this.cognome = cognome;
        this.cassa = cassa;
    }
    ;
    SonAccount.prototype.oneDeposit = function (versamento) {
        return this.cassa += versamento;
    };
    SonAccount.prototype.oneWithDraw = function (prelievo) {
        return this.cassa -= prelievo;
    };
    return SonAccount;
}());
var Figlio = new SonAccount("Andrea", "Varesi", 5);
console.log(Figlio);
console.log(Figlio.oneDeposit(1000));
console.log(Figlio.oneWithDraw(150));
var Mama = /** @class */ (function (_super) {
    __extends(Mama, _super);
    function Mama(nome, cognome, cassa, interessi) {
        var _this = _super.call(this, nome, cognome, cassa) || this;
        _this.interessi = interessi;
        return _this;
    }
    Mama.prototype.addInterest = function (interessi) {
        return;
    };
    return Mama;
}(SonAccount));
var Mamma = new Mama("Silvia", "Naimo", 150, 10);
console.log(Mamma.oneDeposit(2000));
