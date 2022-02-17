function tasto (pippo) {
    document.getElementById("display").value += pippo;
}

function cancel(){
    document.getElementById("display").value ="";
}

function totale(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}