//sottrazione//
function calcolo(anni =100,anniLavoro){
    return anni-anniLavoro;
}
console.log(calcolo(100,30));

//freccia
/*function saluto(){
    return "Ciao vecchio"
}; */

saluto = () => "Ciao vecchio";

alert(saluto());

//funzione inside funzione//

function buonCibo(){
    var tipo= 'pasta';
    

    function mettiInsieme(){
        var condimento = 'pesto';
        
        return tipo + " "+ condimento;}
  
    return mettiInsieme();
    
}

alert(buonCibo());


//opertori//

var num =5;
var num1 =5;

console.log(5 === 5);
console.log(5==5);

var num2= "8";
var num3= 8;

console.log("8"==8);
console.log("8"===8);