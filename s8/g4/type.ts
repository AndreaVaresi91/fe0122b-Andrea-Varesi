interface Smartphone {
    carica: number,
    nChiamate: number,

    ricarica(unaRicarica: any): void 
    chiamata(minutiDurata: any): void
    numbero404(): number 
    getNumeroChiamate(): number
    azzeraChiamate(): void

}

class User implements Smartphone {
    carica: number;
    nChiamate: number;

    constructor(carica: number, nChiamate: number) {
        this.carica = carica;
        this.nChiamate = nChiamate;
    }

    public ricarica(unaRicarica: any): void { // void non vuole return
        this.carica += unaRicarica
    }

    public chiamata(minutiDurata: any): void {
        this.nChiamate = this.nChiamate += 1;
        this.carica -= (minutiDurata * 0.20);

    }

    public numbero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.nChiamate;
    }

    public azzeraChiamate(): void {

        this.nChiamate = 0

    }

}










class UVodafone extends User {


    constructor(carica: number, nChiamate: number) {
        super(carica, nChiamate)
    }
    public chiamata(minutiDurata: any): void {
        this.nChiamate = this.nChiamate += 1;
        this.carica -= (minutiDurata * 0.30);

    }
}


class UTim extends User {


    constructor(carica: number, nChiamate: number) {
        super(carica, nChiamate)
    }
    public chiamata(minutiDurata: any): void {
        this.nChiamate = this.nChiamate += 1;
        this.carica -= (minutiDurata * 0.25);

    }
}


class UCapitanMike extends User {


    constructor(carica: number, nChiamate: number) {
        super(carica, nChiamate)
    }
    public chiamata(minutiDurata: any): void {
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
