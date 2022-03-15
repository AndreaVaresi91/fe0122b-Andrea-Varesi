class SonAccount {
    nome:string;
    cognome:string;
   
    cassa:number = 0;

    constructor (nome:string, cognome:string, cassa:number){
        this.nome = nome;
        this.cognome = cognome;
        this.cassa = cassa
        
    };

    oneDeposit(versamento: number):number{ //versamento
      
        return this.cassa += versamento
        
    }

    oneWithDraw(prelievo: number):number{ //prelievo
        
        return this.cassa -= prelievo;
    }
    

}

let Figlio:SonAccount = new SonAccount("Andrea", "Varesi", 5);
console.log(Figlio);


console.log(Figlio.oneDeposit(1000));
console.log(Figlio.oneWithDraw(150));


class Mama extends SonAccount{
    interessi: number;

    constructor(nome:string, cognome:string, cassa:number, interessi:number){
        super(nome, cognome, cassa)
        this.interessi = interessi
    }

    addInterest(interessi:number): number{
        return 
    }


}

let Mamma:Mama = new Mama ("Silvia", "Naimo", 150, 10);
console.log(Mamma.oneDeposit(2000));

