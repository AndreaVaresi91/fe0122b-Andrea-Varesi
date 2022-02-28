// Quando il documento è pronto...

    //gestisco il click sul pulsante Iscriviti
    
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 

    $(document).ready(function(){
       $("#iscr-news").click(function(){

             let valore = $("#nome").val();

            if (valore == ""){
                $("#nome").next().text("*richiesto");
            } else { 
             $("#nome").next().text("")};

             let posta = $("#email-1").val();

             if (posta == ""){
                $("#email-1").next().text("*richiesto");
            } else { 
             $("#email-1").next().text("")};

             let postaDue = $("#email-2").val();

             
             if (postaDue == ""){
                $("#email-2").next().text("*richiesto");
            } else { 
             $("#email-2").next().text("")};

             if (posta != postaDue){
                    alert("attenzione le mail non corrispondono")
             };
             

             if (valore + posta + postaDue != ""  && posta == postaDue){
                  alert("Grande ti sei inscritto!")
             };


         });
       
       $("#pulisci-form").click(function(){
        $("#nome, #email-1, #email-2").val("");
        });

});

    