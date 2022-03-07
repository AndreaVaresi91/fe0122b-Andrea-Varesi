let bottone = document.querySelector(".bottone");


bottone.addEventListener("click", function (e) {
    e.preventDefault();
    let arr = document.querySelectorAll(".pippo")

    arr.forEach(elemento => {
        let valore = elemento.value
        if (valore == "") {
            elemento.style.border = "1px solid red";

        } else {
            elemento.style.border = "";


        }
    });
});


