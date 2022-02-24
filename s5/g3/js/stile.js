

//menu//



function giovanni (){
   let pippo = document.getElementById("navigazione");

   if (pippo.style.visibility == "") {
       pippo.style.visibility = "visible"
    } else {
        pippo.style.visibility = ""
    }
     
}

var btn = document.getElementById("btn").addEventListener( "click", giovanni);  
