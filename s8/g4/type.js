"use strict";
class User {
    constructor(carica, nChiamate) {
        this.carica = carica;
        this.nChiamate = nChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        this.nChiamate = this.nChiamate += 1;
        this.carica -= (minutiDurata * 0.20);
    }
    numbero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.nChiamate;
    }
    azzeraChiamate() {
        this.nChiamate = 0;
    }
}
class UVodafone extends User {
    constructor(carica, nChiamate) {
        super(carica, nChiamate);
    }
    chiamata(minutiDurata) {
        this.nChiamate = this.nChiamate += 1;
        this.carica -= (minutiDurata * 0.30);
    }
}
class UTim extends User {
    constructor(carica, nChiamate) {
        super(carica, nChiamate);
    }
    chiamata(minutiDurata) {
        this.nChiamate = this.nChiamate += 1;
        this.carica -= (minutiDurata * 0.25);
    }
}
class UCapitanMike extends User {
    constructor(carica, nChiamate) {
        super(carica, nChiamate);
    }
    chiamata(minutiDurata) {
        this.nChiamate = this.nChiamate += 1;
        this.carica -= (minutiDurata * 1);
    }
}
let paperino = new UVodafone(30, 5);
console.log(paperino);
paperino.ricarica(5);
console.log(paperino);
paperino.chiamata(20);
console.log(paperino);
let topolino = new UTim(30, 5);
console.log(topolino);
topolino.ricarica(5);
console.log(topolino);
topolino.chiamata(20);
console.log(topolino);
let pippo = new UCapitanMike(30, 5);
console.log(pippo);
pippo.ricarica(5);
console.log(pippo);
pippo.chiamata(20);
console.log(pippo);
