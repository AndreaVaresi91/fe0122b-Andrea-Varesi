var budget = 1000;
document.getElementById("bdg").innerHTML = "totale" + " " + budget;

function casuale(){
    return Math.floor(Math.random() *100);
}



while (budget > 50) { 
        var buy = casuale();
        document.getElementById("spesa").innerHTML += budget + " " + "spesa" + " " + buy + "<br>";
        budget -= buy
        var x = 0;
        if (x == 0){

        if ( budget <=549 && budget >=450){
            document.getElementById("spesa").innerHTML += budget + " " + "spesa" + " " + buy + " " + "HAI DIMEZZATO IL BUDGET" + "<br>";
            x++;
        }
        }
        if (budget >=50 && budget <= 100){
            document.getElementById("spesa").innerHTML += budget + " " + "spesa" + " " + buy + " " + "FAI BENZINA E TORNA A CASA" + "<br>";
        }
            
       
}


var numero = 0 ;
while(numero < 10){ console.log(numero) ; numero++;}
